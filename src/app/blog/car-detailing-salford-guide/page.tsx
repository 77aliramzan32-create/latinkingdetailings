import type { Metadata } from "next";
import Link from "next/link";
import { Clock, CheckCircle, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { buildBreadcrumbSchema, buildFAQSchema, buildArticleSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Car Detailing Salford | Mobile Detailing at Your Door",
  description: "Mobile car detailing in Salford — full valet from £80, detailing from £180, ceramic coating from £180. Salford Quays, Pendleton, Swinton & M5, M6, M27.",
  alternates: { canonical: "/blog/car-detailing-salford-guide" },
  openGraph: {
    title: "Car Detailing Salford: Mobile Detailing at Your Door",
    description:
      "Fully mobile car detailing across Salford — Salford Quays, Pendleton, Swinton and beyond. Own water, power and products. Fixed quote before we start.",
    type: "article",
    publishedTime: "2026-10-31",
    modifiedTime: "2026-10-31",
    authors: [BUSINESS.url],
    tags: ["car detailing salford", "car valet salford", "mobile detailing salford", "car cleaning salford"],
  },
};

const FAQS = [
  {
    question: "Do you offer mobile car detailing in Salford?",
    answer:
      "Yes. Latin King Detailing is a fully mobile service covering all of Salford — Salford Quays, Pendleton, Swinton, Eccles borders and the M5, M6, M7 and M27 postcode areas. We come to your home, workplace or any suitable outdoor location with our own water, power and professional-grade products. There is no need to travel to a premises.",
  },
  {
    question: "How much does car detailing cost in Salford?",
    answer:
      "A mobile full valet in Salford starts from £80. A full car detail starts from £180, ceramic coating from £180, and paint correction from £300. Every price is confirmed as a fixed quote before any work begins, based on your vehicle size and condition — no hidden charges.",
  },
  {
    question: "Do you need water or electricity at my address in Salford?",
    answer:
      "No. We arrive fully self-sufficient with our own water supply and power. That matters in Salford, where many customers live in apartments around Salford Quays or terraced streets in Pendleton — all we need is a safe outdoor space to work around the vehicle, such as a driveway, street parking or a workplace car park.",
  },
  {
    question: "How long does a car detail take?",
    answer:
      "A full valet takes 2.5–3.5 hours. A full car detail takes 4–8 hours. Paint correction takes 6–12 hours, and ceramic coating is a 1–2 day process including paint preparation. We confirm the exact duration when providing your quote.",
  },
  {
    question: "Do you cover Salford Quays apartments?",
    answer:
      "Yes — Salford Quays is one of our regular areas. Many customers there book us for their underground or outdoor car park bays. As long as we can safely access the vehicle and work around it, we can detail it. Message us your postcode and parking situation and we will confirm straight away.",
  },
];

export default function CarDetailingSalfordPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Blog", url: `${BUSINESS.url}/blog` },
    { name: "Car Detailing Salford", url: `${BUSINESS.url}/blog/car-detailing-salford-guide` },
  ]);
  const faqSchema = buildFAQSchema(FAQS);
  const articleSchema = buildArticleSchema({
    headline: "Car Detailing Salford: Mobile Detailing at Your Door",
    description:
      "Fully mobile car detailing across Salford — Salford Quays, Pendleton, Swinton and beyond. Own water, power and products. Fixed quote before we start.",
    datePublished: "2026-10-31",
    dateModified: "2026-10-31",
    url: `${BUSINESS.url}/blog/car-detailing-salford-guide`,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article>
        <section className="section-pad pt-32 md:pt-40" style={{ background: "var(--color-base-950)" }}>
          <div className="section-container max-w-3xl">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: "Car Detailing Salford" },
              ]}
            />

            <div className="flex items-center gap-3 mb-6">
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: "var(--color-base-800)", color: "rgba(255,255,255,0.6)" }}
              >
                Area Guide
              </span>
              <span className="flex items-center gap-1.5 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                <Clock size={13} />
                5 min read
              </span>
            </div>

            <h1 className="mb-5">Car Detailing Salford: Mobile Detailing at Your Door</h1>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
              By Latin King Detailing · Mobile detailers based in Urmston, Manchester · Last updated 31 October 2026
            </p>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.68)", maxWidth: "58ch" }}>
              Salford is one of our busiest areas — from the apartment blocks of Salford Quays to the terraced streets of Pendleton and the family homes of Swinton. Here is exactly what mobile detailing looks like when we bring it to your door in Salford.
            </p>
          </div>
        </section>

        <section className="section-pad" style={{ background: "var(--color-base-900)" }}>
          <div className="section-container max-w-3xl">
            <div className="space-y-8">

              <div className="card p-6" style={{ background: "var(--color-base-800)", borderLeft: "4px solid var(--color-accent-500)" }}>
                <p className="text-sm font-semibold text-white mb-2">Key takeaway</p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Latin King Detailing covers all of Salford — Salford Quays, Pendleton, Swinton and the M5, M6, M7 and M27 postcodes — as a fully mobile service. A full valet starts from £80, a full detail from £180, ceramic coating from £180. We bring our own water and power, so apartment car parks and terraced streets are no problem.
                </p>
              </div>

              <div>
                <h2 className="mb-4">Where in Salford do we work?</h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Our Salford coverage runs from our Urmston base, a short drive along the M60 and A57:
                </p>
                <ul className="space-y-2">
                  {[
                    "Salford Quays — MediaCityUK, the apartment blocks and waterfront developments. Underground and outdoor car park bays are fine.",
                    "Pendleton — terraced streets and family homes around Langworthy Road and the precinct.",
                    "Swinton — residential streets across M27, including the estates off Chorley Road.",
                    "Eccles borders and the M30 edge — we cover the Salford–Eccles boundary streets too.",
                    "Salford city centre and the M5/M6/M7 postcodes — workplaces, hotels and residential blocks.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                      <CheckCircle size={14} className="mt-0.5 flex-shrink-0" style={{ color: "var(--color-accent-500)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-base leading-relaxed mt-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Not sure if your postcode is covered? Message us with it — if you are in Greater Manchester, the answer is almost always yes.
                </p>
              </div>

              <div>
                <h2 className="mb-4">What services can you book in Salford?</h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Every service we offer is available mobile in Salford — the same work, the same products, at your location:
                </p>
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { name: "Full Valet", price: "From £80", time: "2.5–3.5 hours", best: "The everyday thorough clean" },
                    { name: "Full Car Detail", price: "From £180", time: "4–8 hours", best: "Decontamination, polish & protection" },
                    { name: "Ceramic Coating", price: "From £180", time: "1–2 days", best: "2–3 year paint protection" },
                    { name: "Paint Correction", price: "From £300", time: "6–12 hours", best: "Permanent swirl & scratch removal" },
                  ].map((v) => (
                    <div key={v.name} className="card p-6" style={{ background: "var(--color-base-800)" }}>
                      <h3 className="font-bold text-white mb-3" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, fontSize: "1.2rem" }}>
                        {v.name}
                      </h3>
                      <div className="space-y-1.5 text-sm">
                        <p style={{ color: "rgba(255,255,255,0.65)" }}><span className="text-white font-semibold">Price:</span> {v.price}</p>
                        <p style={{ color: "rgba(255,255,255,0.65)" }}><span className="text-white font-semibold">Time:</span> {v.time}</p>
                        <p style={{ color: "rgba(255,255,255,0.65)" }}><span className="text-white font-semibold">Best for:</span> {v.best}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mt-4" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Interior detailing (from £80), deep cleaning (from £200) and engine bay cleaning (from £50) are also available. See the full list on our <Link href="/pricing" className="underline" style={{ color: "var(--color-accent-500)" }}>pricing page</Link>.
                </p>
              </div>

              <div>
                <h2 className="mb-4">Why mobile works so well in Salford</h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Salford is built for mobile detailing. Much of the Quays is apartments — there is no driveway to wash a car on and no local hand car wash that comes to you. In Pendleton and Swinton, the terraced streets mean parking is on-street and the nearest car wash is a drive away. A mobile detailer solves both problems: we arrive with our own water supply and power, work in your parking bay or on your street, and you never move the car.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  It is also the practical choice for MediaCityUK professionals — book a valet during the working day and the car is done by the time you finish. Same-day and next-day appointments are available across Salford.
                </p>
              </div>

              <div>
                <h2 className="mb-4">What Salford customers ask us most</h2>
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  The two questions we hear most from Salford are about access (&ldquo;can you work in an underground car park?&rdquo; — yes, as long as there is space to open the doors and work around the car) and about water (&ldquo;do you need my tap?&rdquo; — no, we bring our own). The third is about price — and the answer is always the same: a fixed quote confirmed before we start, no surprises on completion.
                </p>
              </div>

              <div>
                <h2 className="mb-6">Common questions</h2>
                <div className="space-y-5">
                  {FAQS.map((faq, i) => (
                    <div key={i} className="card p-6">
                      <h3 className="font-bold mb-3" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, fontSize: "1.05rem" }}>
                        {faq.question}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4" style={{ borderTop: "1px solid var(--color-border)" }}>
                <p className="text-sm font-semibold text-white mb-3">Related articles and services</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/areas/salford" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    Car Detailing in Salford <ArrowRight size={13} />
                  </Link>
                  <Link href="/car-detailing-manchester" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    Car Detailing Manchester <ArrowRight size={13} />
                  </Link>
                  <Link href="/blog/hand-car-wash-vs-mobile-valeting" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    Hand Wash vs Mobile Valeting <ArrowRight size={13} />
                  </Link>
                  <Link href="/pricing" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    View All Prices <ArrowRight size={13} />
                  </Link>
                  <a href="https://en.wikipedia.org/wiki/Salford" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    About Salford — Wikipedia <ArrowRight size={13} />
                  </a>
                  <a href="https://www.visitmanchester.com/things-to-see-and-do/explore/salford/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    Explore Salford — Visit Manchester <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>

      <CTASection
        eyebrow="Car Detailing — Salford"
        title="Book Mobile Detailing in Salford Today"
        description="Full valet from £80, full detail from £180. We come to Salford Quays, Pendleton, Swinton and all M5, M6, M7 and M27 postcodes — own water and power included."
        primaryCTA="Book Salford Detailing"
      />
    </>
  );
}
