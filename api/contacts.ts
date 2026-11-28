import { createHash, randomUUID, timingSafeEqual } from "node:crypto";
import { promises as fs } from "node:fs";
import { dirname, resolve } from "node:path";
import type { IncomingMessage, ServerResponse } from "node:http";
import {
  BlobPreconditionFailedError,
  get as getBlob,
  put as putBlob,
} from "@vercel/blob";

type RequestLike = IncomingMessage & { body?: unknown };
type ResponseLike = ServerResponse;

type ContactRecord = {
  id: string;
  received_at: string;
  source: string;
  status: "discovered";
  scope: { client_id: string; company_id: string };
  contact: { name: string; email: string; company: string; role: string };
  message: string;
  consent: { submitted: boolean; source: string };
};

type ContactStore = {
  schema_version: 1;
  records: ContactRecord[];
};

const MAX_BODY_BYTES = 16_000;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT = 5;
const requestWindows = new Map<string, number[]>();

type ContactTarget =
  | { kind: "file"; path: string }
  | { kind: "blob"; pathname: string };

function contactsTarget(): ContactTarget {
  const configured = process.env.PORTFOLIO_CONTACTS_FILE;
  if (configured?.startsWith("blob:")) {
    return {
      kind: "blob",
      pathname: configured.slice("blob:".length).replace(/^\/+/, ""),
    };
  }
  if (configured) return { kind: "file", path: resolve(configured) };
  if (process.env.VERCEL) {
    return { kind: "file", path: resolve("/tmp/inbound-contacts.json") };
  }
  return {
    kind: "file",
    path: resolve(process.cwd(), "data", "inbound-contacts.json"),
  };
}

function send(res: ResponseLike, status: number, body: unknown): void {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(body));
}

function safeEqual(supplied: string, expected: string): boolean {
  const a = Buffer.from(supplied);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

function clientKey(req: RequestLike): string {
  const forwarded = req.headers["x-forwarded-for"];
  const value = Array.isArray(forwarded)
    ? forwarded[0] ?? "anonymous"
    : forwarded?.split(",")[0]?.trim() || "anonymous";
  return createHash("sha256").update(value).digest("hex").slice(0, 24);
}

function rateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (requestWindows.get(key) ?? []).filter(
    (timestamp) => now - timestamp < RATE_WINDOW_MS,
  );
  if (recent.length >= RATE_LIMIT) {
    requestWindows.set(key, recent);
    return true;
  }
  recent.push(now);
  requestWindows.set(key, recent);
  return false;
}

function text(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

async function readBody(req: RequestLike): Promise<unknown> {
  if (req.body !== undefined) return req.body;
  const chunks: Buffer[] = [];
  for await (const chunk of req) chunks.push(Buffer.from(chunk));
  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
}

function emptyStore(): ContactStore {
  return { schema_version: 1, records: [] };
}

function normalizeStore(parsed: unknown): ContactStore {
  if (
    !parsed ||
    typeof parsed !== "object" ||
    !Array.isArray((parsed as ContactStore).records)
  ) {
    throw new Error("invalid contact store");
  }
  return {
    schema_version: 1,
    records: (parsed as ContactStore).records,
  };
}

async function readFileStore(filePath: string): Promise<ContactStore> {
  try {
    return normalizeStore(JSON.parse(await fs.readFile(filePath, "utf8")));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return emptyStore();
    }
    throw error;
  }
}

type BlobStoreSnapshot = { store: ContactStore; etag?: string };

async function readBlobStore(pathname: string): Promise<BlobStoreSnapshot> {
  const result = await getBlob(pathname, { access: "private" });
  if (!result || result.statusCode !== 200 || !result.stream) {
    return { store: emptyStore() };
  }
  const raw = await new Response(result.stream).text();
  return {
    store: normalizeStore(JSON.parse(raw)),
    etag: result.blob.etag,
  };
}

async function readStore(target: ContactTarget): Promise<ContactStore> {
  if (target.kind === "blob") return (await readBlobStore(target.pathname)).store;
  return readFileStore(target.path);
}

