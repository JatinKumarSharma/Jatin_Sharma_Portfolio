import {
  UserRound,
  BrainCircuit,
  Database,
  Wrench,
  Box,
  Send,
} from "lucide-react";

const ArchitectureDiagram = () => {
  return (
    <div className="architecture-wrapper">
      {/* Background grid */}
      <div className="architecture-grid" />

      {/* SVG Connection Layer */}
      <svg
        className="connector-layer"
        viewBox="0 0 820 560"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Green arrow */}
          <marker
            id="arrow"
            markerWidth="8"
            markerHeight="8"
            refX="7"
            refY="4"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L8,4 L0,8 Z" fill="rgba(132, 180, 75, 0.9)" />
          </marker>

          {/* Light arrow */}
          <marker
            id="arrowWhite"
            markerWidth="8"
            markerHeight="8"
            refX="7"
            refY="4"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L8,4 L0,8 Z" fill="rgba(215, 220, 212, 0.8)" />
          </marker>
        </defs>

        {/* USER → AGENT */}
        <path
          d="M450 98 L450 145"
          className="solid-line"
          markerEnd="url(#arrow)"
        />

        {/* AGENT → RETRIEVE */}
        <path
          d="
            M365 257
            L365 285
            Q365 300 350 300
            L155 300
            L155 340
          "
          className="dotted-line light"
          markerEnd="url(#arrowWhite)"
        />

        {/* AGENT → TOOLS */}
        <path
          d="M450 257 L450 340"
          className="solid-line"
          markerEnd="url(#arrow)"
        />

        {/* AGENT → MEMORY */}
        <path
          d="
            M535 257
            L535 285
            Q535 300 550 300
            L745 300
            L745 340
          "
          className="dotted-line light"
          markerEnd="url(#arrowWhite)"
        />

        {/* RETRIEVE → RESPONSE */}
        <path
          d="
            M155 434
            L155 465
            Q155 480 170 480
            L450 480
            L450 510
          "
          className="dotted-line"
          markerEnd="url(#arrow)"
        />

        {/* TOOLS → RESPONSE */}
        <path
          d="M450 434 L450 510"
          className="dotted-line"
          markerEnd="url(#arrow)"
        />

        {/* MEMORY → RESPONSE */}
        <path
          d="
            M745 434
            L745 465
            Q745 480 730 480
            L450 480
            L450 510
          "
          className="dotted-line"
          markerEnd="url(#arrow)"
        />
      </svg>

      {/* USER QUERY */}
      <div className="diagram-node user-node">
        <UserRound size={25} strokeWidth={1.7} />
        <span>USER QUERY</span>
      </div>

      {/* AI AGENT */}
      <div className="diagram-node agent-node">
        <BrainCircuit size={46} strokeWidth={1.6} />
        <div>
          <div className="node-title">AI AGENT</div>
          <div className="node-subtitle">REASON & PLAN</div>
        </div>
      </div>

      {/* RETRIEVE */}
      <div className="diagram-node retrieve-node">
        <Database size={42} strokeWidth={1.6} />
        <div>
          <div className="node-title">RETRIEVE</div>
          <div className="node-subtitle">KNOWLEDGE</div>
        </div>
      </div>

      {/* TOOLS */}
      <div className="diagram-node tools-node">
        <Wrench size={42} strokeWidth={1.6} />
        <div>
          <div className="node-title">TOOLS</div>
          <div className="node-subtitle">ACTIONS</div>
        </div>
      </div>

      {/* MEMORY */}
      <div className="diagram-node memory-node">
        <Box size={42} strokeWidth={1.6} />
        <div>
          <div className="node-title">MEMORY</div>
          <div className="node-subtitle">CONTEXT</div>
        </div>
      </div>

      {/* RESPONSE */}
      <div className="diagram-node response-node">
        <Send size={42} strokeWidth={1.6} />
        <div>
          <div className="node-title">RESPONSE</div>
          <div className="node-subtitle">GENERATED OUTPUT</div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
