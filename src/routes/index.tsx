import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowRight,
  Layers,
  Smartphone,
  BrainCircuit,
  Cloud,
  PenTool,
  Lightbulb,
  ShieldCheck,
  Workflow,
  Gauge,
  Globe2,
  Users,
  LineChart,
  Check,
  Heart,
  Banknote,
  Cpu,
  ShoppingBag,
  Truck,
  GraduationCap,
  Building2,
  Plane,
} from "lucide-react";
import { useState } from "react";
import { HeroVisual } from "../components/site/HeroVisual";
import { Section, CTASection } from "../components/site/Section";
import { DiscoveryDialog, ProposalDialog } from "../components/site/CTADialogs";
import { ConceptProductsShowcase } from "../components/site/ConceptProducts";
import { AICapabilities } from "../components/site/AICapabilities";
import { EngagementModels } from "../components/site/EngagementModels";
import { SecurityCompliance } from "../components/site/SecurityCompliance";
import { AchievementStats } from "../components/site/AchievementStats";
import { TechPartners } from "../components/site/TechPartners";
import { TestimonialSlider } from "../components/site/TestimonialSlider";
import { FAQ } from "../components/site/FAQ";
import { RoadmapProcess } from "../components/site/RoadmapProcess";
import { posts } from "../data/insights";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Govitrix Corporation — From Imagination to Innovation" },
      {
        name: "description",
        content:
          "Govitrix builds intelligent digital products, AI-powered solutions, and scalable enterprise platforms that help organizations innovate, grow, and lead.",
      },
      { property: "og:title", content: "Govitrix Corporation" },
      {
        property: "og:description",
        content: "Product engineering, AI, and technology consulting that drives measurable growth.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const trustChips = [
  "Product Engineering",
  "AI Solutions",
  "Mobile Development",
  "Cloud & DevOps",
  "Global Delivery",
  "NDA Protected",
  "SaaS Products",
];

const credibility = [
  { icon: Users, title: "Founder-led execution", body: "Senior engineers and designers on every engagement. No junior handoffs.", badge: "Senior Craft" },
  { icon: Workflow, title: "Agile delivery", body: "Two-week sprints with transparent live demos, clear metrics, and continuous feedback.", badge: "2-Wk Sprints" },
  { icon: Globe2, title: "Global standards", body: "Quality and process architecture aligned with enterprise expectations globally.", badge: "Enterprise Grade" },
  { icon: ShieldCheck, title: "Secure architecture", body: "Security, privacy, and zero-trust principles engineered into every layer.", badge: "SOC2 & GDPR" },
  { icon: Gauge, title: "Scalable solutions", body: "Cloud-native architectures built to scale from your first user to your millionth.", badge: "High Scalability" },
  { icon: LineChart, title: "High-performance", body: "Sub-second load times and fluid experiences across web and mobile platforms.", badge: "< 100ms Latency" },
];

const services = [
  { icon: Layers, title: "Web Application Development", body: "Scalable SaaS, web platforms, and enterprise applications engineered end-to-end.", benefits: ["Architecture & roadmap", "Frontend & backend", "QA & observability"] },
  { icon: Smartphone, title: "Mobile App Development", body: "Native and cross-platform mobile experiences engineered for performance.", benefits: ["iOS & Android", "React Native / Flutter", "App store launch"] },
  { icon: BrainCircuit, title: "AI & Analytics", body: "Generative AI, agents, ML, and analytics tuned for real business outcomes.", benefits: ["LLM applications", "Predictive models", "BI dashboards"] },
  { icon: Cloud, title: "Cloud & DevOps", body: "Cloud infrastructure, CI/CD, monitoring, and scalability by default.", benefits: ["AWS, Azure, GCP", "Kubernetes & IaC", "24×7 monitoring"] },
  { icon: PenTool, title: "UI/UX Design", body: "Research-led design systems, user experience, and high-fidelity prototyping.", benefits: ["User research", "Design systems", "Prototyping"] },
  { icon: Lightbulb, title: "Product Strategy & Consulting", body: "Digital transformation, architecture consulting, and product strategy.", benefits: ["Tech due diligence", "Architecture review", "Roadmaps"] },
];

