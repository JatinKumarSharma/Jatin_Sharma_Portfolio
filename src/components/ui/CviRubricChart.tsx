/**
 * CVI system rubric, v1.
 *
 * Source: eval-runs/CVI_EVAL_LOG.md and eval-runs/cvi_rubric_v1.json.
 * Fresh offline run on 2026-11-27. Scores are independent execution-contract
 * scores, not model-response quality scores, and are not aggregated.
 */
const dimensions = [
  {
    name: "Evidence grounding",
    score: "5.00",
    checks: "39 / 39",
    note: "Verbatim quote and claim contracts",
  },
  {
    name: "Adaptive decision quality",
    score: "5.00",
    checks: "50 / 50",
    note: "Proposals, gaps, state and target choice",
  },
  {
    name: "Voice & timing integrity",
    score: "5.00",
    checks: "54 / 54",
    note: "Acknowledgement, events and handoff",
  },
  {
    name: "Security & tenancy",
    score: "5.00",
    checks: "94 / 94",
    note: "Capabilities, expiry, limits and isolation",
  },
  {
    name: "Resilience & provider boundaries",
    score: "5.00",
    checks: "39 / 39",
    note: "Durable work, concurrency and provider config",
  },
];

function CviRubricChart() {
  return (
    <div
      className="border border-border/60 bg-background/40 p-6 md:p-8"
      aria-label="CVI system rubric: five dimensions, each scoring 5.00 out of 5 in a fresh offline evaluation"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <span className="text-[10px] font-semibold tracking-[0.14em] text-accent">
          CVI SYSTEM RUBRIC · V1
        </span>
        <span className="font-mono text-[10px] tracking-[0.08em] text-subtle">
          2026-11-27 · NO AGGREGATE
        </span>
      </div>

      <div className="mt-6 space-y-5">
        {dimensions.map((dimension) => (
          <div key={dimension.name}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h4 className="text-sm text-foreground">{dimension.name}</h4>
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[10px] text-subtle">
                  {dimension.checks}
                </span>
                <span className="font-display text-lg text-accent-light">
                  {dimension.score}
                </span>
              </div>
            </div>

            <div className="mt-2 h-1.5 w-full bg-border/60">
              <div className="h-full w-full bg-accent" />
            </div>

            <p className="mt-2 text-xs leading-[1.6] text-subtle">
              {dimension.note}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-7 border-t border-border/60 pt-4 text-[11px] leading-[1.7] text-subtle">
        Scores map fresh targeted pytest groups to a 1–5 rubric. They measure
        execution contracts, not human-rated question quality or production
        latency.
      </p>
    </div>
  );
}

export default CviRubricChart;
