import Container from "../ui/Container";

const focusAreas = [
  {
    number: "01",
    title: "Multimodal Data",
    description:
      "Object, activity and PII segmentation across extensive video datasets for large model training programs.",
  },
  {
    number: "02",
    title: "Model Evaluation",
    description:
      "Scoring responses on hallucination, factuality, safety, originality, helpfulness and harmlessness — signals used in RLHF and alignment cycles.",
  },
  {
    number: "03",
    title: "Agentic AI",
    description:
      "Tool-calling agents, retrieval pipelines and context engineering, designed with reliability in mind.",
  },
  {
    number: "04",
    title: "Robotics AI",
    description:
      "Action segmentation and instruction-alignment labeling for robotics model training data.",
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
              Working at the intersection of data, evaluation and intelligent systems.
            </h2>

            <div className="mt-8 max-w-xl space-y-5 text-[15px] leading-[1.75] text-muted">
              <p>
                For two years I worked as an AI-LLM Analyst at Innodata, producing
                training data and quality signals for Meta's multimodal model
                programs — video segmentation, PII labeling, response scoring and
                robotic-action annotation.
              </p>

              <p>
                My annual performance was rated 4/5 in both precision and
                productivity, with 100/100 internal and client QA scores on most
                response-evaluation jobs and a 90+/100 average on robotic-action
                work. Alongside this work, I build agentic systems — applying the
                same evaluation mindset to agents that reason, retrieve and act.
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