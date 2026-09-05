import Container from "../ui/Container";

const articles = [
  {
    category: "REPRESENTATION",
    title: "How AI Recognizes Objects and Concepts",
    description:
      "Exploring how meaningful representations allow intelligent systems to understand similarity, generalize knowledge and reason about the world.",
    topic: "Embeddings · Semantic Search · Retrieval",
    link: "https://www.linkedin.com/posts/jatin-sharma-ai-engineer_artificialintelligence-aiengineering-agenticai-activity-7487116203203923968-RcPn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1KcC4B53btQvFH__LDRQizIyaT_gKbyks",
  },
  {
    category: "CAUSAL REASONING",
    title: "The Dangers of Treating Symptoms, Not Causes",
    description:
      "Why recognizing patterns is not enough, and how understanding causes can help intelligent systems make better decisions.",
    topic: "Reasoning · Decision Making · Root Cause Analysis",
    link: "https://www.linkedin.com/posts/jatin-sharma-ai-engineer_artificialintelligence-aiengineering-agenticai-activity-7484998768619216896-c2RC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1KcC4B53btQvFH__LDRQizIyaT_gKbyks",
  },
  {
    category: "EMERGENCE",
    title: "Emergence in AI: New Abilities Emerge from Predictive Models",
    description:
      "Exploring how complex capabilities can arise when systems learn patterns and relationships at sufficient scale.",
    topic: "LLMs · Emergence · Intelligent Systems",
    link: "https://www.linkedin.com/posts/jatin-sharma-ai-engineer_artificialintelligence-generativeai-llm-activity-7484263991582720000-L4V5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1KcC4B53btQvFH__LDRQizIyaT_gKbyks",
  },
];

function Writing() {
  return (
    <section
      id="writing"
      className="relative overflow-hidden border-t border-border/40 py-28 lg:py-36"
    >
      <Container>
        {/* Section Header */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />

              <span className="text-xs font-semibold tracking-[0.16em] text-accent">
                WRITING
              </span>
            </div>

            <h2 className="max-w-2xl font-display text-4xl font-medium leading-[1.15] tracking-[-0.03em] text-foreground md:text-5xl">
              Ideas worth
              <br />
              thinking about.
            </h2>
          </div>

          <p className="max-w-sm text-[15px] leading-[1.65] text-muted">
            Thoughts and observations from exploring intelligence, AI systems
            and the ideas shaping how machines learn and reason.
          </p>
        </div>

        {/* Articles */}
        <div className="grid border-t border-border/60 md:grid-cols-3">
          {articles.map((article, index) => (
            <a
              key={article.title}
              href={article.link}
              target="_blank"
              rel="noreferrer"
              className={`group relative flex min-h-[380px] flex-col justify-between border-b border-border/60 p-7 transition-all duration-300 hover:bg-surface md:p-9 ${
                index !== articles.length - 1 ? "md:border-r" : ""
              }`}
            >
              {/* Category + Arrow */}
              <div className="flex items-start justify-between">
                <span className="text-[10px] font-semibold tracking-[0.14em] text-accent">
                  {article.category}
                </span>

                <span className="text-lg text-subtle transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent">
                  ↗
                </span>
              </div>

              {/* Main Content */}
              <div className="my-10">
                <h3 className="font-display text-2xl font-medium leading-[1.3] tracking-[-0.02em] text-foreground">
                  {article.title}
                </h3>

                <p className="mt-4 text-sm leading-[1.7] text-muted">
                  {article.description}
                </p>
              </div>

              {/* Bottom */}
              <div className="border-t border-border/50 pt-5">
                <span className="text-[11px] tracking-[0.08em] text-subtle">
                  {article.topic}
                </span>

                <div className="mt-3 flex items-center gap-2 text-xs font-medium text-muted transition-colors group-hover:text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  READ ON LINKEDIN →
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* More Writing */}
        <div className="mt-10">
          <a
            href="https://www.linkedin.com/in/jatin-sharma-ai-engineer/recent-activity/all/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            Explore more ideas on LinkedIn

            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}

export default Writing;