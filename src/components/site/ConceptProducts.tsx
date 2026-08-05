import { useState } from "react";
import { ArrowRight, Sparkles, Check, ExternalLink, Filter, Layers, Zap } from "lucide-react";
import { Modal } from "./CTADialogs";

type Product = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  features: string[];
  stack: string[];
  results: { value: string; label: string }[];
  accent: string;
  badgeColor: string;
  screenshots: string[];
};

export const conceptProducts: Product[] = [
  {
    slug: "medicare-hms",
    name: "Medicare HMS",
    category: "Healthcare",
    tagline: "Hospital Management & Clinical System",
    description: "Comprehensive Hospital Management System streamlining patient, doctor, appointment, billing, and administrative workflows in a single unified platform.",
    challenge: "Multi-department hospitals rely on fragmented tools — separate systems for OPD, billing, pharmacy, labs, and admin — which creates handoff errors, revenue leakage, and slow patient flow.",
    solution: "A modular HMS that unifies patient records, scheduling, billing, pharmacy, labs, and inventory with role-based access, HIPAA-aligned workflows, and real-time dashboards for administrators.",
    features: [
      "Patient EMR & appointment scheduling",
      "Doctor rostering & OPD queues",
      "Integrated billing & insurance claims",
      "Pharmacy & inventory management",
      "Lab reports & radiology integration",
      "Analytics for administrators",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "AWS", "HL7 / FHIR"],
    results: [
      { value: "−42%", label: "Patient triage time" },
      { value: "+31%", label: "Billing accuracy" },
      { value: "3.1x", label: "Faster admin workflows" },
    ],
    accent: "from-blue-600/20 via-indigo-600/10 to-teal-500/20",
    badgeColor: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    screenshots: [
      "https://iad.microlink.io/0WR0VC9roNYzpfEZ3BhA4hVcuUIQ03MD-EfvhuBFTWFzqz5exTs9_Sek03QywdU2u_aW7a8ckWVg9UPYv0L8ZA.png",
      "https://iad.microlink.io/T6j31wxdE6G3aJiEes61c2cxF_EQpmN4uPw46cZSw6VZhOEhuOH2nuSx4WzicHV6UZCiaZWisnsX2U8StRLy7w.png",
      "https://iad.microlink.io/Iewh5PR8tgpi43Sn8ls1VCuuebW9bbkMHxFaxwn59Cxcit49nV0ZH5MgTKKmCuzYunJHEVF9t1-oWkRcr0GUjA.png",
    ],
  },
  {
    slug: "finbud",
    name: "FinBud",
    category: "Fintech",
    tagline: "Personal Finance & Wealth Intelligence",
    description: "Personal finance and budgeting platform that helps users track expenses, set savings goals, monitor investments, and improve overall financial health.",
    challenge: "Retail users juggle multiple accounts, cards, and investment apps with no single view of their money — leading to overspending and missed savings goals.",
    solution: "A goal-first personal finance platform with automatic transaction categorization, budget envelopes, investment tracking, and a nudging engine that improves financial habits.",
    features: [
      "Bank & card aggregation",
      "Smart auto-categorization",
      "Goals, envelopes & alerts",
      "Investment portfolio view",
      "Recurring subscription detector",
      "Insights & monthly reviews",
    ],
    stack: ["React Native", "Node.js", "PostgreSQL", "Plaid", "GCP"],
    results: [
      { value: "+22%", label: "Monthly savings rate" },
      { value: "89%", label: "30-day retention" },
      { value: "4.8★", label: "App store rating" },
    ],
    accent: "from-emerald-600/20 via-teal-600/10 to-cyan-500/20",
    badgeColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&q=80&auto=format&fit=crop",
    ],
  },
  {
    slug: "apexscore",
    name: "ApexScore",
    category: "Education & Assessment",
    tagline: "AI-Enabled Assessment Platform",
    description: "AI-enabled assessment and scoring platform with performance analytics — designed for institutions, coaching centers, and enterprise learning teams.",
    challenge: "Assessments today are static, slow to grade, and offer little personalized feedback — making it hard to identify strengths, gaps, and learning trajectories at scale.",
    solution: "An adaptive assessment engine with AI-powered scoring for open-ended responses, proctoring, granular analytics, and a personalized learning path recommendation layer.",
    features: [
      "Adaptive test engine",
      "AI scoring for essays & code",
      "Proctoring & anti-cheat",
      "Cohort & learner analytics",
      "Personalized learning paths",
      "Institution admin console",
    ],
    stack: ["Next.js", "Python", "OpenAI", "PostgreSQL", "AWS"],
    results: [
      { value: "10x", label: "Faster grading" },
      { value: "+3.4x", label: "Learner engagement" },
      { value: "97%", label: "Grader agreement" },
    ],
    accent: "from-purple-600/20 via-pink-600/10 to-indigo-500/20",
    badgeColor: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    screenshots: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&q=80&auto=format&fit=crop",
    ],
  },
  {
    slug: "sellmate",
    name: "SellMate",
    category: "Sales & CRM",
    tagline: "Lead Management & Sales Intelligence",
    description: "Lead management and sales productivity platform that unifies pipeline, communication, forecasting, and AI-assisted next-best-actions for revenue teams.",
    challenge: "SMB sales teams lose deals because leads slip through the cracks between spreadsheets, WhatsApp, and legacy CRMs — with no visibility into pipeline health or rep productivity.",
    solution: "A modern CRM with unified inbox, pipeline automation, AI-drafted follow-ups, and forecasting — designed for founder-led sales orgs that need enterprise capabilities without enterprise friction.",
    features: [
      "Unified lead inbox",
      "Kanban & forecast pipelines",
      "AI follow-up drafting",
      "Call & WhatsApp logging",
      "Team dashboards & goals",
      "Web & mobile parity",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "OpenAI", "Twilio"],
    results: [
      { value: "+38%", label: "Win rate uplift" },
      { value: "−54%", label: "Time in admin" },
      { value: "6h/wk", label: "Saved per rep" },
    ],
    accent: "from-amber-600/20 via-orange-600/10 to-rose-500/20",
    badgeColor: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542744094-3a31727202b3?w=1200&q=80&auto=format&fit=crop",
    ],
  },
  {
    slug: "anahata-ai",
    name: "Anahata AI",
    category: "Artificial Intelligence",
    tagline: "Enterprise AI Copilot & Assistant",
    description: "AI-powered business assistant for automation, analytics, and intelligent decision-making — a single copilot that plugs into the tools you already use.",
    challenge: "Operators drown in dashboards, docs, and inboxes — but insights and actions still require humans to stitch everything together across siloed SaaS tools.",
    solution: "A retrieval-augmented AI assistant that connects to your data warehouse, docs, and business apps to answer questions in natural language, generate reports, and safely execute agentic workflows.",
    features: [
      "Natural language BI queries",
      "RAG over docs & databases",
      "Agentic workflow execution",
      "Fine-grained permissions",
      "Audit trail & governance",
      "SSO & enterprise integrations",
    ],
    stack: ["Python", "LangChain", "OpenAI", "PostgreSQL", "AWS"],
    results: [
      { value: "8h/wk", label: "Reclaimed per exec" },
      { value: "−67%", label: "Report cycle time" },
      { value: "100%", label: "Auditable actions" },
    ],
    accent: "from-cyan-600/20 via-blue-600/10 to-indigo-500/20",
    badgeColor: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
    screenshots: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80&auto=format&fit=crop",
    ],
  },
];

