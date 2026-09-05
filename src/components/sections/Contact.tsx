import Container from "../ui/Container";

const contactLinks = [
  {
    label: "EMAIL",
    value: "jatin9427@gmail.com",
    href: "mailto:jatin9427@gmail.com",
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/jatin-sharma-ai-engineer",
    href: "https://www.linkedin.com/in/jatin-sharma-ai-engineer/",
  },
  {
    label: "GITHUB",
    value: "github.com/JatinKumarSharma",
    href: "https://github.com/JatinKumarSharma",
  },
];

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
                <span className="text-foreground">Let's talk about it.</span>
              </p>
            </div>

            <a
              href="mailto:your-email@example.com"
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
        <div className="grid border-t border-border/60 md:grid-cols-3">
          {contactLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className={`group py-8 transition-colors hover:bg-surface md:px-8 ${
                index !== contactLinks.length - 1
                  ? "md:border-r md:border-border/60"
                  : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold tracking-[0.14em] text-accent">
                  {link.label}
                </span>
                <span className="text-subtle transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent">
                  ↗
                </span>
              </div>

              <p className="mt-4 break-all text-sm text-muted transition-colors group-hover:text-foreground">
                {link.value}
              </p>
            </a>
          ))}
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
