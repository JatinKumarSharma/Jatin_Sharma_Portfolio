import Container from "../ui/Container";

const focusAreas = [
  {
    number: "01",
    title: "Multimodal AI",
    description:
      "Working with text, image, audio and video data across different model training workflows.",
  },
  {
    number: "02",
    title: "LLM Systems",
    description:
      "Exploring language models, retrieval pipelines and production-oriented AI applications.",
  },
  {
    number: "03",
    title: "Agentic AI",
    description:
      "Designing systems that combine reasoning, tools, retrieval and structured workflows.",
  },
  {
    number: "04",
    title: "Robotics AI",
    description:
      "Contributing to data preparation and refinement workflows for models that learn actions.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-border/40 py-28 lg:py-36"
    >
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          
          {/* Left */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />

              <span className="text-xs font-semibold tracking-[0.16em] text-accent">
                ABOUT
              </span>
            </div>

            <h2 className="max-w-xl font-display text-4xl font-medium leading-[1.15] tracking-[-0.03em] text-foreground md:text-5xl">
              Working at the intersection of data, models and intelligent systems.
            </h2>

            <div className="mt-8 max-w-xl space-y-5 text-[15px] leading-[1.75] text-muted">
              <p>
                I work as an AI-LLM Analyst, contributing to projects involving
                data preparation, refinement and model training across multiple
                modalities.
              </p>

              <p>
                Alongside my professional work, I build and explore AI systems
                focused on LLM applications, retrieval and agentic workflows.
                My goal is to grow from working with AI models into engineering
                systems that can reason, retrieve information and take action.
              </p>
            </div>
          </div>

          {/* Right — Focus Areas */}
          <div className="border-t border-border/60 lg:border-t-0 lg:border-l lg:pl-12">
            <div className="grid sm:grid-cols-2">
              {focusAreas.map((area, index) => (
                <div
                  key={area.number}
                  className={`group border-border/60 py-7 sm:px-7 ${
                    index < 2 ? "sm:border-b" : ""
                  } ${index % 2 === 0 ? "sm:border-r" : ""}`}
                >
                  <span className="text-xs tracking-[0.14em] text-accent">
                    {area.number}
                  </span>

                  <h3 className="mt-4 font-display text-xl font-medium text-foreground">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-[1.65] text-muted">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default About;