const categories = ["All Projects", "Healthcare", "Fintech", "Education & Assessment", "Sales & CRM", "Artificial Intelligence"];

export function ConceptProductsShowcase() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [active, setActive] = useState<Product | null>(null);

  const filteredProducts = conceptProducts.filter((p) => {
    if (activeCategory === "All Projects") return true;
    if (activeCategory === "Education & Assessment") return p.category.includes("Education");
    return p.category.toLowerCase().includes(activeCategory.toLowerCase());
  });

  const featured = filteredProducts[0] || conceptProducts[0];
  const gridProducts = filteredProducts.length > 1 ? filteredProducts.slice(1) : filteredProducts;

  return (
    <div id="portfolio" className="space-y-10">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => {
          const isSelected = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all ${
                isSelected
                  ? "bg-accent text-accent-foreground shadow-soft"
                  : "border border-border bg-background text-ink-soft hover:border-border-strong hover:bg-surface hover:text-ink"
              }`}
            >
              {isSelected && <Sparkles className="size-3" />}
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid of Projects (Uniform card sizes) */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((p) => (
          <div
            key={p.slug}
            onClick={() => setActive(p)}
            className="group relative flex flex-col justify-between cursor-pointer overflow-hidden rounded-3xl border border-border bg-background shadow-card transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-elevated"
          >
            <div>
              {/* Image Preview */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.screenshots[0]}
                  alt={p.name}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-bold backdrop-blur-md ${p.badgeColor}`}>
                    {p.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h4 className="font-display text-xl font-bold text-ink group-hover:text-accent transition-colors">{p.name}</h4>
                <p className="mt-1 text-xs font-semibold text-accent">{p.tagline}</p>
                <p className="mt-3 line-clamp-2 text-sm text-ink-soft leading-relaxed">{p.description}</p>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 pb-6 pt-3 flex items-center justify-between border-t border-border/50">
              <div className="flex flex-wrap gap-1.5">
                {p.stack.slice(0, 3).map((t) => (
                  <span key={t} className="rounded-md border border-border bg-surface px-2 py-0.5 text-[10px] font-medium text-ink-soft">
                    {t}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-ink group-hover:text-accent transition-colors">
                Case Study <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Modal */}
      <Modal open={!!active} onClose={() => setActive(null)} title={active?.name || ""} description={active?.tagline} size="xl">
        {active && (
          <div className="grid gap-8">
            {/* Header Screenshot */}
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface">
              <img
                src={active.screenshots[0]}
                alt={active.name}
                className="max-h-80 w-full object-cover object-top"
              />
            </div>

            {/* Screenshots Gallery if available */}
            {active.screenshots.length > 1 && (
              <div>
                <p className="eyebrow mb-3">Product Screens</p>
                <div className="grid grid-cols-2 gap-3">
                  {active.screenshots.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`${active.name} screen ${i + 1}`}
                      className="h-40 w-full rounded-xl border border-border object-cover object-top shadow-soft"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Business Challenge & Solution */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-background p-6">
                <p className="eyebrow text-destructive">Business Challenge</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{active.challenge}</p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-6">
                <p className="eyebrow text-success">Engineering Solution</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{active.solution}</p>
              </div>
            </div>

            {/* Core Capabilities */}
            <div>
              <p className="eyebrow">Core Capabilities & Modules</p>
              <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {active.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 rounded-xl border border-border bg-surface p-3 text-sm text-ink font-medium">
                    <Check className="mt-0.5 size-4 shrink-0 text-success" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <p className="eyebrow">Technology Stack</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {active.stack.map((t) => (
                  <span key={t} className="rounded-xl border border-border bg-surface px-3.5 py-1.5 text-sm font-semibold text-ink">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Banner */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-accent/20 bg-accent/10 p-6">
              <div>
                <p className="font-display text-lg font-bold text-ink">Want to build a solution like {active.name}?</p>
                <p className="text-xs text-ink-soft mt-1">Our engineering team can adapt this architecture or build a custom platform tailored to your needs.</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setActive(null);
                  window.dispatchEvent(new Event("govitrix:open-proposal"));
                }}
                className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-soft hover:opacity-90 transition-opacity"
              >
                Request Proposal <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
