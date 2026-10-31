import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, CheckCircle, Star, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { buildLocalBusinessSchema, buildBreadcrumbSchema, buildFAQSchema, buildServiceLocationSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export const metadata: Metadata = {
  title: "Car Detailing Trafford | Mobile Detailing",
  description: "Car detailing across Trafford — Urmston, Stretford, Sale, Altrincham & Partington. Full detail from £180 at your door. 5★ rated.",
  alternates: { canonical: "/car-detailing-trafford" },
  openGraph: {
    title: "Car Detailing Trafford | Mobile Detailing",
    description: "Car detailing across Trafford — Urmston, Stretford, Sale, Altrincham & Partington. Full detail from £180 at your door. 5★ rated.",
    type: "website",
    url: `${BUSINESS.url}/car-detailing-trafford`,
  },
};

const WHY = [
  { title: "Decontamination first", desc: "Iron fallout remover and clay bar remove bonded contamination a wash cannot touch — the essential first step." },
  { title: "Machine polish included", desc: "A machine enhancement polish restores gloss and removes light swirls as part of every full detail." },
  { title: "Interior deep clean", desc: "Hot water extraction on seats and carpets, steam on vents and trim — the inside gets the same attention as the outside." },
  { title: "Protection that lasts", desc: "Finished with wax, sealant or a ceramic topper so the result survives Manchester weather." },
  { title: "Fixed price before we start", desc: "Full detail from £180, confirmed as a fixed quote before any work begins." },
  { title: "Fully mobile in Trafford", desc: "We bring our own water and power to any driveway, street or car park in Trafford." }
];

const SERVICES = [
  { name: "Full Car Detail", href: "/services/car-detailing", price: 180, desc: "Full decontamination, machine polish, protection and interior deep clean. 4–8 hours." },
  { name: "Full Valet", href: "/services/mobile-valeting", price: 80, desc: "Full interior and exterior clean, hand polish, door shuts and boot. 2.5–3.5 hours." },
  { name: "Ceramic Coating", href: "/services/ceramic-coating", price: 180, desc: "SiO₂ coating lasting 2–3 years. Full paint prep always included. 1–2 days." },
  { name: "Paint Correction", href: "/services/paint-correction", price: 300, desc: "Machine removal of swirl marks, scratches and oxidation. 6–12 hours." },
  { name: "Interior Detailing", href: "/services/interior-detailing", price: 80, desc: "Steam clean, hot water extraction, odour elimination. 2–4 hours." }
];

const FAQS = [
  {
    question: "How much does a full car detail cost in Trafford?",
    answer: "A full car detail in Trafford starts from £180. The exact price depends on vehicle size and service level. We provide a fixed quote before any work begins — no surprise charges.",
  },
  {
    question: "How long does a full detail take?",
    answer: "A full detail takes 4–8 hours depending on vehicle size and condition. We confirm the time when you book.",
  },
  {
    question: "What is the difference between a valet and a full detail?",
    answer: "A valet is a thorough clean inside and out. A full detail adds decontamination, machine polishing, deep interior cleaning and protection — a complete reset of the car, inside and out.",
  },
  {
    question: "Do you need my water or electricity?",
    answer: "No. Latin King Detailing arrives entirely self-sufficient with our own water supply and generator. The only requirement is a safe outdoor space to work around the vehicle.",
  },
  {
    question: "Do you cover Urmston, Stretford, Sale, Altrincham and Partington?",
    answer: "Yes — we cover Urmston, Stretford, Sale, Altrincham and Partington and all M41, M32, M33, WA14, WA15, M31 postcodes, plus the wider Greater Manchester area. Message us your postcode to confirm availability.",
  },
  {
    question: "Can you detail at my workplace in Trafford?",
    answer: "Yes. We regularly detail cars at workplaces and car parks across Trafford. As long as there is safe outdoor space around the vehicle, we can work there.",
  }
];

const PLACES = [
  { name: "Urmston", href: "/areas/urmston" },
  { name: "Stretford", href: "/areas/stretford" },
  { name: "Sale", href: "/areas/sale" },
  { name: "Altrincham", href: "/areas/altrincham" },
  { name: "Partington", href: "/areas/partington" },
  { name: "Timperley", href: "/areas/timperley" },
  { name: "Flixton", href: "/areas/flixton" },
  { name: "Davyhulme", href: "/areas/davyhulme" },
  { name: "Old Trafford", href: "/areas/old-trafford" },
  { name: "Carrington", href: "/areas/carrington" }
];

export default function CarDetailingTraffordPage() {
  const localBusinessSchema = buildLocalBusinessSchema();
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: `${BUSINESS.url}/` },
    { name: "Areas", url: `${BUSINESS.url}/areas` },
    { name: "Car Detailing Trafford", url: `${BUSINESS.url}/car-detailing-trafford` }
  ]);
  const faqSchema = buildFAQSchema(FAQS);
  const serviceSchema = buildServiceLocationSchema({
    serviceName: "Car Detailing",
    serviceSlug: "car-detailing",
    serviceDescription: "Car detailing across Trafford — full detail in Urmston, Stretford, Sale, Altrincham, Partington and Timperley, at your door. From £180.",
    priceFrom: 180,
    locationName: "Trafford",
    locationSlug: "trafford",
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
              { label: "Car Detailing Trafford" }
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="eyebrow">
                <MapPin size={12} aria-hidden="true" />
                Serving the whole Trafford borough
              </p>
              <h1 className="mb-5">
                Car Detailing{" "}
                <span className="gradient-text-red">Trafford</span>
              </h1>
              <p
                className="text-xl mb-4"
                style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-barlow-condensed)", fontWeight: 700 }}
              >
                The complete reset — inside and out.
              </p>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "rgba(255,255,255,0.65)", maxWidth: "54ch" }}
              >
                A full car detail is the complete reset: decontamination, machine polish, deep interior clean and protection — done at your door in Trafford by a mobile team that brings everything with it.
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "rgba(255,255,255,0.65)", maxWidth: "54ch" }}
              >
                Trafford is our home borough — our unit is based on Flixton Road in Urmston, in the heart of it. We cover the full borough: Urmston, Stretford, Sale, Altrincham, Partington and Timperley, with same-day and next-day slots and our own water and power at every job.
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
                  Book in Trafford
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
                Services in Trafford
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
          <h2 className="mb-3">Why choose Latin King Detailing in Trafford?</h2>
          <p className="mb-8 text-base" style={{ color: "rgba(255,255,255,0.55)", maxWidth: "52ch" }}>
            Car Detailing in Trafford — done properly, at your door, with a fixed price confirmed before we start.
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
          <h2 className="mb-3">Trafford areas we cover</h2>
          <p className="mb-8 text-base" style={{ color: "rgba(255,255,255,0.55)", maxWidth: "52ch" }}>
            Every town and village in the Trafford borough — tap your area to see the services available there.
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
          <h2 className="mb-8">Car Detailing in Trafford — common questions</h2>
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
            <Link href="/services/car-detailing" className="btn btn-secondary text-sm">
              Car Detailing Service
            </Link>
            <Link href="/areas/urmston" className="btn btn-secondary text-sm">
              Urmston Area Page
            </Link>
            <Link href="/car-detailing-urmston" className="btn btn-secondary text-sm">
              Car Detailing Urmston
            </Link>
            <Link href="/car-detailing-sale" className="btn btn-secondary text-sm">
              Car Detailing Sale
            </Link>
            <Link href="/car-detailing-stretford" className="btn btn-secondary text-sm">
              Car Detailing Stretford
            </Link>
            <Link href="/pricing" className="btn btn-secondary text-sm">
              View All Prices
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection
        eyebrow="Car Detailing — Trafford"
        title="Book Car Detailing in Trafford Today"
        description="We come to your door in Trafford — fully equipped with own water, power and professional products. Fixed quote confirmed before we start. Same-day and next-day slots available."
        primaryCTA="Book in Trafford"
      />
    </>
  );
}
