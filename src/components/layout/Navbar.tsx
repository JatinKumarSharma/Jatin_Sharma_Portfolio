import { useState } from "react";
import Container from "../ui/Container";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Writing", href: "#writing" },
  { label: "Experience", href: "#experience" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <Container>
        <nav className="relative flex h-20 items-center justify-between">
          {/* Logo */}
          <a
            href="#top"
            onClick={closeMenu}
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

          {/* Desktop Social + Contact */}
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground transition-all hover:border-accent hover:text-accent md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={21} /> : <Menu size={22} />}
          </button>

          {/* Mobile Dropdown Menu */}
          {isOpen && (
            <div className="absolute left-0 right-0 top-20 border border-border bg-[#0d1313]/98 p-5 shadow-2xl backdrop-blur-xl md:hidden">
              <div className="flex flex-col">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={closeMenu}
                    className="border-b border-border py-4 text-sm text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="mt-5 flex h-11 items-center justify-center gap-2 rounded-md border border-accent/60 text-sm text-foreground transition-all hover:bg-accent hover:text-white"
                >
                  Contact Me
                  <span>→</span>
                </a>

                {/* Mobile Social Links */}
                <div className="mt-5 flex items-center gap-3">
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
                </div>
              </div>
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;