const industries = [
  {
    icon: Heart,
    name: "Healthcare",
    tagline: "Telehealth, Hospital MS & Clinical AI",
    badge: "HIPAA Ready",
    gradient: "from-rose-500 via-pink-500 to-emerald-500",
    bgGradient: "from-rose-500/15 to-pink-500/10",
    borderColor: "border-rose-500/20",
    textColor: "text-rose-500",
    badgeBg: "bg-rose-500/10 border-rose-500/20 text-rose-500",
  },
  {
    icon: Banknote,
    name: "FinTech",
    tagline: "Payment Gateways, Fraud AI & Wealth Tech",
    badge: "PCI-DSS Aligned",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    bgGradient: "from-emerald-500/15 to-teal-500/10",
    borderColor: "border-emerald-500/20",
    textColor: "text-emerald-500",
    badgeBg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-500",
  },
  {
    icon: Cpu,
    name: "SaaS & Tech",
    tagline: "Multi-Tenant SaaS, APIs & Cloud Platforms",
    badge: "High Scale",
    gradient: "from-indigo-500 via-purple-500 to-blue-500",
    bgGradient: "from-indigo-500/15 to-purple-500/10",
    borderColor: "border-indigo-500/20",
    textColor: "text-indigo-500",
    badgeBg: "bg-indigo-500/10 border-indigo-500/20 text-indigo-500",
  },
  {
    icon: ShoppingBag,
    name: "Retail & E-Commerce",
    tagline: "Omnichannel Commerce, AI Search & Loyalty",
    badge: "Real-time AI",
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    bgGradient: "from-amber-500/15 to-orange-500/10",
    borderColor: "border-amber-500/20",
    textColor: "text-amber-500",
    badgeBg: "bg-amber-500/10 border-amber-500/20 text-amber-500",
  },
  {
    icon: Truck,
    name: "Logistics & Supply Chain",
    tagline: "Fleet Tracking, Dispatch AI & Warehouse Tech",
    badge: "IoT & Fleet",
    gradient: "from-blue-500 via-cyan-500 to-sky-500",
    bgGradient: "from-blue-500/15 to-cyan-500/10",
    borderColor: "border-blue-500/20",
    textColor: "text-blue-500",
    badgeBg: "bg-blue-500/10 border-blue-500/20 text-blue-500",
  },
  {
    icon: GraduationCap,
    name: "Education & EdTech",
    tagline: "LMS Platforms, AI Tutors & Virtual Classrooms",
    badge: "AI Learning",
    gradient: "from-purple-500 via-pink-500 to-indigo-500",
    bgGradient: "from-purple-500/15 to-pink-500/10",
    borderColor: "border-purple-500/20",
    textColor: "text-purple-500",
    badgeBg: "bg-purple-500/10 border-purple-500/20 text-purple-500",
  },
  {
    icon: Building2,
    name: "Manufacturing",
    tagline: "Smart Factories, Predictive Maintenance & IoT",
    badge: "Industry 4.0",
    gradient: "from-cyan-500 via-blue-500 to-teal-500",
    bgGradient: "from-cyan-500/15 to-blue-500/10",
    borderColor: "border-cyan-500/20",
    textColor: "text-cyan-500",
    badgeBg: "bg-cyan-500/10 border-cyan-500/20 text-cyan-500",
  },
  {
    icon: Plane,
    name: "Insurance & InsurTech",
    tagline: "Claims Automation, Risk Scoring & Portals",
    badge: "Automated Claims",
    gradient: "from-violet-500 via-fuchsia-500 to-purple-500",
    bgGradient: "from-violet-500/15 to-fuchsia-500/10",
    borderColor: "border-violet-500/20",
    textColor: "text-violet-500",
    badgeBg: "bg-violet-500/10 border-violet-500/20 text-violet-500",
  },
];



