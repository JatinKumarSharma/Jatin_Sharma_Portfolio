import { useEffect } from "react";
import { buildJsonLd, getRouteMeta, site } from "../../content";

function upsertMeta(attribute: "name" | "property", key: string, content: string) {
  const selector = `meta[${attribute}="${key}"]`;
  const existing = Array.from(document.head.querySelectorAll(selector));

  existing.forEach((element, index) => {
    if (index === 0) {
      element.setAttribute("content", content);
    } else {
      element.remove();
    }
  });

  if (existing.length === 0) {
    const element = document.createElement("meta");
    element.setAttribute(attribute, key);
    element.setAttribute("content", content);
    document.head.appendChild(element);
  }
}

function upsertCanonical(href: string) {
  const selector = 'link[rel="canonical"]';
  const existing = Array.from(document.head.querySelectorAll(selector));

  existing.forEach((element, index) => {
    if (index === 0) {
      element.setAttribute("href", href);
    } else {
      element.remove();
    }
  });

  if (existing.length === 0) {
    const element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    element.setAttribute("href", href);
    document.head.appendChild(element);
  }
}

function upsertJsonLd(data: Record<string, unknown>) {
  const selector = 'script[id="seo-json-ld"]';
  const existing = Array.from(document.head.querySelectorAll(selector));

  existing.forEach((element, index) => {
    if (index === 0) {
      element.textContent = JSON.stringify(data);
    } else {
      element.remove();
    }
  });

  if (existing.length === 0) {
    const element = document.createElement("script");
    element.id = "seo-json-ld";
    element.type = "application/ld+json";
    element.textContent = JSON.stringify(data);
    document.head.appendChild(element);
  }
}

export default function SeoHead({ path }: { path: string }) {
  useEffect(() => {
    const meta = getRouteMeta(path);
    const url = `${site.url}${meta.path}`;
    const image = `${site.url}${site.image}`;
    const isArticle = meta.schemaType === "Article";

    document.title = meta.title;

    upsertMeta("name", "description", meta.description);
    upsertMeta("name", "robots", "index, follow");
    upsertMeta("property", "og:type", isArticle ? "article" : "website");
    upsertMeta("property", "og:title", meta.title);
    upsertMeta("property", "og:description", meta.description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", image);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", meta.title);
    upsertMeta("name", "twitter:description", meta.description);
    upsertMeta("name", "twitter:image", image);
    upsertCanonical(url);
    upsertJsonLd(buildJsonLd(path));
  }, [path]);

  return null;
}
