import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { DiscoveryDialog, ProposalDialog } from "./CTADialogs";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/industries", label: "Industries" },
  { to: "/insights", label: "Insights" },
  { to: "/about", label: "About" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [discoveryOpen, setDiscoveryOpen] = useState(false);
  const [proposalOpen, setProposalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Allow other components to open these dialogs by dispatching window events
  useEffect(() => {
    const openDiscovery = () => setDiscoveryOpen(true);
    const openProposal = () => setProposalOpen(true);
    window.addEventListener("govitrix:open-discovery", openDiscovery);
    window.addEventListener("govitrix:open-proposal", openProposal);
    return () => {
      window.removeEventListener("govitrix:open-discovery", openDiscovery);
      window.removeEventListener("govitrix:open-proposal", openProposal);
    };
  }, []);

  return (
    <>
      <DiscoveryDialog open={discoveryOpen} onClose={() => setDiscoveryOpen(false)} />
      <ProposalDialog open={proposalOpen} onClose={() => setProposalOpen(false)} />

      <header
        className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
          scrolled
            ? "border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70"
            : "border-transparent bg-background"
        }`}
      >
        <div className="container-page flex h-20 items-center justify-between gap-6 md:h-24">
          <Link to="/" className="flex items-center gap-3" aria-label="Govitrix Corporation home">
            <Logo className="h-10 w-10 md:h-11 md:w-11" />
            <span className="font-display text-lg font-bold tracking-tight text-ink md:text-xl">
              Govitrix
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                className="group relative rounded-lg px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink data-[status=active]:text-ink data-[status=active]:font-semibold"
              >
                {n.label}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-3 -bottom-0.5 h-0.5 origin-center scale-x-0 rounded-full bg-accent transition-transform duration-300 ease-out group-hover:scale-x-50 group-data-[status=active]:scale-x-100"
                />
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <button
              type="button"
              onClick={() => setProposalOpen(true)}
              className="rounded-xl px-3.5 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              Get a Proposal
            </button>
            <button
              type="button"
              onClick={() => setDiscoveryOpen(true)}
              className="group inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:bg-secondary hover:shadow-card"
            >
              Book Discovery Call
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-xl border border-border text-ink lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden">
            <div className="container-page border-t border-border py-4">
              <nav aria-label="Mobile" className="flex flex-col gap-1">
                {nav.map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: n.to === "/" }}
                    className="rounded-lg px-3 py-3 text-base font-medium text-ink-soft data-[status=active]:bg-surface data-[status=active]:text-ink data-[status=active]:font-semibold"
                  >
                    {n.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-4 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => { setOpen(false); setProposalOpen(true); }}
                  className="inline-flex items-center justify-center rounded-xl border border-border px-4 py-3 text-sm font-medium text-ink"
                >
                  Get a Proposal
                </button>
                <button
                  type="button"
                  onClick={() => { setOpen(false); setDiscoveryOpen(true); }}
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
                >
                  Book Discovery Call <ArrowUpRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
