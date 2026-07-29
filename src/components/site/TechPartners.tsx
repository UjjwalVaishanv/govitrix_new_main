const partners = [
  { name: "AWS", slug: "amazonaws", color: "#FF9900" },
  { name: "Microsoft Azure", slug: "microsoftazure", color: "#0089D6" },
  { name: "Google Cloud", slug: "googlecloud", color: "#4285F4" },
  { name: "OpenAI", slug: "openai", color: "#10A37F" },
  { name: "Anthropic", slug: "anthropic", color: "#D97757" },
  { name: "GitHub", slug: "github", color: "#24292F" },
  { name: "Docker", slug: "docker", color: "#2496ED" },
  { name: "Kubernetes", slug: "kubernetes", color: "#326CE5" },
  { name: "Razorpay", slug: "razorpay", color: "#072654" },
  { name: "Easebuzz", slug: null, color: "#6366F1" },
  { name: "PostgreSQL", slug: "postgresql", color: "#4169E1" },
  { name: "MongoDB", slug: "mongodb", color: "#47A248" },
  { name: "Stripe", slug: "stripe", color: "#635BFF" },
  { name: "Flutter", slug: "flutter", color: "#02569B" },
  { name: "React", slug: "react", color: "#00D8FF" },
  { name: "Next.js", slug: "nextdotjs", color: "#000000" },
  { name: "Node.js", slug: "nodedotjs", color: "#5FA04E" },
];

const standards = [
  { name: "Agile & Scrum", body: "Two-week sprints with transparent demos." },
  { name: "CI/CD Pipelines", body: "Automated builds, tests, and deployments." },
  { name: "DevOps & SRE", body: "Observability, incident response, and reliability." },
  { name: "Security-first", body: "Threat modeling and secure code reviews." },
];

export function TechPartners() {
  return (
    <>
      <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {partners.map((p) => (
          <div
            key={p.name}
            className="group relative flex h-28 flex-col items-center justify-center gap-2.5 rounded-2xl border border-border/80 bg-background p-4 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card"
            title={p.name}
          >
            {p.slug ? (
              <span
                aria-label={`${p.name} logo`}
                className="h-9 w-9 transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: p.color,
                  maskImage: `url(https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${p.slug}.svg)`,
                  WebkitMaskImage: `url(https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${p.slug}.svg)`,
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                }}
              />
            ) : (
              <div className="flex h-9 items-center justify-center">
                <span className="font-display text-base font-bold text-accent transition-colors">
                  {p.name}
                </span>
              </div>
            )}
            <span className="text-xs font-semibold text-ink-soft transition-colors group-hover:text-ink">
              {p.name}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {standards.map((s) => (
          <div
            key={s.name}
            className="rounded-2xl border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:shadow-soft"
          >
            <p className="font-display text-base font-semibold text-ink">{s.name}</p>
            <p className="mt-1.5 text-sm text-ink-soft">{s.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}
