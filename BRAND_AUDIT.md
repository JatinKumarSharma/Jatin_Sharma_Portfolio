# Jatin Sharma — Portfolio, Resume, Cover Letter & Brand Audit

**Date:** 22 Nov 2026
**Reviewed:** live Vercel site, portfolio source, GitHub profile + repos, README of the flagship project, resume PDF, cover letter PDF
**Not reviewed:** LinkedIn profile body (login-gated — only the public URL and the 3 linked posts in your site were visible)

---

## 1. Executive summary — the honest scorecard

| Dimension | Score | One-line verdict |
|---|---:|---|
| **Optimized for an AI / Agentic AI Engineer role** | **58 / 100** | The language is right; the *proof* is thin and a few inconsistencies cost you trust. |
| **Getting noticed by a company or startup (hire / collaborate / partner)** | **38 / 100** | You have the raw materials but almost no discovery engine, no sharp niche, and no clear "what I can do for you". |
| **Visual identity & narrative voice (the brand "feel")** | **72 / 100** | Genuinely good. Editorial, calm, distinctive. This is your strongest asset. |
| **Authority / social proof / distribution** | **25 / 100** | 0 stars, 0 followers, 1 shipped project, no owned content, no SEO. Invisible to people who don't already know you. |

**Bottom line:** You are not far from a strong personal brand — you have an unusually good *story* (model-evaluation expert who builds agentic systems) and a beautiful site. But right now the story is **asserted, not demonstrated**, and the whole ecosystem is **built to be admired by someone who is already looking at it**, not to be **found** by someone who isn't.

The single highest-leverage move: **turn "evaluation-first agentic systems" into your niche and prove it with one undeniable, measurable, always-on project.** That one decision fixes the role score, the startup score, and the brand score simultaneously.

---

## 2. What is genuinely strong (keep and amplify)

1. **A real, differentiated story.** Your day job is RLHF, red-teaming, response ranking and SFT data — i.e. you understand *why models fail*. Most people building agents do not. That is a genuine moat if you lead with it.
2. **A coherent one-liner across assets:** "Building intelligent systems that reason, retrieve and act." It appears in the hero, the work section, the experience section ("Moving from working with AI models toward engineering intelligent systems…") and the cover letter. Consistency is real brand equity.
3. **The case study is unusually thorough.** 7 sections (problem → solution → architecture → decisions → capabilities → implementation → learnings). Most junior portfolios have zero. This is a strong foundation.
4. **The project README is excellent** — architecture diagram in ASCII, API endpoint table, provider abstraction, tested workflows, honest limitations, local-run instructions. This is the best piece of technical writing in your whole stack.
5. **Writing section signals a thinking person.** Causal reasoning, emergence, representations — good topics that map to how agents reason.
6. **Design/voice.** Dark, restrained, editorial typography, consistent accent color, deliberate whitespace. It reads like a product, not a template.
7. **The GitHub bio is sharp:** "Agentic AI & LLM Engineer | RLHF · Prompt Engineering · LangChain · LangGraph · RAG · Multi-Agent Systems". Good keyword density and positioning.

---

## 3. Critical credibility leaks — fix these first (30 minutes of work)

These are small edits doing real damage:

