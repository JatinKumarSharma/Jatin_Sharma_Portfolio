import Container from "../ui/Container";
import CaseStudyNavbar from "../layout/CaseStudyNavbar";
import CviRubricChart from "../ui/CviRubricChart";
import {
  CUSTOMER_VOICE_RESEARCHER_URL,
  PROJECTS_REPO_URL,
} from "../../data/projectLinks";

const pipelineStages = [
  {
    number: "01",
    title: "Session gate & initial plan",
    description: "Validate the study, then plan the first research move.",
    nodes: ["START", "session_validator", "meta_planner"],
  },
  {
    number: "02",
    title: "Proposal pipeline",
    description:
      "Generate candidates, evaluate one per target gap in parallel, rank, then choose the next move.",
    nodes: [
      "proposal_generator",
      "proposal_evaluator",
      "proposal_ranker",
      "decision_policy",
    ],
  },
  {
    number: "03",
    title: "Question execution",
    description:
      "Snapshot state before execution, resolve the decision, then hand the question to the voice boundary.",
    nodes: [
      "pre_question_snapshot",
      "executive_controller",
      "question_delivery",
    ],
  },
  {
    number: "04",
    title: "Response boundary & recovery",
    description:
      "Accept speech or typed input, confirm voice turns, triage valid answers and route failures through recovery.",
    nodes: [
      "consumer_response",
      "voice_confirmation",
      "response_triage",
      "response_acceptor",
      "response_recovery",
      "execute_response_recovery",
    ],
  },
  {
    number: "05",
    title: "Understanding & loop-back",
    description:
      "Decompose the answer, update knowledge, find gaps, reflect and queue the next turn.",
    nodes: [
      "answer_decomposition",
      "state_updater",
      "gap_analyzer",
      "reflection",
      "advance_iteration",
    ],
  },
];

const activeConversationChain = [
  {
    title: "Immediate acknowledgement",
    trigger: "vad.speech_end",
    text: "A model-free 1–3 word acknowledgement is queued before the final transcript is ready. It fills the silence without pretending to understand the answer.",
  },
  {
    title: "Parallel reflection",
    trigger: "after answer_decomposition",
    text: "A warmer contextual reflection is generated while the graph updates state and prepares the next question.",
  },
  {
    title: "Playback synchronization",
    trigger: "voice outbox + research status",
    text: "The UI reveals the next question only when research is complete, engagement jobs are finished and queued voice has played.",
  },
];

const futureScopeFoundations = [
  {
    title: "Production-grade deployment",
    text: "Move from the current free Render + Neon demo setup to the strict production target: VPS/custom domain deployment with Docker Compose, managed secrets, HTTPS, backups, monitoring, and production auth hardening.",
  },
  {
    title: "Reliable, higher-accuracy voice",
    text: "Upgrade speech capabilities beyond free-tier constraints by using higher-RAM/paid hosting or self-hosted STT/TTS models for better transcript accuracy, lower latency, and always-on reliability, while preserving typed-input fallback.",
  },
  {
    title: "Pluggable provider architecture",
    text: "Extend the existing client-replaceable boundaries for storage/memory, voice/speech, and LLM model/provider so deployments can swap demo/free providers (Groq, browser speech, Neon/Render) with self-hosted or enterprise-grade alternatives without changing the core evidence-first interview workflow.",
  },
  {
    title: "Self-hosted/privacy-first profile",
    text: "Strengthen the strict self-hosted deployment profile for privacy-sensitive environments, keeping participant data, speech processing, and model inference within controlled infrastructure.",
  },
];

const researchMeasurementScope = [
  {
    title: "Question-quality eval set",
    text: "Consented, human-reviewed transcripts scored for follow-up relevance, redundancy and research progress.",
  },
  {
    title: "Live timing dashboard",
    text: "First-question latency, acknowledgement timing, engagement emit time and failed-job counts in one view.",
  },
  {
    title: "Researcher review workflow",
    text: "Human confirmation of evidence claims plus published retention and deletion controls for each study.",
  },
  {
    title: "Cross-session insight views",
    text: "Aggregate themes across sessions with tenant isolation and source quotes preserved end to end.",
  },
];

