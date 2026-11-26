import rawManifest from "./manifest.json";

export type EntryType = "project" | "method" | "note" | "artifact" | "topic";

export type Block =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; text: string };

export interface EvidenceItem {
  label: string;
  href: string;
}

export interface Entry {
  path: string;
  slug: string;
  type: EntryType;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  clusters: string[];
  related: string[];
  evidence: EvidenceItem[];
  body: Block[];
}

interface IndexRoute {
  path: string;
  title: string;
  description: string;
  type: string;
}

interface ExtraRoute {
  path: string;
  title: string;
  description: string;
  type: string;
}

export const site = rawManifest.site;
export const taxonomy = rawManifest.taxonomy;
export const indexRoutes = rawManifest.indexRoutes as IndexRoute[];
export const extraRoutes = rawManifest.extraRoutes as ExtraRoute[];
export const entries = rawManifest.entries as unknown as Entry[];

export function getEntry(path: string): Entry | undefined {
  return entries.find((entry) => entry.path === path);
}

export function getEntriesByType(type: EntryType): Entry[] {
  return entries.filter((entry) => entry.type === type);
}

export function getEntriesByCluster(cluster: string): Entry[] {
  return entries.filter((entry) => entry.clusters.includes(cluster));
}

export function getTopic(cluster: string) {
  return taxonomy.find((item) => item.slug === cluster);
}

export function getRelated(entry: Entry): Entry[] {
  return entry.related
    .map((path) => getEntry(path))
    .filter((item): item is Entry => Boolean(item));
}

export interface RouteMeta {
  title: string;
  description: string;
  path: string;
  schemaType: string;
}

export function getRouteMeta(path: string): RouteMeta {
  const entry = getEntry(path);
  if (entry) {
    return {
      title: entry.title,
      description: entry.description,
      path: entry.path,
      schemaType:
        entry.type === "note" || entry.type === "project"
          ? "Article"
          : "CreativeWork",
    };
  }

  const indexRoute = indexRoutes.find((route) => route.path === path);
  if (indexRoute) {
    return {
      title: indexRoute.title,
      description: indexRoute.description,
      path: indexRoute.path,
      schemaType: indexRoute.type || "CollectionPage",
    };
  }

  const topicMatch = path.match(/^\/topics\/([^/]+)$/);
  if (topicMatch) {
    const topic = getTopic(topicMatch[1]);
    if (topic) {
      return {
        title: `${topic.title} — AI Evaluation & Agentic Systems | Jatin Sharma`,
        description: topic.description,
        path,
        schemaType: "CollectionPage",
      };
    }
  }

  const extraRoute = extraRoutes.find((route) => route.path === path);
  if (extraRoute) {
    return {
      title: extraRoute.title,
      description: extraRoute.description,
      path: extraRoute.path,
      schemaType: extraRoute.type || "WebPage",
    };
  }

  return {
    title: site.title,
    description: site.description,
    path: "/",
    schemaType: "WebPage",
  };
}

export function buildJsonLd(path: string): Record<string, unknown> {
  const meta = getRouteMeta(path);
  const entry = getEntry(path);
  const url = `${site.url}${meta.path}`;

  const base = {
    "@context": "https://schema.org",
    "@type": meta.schemaType,
    name: meta.title,
    description: meta.description,
    url,
    mainEntityOfPage: url,
    author: {
      "@type": "Person",
      name: site.name,
      url: site.url,
    },
  };

  if (entry) {
    return {
      ...base,
      headline: entry.title,
      datePublished: entry.publishedAt,
      dateModified: entry.updatedAt,
      about: entry.clusters
        .map((cluster) => getTopic(cluster))
        .filter(Boolean)
        .map((topic) => ({
          "@type": "Thing",
          name: topic?.title,
          description: topic?.description,
        })),
      citation: entry.evidence
        .filter((item) => item.href.startsWith("http"))
        .map((item) => ({
          "@type": "CreativeWork",
          name: item.label,
          url: item.href,
        })),
    };
  }

  return base;
}

export function allSeoPaths(): string[] {
  return Array.from(
    new Set([
      "/",
      ...entries.map((entry) => entry.path),
      ...indexRoutes.map((route) => route.path),
      ...taxonomy.map((topic) => `/topics/${topic.slug}`),
      ...extraRoutes.map((route) => route.path),
    ]),
  );
}