| # | Issue | Where | Why it hurts |
|---|---|---|---|
| 1 | **"APIFlask"** in the case study metadata and implementation section, while the resume, README and rest of the site say **FastAPI**. | `CaseStudy.tsx` (lines ~66, ~627) | A recruiter or engineer who spots this assumes the rest is also unreliable. It is the kind of detail that kills a shortlist. |
| 2 | Case study bottom **"View Repository"** links to your GitHub *profile*, not the project repo. | `CaseStudy.tsx` (~line 707) | Breaks the proof chain at the last step. |
| 3 | Experience section says company = **"Current Role"** instead of **Innodata India Pvt. Ltd.**, and omits RLHF / red-teaming / evaluation entirely. | `Experience.tsx` | The site doesn't corroborate the resume; it actively contradicts it. |
| 4 | **"Robotics AI" is real work** (confirmed by you) but is absent from the resume, while the **Content Writer** role on the site is absent from the resume; the site's 2023–2024 timeline doesn't match the resume's June 2024 start. | `Experience.tsx` vs resume | Real work is going uncredited while inconsistent timelines read as embellishment. Fix by adding robotics to the resume and aligning dates. |
| 5 | Project card tech chips say **Python · Financial APIs · FastAPI · Data Analysis** — omitting LangChain, tool calling, Groq/Gemini/Ollama. | `Work.tsx` | You are under-selling the most interesting part of the project on the most visible part of the site. |
| 6 | **`<title>jatin-ai-portfolio</title>`** with no meta description, no Open Graph tags. | `index.html` | When a link is pasted into LinkedIn/Slack/WhatsApp, it shows a raw repo name. Zero click-through from search. |
| 7 | **Live demo cold-starts on Render free tier** — I observed ~40s "SERVICE WAKING UP" and an initial HTTP 503. | `financial-analyst-api-fw98.onrender.com/docs` | You label it "LIVE" with a pulsing dot. A hiring manager who clicks and sees a loading screen or 503 in the first 5 seconds will leave. |
| 8 | Portfolio repo **README is still the default Vite template**. | GitHub repo | A portfolio repo with a boilerplate README undermines "I care about craft". |
| 9 | GitHub profile links to a **Facebook "friends/suggestions" URL** and Instagram. | GitHub profile | Noise that dilutes the professional signal. |

**Fix 1–6 today. Fix 7 by adding a keep-warm ping (e.g. a cron/UptimeRobot hitting `/` every 10 min) or moving to a always-on plan, and add a small note "Free-tier cold start may take ~30s". Fix 8 with a 30-line README. Fix 9 by removing the non-relevant links.**

---

## 4. Score breakdown — AI Engineer role (58/100)

### What works for ATS and recruiters
- Keyword coverage is excellent: LangChain, LangGraph, RAG, hybrid RAG, MCP, tool calling, multi-agent, guardrails, RLHF, SFT, red-teaming, ChromaDB, FAISS, Neo4j, cross-encoder reranking, FastAPI, Python.
- Two-plus years of relevant LLM work with a named employer and dates.
- Clear target-role statement in the summary.
- Three projects with named stacks — including two using LangGraph and one using MCP, which is current.

### What is costing you interviews

1. **Zero quantified impact anywhere.** Not one number in the resume or cover letter: no dataset sizes, no response volumes, no quality-lift percentages, no latency, no cost per query, no eval-set size. For an AI engineer role in 2026, "improved quality" without a number reads as coursework. *Even honest ranges help: "ranked ~5k response pairs/week", "SFT sets of 1k–5k examples across 3 modalities".*
2. **Your job title is "Analyst" but your target is "Engineer".** You need an explicit bridge sentence, not a hope. Right now the cover letter says "I am looking to **transition deeper into** building production-oriented intelligent systems" — that frames you as *aspiring*, not *already doing*. Reframe: *"I already build and deploy agentic systems; my evaluation background is what makes them reliable."*
3. **Two of three projects are "In Development".** On a resume, that is a negative signal — it says "ideas, not shipped". Either ship them with a demo (even a rough one) or replace them with one finished project.
4. **The flagship case study undercuts its own claim.** It says "production-oriented" in the hero, then says the current implementation is a foundation and "the next stage would focus on… evaluation datasets and execution observability." An engineer reading that hears "no evaluation". Given your RLHF/eval background, this is the exact opposite of the impression you want. Reframe to: *"What I validated: X tool-call accuracy on a 30-question eval set, Y-second p95 latency, Z cost/query. What's next: tracing."*
5. **Cover letter is generic.** "Dear Hiring Manager", no company name, no reference to their product or problem, no "why you specifically", no ask. It reads like a templated letter that could go to 100 companies — and it probably will be treated that way.
6. **Cover letter spends its first third on what you want** ("looking to transition deeper…", "what particularly interests me…"). Lead with what you can do for them.
7. **Skill list is very long** (~60 tools). ATS likes it; humans skim past it. Cut to 5 clusters with a proof point under each.

**Realistic read:** With this resume you will get *some* callbacks for AI/LLM analyst, data-ops and junior agentic-role positions. For competitive "AI Engineer / Agentic AI Engineer" roles you will be filtered out at the shortlist stage by the lack of numbers and the analyst→engineer framing — not by your skills.

---

## 5. Score breakdown — getting noticed by a startup (38/100)

