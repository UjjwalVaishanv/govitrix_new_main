import { useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

type T = {
  quote: string;
  name: string;
  role: string;
  company: string;
  country: string;
  flag: string;
  photo: string;
};

const testimonials: T[] = [
  {
    quote:
      "Govitrix understood what we were trying to build beyond just the technical requirements. They brought strong product thinking, clean execution and a very practical approach to AI. The team was responsive, transparent and genuinely invested in making the product better.",
    name: "Rajneesh Panwar",
    role: "Founder & CEO",
    company: "Anahata AI",
    country: "India",
    flag: "🇮🇳",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces&q=80",
  },
  {
    quote:
      "What impressed us most about Govitrix was their ability to turn a complex product idea into a clear, usable platform. They understood our business requirements, challenged the right things and delivered with a strong focus on scalability and user experience.",
    name: "Rohit Grover",
    role: "Co-Founder",
    company: "SellMate",
    country: "India",
    flag: "🇮🇳",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces&q=80",
  },
  {
    quote:
      "Govitrix brought a strong combination of product thinking and engineering discipline to our healthcare platform. Their understanding of complex workflows, role-based systems and user experience helped us move from a broad concept to a structured, scalable product.",
    name: "Daniel Mitchell",
    role: "Director of Product",
    company: "Novahealthcare",
    country: "United States",
    flag: "🇺🇸",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces&q=80",
  },
  {
    quote:
      "Govitrix approached FinBud as a product, not simply as a development project. Their team was thoughtful about the user journey, architecture and long-term scalability, while maintaining clear communication throughout the engagement.",
    name: "James Anderson",
    role: "CEO",
    company: "FinBud",
    country: "United Kingdom",
    flag: "🇬🇧",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=faces&q=80",
  },
  {
    quote:
      "The Govitrix team did an excellent job translating our assessment and analytics requirements into a product that feels both powerful and intuitive. Their attention to detail, responsiveness and ability to solve problems proactively made the collaboration extremely valuable.",
    name: "Michael Carter",
    role: "Co-Founder & COO",
    company: "ApexScore",
    country: "United States",
    flag: "🇺🇸",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=faces&q=80",
  },
];

export function TestimonialSlider() {
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % testimonials.length);
  const prev = () => setI((v) => (v - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[i];

  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-background p-8 shadow-soft md:p-12">
        <Quote className="absolute right-8 top-8 size-16 text-accent/10" strokeWidth={1.5} />
        <div className="relative">
          <div className="flex gap-0.5 text-success">
            {Array.from({ length: 5 }).map((_, j) => (
              <Star key={j} className="size-4 fill-current" />
            ))}
          </div>
          <blockquote className="mt-5 text-xl leading-relaxed text-ink md:text-2xl md:leading-[1.5]">
            "{t.quote}"
          </blockquote>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
            <div className="flex items-center gap-4">
              <img
                src={t.photo}
                alt={t.name}
                loading="lazy"
                className="size-14 rounded-full object-cover ring-2 ring-border"
              />
              <div>
                <p className="font-display text-base font-semibold text-ink">{t.name}</p>
                <p className="text-sm text-ink-soft">
                  {t.role} · <span className="font-medium text-ink">{t.company}</span>
                </p>
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-ink">
              <span>{t.flag}</span>
              <span>{t.country}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-1.5">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-1.5 bg-border-strong"}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-background text-ink-soft transition-all hover:-translate-y-0.5 hover:text-ink"
          >
            <ChevronLeft className="size-4" strokeWidth={1.75} />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-background text-ink-soft transition-all hover:-translate-y-0.5 hover:text-ink"
          >
            <ChevronRight className="size-4" strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </div>
  );
}
