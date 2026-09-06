import ArchitectureDiagram from "./ArchitectureDiagram";
import Container from "../ui/Container";
import Button from "../ui/Button";

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-background pt-28"
    >
      {/* Ambient background */}
      <div className="ambient-glow pointer-events-none absolute inset-0" />

      {/* Dot grid */}
      <div className="dot-grid pointer-events-none absolute right-0 top-16 h-[520px] w-[58%] opacity-50" />

      <Container className="relative z-10 max-w-[1500px] px-6 lg:px-8">
        <div className="grid min-h-[720px] items-center gap-8 lg:grid-cols-[1.05fr_1.25fr]">
          
          {/* Left Content */}
          <div className="w-full max-w-none lg:pl-0">
            <div className="mb-5 inline-flex rounded-full border border-accent/25 bg-accent/10 px-3 py-1">
              <span className="text-[11px] font-semibold tracking-[0.08em] text-accent">
                AI ENGINEER
              </span>
            </div>

            <h1 className="font-display text-[46px] font-medium leading-[1.12] tracking-[-0.035em] text-foreground sm:text-[54px] lg:text-[58px]">
              Building intelligent
              <br />
              systems that
              <br />
              <span className="text-accent">
                reason, retrieve
              </span>
              <br />
              and <span className="text-accent">act.</span>
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] text-muted">
              <span>Agentic AI</span>
              <span className="text-accent">•</span>
              <span>LLM Systems</span>
              <span className="text-accent">•</span>
              <span>Generative AI</span>
            </div>

            <p className="mt-6 max-w-lg text-[17px] leading-[1.6] text-muted">
              I design and build production-oriented AI agents,
              LLM applications and retrieval systems
              that solve real-world problems.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
            <a href="#work"> 
              <Button className="px-5">
                Explore Projects →
              </Button>
            </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition-all hover:border-accent hover:text-accent"
              >
                <span className="text-accent">✉</span>
                Get in Touch
              </a>
            </div>
          </div>

          {/* Architecture Diagram */}
          <div className="relative hidden min-h-[620px] w-full items-center justify-center lg:flex">
            <ArchitectureDiagram />
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Hero;