Startups don't read resumes first. They notice people who (a) are visibly shipping in public, (b) have a sharp, memorable point of view, and (c) make it trivially easy to start a conversation.

### What you have
- A polished site and a genuinely good case study.
- Three published LinkedIn posts with real conceptual content.
- A live (if sleepy) API and a project README that shows how you think.

### What is missing

| Gap | Consequence |
|---|---|
| **No niche.** "AI Engineer \| GenAI & Agentic AI Engineer" is what 50,000 profiles say. | Nobody can refer you in one sentence. |
| **SEO is effectively zero** (default title, no description, no OG image, no structured data). | You are undiscoverable by Google. A startup founder searching "evaluation-first agentic systems" will never find you. |
| **No owned writing.** All 3 "Writing" items point to LinkedIn with UTM-tracking URLs. | LinkedIn owns the audience and the content; you get no SEO, no email capture, no portfolio of your thinking. |
| **1 shipped project, 0 stars, 0 followers, 1 following.** | No social proof. "Build in public" requires an audience; you have none yet. |
| **No clear offer.** "Let's Scale Intelligence" / "Have an interesting problem?" is poetic but not actionable. | A founder doesn't know whether to hire you for a month, partner on a product, or ask for a workshop. |
| **No calendar link, no availability signal, no "open to" statement, no downloadable resume.** | Each missing item adds friction at the exact moment of interest. |
| **No testimonials, recommendations, talks, podcasts, or community contributions.** | You are an unknown quantity to a stranger. |

### Your unfair advantage for partnerships
Founders need people who can answer: *"My RAG/agent demo works in a notebook — why is it unreliable in production, and how do I know if it's getting better?"* That is **literally your day job**. Lead with that. It converts you from "another agent builder" into "the person who makes agents trustworthy", which is a collaboration/consulting hook, not just a job application.

---

## 6. Brand strategy — the positioning I'd recommend

### Pick this niche
> **Evaluation-first agentic systems for research and insight.**
> *Tagline:* "I build agents that reason, retrieve and act — and prove they work."

Why this works:
- It fuses your two halves (model evaluation + agent engineering) instead of choosing one.
- It is specific enough to be remembered and referred ("he's the eval-first agent guy").
- It is timely: every startup has an agent; almost none can measure it.
- It gives you an endless, differentiated content engine (eval sets, failure modes, guardrails, red-teaming agents).

Alternative niches if you prefer a different direction:
- **Autonomous consumer research agents** (leads with the Customer Voice Interviewer + ResearchOS — very startup-friendly, "AI that interviews your users and synthesizes insight").
- **Multimodal data → model quality** (leads with Innodata work — credible but smaller/less exciting market).

### Rewrite the hero (drop-in copy)
- Badge: `EVALUATION-FIRST AGENTIC SYSTEMS`
- H1: **"Agents that reason, retrieve and act. With proof they work."**
- Sub: "I build LLM systems for research and insight — and bring 2+ years of RLHF, red-teaming and model evaluation to make them reliable, not just impressive."
- CTA 1: `See the work`, CTA 2: `Book a 20-min call`

### Rewrite the "offer" in Contact
Replace "Let's Scale Intelligence" with something a founder can act on:
> **"I help early teams turn an LLM demo into an evaluated agent — in 4 weeks."**
> Open to: Agentic AI Engineer roles · applied-AI partnerships · evaluation consults.
> Based in New Delhi (IST) · Remote-friendly · [Calendly link] · [Download resume]

