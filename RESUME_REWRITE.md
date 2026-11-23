# Resume rewrite — exact copy to use

Use this as the source of truth. Paste into your existing layout, keeping your design.
Everything below is truthful given the work you described on 22 Nov 2026.

---

## 1. Header / headline

**Use this:**

> **JATIN SHARMA**
> **AI Engineer (Data & Evaluation) | Multimodal & LLM Quality | Agentic AI Systems**
> New Delhi, India · 9773540197 · jatin9427@gmail.com
> LinkedIn · GitHub · Portfolio

**Why this headline:** it keeps the exact phrase "AI Engineer" for ATS, adds the honest qualifier that makes you credible, and signals the direction you're moving.

**Alternative if you want a stronger brand statement and less ATS emphasis:**
> AI Data & Evaluation Engineer → Agentic AI Systems

**Do not use:** "AI-LLM Engineer | GenAI & Agentic AI Engineer" or "2+ years of LLM training" — both claim more ownership than you have and collapse under the first technical question.

---

## 2. Professional summary (replace existing)

> AI engineer working at the data and evaluation layer of large-scale multimodal and LLM programs for Meta. Two years producing training-ready video, PII and robotic-action annotations, and per-dimension response-quality scores — hallucination, factuality, safety, originality, helpfulness and harmlessness — used by engineering teams in RLHF and alignment cycles. Annual performance rated 4/5 in both precision and productivity, with 100/100 internal and client QA scores on most response-evaluation jobs and a 90+/100 average on robotic-action work. Independently builds and deploys tool-calling agentic systems, with an evaluation-first approach to reliability. Seeking applied AI and agentic AI engineering roles where data quality and model evaluation matter.

**Note:** Meta can now be named because you are no longer on that engagement. Keep the phrasing "for Meta" / "Meta programs" — not "at Meta" — since you were employed by Innodata.

---

## 3. Work experience (replace existing bullets)

**AI-LLM Analyst — Innodata India Pvt. Ltd. (Meta multimodal programs)**
**June 2024 – November 2026**

- Produced training-ready multimodal data for Meta's model programs — segmented objects, activities and PII across extensive video datasets under defined labeling guidelines and quality benchmarks.
- Scored model responses on hallucination, factuality, safety, originality, helpfulness and harmlessness, producing per-dimension quality signals consumed by engineering teams in RLHF and alignment cycles; achieved 100/100 on internal and client QA in the majority of assigned jobs.
- Segmented and labeled robotic actions, grading each demonstration against the given instruction to create demonstration data for model training; maintained a 90+/100 average across internal and client QA.
- Sustained annual performance ratings of 4/5 in both precision and productivity while rotating across multiple concurrent programs spanning text, image, video and robotic-action modalities.
- Strongest personal performance on video annotation — the most extensive and demanding workflow in the program.

**Content Writer — AR Group of Education**
**2023 – 2024**

- Created structured educational content and research material, developing the documentation and communication foundation behind the annotation guidelines and evaluation rubrics you work with today.

