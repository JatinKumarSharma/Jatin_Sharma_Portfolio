/**
 * Progress chart for the 5-D evaluation loop.
 *
 * Data: eval-runs/EVAL_LOG.md — suite averages from four real runs of the
 * same five-question suite against the same provider and model.
 *
 * Only the two dimensions that moved are plotted as lines. The other three
 * held at 5.00 for all four iterations; plotting four overlapping lines at
 * the ceiling would be unreadable and imply movement that did not occur.
 */
const iterations = [
  { id: "v0", label: "Baseline", x: 56 },
  { id: "v1", label: "Fix 1", x: 264 },
  { id: "v2", label: "Fix 2", x: 472 },
  { id: "v3", label: "Fix 3", x: 680 },
];

const series = [
  {
    name: "Factuality",
    color: "#79a848",
    values: [4.6, 5.0, 5.0, 5.0],
    ys: [104, 24, 24, 24],
    labels: ["4.60", "5.00", "5.00", "5.00"],
  },
  {
    name: "Helpfulness",
    color: "#5e8c2e",
    values: [4.2, 4.6, 4.6, 4.4],
    ys: [184, 104, 104, 144],
    labels: ["4.20", "4.60", "4.60", "4.40"],
  },
];

const grid = [
  { value: "5.0", y: 24 },
  { value: "4.8", y: 64 },
  { value: "4.6", y: 104 },
  { value: "4.4", y: 144 },
  { value: "4.2", y: 184 },
  { value: "4.0", y: 224 },
];

function EvalProgressChart() {
  return (
    <div className="border border-border/60 bg-surface p-5 md:p-7">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <span className="text-[10px] font-semibold tracking-[0.14em] text-accent">
          SCORE PROGRESSION · SUITE AVERAGE
        </span>
        <span className="font-mono text-[10px] text-subtle">SCALE 4.0 – 5.0</span>
      </div>

      <svg
        viewBox="0 0 720 268"
        className="mt-5 h-auto w-full"
        role="img"
        aria-label="Line chart showing Factuality rising from 4.60 to 5.00 and Helpfulness rising from 4.20 to 4.60 before dipping to 4.40 across four iterations"
      >
        {/* grid */}
        {grid.map((row) => (
          <g key={row.value}>
            <line
              x1="56"
              x2="680"
              y1={row.y}
              y2={row.y}
              stroke="#25302a"
              strokeWidth="1"
              strokeDasharray={row.value === "5.0" ? "0" : "3 5"}
            />
            <text
              x="44"
              y={row.y + 4}
              textAnchor="end"
              fill="#6f7672"
              fontSize="10"
              fontFamily="monospace"
            >
              {row.value}
            </text>
          </g>
        ))}

        {/* x labels */}
        {iterations.map((iteration) => (
          <text
            key={iteration.id}
            x={iteration.x}
            y="250"
            textAnchor="middle"
            fill="#a7aaa6"
            fontSize="10"
            fontFamily="monospace"
          >
            {iteration.id} · {iteration.label}
          </text>
        ))}

        {/* series */}
        {series.map((line) => (
          <g key={line.name}>
            <polyline
              points={line.ys
                .map((y, index) => `${iterations[index].x},${y}`)
                .join(" ")}
              fill="none"
              stroke={line.color}
              strokeWidth="2.5"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            {line.ys.map((y, index) => (
              <g key={`${line.name}-${index}`}>
                <circle
                  cx={iterations[index].x}
                  cy={y}
                  r="4.5"
                  fill="#0d1313"
                  stroke={line.color}
                  strokeWidth="2"
                />
                <text
                  x={iterations[index].x}
                  y={y - 12}
                  textAnchor="middle"
                  fill={line.color}
                  fontSize="10"
                  fontFamily="monospace"
                >
                  {line.labels[index]}
                </text>
              </g>
            ))}
          </g>
        ))}
      </svg>

      {/* legend */}
      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 border-t border-border/50 pt-4">
        {series.map((line) => (
          <div key={line.name} className="flex items-center gap-2">
            <span
              className="inline-block h-[2px] w-5"
              style={{ backgroundColor: line.color }}
            />
            <span className="text-xs text-muted">{line.name}</span>
          </div>
        ))}
        <span className="text-xs text-subtle">
          Held at 5.00 throughout: Hallucination · Originality · Harmlessness
        </span>
      </div>
    </div>
  );
}

export default EvalProgressChart;