### Build a "proof stack" (in priority order)
1. **One flagship project that is always up**, with a 60-second Loom demo embedded in the case study.
2. **A real evaluation artifact**: a 20–50 question eval set, a small results table (tool-call accuracy, groundedness, latency, cost/query), and 3 failure cases you fixed. This single artifact would separate you from 95% of agentic portfolios — and it's your superpower.
3. **A second shipped project** (finish the Customer Voice Interviewer; it's the best startup-bait you have).
4. **3–5 on-site technical posts** with your own POV, cross-posted to LinkedIn.
5. **Social proof**: 2 recommendations, 1 testimonial from someone who used your API, GitHub stars from genuine engagement.

### Distribution (the part that actually gets you noticed)
- **LinkedIn:** 3 posts/week on 3 pillars — (1) agent architecture teardowns, (2) evaluation/red-teaming lessons from your day job, (3) build-in-public updates on your projects. Comment substantively on 10 posts/day from AI founders and LLM engineers. Your profile is a *destination*; comments are the *distribution*.
- **GitHub:** pin 3 repos, write real READMEs, add tests + a CI badge, contribute small PRs to LangChain/OpenBB-adjacent repos. Contributions to others' projects create inbound.
- **Owned blog/Substack:** publish the full versions of your LinkedIn posts on your own domain/substack, then link from the site's Writing section. This turns "READ ON LINKEDIN →" into "READ THE FULL ARTICLE →".
- **Community:** 1 talk or live demo per month at a local meetup / online community (e.g. AI/LLM groups). A speaker bio is a powerful trust signal.
- **Warm outreach:** 10 personalized messages/week to founders/eng leads with a specific observation about their product + a link to your eval-first case study. Never attach a resume to the first message.

---

## 7. Prioritized action plan

### P0 — this week (credibility + discoverability)
- [ ] Fix APIFlask → FastAPI (2 places), case-study repo link, "Current Role" → Innodata, align timelines, add LangChain/LangGraph chips.
- [ ] Add real `<title>`, meta description, Open Graph image, and `Person` JSON-LD to `index.html`.
- [ ] Add a keep-warm ping for the Render service (or note cold starts).
- [ ] Rewrite the portfolio repo README; remove junk links from GitHub profile; pin repos.
- [ ] Add resume download + Calendly + "Open to" line to Contact.

### P1 — next 2 weeks (proof)
- [ ] Publish the evaluation artifact (eval set + results table + failure cases) in the case study.
- [ ] Reframe the "NEXT ITERATION" text so it doesn't sound like evaluation doesn't exist.
- [ ] Embed a 60-second demo video / screenshots in the case study.
- [ ] Ship (or demote) the two "In Development" projects on the resume.
- [ ] Rewrite the cover letter per §8; add 2–3 quantified lines to the resume.

### P2 — next 30–90 days (brand & reach)
- [ ] Move Writing content to owned blog; publish 2 posts/week; cross-post to LinkedIn.
- [ ] Ship the Customer Voice Interviewer as the second flagship project.
- [ ] Add testimonials, GitHub stars, and at least one talk/demo appearance.
- [ ] Weekly warm outreach (10/week) with the eval-first positioning.
- [ ] Add Vercel Analytics / Search Console to measure what actually brings people in.

---

## 8. Cover letter — specific rewrite notes

**Current weaknesses:** generic salutation; no company-specific paragraph; leads with what *you* want; "transition deeper" signals junior; no numbers; no clear ask.

**Suggested structure (~300 words):**

1. **Line 1 — value proposition, not interest.** "I build tool-calling agents that are measured, not just demoed — and I spend my days at Innodata doing the RLHF, red-teaming and response evaluation that most agent builders skip."
2. **2 sentences — why this company**, referencing a specific product, problem or engineering blog post. This is the paragraph 90% of applicants omit.
3. **Evidence:** one project + one number ("multi-step financial research agent, 3 LLM providers, grounded responses; published eval set and results here").
4. **Bridge:** "My analyst title undersells the engineering I do — here's what I've shipped." (Address the title gap head-on, confidently.)
5. **Ask:** "Would a 20-minute call to discuss how I'd approach [specific problem] be useful?"

**Delete/replace:** "I am looking to transition deeper into…" → "I already build and deploy…"; "what particularly interests me about this opportunity is the possibility of working beyond isolated LLM interactions" → a concrete sentence about their system.

---

## 9. Caveats

- LinkedIn profile body could not be read (login required). This assessment uses the public URL, your GitHub bio, the 3 post links on your site, and the two PDFs. If your LinkedIn headline/About/Experience differ materially from the resume, align them to the same positioning.
- The live API was cold-starting when checked (Render free-tier behavior). The 58s/38s scores assume you fix the demo reliability; if the demo is reliably fast, role-fit rises a few points.
- Scores are directional judgments based on what a recruiter/founder can actually observe, not absolute measures of your ability.

---

## 10. Revised positioning after your clarification of the actual job

### What you actually do (in your words)
You work via Innodata for a large technology client on multimodal model programs:
- Segment objects in videos and label them, the activity, other attributes, and PII.
- Score model responses on hallucination, originality, helpfulness, harmlessness and related parameters — these scores become signals fed back to improve the model.
- Segment robotic actions and label the action plus how well it aligns with the given instruction.
- Work across many large-scale data programs whose output is later used to train models.

### The honest gap this reveals
Your current resume says "2+ years working on large language model **training**, evaluation, alignment, RLHF" and "created SFT datasets." You do **not** train models and you do **not** own model alignment — you **produce the data and evaluation signals that engineers use** to do those things. That is a real, valuable skill, but it is a different claim. In an interview, "what model did you train?" is the question that exposes the gap, and it is asked early.

**This is not a reason to hide the work — it is the reason to lead with it more precisely.** Truthful framing raises credibility; inflated framing collapses it under the first technical follow-up.

### The reframe that makes you stand out
> **Do not out-build the crowd. Out-measure them.**

Thousands of candidates can follow a LangChain tutorial and ship a RAG demo. Almost none have spent two years producing multimodal training data and per-dimension response-quality scores for a major model at scale. That is the layer that decides whether a model or an agent is actually good — and in 2026, evals, data quality and reward modeling are among the hardest skills to hire for.

**Your positioning:** *"I build the data and evaluation layer that makes models and agents reliable — and I build agents myself."*
**Working title:** *AI Data & Evaluation Engineer → Agentic AI Engineer* (show the direction, don't fake the destination).

### Roles this actually maps to
LLM Evaluation / Model Quality Analyst · Data & Evaluation Engineer · RLHF / Preference Data Specialist · Multimodal Data Engineer · Agent Evaluation Engineer · Applied AI Engineer (agentic, with the projects as proof).
It does **not** map to ML Research Engineer or core Model Trainer — don't spend cycles there.

### Truthful resume bullets (fill in the bracketed numbers with real figures)
- "Produced training-ready annotations for a global technology client's multimodal models — segmenting objects, activities and PII across **[N] hours / [N] clips** of video under defined labeling guidelines and quality benchmarks."
- "Scored **[N]/day** model responses across hallucination, originality, helpfulness and harmlessness, producing per-dimension quality and preference signals consumed by engineering teams in RLHF / alignment cycles."
- "Segmented and labeled robotic action sequences, grading instruction-alignment to create demonstration data used for robotics model training."
- "Maintained quality calibration and consistency across **[N]** concurrent data programs spanning text, image, video and robotic-action modalities."

Get the real numbers before writing anything else: volume per day/week, dataset size, team size, number of concurrent projects, accuracy/calibration thresholds. Numbers are the entire difference between "I labeled data" and "I operate evaluation infrastructure."

### The content moat — posts only you can credibly write
1. "What a hallucination score actually looks like inside a model-quality pipeline" (rubrics, inter-rater disagreement, edge cases).
2. "How we label PII in video data for a hyperscaler" (privacy + responsible AI, almost nobody writes this from experience).
3. "Why we score originality alongside helpfulness and harmlessness" (a genuinely unusual dimension — use it).
4. "From response scoring to agent evaluation: the rubric I'd use for tool-calling agents" (bridges your job to your financial agent project).
5. "Robotic action labeling: what 'aligned with the instruction' really means in training data."

These are your visibility engine. You are not competing with agent tutorials — you are the only person in the room who has done this work at scale.

### Revised scores with the honest positioning adopted
| Dimension | Before (overstated) | After (truthful + evaluated proof) |
|---|---:|---:|
| AI Engineer role fit | 58 | **~70** for eval / data / applied-AI roles |
| Startup notice & collaboration | 38 | **~55** once the eval-first niche and content engine are live |

### The focus order (one thing at a time)
1. **Truthful identity** — fix title, summary, bullets, site copy. Foundation for everything.
2. **Get the numbers** — one page of real metrics from your work. Without this, nothing else lands.
3. **Evaluation proof artifact** — a rubric + worked examples + agent eval results. Your flagship differentiator.
4. **Always-on demo** — keep-warm ping so "LIVE" is actually live.
5. **Content engine** — 2–3 posts/week on the five pillars above. This is how you become visible.
6. **Owned assets** — move Writing content to your own blog; add a downloadable "Agent Eval Checklist" lead magnet.
7. **GitHub credibility** — real README, tests, ship the second project.
8. **Social proof + outreach** — recommendations, one talk/demo, 10 warm messages/week with a clear offer.
