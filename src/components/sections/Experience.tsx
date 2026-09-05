import Container from "../ui/Container";

const experiences = [
  {
    period: "2024 — PRESENT",
    role: "AI-LLM Analyst",
    company: "Current Role",
    description:
      "Working across multimodal AI projects involving text, image, audio and video data. Contributing to data preparation, refinement and training workflows, including work supporting robotics models designed to learn and perform actions.",
    highlights: [
      "Multimodal Data",
      "Model Training",
      "Data Refinement",
      "Robotics AI",
    ],
    current: true,
  },
  {
    period: "2023 — 2024",
    role: "Content Writer",
    company: "AR Group of Education",
    description:
      "Created structured educational content and developed research and communication skills while working in a fast-paced digital environment.",
    highlights: [
      "Research",
      "Content Strategy",
      "Communication",
    ],
    current: false,
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-border/40 py-28 lg:py-36"
    >
      <Container>
        {/* Section Heading */}
        <div className="mb-16 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />

            <span className="text-xs font-semibold tracking-[0.16em] text-accent">
              EXPERIENCE
            </span>
          </div>

          <h2 className="font-display text-4xl font-medium leading-[1.15] tracking-[-0.03em] text-foreground md:text-5xl">
            <span>A</span>
            <span className="mx-[0.22em]">journey shaped by</span>
            <span className="text-accent">curiosity</span>
            <span>{" and "}</span>
            <span className="text-accent">adaptation.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="border-t border-border/60">
          {experiences.map((experience) => (
            <div
              key={experience.role}
              className="group grid gap-8 border-b border-border/60 py-10 transition-colors md:grid-cols-[180px_1fr_auto] md:gap-12"
            >
              {/* Period */}
              <div className="flex items-start gap-3">
                {experience.current && (
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(94,140,46,0.8)]" />
                )}

                <span className="text-xs font-medium tracking-[0.1em] text-subtle">
                  {experience.period}
                </span>
              </div>

              {/* Main Content */}
              <div>
                <h3 className="font-display text-2xl font-medium tracking-[-0.02em] text-foreground">
                  {experience.role}
                </h3>

                <p className="mt-2 text-sm text-accent">
                  {experience.company}
                </p>

                <p className="mt-5 max-w-2xl text-[15px] leading-[1.7] text-muted">
                  {experience.description}
                </p>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap content-start gap-2 md:max-w-[180px]">
                {experience.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="border border-border/70 px-3 py-1.5 text-[11px] text-muted transition-colors group-hover:border-accent/40"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-12 flex flex-col gap-4 border-l border-accent/60 pl-6">
          <span className="text-xs font-semibold tracking-[0.14em] text-accent">
            DIRECTION
          </span>

          <p className="max-w-2xl font-display text-xl leading-[1.5] text-foreground md:text-2xl">
            Moving from working with AI models toward engineering intelligent
            systems that can reason, retrieve and act.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Experience;