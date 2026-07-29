import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Heart,
  Banknote,
  Cpu,
  ShoppingBag,
  Truck,
  GraduationCap,
  Building2,
  Plane,
  BookOpen,
  Trophy,
  ArrowUpRight,
} from "lucide-react";
import { PageHero, Section, CTASection } from "../components/site/Section";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Govitrix Corporation" },
      {
        name: "description",
        content:
          "Deep engineering and product expertise across healthcare, FinTech, SaaS, EdTech, sports analytics, logistics, and more.",
      },
      { property: "og:title", content: "Industries — Govitrix" },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

const list = [
  {
    icon: Heart,
    name: "Healthcare",
    badge: "HIPAA Ready",
    gradient: "from-rose-500 via-pink-500 to-emerald-500",
    bgGradient: "from-rose-500/15 to-pink-500/10",
    borderColor: "border-rose-500/20",
    textColor: "text-rose-500",
    badgeBg: "bg-rose-500/10 border-rose-500/20 text-rose-500",
    body: "HIPAA-compliant software, clinical data platforms, telemedicine, and AI-powered hospital operations.",
    uses: ["Hospital Management Systems (HMS)", "Telemedicine & Remote Care", "Clinical Data & EMR Pipelines"],
  },
  {
    icon: Banknote,
    name: "FinTech",
    badge: "PCI-DSS Aligned",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    bgGradient: "from-emerald-500/15 to-teal-500/10",
    borderColor: "border-emerald-500/20",
    textColor: "text-emerald-500",
    badgeBg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-500",
    body: "Wealth tech, payment gateways, fraud detection AI, and compliance-grade financial reporting.",
    uses: ["Digital Wealth & Investing", "Payment Processing Platforms", "KYC, AML & Fraud Prevention"],
  },
  {
    icon: Cpu,
    name: "SaaS & Enterprise",
    badge: "High Scalability",
    gradient: "from-indigo-500 via-purple-500 to-blue-500",
    bgGradient: "from-indigo-500/15 to-purple-500/10",
    borderColor: "border-indigo-500/20",
    textColor: "text-indigo-500",
    badgeBg: "bg-indigo-500/10 border-indigo-500/20 text-indigo-500",
    body: "Multi-tenant SaaS architectures, usage-based billing engines, and analytics dashboards for B2B products.",
    uses: ["Multi-Tenant Cloud SaaS", "Usage-Based Billing Engines", "Admin & Observability Portals"],
  },
  {
    icon: BookOpen,
    name: "EdTech & Learning",
    badge: "AI Learning",
    gradient: "from-purple-500 via-pink-500 to-indigo-500",
    bgGradient: "from-purple-500/15 to-pink-500/10",
    borderColor: "border-purple-500/20",
    textColor: "text-purple-500",
    badgeBg: "bg-purple-500/10 border-purple-500/20 text-purple-500",
    body: "Adaptive learning systems, AI tutors, automated assessment tools, and institutional analytics.",
    uses: ["Adaptive Learning Assessments", "AI Tutors & Content Generation", "Institutional Performance Portals"],
  },
  {
    icon: Trophy,
    name: "Sports Analytics",
    badge: "Real-Time AI",
    gradient: "from-amber-500 via-orange-500 to-yellow-500",
    bgGradient: "from-amber-500/15 to-orange-500/10",
    borderColor: "border-amber-500/20",
    textColor: "text-amber-500",
    badgeBg: "bg-amber-500/10 border-amber-500/20 text-amber-500",
    body: "Player performance tracking, computer vision video analytics, and live fan engagement platforms.",
    uses: ["Player Performance Dashboards", "Video & Tracking Data Pipelines", "Fan Engagement & Live Apps"],
  },
  {
    icon: ShoppingBag,
    name: "Retail & eCommerce",
    badge: "Omnichannel",
    gradient: "from-orange-500 via-rose-500 to-red-500",
    bgGradient: "from-orange-500/15 to-rose-500/10",
    borderColor: "border-orange-500/20",
    textColor: "text-orange-500",
    badgeBg: "bg-orange-500/10 border-orange-500/20 text-orange-500",
    body: "Headless commerce storefronts, personalized AI search, inventory synchronization, and CRO.",
    uses: ["Headless Commerce Storefronts", "AI Merchandising & Search", "Loyalty & Conversion Optimization"],
  },
  {
    icon: Truck,
    name: "Logistics & Fleet",
    badge: "IoT & Fleet",
    gradient: "from-blue-500 via-cyan-500 to-sky-500",
    bgGradient: "from-blue-500/15 to-cyan-500/10",
    borderColor: "border-blue-500/20",
    textColor: "text-blue-500",
    badgeBg: "bg-blue-500/10 border-blue-500/20 text-blue-500",
    body: "Real-time shipment visibility, AI route optimization, driver mobile apps, and IoT telemetry.",
    uses: ["End-to-End Shipment Visibility", "Driver Mobile Applications", "Route Optimization AI"],
  },
  {
    icon: GraduationCap,
    name: "Higher Education",
    badge: "LMS Systems",
    gradient: "from-teal-500 via-emerald-500 to-green-500",
    bgGradient: "from-teal-500/15 to-emerald-500/10",
    borderColor: "border-teal-500/20",
    textColor: "text-teal-500",
    badgeBg: "bg-teal-500/10 border-teal-500/20 text-teal-500",
    body: "Enterprise LMS, student portals, cohort analytics, and automated certification management.",
    uses: ["Learning Management Systems", "Cohort Engagement Analytics", "Automated Certification Engine"],
  },
  {
    icon: Building2,
    name: "Real Estate & PropTech",
    badge: "PropTech",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    bgGradient: "from-cyan-500/15 to-blue-500/10",
    borderColor: "border-cyan-500/20",
    textColor: "text-cyan-500",
    badgeBg: "bg-cyan-500/10 border-cyan-500/20 text-cyan-500",
    body: "Property marketplaces, virtual tour engines, agent CRM, and automated valuation models.",
    uses: ["Property Marketplaces & Listings", "Agent CRM & Workflow Automation", "Property Analytics & Valuation"],
  },
  {
    icon: Plane,
    name: "Travel & Hospitality",
    badge: "Global Ops",
    gradient: "from-violet-500 via-fuchsia-500 to-pink-500",
    bgGradient: "from-violet-500/15 to-fuchsia-500/10",
    borderColor: "border-violet-500/20",
    textColor: "text-violet-500",
    badgeBg: "bg-violet-500/10 border-violet-500/20 text-violet-500",
    body: "High-concurrency booking engines, loyalty portals, and real-time flight disruption management.",
    uses: ["Global Booking Engines", "Loyalty & Rewards Programs", "Flight Disruption Management Tooling"],
  },
];

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Domain depth where it matters."
        description="We bring both engineering rigor and industry context to every engagement — across regulated, fast-moving, and data-heavy markets."
        image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=70&auto=format&fit=crop"
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((i) => (
            <Link
              key={i.name}
              to="/contact"
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-background p-7 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-card"
            >
              <div aria-hidden className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${i.gradient} opacity-90 transition-opacity duration-300 group-hover:opacity-100`} />
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className={`inline-flex size-13 items-center justify-center rounded-xl border ${i.borderColor} bg-gradient-to-br ${i.bgGradient} ${i.textColor} transition-transform duration-300 group-hover:scale-110`}>
                    <i.icon className="size-6" strokeWidth={2} />
                  </span>
                  <span className={`rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${i.badgeBg}`}>
                    {i.badge}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-ink transition-colors group-hover:text-accent">
                  {i.name}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{i.body}</p>

                <div className="mt-5 rounded-xl border border-border/60 bg-surface/80 p-3.5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-ink-muted">Core Applications</p>
                  <ul className="mt-2 space-y-1.5">
                    {i.uses.map((u) => (
                      <li key={u} className="flex items-center gap-2 text-xs text-ink-soft">
                        <span className={`size-1.5 rounded-full ${i.textColor} bg-current`} />
                        {u}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                <span className="text-xs font-bold text-accent group-hover:underline">Talk to an Expert</span>
                <div className="flex size-8 items-center justify-center rounded-full bg-accent/10 text-accent transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                  <ArrowUpRight className="size-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
