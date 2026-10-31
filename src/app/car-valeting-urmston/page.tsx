import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, CheckCircle, Star, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { buildLocalBusinessSchema, buildBreadcrumbSchema, buildFAQSchema, buildServiceLocationSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export const metadata: Metadata = {
  title: "Car Valeting Urmston | Mobile Valet M41",
  description: "Car valeting in Urmston (M41) — full valet from £80 at your door, from our Flixton Road base. Same-day slots. 5★ rated.",
  alternates: { canonical: "/car-valeting-urmston" },
  openGraph: {
    title: "Car Valeting Urmston | Mobile Valet M41",
    description: "Car valeting in Urmston (M41) — full valet from £80 at your door, from our Flixton Road base. Same-day slots. 5★ rated.",
    type: "website",
    url: `${BUSINESS.url}/car-valeting-urmston`,
  },
};

const WHY = [
  { title: "Proper wash technique", desc: "Foam pre-wash and the two-bucket method mean dirt is lifted off before anything touches your paint — the opposite of a forecourt hand wash." },
  { title: "Full interior included", desc: "Vacuum, wipe-down, seat shampoo or leather conditioning, door shuts and boot — not just a quick once-over." },
  { title: "We come to you in Urmston", desc: "Driveway, street parking or workplace car park in Urmston — we bring our own water and power." },
  { title: "Fixed price before we start", desc: "Full valet from £80, confirmed as a fixed quote before any work begins. No surprises." },
  { title: "No swirl marks", desc: "Clean microfibre, fresh water and pH-neutral shampoo protect your paint instead of scratching it." },
  { title: "Same-day slots", desc: "Call or message any time — same-day and next-day appointments across Urmston." }
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
    question: "How much does a car valet in Urmston cost?",
    answer: "A full valet in Urmston starts from £80. Detailing packages start from £180. We provide a fixed quote before any work begins — no surprise charges.",
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
    question: "Is a mobile valet better than a hand car wash in Urmston?",
    answer: "Yes. Forecourt hand washes use shared cloths and recycled water, which is how swirl marks happen. A proper mobile valet uses foam pre-wash, the two-bucket method and clean microfibre — the same technique used on prestige cars.",
  },
  {
    question: "Do you cover Urmston town centre, Flixton Road and Stretford Road?",
    answer: "Yes — we cover Urmston town centre, Flixton Road and Stretford Road and all M41 postcodes, plus the wider Greater Manchester area. Message us your postcode to confirm availability.",
  },
  {
    question: "Can you valet at my workplace in Urmston?",
    answer: "Yes. We regularly valet cars at workplaces and car parks across Urmston. As long as there is safe outdoor space around the vehicle, we can work there.",
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

export default function CarValetingUrmstonPage() {
  const localBusinessSchema = buildLocalBusinessSchema();
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: `${BUSINESS.url}/` },
    { name: "Areas", url: `${BUSINESS.url}/areas` },
    { name: "Urmston", url: `${BUSINESS.url}/areas/urmston` },
    { name: "Car Valeting Urmston", url: `${BUSINESS.url}/car-valeting-urmston` }
  ]);
  const faqSchema = buildFAQSchema(FAQS);
  const serviceSchema = buildServiceLocationSchema({
    serviceName: "Mobile Car Valeting",
    serviceSlug: "car-valeting",
    serviceDescription: "Mobile car valeting in Urmston — full valet at your door with foam pre-wash, two-bucket wash and full interior clean. From £80.",
    priceFrom: 80,
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
              { label: "Car Valeting Urmston" }
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="eyebrow">
                <MapPin size={12} aria-hidden="true" />
                Our home base — Flixton Road, Urmston
              </p>
              <h1 className="mb-5">
                Car Valeting{" "}
                <span className="gradient-text-red">Urmston</span>
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
                A full valet, done properly, at your door in Urmston. Foam-cannon pre-wash, safe two-bucket hand wash, wheel and tyre clean, full interior vacuum and wipe-down, hand polish and seat shampoo or leather conditioning — the complete valet, without the forecourt swirl marks.
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "rgba(255,255,255,0.65)", maxWidth: "54ch" }}
              >
                Urmston is our home base — our unit is on Flixton Road, so Urmston customers get the fastest availability and most flexible scheduling. Same-day and next-day slots across M41, including Urmston town centre, Flixton Road and Stretford Road.
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
            Mobile Car Valeting in Urmston — done properly, at your door, with a fixed price confirmed before we start.
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
            Our base is on Flixton Road — we valet cars across Urmston and the neighbouring areas.
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
          <h2 className="mb-8">Mobile Car Valeting in Urmston — common questions</h2>
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
            <Link href="/areas/urmston" className="btn btn-secondary text-sm">
              Urmston Area Page
            </Link>
            <Link href="/car-detailing-urmston" className="btn btn-secondary text-sm">
              Car Detailing Urmston
            </Link>
            <Link href="/ceramic-coating-urmston" className="btn btn-secondary text-sm">
              Ceramic Coating Urmston
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
        eyebrow="Mobile Car Valeting — Urmston"
        title="Book Mobile Car Valeting in Urmston Today"
        description="We come to your door in Urmston — fully equipped with own water, power and professional products. Fixed quote confirmed before we start. Same-day and next-day slots available."
        primaryCTA="Book in Urmston"
      />
    </>
  );
}
