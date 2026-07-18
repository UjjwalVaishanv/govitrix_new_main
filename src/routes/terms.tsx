import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "../components/site/Section";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Govitrix Corporation" },
      {
        name: "description",
        content:
          "Terms & Conditions governing your access to and use of the Govitrix Corporation website and professional services.",
      },
      { property: "og:title", content: "Terms & Conditions — Govitrix" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="These Terms govern your access to and use of the Govitrix website, services, and all related deliverables."
      />
      <Section>
        <div className="prose-doc">
          <p className="text-xs text-ink-muted">Last updated: July 2026</p>

          {/* 1 */}
          <SectionHeading number="1" title="INTRODUCTION" />
          <p style={{ lineHeight: 1.8 }}>
            Welcome to <strong>Govitrix Corporation</strong> ("Govitrix", "we",
            "us", or "our").
            <br />
            These Terms &amp; Conditions ("Terms") govern your access to and use
            of:
          </p>
          <ul className="policy-list">
            <li>
              The website{" "}
              <a href="https://www.govitrix.com" className="policy-link">
                https://www.govitrix.com
              </a>
            </li>
            <li>
              All consulting, engineering, AI, analytics, cloud, product, and
              digital services
            </li>
            <li>
              All proposals, communications, documentation, and deliverables
            </li>
          </ul>
          <p style={{ marginTop: "0.75rem", lineHeight: 1.8 }}>
            By accessing or using our Website or Services, you agree to be bound
            by these Terms. If you do not agree, you must discontinue use
            immediately.
          </p>

          {/* 2 */}
          <SectionHeading number="2" title="DEFINITIONS" />
          <ul className="policy-list definition-list">
            <li>
              <strong>Client</strong>: Any individual or entity engaging
              Govitrix for services
            </li>
            <li>
              <strong>Services</strong>: Professional technology, consulting,
              and engineering services provided by Govitrix
            </li>
            <li>
              <strong>Website</strong>:{" "}
              <a href="https://www.govitrix.com" className="policy-link">
                https://www.govitrix.com
              </a>{" "}
              and related pages
            </li>
            <li>
              <strong>Agreement</strong>: These Terms, Privacy Policy, and any
              executed MSA, SOW, NDA, or DPA
            </li>
            <li>
              <strong>Deliverables</strong>: Work products defined in an SOW
            </li>
          </ul>

          {/* 3 */}
          <SectionHeading number="3" title="ELIGIBILITY & AUTHORITY" />
          <p style={{ lineHeight: 1.8 }}>
            You represent and warrant that:
          </p>
          <ul className="policy-list">
            <li>You are at least 18 years of age</li>
            <li>
              You have legal authority to bind the entity you represent
            </li>
            <li>
              Your use of the Services complies with applicable laws
            </li>
          </ul>

          {/* 4 */}
          <SectionHeading number="4" title="SCOPE OF SERVICES" />
          <p style={{ lineHeight: 1.8 }}>
            Govitrix provides professional services including, but not limited
            to:
          </p>
          <ul className="policy-list">
            <li>Web &amp; Mobile Application Development</li>
            <li>AI, Machine Learning &amp; Data Analytics</li>
            <li>Product Strategy, MVP Development &amp; Consulting</li>
            <li>UI/UX Design, Interaction Systems &amp; Branding</li>
            <li>Cloud Architecture, DevOps &amp; Performance Engineering</li>
            <li>Digital Transformation &amp; Technology Advisory</li>
          </ul>
          <p style={{ marginTop: "0.75rem", lineHeight: 1.8 }}>
            All commercial terms (scope, pricing, timelines, IP ownership) are
            governed by written contracts such as MSAs and SOWs. In case of
            conflict, executed contracts prevail over these Terms.
          </p>

          {/* 5 */}
          <SectionHeading
            number="5"
            title="NO GUARANTEE OF BUSINESS OUTCOMES"
          />
          <p style={{ lineHeight: 1.8 }}>
            Govitrix provides services on a professional, best-effort basis. We
            do not guarantee:
          </p>
          <ul className="policy-list">
            <li>Revenue, profit, or user growth</li>
            <li>Funding or investment success</li>
            <li>Market acceptance or regulatory approvals</li>
            <li>Performance beyond contractual specifications</li>
          </ul>
          <p style={{ marginTop: "0.75rem", lineHeight: 1.8 }}>
            Business decisions and outcomes remain solely the Client's
            responsibility.
          </p>

          {/* 6 */}
          <SectionHeading number="6" title="WEBSITE USE & RESTRICTIONS" />
          <p style={{ lineHeight: 1.8 }}>You agree not to:</p>
          <ul className="policy-list">
            <li>
              Copy, scrape, reverse-engineer, or misuse Website content
            </li>
            <li>
              Introduce malware, security threats, or harmful code
            </li>
            <li>Impersonate Govitrix or misrepresent affiliation</li>
            <li>Violate intellectual property or applicable laws</li>
          </ul>
          <p style={{ marginTop: "0.75rem", lineHeight: 1.8 }}>
            We may restrict or terminate access for violations.
          </p>

          {/* 7 */}
          <SectionHeading number="7" title="INTELLECTUAL PROPERTY RIGHTS" />

          <SubHeading>7.1 Govitrix IP</SubHeading>
          <p style={{ lineHeight: 1.8 }}>
            All pre-existing materials, frameworks, methodologies, templates,
            libraries, designs, and know-how remain the exclusive IP of Govitrix
            unless expressly transferred in writing.
          </p>

          <SubHeading>7.2 Client IP</SubHeading>
          <p style={{ lineHeight: 1.8 }}>
            Client-provided materials remain Client property.
          </p>

          <SubHeading>7.3 Project Deliverables</SubHeading>
          <p style={{ lineHeight: 1.8 }}>
            Ownership and licensing of Deliverables are governed by the
            applicable SOW or Agreement.
          </p>

          {/* 8 */}
          <SectionHeading
            number="8"
            title="OPEN-SOURCE & THIRD-PARTY SOFTWARE"
          />
          <p style={{ lineHeight: 1.8 }}>
            Deliverables may include open-source or third-party components
            governed by their respective licenses. Govitrix makes no warranties
            beyond those licenses and disclaims liability arising from
            third-party software.
          </p>

          {/* 9 */}
          <SectionHeading number="9" title="CONFIDENTIALITY" />
          <p style={{ lineHeight: 1.8 }}>
            Each party shall maintain strict confidentiality of non-public
            information received during the engagement. Confidentiality
            obligations survive termination of the Agreement.
          </p>

          {/* 10 */}
          <SectionHeading number="10" title="AI & ANALYTICS DISCLAIMER" />
          <ul className="policy-list">
            <li>
              AI outputs, analytics, and recommendations are advisory in nature
            </li>
            <li>
              Govitrix does not guarantee accuracy, completeness, or suitability
              of AI results
            </li>
            <li>
              Clients remain responsible for decisions based on AI outputs
            </li>
            <li>
              Client data is not used to train AI models without explicit
              written consent
            </li>
          </ul>

          {/* 11 */}
          <SectionHeading number="11" title="PAYMENTS, TAXES & GST" />
          <ul className="policy-list">
            <li>
              Fees are exclusive of applicable taxes unless stated otherwise
            </li>
            <li>GST (India) shall be charged as applicable</li>
            <li>
              Clients are responsible for withholding taxes, bank fees, and
              currency charges
            </li>
            <li>
              Late payments may result in service suspension or termination
            </li>
          </ul>

          {/* 12 */}
          <SectionHeading number="12" title="SERVICE SUSPENSION" />
          <p style={{ lineHeight: 1.8 }}>
            Govitrix may suspend Services if:
          </p>
          <ul className="policy-list">
            <li>Payments are overdue</li>
            <li>Client breaches contractual obligations</li>
            <li>Legal, compliance, or security risks arise</li>
          </ul>

          {/* 13 */}
          <SectionHeading number="13" title="NON-SOLICITATION" />
          <p style={{ lineHeight: 1.8 }}>
            Clients shall not solicit or hire Govitrix employees or contractors
            during engagement and for 12 months thereafter without written
            consent.
          </p>

          {/* 14 */}
          <SectionHeading number="14" title="THIRD-PARTY SERVICES" />
          <p style={{ lineHeight: 1.8 }}>
            Govitrix is not responsible for:
          </p>
          <ul className="policy-list">
            <li>Availability or performance of cloud providers</li>
            <li>API pricing or policy changes</li>
            <li>Third-party outages or failures</li>
          </ul>

          {/* 15 */}
          <SectionHeading number="15" title="LIMITATION OF LIABILITY" />
          <p style={{ lineHeight: 1.8 }}>
            To the maximum extent permitted by law:
          </p>
          <ul className="policy-list">
            <li>
              Govitrix is not liable for indirect, incidental, or consequential
              damages
            </li>
            <li>
              Total liability is limited to fees paid in the preceding 6 months
            </li>
          </ul>

          {/* 16 */}
          <SectionHeading number="16" title="INDEMNIFICATION" />
          <p style={{ lineHeight: 1.8 }}>
            Client agrees to indemnify and hold Govitrix harmless against claims
            arising from:
          </p>
          <ul className="policy-list">
            <li>Client content or instructions</li>
            <li>Misuse of Services</li>
            <li>Regulatory or legal violations</li>
          </ul>

          {/* 17 */}
          <SectionHeading number="17" title="TERMINATION" />
          <p style={{ lineHeight: 1.8 }}>
            Termination shall be governed by contractual terms. Upon
            termination:
          </p>
          <ul className="policy-list">
            <li>Outstanding payments become immediately due</li>
            <li>
              Confidentiality, IP, liability, and governing law clauses survive
            </li>
          </ul>

          {/* 18 */}
          <SectionHeading number="18" title="FORCE MAJEURE" />
          <p style={{ lineHeight: 1.8 }}>
            Neither party is liable for delays or failures due to events beyond
            reasonable control, including cyber incidents, natural disasters, or
            governmental actions.
          </p>

          {/* 19 */}
          <SectionHeading number="19" title="EXPORT CONTROL & SANCTIONS" />
          <p style={{ lineHeight: 1.8 }}>
            Client confirms compliance with all applicable export control, trade,
            and sanctions laws.
          </p>

          {/* 20 */}
          <SectionHeading number="20" title="PUBLICITY & PORTFOLIO RIGHTS" />
          <p style={{ lineHeight: 1.8 }}>
            Unless restricted in writing, Govitrix may reference Client name and
            logo for marketing and portfolio purposes.
          </p>

          {/* 21 */}
          <SectionHeading
            number="21"
            title="GOVERNING LAW & JURISDICTION"
          />
          <p style={{ lineHeight: 1.8 }}>
            These Terms are governed by the laws of India. Jurisdiction lies
            exclusively with courts in Noida, India unless otherwise agreed.
          </p>

          {/* 22 */}
          <SectionHeading number="22" title="SEVERABILITY" />
          <p style={{ lineHeight: 1.8 }}>
            If any provision is held unenforceable, remaining provisions remain
            in full force.
          </p>

          {/* 23 */}
          <SectionHeading number="23" title="ENTIRE AGREEMENT" />
          <p style={{ lineHeight: 1.8 }}>
            These Terms, together with the Privacy Policy and executed contracts,
            constitute the entire agreement between the parties.
          </p>

          {/* 24 */}
          <SectionHeading number="24" title="CONTACT INFORMATION" />
          <p style={{ lineHeight: 1.8 }}>
            <strong>Govitrix Corporation</strong>
            <br />
            Email:{" "}
            <a href="mailto:sales@govitrix.com" className="policy-link">
              sales@govitrix.com
            </a>
            <br />
            Website:{" "}
            <a href="https://www.govitrix.com" className="policy-link">
              https://www.govitrix.com
            </a>
          </p>
        </div>
      </Section>

      <style>{`
        .prose-doc {
          max-width: 820px;
          margin: 0 auto;
          color: var(--color-ink-soft);
          padding-bottom: 4rem;
        }

        /* Section headings */
        .policy-section-heading {
          display: flex;
          align-items: baseline;
          gap: 0.6rem;
          margin-top: 2.5rem;
          margin-bottom: 0.75rem;
          padding-bottom: 0.4rem;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .policy-section-number {
          font-family: var(--font-display, sans-serif);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--color-accent, #6366f1);
          background: rgba(99,102,241,0.12);
          border-radius: 4px;
          padding: 2px 7px;
          flex-shrink: 0;
        }
        .policy-section-title {
          font-family: var(--font-display, sans-serif);
          color: var(--color-ink, #fff);
          font-size: 1.05rem;
          font-weight: 700;
          letter-spacing: 0.03em;
          margin: 0;
        }

        /* Sub-headings */
        .policy-sub-heading {
          font-family: var(--font-display, sans-serif);
          color: var(--color-ink, #fff);
          font-size: 0.92rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.4rem;
        }

        /* Lists */
        .policy-list {
          list-style: none;
          padding: 0;
          margin: 0.5rem 0 0 0;
        }
        .policy-list li {
          position: relative;
          padding-left: 1.25rem;
          margin-bottom: 0.35rem;
          line-height: 1.7;
          font-size: 0.95rem;
        }
        .policy-list li::before {
          content: "–";
          position: absolute;
          left: 0;
          color: var(--color-accent, #6366f1);
          font-weight: 700;
        }

        /* Definition list style (bold term inline) */
        .definition-list li strong {
          color: var(--color-ink, #fff);
        }

        /* Links */
        .policy-link {
          color: var(--color-accent, #6366f1);
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: opacity 0.15s;
        }
        .policy-link:hover { opacity: 0.75; }
      `}</style>
    </>
  );
}

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="policy-section-heading">
      <span className="policy-section-number">{number}</span>
      <h2 className="policy-section-title">{title}</h2>
    </div>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="policy-sub-heading">{children}</h3>;
}
