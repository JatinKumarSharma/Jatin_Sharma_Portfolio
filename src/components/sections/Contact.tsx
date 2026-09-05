import Container from "../ui/Container";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-border/40"
    >
      <Container>

        {/* Main CTA */}
        <div className="py-28 lg:py-36">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold tracking-[0.16em] text-accent">
              GET IN TOUCH
            </span>
          </div>

          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
            <div>
              <h2 className="max-w-4xl font-display text-5xl font-medium leading-[1.08] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">
                Let's Scale Intelligence.
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-[1.6] text-muted sm:text-xl">
                Have an interesting problem?{" "}
                <span className="text-foreground">
                  Let's talk about it.
                </span>
              </p>
            </div>

            {/* Direct Email CTA */}
            <a
              href="mailto:jatin9427@gmail.com"
              className="group inline-flex w-fit items-center gap-4 rounded-md bg-accent px-6 py-4 text-sm font-semibold text-white transition-all hover:bg-accent-light"
            >
              Start a conversation

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Contact Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 py-10 sm:gap-x-16">

          {/* Email */}
          <a
            href="mailto:jatin9427@gmail.com"
            className="group flex items-center gap-3 text-[26px] font-semibold text-foreground/90 transition-all duration-300 hover:text-accent-light"
            aria-label="Send email to Jatin Sharma"
          >
            <FaEnvelope className="text-[28px] transition-transform duration-300 group-hover:scale-110" />
            <span className="font-semibold">Email</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jatin-sharma-ai-engineer"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 text-[26px] font-semibold text-foreground/90 transition-all duration-300 hover:text-accent-light"
            aria-label="Visit Jatin Sharma's LinkedIn"
          >
            <FaLinkedin className="text-[27px] transition-transform duration-300 group-hover:scale-110" />
            <span>LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/JatinKumarSharma"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 text-[26px] font-semibold text-foreground/90 transition-all duration-300 hover:text-accent-light"
            aria-label="Visit Jatin Sharma's GitHub"
          >
            <FaGithub className="text-[28px] transition-transform duration-300 group-hover:scale-110" />
            <span>GitHub</span>
          </a>

        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col justify-between gap-4 border-t border-border/40 py-8 text-xs text-subtle sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} Jatin Sharma. All rights reserved.
          </span>

          <div className="flex items-center gap-2">
            <span>Built with curiosity</span>
            <span className="text-accent">•</span>
            <span>Designed for intelligence</span>
          </div>
        </div>

      </Container>
    </footer>
  );
}

export default Contact;