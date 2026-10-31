import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, CheckCircle, Star, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { buildLocalBusinessSchema, buildBreadcrumbSchema, buildFAQSchema, buildServiceLocationSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export const metadata: Metadata = {
  title: "Paint Correction Manchester | Swirl Removal",
  description: "Paint correction in Manchester from £300 — machine polishing that permanently removes swirl marks, scratches & oxidation. 5★ rated. Free assessment.",
  alternates: { canonical: "/paint-correction-manchester" },
  openGraph: {
    title: "Paint Correction Manchester | Swirl Removal",
    description: "Paint correction in Manchester from £300 — machine polishing that permanently removes swirl marks, scratches & oxidation. 5★ rated. Free assessment.",
    type: "website",
    url: `${BUSINESS.url}/paint-correction-manchester`,
  },
};

const WHY = [
  { title: "Permanent removal, not fillers", desc: "We machine-polish the defects out of the clear coat — they cannot come back after the next wash, unlike glazes that wash off." },
  { title: "Paint depth measured first", desc: "We assess your paint before any machine touches it, and recommend single-stage or two-stage correction based on what it actually needs." },
  { title: "Full preparation included", desc: "Decontamination, clay bar and machine polish — correction is never done on dirty paint." },
  { title: "Protected afterwards", desc: "Every correction is finished with a protective coating, and we recommend ceramic coating to lock the result in." },
  { title: "Fixed price before we start", desc: "Paint correction from £300, confirmed as a fixed quote after assessment. No surprises." },
  { title: "Exotic car experience", desc: "We have corrected paint on prestige and exotic cars including the Ferrari Purosangue — the same care applies to every car." }
];

const SERVICES = [
  { name: "Paint Correction", href: "/services/paint-correction", price: 300, desc: "Machine removal of swirl marks, scratches and oxidation. 6–12 hours." },
  { name: "Machine Polishing", href: "/services/machine-polishing", price: 200, desc: "Enhancement polish that restores gloss and removes light swirls." },
  { name: "Ceramic Coating", href: "/services/ceramic-coating", price: 180, desc: "SiO₂ coating lasting 2–3 years. Full paint prep always included. 1–2 days." },
  { name: "Full Car Detail", href: "/services/car-detailing", price: 180, desc: "Full decontamination, machine polish, protection and interior deep clean. 4–8 hours." },
  { name: "Full Valet", href: "/services/mobile-valeting", price: 80, desc: "Full interior and exterior clean, hand polish, door shuts and boot. 2.5–3.5 hours." }
];

const FAQS = [
  {
    question: "How much does paint correction cost in Manchester?",
    answer: "Paint correction in Manchester starts from £300. The exact price depends on the size of the vehicle and the condition of the paint. We provide a fixed quote after assessment — no surprise charges.",
  },
  {
    question: "How long does paint correction take?",
    answer: "Paint correction takes 6–12 hours depending on the level of correction required. Single-stage enhancement is usually one day; two-stage correction can take longer.",
  },
  {
    question: "Will paint correction remove all scratches?",
    answer: "Swirl marks, fine scratches, water spots and oxidation — yes, permanently. Deep scratches that go through the clear coat cannot be polished out and may need a body shop.",
  },
  {
    question: "Is paint correction safe for my car's paint?",
    answer: "Yes, when done properly. We remove only 1–3 microns of clear coat — a fraction of its thickness — and measure paint depth before any machine touches the car.",
  },
  {
    question: "Do I need ceramic coating after paint correction?",
    answer: "We strongly recommend it. Correction leaves perfect paint, and ceramic coating protects that result for 2–3 years. Ceramic coating from £180.",
  },
  {
    question: "Do you offer paint correction in Manchester?",
    answer: "Yes — fully mobile. We bring our own water and power to your home or workplace in Manchester (M1–M16) and perform the full correction at your location.",
  }
];

const PLACES = [
  { name: "Urmston", href: "/areas/urmston" },
  { name: "Flixton", href: "/areas/flixton" },
  { name: "Stretford", href: "/areas/stretford" },
  { name: "Davyhulme", href: "/areas/davyhulme" },
  { name: "Sale", href: "/areas/sale" },
  { name: "Old Trafford", href: "/areas/old-trafford" },
  { name: "Chorlton-cum-Hardy", href: "/areas/chorlton-cum-hardy" },
  { name: "Eccles", href: "/areas/eccles" },
  { name: "Salford", href: "/areas/salford" },
  { name: "Altrincham", href: "/areas/altrincham" },
  { name: "Carrington", href: "/areas/carrington" },
  { name: "Partington", href: "/areas/partington" },
  { name: "Irlam", href: "/areas/irlam" },
  { name: "Timperley", href: "/areas/timperley" },
  { name: "Didsbury", href: "/areas/didsbury" },
  { name: "Manchester", href: "/areas/manchester" }
];

export default function PaintCorrectionManchesterPage() {
  const localBusinessSchema = buildLocalBusinessSchema();
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: `${BUSINESS.url}/` },
    { name: "Car Detailing Manchester", url: `${BUSINESS.url}/car-detailing-manchester` },
    { name: "Paint Correction Manchester", url: `${BUSINESS.url}/paint-correction-manchester` }
  ]);
  const faqSchema = buildFAQSchema(FAQS);
  const serviceSchema = buildServiceLocationSchema({
    serviceName: "Paint Correction",
    serviceSlug: "paint-correction",
    serviceDescription: "Paint correction in Manchester — machine polishing that permanently removes swirl marks, scratches and oxidation. From £300.",
    priceFrom: 300,
    locationName: "Manchester",
    locationSlug: "manchester",
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="section-pad pt-32 md:pt-40" style={{ background: "var(--color-base-950)" }}>
        <div className="section-container">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Car Detailing Manchester", href: "/car-detailing-manchester" },
              { label: "Paint Correction Manchester" }
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="eyebrow">
                <MapPin size={12} aria-hidden="true" />
                Machine polishing — Greater Manchester
              </p>
              <h1 className="mb-5">
                Paint Correction{" "}
                <span className="gradient-text-red">Manchester</span>
              </h1>
              <p
                className="text-xl mb-4"
                style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-barlow-condensed)", fontWeight: 700 }}
              >
                Swirl marks, removed permanently.
              </p>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "rgba(255,255,255,0.65)", maxWidth: "54ch" }}
              >
                Swirl marks, fine scratches and oxidation do not wash off — they have to be machine-polished out. Our paint correction service in Manchester permanently removes them from the clear coat, restoring depth and gloss your paint has not had in years.
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "rgba(255,255,255,0.65)", maxWidth: "54ch" }}
              >
                Based in Urmston, we carry out paint correction across Manchester city and Greater Manchester — from the city centre to Didsbury, Chorlton, Salford, Stretford and Sale. We assess your paint first, then correct it at your door with our own water and power.
              </p>

              <div className="flex flex-wrap gap-5 mb-8">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={14} fill="currentColor" style={{ color: "var(--color-accent-500)" }} />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-white">5.0</span>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                    ({BUSINESS.rating.ratingCount} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                  <MapPin size={14} style={{ color: "var(--color-accent-500)" }} />
                  Own water &amp; power — no access needed
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact" prefetch={false} className="btn btn-primary">
                  Book in Manchester
                </Link>
                <a href={`tel:${BUSINESS.phone}`} className="btn btn-secondary">
                  <Phone size={16} />
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Services card */}
            <div className="card p-7" style={{ background: "var(--color-base-900)" }}>
              <h2
                className="mb-5"
                style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, fontSize: "1.3rem" }}
              >
                Services in Manchester
              </h2>
              <div className="space-y-4">
                {SERVICES.map((svc) => (
                  <Link
                    key={svc.name}
                    href={svc.href}
                    className="block group p-4 rounded-xl transition-all"
                    style={{ background: "var(--color-base-800)", border: "1px solid var(--color-border)" }}
                  >
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3
                        className="text-sm font-bold text-white group-hover:text-white transition-colors"
                        style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}
                      >
                        {svc.name}
                      </h3>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <span className="text-sm font-semibold" style={{ color: "var(--color-accent-500)" }}>
                          From £{svc.price}
                        </span>
                        <ArrowRight size={11} style={{ color: "rgba(255,255,255,0.35)" }} />
                      </div>
                    </div>
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {svc.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="section-pad" style={{ background: "var(--color-base-900)" }}>
        <div className="section-container">
          <h2 className="mb-3">Why choose Latin King Detailing in Manchester?</h2>
          <p className="mb-8 text-base" style={{ color: "rgba(255,255,255,0.55)", maxWidth: "52ch" }}>
            Paint Correction in Manchester — done properly, at your door, with a fixed price confirmed before we start.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY.map((item) => (
              <div key={item.title} className="card p-6" style={{ background: "var(--color-base-800)" }}>
                <CheckCircle size={20} className="mb-3" style={{ color: "var(--color-accent-500)" }} />
                <h3
                  className="font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, fontSize: "1rem" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.58)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Places covered */}
      <section className="section-pad">
        <div className="section-container">
          <h2 className="mb-3">Areas we cover across Greater Manchester</h2>
          <p className="mb-8 text-base" style={{ color: "rgba(255,255,255,0.55)", maxWidth: "52ch" }}>
            Our mobile correction unit works across the full region — tap your area to see the services available there.
          </p>
          <div className="flex flex-wrap gap-3">
            {PLACES.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all"
                style={{
                  background: "var(--color-base-900)",
                  border: "1px solid var(--color-border)",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                <MapPin size={12} style={{ color: "var(--color-accent-500)" }} />
                {p.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad" style={{ background: "var(--color-base-900)" }}>
        <div className="section-container max-w-3xl">
          <h2 className="mb-8">Paint Correction in Manchester — common questions</h2>
          <div className="space-y-5">
            {FAQS.map((faq, i) => (
              <div key={i} className="card p-6">
                <h3
                  className="font-bold mb-3"
                  style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, fontSize: "1.05rem" }}
                >
                  {faq.question}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section-pad">
        <div className="section-container">
          <h2 className="mb-6 text-2xl">Related pages</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/paint-correction" className="btn btn-secondary text-sm">
              Paint Correction Service
            </Link>
            <Link href="/areas/manchester" className="btn btn-secondary text-sm">
              Manchester Area Page
            </Link>
            <Link href="/car-detailing-manchester" className="btn btn-secondary text-sm">
              Car Detailing Manchester
            </Link>
            <Link href="/ceramic-coating-manchester" className="btn btn-secondary text-sm">
              Ceramic Coating Manchester
            </Link>
            <Link href="/blog/swirl-mark-removal-manchester" className="btn btn-secondary text-sm">
              Swirl Mark Removal Guide
            </Link>
            <Link href="/pricing" className="btn btn-secondary text-sm">
              View All Prices
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection
        eyebrow="Paint Correction — Manchester"
        title="Book Paint Correction in Manchester Today"
        description="We come to your door in Manchester — fully equipped with own water, power and professional products. Fixed quote confirmed before we start. Same-day and next-day slots available."
        primaryCTA="Book in Manchester"
      />
    </>
  );
}
