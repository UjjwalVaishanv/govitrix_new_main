import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "./Logo";
import { Linkedin, Instagram, Send, ArrowUpRight } from "lucide-react";

const groups = [
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/careers", label: "Careers" },
      { to: "/insights", label: "Insights" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { to: "/services", label: "Product Engineering" },
      { to: "/services", label: "Mobile Development" },
      { to: "/services", label: "AI & Analytics" },
      { to: "/services", label: "Cloud & DevOps" },
      { to: "/services", label: "UI/UX Design" },
    ],
  },
  {
    title: "Work",
    links: [
      { to: "/case-studies", label: "Case Studies" },
      { to: "/industries", label: "Industries" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/privacy", label: "Privacy Policy" },
      { to: "/terms", label: "Terms & Conditions" },
    ],
  },
] as const;

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M18.244 2H21l-6.52 7.45L22 22h-6.99l-4.79-6.27L4.7 22H2l7.03-8.03L2 2h7.07l4.31 5.7L18.244 2Zm-2.45 18h1.86L7.31 4H5.35l10.443 16Z" />
    </svg>
  );
}

function MetaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z" />
    </svg>
  );
}

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok">("idle");
  const [subscribedEmail, setSubscribedEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    const targetEmail = email.trim();

    try {
      // Native fetch API call (no npm third party packages needed)
      await fetch("https://formsubmit.co/ajax/sales@govitrix.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "new user subscribed",
          message: `you have subscripteded with govitrix: ${targetEmail}`,
          email: targetEmail,
          _captcha: "false",
        }),
      });
    } catch {
      // Fallback mailto trigger
      const subject = encodeURIComponent("new user subscribed");
      const body = encodeURIComponent(`you have subscripteded with govitrix: ${targetEmail}`);
      window.location.href = `mailto:sales@govitrix.com?subject=${subject}&body=${body}`;
    } finally {
      setSubscribedEmail(targetEmail);
      setStatus("ok");
      setEmail("");
      setLoading(false);
    }
  };

  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-3">
              <Logo className="h-11 w-11 md:h-12 md:w-12" />
              <span className="font-display text-xl font-bold tracking-tight text-ink md:text-2xl">
                Govitrix Corporation
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
              From imagination to innovation. We design, build, and scale intelligent digital
              products for ambitious teams worldwide.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="mt-8 max-w-md"
              aria-label="Newsletter signup"
            >
              <label htmlFor="newsletter" className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                Subscribe to Insights
              </label>
              <div className="mt-2 flex items-center gap-2 rounded-xl border border-border bg-background p-1.5 shadow-soft focus-within:ring-2 focus-within:ring-accent/30">
                <input
                  id="newsletter"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="flex-1 bg-transparent px-3 py-2 text-sm text-ink placeholder:text-ink-muted focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground hover:bg-secondary disabled:opacity-50"
                >
                  {loading ? "Subscribing..." : "Subscribe"} <Send className="size-3.5" />
                </button>
              </div>
              {status === "ok" && (
                <p className="mt-2 text-xs font-semibold text-success">
                  You have subscribed with Govitrix
                </p>
              )}
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-7">
            {groups.map((g) => (
              <div key={g.title}>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  {g.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {g.links.map((l, i) => (
                    <li key={`${g.title}-${i}`}>
                      <Link
                        to={l.to}
                        className="text-sm text-ink-soft transition-colors hover:text-ink"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="text-xs text-ink-muted">
            © {new Date().getFullYear()} Govitrix Corporation. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/company/govitrix"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-ink-soft transition-all hover:-translate-y-0.5 hover:border-border-strong hover:text-ink"
            >
              <Linkedin className="size-4" strokeWidth={1.75} />
            </a>
            <a
              href="https://www.instagram.com/govitrix"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-ink-soft transition-all hover:-translate-y-0.5 hover:border-border-strong hover:text-ink"
            >
              <Instagram className="size-4" strokeWidth={1.75} />
            </a>
            <a
              href="https://x.com/HarshRa30697754"
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter)"
              className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-ink-soft transition-all hover:-translate-y-0.5 hover:border-border-strong hover:text-ink"
            >
              <XIcon className="size-4" />
            </a>
            <a
              href="https://www.facebook.com/share/1DT5PQkMJk/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              aria-label="Meta"
              className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-ink-soft transition-all hover:-translate-y-0.5 hover:border-border-strong hover:text-ink"
            >
              <MetaIcon className="size-4" />
            </a>
            <Link
              to="/contact"
              className="ml-2 inline-flex items-center gap-1 rounded-lg border border-border px-3 py-2 text-xs font-medium text-ink transition-all hover:-translate-y-0.5 hover:bg-background"
            >
              Start a project <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
