import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, CheckCircle, Star, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { buildLocalBusinessSchema, buildBreadcrumbSchema, buildFAQSchema, buildServiceLocationSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export const metadata: Metadata = {
  title: "Car Valeting Manchester | Mobile Valet at Your Door",
  description: "Mobile car valeting in Manchester — full valet from £80 at your door. Foam pre-wash, two-bucket wash, interior clean. 5★ rated. Same-day slots.",
  alternates: { canonical: "/car-valeting-manchester" },
  openGraph: {
    title: "Car Valeting Manchester | Mobile Valet at Your Door",
    description: "Mobile car valeting in Manchester — full valet from £80 at your door. Foam pre-wash, two-bucket wash, interior clean. 5★ rated. Same-day slots.",
    type: "website",
    url: `${BUSINESS.url}/car-valeting-manchester`,
  },
};

const WHY = [
  { title: "Proper wash technique", desc: "Foam pre-wash and the two-bucket method mean dirt is lifted off before anything touches your paint — the opposite of a forecourt hand wash." },
  { title: "Full interior included", desc: "Vacuum, wipe-down, seat shampoo or leather conditioning, door shuts and boot — not just a quick once-over." },
  { title: "We come to you in Manchester", desc: "Driveway, street parking or workplace car park in Manchester — we bring our own water and power." },
  { title: "Fixed price before we start", desc: "Full valet from £80, confirmed as a fixed quote before any work begins. No surprises." },
  { title: "No swirl marks", desc: "Clean microfibre, fresh water and pH-neutral shampoo protect your paint instead of scratching it." },
  { title: "Same-day slots", desc: "Call or message any time — same-day and next-day appointments across Manchester." }
];

const SERVICES = [
  { name: "Full Valet", href: "/services/mobile-valeting", price: 80, desc: "Full interior and exterior clean, hand polish, door shuts and boot. 2.5–3.5 hours." },
  { name: "Full Car Detail", href: "/services/car-detailing", price: 180, desc: "Full decontamination, machine polish, protection and interior deep clean. 4–8 hours." },
  { name: "Ceramic Coating", href: "/services/ceramic-coating", price: 180, desc: "SiO₂ coating lasting 2–3 years. Full paint prep always included. 1–2 days." },
  { name: "Interior Detailing", href: "/services/interior-detailing", price: 80, desc: "Steam clean, hot water extraction, odour elimination. 2–4 hours." },
  { name: "Engine Bay Cleaning", href: "/services/engine-bay-cleaning", price: 50, desc: "Safe degreaser and steam clean. Electronics protected throughout. 45–90 minutes." }
];

const FAQS = [
  {
    question: "How much does a car valet in Manchester cost?",
    answer: "A full valet in Manchester starts from £80. Detailing packages start from £180. We provide a fixed quote before any work begins — no surprise charges.",
  },
  {
    question: "How long does a mobile valet take?",
    answer: "A full valet takes 2.5–3.5 hours depending on vehicle size and condition. We confirm the time when you book.",
  },
  {
    question: "Do you need my water or electricity?",
    answer: "No. Latin King Detailing arrives entirely self-sufficient with our own water supply and generator. The only requirement is a safe outdoor space to work around the vehicle.",
  },
  {
    question: "Is a mobile valet better than a hand car wash in Manchester?",
    answer: "Yes. Forecourt hand washes use shared cloths and recycled water, which is how swirl marks happen. A proper mobile valet uses foam pre-wash, the two-bucket method and clean microfibre — the same technique used on prestige cars.",
  },
  {
    question: "Do you cover Manchester city centre, Didsbury, Chorlton and Salford?",
    answer: "Yes — we cover Manchester city centre, Didsbury, Chorlton and Salford and all M1–M16 postcodes, plus the wider Greater Manchester area. Message us your postcode to confirm availability.",
  },
  {
    question: "Can you valet at my workplace in Manchester?",
    answer: "Yes. We regularly valet cars at workplaces and car parks across Manchester. As long as there is safe outdoor space around the vehicle, we can work there.",
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

export default function CarValetingManchesterPage() {
  const localBusinessSchema = buildLocalBusinessSchema();
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: `${BUSINESS.url}/` },
    { name: "Car Detailing Manchester", url: `${BUSINESS.url}/car-detailing-manchester` },
    { name: "Car Valeting Manchester", url: `${BUSINESS.url}/car-valeting-manchester` }
  ]);
  const faqSchema = buildFAQSchema(FAQS);
  const serviceSchema = buildServiceLocationSchema({
    serviceName: "Mobile Car Valeting",
    serviceSlug: "car-valeting",
    serviceDescription: "Mobile car valeting in Manchester — full valet at your door with foam pre-wash, two-bucket wash and full interior clean. From £80.",
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
              { label: "Car Valeting Manchester" }
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="eyebrow">
                <MapPin size={12} aria-hidden="true" />
                Mobile car valeting — Greater Manchester
              </p>
              <h1 className="mb-5">
                Car Valeting{" "}
                <span className="gradient-text-red">Manchester</span>
              </h1>
              <p
                className="text-xl mb-4"
                style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-barlow-condensed)", fontWeight: 700 }}
              >
                A full valet, done properly, at your door.
              </p>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "rgba(255,255,255,0.65)", maxWidth: "54ch" }}
              >
                A full valet, done properly, at your door in Manchester. Foam-cannon pre-wash, safe two-bucket hand wash, wheel and tyre clean, full interior vacuum and wipe-down, hand polish and seat shampoo or leather conditioning — the complete valet, without the forecourt swirl marks.
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "rgba(255,255,255,0.65)", maxWidth: "54ch" }}
              >
                Based in Urmston, we cover Manchester city and the wider Greater Manchester area — from the city centre to Didsbury, Chorlton, Salford, Stretford and Sale — with same-day and next-day appointments. Every valet is done at your door with our own water and power.
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
            Mobile Car Valeting in Manchester — done properly, at your door, with a fixed price confirmed before we start.
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
            Our mobile valeting unit works across the full region — tap your area to see the services available there.
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
          <h2 className="mb-8">Mobile Car Valeting in Manchester — common questions</h2>
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
            <Link href="/services/mobile-valeting" className="btn btn-secondary text-sm">
              Mobile Valeting Service
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
            <Link href="/blog/hand-car-wash-vs-mobile-valeting" className="btn btn-secondary text-sm">
              Hand Wash vs Mobile Valeting
            </Link>
            <Link href="/pricing" className="btn btn-secondary text-sm">
              View All Prices
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection
        eyebrow="Mobile Car Valeting — Manchester"
        title="Book Mobile Car Valeting in Manchester Today"
        description="We come to your door in Manchester — fully equipped with own water, power and professional products. Fixed quote confirmed before we start. Same-day and next-day slots available."
        primaryCTA="Book in Manchester"
      />
    </>
  );
}
