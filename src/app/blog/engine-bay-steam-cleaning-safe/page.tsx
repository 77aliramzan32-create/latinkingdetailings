import type { Metadata } from "next";
import Link from "next/link";
import { Clock, CheckCircle, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { buildBreadcrumbSchema, buildFAQSchema, buildArticleSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Engine Bay Cleaning Near Me | Is Steam Cleaning Safe?",
  description:
    "Engine bay steam cleaning in Manchester from £50. Is it safe for modern cars, what does it include, and why pressure washing an engine bay is a bad idea.",
  alternates: { canonical: "/blog/engine-bay-steam-cleaning-safe" },
  openGraph: {
    title: "Engine Bay Cleaning Near Me: Is Steam Cleaning Safe for Modern Cars?",
    description:
      "Your engine bay collects oil, brake dust and road grime for years. Here is how professional steam cleaning works — and why it is safer than a pressure washer.",
    type: "article",
    publishedTime: "2026-10-31",
    modifiedTime: "2026-10-31",
    authors: [BUSINESS.url],
    tags: ["engine bay cleaning", "engine steam cleaning", "engine bay cleaning near me", "manchester"],
  },
};

const FAQS = [
  {
    question: "Is steam cleaning an engine bay safe?",
    answer:
      "Yes, when performed correctly. Professional engine bay cleaning uses controlled steam and degreaser, with sensitive electronic components protected throughout. Modern engines are built to tolerate moisture — the risk comes from high-pressure water forced into connectors and modules, which is why we use steam rather than a pressure washer. Latin King Detailing has cleaned engine bays on everything from daily hatchbacks to prestige cars without issue.",
  },
  {
    question: "How much does engine bay cleaning cost?",
    answer:
      "Engine bay cleaning in Manchester starts from £50 at Latin King Detailing and takes 45–90 minutes. It is available as a standalone mobile service at your location, or as an add-on to a full valet or deep clean. We confirm your fixed quote before any work begins.",
  },
  {
    question: "Can you pressure wash an engine bay?",
    answer:
      "You should not. A pressure washer forces water into electrical connectors, sensors and modules at pressures they were never designed to resist, and it can strip protective coatings from hoses and plastic trim. Steam cleaning uses far less water at low pressure, with heat doing the cleaning work instead — that is why professionals use steam.",
  },
  {
    question: "How often should you clean your engine bay?",
    answer:
      "Once or twice a year is enough for most cars. Vehicles driven daily in Manchester's wet, salty winter conditions benefit from an annual clean. It is also worth doing before selling a car, after a long period without attention, or whenever you need to find an oil or coolant leak — a clean bay makes diagnosis far easier.",
  },
  {
    question: "Does engine bay cleaning help when selling a car?",
    answer:
      "Yes. A clean engine bay is one of the first things a buyer or dealer notices when the bonnet goes up. It signals that the car has been looked after, makes leaks visible (which builds trust rather than hiding problems), and costs very little compared with the impression it makes. We regularly clean engine bays as part of pre-sale preparation.",
  },
];

export default function EngineBaySteamCleaningPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Blog", url: `${BUSINESS.url}/blog` },
    { name: "Engine Bay Cleaning", url: `${BUSINESS.url}/blog/engine-bay-steam-cleaning-safe` },
  ]);
  const faqSchema = buildFAQSchema(FAQS);
  const articleSchema = buildArticleSchema({
    headline: "Engine Bay Cleaning Near Me: Is Steam Cleaning Safe for Modern Cars?",
    description:
      "Your engine bay collects oil, brake dust and road grime for years. Here is how professional steam cleaning works — and why it is safer than a pressure washer.",
    datePublished: "2026-10-31",
    dateModified: "2026-10-31",
    url: `${BUSINESS.url}/blog/engine-bay-steam-cleaning-safe`,
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
                { label: "Engine Bay Cleaning" },
              ]}
            />

            <div className="flex items-center gap-3 mb-6">
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: "var(--color-base-800)", color: "rgba(255,255,255,0.6)" }}
              >
                Engine Bay Guide
              </span>
              <span className="flex items-center gap-1.5 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                <Clock size={13} />
                5 min read
              </span>
            </div>

            <h1 className="mb-5">Engine Bay Cleaning Near Me: Is Steam Cleaning Safe for Modern Cars?</h1>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
              By Latin King Detailing · Mobile detailers based in Urmston, Manchester · Last updated 31 October 2026
            </p>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.68)", maxWidth: "58ch" }}>
              Open the bonnet of a car that has never had its engine bay cleaned and you will find years of oil film, brake dust and road grime baked onto every surface. Here is how professional cleaning works — and the one mistake that causes expensive damage.
            </p>
          </div>
        </section>

        <section className="section-pad" style={{ background: "var(--color-base-900)" }}>
          <div className="section-container max-w-3xl">
            <div className="space-y-8">

              <div className="card p-6" style={{ background: "var(--color-base-800)", borderLeft: "4px solid var(--color-accent-500)" }}>
                <p className="text-sm font-semibold text-white mb-2">Key takeaway</p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Steam cleaning an engine bay is safe for modern cars when done professionally: low-pressure steam and degreaser lift grime while sensitive electronics are protected. Never pressure wash an engine bay — high-pressure water forced into connectors and sensors is what causes expensive electrical faults. Professional engine bay cleaning in Manchester starts from £50 and takes 45–90 minutes.
                </p>
              </div>

              <div>
                <h2 className="mb-4">What is engine bay cleaning?</h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Engine bay cleaning is the degreasing and steam cleaning of everything under the bonnet: the engine cover, hoses, reservoirs, battery area, inner wings and bulkhead. Over time these surfaces collect oil residue, brake dust, road salt and general grime. Left alone, the buildup traps heat, degrades rubber hoses and plastic components, and hides leaks until they become expensive problems.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  A clean bay is not just cosmetic. Mechanics diagnose faults far more easily on a clean engine, buyers trust a car whose engine bay has clearly been cared for, and rubber and plastic parts last longer when they are not sitting under years of oil and heat-cycled grime.
                </p>
              </div>

              <div>
                <h2 className="mb-4">Is steam cleaning safe for modern cars?</h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Yes — when it is done with the correct technique. The key difference is pressure. A pressure washer drives water at 100+ bar into places it should never go: electrical connectors, sensors, ignition components and air intakes. Steam cleaning uses very little water at low pressure; the heat does the cleaning, dissolving grease so it can be wiped away rather than blasted off.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Professional technique also matters: sensitive electronics are covered before any steam is applied, direct steam is kept away from connectors and modules, and the bay is dried and dressed afterwards. Modern engines are built to tolerate moisture — rain and road spray reach the bay every time you drive in Manchester weather. The risk is incorrect pressure and technique, not water itself.
                </p>
              </div>

              <div>
                <h2 className="mb-4">What does engine bay cleaning include?</h2>
                <ul className="space-y-2">
                  {[
                    "Degreaser application across the entire bay, left to break down oil and grime",
                    "Careful steam clean or low-pressure rinse — never a pressure washer",
                    "Electronic component protection throughout the process",
                    "Plastic trim and rubber dressing to restore a factory-fresh look",
                    "Battery area and reservoir cleaning",
                    "Final wipe-down and inspection",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                      <CheckCircle size={14} className="mt-0.5 flex-shrink-0" style={{ color: "var(--color-accent-500)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-base leading-relaxed mt-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Engine bay cleaning takes 45–90 minutes and starts from £50. It is available as a standalone mobile service at your home or workplace across Greater Manchester, or as an add-on to a <Link href="/services/mobile-valeting" className="underline" style={{ color: "var(--color-accent-500)" }}>full valet</Link> or <Link href="/services/deep-cleaning" className="underline" style={{ color: "var(--color-accent-500)" }}>deep clean</Link>.
                </p>
              </div>

              <div>
                <h2 className="mb-4">When should you clean your engine bay?</h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Once or twice a year is enough for most cars. The best times are:
                </p>
                <ul className="space-y-2">
                  {[
                    "Before selling the car — a clean bay is the first thing a buyer sees under the bonnet.",
                    "When you suspect a leak — oil and coolant leaks are invisible under grime, obvious on a clean engine.",
                    "After winter — road salt and grit accumulate fastest in the cold months.",
                    "After a long period without attention — a car returning from storage or a long lay-up.",
                    "As part of a deep clean — the bay is the one area a normal valet never reaches.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                      <CheckCircle size={14} className="mt-0.5 flex-shrink-0" style={{ color: "var(--color-accent-500)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
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
                  <Link href="/services/engine-bay-cleaning" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    Engine Bay Cleaning Service <ArrowRight size={13} />
                  </Link>
                  <Link href="/services/deep-cleaning" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    Deep Cleaning <ArrowRight size={13} />
                  </Link>
                  <Link href="/blog/swirl-mark-removal-manchester" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    Swirl Mark Removal Manchester <ArrowRight size={13} />
                  </Link>
                  <Link href="/pricing" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    View All Prices <ArrowRight size={13} />
                  </Link>
                  <a href="https://en.wikipedia.org/wiki/Car_detailing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    Car detailing explained — Wikipedia <ArrowRight size={13} />
                  </a>
                  <a href="https://engineerfix.com/how-to-steam-clean-an-engine-safely-and-effectively/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    How to steam clean an engine safely — Engineer Fix <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>

      <CTASection
        eyebrow="Engine Bay Cleaning — Greater Manchester"
        title="A Clean Engine Bay, Without the Risk"
        description="Steam cleaning from £50, 45–90 minutes, fully mobile at your door. Electronics protected throughout — no pressure washer, ever."
        primaryCTA="Book Engine Bay Clean"
      />
    </>
  );
}