function HomePage() {
  const [discoveryOpen, setDiscoveryOpen] = useState(false);
  const [proposalOpen, setProposalOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <DiscoveryDialog open={discoveryOpen} onClose={() => setDiscoveryOpen(false)} />
      <ProposalDialog open={proposalOpen} onClose={() => setProposalOpen(false)} />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-60 pointer-events-none"
          style={{ backgroundImage: `url('/hero-bg.png')` }}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none"
        />
        <div aria-hidden className="absolute inset-0 hairline-grid opacity-[0.40] pointer-events-none" />
        <div aria-hidden className="soft-blur-orb left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 bg-accent/15 pointer-events-none" />
        <div className="container-page relative grid items-center gap-14 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-7 fade-in-up">
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-ink md:text-6xl md:leading-[1.05] lg:text-[68px]">
              Transforming Businesses.{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10 bg-gradient-to-r from-accent to-success bg-clip-text text-transparent">Intelligently.</span>
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg text-ink-soft">
              We build intelligent digital products, AI-powered solutions, and scalable enterprise
              platforms that help organizations innovate, grow, and lead in the digital era.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setDiscoveryOpen(true)}
                className="group inline-flex items-center gap-1.5 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:bg-secondary hover:shadow-elevated"
              >
                Book Discovery Call
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:opacity-90"
              >
                Start a Project <ArrowRight className="size-4" />
              </Link>
              <button
                type="button"
                onClick={() => scrollTo("products")}
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-surface"
              >
                Explore Portfolio <ArrowRight className="size-4" />
              </button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-ink-muted">
              {trustChips.map((c) => (
                <span key={c} className="inline-flex items-center gap-2">
                  <Check className="size-3.5 text-success" />
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* LOGO MARQUEE */}
      <section aria-label="Products" className="border-b border-border bg-surface py-10">
        <div className="container-page">
          <p className="text-center text-sm md:text-base font-extrabold uppercase tracking-[0.22em] text-accent">
            Our Work
          </p>
          <div className="relative mt-6 overflow-hidden">
            <div className="marquee-track flex w-max items-center gap-14 whitespace-nowrap">
              {[...Array(4)].flatMap((_, i) =>
                ["MEDICARE HMS", "FINBUD", "APEXSCORE", "SELLMATE", "ANAHATA AI"].map((name) => (
                  <div key={`${i}-${name}`} className="flex items-center gap-14">
                    <span className="font-display text-2xl font-black tracking-wider text-ink transition-colors hover:text-accent">
                      {name}
                    </span>
                    <span className="size-2 rounded-full bg-accent" />
                  </div>
                )),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <Section
        eyebrow="Achievements"
        title="Trusted by ambitious teams worldwide"
        description="A track record built on senior craft, disciplined delivery, and measurable outcomes."
      >
        <AchievementStats />
      </Section>

      {/* PRODUCTS & INNOVATION LABS */}
      <Section
        id="products"
        tone="surface"
        eyebrow="Products & Innovation Labs"
        title="Concept products engineered inside Govitrix"
        description="A curated look at products built by our teams — showcasing how we approach product thinking, architecture, and delivery across industries."
      >
        <ConceptProductsShowcase />

        <div className="mt-10 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-surface"
          >
            Explore the full portfolio <ArrowRight className="size-4" />
          </Link>
        </div>
      </Section>

      {/* CREDIBILITY */}
      <Section
        eyebrow="Why Govitrix"
        title="A trusted product engineering partner"
        description="We combine senior craft with disciplined delivery — the way mature technology partners should operate."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {credibility.map((c) => (
            <div
              key={c.title}
              className="group relative overflow-hidden rounded-2xl border border-border/80 bg-background p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-card"
            >
              <div aria-hidden className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-success to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex size-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-soft">
                  <c.icon className="size-5" strokeWidth={2} />
                </span>
                <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent">
                  {c.badge}
                </span>
              </div>
              <h3 className="mt-6 font-display text-lg font-bold text-ink transition-colors group-hover:text-accent">
                {c.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section
        tone="surface"
        eyebrow="Services"
        title="What we engineer"
        description="A complete toolkit for building, scaling, and modernizing technology products."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.title}
              to="/services"
              className="group relative flex flex-col rounded-2xl border border-border bg-background p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-border-strong hover:shadow-card"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform group-hover:scale-110">
                <s.icon className="size-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
              <ul className="mt-5 space-y-2">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-ink-soft">
                    <Check className="mt-0.5 size-4 shrink-0 text-success" />
                    {b}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-ink transition-colors group-hover:text-accent">
                Learn more <ArrowUpRight className="size-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* AI CAPABILITIES */}
      <Section
        eyebrow="AI Capabilities"
        title="Deep AI engineering — from prototype to production"
        description="We build applied AI systems on top of modern LLMs, agents, and data pipelines — grounded in security, evaluation, and business ROI."
      >
        <AICapabilities />
      </Section>

      {/* INDUSTRIES */}
      <Section
        tone="surface"
        eyebrow="Industries"
        title="Deep expertise across regulated and fast-moving markets"
        description="We design and engineer specialized software tailored to industry-specific regulations, workflows, and performance demands."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((i) => (
            <Link
              key={i.name}
              to="/industries"
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-background p-6 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-card"
            >
              <div aria-hidden className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${i.gradient} opacity-80 transition-opacity duration-300 group-hover:opacity-100`} />
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className={`inline-flex size-12 items-center justify-center rounded-xl border ${i.borderColor} bg-gradient-to-br ${i.bgGradient} ${i.textColor} transition-transform duration-300 group-hover:scale-110`}>
                    <i.icon className="size-6" strokeWidth={2} />
                  </span>
                  <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${i.badgeBg}`}>
                    {i.badge}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-ink transition-colors group-hover:text-accent">
                  {i.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-soft">
                  {i.tagline}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                <span className="text-xs font-semibold text-accent group-hover:underline">Explore Solutions</span>
                <div className="flex size-7 items-center justify-center rounded-full bg-accent/10 text-accent transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                  <ArrowUpRight className="size-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* ENGAGEMENT MODELS */}
      <Section
        eyebrow="Engagement Models"
        title="Flexible ways to work with Govitrix"
        description="Choose the model that fits your stage — from fixed-scope projects to full product partnerships."
      >
        <EngagementModels />
      </Section>

      {/* PROCESS — ENTERPRISE JOURNEY ROADMAP */}
      <Section
        tone="dark"
        eyebrow="Enterprise Journey"
        title="A disciplined roadmap, from idea to scale"
        description="Every engagement follows a structured, transparent progression — designed to de-risk delivery and unlock value at every milestone."
      >
        <RoadmapProcess />
      </Section>

      {/* SECURITY & COMPLIANCE */}
      <Section
        eyebrow="Security & Compliance"
        title="Enterprise-grade security, built in"
        description="We architect every product with security, privacy, and regulatory awareness from day one."
      >
        <SecurityCompliance />
      </Section>

      {/* TECH PARTNERS */}
      <Section
        tone="surface"
        eyebrow="Technology Partners"
        title="A modern, proven technology ecosystem"
        description="We work with the platforms and standards trusted by global enterprises."
      >
        <TechPartners />
      </Section>

      {/* TESTIMONIALS */}
      <Section
        eyebrow="Client Stories"
        title="What our partners say"
        description="Outcomes speak louder than words. Here's what teams we've built with have to say."
      >
        <TestimonialSlider />
      </Section>

      {/* INSIGHTS */}
      <Section
        tone="surface"
        eyebrow="Insights"
        title="Ideas worth reading"
        description="Field notes on AI, healthcare technology, product strategy, SaaS, and modern software engineering."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
            <Link
              key={p.id}
              to="/insights"
              className="group flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-background transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-card"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-border bg-background/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent backdrop-blur">
                  {p.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-bold leading-snug text-ink transition-colors group-hover:text-accent">
                  {p.title}
                </h3>
                <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-ink-soft">{p.excerpt}</p>
                <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 text-xs text-ink-muted">
                  <span className="inline-flex items-center gap-2">
                    <span className="font-medium text-ink-soft">{p.date}</span>
                    <span>·</span>
                    <span>{p.read}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 font-bold text-accent group-hover:underline">
                    Read article <ArrowUpRight className="size-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Everything you need to know before starting a conversation with our team."
      >
        <FAQ />
      </Section>

      <CTASection />
    </>
  );
}
