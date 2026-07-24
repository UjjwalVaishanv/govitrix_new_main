import { useEffect, useRef, useState, type ReactNode } from "react";
import { X, CalendarIcon, Check, ChevronDown, Clock, Briefcase } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export function Modal({
  open,
  onClose,
  title,
  description,
  children,
  size = "md",
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: ReactNode;
  size?: "md" | "lg" | "xl";
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;
  const maxW = size === "xl" ? "max-w-4xl" : size === "lg" ? "max-w-2xl" : "max-w-lg";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6"
    >
      <button
        aria-label="Close overlay"
        onClick={onClose}
        className="absolute inset-0 bg-primary/60 backdrop-blur-sm animate-fade-in"
      />
      <div
        className={`relative z-10 w-full ${maxW} max-h-[92vh] overflow-hidden rounded-t-3xl bg-background shadow-elevated sm:rounded-3xl animate-scale-in`}
      >
        <div className="flex items-start justify-between gap-6 border-b border-border px-6 py-5 md:px-8">
          <div>
            <h2 className="font-display text-xl font-semibold text-ink md:text-2xl">{title}</h2>
            {description && <p className="mt-1 text-sm text-ink-soft">{description}</p>}
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-border text-ink-soft transition-colors hover:bg-surface hover:text-ink"
          >
            <X className="size-4" />
          </button>
        </div>
        <div className="max-h-[calc(92vh-5rem)] overflow-y-auto px-6 py-6 md:px-8 md:py-8">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ─── Shared floating dropdown (Radix Popover portal, z-[200]) ─── */
function DropdownSelect({
  label,
  required,
  placeholder,
  value,
  options,
  icon,
  onChange,
  hint,
}: {
  label: string;
  required?: boolean;
  placeholder: string;
  value: string;
  options: string[];
  icon?: ReactNode;
  onChange: (v: string) => void;
  hint?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <label className="text-sm font-medium text-ink">
        {label}
        {required && <span className="text-destructive"> *</span>}
      </label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            type="button"
            className={cn(
              "mt-1.5 flex w-full items-center gap-2 rounded-xl border border-border bg-background px-3.5 py-2.5 text-left text-sm transition-all hover:border-border-strong focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20",
              !value && "text-ink-muted",
            )}
          >
            {icon && <span className="shrink-0 text-ink-soft">{icon}</span>}
            <span className="flex-1 truncate">{value || placeholder}</span>
            <ChevronDown className={cn("size-4 shrink-0 text-ink-soft transition-transform duration-200", open && "rotate-180")} />
          </button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          sideOffset={6}
          className="z-[200] w-[--radix-popover-trigger-width] min-w-[200px] rounded-xl border border-border bg-background p-1 shadow-elevated"
        >
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => { onChange(opt); setOpen(false); }}
              className={cn(
                "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
                value === opt
                  ? "bg-accent/10 font-medium text-ink"
                  : "text-ink-soft hover:bg-surface hover:text-ink",
              )}
            >
              {value === opt && <Check className="size-3.5 shrink-0 text-accent" />}
              <span className={value === opt ? "" : "ml-[22px]"}>{opt}</span>
            </button>
          ))}
        </PopoverContent>
      </Popover>
      {hint && <p className="mt-1.5 text-xs text-ink-muted">{hint}</p>}
    </div>
  );
}

