import { useState } from "react";
import {
  Compass,
  Target,
  PenTool,
  Code2,
  TestTube2,
  Rocket,
  LifeBuoy,
} from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Compass,
    title: "Discovery",
    body: "Stakeholder alignment, goals, and success metrics.",
    detail:
      "Deep-dive workshops to align on vision, constraints, and measurable outcomes — ensuring every decision is grounded in real user and business needs.",
    badge: "Week 1–2",
    accent: "#06b6d4",
    accentBg: "rgba(6,182,212,0.1)",
    accentBorder: "rgba(6,182,212,0.28)",
    accentGlow: "rgba(6,182,212,0.35)",
  },
  {
    n: "02",
    icon: Target,
    title: "Strategy",
    body: "Scope, roadmap, architecture, and delivery plan.",
    detail:
      "Translate insights into a concrete technical strategy — defining architecture, sprint cadence, risk mitigations, and clear milestones.",
    badge: "Week 2–3",
    accent: "#8b5cf6",
    accentBg: "rgba(139,92,246,0.1)",
    accentBorder: "rgba(139,92,246,0.28)",
    accentGlow: "rgba(139,92,246,0.35)",
  },
  {
    n: "03",
    icon: PenTool,
    title: "Design",
    body: "Research-led UX, IA, and design systems.",
    detail:
      "User research and information architecture drive every screen. We build a living design system that scales with your product.",
    badge: "Week 3–5",
    accent: "#ec4899",
    accentBg: "rgba(236,72,153,0.1)",
    accentBorder: "rgba(236,72,153,0.28)",
    accentGlow: "rgba(236,72,153,0.35)",
  },
  {
    n: "04",
    icon: Code2,
    title: "Development",
    body: "Two-week sprints with senior engineering pods.",
    detail:
      "Senior engineers work in focused pods with daily standups, weekly demos, and transparent progress dashboards accessible to all stakeholders.",
    badge: "Ongoing",
    accent: "#f59e0b",
    accentBg: "rgba(245,158,11,0.1)",
    accentBorder: "rgba(245,158,11,0.28)",
    accentGlow: "rgba(245,158,11,0.35)",
  },
  {
    n: "05",
    icon: TestTube2,
    title: "Testing",
    body: "Automated QA, performance, and security audits.",
    detail:
      "Every release gate includes automated regression suites, load tests, accessibility checks, and third-party penetration testing.",
    badge: "Per Sprint",
    accent: "#10b981",
    accentBg: "rgba(16,185,129,0.1)",
    accentBorder: "rgba(16,185,129,0.28)",
    accentGlow: "rgba(16,185,129,0.35)",
  },
  {
    n: "06",
    icon: Rocket,
    title: "Deployment",
    body: "CI/CD, secure rollouts, and observability.",
    detail:
      "Blue-green deployments, feature flags, and real-time observability stacks ensure zero-downtime launches with instant rollback capabilities.",
    badge: "Go-live",
    accent: "#3b82f6",
    accentBg: "rgba(59,130,246,0.1)",
    accentBorder: "rgba(59,130,246,0.28)",
    accentGlow: "rgba(59,130,246,0.35)",
  },
  {
    n: "07",
    icon: LifeBuoy,
    title: "Support",
    body: "SRE, incident response, and continuous evolution.",
    detail:
      "Post-launch, our SRE team monitors 24/7, responds to incidents with defined SLAs, and continuously evolves the product based on live telemetry.",
    badge: "Ongoing",
    accent: "#14b8a6",
    accentBg: "rgba(20,184,166,0.1)",
    accentBorder: "rgba(20,184,166,0.28)",
    accentGlow: "rgba(20,184,166,0.35)",
  },
];

type Step = (typeof steps)[0];

