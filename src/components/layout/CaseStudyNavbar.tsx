import { Link } from "react-router-dom";
import Container from "../ui/Container";

function CaseStudyNavbar() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          
          {/* Back to Portfolio */}
          <Link
            to="/"
            className="group inline-flex items-center gap-3 text-sm text-muted transition-colors hover:text-foreground"
          >
            <span className="text-accent transition-transform duration-200 group-hover:-translate-x-1">
              ←
            </span>
            Back to Portfolio
          </Link>

          {/* Project Name */}
          <span className="hidden font-display text-sm tracking-[0.08em] text-subtle md:block">
            FINANCIAL ANALYST AGENT
          </span>

          {/* Repository */}
          <a
            href="https://github.com/JatinKumarSharma"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-muted transition-all hover:border-accent hover:text-foreground"
          >
            GitHub
            <span className="text-accent">↗</span>
          </a>
        </nav>
      </Container>
    </header>
  );
}

export default CaseStudyNavbar;