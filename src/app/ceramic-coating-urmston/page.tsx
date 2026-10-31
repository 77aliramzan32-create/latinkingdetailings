import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, CheckCircle, Star, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { buildLocalBusinessSchema, buildBreadcrumbSchema, buildFAQSchema, buildServiceLocationSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export const metadata: Metadata = {
  title: "Ceramic Coating Urmston | From £180",
  description: "Ceramic coating in Urmston from £180 — SiO₂ nano-coating lasting 2–3 years, applied at your door from our Flixton Road base. 5★ rated.",
  alternates: { canonical: "/ceramic-coating-urmston" },
  openGraph: {
    title: "Ceramic Coating Urmston | From £180",
    description: "Ceramic coating in Urmston from £180 — SiO₂ nano-coating lasting 2–3 years, applied at your door from our Flixton Road base. 5★ rated.",
    type: "website",
    url: `${BUSINESS.url}/ceramic-coating-urmston`,
  },
};

const WHY = [
  { title: "2–3 years of protection", desc: "A properly applied SiO₂ coating lasts 2–3 years with correct maintenance — not weeks like a wax." },
  { title: "Preparation is everything", desc: "Decontamination and machine polishing are always included. A coating is only as good as the paint underneath it." },
  { title: "Hydrophobic and self-cleaning", desc: "Water beads and sheets off, carrying dirt with it — your car stays cleaner for longer between washes." },
  { title: "UV and chemical resistance", desc: "The coating shields your paint from UV, bird lime, road salt and fallout." },
  { title: "Gloss you can see", desc: "A coated car has a depth of gloss a wax cannot match — and it stays that way." },
  { title: "Fixed price before we start", desc: "Ceramic coating from £180, confirmed as a fixed quote before any work begins." }
];

const SERVICES = [
  { name: "Ceramic Coating", href: "/services/ceramic-coating", price: 180, desc: "SiO₂ coating lasting 2–3 years. Full paint prep always included. 1–2 days." },
  { name: "Paint Correction", href: "/services/paint-correction", price: 300, desc: "Machine removal of swirl marks, scratches and oxidation. 6–12 hours." },
  { name: "Machine Polishing", href: "/services/machine-polishing", price: 200, desc: "Enhancement polish that restores gloss and removes light swirls." },
  { name: "Full Car Detail", href: "/services/car-detailing", price: 180, desc: "Full decontamination, machine polish, protection and interior deep clean. 4–8 hours." },
  { name: "Full Valet", href: "/services/mobile-valeting", price: 80, desc: "Full interior and exterior clean, hand polish, door shuts and boot. 2.5–3.5 hours." }
];

const FAQS = [
  {
    question: "How much does ceramic coating cost in Urmston?",
    answer: "Ceramic coating in Urmston starts from £180. The exact price depends on vehicle size and paint condition. We provide a fixed quote before any work begins — no surprise charges.",
  },
  {
    question: "How long does ceramic coating last?",
    answer: "A professionally applied SiO₂ coating lasts 2–3 years with correct maintenance — washing with a two-bucket method and avoiding automated brush washes.",
  },
  {
    question: "Do I need paint correction before ceramic coating?",
    answer: "If your paint has swirl marks or scratches, yes — we correct them first so the coating locks in perfect paint, not defects. Paint correction from £300.",
  },
  {
    question: "How long does ceramic coating take?",
    answer: "Ceramic coating takes 1–2 days, including full decontamination, machine polishing and the coating application itself.",
  },
  {
    question: "Can you apply ceramic coating at my home in Urmston?",
    answer: "Yes — fully mobile. We apply ceramic coatings at your location in Urmston (M41) and confirm suitable conditions when you book.",
  },
  {
    question: "How do I maintain a ceramic coating?",
    answer: "Wash with a touchless or two-bucket hand wash and avoid automated brush washes. Our guide explains how to maintain ceramic coating so it lasts the full 2–3 years.",
  }
];

const PLACES = [
  { name: "Urmston town centre", href: "/areas/urmston" },
  { name: "Flixton Road", href: "/areas/flixton" },
  { name: "Stretford Road", href: "/areas/stretford" },
  { name: "Flixton", href: "/areas/flixton" },
  { name: "Davyhulme", href: "/areas/davyhulme" },
  { name: "Stretford", href: "/areas/stretford" }
];

export default function CeramicCoatingUrmstonPage() {
  const localBusinessSchema = buildLocalBusinessSchema();
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: `${BUSINESS.url}/` },
    { name: "Areas", url: `${BUSINESS.url}/areas` },
    { name: "Urmston", url: `${BUSINESS.url}/areas/urmston` },
    { name: "Ceramic Coating Urmston", url: `${BUSINESS.url}/ceramic-coating-urmston` }
  ]);
  const faqSchema = buildFAQSchema(FAQS);
  const serviceSchema = buildServiceLocationSchema({
    serviceName: "Ceramic Coating",
    serviceSlug: "ceramic-coating",
    serviceDescription: "Ceramic coating in Urmston — professional SiO₂ nano-coating lasting 2–3 years, applied at your door from our Flixton Road base. From £180.",
    priceFrom: 180,
    locationName: "Urmston",
    locationSlug: "urmston",
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
              { label: "Areas", href: "/areas" },
              { label: "Urmston", href: "/areas/urmston" },
              { label: "Ceramic Coating Urmston" }
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="eyebrow">
                <MapPin size={12} aria-hidden="true" />
                SiO₂ nano-coating — applied at your door in Urmston
              </p>
              <h1 className="mb-5">
                Ceramic Coating{" "}
                <span className="gradient-text-red">Urmston</span>
              </h1>
              <p
                className="text-xl mb-4"
                style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-barlow-condensed)", fontWeight: 700 }}
              >
                Two to three years of protection, applied at your door.
              </p>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "rgba(255,255,255,0.65)", maxWidth: "54ch" }}
              >
                A professional SiO₂ ceramic coating bonds to your clear coat and protects it for 2–3 years — hydrophobic, UV-resistant and dramatically easier to keep clean. Applied at your door in Urmston, with full paint preparation always included.
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "rgba(255,255,255,0.65)", maxWidth: "54ch" }}
              >
                Urmston is our home base — our unit is on Flixton Road, so Urmston customers get the fastest availability and most flexible scheduling. Coatings are applied at your door across M41, including Urmston town centre, Flixton Road and Stretford Road.
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
                  Book in Urmston
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
                Services in Urmston
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
          <h2 className="mb-3">Why choose Latin King Detailing in Urmston?</h2>
          <p className="mb-8 text-base" style={{ color: "rgba(255,255,255,0.55)", maxWidth: "52ch" }}>
            Ceramic Coating in Urmston — done properly, at your door, with a fixed price confirmed before we start.
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
          <h2 className="mb-3">Where we work in and around Urmston</h2>
          <p className="mb-8 text-base" style={{ color: "rgba(255,255,255,0.55)", maxWidth: "52ch" }}>
            Our base is on Flixton Road — we apply ceramic coatings across Urmston and the neighbouring areas.
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
          <h2 className="mb-8">Ceramic Coating in Urmston — common questions</h2>
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
            <Link href="/services/ceramic-coating" className="btn btn-secondary text-sm">
              Ceramic Coating Service
            </Link>
            <Link href="/areas/urmston" className="btn btn-secondary text-sm">
              Urmston Area Page
            </Link>
            <Link href="/car-detailing-urmston" className="btn btn-secondary text-sm">
              Car Detailing Urmston
            </Link>
            <Link href="/ceramic-coating-manchester" className="btn btn-secondary text-sm">
              Ceramic Coating Manchester
            </Link>
            <Link href="/blog/ceramic-coating-manchester-cost-benefits" className="btn btn-secondary text-sm">
              Ceramic Coating Cost & Benefits
            </Link>
            <Link href="/pricing" className="btn btn-secondary text-sm">
              View All Prices
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection
        eyebrow="Ceramic Coating — Urmston"
        title="Book Ceramic Coating in Urmston Today"
        description="We come to your door in Urmston — fully equipped with own water, power and professional products. Fixed quote confirmed before we start. Same-day and next-day slots available."
        primaryCTA="Book in Urmston"
      />
    </>
  );
}