/* ─────────────────────────────────────────────
   Main export
───────────────────────────────────────────── */
export function RoadmapProcess() {
  const [active, setActive] = useState<number | null>(null);
  const toggle = (i: number) => setActive((prev) => (prev === i ? null : i));

  return (
    <div className="relative w-full">
      <div className="hidden lg:block">
        <DesktopRoadmap active={active} toggle={toggle} />
      </div>
      <div className="lg:hidden">
        <MobileRoadmap active={active} toggle={toggle} />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Desktop: horizontal road with alternating cards
───────────────────────────────────────────── */
const ROAD_H = 52;
const CONTAINER_H = 460;
const ROAD_TOP = (CONTAINER_H - ROAD_H) / 2; // 204

function DesktopRoadmap({
  active,
  toggle,
}: {
  active: number | null;
  toggle: (i: number) => void;
}) {
  return (
    <div className="relative overflow-visible" style={{ height: `${CONTAINER_H}px` }}>
      {/* ── Road surface ── */}
      <div
        className="absolute left-0 right-0"
        style={{ top: `${ROAD_TOP}px`, height: `${ROAD_H}px`, zIndex: 0 }}
      >
        {/* Road body */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.015) 0%, rgba(255,255,255,0.055) 50%, rgba(255,255,255,0.015) 100%)",
            borderTop: "1.5px solid rgba(255,255,255,0.09)",
            borderBottom: "1.5px solid rgba(255,255,255,0.09)",
          }}
        />
        {/* Dashed center lane */}
        <div
          className="absolute left-0 right-0"
          style={{
            top: "50%",
            height: "2px",
            transform: "translateY(-50%)",
            backgroundImage:
              "repeating-linear-gradient(to right, rgba(255,255,255,0.22) 0px, rgba(255,255,255,0.22) 20px, transparent 20px, transparent 42px)",
          }}
        />
        {/* Fade edges */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 6%, transparent 94%, rgba(0,0,0,0.5) 100%)",
          }}
        />
        {/* START label */}
        <div
          className="absolute left-0 top-0 bottom-0 flex items-center pl-3"
          style={{ borderRight: "1px solid rgba(255,255,255,0.06)" }}
        >
          <span
            style={{
              fontSize: "8px",
              fontWeight: 800,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.2)",
            }}
          >
            Start
          </span>
        </div>
        {/* LIVE label */}
        <div
          className="absolute right-0 top-0 bottom-0 flex items-center pr-3"
          style={{ borderLeft: "1px solid rgba(255,255,255,0.06)" }}
        >
          <span
            style={{
              fontSize: "8px",
              fontWeight: 800,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.2)",
            }}
          >
            Live
          </span>
        </div>
      </div>

      {/* ── Milestone nodes + cards ── */}
      {steps.map((s, i) => {
        const isAbove = i % 2 === 0;
        const isActive = active === i;
        const leftPct = ((i + 0.5) / steps.length) * 100;
        const Icon = s.icon;

        return (
          <div
            key={s.n}
            className="absolute"
            style={{
              left: `${leftPct}%`,
              top: 0,
              bottom: 0,
              transform: "translateX(-50%)",
              width: "148px",
              marginLeft: "-74px",
              zIndex: 1,
            }}
          >
            {/* ── Card above ── */}
            {isAbove && (
              <div
                className="absolute left-0 right-0"
                style={{ bottom: `${CONTAINER_H - ROAD_TOP + 10}px` }}
              >
                <MilestoneCard
                  s={s}
                  isActive={isActive}
                  onClick={() => toggle(i)}
                />
                {/* Connector */}
                <div
                  className="absolute left-1/2 -translate-x-1/2"
                  style={{
                    bottom: "-10px",
                    width: "1.5px",
                    height: "10px",
                    background: `linear-gradient(to bottom, ${s.accent}50, transparent)`,
                  }}
                />
              </div>
            )}

            {/* ── Node on road ── */}
            <div
              className="absolute left-1/2 -translate-x-1/2"
              style={{
                top: `${ROAD_TOP}px`,
                height: `${ROAD_H}px`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-label={`Step ${s.n}: ${s.title}`}
                className="relative flex items-center justify-center focus:outline-none"
                style={{ width: "46px", height: "46px" }}
              >
                {/* Glow ring */}
                {isActive && (
                  <span
                    className="absolute inset-0 rounded-full animate-ping"
                    style={{ background: `${s.accentGlow}` }}
                  />
                )}
                <span
                  className="relative flex size-[42px] items-center justify-center rounded-full transition-all duration-300"
                  style={{
                    background: isActive
                      ? `radial-gradient(circle at 35% 35%, ${s.accent}ee, ${s.accent}88)`
                      : "rgba(255,255,255,0.07)",
                    border: `2px solid ${isActive ? s.accent : "rgba(255,255,255,0.14)"}`,
                    boxShadow: isActive
                      ? `0 0 22px ${s.accentGlow}, 0 0 6px ${s.accent}90`
                      : "none",
                    transform: isActive ? "scale(1.18)" : "scale(1)",
                  }}
                >
                  <Icon
                    className="size-[18px]"
                    style={{
                      color: isActive ? "#fff" : "rgba(255,255,255,0.45)",
                      transition: "color 0.3s",
                    }}
                    strokeWidth={2}
                  />
                </span>
              </button>
            </div>

            {/* ── Card below ── */}
            {!isAbove && (
              <div
                className="absolute left-0 right-0"
                style={{ top: `${ROAD_TOP + ROAD_H + 10}px` }}
              >
                {/* Connector */}
                <div
                  className="absolute left-1/2 -translate-x-1/2"
                  style={{
                    top: "-10px",
                    width: "1.5px",
                    height: "10px",
                    background: `linear-gradient(to bottom, transparent, ${s.accent}50)`,
                  }}
                />
                <MilestoneCard
                  s={s}
                  isActive={isActive}
                  onClick={() => toggle(i)}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Milestone card (shared)
───────────────────────────────────────────── */
function MilestoneCard({
  s,
  isActive,
  onClick,
}: {
  s: Step;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group w-full rounded-xl p-3 text-left focus:outline-none transition-all duration-300"
      style={{
        background: isActive ? s.accentBg : "rgba(255,255,255,0.04)",
        border: `1px solid ${isActive ? s.accentBorder : "rgba(255,255,255,0.07)"}`,
        boxShadow: isActive ? `0 6px 28px ${s.accentGlow}` : "none",
        transform: isActive ? "translateY(-2px)" : "translateY(0)",
      }}
    >
      {/* Badge */}
      <div
        className="mb-1.5 inline-block rounded-full px-2 py-0.5"
        style={{
          fontSize: "9px",
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: s.accent,
          background: `${s.accentBg}`,
          border: `1px solid ${s.accentBorder}`,
        }}
      >
        {s.badge}
      </div>
      {/* Number */}
      <div className="flex items-baseline justify-between gap-1">
        <span
          className="text-sm font-semibold"
          style={{ color: "rgba(255,255,255,0.9)" }}
        >
          {s.title}
        </span>
        <span
          className="font-mono text-[11px] font-bold"
          style={{ color: `${s.accent}60` }}
        >
          {s.n}
        </span>
      </div>
      {/* Body */}
      <p
        className="mt-1 text-[11px] leading-relaxed"
        style={{ color: "rgba(255,255,255,0.5)" }}
      >
        {s.body}
      </p>
      {/* Detail — shown when active */}
      {isActive && (
        <p
          className="mt-2 pt-2 text-[11px] leading-relaxed"
          style={{
            color: "rgba(255,255,255,0.72)",
            borderTop: `1px solid ${s.accentBorder}`,
          }}
        >
          {s.detail}
        </p>
      )}
    </button>
  );
}

/* ─────────────────────────────────────────────
   Mobile: vertical road, left/right alternating
───────────────────────────────────────────── */
function MobileRoadmap({
  active,
  toggle,
}: {
  active: number | null;
  toggle: (i: number) => void;
}) {
  const ROAD_W = 44;

  return (
    <div className="relative">
      {/* Vertical road strip */}
      <div
        className="pointer-events-none absolute top-0 bottom-0"
        style={{
          left: "50%",
          transform: "translateX(-50%)",
          width: `${ROAD_W}px`,
          zIndex: 0,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.015) 0%, rgba(255,255,255,0.055) 50%, rgba(255,255,255,0.015) 100%)",
            borderLeft: "1.5px solid rgba(255,255,255,0.09)",
            borderRight: "1.5px solid rgba(255,255,255,0.09)",
          }}
        />
        {/* Dashed center */}
        <div
          className="absolute top-0 bottom-0"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            width: "2px",
            backgroundImage:
              "repeating-linear-gradient(to bottom, rgba(255,255,255,0.22) 0px, rgba(255,255,255,0.22) 14px, transparent 14px, transparent 30px)",
          }}
        />
      </div>

      {/* Steps */}
      <div className="relative flex flex-col">
        {steps.map((s, i) => {
          const isLeft = i % 2 === 0;
          const isActive = active === i;
          const Icon = s.icon;

          return (
            <div
              key={s.n}
              className="relative flex items-center"
              style={{ minHeight: "110px", paddingTop: "6px", paddingBottom: "6px" }}
            >
              {/* Left slot */}
              <div
                className="flex flex-1 justify-end"
                style={{ paddingRight: `${ROAD_W / 2 + 12}px` }}
              >
                {isLeft && (
                  <MobileCard s={s} isActive={isActive} onClick={() => toggle(i)} />
                )}
              </div>

              {/* Node */}
              <div
                className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center"
                style={{ zIndex: 2, width: `${ROAD_W}px` }}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-label={`Step ${s.n}: ${s.title}`}
                  className="relative flex items-center justify-center focus:outline-none"
                  style={{ width: "40px", height: "40px" }}
                >
                  {isActive && (
                    <span
                      className="absolute inset-0 rounded-full animate-ping"
                      style={{ background: s.accentGlow }}
                    />
                  )}
                  <span
                    className="relative flex size-[38px] items-center justify-center rounded-full transition-all duration-300"
                    style={{
                      background: isActive
                        ? `radial-gradient(circle at 35% 35%, ${s.accent}ee, ${s.accent}88)`
                        : "rgba(255,255,255,0.07)",
                      border: `2px solid ${isActive ? s.accent : "rgba(255,255,255,0.14)"}`,
                      boxShadow: isActive ? `0 0 18px ${s.accentGlow}` : "none",
                      transform: isActive ? "scale(1.15)" : "scale(1)",
                    }}
                  >
                    <Icon
                      className="size-4"
                      style={{ color: isActive ? "#fff" : "rgba(255,255,255,0.45)" }}
                      strokeWidth={2}
                    />
                  </span>
                </button>
              </div>

              {/* Right slot */}
              <div
                className="flex flex-1 justify-start"
                style={{ paddingLeft: `${ROAD_W / 2 + 12}px` }}
              >
                {!isLeft && (
                  <MobileCard s={s} isActive={isActive} onClick={() => toggle(i)} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MobileCard({
  s,
  isActive,
  onClick,
}: {
  s: Step;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full max-w-[148px] rounded-xl p-2.5 text-left transition-all duration-300 focus:outline-none"
      style={{
        background: isActive ? s.accentBg : "rgba(255,255,255,0.04)",
        border: `1px solid ${isActive ? s.accentBorder : "rgba(255,255,255,0.07)"}`,
        boxShadow: isActive ? `0 4px 20px ${s.accentGlow}` : "none",
      }}
    >
      <div
        className="mb-1 text-[8px] font-bold tracking-widest uppercase"
        style={{ color: s.accent }}
      >
        {s.badge}
      </div>
      <div className="text-[13px] font-semibold" style={{ color: "rgba(255,255,255,0.88)" }}>
        {s.title}
      </div>
      <div className="mt-0.5 text-[11px] leading-snug" style={{ color: "rgba(255,255,255,0.48)" }}>
        {s.body}
      </div>
      {isActive && (
        <p
          className="mt-2 pt-2 text-[11px] leading-relaxed"
          style={{ color: "rgba(255,255,255,0.7)", borderTop: `1px solid ${s.accentBorder}` }}
        >
          {s.detail}
        </p>
      )}
    </button>
  );
}
