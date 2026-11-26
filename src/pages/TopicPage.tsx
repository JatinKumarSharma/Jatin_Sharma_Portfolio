import { Link, useParams } from "react-router-dom";
import Container from "../components/ui/Container";
import Navbar from "../components/layout/Navbar";
import { getEntriesByCluster, getTopic } from "../content";

export default function TopicPage() {
  const { cluster = "" } = useParams();
  const topic = getTopic(cluster);
  const entries = getEntriesByCluster(cluster);

  if (!topic) {
    return (
      <>
        <Navbar />
        <Container>
          <div className="py-40 text-center">
            <h1 className="font-display text-4xl text-foreground">
              Topic not found
            </h1>
          </div>
        </Container>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="border-t border-border/40 py-24 lg:py-32">
        <Container>
          <div className="mb-14 max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold tracking-[0.16em] text-accent">
                TOPIC
              </span>
            </div>

            <h1 className="font-display text-4xl font-medium leading-[1.12] tracking-[-0.035em] text-foreground md:text-6xl">
              {topic.title}
            </h1>
            <p className="mt-6 text-lg leading-[1.7] text-muted">
              {topic.description}
            </p>
          </div>

          <div className="border-t border-border/60">
            {entries.map((entry) => (
              <Link
                key={entry.path}
                to={entry.path}
                className="group grid gap-4 border-b border-border/60 py-8 transition-colors hover:bg-surface md:grid-cols-[140px_minmax(0,1fr)_40px] md:items-center"
              >
                <span className="text-[10px] font-semibold tracking-[0.14em] text-accent">
                  {entry.type.toUpperCase()}
                </span>
                <div>
                  <h2 className="font-display text-xl font-medium text-foreground">
                    {entry.title}
                  </h2>
                  <p className="mt-2 text-sm leading-[1.7] text-muted">
                    {entry.description}
                  </p>
                </div>
                <span className="text-lg text-subtle transition-all group-hover:translate-x-1 group-hover:text-accent">
                  →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/topics"
              className="group inline-flex items-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              All topics
              <span className="transition-transform group-hover:-translate-x-1">
                ←
              </span>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
