# Adaptive Customer Voice Interviewer — fresh evaluation log

Run date: **2026-11-27**

This log records a fresh, offline-first evaluation of the Customer Voice
Interviewer (CVI) repository. It is intentionally separate from the Financial
Research Assistant's model-response 5-D scores: CVI is scored as an agent
system, not as a free-form answer generator.

## Scope

- Source: `adaptive-customer-voice-interviewer` from
  `JatinKumarSharma/Agentic_AI_Projects` at commit prefix `c3aea90`.
- Environment: local Python 3.14, repository requirements installed, provider
  boundary set to the offline-safe Ollama profile. No live model key was used
  for the scored run, and no network, GPU or microphone access was required.
- Full command shape: `PYTHONPATH=. python -m pytest -q`.
- Hosted smoke: public demo pool only; short-lived participant capability was
  held in process memory and discarded. No token, transcript export or personal
  data was written to the portfolio repository.

## Full suite

```text
435 passed, 4 skipped, 13 warnings in 12.78s
```

The four skipped tests are opt-in live-LLM integration probes. They are not
counted in the scored baseline because no live model credential was used in
this run.

## CVI system rubric (v1)

Scores are 1–5, independent, and not aggregated. The rubric maps each dimension
to a fresh targeted test group run against the same checkout:

- **5.00** — all selected checks in the dimension pass and the dimension covers
  both an expected path and at least one failure/recovery path.
- **4.00** — one non-critical selected check fails, or only expected paths are
  covered.
- **3.00** — multiple non-critical failures, but the main contract holds.
- **2.00** — a critical contract fails on one path.
- **1.00** — the dimension cannot be exercised reliably.

| Dimension | Fresh checks | Score | What it covers |
|---|---:|---:|---|
| Evidence grounding | 39/39 | **5.00** | Report claims, evidence retrieval, evidence API, memory reports, and verbatim source-quote contracts |
| Adaptive decision quality | 50/50 | **5.00** | Proposal evaluation/calibration, gap analysis, state updates, target selection, generation, and response outcomes |
| Voice & timing integrity | 54/54 | **5.00** | Voice profile/providers, acknowledgement events, output events, transcription/synthesis, local stream, contextual engagement, timing, and graph voice bridge |
| Security & tenancy | 94/94 | **5.00** | Abuse limits, participant capabilities, link expiry, account access, tenant audit, researcher access, and PostgreSQL roles |
| Resilience & provider boundaries | 39/39 | **5.00** | Durable checkpointer/worker/queue, shared session state, concurrency, provider config, render profile, and observability |

Raw machine-readable scores: `eval-runs/cvi_rubric_v1.json`.

These scores are not comparable to the Financial Research Assistant's v5 model
scores. They answer a different question: can the CVI system keep its evidence,
decision, voice, safety and recovery contracts under deterministic execution?

## Repository-backed measurements

From `PORTFOLIO.md` in the source repository:

| Check | Result |
|---|---:|
| Offline test suite | 435 passed, 4 skipped |
| First question, fast provider profile | ~4–6 seconds |
| Response processing in successful smoke | ~4 seconds |
| Contextual engagement queued | ~2.7 seconds |
| Contextual engagement emitted | ~3.1 seconds |

## Hosted availability smoke

A neutral smoke check through the public demo pool confirmed:

1. `/demo/invites/<slug>` issued a short-lived participant capability.
2. `/sessions/<id>/start` returned `deliver_question`.
3. `/sessions/<id>/advance` moved the graph to `await_consumer_response`.
4. A typed transcript submitted through `/sessions/<id>/responses` reached
   `completed` status.

Observed wall-clock timings were **84.5s** for first question delivery and
**49.4s** for response processing on this cold hosted check. These are recorded
as availability evidence, not as a performance benchmark; the repository's
~4–6s first-question figure is the documented fast-profile measurement.

## Interpretation

The scored baseline is deliberately narrow and reproducible: deterministic
offline contracts. It does not claim human-rated question quality, participant
satisfaction, production traffic capacity or model-training work. Future work
should add a consented, question-level quality set and live timing dashboards
before making performance claims from public traffic.
