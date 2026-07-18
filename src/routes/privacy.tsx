import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "../components/site/Section";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Govitrix Corporation" },
      {
        name: "description",
        content:
          "How Govitrix Corporation collects, uses, processes, stores, and protects your personal data.",
      },
      { property: "og:title", content: "Privacy Policy — Govitrix" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Govitrix Corporation is committed to protecting the privacy, confidentiality, and security of personal information entrusted to us."
      />
      <Section>
        <div className="prose-doc">
          <p className="text-xs text-ink-muted">Last updated: July 2026</p>

          {/* Intro */}
          <p style={{ marginTop: "1rem", lineHeight: 1.8 }}>
            Govitrix Corporation ("Govitrix", "we", "us", or "our") is a
            next-generation technology and product engineering firm committed to
            protecting the privacy, confidentiality, and security of personal
            information entrusted to us.
          </p>
          <p style={{ marginTop: "0.75rem", lineHeight: 1.8 }}>
            This Privacy Policy explains how we collect, use, process, store,
            disclose, transfer, and protect personal data when you:
          </p>
          <ul className="policy-list">
            <li>
              Visit or use our website{" "}
              <a href="https://www.govitrix.com" className="policy-link">
                https://www.govitrix.com
              </a>{" "}
              ("Website")
            </li>
            <li>
              Engage with our services, consultations, products, or solutions
            </li>
            <li>
              Communicate with us via email, forms, chat, phone, or social
              platforms
            </li>
            <li>
              Participate in events, webinars, hiring processes, or partnerships
            </li>
          </ul>
          <p style={{ marginTop: "0.75rem", lineHeight: 1.8 }}>
            By accessing or using our Website or Services, you agree to the
            practices described in this Privacy Policy.
          </p>

          {/* 1 */}
          <SectionHeading number="1" title="SCOPE OF THIS POLICY" />
          <p style={{ lineHeight: 1.8 }}>This Privacy Policy applies to:</p>
          <ul className="policy-list">
            <li>Website visitors</li>
            <li>Business prospects and clients</li>
            <li>Partners and vendors</li>
            <li>Job applicants</li>
            <li>Authorized users of Govitrix platforms or tools</li>
          </ul>
          <p style={{ marginTop: "0.75rem", lineHeight: 1.8 }}>
            This policy does not apply to third-party websites or platforms
            linked from our Website.
          </p>

          {/* 2 */}
          <SectionHeading number="2" title="INFORMATION WE COLLECT" />

          <SubHeading>2.1 Information You Provide Directly</SubHeading>
          <p style={{ lineHeight: 1.8 }}>
            We may collect personal information that you voluntarily provide,
            including but not limited to:
          </p>
          <ul className="policy-list">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company name</li>
            <li>Job title or designation</li>
            <li>Project details or business requirements</li>
            <li>Resume, portfolio, or employment information</li>
            <li>Billing or payment details (where applicable)</li>
            <li>Communications and correspondence with us</li>
          </ul>

          <SubHeading>2.2 Information Collected Automatically</SubHeading>
          <p style={{ lineHeight: 1.8 }}>
            When you access our Website, we automatically collect certain
            technical and usage data, including:
          </p>
          <ul className="policy-list">
            <li>Browser type and version</li>
            <li>Device information</li>
            <li>Operating system</li>
            <li>Pages visited, session duration, clickstream data</li>
            <li>Referring URLs</li>
            <li>Approximate geographic location</li>
          </ul>

          <SubHeading>2.3 Cookies &amp; Tracking Technologies</SubHeading>
          <p style={{ lineHeight: 1.8 }}>
            We use cookies, pixels, tags, and similar technologies to enhance
            performance and experience.
          </p>
          <p style={{ marginTop: "0.75rem", fontWeight: 600, lineHeight: 1.8 }}>
            Types of cookies used:
          </p>
          <ul className="policy-list">
            <li>Strictly Necessary Cookies</li>
            <li>Performance &amp; Analytics Cookies</li>
            <li>Functional Cookies</li>
            <li>Marketing &amp; Advertising Cookies</li>
          </ul>
          <p style={{ marginTop: "0.75rem", lineHeight: 1.8 }}>
            You may manage cookies through browser settings; however, disabling
            essential cookies may affect functionality.
          </p>

          <SubHeading>2.4 Third-Party Sources</SubHeading>
          <p style={{ lineHeight: 1.8 }}>We may receive information from:</p>
          <ul className="policy-list">
            <li>Analytics providers (e.g., Google Analytics)</li>
            <li>Marketing and CRM platforms</li>
            <li>Business partners and referral sources</li>
            <li>Publicly available databases</li>
          </ul>

          {/* 3 */}
          <SectionHeading number="3" title="HOW WE USE YOUR INFORMATION" />

          <SubHeading>3.1 Service Delivery &amp; Operations</SubHeading>
          <ul className="policy-list">
            <li>Responding to inquiries and requests</li>
            <li>
              Providing consulting, development, and engineering services
            </li>
            <li>Managing contracts and engagements</li>
          </ul>

          <SubHeading>3.2 Communication</SubHeading>
          <ul className="policy-list">
            <li>
              Sending updates, proposals, newsletters, and service information
            </li>
            <li>Customer support and issue resolution</li>
          </ul>

          <SubHeading>3.3 Marketing &amp; Growth</SubHeading>
          <ul className="policy-list">
            <li>Personalizing content and outreach</li>
            <li>Improving campaigns and engagement</li>
            <li>Showcasing relevant offerings</li>
          </ul>

          <SubHeading>3.4 Analytics &amp; Improvement</SubHeading>
          <ul className="policy-list">
            <li>Website optimization and UX improvements</li>
            <li>Trend analysis and performance monitoring</li>
          </ul>

          <SubHeading>3.5 Legal, Security &amp; Compliance</SubHeading>
          <ul className="policy-list">
            <li>Fraud prevention and risk mitigation</li>
            <li>Regulatory compliance</li>
            <li>Enforcing agreements and policies</li>
          </ul>

          {/* 4 */}
          <SectionHeading number="4" title="LEGAL BASIS FOR PROCESSING" />
          <p style={{ lineHeight: 1.8 }}>
            Depending on jurisdiction, processing is based on:
          </p>
          <ul className="policy-list">
            <li>Your consent</li>
            <li>Contractual necessity</li>
            <li>Legitimate business interests</li>
            <li>Legal and regulatory obligations</li>
          </ul>

          {/* 5 */}
          <SectionHeading number="5" title="CLIENT DATA VS WEBSITE DATA" />
          <p style={{ lineHeight: 1.8 }}>
            Client project data is handled strictly under contractual agreements
            (NDAs, MSAs, DPAs) and is logically and operationally separated from
            website visitor data.
          </p>
          <p style={{ marginTop: "0.75rem", lineHeight: 1.8 }}>
            Client data is never reused, resold, or shared beyond agreed
            contractual terms.
          </p>

          {/* 6 */}
          <SectionHeading number="6" title="AI &amp; DATA USAGE DISCLOSURE" />
          <p style={{ lineHeight: 1.8 }}>
            Govitrix does not use client confidential data to train AI models or
            systems unless explicitly authorized in writing.
          </p>
          <p style={{ marginTop: "0.75rem", lineHeight: 1.8 }}>
            All AI-enabled services are delivered with human oversight,
            transparency, and contractual safeguards.
          </p>

          {/* 7 */}
          <SectionHeading number="7" title="DISCLOSURE OF INFORMATION" />

          <SubHeading>7.1 Service Providers</SubHeading>
          <p style={{ lineHeight: 1.8 }}>
            Trusted third-party vendors for:
          </p>
          <ul className="policy-list">
            <li>Hosting &amp; cloud infrastructure</li>
            <li>CRM and marketing tools</li>
            <li>Analytics and communication services</li>
          </ul>
          <p style={{ marginTop: "0.75rem", lineHeight: 1.8 }}>
            All such providers are bound by confidentiality and data protection
            obligations.
          </p>

          <SubHeading>7.2 Legal &amp; Regulatory Authorities</SubHeading>
          <p style={{ lineHeight: 1.8 }}>
            When required by law, regulation, or legal process.
          </p>

          <SubHeading>7.3 Business Transactions</SubHeading>
          <p style={{ lineHeight: 1.8 }}>
            In case of merger, acquisition, or restructuring, data may be
            transferred under appropriate safeguards.
          </p>

          {/* 8 */}
          <SectionHeading number="8" title="DATA RETENTION" />
          <p style={{ lineHeight: 1.8 }}>
            We retain personal data only as long as necessary.
          </p>
          <div className="retention-table-wrap">
            <table className="retention-table">
              <thead>
                <tr>
                  <th>Data Category</th>
                  <th>Retention Period</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Website inquiries</td>
                  <td>2–5 years</td>
                </tr>
                <tr>
                  <td>Marketing consent</td>
                  <td>Until withdrawn</td>
                </tr>
                <tr>
                  <td>Client records</td>
                  <td>7+ years</td>
                </tr>
                <tr>
                  <td>Recruitment data</td>
                  <td>1–2 years</td>
                </tr>
                <tr>
                  <td>Analytics data</td>
                  <td>Up to 24 months</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 9 */}
          <SectionHeading number="9" title="INTERNATIONAL DATA TRANSFERS" />
          <p style={{ lineHeight: 1.8 }}>
            Your data may be processed in countries outside your residence,
            including India. Appropriate safeguards are implemented to ensure
            lawful transfers.
          </p>

          {/* 10 */}
          <SectionHeading number="10" title="DATA SECURITY" />
          <p style={{ lineHeight: 1.8 }}>
            We implement industry-standard measures including:
          </p>
          <ul className="policy-list">
            <li>Encryption in transit and at rest</li>
            <li>Access controls and authentication</li>
            <li>Secure cloud infrastructure</li>
            <li>Regular audits and monitoring</li>
            <li>Incident response protocols</li>
          </ul>
          <p style={{ marginTop: "0.75rem", lineHeight: 1.8 }}>
            No system is 100% secure, but we continuously enhance safeguards.
          </p>

          {/* 11 */}
          <SectionHeading number="11" title="DATA BREACH NOTIFICATION" />
          <p style={{ lineHeight: 1.8 }}>
            In the event of a data breach involving personal data, Govitrix will
            notify affected individuals and authorities as required by applicable
            law.
          </p>

          {/* 12 */}
          <SectionHeading number="12" title="YOUR RIGHTS" />
          <div className="rights-grid">
            <div className="rights-card">
              <div className="rights-badge gdpr">GDPR (EU/UK)</div>
              <ul className="policy-list" style={{ marginTop: "0.5rem" }}>
                <li>Access, correction, deletion</li>
                <li>Restriction and objection</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
              </ul>
            </div>
            <div className="rights-card">
              <div className="rights-badge ccpa">CCPA/CPRA (California)</div>
              <ul className="policy-list" style={{ marginTop: "0.5rem" }}>
                <li>Know, delete, opt-out</li>
                <li>Non-discrimination</li>
              </ul>
            </div>
            <div className="rights-card">
              <div className="rights-badge dpdp">India (DPDP Act)</div>
              <ul className="policy-list" style={{ marginTop: "0.5rem" }}>
                <li>Access and correction</li>
                <li>Grievance redressal</li>
              </ul>
            </div>
          </div>
          <p style={{ marginTop: "1rem", lineHeight: 1.8 }}>
            Requests can be sent to{" "}
            <a href="mailto:sales@govitrix.com" className="policy-link">
              sales@govitrix.com
            </a>
            .
          </p>

          {/* 13 */}
          <SectionHeading
            number="13"
            title="GRIEVANCE REDRESSAL (INDIA)"
          />
          <p style={{ lineHeight: 1.8 }}>
            <strong>Grievance Officer</strong>
            <br />
            Email:{" "}
            <a href="mailto:sales@govitrix.com" className="policy-link">
              sales@govitrix.com
            </a>
            <br />
            Response Time: Within 7 business days
          </p>

          {/* 14 */}
          <SectionHeading number="14" title="CHILDREN'S PRIVACY" />
          <p style={{ lineHeight: 1.8 }}>
            Our services are not intended for individuals under 16. We do not
            knowingly collect such data.
          </p>

          {/* 15 */}
          <SectionHeading number="15" title="THIRD-PARTY LINKS" />
          <p style={{ lineHeight: 1.8 }}>
            We are not responsible for third-party websites or platforms linked
            from our Website.
          </p>

          {/* 16 */}
          <SectionHeading number="16" title="CHANGES TO THIS POLICY" />
          <p style={{ lineHeight: 1.8 }}>
            We may update this policy periodically. Changes will be reflected
            with a revised "Last Updated" date.
          </p>

          {/* 17 */}
          <SectionHeading number="17" title="YOUR ACCEPTANCE OF THIS POLICY" />
          <p style={{ lineHeight: 1.8 }}>
            If you are using our website, you signify your acceptance of this
            privacy policy. If you don't agree to the policy, please do not use
            Govitrix's site. Your continued use of Govitrix's site following the
            sharing of changes to this privacy policy will be deemed as your
            acceptance of those updates and changes.
          </p>

          {/* 18 */}
          <SectionHeading number="18" title="CONTACT INFORMATION" />
          <p style={{ lineHeight: 1.8 }}>
            <strong>Govitrix Corporation</strong>
            <br />
            Website:{" "}
            <a href="https://www.govitrix.com" className="policy-link">
              https://www.govitrix.com
            </a>
            <br />
            Email / Privacy Contact:{" "}
            <a href="mailto:sales@govitrix.com" className="policy-link">
              sales@govitrix.com
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

        /* Sub-headings (2.1, 3.2, etc.) */
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

        /* Links */
        .policy-link {
          color: var(--color-accent, #6366f1);
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: opacity 0.15s;
        }
        .policy-link:hover { opacity: 0.75; }

        /* Retention table */
        .retention-table-wrap {
          margin-top: 1rem;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
        }
        .retention-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.9rem;
        }
        .retention-table th {
          background: rgba(99,102,241,0.15);
          color: var(--color-ink, #fff);
          font-weight: 600;
          text-align: left;
          padding: 0.7rem 1.1rem;
          font-family: var(--font-display, sans-serif);
          letter-spacing: 0.03em;
        }
        .retention-table td {
          padding: 0.65rem 1.1rem;
          border-top: 1px solid rgba(255,255,255,0.06);
          color: var(--color-ink-soft);
          line-height: 1.5;
        }
        .retention-table tr:hover td {
          background: rgba(255,255,255,0.03);
        }

        /* Rights grid */
        .rights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }
        .rights-card {
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          padding: 1rem 1.1rem 1.1rem;
          background: rgba(255,255,255,0.03);
        }
        .rights-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          border-radius: 5px;
          padding: 3px 9px;
          margin-bottom: 0.25rem;
        }
        .rights-badge.gdpr  { background: rgba(99,102,241,0.18); color: #a5b4fc; }
        .rights-badge.ccpa  { background: rgba(20,184,166,0.18); color: #5eead4; }
        .rights-badge.dpdp  { background: rgba(249,115,22,0.18); color: #fdba74; }
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
