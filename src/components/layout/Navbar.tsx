import Container from "../ui/Container";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Writing", href: "#writing" },
  { label: "Experience", href: "#experience" },
];

function Navbar() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a
            href="#top"
            className="font-display text-lg font-medium tracking-[0.18em] text-foreground transition-colors hover:text-accent"
          >
            JATIN SHARMA
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social + Contact */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="https://github.com/JatinKumarSharma"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted transition-all hover:border-accent hover:text-accent"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/jatin-sharma-ai-engineer"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted transition-all hover:border-accent hover:text-accent"
            >
              <FaLinkedinIn size={17} />
            </a>

            <a
              href="#contact"
              className="ml-1 inline-flex h-10 items-center gap-2 rounded-md border border-accent/60 px-4 text-sm text-foreground transition-all hover:bg-accent hover:text-white"
            >
              Contact Me
              <span className="text-base">→</span>
            </a>
          </div>

          {/* Mobile menu */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-lg text-foreground md:hidden"
            aria-label="Open menu"
          >
            ☰
          </button>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
