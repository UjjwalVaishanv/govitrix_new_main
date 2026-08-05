import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, CTASection } from "../components/site/Section";
import { ConceptProductsShowcase } from "../components/site/ConceptProducts";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Govitrix Corporation" },
      {
        name: "description",
        content:
          "In-depth case studies on how Govitrix designed, built, and scaled Medicare HMS, FinBud, ApexScore, SellMate and Anahata AI.",
      },
      { property: "og:title", content: "Case Studies — Govitrix" },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Outcomes, not output."
        description="Every engagement is structured around a measurable business goal. Explore how we deliver across healthcare, fintech, education, sales, and AI."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=70&auto=format&fit=crop"
      />

      <Section>
        <ConceptProductsShowcase />
      </Section>

      <CTASection
        title="Have a project in mind?"
        description="Let's build a high-performance software solution tailored to your enterprise goals."
        actionText="Book a Discovery Call"
      />
    </>
  );
}
