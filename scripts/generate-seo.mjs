import {
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = process.cwd();
const manifestPath = join(root, "src", "content", "manifest.json");
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const siteUrl = String(manifest.site.url).replace(/\/$/, "");
const today = new Date().toISOString().slice(0, 10);

function routes() {
  const built = [
    "/",
    ...manifest.entries.map((entry) => entry.path),
    ...manifest.indexRoutes.map((route) => route.path),
    ...manifest.taxonomy.map((topic) => `/topics/${topic.slug}`),
    ...manifest.extraRoutes.map((route) => route.path),
  ];
  return Array.from(new Set(built));
}

function escapeAttribute(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeXml(value) {
  return escapeAttribute(value).replace(/'/g, "&apos;");
}

function topicFor(slug) {
  return manifest.taxonomy.find((topic) => topic.slug === slug);
}

function metaFor(path) {
  const entry = manifest.entries.find((item) => item.path === path);
  if (entry) {
    return {
      title: entry.title,
      description: entry.description,
      schemaType:
        entry.type === "note" || entry.type === "project"
          ? "Article"
          : "CreativeWork",
      updatedAt: entry.updatedAt,
      entry,
    };
  }

  const indexRoute = manifest.indexRoutes.find((item) => item.path === path);
  if (indexRoute) {
    return {
      title: indexRoute.title,
      description: indexRoute.description,
      schemaType: indexRoute.type || "CollectionPage",
      updatedAt: today,
    };
  }

  const topicMatch = path.match(/^\/topics\/([^/]+)$/);
  if (topicMatch) {
    const topic = topicFor(topicMatch[1]);
    if (topic) {
      return {
        title: `${topic.title} — AI Evaluation & Agentic Systems | Jatin Sharma`,
        description: topic.description,
        schemaType: "CollectionPage",
        updatedAt: today,
      };
    }
  }

  const extraRoute = manifest.extraRoutes.find((item) => item.path === path);
  if (extraRoute) {
    return {
      title: extraRoute.title,
      description: extraRoute.description,
      schemaType: extraRoute.type || "WebPage",
      updatedAt: today,
    };
  }

  return {
    title: manifest.site.title,
    description: manifest.site.description,
    schemaType: "WebPage",
    updatedAt: today,
  };
}

function jsonLdFor(path) {
  const meta = metaFor(path);
  const url = `${siteUrl}${path}`;
  const base = {
    "@context": "https://schema.org",
    "@type": meta.schemaType,
    name: meta.title,
    description: meta.description,
    url,
    mainEntityOfPage: url,
    author: {
      "@type": "Person",
      name: manifest.site.name,
      url: siteUrl,
    },
  };

  if (!meta.entry) return base;

  return {
    ...base,
    headline: meta.entry.title,
    datePublished: meta.entry.publishedAt,
    dateModified: meta.entry.updatedAt,
    citation: meta.entry.evidence
      .filter((item) => item.href.startsWith("http"))
      .map((item) => ({
        "@type": "CreativeWork",
        name: item.label,
        url: item.href,
      })),
  };
}

export function writePublicFiles() {
  const publicDir = join(root, "public");
  mkdirSync(publicDir, { recursive: true });

  const robots = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${siteUrl}/sitemap.xml`,
    "",
  ].join("\n");

  const sitemapUrls = routes()
    .map((path) => {
      const meta = metaFor(path);
      return [
        "  <url>",
        `    <loc>${escapeXml(`${siteUrl}${path}`)}</loc>`,
        `    <lastmod>${meta.updatedAt}</lastmod>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    sitemapUrls,
    "</urlset>",
    "",
  ].join("\n");

  writeFileSync(join(publicDir, "robots.txt"), robots, "utf8");
  writeFileSync(join(publicDir, "sitemap.xml"), sitemap, "utf8");
}

export function writeRouteHtml(distDir = join(root, "dist")) {
  if (!existsSync(distDir)) return;

  const templatePath = join(distDir, "index.html");
  const template = readFileSync(templatePath, "utf8");
  const imageUrl = `${siteUrl}${manifest.site.image}`;

  for (const path of routes()) {
    const meta = metaFor(path);
    const canonical = `${siteUrl}${path}`;
    const jsonLd = JSON.stringify(jsonLdFor(path)).replace(/</g, "\\u003c");

    let html = template
      .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttribute(meta.title)}</title>`)
      .replace(
        /<meta\s+name="description"[\s\S]*?\/>/,
        `<meta name="description" content="${escapeAttribute(meta.description)}" />`,
      )
      .replace(
        /<link\s+rel="canonical"[\s\S]*?\/>/,
        `<link rel="canonical" href="${escapeAttribute(canonical)}" />`,
      )
      .replace(
        /<meta\s+property="og:type"[\s\S]*?\/>/,
        `<meta property="og:type" content="${meta.schemaType === "Article" ? "article" : "website"}" />`,
      )
      .replace(
        /<meta\s+property="og:title"[\s\S]*?\/>/,
        `<meta property="og:title" content="${escapeAttribute(meta.title)}" />`,
      )
      .replace(
        /<meta\s+property="og:description"[\s\S]*?\/>/,
        `<meta property="og:description" content="${escapeAttribute(meta.description)}" />`,
      )
      .replace(
        /<meta\s+property="og:url"[\s\S]*?\/>/,
        `<meta property="og:url" content="${escapeAttribute(canonical)}" />`,
      )
      .replace(
        /<meta\s+property="og:image"[\s\S]*?\/>/,
        `<meta property="og:image" content="${escapeAttribute(imageUrl)}" />`,
      )
      .replace(
        /<meta\s+name="twitter:card"[\s\S]*?\/>/,
        '<meta name="twitter:card" content="summary_large_image" />',
      )
      .replace(
        /<meta\s+name="twitter:title"[\s\S]*?\/>/,
        `<meta name="twitter:title" content="${escapeAttribute(meta.title)}" />`,
      )
      .replace(
        /<meta\s+name="twitter:description"[\s\S]*?\/>/,
        `<meta name="twitter:description" content="${escapeAttribute(meta.description)}" />`,
      )
      .replace(
        /<meta\s+name="twitter:image"[\s\S]*?\/>/,
        `<meta name="twitter:image" content="${escapeAttribute(imageUrl)}" />`,
      );

    const staticContent = `<noscript><h1>${escapeAttribute(meta.title)}</h1><p>${escapeAttribute(meta.description)}</p></noscript>`;
    html = html
      .replace("</head>", `    <script id="seo-json-ld" type="application/ld+json">${jsonLd}</script>\n  </head>`)
      .replace('<div id="root"></div>', `${staticContent}<div id="root"></div>`);

    const outputPath =
      path === "/"
        ? join(distDir, "index.html")
        : join(distDir, `${path.replace(/^\//, "")}.html`);
    mkdirSync(dirname(outputPath), { recursive: true });
    writeFileSync(outputPath, html, "utf8");
  }
}

const invokedPath = process.argv[1] ? fileURLToPath(import.meta.url) : null;
const invokedFile = process.argv[1] ? join(process.argv[1]) : null;

if (invokedPath && invokedFile && invokedPath === invokedFile) {
  writePublicFiles();
  writeRouteHtml();
}
