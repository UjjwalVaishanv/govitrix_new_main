import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Search, Clock, Calendar } from "lucide-react";
import { PageHero, Section, CTASection } from "../components/site/Section";
import { Modal } from "../components/site/CTADialogs";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Govitrix Corporation" },
      {
        name: "description",
        content: "Field notes on AI, healthcare technology, product strategy, SaaS, and modern software engineering.",
      },
      { property: "og:title", content: "Insights — Govitrix" },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: InsightsPage,
});

import { posts, type Post } from "../data/insights";

function InsightsPage() {
  const [q, setQ] = useState("");
  const [active, setActive] = useState<Post | null>(null);
  const filtered = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(q.toLowerCase()) ||
      p.tag.toLowerCase().includes(q.toLowerCase()),
  );

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Ideas, lessons, and field notes."
        description="Practical thinking from our engineering, design, and product teams — on AI, healthcare, SaaS, and digital transformation."
        image="https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1920&q=70&auto=format&fit=crop"
      >
        <div className="flex max-w-md items-center gap-2 rounded-xl border border-border bg-background p-1.5 shadow-soft">
          <Search className="ml-2 size-4 text-ink-muted" strokeWidth={1.75} />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search articles"
            className="flex-1 bg-transparent px-2 py-2 text-sm text-ink placeholder:text-ink-muted focus:outline-none"
          />
        </div>
      </PageHero>

      <Section>
        {filtered.length === 0 ? (
          <p className="text-center text-ink-soft">No articles found.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <button
                key={p.title}
                type="button"
                onClick={() => setActive(p)}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background text-left transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-border bg-background/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent backdrop-blur">
                    {p.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold leading-snug text-ink group-hover:text-accent">
                    {p.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm text-ink-soft">{p.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between text-xs text-ink-muted">
                    <span className="inline-flex items-center gap-3">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="size-3.5" /> {p.date}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="size-3.5" /> {p.read}
                      </span>
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold text-ink group-hover:text-accent">
                      Read <ArrowUpRight className="size-3.5" />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </Section>

      <Modal
        open={!!active}
        onClose={() => setActive(null)}
        title={active?.title || ""}
        description={active ? `${active.tag} · ${active.read} · ${active.date}` : undefined}
        size="xl"
      >
        {active && (
          <div className="grid gap-6">
            <div className="relative aspect-[16/8] overflow-hidden rounded-2xl">
              <img src={active.image} alt={active.title} className="h-full w-full object-cover" />
            </div>
            <div className="flex items-center gap-3 text-sm text-ink-soft">
              <span className="font-semibold text-ink">{active.author}</span>
              <span>·</span>
              <span>{active.date}</span>
              <span>·</span>
              <span>{active.read}</span>
            </div>
            <p className="text-lg leading-relaxed text-ink">{active.excerpt}</p>
            <p className="text-base leading-relaxed text-ink-soft">{active.body}</p>
            <div className="rounded-2xl border border-border bg-surface p-6 text-sm text-ink-soft">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                Continue the conversation
              </p>
              <p className="mt-2">
                If this piece resonates with a challenge your team is working through, we'd love to
                discuss it. Book a discovery call or share your context via our contact form.
              </p>
            </div>
          </div>
        )}
      </Modal>

      <CTASection />
    </>
  );
}
