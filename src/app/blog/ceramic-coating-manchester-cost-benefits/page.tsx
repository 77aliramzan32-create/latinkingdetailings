import type { Metadata } from "next";
import Link from "next/link";
import { Clock, CheckCircle, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { buildBreadcrumbSchema, buildFAQSchema, buildArticleSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Ceramic Coating Manchester | Cost, Benefits & Lifespan",
  description:
    "Ceramic coating in Manchester from £180. What it costs, how long it lasts (2–3 years), what it protects against, and whether it's worth it for your car.",
  alternates: { canonical: "/blog/ceramic-coating-manchester-cost-benefits" },
  openGraph: {
    title: "Ceramic Coating Manchester: Cost, Benefits & How Long It Lasts",
    description:
      "The honest guide to ceramic coating in Manchester — real costs, real lifespan, and what it actually protects your paint from.",
    type: "article",
    publishedTime: "2026-10-31",
    modifiedTime: "2026-10-31",
    authors: [BUSINESS.url],
    tags: ["ceramic coating manchester", "ceramic coating cost", "paint protection manchester"],
  },
};

const FAQS = [
  {
    question: "How much does ceramic coating cost in Manchester?",
    answer:
      "Professional ceramic coating in Manchester starts from £180 at Latin King Detailing. The exact price depends on vehicle size and paint condition — larger vehicles and paint that needs more correction work cost more. Every package includes full paint decontamination and machine polishing before the coating is applied, and we confirm your fixed quote before any work begins.",
  },
  {
    question: "How long does ceramic coating last?",
    answer:
      "A professionally applied ceramic coating lasts 2–3 years with correct maintenance — meaning touchless or two-bucket hand wash technique and avoiding automated brush car washes. The coating itself bonds permanently to the clear coat; what fades over time is its hydrophobic performance, which correct washing preserves.",
  },
  {
    question: "Is ceramic coating worth it?",
    answer:
      "For most drivers in Manchester, yes. The city's frequent rain and winter road salt make a hydrophobic coating especially valuable: water and grime sheet off the paint instead of bonding to it, so the car stays visibly cleaner with far less washing effort. Compared with wax, which lasts 2–4 months, a 2–3 year coating is cost-effective for anyone who keeps their car more than a year.",
  },
  {
    question: "Does ceramic coating prevent scratches?",
    answer:
      "Ceramic coating adds scratch resistance but does not make paint scratch-proof. It significantly reduces light swirl marks from washing and minor surface contact, but deep scratches and stone chips can still penetrate through. Swirl marks already in the paint must be removed by paint correction before coating — coating over swirls locks them in.",
  },
  {
    question: "Can ceramic coating be applied to any car?",
    answer:
      "Yes — any vehicle with intact clear coat paintwork in clean, decontaminated condition. The coating must be applied to paint that has been polished and decontaminated, which is why a full preparation stage is always included in our ceramic coating packages. We have coated everything from everyday hatchbacks to a Ferrari Purosangue.",
  },
];

export default function CeramicCoatingManchesterPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Blog", url: `${BUSINESS.url}/blog` },
    { name: "Ceramic Coating Manchester", url: `${BUSINESS.url}/blog/ceramic-coating-manchester-cost-benefits` },
  ]);
  const faqSchema = buildFAQSchema(FAQS);
  const articleSchema = buildArticleSchema({
    headline: "Ceramic Coating Manchester: Cost, Benefits & How Long It Lasts",
    description:
      "The honest guide to ceramic coating in Manchester — real costs, real lifespan, and what it actually protects your paint from.",
    datePublished: "2026-10-31",
    dateModified: "2026-10-31",
    url: `${BUSINESS.url}/blog/ceramic-coating-manchester-cost-benefits`,
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
                { label: "Ceramic Coating Manchester" },
              ]}
            />

            <div className="flex items-center gap-3 mb-6">
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: "var(--color-base-800)", color: "rgba(255,255,255,0.6)" }}
              >
                Ceramic Coating Guide
              </span>
              <span className="flex items-center gap-1.5 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                <Clock size={13} />
                6 min read
              </span>
            </div>

            <h1 className="mb-5">Ceramic Coating Manchester: Cost, Benefits &amp; How Long It Lasts</h1>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
              By Latin King Detailing · Mobile detailers based in Urmston, Manchester · Last updated 31 October 2026
            </p>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.68)", maxWidth: "58ch" }}>
              Manchester rain, winter road salt and motorway grime punish your paint every single week. Ceramic coating is the professional answer — here is what it actually costs, what it does, and whether it is worth it for your car.
            </p>
          </div>
        </section>

        <section className="section-pad" style={{ background: "var(--color-base-900)" }}>
          <div className="section-container max-w-3xl">
            <div className="space-y-8">

              <div className="card p-6" style={{ background: "var(--color-base-800)", borderLeft: "4px solid var(--color-accent-500)" }}>
                <p className="text-sm font-semibold text-white mb-2">Key takeaway</p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Ceramic coating in Manchester starts from £180 and lasts 2–3 years with correct maintenance. It is a liquid SiO₂ polymer that bonds to your clear coat, creating a hydrophobic, UV-resistant layer that keeps the car cleaner for longer and dramatically enhances gloss. It is worth it if you plan to keep the car for more than a year — and it must be applied to decontaminated, polished paint, never over swirl marks.
                </p>
              </div>

              <div>
                <h2 className="mb-4">What is ceramic coating?</h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  A ceramic coating is a liquid polymer — usually silicon dioxide (SiO₂) — applied to your car&apos;s paintwork. It bonds to the clear coat at a molecular level and cures into a hard, glass-like layer. Unlike wax, which sits on top of the paint and washes off in a few months, a ceramic coating becomes part of the surface.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  The result is a hydrophobic surface: water beads up and sheets off, taking road grime with it. Dirt bonds far less readily, UV damage is reduced, and the paint has a deeper, wetter-looking gloss. It does not make your car self-cleaning — but it makes every wash dramatically easier and less frequent.
                </p>
              </div>

              <div>
                <h2 className="mb-4">How much does ceramic coating cost in Manchester?</h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Professional ceramic coating in Manchester <strong className="text-white">starts from £180</strong> at Latin King Detailing. That is the starting price for a standard-sized car. The final fixed quote depends on two things:
                </p>
                <ul className="space-y-2">
                  {[
                    "Vehicle size — an SUV or large 4x4 has far more paint surface than a hatchback, so it takes more product and more time.",
                    "Paint condition — swirl marks and scratches must be corrected first. Coating over damaged paint locks the defects underneath it. Paint decontamination and machine polishing are always included in our packages.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                      <CheckCircle size={14} className="mt-0.5 flex-shrink-0" style={{ color: "var(--color-accent-500)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm leading-relaxed mt-4" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Be wary of anyone offering a &ldquo;ceramic coating&rdquo; for £50–£80. That is almost always a spray sealant, not a true coating — it lasts weeks, not years. A real coating requires hours of preparation alone.
                </p>
              </div>

              <div>
                <h2 className="mb-4">How long does ceramic coating last?</h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  A professionally applied coating lasts <strong className="text-white">2–3 years</strong> with correct maintenance. That means washing with a touchless or two-bucket hand wash method and avoiding automated brush car washes, which are the fastest way to degrade any coating.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  The coating itself does not simply vanish after three years — what fades is the water-beading performance. Many of our customers in Urmston, Sale and Didsbury have their coating topped up annually with a ceramic maintenance spray, which keeps the hydrophobic effect strong well beyond the initial period.
                </p>
              </div>

              <div>
                <h2 className="mb-4">Ceramic coating vs wax — the honest comparison</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { name: "Ceramic coating", price: "From £180", time: "2–3 years", best: "Long-term protection, easier washing, deep gloss" },
                    { name: "Wax / sealant", price: "Included in details", time: "2–4 months", best: "Short-term shine, needs regular reapplication" },
                  ].map((v) => (
                    <div key={v.name} className="card p-6" style={{ background: "var(--color-base-800)" }}>
                      <h3 className="font-bold text-white mb-3" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, fontSize: "1.2rem" }}>
                        {v.name}
                      </h3>
                      <div className="space-y-1.5 text-sm">
                        <p style={{ color: "rgba(255,255,255,0.65)" }}><span className="text-white font-semibold">Price:</span> {v.price}</p>
                        <p style={{ color: "rgba(255,255,255,0.65)" }}><span className="text-white font-semibold">Lasts:</span> {v.time}</p>
                        <p style={{ color: "rgba(255,255,255,0.65)" }}><span className="text-white font-semibold">Best for:</span> {v.best}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mt-4" style={{ color: "rgba(255,255,255,0.55)" }}>
                  We cover this in more depth in our <Link href="/blog/ceramic-coating-vs-wax" className="underline" style={{ color: "var(--color-accent-500)" }}>ceramic coating vs wax</Link> guide.
                </p>
              </div>

              <div>
                <h2 className="mb-4">Is ceramic coating worth it in Manchester?</h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  For most drivers here, yes — and the reason is the weather. Manchester&apos;s rain keeps cars dirty, and winter road salt accelerates contamination. A coated car sheets water off instead of holding it, so brake dust, salt and motorway film release with a rinse rather than a scrub. That means fewer washes, less swirl damage from washing, and paint that still looks new two years later.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  It is most worth it if you plan to keep the car for more than a year, you care about resale value, or you have just bought a new car — coating a new car first, before swirls appear, is the single smartest time to do it. It is less compelling if you are selling the car within a few months.
                </p>
              </div>

              <div>
                <h2 className="mb-4">What happens during a ceramic coating appointment?</h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  A proper coating is a 1–2 day process, and the preparation is most of the work:
                </p>
                <ul className="space-y-2">
                  {[
                    "Full wash and iron fallout decontamination",
                    "Clay bar treatment to remove bonded contamination",
                    "Machine polish / paint correction stage",
                    "IPA panel-wipe so the coating bonds to perfectly clean paint",
                    "Professional-grade SiO₂ ceramic coating application",
                    "Controlled cure time, then a post-cure inspection",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                      <CheckCircle size={14} className="mt-0.5 flex-shrink-0" style={{ color: "var(--color-accent-500)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-base leading-relaxed mt-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  We do all of this as a fully mobile service at your home or workplace across Greater Manchester — Urmston, Stretford, Sale, Didsbury, Salford and beyond. You do not need to provide water or power.
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
                  <Link href="/ceramic-coating-manchester" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    Ceramic Coating Manchester <ArrowRight size={13} />
                  </Link>
                  <Link href="/blog/ceramic-coating-vs-wax" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    Ceramic Coating vs Wax <ArrowRight size={13} />
                  </Link>
                  <Link href="/blog/how-to-maintain-ceramic-coating" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    Maintaining a Ceramic Coating <ArrowRight size={13} />
                  </Link>
                  <Link href="/pricing" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    View All Prices <ArrowRight size={13} />
                  </Link>
                  <a href="https://en.wikipedia.org/wiki/Clearcoat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    What is a clear coat? — Wikipedia <ArrowRight size={13} />
                  </a>
                  <a href="https://gtechniq.com/ceramiccoatings/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    Ceramic coatings — how SiO₂ bonding works — Gtechniq <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>

      <CTASection
        eyebrow="Ceramic Coating — Greater Manchester"
        title="Protect Your Paint for 2–3 Years"
        description="Professional SiO₂ ceramic coating from £180, applied mobile at your door. Full paint prep always included. Fixed quote before we start."
        primaryCTA="Get My Coating Quote"
      />
    </>
  );
}
