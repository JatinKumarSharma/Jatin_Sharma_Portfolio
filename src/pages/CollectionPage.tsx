import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import Navbar from "../components/layout/Navbar";
import {
  getEntriesByType,
  getRouteMeta,
  taxonomy,
  type EntryType,
} from "../content";

interface CollectionCard {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
}

function cardsFor(kind: string): CollectionCard[] {
  if (kind === "topics") {
    return taxonomy.map((topic) => ({
      path: `/topics/${topic.slug}`,
      eyebrow: "TOPIC",
      title: topic.title,
      description: topic.description,
    }));
  }

  const type: EntryType =
    kind === "writing" || kind === "notes"
      ? "note"
      : (kind.slice(0, -1) as EntryType);

  return getEntriesByType(type).map((entry) => ({
    path: entry.path,
    eyebrow: entry.type.toUpperCase(),
    title: entry.title,
    description: entry.description,
  }));
}

export default function CollectionPage({
  path,
  kind,
}: {
  path: string;
  kind: string;
}) {
  const meta = getRouteMeta(path);
  const cards = cardsFor(kind);

  return (
    <>
      <Navbar />

      <section className="border-t border-border/40 py-24 lg:py-32">
        <Container>
          <div className="mb-14 max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold tracking-[0.16em] text-accent">
                {kind.toUpperCase()}
              </span>
            </div>

            <h1 className="font-display text-4xl font-medium leading-[1.12] tracking-[-0.035em] text-foreground md:text-6xl">
              {meta.title.replace(" | Jatin Sharma", "")}
            </h1>
            <p className="mt-6 text-lg leading-[1.7] text-muted">
              {meta.description}
            </p>
          </div>

          <div className="grid border-t border-border/60 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <Link
                key={card.path}
                to={card.path}
                className="group flex min-h-[260px] flex-col justify-between border-b border-border/60 p-7 transition-colors hover:bg-surface md:border-r"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[10px] font-semibold tracking-[0.14em] text-accent">
                    {card.eyebrow}
                  </span>
                  <span className="text-lg text-subtle transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent">
                    ↗
                  </span>
                </div>

                <div className="my-8">
                  <h2 className="font-display text-xl font-medium leading-[1.3] text-foreground">
                    {card.title}
                  </h2>
                  <p className="mt-3 text-sm leading-[1.7] text-muted">
                    {card.description}
                  </p>
                </div>

                <span className="text-[11px] tracking-[0.08em] text-subtle">
                  READ MORE →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