/* ─── Floating date picker (Radix Popover portal, z-[200]) ─── */
function DatePickerField({
  label,
  required,
  value,
  onChange,
  disableBefore,
}: {
  label: string;
  required?: boolean;
  value: Date | undefined;
  onChange: (d: Date | undefined) => void;
  disableBefore?: Date;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <label className="text-sm font-medium text-ink">
        {label}
        {required && <span className="text-destructive"> *</span>}
      </label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            type="button"
            className={cn(
              "mt-1.5 flex w-full items-center gap-2 rounded-xl border border-border bg-background px-3.5 py-2.5 text-left text-sm transition-all hover:border-border-strong focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20",
              !value && "text-ink-muted",
            )}
          >
            <CalendarIcon className="size-4 shrink-0 text-ink-soft" />
            <span className="flex-1">{value ? format(value, "EEE, MMM d, yyyy") : "Pick a date"}</span>
            <ChevronDown className={cn("size-4 shrink-0 text-ink-soft transition-transform duration-200", open && "rotate-180")} />
          </button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          sideOffset={6}
          className="z-[200] w-auto rounded-xl border border-border bg-background p-0 shadow-elevated"
        >
          <Calendar
            mode="single"
            selected={value}
            onSelect={(d) => { onChange(d); setOpen(false); }}
            disabled={disableBefore ? (d) => d < disableBefore : undefined}
            initialFocus
            className="p-3"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

/* ---------------- Discovery Call Dialog ---------------- */

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
];

const serviceOptions = [
  "Web Application Development",
  "Mobile App Development",
  "AI & Machine Learning",
  "Cloud & DevOps",
  "UI / UX Design",
  "Product Strategy & Consulting",
  "Digital Transformation",
  "Other",
];

export function DiscoveryDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", country: "",
    service: "", notes: "",
  });
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string>("");
  const [sent, setSent] = useState(false);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const canSubmit =
    form.name.trim() && form.company.trim() && form.email.trim() &&
    form.phone.trim() && form.country.trim() && form.service && date && time;

  const reset = () => {
    setForm({ name: "", company: "", email: "", phone: "", country: "", service: "", notes: "" });
    setDate(undefined);
    setTime("");
    setSent(false);
  };

  const handleClose = () => {
    onClose();
    setTimeout(reset, 300);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSent(true);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title="Book a Discovery Call"
      description="Schedule a 30-minute strategy call with our founding team. No commitments — just a focused conversation about your goals."
      size="xl"
    >
      {sent ? (
        <div className="text-center py-8 animate-fade-in">
          <div className="mx-auto inline-flex size-16 items-center justify-center rounded-full bg-success/15 text-success animate-scale-in">
            <Check className="size-8" strokeWidth={2.5} />
          </div>
          <h3 className="mt-6 font-display text-2xl font-semibold text-ink md:text-3xl">
            Thank you for reaching out to Govitrix
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-soft md:text-base">
            Your discovery call request has been successfully submitted. Our team will review your details
            and contact you shortly to confirm the meeting schedule. We look forward to discussing your
            project and exploring how we can help bring your vision to life.
          </p>
          {date && time && (
            <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm">
              <CalendarIcon className="size-4 text-accent" />
              <span className="font-medium text-ink">{format(date, "EEEE, MMMM d, yyyy")}</span>
              <span className="text-ink-muted">·</span>
              <span className="font-medium text-ink">{time}</span>
            </div>
          )}
          <button
            onClick={handleClose}
            className="mt-8 inline-flex rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:bg-secondary"
          >
            Done
          </button>
        </div>
      ) : (
        <form onSubmit={submit} className="grid gap-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full name" required placeholder="e.g. Priya Sharma" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
            <Field label="Company name" required placeholder="e.g. Acme Pvt. Ltd." value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
            <Field label="Work email" required type="email" placeholder="you@company.com" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
            <Field label="Phone number" required type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
            <Field label="Country" required placeholder="e.g. India" value={form.country} onChange={(v) => setForm({ ...form, country: v })} />
            <DropdownSelect
              label="Service interest"
              required
              placeholder="Select a service…"
              value={form.service}
              options={serviceOptions}
              icon={<Briefcase className="size-4" />}
              onChange={(v) => setForm({ ...form, service: v })}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <DatePickerField
              label="Preferred date"
              required
              value={date}
              onChange={setDate}
              disableBefore={today}
            />
            <DropdownSelect
              label="Preferred time"
              required
              placeholder="Select a time slot…"
              value={time}
              options={timeSlots}
              icon={<Clock className="size-4" />}
              onChange={setTime}
              hint="Business hours · your local time"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-ink">Additional notes</label>
            <textarea
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              rows={4}
              placeholder="Anything you'd like us to know before the call — goals, current stack, timelines, etc."
              className="mt-1.5 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-muted transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            />
          </div>

          <div className="flex items-center justify-between gap-3 border-t border-border pt-5">
            <p className="text-xs text-ink-muted">We'll confirm your slot by email within a few business hours.</p>
            <button
              type="submit"
              disabled={!canSubmit}
              className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:bg-secondary disabled:opacity-50 disabled:hover:translate-y-0"
            >
              Confirm booking
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
}

/* ---------------- Proposal Dialog ---------------- */

const budgets = ["<$25K", "$25K – $50K", "$50K – $150K", "$150K – $500K", "$500K+"];
const projectTypes = ["Web Application", "Mobile App", "AI / ML System", "Cloud & DevOps", "Product Strategy", "Digital Transformation"];
const timelines = ["ASAP", "1-3 months", "3-6 months", "6+ months", "Flexible"];
const industries = ["Healthcare", "FinTech", "SaaS", "eCommerce", "Education", "Logistics", "Manufacturing", "Insurance", "Legal", "Other"];

export function ProposalDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", country: "",
    industry: "", budget: "", type: "", timeline: "",
    requirements: "", fileName: "",
  });

  const next = () => setStep((s) => Math.min(3, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));
  const submit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };

  return (
    <Modal open={open} onClose={onClose} title="Get a Proposal" description="Tell us about your project. Our team will review your requirements and provide a proposal within 24–48 hours." size="xl">
      {sent ? (
        <div className="text-center py-8">
          <div className="mx-auto inline-flex size-14 items-center justify-center rounded-full bg-success/15 text-success">✓</div>
          <h3 className="mt-4 font-display text-2xl font-semibold text-ink">Thank you.</h3>
          <p className="mt-2 max-w-md mx-auto text-sm text-ink-soft">
            Our team will review your requirements and provide a proposal to <span className="font-medium text-ink">{form.email}</span> within 24–48 hours.
          </p>
          <button onClick={onClose} className="mt-6 inline-flex rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-secondary">Close</button>
        </div>
      ) : (
        <form onSubmit={submit} className="grid gap-6">
          <div className="flex items-center gap-2 text-xs font-medium text-ink-muted">
            {[1, 2, 3].map((n) => (
              <div key={n} className="flex flex-1 items-center gap-2">
                <span className={`inline-flex size-6 items-center justify-center rounded-full text-[11px] font-bold ${n <= step ? "bg-primary text-primary-foreground" : "bg-surface text-ink-muted"}`}>{n}</span>
                <span className={n <= step ? "text-ink" : ""}>{n === 1 ? "About you" : n === 2 ? "Project" : "Details"}</span>
                {n < 3 && <span className="h-px flex-1 bg-border" />}
              </div>
            ))}
          </div>

          {step === 1 && (
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name" required placeholder="e.g. Rahul Verma" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
              <Field label="Company" required placeholder="e.g. Nexus Solutions" value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
              <Field label="Work email" required type="email" placeholder="you@company.com" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
              <Field label="Phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
              <Field label="Country" placeholder="e.g. India" value={form.country} onChange={(v) => setForm({ ...form, country: v })} />
              <DropdownSelect
                label="Industry"
                placeholder="Select industry…"
                value={form.industry}
                options={industries}
                onChange={(v) => setForm({ ...form, industry: v })}
              />
            </div>
          )}
          {step === 2 && (
            <div className="grid gap-5">
              <ChoiceGrid label="Project type" options={projectTypes} value={form.type} onChange={(v) => setForm({ ...form, type: v })} />
              <ChoiceGrid label="Budget range" options={budgets} value={form.budget} onChange={(v) => setForm({ ...form, budget: v })} />
              <ChoiceGrid label="Timeline" options={timelines} value={form.timeline} onChange={(v) => setForm({ ...form, timeline: v })} />
            </div>
          )}
          {step === 3 && (
            <div className="grid gap-4">
              <div>
                <label className="text-sm font-medium text-ink">Requirements & goals</label>
                <textarea
                  value={form.requirements}
                  onChange={(e) => setForm({ ...form, requirements: e.target.value })}
                  rows={5}
                  placeholder="What are you building, who is it for, and what does success look like?"
                  className="mt-1.5 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </div>
              <label className="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-dashed border-border bg-surface px-4 py-4 text-sm text-ink-soft hover:border-border-strong">
                <div>
                  <p className="font-medium text-ink">Upload a brief (optional)</p>
                  <p className="text-xs text-ink-muted">{form.fileName || "PDF, DOCX, Figma link file — max 20MB"}</p>
                </div>
                <span className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-semibold text-ink">Choose file</span>
                <input type="file" className="hidden" onChange={(e) => setForm({ ...form, fileName: e.target.files?.[0]?.name || "" })} />
              </label>
            </div>
          )}

          <div className="flex items-center justify-between gap-3 border-t border-border pt-5">
            <button type="button" onClick={back} disabled={step === 1} className="rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-ink-soft disabled:opacity-40 hover:bg-surface">Back</button>
            {step < 3 ? (
              <button type="button" onClick={next} className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-secondary">Continue</button>
            ) : (
              <button type="submit" className="rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-soft hover:opacity-90">Submit request</button>
            )}
          </div>
        </form>
      )}
    </Modal>
  );
}

function Field({ label, value, onChange, required, type = "text", placeholder }: { label: string; value: string; onChange: (v: string) => void; required?: boolean; type?: string; placeholder?: string }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink">{label}{required && <span className="text-destructive"> *</span>}</span>
      <input
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
      />
    </label>
  );
}

function ChoiceGrid({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <p className="text-sm font-medium text-ink">{label}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            type="button"
            key={o}
            onClick={() => onChange(o)}
            className={`rounded-xl border px-3.5 py-2 text-sm font-medium transition-all ${value === o ? "border-accent bg-accent/10 text-ink" : "border-border bg-background text-ink-soft hover:border-border-strong hover:text-ink"}`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}