const fusionEvidenceWorlds = [
  {
    title: "Stated perception / consumer intelligence",
    text: "What people say: first-party interview evidence about needs, sentiment and intent.",
  },
  {
    title: "Observed behavior / market & commercial signals",
    text: "What people do: authorized behavioral or commercial signals, kept separate from stated claims.",
  },
  {
    title: "Public market sentiment / external signals",
    text: "What the market reveals: public sentiment and external signals with provenance retained.",
  },
];

const fusionCapabilities = [
  "Perception–behavior gap detection",
  "Unified market understanding",
  "Continuous market monitoring",
  "Historical intelligence",
  "Decision support",
];

const cviRoadmap = [
  "Single-product case study",
  "Continuous monitoring",
  "Authorized commercial integrations",
  "Fusion engine",
  "Commercial intelligence service",
];

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
                  <a href="#evaluation" className="text-muted hover:text-accent">
                    Analysis &amp; Evaluation
                  </a>
                  <a href="#status" className="text-muted hover:text-accent">
                    Status &amp; Architecture
                  </a>
                  <a href="#future" className="text-muted hover:text-accent">
                    Future Scope
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
                  One graph, eighteen nodes,
                  <br />
                  and a synchronized voice chain.
                </h2>

                <p className="mt-6 max-w-3xl text-[15px] leading-[1.8] text-muted">
                  The LangGraph pipeline is shown end to end: session validation,
                  proposal generation and parallel gap evaluation, decision,
                  delivery, response triage and recovery, knowledge updates and
                  loop-back. Alongside it runs the active conversation chain that
                  keeps the participant from hearing dead air.
                </p>

                <div className="mt-10 space-y-6">
                  <div className="border border-border/60 bg-surface p-6 md:p-10">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <span className="text-[10px] font-semibold tracking-[0.14em] text-accent">
                        PRIMARY GRAPH · LANGGRAPH
                      </span>
                      <span className="font-mono text-[10px] tracking-[0.08em] text-subtle">
                        START → END · WITH LOOP-BACK
                      </span>
                    </div>

                    <div className="mt-6 grid gap-3 md:grid-cols-2">
                      {pipelineStages.map((stage) => (
                        <div
                          key={stage.number}
                          className="border border-border/60 bg-background/40 p-5 transition-colors hover:border-accent/40"
                        >
                          <div className="flex items-center gap-3">
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-accent/40 bg-accent/5 font-display text-xs text-accent">
                              {stage.number}
                            </span>
                            <h3 className="font-display text-base text-foreground">
                              {stage.title}
                            </h3>
                          </div>

                          <p className="mt-4 text-xs leading-[1.7] text-muted">
                            {stage.description}
                          </p>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {stage.nodes.map((node) => (
                              <code
                                key={node}
                                className="border border-border/60 bg-background/60 px-2 py-1 font-mono text-[10px] text-accent-light"
                              >
                                {node}
                              </code>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 border-t border-border/60 pt-5 text-xs leading-[1.8] text-subtle">
                      <span className="text-accent">LOOP-BACK</span>{" "}
                      <code className="font-mono text-[10px] text-muted">
                        advance_iteration → proposal_generator
                      </code>
                      . Stops are explicit at session validation, decision
                      policy, executive control and both recovery paths.
                    </div>
                  </div>

                  <div className="border border-border/60 bg-surface p-6 md:p-10">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <span className="text-[10px] font-semibold tracking-[0.14em] text-accent">
                        ACTIVE CONVERSATION CHAIN · PARALLEL
                      </span>
                      <span className="font-mono text-[10px] tracking-[0.08em] text-subtle">
                        VAD → ACK → REFLECT → SYNC
                      </span>
                    </div>

                    <div className="mt-6 grid gap-4 lg:grid-cols-3">
                      {activeConversationChain.map((step, index) => (
                        <div
                          key={step.title}
                          className="border border-border/60 bg-background/40 p-5"
                        >
                          <span className="font-mono text-[10px] tracking-[0.1em] text-accent">
                            0{index + 1} · {step.trigger}
                          </span>
                          <h3 className="mt-3 font-display text-base text-foreground">
                            {step.title}
                          </h3>
                          <p className="mt-3 text-xs leading-[1.7] text-muted">
                            {step.text}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 border-l border-accent/60 pl-6">
                      <span className="text-[10px] font-semibold tracking-[0.14em] text-accent">
                        WHY THIS MATTERS
                      </span>
                      <p className="mt-2 max-w-3xl text-[13px] leading-[1.8] text-muted">
                        Generation runs in parallel, but playback is serialized.
                        The participant hears one clear voice at a time, and the
                        next research question waits for both the graph and the
                        engagement chain.
                      </p>
                    </div>
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
                  Every report claim carries an{" "}
                  <code className="font-mono text-xs text-accent-light">
                    evidence_id
                  </code>
                  , a{" "}
                  <code className="font-mono text-xs text-accent-light">
                    response_id
                  </code>{" "}
                  and a verbatim{" "}
                  <code className="font-mono text-xs text-accent-light">
                    source_quote
                  </code>
                  . A claim is emitted only when the cited evidence resolves to
                  a response from the same session and the quote matches the
                  participant's words. Information sufficiency, confidence and
                  verification status then decide whether to probe, move on or
                  stop.
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

              {/* Evaluation */}
              <section
                id="evaluation"
                className="mt-20 scroll-mt-28 border-t border-border/50 pt-16"
              >
                <span className="text-xs font-semibold tracking-[0.14em] text-accent">
                  06 — ANALYSIS &amp; EVALUATION
                </span>

                <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.025em] text-foreground md:text-4xl">
                  Measured as a system,
                  <br />
                  not just as a demo.
                </h2>

                <p className="mt-6 max-w-3xl text-[15px] leading-[1.8] text-muted">
                  CVI is scored on its execution contracts: can it ground a
                  claim, choose a useful next question, preserve conversational
                  timing, protect a participant link and recover from failure?
                  A fresh offline run was mapped to a five-dimension system
                  rubric. It is kept separate from the Financial Research
                  Assistant's model-response scores.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    {
                      value: "435",
                      label: "PASSED",
                      note: "4 opt-in live probes skipped",
                    },
                    {
                      value: "39–94",
                      label: "CHECKS / DIMENSION",
                      note: "Fresh targeted groups",
                    },
                    {
                      value: "4–6s",
                      label: "FIRST QUESTION",
                      note: "Documented fast profile",
                    },
                    {
                      value: "2.7 / 3.1s",
                      label: "ENGAGEMENT",
                      note: "Queued / emitted",
                    },
                  ].map((metric) => (
                    <div
                      key={metric.label}
                      className="border border-border/60 bg-surface p-5"
                    >
                      <div className="font-display text-2xl text-foreground">
                        {metric.value}
                      </div>
                      <div className="mt-2 text-[10px] font-semibold tracking-[0.14em] text-accent">
                        {metric.label}
                      </div>
                      <p className="mt-2 text-xs leading-[1.6] text-subtle">
                        {metric.note}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <CviRubricChart />
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="border border-border/60 bg-surface p-6">
                    <span className="text-[10px] font-semibold tracking-[0.14em] text-accent">
                      REPO-BACKED EVIDENCE
                    </span>
                    <p className="mt-3 text-[13px] leading-[1.8] text-muted">
                      Full suite: <span className="text-foreground">435 passed, 4 skipped</span>. Evidence-contract
                      tests require every claim to resolve to a same-session
                      response and a verbatim source quote. Evaluator
                      calibration, semantic-redundancy and knowledge-quality
                      probes cover adaptive choice without claiming live model
                      runs. Provider-boundary tests keep the suite offline.
                    </p>
                  </div>

                  <div className="border border-border/60 bg-surface p-6">
                    <span className="text-[10px] font-semibold tracking-[0.14em] text-accent">
                      HOSTED AVAILABILITY CHECK
                    </span>
                    <p className="mt-3 text-[13px] leading-[1.8] text-muted">
                      A neutral smoke check through the public demo pool moved
                      from invite to <code className="font-mono text-[10px] text-accent-light">deliver_question</code>,
                      advanced to listening and completed a typed response. The
                      cold hosted check took <span className="text-foreground">84.5s</span> to deliver
                      the first question and <span className="text-foreground">49.4s</span> to process
                      the response, so it is availability evidence, not a
                      performance benchmark.
                    </p>
                  </div>
                </div>

                <p className="mt-5 max-w-3xl text-[13px] leading-[1.8] text-subtle">
                  The rubric measures deterministic execution contracts, not
                  human-rated question quality, participant satisfaction or
                  production traffic capacity. Full method and raw scores are
                  in the repository evaluation log.
                </p>
              </section>

              {/* Status */}
              <section
                id="status"
                className="mt-20 scroll-mt-28 border-t border-border/50 pt-16"
              >
                <span className="text-xs font-semibold tracking-[0.14em] text-accent">
                  07 — STATUS &amp; ARCHITECTURE
                </span>

                <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.025em] text-foreground md:text-4xl">
                  A working loop with
                  <br />
                  explicit boundaries.
                </h2>

                <p className="mt-6 max-w-3xl text-[15px] leading-[1.8] text-muted">
                  The portfolio build is a hosted FastAPI service with a
                  participant UI and a replaceable speech service. LangGraph
                  drives the research loop; the API layer signs short-lived
                  participant capabilities and writes to a durable repository,
                  checkpointer, read model, voice outbox and audit log. A
                  durable worker processes responses. Python, LangGraph,
                  LangChain and Groq drive the model boundary.
                </p>

                <div className="mt-10 border border-accent/30 bg-accent/[0.03] p-7">
                  <span className="text-[10px] font-semibold tracking-[0.14em] text-accent">
                    DEPLOYMENT SHAPE
                  </span>
                  <p className="mt-3 text-[15px] leading-[1.8] text-muted">
                    The hosted profile uses PostgreSQL for persistence, SQLite
                    for offline tests, server-side VAD and speech services kept
                    behind explicit provider boundaries. The fast profile uses
                    Groq as the model boundary while storage and speech remain
                    independently replaceable. No participant recordings or
                    client data are stored in this portfolio.
                  </p>
                </div>
              </section>

              {/* Future scope */}
              <section
                id="future"
                className="mt-20 scroll-mt-28 border-t border-border/50 pt-16"
              >
                <span className="text-xs font-semibold tracking-[0.14em] text-accent">
                  08 — FUTURE SCOPE
                </span>

                <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.025em] text-foreground md:text-4xl">
                  From an adaptive interview loop
                  <br />
                  to market intelligence.
                </h2>

                <p className="mt-6 max-w-3xl text-[15px] leading-[1.8] text-muted">
                  The next stage is not another prompt. It has two layers:
                  harden the current platform for production, then explore a
                  longer-term Intelligence Fusion Engine. Every future
                  capability keeps evidence provenance, consent and provider
                  boundaries intact.
                </p>

                <div className="mt-10">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <span className="text-[10px] font-semibold tracking-[0.14em] text-accent">
                      FOUNDATIONAL PLATFORM SCOPE
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.08em] text-subtle">
                      01 / 03
                    </span>
                  </div>

                  <p className="mt-3 max-w-3xl text-[13px] leading-[1.8] text-muted">
                    The current demo is built on replaceable boundaries. These
                    are the production prerequisites before any broader
                    intelligence claim.
                  </p>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {futureScopeFoundations.map((item) => (
                      <div
                        key={item.title}
                        className="border border-border/60 bg-surface p-6"
                      >
                        <h3 className="font-display text-base text-foreground">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-[13px] leading-[1.75] text-muted">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 border-t border-border/50 pt-10">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <span className="text-[10px] font-semibold tracking-[0.14em] text-accent">
                      RESEARCH MEASUREMENT LAYER
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.08em] text-subtle">
                      02 / 03
                    </span>
                  </div>

                  <p className="mt-3 max-w-3xl text-[13px] leading-[1.8] text-muted">
                    A stronger measurement and operations layer around the loop
                    already built.
                  </p>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {researchMeasurementScope.map((item) => (
                      <div
                        key={item.title}
                        className="border border-border/60 bg-surface p-6"
                      >
                        <h3 className="font-display text-base text-foreground">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-[13px] leading-[1.75] text-muted">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 border-t border-border/50 pt-10">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <span className="text-[10px] font-semibold tracking-[0.14em] text-accent">
                      LONGER-TERM DIRECTION · FUTURE CONCEPT
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.08em] text-subtle">
                      03 / 03
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-2xl text-foreground">
                    From consumer voice to market intelligence.
                  </h3>

                  <p className="mt-4 max-w-3xl text-[15px] leading-[1.8] text-muted">
                    Evolve CVI from an adaptive AI interviewer into an
                    autonomous consumer and market intelligence platform that
                    connects what people say, what they do, and what the market
                    reveals.
                  </p>

                  <div className="mt-8 border border-accent/30 bg-accent/[0.03] p-6 md:p-8">
                    <span className="text-[10px] font-semibold tracking-[0.14em] text-accent">
                      CVI INTELLIGENCE FUSION ENGINE · EVIDENCE WORLDS
                    </span>
                    <p className="mt-3 max-w-3xl text-[13px] leading-[1.8] text-muted">
                      Align products/variants, time periods, regions and
                      segments; detect trends, compare evidence, identify
                      contradictions and generate testable hypotheses.
                    </p>

                    <div className="mt-6 grid gap-4 lg:grid-cols-3">
                      {fusionEvidenceWorlds.map((world) => (
                        <div
                          key={world.title}
                          className="border border-border/60 bg-background/40 p-5"
                        >
                          <h4 className="font-display text-sm text-foreground">
                            {world.title}
                          </h4>
                          <p className="mt-3 text-xs leading-[1.75] text-muted">
                            {world.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div className="border border-border/60 bg-surface p-6">
                      <span className="text-[10px] font-semibold tracking-[0.14em] text-accent">
                        KEY CAPABILITIES
                      </span>
                      <ul className="mt-3 space-y-2 text-[13px] leading-[1.7] text-muted">
                        {fusionCapabilities.map((capability) => (
                          <li key={capability} className="flex gap-3">
                            <span className="text-accent">—</span>
                            <span>{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border border-border/60 bg-surface p-6">
                      <span className="text-[10px] font-semibold tracking-[0.14em] text-accent">
                        DATA STRATEGY
                      </span>
                      <p className="mt-3 text-[13px] leading-[1.8] text-muted">
                        First-party data foundation; authorized external data;
                        public signal enrichment; clear boundaries against
                        private marketplace data, login bypass, CAPTCHA bypass
                        or access-control bypass.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 border border-border/60 bg-surface p-6">
                    <span className="text-[10px] font-semibold tracking-[0.14em] text-accent">
                      TRUST GUARDRAILS
                    </span>
                    <p className="mt-3 text-[13px] leading-[1.8] text-muted">
                      Preserve provenance; do not merge truths blindly;
                      hypotheses not automatic conclusions; privacy and
                      compliance; reliable product identity via
                      GTIN/EAN/UPC/ASIN/SKU/MPN/model number.
                    </p>
                  </div>

                  <div className="mt-8">
                    <span className="text-[10px] font-semibold tracking-[0.14em] text-accent">
                      PHASED ROADMAP
                    </span>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                      {cviRoadmap.map((stage, index) => (
                        <div
                          key={stage}
                          className="border border-border/60 bg-surface p-4"
                        >
                          <span className="font-mono text-[10px] text-accent">
                            0{index + 1}
                          </span>
                          <p className="mt-2 text-xs leading-[1.6] text-foreground">
                            {stage}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Links */}
              <div className="mt-24 flex flex-wrap gap-4 border-t border-border/50 pt-10">
                <a
                  href={CUSTOMER_VOICE_RESEARCHER_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-border px-5 py-3 text-sm text-muted transition-colors hover:border-accent hover:text-foreground"
                >
                  Researcher Dashboard (demo)
                  <span>↗</span>
                </a>

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
