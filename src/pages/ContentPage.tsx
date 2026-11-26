import { Link, useParams } from "react-router-dom";
import type { ReactNode } from "react";
import Container from "../components/ui/Container";
import Navbar from "../components/layout/Navbar";
import {
  getEntry,
  getRelated,
  getTopic,
  type Block,
  type EntryType,
  type EvidenceItem,
} from "../content";

function EvidenceLink({ item }: { item: EvidenceItem }) {
  if (item.href.startsWith("/")) {
    return (
      <Link
        to={item.href}
        className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {item.label}
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </Link>
    );
  }

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {item.label}
      <span className="transition-transform group-hover:translate-x-1">↗</span>
    </a>
  );
}

function BlockContent({ block }: { block: Block }): ReactNode {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="font-display text-2xl font-medium tracking-[-0.02em] text-foreground">
          {block.text}
        </h2>
      );
    case "quote":
      return (
        <blockquote className="border-l-2 border-accent pl-5 font-display text-xl italic leading-[1.5] text-foreground">
          {block.text}
        </blockquote>
      );
    case "list":
      return (
        <ul className="space-y-3 border-l border-border/60 pl-6">
          {block.items.map((item) => (
            <li key={item} className="text-[15px] leading-[1.7] text-muted">
              {item}
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div className="border border-accent/25 bg-accent/5 p-6">
          <p className="font-display text-lg leading-[1.5] text-foreground">
            {block.text}
          </p>
        </div>
      );
    case "paragraph":
    default:
      return <p className="text-[15px] leading-[1.8] text-muted">{block.text}</p>;
  }
}

export default function ContentPage({ type }: { type: EntryType }) {
  const { slug } = useParams();
  const path = `/${type}s/${slug ?? ""}`;
  const entry = getEntry(path);

  if (!entry) {
    return (
      <>
        <Navbar />
        <Container>
          <div className="py-40 text-center">
            <h1 className="font-display text-4xl text-foreground">
              Content not found
            </h1>
          </div>
        </Container>
      </>
    );
  }

  const related = getRelated(entry);
  const clusters = entry.clusters
    .map((cluster) => getTopic(cluster))
    .filter(Boolean);

  return (
    <>
      <Navbar />

      <article className="border-t border-border/40 py-24 lg:py-32">
        <Container>
          <div className="mb-10 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold tracking-[0.16em] text-accent">
              {entry.type.toUpperCase()}
            </span>
          </div>

          <header className="max-w-4xl">
            <h1 className="font-display text-4xl font-medium leading-[1.12] tracking-[-0.035em] text-foreground md:text-6xl">
              {entry.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-[1.7] text-muted">
              {entry.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs tracking-[0.08em] text-subtle">
              <span>UPDATED {entry.updatedAt}</span>
              <span>·</span>
              <span>AI ENGINEER (DATA &amp; EVALUATION)</span>
            </div>
          </header>

          <div className="mt-16 grid gap-16 lg:grid-cols-[minmax(0,1fr)_280px]">
            <div className="max-w-3xl space-y-8">
              {entry.body.map((block, index) => (
                <BlockContent key={`${block.type}-${index}`} block={block} />
              ))}
            </div>

            <aside className="space-y-10">
              <div>
                <h2 className="mb-4 text-[10px] font-semibold tracking-[0.14em] text-subtle">
                  TOPICS
                </h2>
                <div className="flex flex-wrap gap-2">
                  {clusters.map((topic) => (
                    <Link
                      key={topic?.slug}
                      to={`/topics/${topic?.slug}`}
                      className="rounded-full border border-border/60 px-3 py-1 text-xs text-muted transition-colors hover:border-accent/40 hover:text-accent"
                    >
                      {topic?.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-[10px] font-semibold tracking-[0.14em] text-subtle">
                  EVIDENCE
                </h2>
                <div className="space-y-3">
                  {entry.evidence.map((item) => (
                    <EvidenceLink key={`${item.label}-${item.href}`} item={item} />
                  ))}
                </div>
              </div>

              {related.length > 0 && (
                <div>
                  <h2 className="mb-4 text-[10px] font-semibold tracking-[0.14em] text-subtle">
                    RELATED
                  </h2>
                  <div className="space-y-3">
                    {related.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block text-sm leading-[1.5] text-muted transition-colors hover:text-accent"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>

          <div className="mt-20 border-t border-border/60 pt-8">
            <Link
              to="/writing"
              className="group inline-flex items-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              Back to all writing
              <span className="transition-transform group-hover:-translate-x-1">
                ←
              </span>
            </Link>
          </div>
        </Container>
      </article>
    </>
  );
}
