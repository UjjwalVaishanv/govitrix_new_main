import { ShieldCheck, Lock, FileCheck, KeyRound, EyeOff, ScrollText, ServerCog, UserCog } from "lucide-react";

const badges = [
  { icon: ShieldCheck, name: "HIPAA Ready", body: "Healthcare-grade data handling, BAA readiness, and automated audit trails.", tag: "Healthcare" },
  { icon: FileCheck, name: "GDPR Ready", body: "Consent workflows, data subject rights, right to erasure, and lawful processing.", tag: "Privacy" },
  { icon: ServerCog, name: "SOC 2 Aligned Architecture", body: "Availability, data integrity, continuous monitoring, and confidentiality by design.", tag: "Security" },
  { icon: ScrollText, name: "Secure Dev Lifecycle", body: "Threat modeling, peer code review, dependencies audit, and automated SAST/DAST scans.", tag: "DevSecOps" },
  { icon: EyeOff, name: "NDA Protection", body: "Mutual NDAs executed before any technical discovery or commercial conversation.", tag: "Protection" },
  { icon: UserCog, name: "Role-Based Access", body: "Strict least-privilege access controls across codebase, production data, and infra.", tag: "Access Control" },
  { icon: Lock, name: "Encryption Standards", body: "AES-256 encryption at rest, TLS 1.3 in transit, and KMS-managed key rotation.", tag: "AES-256" },
  { icon: KeyRound, name: "Immutable Audit Logs", body: "Tamper-evident activity logs across all critical API endpoints and user workflows.", tag: "Audit Trail" },
];

export function SecurityCompliance() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {badges.map((b) => (
        <div
          key={b.name}
          className="group relative overflow-hidden rounded-2xl border border-border/80 bg-background p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-card"
        >
          <div aria-hidden className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-success to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex size-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-soft">
              <b.icon className="size-5" strokeWidth={2} />
            </span>
            <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">
              {b.tag}
            </span>
          </div>
          <h3 className="mt-5 font-display text-base font-bold text-ink transition-colors group-hover:text-accent">
            {b.name}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-ink-soft">{b.body}</p>
        </div>
      ))}
    </div>
  );
}
