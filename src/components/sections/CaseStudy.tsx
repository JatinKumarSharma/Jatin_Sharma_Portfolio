import Container from "../ui/Container";
import CaseStudyNavbar from "../layout/CaseStudyNavbar";

function CaseStudy() {
  return (
    <>
      <CaseStudyNavbar />

      <section
        id="case-study"
        className="relative overflow-hidden border-t border-border/40 py-28 lg:py-36"
      >
        <Container>
          {/* Back / Eyebrow */}
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />

            <span className="text-xs font-semibold tracking-[0.16em] text-accent">
              CASE STUDY · 01
            </span>
          </div>

          {/* Hero */}
          <div className="max-w-4xl">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-[10px] font-semibold tracking-[0.12em] text-accent">
                AI APPLICATION
              </span>

              <span className="text-xs tracking-[0.1em] text-subtle">
                FINANCIAL INTELLIGENCE
              </span>
            </div>

            <h1 className="font-display text-5xl font-medium leading-[1.08] tracking-[-0.035em] text-foreground md:text-7xl">
              Financial
              <br />
              <span className="text-accent">Analyst Agent.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-[1.7] text-muted">
              A production-oriented financial information system designed to
              retrieve company data and transform it into structured, accessible
              financial insights through an API.
            </p>
          </div>

          {/* Project Metadata */}
          <div className="mt-16 grid border-y border-border/60 py-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-border/60 py-4 sm:border-r sm:px-6 sm:first:pl-0">
              <span className="block text-[10px] font-semibold tracking-[0.14em] text-subtle">
                TYPE
              </span>

              <span className="mt-2 block text-sm text-foreground">
                AI Application
              </span>
            </div>

            <div className="border-border/60 py-4 sm:px-6 lg:border-r">
              <span className="block text-[10px] font-semibold tracking-[0.14em] text-subtle">
                BACKEND
              </span>

              <span className="mt-2 block text-sm text-foreground">
                Python · APIFlask
              </span>
            </div>

            <div className="border-border/60 py-4 sm:border-r sm:px-6">
              <span className="block text-[10px] font-semibold tracking-[0.14em] text-subtle">
                DATA
              </span>

              <span className="mt-2 block text-sm text-foreground">
                Financial APIs
              </span>
            </div>

            <div className="py-4 sm:px-6">
              <span className="block text-[10px] font-semibold tracking-[0.14em] text-subtle">
                STATUS
              </span>

              <span className="mt-2 flex items-center gap-2 text-sm text-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Live
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="mt-20 grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)]">
            {/* Side Navigation */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <span className="text-[10px] font-semibold tracking-[0.16em] text-subtle">
                  OVERVIEW
                </span>

                <div className="mt-5 flex flex-col gap-3 text-sm">
                  <a
                    href="#problem"
                    className="text-muted hover:text-accent"
                  >
                    The Problem
                  </a>

                  <a
                    href="#solution"
                    className="text-muted hover:text-accent"
                  >
                    The Solution
                  </a>

                  <a
                    href="#architecture"
                    className="text-muted hover:text-accent"
                  >
                    Architecture
                  </a>

                  <a
                    href="#decisions"
                    className="text-muted hover:text-accent"
                  >
                    Technical Decisions
                  </a>

                  <a
                    href="#capabilities"
                    className="text-muted hover:text-accent"
                  >
                    Key Capabilities
                  </a>

                  <a
                    href="#implementation"
                    className="text-muted hover:text-accent"
                  >
                    Implementation
                  </a>

                  <a
                    href="#learning"
                    className="text-muted hover:text-accent"
                  >
                    Learnings
                  </a>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="max-w-5xl">
              {/* Problem */}
              <section id="problem" className="scroll-mt-28">
                <span className="text-xs font-semibold tracking-[0.14em] text-accent">
                  01 — PROBLEM
                </span>

                <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.025em] text-foreground md:text-4xl">
                  Financial data is available,
                  <br />
                  but rarely accessible in one place.
                </h2>

                <p className="mt-6 max-w-3xl text-[15px] leading-[1.8] text-muted">
                  Accessing company information often requires navigating
                  multiple data sources, understanding inconsistent formats and
                  manually extracting the information relevant to a particular
                  analysis. This creates unnecessary friction between raw
                  financial data and usable insights.
                </p>
              </section>

              {/* Solution */}
              <section
                id="solution"
                className="mt-20 scroll-mt-28 border-t border-border/50 pt-16"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-accent" />

                    <span className="text-xs font-semibold tracking-[0.16em] text-accent">
                      02 — SOLUTION
                    </span>
                  </div>

                  <div className="mt-6">
                    <h2 className="font-display text-3xl font-medium leading-[1.2] tracking-[-0.03em] text-foreground md:text-4xl">
                      A tool-using financial
                      <br />
                      research system.
                    </h2>

                    <p className="mt-6 max-w-3xl text-[15px] leading-[1.75] text-muted">
                      Instead of building a traditional application with fixed
                      workflows for every financial query, the system uses an
                      LLM-driven agent that determines what information is
                      required and selects the appropriate financial tools
                      dynamically.
                    </p>

                    <p className="mt-5 max-w-3xl text-[15px] leading-[1.75] text-muted">
                      A FastAPI layer exposes the system through a simple
                      interface. Behind it, a tool-enabled LLM interprets the
                      user's question, executes one or more financial data
                      tools, and synthesizes the retrieved information into a
                      grounded response.
                    </p>

                    {/* Design Decisions */}
                    <div className="mt-12">
                      <span className="text-xs font-semibold tracking-[0.14em] text-accent">
                        KEY DESIGN DECISIONS
                      </span>

                      <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <div className="border border-border/60 bg-surface p-5">
                          <h3 className="font-display text-lg font-medium text-foreground">
                            Tool-Based Architecture
                          </h3>

                          <p className="mt-3 text-sm leading-[1.65] text-muted">
                            Financial capabilities are exposed as independent
                            tools instead of being embedded in fixed application
                            workflows.
                          </p>
                        </div>

                        <div className="border border-border/60 bg-surface p-5">
                          <h3 className="font-display text-lg font-medium text-foreground">
                            Iterative Agent Loop
                          </h3>

                          <p className="mt-3 text-sm leading-[1.65] text-muted">
                            The agent can perform multiple tool calls before
                            generating a final response to handle multi-step
                            financial questions.
                          </p>
                        </div>

                        <div className="border border-border/60 bg-surface p-5">
                          <h3 className="font-display text-lg font-medium text-foreground">
                            Provider Flexibility
                          </h3>

                          <p className="mt-3 text-sm leading-[1.65] text-muted">
                            The LLM layer supports multiple providers through
                            environment configuration, making the system easier
                            to adapt.
                          </p>
                        </div>

                        <div className="border border-border/60 bg-surface p-5">
                          <h3 className="font-display text-lg font-medium text-foreground">
                            Grounded Responses
                          </h3>

                          <p className="mt-3 text-sm leading-[1.65] text-muted">
                            The agent is instructed to use retrieved financial
                            data and clearly communicate limitations when
                            information cannot be obtained.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* API Design */}
                    <div className="mt-8 border-l border-accent/60 pl-6">
                      <span className="text-xs font-semibold tracking-[0.14em] text-accent">
                        API-FIRST DESIGN
                      </span>

                      <p className="mt-3 max-w-2xl text-[15px] leading-[1.7] text-muted">
                        The agent is exposed through FastAPI, allowing the
                        financial research capabilities to be consumed by
                        external applications, interfaces, or future frontend
                        systems.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Architecture */}
              <section
                id="architecture"
                className="mt-20 scroll-mt-28 border-t border-border/50 pt-16"
              >
                <span className="text-xs font-semibold tracking-[0.14em] text-accent">
                  03 — ARCHITECTURE
                </span>

                <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.025em] text-foreground md:text-4xl">
                  From question to insight,
                  <br />
                  through an agentic workflow.
                </h2>

                <p className="mt-6 max-w-3xl text-[15px] leading-[1.8] text-muted">
                  The system combines an API interface with an LLM-powered
                  financial agent. The agent interprets the request, selects
                  appropriate tools and synthesizes retrieved information into a
                  contextual response.
                </p>

                {/* Architecture Flow */}
                <div className="mt-10 border border-border/60 bg-surface p-6 md:p-10">
                  <div className="flex flex-col items-center">
                    {[
                      {
                        number: "01",
                        title: "Client Request",
                        description:
                          "A financial question is submitted to the API.",
                      },
                      {
                        number: "02",
                        title: "FastAPI Layer",
                        description:
                          "Validates the request and routes it to the agent.",
                      },
                      {
                        number: "03",
                        title: "Financial Agent",
                        description:
                          "Coordinates the reasoning and research workflow.",
                      },
                      {
                        number: "04",
                        title: "LLM + Tool Calling",
                        description:
                          "Interprets the question and determines which financial tools to use.",
                      },
                      {
                        number: "05",
                        title: "Financial Tools",
                        description:
                          "Retrieves company profiles, quotes, performance, peers, consensus and news.",
                      },
                      {
                        number: "06",
                        title: "Final Response",
                        description:
                          "Synthesizes retrieved information into a structured answer.",
                      },
                    ].map((step, index, steps) => (
                      <div
                        key={step.number}
                        className="flex w-full flex-col items-center"
                      >
                        <div className="flex w-full max-w-xl items-center gap-5 border border-border/60 bg-background/40 p-5 transition-colors hover:border-accent/40">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-accent/40 bg-accent/5 font-display text-sm text-accent">
                            {step.number}
                          </div>

                          <div>
                            <h3 className="font-display text-lg text-foreground">
                              {step.title}
                            </h3>

                            <p className="mt-1 text-xs leading-[1.6] text-muted">
                              {step.description}
                            </p>
                          </div>
                        </div>

                        {index < steps.length - 1 && (
                          <div className="flex h-8 items-center justify-center text-accent">
                            ↓
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <p className="mt-6 text-[15px] leading-[1.8] text-muted">
                  Unlike a traditional API pipeline, the agent can perform
                  multiple tool calls before producing an answer. The LLM acts
                  as the decision-making layer, selecting relevant financial
                  tools based on the user's question while the application code
                  handles data retrieval and execution.
                </p>
              </section>

              {/* Technical Decisions */}
              <section
                id="decisions"
                className="mt-20 scroll-mt-28 border-t border-border/50 pt-16"
              >
                <span className="text-xs font-semibold tracking-[0.14em] text-accent">
                  04 — TECHNICAL DECISIONS
                </span>

                <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.025em] text-foreground md:text-4xl">
                  Designing for flexibility,
                  <br />
                  not fixed workflows.
                </h2>

                <p className="mt-6 max-w-3xl text-[15px] leading-[1.8] text-muted">
                  The architecture was designed around reusable capabilities
                  rather than hardcoded workflows. Each component has a specific
                  responsibility, making the system easier to extend as new
                  financial tools and use cases are added.
                </p>

                <div className="mt-10 space-y-8">
                  {/* Decision 01 */}
                  <div className="border-l border-border/70 pl-6 transition-colors hover:border-accent">
                    <span className="text-[10px] font-semibold tracking-[0.14em] text-accent">
                      01
                    </span>

                    <h3 className="mt-2 font-display text-xl font-medium text-foreground">
                      Tool-based capabilities
                    </h3>

                    <p className="mt-3 text-[15px] leading-[1.75] text-muted">
                      Financial operations are exposed as independent tools
                      instead of being embedded inside fixed application logic.
                      This allows the agent to select relevant capabilities
                      dynamically depending on the user's question.
                    </p>
                  </div>

                  {/* Decision 02 */}
                  <div className="border-l border-border/70 pl-6 transition-colors hover:border-accent">
                    <span className="text-[10px] font-semibold tracking-[0.14em] text-accent">
                      02
                    </span>

                    <h3 className="mt-2 font-display text-xl font-medium text-foreground">
                      Iterative agent execution
                    </h3>

                    <p className="mt-3 text-[15px] leading-[1.75] text-muted">
                      A single financial question can require information from
                      multiple data sources. The agent therefore operates in an
                      iterative loop, allowing multiple tool calls before
                      generating a final response.
                    </p>
                  </div>

                  {/* Decision 03 */}
                  <div className="border-l border-border/70 pl-6 transition-colors hover:border-accent">
                    <span className="text-[10px] font-semibold tracking-[0.14em] text-accent">
                      03
                    </span>

                    <h3 className="mt-2 font-display text-xl font-medium text-foreground">
                      Provider-agnostic LLM layer
                    </h3>

                    <p className="mt-3 text-[15px] leading-[1.75] text-muted">
                      The system supports multiple LLM providers through
                      configuration, allowing experimentation with local and
                      cloud-hosted models without changing the core agent
                      workflow.
                    </p>
                  </div>

                  {/* Decision 04 */}
                  <div className="border-l border-border/70 pl-6 transition-colors hover:border-accent">
                    <span className="text-[10px] font-semibold tracking-[0.14em] text-accent">
                      04
                    </span>

                    <h3 className="mt-2 font-display text-xl font-medium text-foreground">
                      Grounded financial responses
                    </h3>

                    <p className="mt-3 text-[15px] leading-[1.75] text-muted">
                      The agent is explicitly instructed to rely on retrieved
                      financial data when answering data-dependent questions and
                      to communicate retrieval limitations instead of
                      fabricating unavailable information.
                    </p>
                  </div>
                </div>
              </section>

              {/* Key Capabilities */}
              <section
                id="capabilities"
                className="mt-20 scroll-mt-28 border-t border-border/50 pt-16"
              >
                <span className="text-xs font-semibold tracking-[0.14em] text-accent">
                  05 — KEY CAPABILITIES
                </span>

                <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.025em] text-foreground md:text-4xl">
                  What the system
                  <br />
                  is designed to demonstrate?
                </h2>

                <p className="mt-6 max-w-3xl text-[15px] leading-[1.8] text-muted">
                  The project focuses on the foundational components required
                  for building tool-augmented AI systems that can reason over
                  user requests, retrieve external information and generate
                  grounded responses.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  <div className="group border border-border/60 bg-surface p-6 transition-colors hover:border-accent/50">
                    <span className="text-xs font-semibold tracking-[0.14em] text-accent">
                      01
                    </span>

                    <h3 className="mt-4 font-display text-xl text-foreground">
                      Tool-Augmented Reasoning
                    </h3>

                    <p className="mt-3 text-sm leading-[1.7] text-muted">
                      Uses an LLM with tool calling capabilities to determine
                      which financial operations are required for a given
                      question.
                    </p>
                  </div>

                  <div className="group border border-border/60 bg-surface p-6 transition-colors hover:border-accent/50">
                    <span className="text-xs font-semibold tracking-[0.14em] text-accent">
                      02
                    </span>

                    <h3 className="mt-4 font-display text-xl text-foreground">
                      Multi-Step Retrieval
                    </h3>

                    <p className="mt-3 text-sm leading-[1.7] text-muted">
                      Supports multiple tool calls within a single agent
                      execution cycle for questions requiring information from
                      several financial sources.
                    </p>
                  </div>

                  <div className="group border border-border/60 bg-surface p-6 transition-colors hover:border-accent/50">
                    <span className="text-xs font-semibold tracking-[0.14em] text-accent">
                      03
                    </span>

                    <h3 className="mt-4 font-display text-xl text-foreground">
                      Financial Data Retrieval
                    </h3>

                    <p className="mt-3 text-sm leading-[1.7] text-muted">
                      Retrieves company profiles, stock quotes, performance
                      data, peers, analyst consensus and recent company news.
                    </p>
                  </div>

                  <div className="group border border-border/60 bg-surface p-6 transition-colors hover:border-accent/50">
                    <span className="text-xs font-semibold tracking-[0.14em] text-accent">
                      04
                    </span>

                    <h3 className="mt-4 font-display text-xl text-foreground">
                      Provider Flexibility
                    </h3>

                    <p className="mt-3 text-sm leading-[1.7] text-muted">
                      Supports multiple LLM providers including local and
                      cloud-hosted models through environment-based
                      configuration.
                    </p>
                  </div>

                  <div className="group border border-border/60 bg-surface p-6 transition-colors hover:border-accent/50">
                    <span className="text-xs font-semibold tracking-[0.14em] text-accent">
                      05
                    </span>

                    <h3 className="mt-4 font-display text-xl text-foreground">
                      API-First Design
                    </h3>

                    <p className="mt-3 text-sm leading-[1.7] text-muted">
                      Exposes the agent through a structured API, allowing
                      future interfaces and applications to consume the system
                      independently.
                    </p>
                  </div>

                  <div className="group border border-border/60 bg-surface p-6 transition-colors hover:border-accent/50">
                    <span className="text-xs font-semibold tracking-[0.14em] text-accent">
                      06
                    </span>

                    <h3 className="mt-4 font-display text-xl text-foreground">
                      Controlled Execution
                    </h3>

                    <p className="mt-3 text-sm leading-[1.7] text-muted">
                      Uses bounded agent iterations and explicit error handling
                      to prevent uncontrolled execution and communicate failures
                      clearly.
                    </p>
                  </div>
                </div>
              </section>

              {/* Implementation */}
              <section
                id="implementation"
                className="mt-20 scroll-mt-28 border-t border-border/50 pt-16"
              >
                <span className="text-xs font-semibold tracking-[0.14em] text-accent">
                  06 — IMPLEMENTATION
                </span>

                <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.025em] text-foreground md:text-4xl">
                  A practical foundation
                  <br />
                  built for extension.
                </h2>

                <div className="mt-8 space-y-4">
                  {[
                    {
                      title: "API Layer",
                      text: "APIFlask provides structured endpoints and automatically generated interactive documentation.",
                    },
                    {
                      title: "Data Retrieval",
                      text: "External financial data sources are queried dynamically based on company symbols.",
                    },
                    {
                      title: "Response Design",
                      text: "Retrieved information is organized into predictable structured responses for downstream consumption.",
                    },
                    {
                      title: "Deployment",
                      text: "The application is deployed as a publicly accessible web service.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="border-l border-border/80 pl-6 transition-colors hover:border-accent"
                    >
                      <h3 className="font-display text-lg text-foreground">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-[1.7] text-muted">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Learnings */}
              <section
                id="learning"
                className="mt-20 scroll-mt-28 border-t border-border/50 pt-16"
              >
                <span className="text-xs font-semibold tracking-[0.14em] text-accent">
                  07 — LEARNINGS
                </span>

                <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.025em] text-foreground md:text-4xl">
                  Building the system highlighted
                  <br />
                  the gap between data and intelligence.
                </h2>

                <p className="mt-6 max-w-3xl text-[15px] leading-[1.8] text-muted">
                  The project reinforced that retrieving information is only the
                  first layer of an intelligent system. Useful AI applications
                  require reliable data interfaces, clear response structures
                  and thoughtful system boundaries before more advanced
                  reasoning capabilities can be added.
                </p>

                <div className="mt-10 border border-accent/30 bg-accent/[0.03] p-7">
                  <span className="text-[10px] font-semibold tracking-[0.14em] text-accent">
                    NEXT ITERATION
                  </span>

                  <p className="mt-3 font-display text-l leading-[1.5] text-foreground">
                    Current implementation demonstrates an LLM-driven tool-calling workflow 
                    for financial research. The next stage would focus on making the system 
                    more reliable and measurable through structured query routing, response 
                    validation, evaluation datasets and execution observability.
                  </p>
                </div>
              </section>

              {/* Links */}
              <div className="mt-24 flex flex-wrap gap-4 border-t border-border/50 pt-10">
                <a
                  href="https://financial-analyst-api-fw98.onrender.com/docs"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-accent/50 px-5 py-3 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  Explore Live API
                  <span>↗</span>
                </a>

                <a
                  href="https://github.com/JatinKumarSharma"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-border px-5 py-3 text-sm text-muted transition-colors hover:border-accent hover:text-foreground"
                >
                  View Repository
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default CaseStudy;
