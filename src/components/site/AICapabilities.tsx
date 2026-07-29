import {
  Sparkles,
  Bot,
  MessageSquareCode,
  Database,
  ScanText,
  Languages,
  Headphones,
  Eye,
  LineChart,
  ArrowRight,
  ShieldCheck,
  Cpu,
} from "lucide-react";

const caps = [
  { icon: Sparkles, name: "Generative AI", body: "Custom GPT-style assistants, content and code generation, multi-modal workflows.", tag: "GenAI" },
  { icon: Bot, name: "Agentic AI", body: "Autonomous agents that plan, use tools, and complete multi-step business tasks.", tag: "Autonomous" },
  { icon: MessageSquareCode, name: "LLM Applications", body: "Production LLM apps with evaluations, guardrails, cost and latency controls.", tag: "LLM Ops" },
  { icon: Database, name: "RAG Systems", body: "Retrieval-augmented generation over your private knowledge, secured and grounded.", tag: "Vector RAG" },
  { icon: ScanText, name: "OCR Solutions", body: "Document extraction pipelines for invoices, forms, IDs, and clinical records.", tag: "Extraction" },
  { icon: Languages, name: "NLP Systems", body: "Classification, entity extraction, summarization, and semantic search at scale.", tag: "NLP" },
  { icon: Headphones, name: "AI Assistants", body: "Voice and chat assistants for support, sales, operations, and internal tools.", tag: "Co-Pilots" },
  { icon: Eye, name: "Computer Vision", body: "Detection, OCR, quality control, and visual analytics for physical operations.", tag: "Vision" },
  { icon: LineChart, name: "Predictive Analytics", body: "Forecasting, anomaly detection, and decision intelligence on live data.", tag: "Predictive" },
];

const flow = [
  { step: "01", title: "Data & Sources", body: "Databases, docs, APIs, real-time streams", icon: Database },
  { step: "02", title: "Ingestion & Vector Store", body: "Chunking, embeddings, hybrid indexing", icon: Cpu },
  { step: "03", title: "Orchestration Layer", body: "LLMs, tools, agents, safety guardrails", icon: Bot },
  { step: "04", title: "Application & UX", body: "Chat, copilots, dashboards, REST APIs", icon: Sparkles },
];

export function AICapabilities() {
  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {caps.map((c) => (
          <div
            key={c.name}
            className="group relative overflow-hidden rounded-2xl border border-border/80 bg-background p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-card"
          >
            <div aria-hidden className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-success to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex size-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-soft">
                <c.icon className="size-5.5" strokeWidth={2} />
              </span>
              <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent">
                {c.tag}
              </span>
            </div>
            <h3 className="mt-6 font-display text-lg font-bold text-ink transition-colors group-hover:text-accent">
              {c.name}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{c.body}</p>
          </div>
        ))}
      </div>

      <div className="relative mt-12 overflow-hidden rounded-3xl border border-border/80 bg-surface p-6 shadow-soft md:p-10">
        <div aria-hidden className="absolute inset-0 hairline-grid opacity-30 pointer-events-none" />
        <div aria-hidden className="soft-blur-orb -right-20 -top-20 h-72 w-72 bg-accent/10 pointer-events-none" />
        <div className="relative mx-auto max-w-2xl text-center flex flex-col items-center justify-center">
          <p className="eyebrow justify-center">Reference AI Architecture</p>
          <h3 className="mt-2.5 text-balance font-display text-xl font-bold text-ink md:text-2xl">
            How we ship production-grade AI systems
          </h3>
          <span className="mt-3.5 inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-success">
            <ShieldCheck className="size-4" /> Enterprise Guardrails
          </span>
        </div>

        <div className="relative mt-10 grid gap-6 md:grid-cols-4">
          {flow.map((f, i) => (
            <div
              key={f.step}
              className="group relative rounded-2xl border border-border/80 bg-background p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl font-black text-accent">{f.step}</span>
                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <f.icon className="size-4.5" />
                </span>
              </div>
              <p className="mt-4 font-display text-base font-bold text-ink transition-colors group-hover:text-accent">
                {f.title}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">{f.body}</p>

              {i < flow.length - 1 && (
                <div
                  aria-hidden
                  className="absolute -right-4 top-1/2 hidden -translate-y-1/2 z-10 size-8 items-center justify-center rounded-full border border-border bg-background text-accent shadow-soft md:flex"
                >
                  <ArrowRight className="size-4" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