async function appendFileRecord(
  filePath: string,
  record: ContactRecord,
): Promise<void> {
  const store = await readFileStore(filePath);
  store.records.push(record);
  await fs.mkdir(dirname(filePath), { recursive: true });
  const tempPath = `${filePath}.${randomUUID()}.tmp`;
  try {
    await fs.writeFile(tempPath, `${JSON.stringify(store, null, 2)}\n`, {
      encoding: "utf8",
      mode: 0o600,
    });
    await fs.rename(tempPath, filePath);
  } catch (error) {
    await fs.unlink(tempPath).catch(() => undefined);
    throw error;
  }
}

async function appendBlobRecord(
  pathname: string,
  record: ContactRecord,
): Promise<void> {
  for (let attempt = 0; attempt < 5; attempt += 1) {
    const snapshot = await readBlobStore(pathname);
    const store = snapshot.store;
    store.records.push(record);
    try {
      await putBlob(pathname, `${JSON.stringify(store, null, 2)}\n`, {
        access: "private",
        contentType: "application/json; charset=utf-8",
        cacheControlMaxAge: 60,
        addRandomSuffix: false,
        allowOverwrite: true,
        ...(snapshot.etag ? { ifMatch: snapshot.etag } : {}),
      });
      return;
    } catch (error) {
      if (error instanceof BlobPreconditionFailedError && attempt < 4) {
        continue;
      }
      throw error;
    }
  }
}

async function appendRecord(
  target: ContactTarget,
  record: ContactRecord,
): Promise<void> {
  if (target.kind === "blob") return appendBlobRecord(target.pathname, record);
  return appendFileRecord(target.path, record);
}

export default async function handler(req: RequestLike, res: ResponseLike) {
  const method = req.method?.toUpperCase();

  if (method === "GET") {
    const expected = process.env.PORTFOLIO_CONTACTS_EXPORT_TOKEN;
    if (!expected) {
      send(res, 503, { error: "Structured export is not configured." });
      return;
    }
    const supplied = req.headers["x-portfolio-export-token"];
    if (typeof supplied !== "string" || !safeEqual(supplied, expected)) {
      send(res, 401, { error: "Export token rejected." });
      return;
    }
    try {
      send(res, 200, await readStore(contactsTarget()));
    } catch {
      send(res, 500, { error: "Structured export unavailable." });
    }
    return;
  }

  if (method !== "POST") {
    res.setHeader("Allow", "GET, POST");
    send(res, 405, { error: "Method not allowed." });
    return;
  }

  const declaredLength = Number(req.headers["content-length"] ?? 0);
  if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
    send(res, 413, { error: "Submission is too large." });
    return;
  }

  if (rateLimited(clientKey(req))) {
    send(res, 429, { error: "Too many submissions. Try again later." });
    return;
  }

  let payload: unknown;
  try {
    payload = await readBody(req);
  } catch {
    send(res, 400, { error: "Submission must be valid JSON." });
    return;
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    send(res, 400, { error: "Submission must be an object." });
    return;
  }

  const input = payload as Record<string, unknown>;
  const name = text(input.name, 120);
  const email = text(input.email, 254);
  const message = text(input.message, 4000);
  const company = text(input.company, 120);
  const role = text(input.role, 120);
  const honeypot = text(input.company_website, 200);

  if (honeypot) {
    send(res, 202, { ok: true });
    return;
  }

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message) {
    send(res, 400, {
      error: "Name, a valid email address, and a message are required.",
    });
    return;
  }

  const record: ContactRecord = {
    id: `inb_${randomUUID()}`,
    received_at: new Date().toISOString(),
    source: "portfolio-contact-form",
    status: "discovered",
    scope: { client_id: "portfolio", company_id: "portfolio-inbound" },
    contact: { name, email, company, role },
    message,
    consent: { submitted: true, source: "portfolio-contact-form" },
  };

  try {
    await appendRecord(contactsTarget(), record);
  } catch {
    send(res, 500, { error: "Submission could not be recorded." });
    return;
  }

  send(res, 201, {
    ok: true,
    id: record.id,
    received_at: record.received_at,
    status: record.status,
  });
}
