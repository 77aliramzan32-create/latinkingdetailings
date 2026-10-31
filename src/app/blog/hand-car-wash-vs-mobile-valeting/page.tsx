import type { Metadata } from "next";
import Link from "next/link";
import { Clock, CheckCircle, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { buildBreadcrumbSchema, buildFAQSchema, buildArticleSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Hand Car Wash vs Mobile Valeting: Which Is Safer?",
  description:
    "Hand car wash vs mobile valeting in Manchester — cost, time, technique and swirl-mark risk compared honestly. Mobile full valet from £80 at your door.",
  alternates: { canonical: "/blog/hand-car-wash-vs-mobile-valeting" },
  openGraph: {
    title: "Hand Car Wash vs Mobile Valeting: Which Is Safer for Your Paint?",
    description:
      "A forecourt hand wash is cheap and fast. A mobile valet costs more and takes longer. Here is what the difference actually does to your paint.",
    type: "article",
    publishedTime: "2026-10-31",
    modifiedTime: "2026-10-31",
    authors: [BUSINESS.url],
    tags: ["hand car wash", "mobile valeting manchester", "car wash near me", "swirl marks"],
  },
};

const FAQS = [
  {
    question: "Is a hand car wash safe for my car's paint?",
    answer:
      "It depends entirely on technique. A hand wash using the two-bucket method, a foam pre-wash, fresh water and clean microfibre towels is safe. A forecourt hand wash using one bucket, recycled water and shared cloths is not — grit trapped in the cloths drags across the paint and causes swirl marks. The risk is in the process, not in the fact that hands are doing the washing.",
  },
  {
    question: "How much does a mobile valet cost in Manchester?",
    answer:
      "A mobile full valet in Manchester starts from £80 at Latin King Detailing. It takes 2.5–3.5 hours and includes a foam-cannon pre-wash, safe two-bucket hand wash, wheel and tyre clean, interior vacuum and wipe-down, hand polish, seat shampoo or leather conditioning, and door shut and boot deep clean. We come to your home or workplace with our own water and power.",
  },
  {
    question: "Do mobile valeters need my water or electricity?",
    answer:
      "No. Latin King Detailing arrives fully self-sufficient with our own water supply and power. The only thing we need is a safe outdoor space to work around the vehicle — a driveway, street parking or a workplace car park all work.",
  },
  {
    question: "How long does a mobile valet take?",
    answer:
      "A full valet takes 2.5–3.5 hours depending on vehicle size. SUVs and MPVs take slightly longer than standard hatchbacks. A forecourt hand wash takes 15–30 minutes, but that speed is exactly why it causes swirl marks — there is no time for a proper pre-wash or safe technique.",
  },
  {
    question: "Are automated car washes bad for paint?",
    answer:
      "Yes. Automated brush car washes are the single biggest cause of swirl marks we see on cars in Manchester. The brushes and cloth strips hold grit from every car that went before yours and drag it across your paint. Touchless automated washes are safer for paint, but they rely on harsh chemicals and do not clean as thoroughly.",
  },
];

const COMPARISON = [
  { factor: "Cost", hand: "£5–£15", auto: "£5–£10", mobile: "From £80" },
  { factor: "Time", hand: "15–30 minutes", auto: "3–5 minutes", mobile: "2.5–3.5 hours" },
  { factor: "Pre-wash", hand: "Usually none", auto: "Chemical spray only", mobile: "Foam-cannon pre-wash" },
  { factor: "Wash method", hand: "One bucket, shared cloths", auto: "Brushes / cloth strips", mobile: "Two-bucket, fresh water, microfibre" },
  { factor: "Interior", hand: "Quick vacuum (sometimes)", auto: "Not included", mobile: "Full vacuum, wipe-down, shampoo" },
  { factor: "Swirl-mark risk", hand: "High", auto: "Very high", mobile: "Very low" },
  { factor: "Convenience", hand: "You drive there and wait", auto: "You drive there", mobile: "We come to you" },
];

export default function HandCarWashVsMobileValetingPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Blog", url: `${BUSINESS.url}/blog` },
    { name: "Hand Car Wash vs Mobile Valeting", url: `${BUSINESS.url}/blog/hand-car-wash-vs-mobile-valeting` },
  ]);
  const faqSchema = buildFAQSchema(FAQS);
  const articleSchema = buildArticleSchema({
    headline: "Hand Car Wash vs Mobile Valeting: Which Is Safer for Your Paint?",
    description:
      "A forecourt hand wash is cheap and fast. A mobile valet costs more and takes longer. Here is what the difference actually does to your paint.",
    datePublished: "2026-10-31",
    dateModified: "2026-10-31",
    url: `${BUSINESS.url}/blog/hand-car-wash-vs-mobile-valeting`,
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
                { label: "Hand Car Wash vs Mobile Valeting" },
              ]}
            />

            <div className="flex items-center gap-3 mb-6">
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: "var(--color-base-800)", color: "rgba(255,255,255,0.6)" }}
              >
                Comparison Guide
              </span>
              <span className="flex items-center gap-1.5 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                <Clock size={13} />
                6 min read
              </span>
            </div>

            <h1 className="mb-5">Hand Car Wash vs Mobile Valeting: Which Is Safer for Your Paint?</h1>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
              By Latin King Detailing · Mobile detailers based in Urmston, Manchester · Last updated 31 October 2026
            </p>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.68)", maxWidth: "58ch" }}>
              A forecourt hand wash costs a few pounds and takes twenty minutes. A mobile valet costs from £80 and takes half a day. The price gap looks absurd — until you understand what each one actually does to your paint.
            </p>
          </div>
        </section>

        <section className="section-pad" style={{ background: "var(--color-base-900)" }}>
          <div className="section-container max-w-3xl">
            <div className="space-y-8">

              <div className="card p-6" style={{ background: "var(--color-base-800)", borderLeft: "4px solid var(--color-accent-500)" }}>
                <p className="text-sm font-semibold text-white mb-2">Key takeaway</p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                  A hand car wash is only as safe as its technique. Forecourt hand washes and automated washes cause most of the swirl marks we remove with paint correction in Manchester — because they wash dirty cars with shared cloths, recycled water or brushes. A proper mobile valet uses a foam pre-wash, the two-bucket method and clean microfibre, which is why it costs more and takes longer.
                </p>
              </div>

              <div>
                <h2 className="mb-4">The honest comparison</h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Here is the full comparison, based on what we actually see on cars that come to us for correction work across Greater Manchester:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
                    <thead>
                      <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                        <th className="text-left py-3 pr-3 text-white">Factor</th>
                        <th className="text-left py-3 pr-3 text-white">Hand car wash</th>
                        <th className="text-left py-3 pr-3 text-white">Automated wash</th>
                        <th className="text-left py-3 text-white">Mobile valet</th>
                      </tr>
                    </thead>
                    <tbody>
                      {COMPARISON.map((row) => (
                        <tr key={row.factor} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                          <td className="py-3 pr-3 font-semibold text-white">{row.factor}</td>
                          <td className="py-3 pr-3" style={{ color: "rgba(255,255,255,0.65)" }}>{row.hand}</td>
                          <td className="py-3 pr-3" style={{ color: "rgba(255,255,255,0.65)" }}>{row.auto}</td>
                          <td className="py-3" style={{ color: "rgba(255,255,255,0.65)" }}>{row.mobile}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="mb-4">Why forecourt hand washes cause swirl marks</h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Swirl marks are thousands of microscopic scratches in the clear coat. They form when grit is dragged across the paint — and a busy forecourt hand wash is designed to do exactly that, quickly. One bucket of water for dozens of cars, the same sponge or cloth on every vehicle, no foam pre-wash to loosen dirt first. The car looks clean when it leaves, because the dirt is gone — but under sunlight the spider-web of fine scratches is there, and it gets worse every visit.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  We see this weekly on driveways in Urmston, Partington and Didsbury: cars that have only ever been &ldquo;hand washed&rdquo; at a forecourt, with paint so swirled it needs a full paint correction (from £300) to fix. The £10 wash ends up costing £300 to undo.
                </p>
              </div>

              <div>
                <h2 className="mb-4">What a mobile valet does differently</h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  A proper mobile valet is a completely different process, not just a slower version of the same wash:
                </p>
                <ul className="space-y-2">
                  {[
                    "Foam-cannon pre-wash — dirt is loosened and rinsed off before anything touches the paint.",
                    "Two-bucket wash method — one bucket for clean shampoo solution, one for rinsing the mitt, so grit never goes back onto the car.",
                    "Fresh water and clean microfibre towels — never recycled water or shared cloths.",
                    "pH-neutral shampoo — strong enough to clean, gentle enough not to strip protection.",
                    "Full interior clean — vacuum, wipe-down, seat shampoo or leather conditioning, door shuts and boot.",
                    "Hand polish finish — the step a hand wash simply does not do.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                      <CheckCircle size={14} className="mt-0.5 flex-shrink-0" style={{ color: "var(--color-accent-500)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-base leading-relaxed mt-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  A full valet from Latin King Detailing takes 2.5–3.5 hours and starts from £80. We arrive with our own water and power at your home or workplace anywhere in Greater Manchester — you never drive anywhere or wait in a queue.
                </p>
              </div>

              <div>
                <h2 className="mb-4">So which should you choose?</h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Be honest about what you are protecting. If the car is a workhorse runabout and you only care that it looks clean from a distance, a cheap hand wash does the job — just know the paint is paying for it. If you care about the paint, plan to keep the car, or are thinking about resale value, the mobile valet is the cheaper option in the long run: one paint correction costs more than a year of proper valets.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  And if the swirls are already there, no wash fixes them. That needs <Link href="/services/paint-correction" className="underline" style={{ color: "var(--color-accent-500)" }}>paint correction</Link> — then a proper wash routine (or a ceramic coating) keeps them away. Our guide to <Link href="/blog/swirl-mark-removal-manchester" className="underline" style={{ color: "var(--color-accent-500)" }}>swirl mark removal in Manchester</Link> explains the process.
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
                  <Link href="/services/mobile-valeting" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    Mobile Valeting Service <ArrowRight size={13} />
                  </Link>
                  <Link href="/blog/swirl-mark-removal-manchester" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    Swirl Mark Removal Manchester <ArrowRight size={13} />
                  </Link>
                  <Link href="/blog/mobile-detailing-vs-car-wash" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    Mobile Detailing vs Car Wash <ArrowRight size={13} />
                  </Link>
                  <Link href="/pricing" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    View All Prices <ArrowRight size={13} />
                  </Link>
                  <a href="https://en.wikipedia.org/wiki/Car_wash" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    Car wash types explained — Wikipedia <ArrowRight size={13} />
                  </a>
                  <a href="https://www.parkers.co.uk/car-advice/car-care/double-bucket-car-cleaning/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    The two-bucket wash method — Parkers <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>

      <CTASection
        eyebrow="Mobile Valeting — Greater Manchester"
        title="A Proper Valet, At Your Door"
        description="Full valet from £80, 2.5–3.5 hours, foam pre-wash and two-bucket method as standard. Fixed quote before we start — no swirl marks included."
        primaryCTA="Book My Valet"
      />
    </>
  );
}
