import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import { BUSINESS, getArea } from "@/lib/business";
import { buildLocalBusinessSchema, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

// Keyword-optimised metadata for highest-value areas
const AREA_META: Record<string, { title: string; description: string }> = {
  urmston: {
    title: "Car Wash Urmston | Car Valet Urmston M41",
    description:
      "Best mobile car wash & valet in Urmston (M41) — hand car wash alternative, full valet, ceramic coating & paint correction at your door. 5★ rated. Call 07482 225323.",
  },
  stretford: {
    title: "Car Valet Stretford | Mobile Car Detailing M32",
    description:
      "Mobile car valet & detailing in Stretford (M32). Professional car cleaning, ceramic coating & paint correction at your door in Stretford. 5★ rated. Call 07482 225323.",
  },
  sale: {
    title: "Car Detailing Sale Manchester | Mobile Car Valet M33",
    description:
      "Mobile car detailing & valeting in Sale (M33). Car wash, valet, ceramic coating & paint correction at your door in Sale & Sale Moor. 5★ rated. Call 07482 225323.",
  },
  didsbury: {
    title: "Car Detailing Didsbury | Mobile Car Valet South Manchester",
    description:
      "Professional car detailing in Didsbury — mobile car valet, ceramic coating & paint correction at your door. Serving Didsbury & South Manchester. 5★ rated. Book now.",
  },
  altrincham: {
    title: "Car Detailing Altrincham | Mobile Car Valet WA14",
    description:
      "Mobile car detailing & valeting in Altrincham (WA14, WA15). Ceramic coating, paint correction & full car valet at your door. 5★ rated. Call 07482 225323.",
  },
  salford: {
    title: "Car Detailing Salford | Mobile Car Valet Near Me",
    description:
      "Mobile car detailing in Salford (M27, M6, M7). Car valet, ceramic coating & paint correction at your door — Salford Quays, Pendleton & Swinton. 5★ rated. Call 07482 225323.",
  },
  eccles: {
    title: "Car Detailing Eccles | Mobile Car Valet M30",
    description:
      "Mobile car detailing & valeting in Eccles (M30). Car cleaning, ceramic coating & paint correction at your door across Eccles & Salford. 5★ rated. Book now.",
  },
  flixton: {
    title: "Car Valet Flixton | Mobile Car Detailing M41",
    description:
      "Mobile car valet & detailing in Flixton (M41). Professional car cleaning & ceramic coating at your door — rapid response from our Urmston base. 5★ rated. Call 07482 225323.",
  },
  "chorlton-cum-hardy": {
    title: "Car Detailing Chorlton Manchester | Mobile Car Valet M21",
    description:
      "Mobile car detailing & valeting in Chorlton-cum-Hardy (M21). Car cleaning, ceramic coating & paint correction at your door in Chorlton. 5★ rated. Book now.",
  },
  manchester: {
    title: "Car Detailing Manchester | Ceramic Coating & Correction",
    description:
      "Professional mobile car detailing across Manchester — ceramic coating, paint correction, machine polishing & interior detailing at your door. 5★ rated. From £80. Call 07482 225323.",
  },
  "old-trafford": {
    title: "Car Detailing Old Trafford | Mobile Car Valet M16 M17",
    description:
      "Mobile car detailing & valeting in Old Trafford (M16, M17). Ceramic coating, paint correction & full car valet at your door. 5★ rated. Call 07482 225323.",
  },
  partington: {
    title: "Car Detailing Partington | Mobile Car Wash Partington M31",
    description:
      "Mobile car detailing & valeting in Partington (M31) — hand car wash alternative, full detail, ceramic coating & paint correction at your door. 5★ rated. Call 07482 225323.",
  },
  irlam: {
    title: "Car Detailing Irlam | Mobile Car Valet M44",
    description:
      "Mobile car detailing & valeting in Irlam (M44). Full car detail, ceramic coating & paint correction at your door in Irlam & Cadishead. 5★ rated. Call 07482 225323.",
  },
  timperley: {
    title: "Car Detailing Timperley | Mobile Car Valet WA15",
    description:
      "Mobile car detailing & valeting in Timperley (WA15). Ceramic coating, paint correction & full car valet at your door. 5★ rated. Call 07482 225323.",
  },
  carrington: {
    title: "Car Detailing Carrington | Mobile Car Valet M31",
    description:
      "Mobile car detailing & valeting in Carrington (M31). Car cleaning, ceramic coating & paint correction at your door. 5★ rated. Call 07482 225323.",
  },
  davyhulme: {
    title: "Car Detailing Davyhulme | Mobile Car Valet M41",
    description:
      "Mobile car detailing & valeting in Davyhulme (M41) — next to our Urmston HQ, same-day slots available. Ceramic coating, paint correction & full valet at your door. 5★ rated. Call 07482 225323.",
  },
};

// Service+location landing pages that exist for each area — linked from the
// area page so every location entity connects to its service pages.
const GEO_PAGES: Record<string, { href: string; label: string }[]> = {
  manchester: [
    { href: "/car-detailing-manchester", label: "Car Detailing Manchester" },
    { href: "/ceramic-coating-manchester", label: "Ceramic Coating Manchester" },
    { href: "/mobile-detailing-manchester", label: "Mobile Detailing Manchester" },
    { href: "/car-valeting-manchester", label: "Car Valeting Manchester" },
    { href: "/paint-correction-manchester", label: "Paint Correction Manchester" },
    { href: "/interior-detailing-manchester", label: "Interior Detailing Manchester" },
  ],
  urmston: [
    { href: "/car-detailing-urmston", label: "Car Detailing Urmston" },
    { href: "/ceramic-coating-urmston", label: "Ceramic Coating Urmston" },
    { href: "/car-valeting-urmston", label: "Car Valeting Urmston" },
    { href: "/car-detailing-trafford", label: "Car Detailing Trafford" },
  ],
  salford: [{ href: "/car-detailing-salford", label: "Car Detailing Salford" }],
  sale: [
    { href: "/car-detailing-sale", label: "Car Detailing Sale" },
    { href: "/car-detailing-trafford", label: "Car Detailing Trafford" },
  ],
  stretford: [
    { href: "/car-detailing-stretford", label: "Car Detailing Stretford" },
    { href: "/car-detailing-trafford", label: "Car Detailing Trafford" },
  ],
  altrincham: [
    { href: "/car-detailing-altrincham", label: "Car Detailing Altrincham" },
    { href: "/car-detailing-trafford", label: "Car Detailing Trafford" },
  ],
  didsbury: [{ href: "/car-detailing-didsbury", label: "Car Detailing Didsbury" }],
  partington: [{ href: "/car-detailing-trafford", label: "Car Detailing Trafford" }],
  timperley: [{ href: "/car-detailing-trafford", label: "Car Detailing Trafford" }],
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BUSINESS.areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  const meta = AREA_META[slug];
  return {
    title: meta?.title ?? `Car Detailing & Valeting in ${area.name}`,
    description: meta?.description ?? `Mobile car detailing, valeting, ceramic coating and paint correction in ${area.name}, Greater Manchester. We come to your door. 5★ rated. Call 07482 225323.`,
    alternates: { canonical: `/areas/${slug}` },
  };
}

export default async function AreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  // Geographically adjacent areas (from the area's own entity data)
  const nearbyAreas = (area.nearby ?? [])
    .map((s) => getArea(s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));
  const geoPages = GEO_PAGES[slug] ?? [];

  const schema = buildLocalBusinessSchema();
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Areas", url: `${BUSINESS.url}/areas` },
    { name: area.name, url: `${BUSINESS.url}/areas/${slug}` },
  ]);
  const faqs = [
    {
      question: `Do you offer mobile car valeting in ${area.name}?`,
      answer: `Yes. Latin King Detailing provides fully mobile car valeting and detailing services in ${area.name} (${area.postcodes.join(", ")}). We come to your home, workplace or any convenient outdoor location — no need to travel.`,
    },
    {
      question: `How much does a car valet in ${area.name} cost?`,
      answer: `A full valet in ${area.name} starts from £80. Detailing packages start from £180+ depending on vehicle size and service level. We provide a fixed quote before any work begins — no surprise charges.`,
    },
    {
      question: `What areas near ${area.name} do you also cover?`,
      answer: `As well as ${area.name}, Latin King Detailing covers ${nearbyAreas.slice(0, 4).map((a) => a.name).join(", ")} and all surrounding Greater Manchester postcodes. Message us with your postcode to confirm availability.`,
    },
  ];
  const faqSchema = buildFAQSchema(faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="section-pad pt-32 md:pt-40" style={{ background: "var(--color-base-950)" }}>
        <div className="section-container">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Areas", href: "/areas" },
              { label: area.name },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="eyebrow">
                <MapPin size={12} aria-hidden="true" />
                {area.postcodes.join(", ")} postcode
              </p>
              <h1 className="mb-5">
                Mobile car detailing in{" "}
                <span className="gradient-text-red">{area.name}</span>
              </h1>
              <p className="text-lg mb-5 leading-relaxed" style={{ color: "rgba(255,255,255,0.65)", maxWidth: "52ch" }}>
                {area.description}
              </p>
              <p className="text-base mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.58)", maxWidth: "52ch" }}>
                {area.isHQ
                  ? `As our home base, ${area.name} customers benefit from the fastest availability and most flexible scheduling. Call or message to arrange your appointment.`
                  : `All of our services — from mobile valeting to ceramic coating and paint correction — are available in ${area.name} with the same quality and professionalism as our home base in Urmston.`}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" prefetch={false} className="btn btn-primary">
                  Book in {area.name}
                </Link>
                <a href={`tel:${BUSINESS.phone}`} className="btn btn-secondary">
                  <Phone size={16} />
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
              <p className="mt-3 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                No payment needed when you book — a £50 deposit secures bookings over £100. Fixed quote confirmed before any work starts.
              </p>
            </div>

            {/* Info card */}
            <div className="card p-7" style={{ background: "var(--color-base-900)" }}>
              <h2 className="text-xl mb-6" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, fontSize: "1.3rem" }}>
                Services available in {area.name}
              </h2>
              <ul className="space-y-3">
                {BUSINESS.services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="flex items-center justify-between group text-sm py-2 border-b transition-colors"
                      style={{ borderColor: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.7)" }}
                    >
                      <span className="group-hover:text-white transition-colors">{service.name}</span>
                      <div className="flex items-center gap-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                        <span>From £{service.priceFrom}</span>
                        <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                  All services performed at your location in {area.name}. Prices are starting points — exact quote depends on vehicle size and condition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad" style={{ background: "var(--color-base-900)" }}>
        <div className="section-container max-w-3xl">
          <h2 className="mb-8 text-3xl">
            Car detailing in {area.name} — common questions
          </h2>
          <div className="space-y-5">
            {faqs.map((faq, i) => (
              <div key={i} className="card p-6">
                <h3 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, fontSize: "1.05rem" }}>
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

      {/* Neighbourhoods & streets covered in this area */}
      {area.neighbourhoods && area.neighbourhoods.length > 0 && (
        <section className="section-pad" style={{ background: "var(--color-base-900)" }}>
          <div className="section-container">
            <h2 className="text-2xl mb-3">Neighbourhoods &amp; streets we cover in {area.name}</h2>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.55)", maxWidth: "60ch" }}>
              Our mobile unit works across {area.name} ({area.postcodes.join(", ")}) — book from any of these neighbourhoods and we come to you.
            </p>
            <div className="flex flex-wrap gap-3">
              {area.neighbourhoods.map((n) => (
                <span
                  key={n}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium"
                  style={{
                    background: "var(--color-base-800)",
                    border: "1px solid var(--color-border)",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  <MapPin size={12} style={{ color: "var(--color-accent-500)" }} />
                  {n}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service pages for this location */}
      {geoPages.length > 0 && (
        <section className="section-pad">
          <div className="section-container">
            <h2 className="text-2xl mb-6">Car detailing services in {area.name}</h2>
            <div className="flex flex-wrap gap-3">
              {geoPages.map((g) => (
                <Link
                  key={g.href}
                  href={g.href}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all"
                  style={{
                    background: "var(--color-base-900)",
                    border: "1px solid var(--color-border)",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  {g.label}
                  <ArrowRight size={12} style={{ color: "var(--color-accent-500)" }} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Nearby areas */}
      <section className="section-pad">
        <div className="section-container">
          <h2 className="text-2xl mb-6">We also cover nearby areas</h2>
          <div className="flex flex-wrap gap-3">
            {nearbyAreas.map((nearArea) => (
              <Link
                key={nearArea.slug}
                href={`/areas/${nearArea.slug}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all"
                style={{
                  background: "var(--color-base-900)",
                  border: "1px solid var(--color-border)",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                <MapPin size={12} style={{ color: "var(--color-accent-500)" }} />
                {nearArea.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection
        eyebrow={`Serving ${area.name}`}
        title={`Book Mobile Car Detailing in ${area.name}`}
        description={`We come to your door in ${area.name} — fully equipped with our own water, power and professional products. Get a fixed quote before we start.`}
        primaryCTA={`Book in ${area.name}`}
      />
    </>
  );
}