**Delete from this section:** "training, evaluating and refining large language models" (you don't train models), "Performed RLHF workflows" → use "produced signals consumed by RLHF workflows", "Supported large-scale multimodal AI training pipelines" → use "produced training-ready data for".

---

## 4. Projects (two deployed, one in progress)

**Agentic Financial Research Assistant — shipped, deployed**
GitHub · Live API

- Built and deployed a tool-calling agent that performs multi-step financial research, dynamically selecting data tools and grounding answers in retrieved information.
- Supports Groq, Gemini and local Ollama through environment-based provider configuration, with provider-aware error handling.
- Designed explicit grounding rules: prefer retrieved tool data over model knowledge, disclose provider limitations, and never fabricate values.
- REST API via FastAPI, deployed on Render.

**Adaptive Customer Voice Interviewer — deployed**
GitHub · Live API

- Built an adaptive agentic interview system that autonomously conducts consumer research across product awareness, sentiment, needs, pain points, aspirations, purchase intent and buying constraints.
- Implemented a state-driven LangGraph architecture: Meta Planning, Answer Decomposition, Knowledge State Updates, Information Gap Analysis, Proposal Generation, Proposal Evaluation, Decision Policy and Reflection.
- Built dynamic question generation and evaluation driven by accumulated consumer knowledge rather than a fixed questionnaire.
- Added structured evidence tracking with information sufficiency, confidence, verification status and adaptive termination criteria.
- Voice interaction via speech-to-text and text-to-speech; FastAPI service deployed on Render.
- Tech: Python, LangGraph, LangChain, Groq, FastAPI, STT/TTS, Render.

**Currently building:** Research Operating System (hybrid RAG + MCP). Write-up and demo in progress.

**Important:** the deployment wording above is written ahead of the launch — only share this resume once the live URL is working, as you planned. Do not give ResearchOS shipped-language bullets until a demo exists.

---

## 5. Technical skills (condense to 5 clusters)

- **Data & Evaluation:** multimodal annotation, video segmentation, activity labeling, PII handling, response scoring, rubric application, quality calibration, inter-annotator consistency
- **LLM Quality & Alignment:** hallucination / factuality evaluation, safety and harmlessness scoring, originality assessment, preference and quality signals for RLHF, red-teaming exposure
- **Agentic Systems:** LangChain, LangGraph, tool calling, multi-step workflows, RAG, hybrid retrieval, MCP, guardrails
- **Backend & Retrieval:** Python, FastAPI, SQL, REST APIs, ChromaDB, FAISS, Neo4j, cross-encoder reranking
- **Models & Platforms:** OpenAI, Claude, Gemini, LLaMA, DeepSeek, Mistral, Ollama, Groq, OpenBB

**Cut:** Excel, BRD, UX writing, Generative AI Tools. They dilute the signal for this target.

---

## 6. Education & professional development (keep as-is)

- Agentic AI & LLM Engineering — Analytics Vidhya · Jun 2025 – Present
- PG Diploma, Data Science, ML & Neural Networks — Datatrained · Oct 2023 – Jan 2025
- B.Sc. (Hons) Agriculture — Noida International University · Oct 2019 – Aug 2023

---

## 7. Numbers still worth collecting (ask your team or check your records)

These would upgrade the bullets above from good to excellent:

- Hours or clips of video annotated
- Responses scored per day / week, or total for a job
- Number of concurrent projects / modalities
- Team size and your role within the annotation workflow
- Confirmed: 100 and 90+ are internal + client QA scores out of 100 — no need to reword these
- Any client-facing recognition or "best performer" notation

Do not invent any of these. The four numbers you already have (4/5, 4/5, 100, 90+) are enough for a strong first pass.

---

## 8. What changed and why

| Removed / changed | Reason |
|---|---|
| "LLM training", "model alignment" as owned work | You supply signals; engineers train. Precision builds trust. |
| "AI-LLM Engineer \| GenAI & Agentic AI Engineer" headline | Claims a destination; new headline shows direction honestly. |
| Long skill list (~60 items) | Humans skim it; 5 clusters are readable and still ATS-friendly. |
| "In Development" projects with full bullets | Reads as ideas, not shipped work. One line each + direction. |
| "Created high-quality SFT datasets" | Replaced with what you actually produced and how it was used. |
| No numbers | 4/5, 4/5, 100, 90+ now do the work. |
| "Global technology client" | Replaced with Meta — now permitted, and far more impressive. |
| Content Writer role | Kept on both resume and site; reframed as the origin of your documentation and rubric-writing skill. |
| "100%" / "90+" | Labeled explicitly as internal + client QA scores out of 100. |

---

## 9. Confirmed decisions and next steps

1. Client named as **Meta** (permitted since you left the engagement).
2. **100 / 90+ are internal and client QA scores out of 100** — labeled as such everywhere.
3. **Content Writer role kept** on both resume and site, reframed as the origin of your documentation and rubric-writing skill.
4. Innodata role ended **20 Nov 2026** — shown as June 2024 – November 2026.
5. **DOCX generated:** `Jatin_Sharma_Resume.docx` in the repo root. Open in Word, review, export to PDF.
6. Next: align LinkedIn headline / About / Experience to this same identity.
7. Then: rewrite the cover letter around this truthful story.
