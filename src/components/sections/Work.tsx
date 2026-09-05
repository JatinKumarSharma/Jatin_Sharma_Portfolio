import Container from "../ui/Container";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "01",

    type: "AI APPLICATION",

    title: "Financial Analyst Agent",

    description:
      "An AI-powered financial analysis system designed to retrieve company information and provide structured financial insights through an API.",

    stack: ["Python", "Financial APIs", "FastAPI", "Data Analysis"],

    // Live deployed application
    link: "https://financial-analyst-api-fw98.onrender.com/docs",

    // GitHub repository
    github: "https://github.com/JatinKumarSharma/Agentic_AI_Projects",

    // Internal case study route
    caseStudy: "/case-study/financial-analyst-agent",
  },
];

function Work() {
  const openProject = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="work"
      className="relative overflow-hidden border-t border-border/40 py-28 lg:py-36"
    >
      <Container>
        {/* Section Header */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />

              <span className="text-xs font-semibold tracking-[0.16em] text-accent">
                SELECTED WORK
              </span>
            </div>

            <h2 className="max-w-2xl font-display text-4xl font-medium leading-[1.15] tracking-[-0.03em] text-foreground md:text-5xl">
              Building systems,
              <br />
              not just interfaces.
            </h2>
          </div>

          <p className="max-w-sm text-[15px] leading-[1.65] text-muted">
            A growing collection of projects exploring AI systems, intelligent
            applications and real-world problem solving.
          </p>
        </div>

        {/* Featured Project */}
        {projects.map((project) => (
          <div
            key={project.id}
            role="link"
            tabIndex={0}
            onClick={() => openProject(project.link)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                openProject(project.link);
              }
            }}
            className="group relative block min-h-[400px] cursor-pointer overflow-hidden rounded-xl border border-border/70 bg-surface transition-all duration-300 hover:border-accent/60"
          >
            {/* Subtle hover glow */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative flex min-h-[400px] flex-col justify-between p-8 md:p-12">
              {/* Top Row */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <span className="font-display text-sm tracking-[0.12em] text-subtle">
                    {project.id}
                  </span>

                  <span className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-[10px] font-semibold tracking-[0.12em] text-accent">
                    {project.type}
                  </span>

                  <span className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.12em] text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    LIVE
                  </span>
                </div>

                <span className="text-2xl text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent">
                  ↗
                </span>
              </div>

              {/* Project Content */}
              <div className="max-w-3xl">
                <h3 className="font-display text-3xl font-medium tracking-[-0.025em] text-foreground md:text-5xl">
                  {project.title}
                </h3>

                <p className="mt-5 max-w-2xl text-[15px] leading-[1.7] text-muted">
                  {project.description}
                </p>
              </div>

              {/* Bottom */}
              <div className="flex flex-col justify-between gap-6 border-t border-border/50 pt-6 sm:flex-row sm:items-center">
                {/* Left Side */}
                <div className="flex flex-wrap items-center gap-3">
                  {/* Case Study */}
                  <Link
                    to={project.caseStudy}
                    onClick={(event) => event.stopPropagation()}
                    className="inline-flex items-center gap-2 border border-accent/50 px-4 py-2 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    Case Study
                    <span>→</span>
                  </Link>

                  {/* Tech Stack — informational only */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="border border-border/70 px-3 py-1.5 text-xs text-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub Repository */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                >
                  View Repository
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Future expansion indicator */}
        <div className="mt-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-border/50" />

          <span className="text-xs tracking-[0.12em] text-subtle">
            MORE WORK IN PROGRESS
          </span>

          <div className="h-px flex-1 bg-border/50" />
        </div>
      </Container>
    </section>
  );
}

export default Work;