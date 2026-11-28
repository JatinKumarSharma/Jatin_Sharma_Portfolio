import { useState, type ChangeEvent, type FormEvent } from "react";
import Container from "../ui/Container";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

type ContactForm = {
  name: string;
  email: string;
  company: string;
  role: string;
  message: string;
  company_website: string;
};

const emptyForm: ContactForm = {
  name: "",
  email: "",
  company: "",
  role: "",
  message: "",
  company_website: "",
};

function Contact() {
  const [form, setForm] = useState<ContactForm>(emptyForm);
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  const update =
    (key: keyof ContactForm) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((current) => ({ ...current, [key]: event.target.value }));
    };

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setStatus("");
    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result: unknown = await response.json().catch(() => ({}));
      if (!response.ok) {
        const message =
          result && typeof result === "object" && "error" in result
            ? String((result as { error: unknown }).error)
            : "Submission could not be recorded.";
        throw new Error(message);
      }
      setForm(emptyForm);
      setStatus("Thanks — your message was recorded.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Submission failed.");
    } finally {
      setBusy(false);
    }
  }

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
                Open to applied AI roles and collaborations where data quality
                and agent reliability matter.{" "}
                <span className="text-foreground">Let's talk.</span>
              </p>

              <p className="mt-4 text-xs tracking-[0.12em] text-subtle">
                OPEN TO WORK · NEW DELHI (IST) · REMOTE-FRIENDLY · EVALUATION-FIRST
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

        {/* Inbound contact submission */}
        <form
          onSubmit={submit}
          className="mx-auto grid max-w-3xl gap-3 pb-16 sm:grid-cols-2"
        >
          <input
            type="text"
            value={form.name}
            onChange={update("name")}
            placeholder="Name"
            aria-label="Name"
            maxLength={120}
            required
            className="rounded-md border border-border/40 bg-transparent px-3 py-2 text-sm text-foreground placeholder:text-subtle focus:border-accent focus:outline-none"
          />
          <input
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="Email"
            aria-label="Email"
            maxLength={254}
            required
            className="rounded-md border border-border/40 bg-transparent px-3 py-2 text-sm text-foreground placeholder:text-subtle focus:border-accent focus:outline-none"
          />
          <input
            type="text"
            value={form.company}
            onChange={update("company")}
            placeholder="Company (optional)"
            aria-label="Company"
            maxLength={120}
            className="rounded-md border border-border/40 bg-transparent px-3 py-2 text-sm text-foreground placeholder:text-subtle focus:border-accent focus:outline-none"
          />
          <input
            type="text"
            value={form.role}
            onChange={update("role")}
            placeholder="Role (optional)"
            aria-label="Role"
            maxLength={120}
            className="rounded-md border border-border/40 bg-transparent px-3 py-2 text-sm text-foreground placeholder:text-subtle focus:border-accent focus:outline-none"
          />
          <textarea
            value={form.message}
            onChange={update("message")}
            placeholder="Message"
            aria-label="Message"
            maxLength={4000}
            required
            rows={4}
            className="rounded-md border border-border/40 bg-transparent px-3 py-2 text-sm text-foreground placeholder:text-subtle focus:border-accent focus:outline-none sm:col-span-2"
          />
          <input
            type="text"
            value={form.company_website}
            onChange={update("company_website")}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <div className="flex items-center justify-between gap-4 sm:col-span-2">
            <span aria-live="polite" className="text-xs text-subtle">
              {status}
            </span>
            <button
              type="submit"
              disabled={busy}
              className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
            >
              {busy ? "Recording..." : "Send message"}
            </button>
          </div>
        </form>

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