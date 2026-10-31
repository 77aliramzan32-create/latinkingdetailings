import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, CheckCircle, Star, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { buildLocalBusinessSchema, buildBreadcrumbSchema, buildFAQSchema, buildServiceLocationSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export const metadata: Metadata = {
  title: "Interior Detailing Manchester | Deep Clean",
  description: "Interior car detailing in Manchester from £80 — steam clean, hot water extraction, leather care & odour removal at your door. 5★ rated.",
  alternates: { canonical: "/interior-detailing-manchester" },
  openGraph: {
    title: "Interior Detailing Manchester | Deep Clean",
    description: "Interior car detailing in Manchester from £80 — steam clean, hot water extraction, leather care & odour removal at your door. 5★ rated.",
    type: "website",
    url: `${BUSINESS.url}/interior-detailing-manchester`,
  },
};

const WHY = [
  { title: "Hot water extraction", desc: "Seats and carpets are deep-cleaned with hot water extraction — dirt is lifted out, not pushed around." },
  { title: "Steam cleaning", desc: "Steam sanitises surfaces and vents without harsh chemicals, and reaches the places a cloth cannot." },
  { title: "Leather cared for properly", desc: "Leather is cleaned and conditioned with dedicated products — never all-purpose cleaners that dry it out." },
  { title: "Odours removed at source", desc: "We eliminate the cause of smells — bacteria in fabrics and vents — rather than masking them with air freshener." },
  { title: "Child and pet safe", desc: "Family cars, pet hair, spills — we deal with all of it, and the products we use are safe once dry." },
  { title: "Fixed price before we start", desc: "Interior detailing from £80, confirmed as a fixed quote before any work begins." }
];

const SERVICES = [
  { name: "Interior Detailing", href: "/services/interior-detailing", price: 80, desc: "Steam clean, hot water extraction, odour elimination. 2–4 hours." },
  { name: "Deep Cleaning", href: "/services/deep-cleaning", price: 200, desc: "The most comprehensive package — full exterior and interior reset in one visit." },
  { name: "Full Car Detail", href: "/services/car-detailing", price: 180, desc: "Full decontamination, machine polish, protection and interior deep clean. 4–8 hours." },
  { name: "Full Valet", href: "/services/mobile-valeting", price: 80, desc: "Full interior and exterior clean, hand polish, door shuts and boot. 2.5–3.5 hours." },
  { name: "Engine Bay Cleaning", href: "/services/engine-bay-cleaning", price: 50, desc: "Safe degreaser and steam clean. Electronics protected throughout. 45–90 minutes." }
];

const FAQS = [
  {
    question: "How much does interior detailing cost in Manchester?",
    answer: "Interior detailing in Manchester starts from £80. Deep cleaning packages start from £200. We provide a fixed quote before any work begins — no surprise charges.",
  },
  {
    question: "How long does interior detailing take?",
    answer: "Interior detailing takes 2–4 hours depending on vehicle size and condition. Deep cleaning takes longer.",
  },
  {
    question: "Can you remove pet hair, stains and smells?",
    answer: "Yes. Hot water extraction removes pet hair and stains from seats and carpets, and we eliminate odours at source — bacteria in fabrics and vents — rather than masking them.",
  },
  {
    question: "Is interior detailing safe for leather seats?",
    answer: "Yes. Leather is cleaned and conditioned with dedicated products, never all-purpose cleaners that dry it out.",
  },
  {
    question: "Do you need my water or electricity?",
    answer: "No. Latin King Detailing arrives entirely self-sufficient with our own water supply and generator. We only need a safe outdoor space to work around the vehicle.",
  },
  {
    question: "Can you detail the interior at my home or workplace in Manchester?",
    answer: "Yes. We regularly detail interiors at homes and workplaces across Manchester (M1–M16). Message us your postcode to confirm availability.",
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

export default function InteriorDetailingManchesterPage() {
  const localBusinessSchema = buildLocalBusinessSchema();
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: `${BUSINESS.url}/` },
    { name: "Car Detailing Manchester", url: `${BUSINESS.url}/car-detailing-manchester` },
    { name: "Interior Detailing Manchester", url: `${BUSINESS.url}/interior-detailing-manchester` }
  ]);
  const faqSchema = buildFAQSchema(FAQS);
  const serviceSchema = buildServiceLocationSchema({
    serviceName: "Interior Detailing",
    serviceSlug: "interior-detailing",
    serviceDescription: "Interior car detailing in Manchester — steam clean, hot water extraction, leather care and odour removal at your door. From £80.",
    priceFrom: 80,
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
              { label: "Interior Detailing Manchester" }
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="eyebrow">
                <MapPin size={12} aria-hidden="true" />
                Steam & extraction cleaning — Greater Manchester
              </p>
              <h1 className="mb-5">
                Interior Detailing{" "}
                <span className="gradient-text-red">Manchester</span>
              </h1>
              <p
                className="text-xl mb-4"
                style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-barlow-condensed)", fontWeight: 700 }}
              >
                A deeper clean than any valet can give.
              </p>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "rgba(255,255,255,0.65)", maxWidth: "54ch" }}
              >
                Seats, carpets, dashboard, vents and every surface in between — our interior detailing in Manchester uses steam cleaning and hot water extraction to remove the dirt, bacteria and odours that a normal clean leaves behind.
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "rgba(255,255,255,0.65)", maxWidth: "54ch" }}
              >
                Based in Urmston, we detail interiors across Manchester city and Greater Manchester — from the city centre to Didsbury, Chorlton, Salford, Stretford and Sale. Family cars, pet hair, spills and smells — all dealt with at your door, with our own water and power.
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
            Interior Detailing in Manchester — done properly, at your door, with a fixed price confirmed before we start.
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
            Our mobile interior unit works across the full region — tap your area to see the services available there.
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
          <h2 className="mb-8">Interior Detailing in Manchester — common questions</h2>
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
            <Link href="/services/interior-detailing" className="btn btn-secondary text-sm">
              Interior Detailing Service
            </Link>
            <Link href="/areas/manchester" className="btn btn-secondary text-sm">
              Manchester Area Page
            </Link>
            <Link href="/car-detailing-manchester" className="btn btn-secondary text-sm">
              Car Detailing Manchester
            </Link>
            <Link href="/mobile-detailing-manchester" className="btn btn-secondary text-sm">
              Mobile Detailing Manchester
            </Link>
            <Link href="/blog/mobile-detailing-vs-car-wash" className="btn btn-secondary text-sm">
              Mobile Detailing vs Car Wash
            </Link>
            <Link href="/pricing" className="btn btn-secondary text-sm">
              View All Prices
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection
        eyebrow="Interior Detailing — Manchester"
        title="Book Interior Detailing in Manchester Today"
        description="We come to your door in Manchester — fully equipped with own water, power and professional products. Fixed quote confirmed before we start. Same-day and next-day slots available."
        primaryCTA="Book in Manchester"
      />
    </>
  );
}
