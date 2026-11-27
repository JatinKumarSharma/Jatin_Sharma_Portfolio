# Cover letter kit — truthful, evidence-led, adaptable

Two versions: **A** for a job application, **B** for a founder / collaboration conversation.
Both are written from the identity: **AI Engineer (Data & Evaluation)**.

Replace the bracketed parts — the letter only works when one paragraph is genuinely company-specific.

---

## A. Job application — master letter (~300 words)

```
Dear [Hiring Manager's name],

I build agentic systems the way I was trained to evaluate them: with evidence, guardrails and explicit failure cases. For two years at Innodata, I produced multimodal training data and response-quality signals for Meta's model programs — and I now apply that same discipline to the agents I build.

[COMPANY PARAGRAPH — 2 sentences. See the guide below.]

The evaluation side of my work is specific. I scored model responses on hallucination, factuality, safety, originality, helpfulness and harmlessness, producing per-dimension signals consumed by engineering teams in RLHF and alignment cycles — 100/100 on internal and client QA across most jobs. I segmented and labeled robotic actions against instructions at a 90+/100 average, and worked on video object, activity and PII segmentation. Annual performance was rated 4/5 in both precision and productivity.

My title was AI-LLM Analyst, but the work was closer to evaluation engineering. I didn't just label outputs — I applied rubrics, calibrated against quality benchmarks and fed signals back into model improvement. Alongside that work I built and deployed two agents: a tool-calling financial research assistant — a complete AI model with compatibility with other popular LLM models — that grounds answers in retrieved data and handles provider failures honestly, and a LangGraph interviewer that generates each question from what it has already learned, with structured evidence tracking and adaptive termination.

I'd welcome the chance to discuss how this combination — data quality, model evaluation and hands-on agent engineering — could help [Team/Company] with [specific problem or goal from the job description]. Would a 20-minute conversation be useful?

Thank you for your time and consideration.

Sincerely,
Jatin Sharma
New Delhi · jatin9427@gmail.com · [LinkedIn](https://www.linkedin.com/in/jatin-sharma-ai-engineer) · [Portfolio](https://jatin-sharma-portfolio-ten.vercel.app/)
```

---

## B. Founder / collaboration version (~180 words)

Use this when reaching out to a startup, an engineering lead, or someone building agents — not as a job application.

```
Subject: Evaluation for [Company]'s agents — one idea

Hi [Name],

I spent two years producing training data and response-quality signals for Meta's multimodal programs — scoring hallucination, factuality, safety and helpfulness, segmenting video and PII, and labeling robotic actions against instructions. 100/100 QA on most response-evaluation jobs, 90+/100 on robotics.

The thing I notice in most agent products is that the demo works and nobody can tell whether the agent is actually right. That's the gap I work on. I built a tool-calling research agent with explicit grounding rules, and a LangGraph interviewer that tracks evidence and confidence before it decides what to ask next.

[ONE SENTENCE ABOUT THEIR PRODUCT OR PROBLEM.]

I'd be glad to share a short eval checklist I use for tool-calling agents — no pitch. Would it be useful to compare notes for 20 minutes?

Jatin
[LinkedIn](https://www.linkedin.com/in/jatin-sharma-ai-engineer) · [Portfolio](https://jatin-sharma-portfolio-ten.vercel.app/)
```

**Why this works:** it leads with proof, not interest; it gives before it asks; the ask is 20 minutes, not a job.

---

## How to write the company paragraph

This is the paragraph that separates a sent letter from a templated one. Two sentences are enough.

**Fill-in template:**
> "I noticed [specific product / feature / engineering blog post / job-description detail]. The part that stands out to me is [the hard problem they're actually facing] — which is exactly where [your evaluation/data background] becomes useful."

**Example for a company with an agent product:**
> "I read your post on [specific technical detail] — the point about agents failing silently on incomplete retrieval is the problem I spent two years working around from the data side. A rubric that catches that failure mode is what I'd want to bring to your team first."

**Example for a startup hiring an applied AI engineer:**
> "You're building [product] for [users], which means the system has to be right more often than it is impressive. Your opening for an applied AI engineer mentions reliability — that's the part of agent systems I've focused on, both in model evaluation and in the agents I've shipped."

**If you genuinely can't find anything specific:** don't send the letter yet. Ten minutes of research will beat any wording trick.

---

## What changed from your old cover letter

| Old | New | Why |
|---|---|---|
| "Dear Hiring Manager" | Named recipient | Generic salutation signals mass application. |
| "I am writing to express my interest in an AI Engineer role" | Value proposition in line 1 | Lead with what you can do, not what you want. |
| "2 years of experience working on LLM training, evaluation, alignment, RLHF" | "produced training data and response-quality signals consumed by RLHF/alignment cycles" | Truthful and survives the first technical question. |
| "looking to transition deeper into building production-oriented intelligent systems" | "the work was closer to evaluation engineering… alongside that I built and deployed two agents" | Reframes the analyst title as an asset, not a gap. |
| Long project descriptions | Two compact examples tied to reliability | Proof, not feature lists. |
| "what particularly interests me about this opportunity is the possibility of…" | A specific, company-researched paragraph | Shows you understand their problem. |
| "I would welcome the opportunity to discuss how my experience… could contribute to your team" | A concrete 20-minute ask | Gives the reader an easy next step. |
| No numbers | 100/100, 90+/100, 4/5, 2 years | Numbers are the evidence. |

---

## Rules before you send

1. Keep it to one page / ~300 words.
2. Never say you trained models or owned alignment — you supplied the data and signals.
3. Use the same phrases as the resume and LinkedIn (`reason, retrieve and act`, `100/100 internal and client QA`, `4/5 in both precision and productivity`).
4. Attach nothing to the first message; link to the portfolio instead.
5. Send the job version to a named person when you can find one (engineering lead, hiring manager, founder).
6. Follow up once after 5–7 business days with one new, useful line — not "just checking in."
