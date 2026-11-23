import Container from "../ui/Container";
import CaseStudyNavbar from "../layout/CaseStudyNavbar";
import { PROJECTS_REPO_URL } from "../../data/projectLinks";

function CustomerVoiceCaseStudy() {
  return (
    <>
      <CaseStudyNavbar
        projectName="ADAPTIVE CUSTOMER VOICE INTERVIEWER"
        githubUrl={PROJECTS_REPO_URL}
      />

      <section
        id="case-study"
        className="relative overflow-hidden border-t border-border/40 py-28 lg:py-36"
      >
        <Container>
          {/* Back / Eyebrow */}
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />

            <span className="text-xs font-semibold tracking-[0.16em] text-accent">
              CASE STUDY · 02
            </span>
          </div>

          {/* Hero */}
          <div className="max-w-4xl">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-[10px] font-semibold tracking-[0.12em] text-accent">
                RESEARCH AGENT
              </span>

              <span className="text-xs tracking-[0.1em] text-subtle">
                CONSUMER INTELLIGENCE
              </span>
            </div>

            <h1 className="font-display text-5xl font-medium leading-[1.08] tracking-[-0.035em] text-foreground md:text-7xl">
              Adaptive Customer
              <br />
              <span className="text-accent">Voice Interviewer.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-[1.7] text-muted">
              An agentic interview system that decides what to ask next based on
              what it has already learned — instead of following a fixed
              questionnaire.
            </p>
          </div>

          {/* Project Metadata */}
          <div className="mt-16 grid border-y border-border/60 py-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-border/60 py-4 sm:border-r sm:px-6 sm:first:pl-0">
              <span className="block text-[10px] font-semibold tracking-[0.14em] text-subtle">
                TYPE
              </span>
              <span className="mt-2 block text-sm text-foreground">
                Research Agent
              </span>
            </div>

            <div className="border-border/60 py-4 sm:px-6 lg:border-r">
              <span className="block text-[10px] font-semibold tracking-[0.14em] text-subtle">
                ORCHESTRATION
              </span>
              <span className="mt-2 block text-sm text-foreground">
                LangGraph · LangChain
              </span>
            </div>

            <div className="border-border/60 py-4 sm:border-r sm:px-6">
              <span className="block text-[10px] font-semibold tracking-[0.14em] text-subtle">
                INTERACTION
              </span>
              <span className="mt-2 block text-sm text-foreground">
                Voice · STT / TTS
              </span>
            </div>

            <div className="py-4 sm:px-6">
              <span className="block text-[10px] font-semibold tracking-[0.14em] text-subtle">
                STATUS
              </span>
              <span className="mt-2 flex items-center gap-2 text-sm text-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                In Progress
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
                  <a href="#problem" className="text-muted hover:text-accent">
                    The Problem
                  </a>
                  <a href="#idea" className="text-muted hover:text-accent">
                    The Idea
                  </a>
                  <a href="#architecture" className="text-muted hover:text-accent">
                    State Architecture
                  </a>
                  <a href="#adaptive" className="text-muted hover:text-accent">
                    Adaptive Behavior
                  </a>
                  <a href="#evidence" className="text-muted hover:text-accent">
                    Evidence Model
                  </a>
                  <a href="#status" className="text-muted hover:text-accent">
                    Status &amp; Next
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
                  A survey cannot follow up on
                  <br />
                  an answer it didn't expect.
                </h2>

                <p className="mt-6 max-w-3xl text-[15px] leading-[1.8] text-muted">
                  Consumer research usually runs on a fixed questionnaire. When
                  a respondent reveals something unexpected — an unmet need, a
                  contradiction, a strong feeling — the script cannot stop and
                  explore it. The insight is lost because the instrument was
                  never designed to notice it.
                </p>
              </section>

              {/* Idea */}
              <section
                id="idea"
                className="mt-20 scroll-mt-28 border-t border-border/50 pt-16"
              >
                <span className="text-xs font-semibold tracking-[0.14em] text-accent">
                  02 — THE IDEA
                </span>

                <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.025em] text-foreground md:text-4xl">
                  Treat interviewing as a stateful
                  <br />
                  agent loop.
                </h2>

                <p className="mt-6 max-w-3xl text-[15px] leading-[1.8] text-muted">
                  Instead of a list of questions, the system maintains a model
                  of what it knows about the respondent. Each turn plans a goal,
                  asks a question, interprets the answer, updates that model and
                  identifies what is still missing. The next question is chosen
                  because of those gaps — not because it is number seven on a
                  list.
                </p>

                <div className="mt-8 border-l border-accent/60 pl-6">
                  <span className="text-xs font-semibold tracking-[0.14em] text-accent">
                    RESEARCH DIMENSIONS
                  </span>
                  <p className="mt-3 max-w-2xl text-[15px] leading-[1.7] text-muted">
                    Product awareness, sentiment, needs, pain points,
                    aspirations, purchase intent and buying constraints.
                  </p>
                </div>
              </section>

              {/* Architecture */}
              <section
                id="architecture"
                className="mt-20 scroll-mt-28 border-t border-border/50 pt-16"
              >
                <span className="text-xs font-semibold tracking-[0.14em] text-accent">
                  03 — STATE ARCHITECTURE
                </span>

                <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.025em] text-foreground md:text-4xl">
                  Eight states, one loop,
                  <br />
                  driven by accumulated knowledge.
                </h2>

                <p className="mt-6 max-w-3xl text-[15px] leading-[1.8] text-muted">
                  The workflow is implemented in LangGraph as a state-driven
                  architecture. Each stage has a single responsibility, so the
                  interviewer's behaviour can be inspected and extended.
                </p>

                <div className="mt-10 border border-border/60 bg-surface p-6 md:p-10">
                  <div className="flex flex-col items-center">
                    {[
                      {
                        number: "01",
                        title: "Meta Planning",
                        description: "Decide what the current turn should achieve.",
                      },
                      {
                        number: "02",
                        title: "Answer Decomposition",
                        description: "Break a response into separate claims and signals.",
                      },
                      {
                        number: "03",
                        title: "Knowledge State Updates",
                        description: "Write what was learned into the running profile.",
                      },
                      {
                        number: "04",
                        title: "Information Gap Analysis",
                        description: "Identify what is still unknown or unverified.",
                      },
                      {
                        number: "05",
                        title: "Proposal Generation",
                        description: "Generate candidate questions for the gaps.",
                      },
                      {
                        number: "06",
                        title: "Proposal Evaluation",
                        description: "Score candidates before choosing one.",
                      },
                      {
                        number: "07",
                        title: "Decision Policy",
                        description: "Ask, probe, verify or stop.",
                      },
                      {
                        number: "08",
                        title: "Reflection",
                        description: "Check the turn against the research objective.",
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
              </section>

              {/* Adaptive Behavior */}
              <section
                id="adaptive"
                className="mt-20 scroll-mt-28 border-t border-border/50 pt-16"
              >
                <span className="text-xs font-semibold tracking-[0.14em] text-accent">
                  04 — ADAPTIVE BEHAVIOR
                </span>

                <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.025em] text-foreground md:text-4xl">
                  Questions generated from
                  <br />
                  what the respondent said.
                </h2>

                <p className="mt-6 max-w-3xl text-[15px] leading-[1.8] text-muted">
                  Candidate questions are produced and evaluated dynamically
                  against the accumulated consumer knowledge. A question that
                  would be useful early in an interview can become redundant
                  once the same information has already been captured — so it
                  is replaced by one that targets the remaining gap.
                </p>
              </section>

              {/* Evidence Model */}
              <section
                id="evidence"
                className="mt-20 scroll-mt-28 border-t border-border/50 pt-16"
              >
                <span className="text-xs font-semibold tracking-[0.14em] text-accent">
                  05 — EVIDENCE MODEL
                </span>

                <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.025em] text-foreground md:text-4xl">
                  Know what you know —
                  <br />
                  and when to stop.
                </h2>

                <p className="mt-6 max-w-3xl text-[15px] leading-[1.8] text-muted">
                  Every finding carries structured evidence tracking:
                  information sufficiency, confidence and verification status.
                  The interviewer uses these fields to decide whether to probe
                  again, move on or end the session through adaptive termination
                  criteria.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {[
                    {
                      title: "Sufficiency",
                      text: "Is there enough evidence to treat this as a finding?",
                    },
                    {
                      title: "Confidence",
                      text: "How strongly is the signal supported by the answer?",
                    },
                    {
                      title: "Verification",
                      text: "Has the point been confirmed rather than inferred?",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="border border-border/60 bg-surface p-6"
                    >
                      <h3 className="font-display text-lg text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-[1.7] text-muted">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Status */}
              <section
                id="status"
                className="mt-20 scroll-mt-28 border-t border-border/50 pt-16"
              >
                <span className="text-xs font-semibold tracking-[0.14em] text-accent">
                  06 — STATUS &amp; NEXT
                </span>

                <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.025em] text-foreground md:text-4xl">
                  A working interview loop,
                  <br />
                  with deployment and measurement next.
                </h2>

                <p className="mt-6 max-w-3xl text-[15px] leading-[1.8] text-muted">
                  The system runs locally as a FastAPI service and supports
                  voice interaction through speech-to-text and text-to-speech.
                  Python, LangGraph, LangChain and Groq drive the agent loop.
                </p>

                <div className="mt-10 border border-accent/30 bg-accent/[0.03] p-7">
                  <span className="text-[10px] font-semibold tracking-[0.14em] text-accent">
                    NEXT ITERATION
                  </span>
                  <p className="mt-3 font-display text-lg leading-[1.5] text-foreground">
                    An evaluation set for question quality, transcript-level
                    grounding checks and interviewer reliability metrics — the
                    same disciplines I use for model response scoring, applied
                    to an agent.
                  </p>
                </div>
              </section>

              {/* Links */}
              <div className="mt-24 flex flex-wrap gap-4 border-t border-border/50 pt-10">
                <a
                  href={PROJECTS_REPO_URL}
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

export default CustomerVoiceCaseStudy;
