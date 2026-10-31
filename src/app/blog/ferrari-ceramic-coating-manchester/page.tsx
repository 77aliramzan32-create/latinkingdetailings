import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { buildBreadcrumbSchema, buildFAQSchema, buildArticleSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Ferrari Ceramic Coating Manchester | PPF & Detailing",
  description:
    "Ferrari ceramic coating in Manchester — we've detailed a Ferrari 12Cilindri in Urmston. Coating, PPF advice, paint correction & detailing for Ferrari. From £180.",
  alternates: { canonical: "/blog/ferrari-ceramic-coating-manchester" },
  openGraph: {
    title: "Ferrari Ceramic Coating in Manchester | PPF & Detailing",
    description:
      "Ceramic coating, PPF and paint correction for Ferrari in Manchester — from a detailer who has worked on a Ferrari 12Cilindri and a Purosangue.",
    type: "article",
    publishedTime: "2026-10-31",
    modifiedTime: "2026-10-31",
    authors: [BUSINESS.url],
    tags: ["ferrari ceramic coating", "ferrari ppf", "ferrari detailing", "ceramic coating ferrari", "ferrari paint protection film"],
  },
};

const FAQS = [
  {
    question: "How much does ceramic coating cost for a Ferrari?",
    answer:
      "Ceramic coating at Latin King Detailing starts from £180, and every Ferrari is quoted individually — the exact price depends on the model, the size of the car and the condition of the paint. Larger Ferraris and paint that needs more correction work cost more. Every package includes full paint decontamination and machine polishing before the coating is applied, and we confirm your fixed quote before any work begins.",
  },
  {
    question: "Is PPF worth it on a Ferrari?",
    answer:
      "For most Ferraris, yes. The film is the only protection that stops stone chips, and a respray on a Ferrari costs far more than the film — a full front end typically costs £1,200–£2,500 in the UK, a full car £3,500–£6,500+. If the car does motorway miles or track days, PPF on the front is the highest-value protection you can buy. Many Ferrari owners combine PPF on the front with ceramic coating over the whole car.",
  },
  {
    question: "Does ceramic coating protect a Ferrari against stone chips?",
    answer:
      "No. Ceramic coating adds gloss, water repellency and chemical resistance, and it reduces light swirl marks — but it is only a few microns thick and cannot absorb a stone impact. Only PPF protects against stone chips. If chips are your main concern, talk to us about PPF on the front end plus ceramic coating over the rest of the car.",
  },
  {
    question: "How long does ceramic coating or PPF take on a Ferrari?",
    answer:
      "Ceramic coating takes 1–2 days including full decontamination and machine polishing. Paint correction, if the paint needs it, takes 6–12 hours. PPF is fitted in a specialist studio over 2–6 days depending on coverage. We confirm timings when you book.",
  },
  {
    question: "Do you detail Ferraris at my home in Manchester?",
    answer:
      "Yes — fully mobile. We bring our own water and power to your home, workplace or any suitable outdoor location across Manchester, Urmston, Trafford, Salford and Greater Manchester. We have detailed a Ferrari 12Cilindri in Urmston and corrected paint on a Ferrari Purosangue — the same care and preparation applies to every Ferrari we work on.",
  },
];

export default function FerrariCeramicCoatingPost() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Blog", url: `${BUSINESS.url}/blog` },
    { name: "Ferrari Ceramic Coating Manchester", url: `${BUSINESS.url}/blog/ferrari-ceramic-coating-manchester` },
  ]);
  const faqSchema = buildFAQSchema(FAQS);
  const articleSchema = buildArticleSchema({
    headline: "Ferrari Ceramic Coating in Manchester | PPF & Detailing",
    description:
      "Ceramic coating, PPF and paint correction for Ferrari in Manchester — from a detailer who has worked on a Ferrari 12Cilindri and a Purosangue.",
    datePublished: "2026-10-31",
    dateModified: "2026-10-31",
    url: `${BUSINESS.url}/blog/ferrari-ceramic-coating-manchester`,
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
                { label: "Ferrari Ceramic Coating Manchester" },
              ]}
            />

            <div className="flex items-center gap-3 mb-6">
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: "var(--color-base-800)", color: "rgba(255,255,255,0.6)" }}
              >
                Prestige &amp; Supercar Guide
              </span>
              <span className="flex items-center gap-1.5 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                <Clock size={13} />
                6 min read
              </span>
            </div>

            <h1 className="mb-5">Ferrari Ceramic Coating in Manchester</h1>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
              By Latin King Detailing · Mobile detailers based in Urmston, Manchester · Last updated 31 October 2026
            </p>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.68)", maxWidth: "58ch" }}>
              A Ferrari is not just another car to protect — the paint is hand-finished, the gloss standard is higher, and a stone chip costs far more to fix. Here is what ceramic coating and PPF actually do for a Ferrari, what they cost, and what we recommend from our own work on Ferraris in Manchester.
            </p>
          </div>
        </section>

        <section className="section-pad" style={{ background: "var(--color-base-900)" }}>
          <div className="section-container max-w-3xl">
            <div className="space-y-8">

              <div className="card p-6" style={{ background: "var(--color-base-800)", borderLeft: "4px solid var(--color-accent-500)" }}>
                <p className="text-sm font-semibold text-white mb-2">Key takeaway</p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Ferrari paint must be machine-polished before any protection — coating or film locks in whatever is underneath, swirl marks included. Ceramic coating adds gloss, water repellency and chemical resistance for 2–3 years, from £180 at Latin King Detailing. PPF is the only protection that stops stone chips — a full front end typically costs £1,200–£2,500 in the UK, a full car £3,500–£6,500+. Most Ferrari owners do both: PPF on the front, ceramic coating over the whole car. We have detailed a Ferrari 12Cilindri in Urmston and corrected paint on a Ferrari Purosangue.
                </p>
              </div>

              <section>
                <h2 className="text-3xl mb-4" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}>
                  Why Ferrari paint needs specialist care
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                  Ferrari paintwork is hand-finished and finished to a very high gloss — which means every swirl mark, hologram and wash scratch shows. The clear coat is also relatively thin, so aggressive machine polishing is not an option: the paint has to be measured, assessed and corrected with the right pad and polish combination. That is why preparation matters more on a Ferrari than on almost any other car. Any coating or film applied over imperfect paint locks the defects in — and on a Ferrari, they are visible from across a car park.
                </p>
                <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                  The other factor is value. A stone chip on a Ferrari is not a £50 touch-up — it is a specialist respray, often on a multi-stage or triple-layer paint. Protection is not cosmetic on a Ferrari; it is preservation of the car&apos;s value.
                </p>
              </section>

              <section>
                <h2 className="text-3xl mb-4" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}>
                  Ceramic coating for a Ferrari
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                  A ceramic coating is a liquid SiO₂ polymer that bonds to the clear coat and lasts 2–3 years. On a Ferrari it does three things: it deepens the gloss noticeably, it makes the car dramatically easier to wash — water and dirt sheet off instead of bonding — and it protects against bird lime, tree sap, road salt and UV. The process is always the same: full decontamination, machine polishing to remove swirl marks, then the coating itself. Ceramic coating at Latin King Detailing starts from £180, and every Ferrari is quoted individually based on model, size and paint condition.
                </p>
                <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                  What ceramic coating does not do is stop stone chips. The layer is a few microns thick. If your Ferrari does motorway miles or track days, you need PPF for that — which brings us to the second option.
                </p>
              </section>

              <section>
                <h2 className="text-3xl mb-4" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}>
                  PPF for a Ferrari
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                  PPF — paint protection film — is a clear polyurethane film applied to the paintwork. It is the only product that stops stone chips, because it is a physical barrier. Modern films are self-healing, so light scratches disappear with heat, and they last up to 10 years. On a Ferrari the most common packages are a full front end (bonnet, bumper, wings, mirrors — typically £1,200–£2,500 in the UK) or a full car (£3,500–£6,500+). PPF is fitted in a specialist studio, not as a mobile service — Latin King Detailing does not fit film, but we do the paint correction and ceramic coating that every PPF job needs first, and we give honest advice on which coverage suits your car and your mileage.
                </p>
                <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                  The combination most Ferrari owners choose is PPF on the front, ceramic coating over the whole car — film where the damage happens, coating everywhere for gloss and easy washing.
                </p>
              </section>

              {/* Comparison table */}
              <div className="card overflow-hidden">
                <div
                  className="grid grid-cols-3 text-xs font-semibold uppercase tracking-wider p-4"
                  style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.5)" }}
                >
                  <span>Factor</span>
                  <span>PPF</span>
                  <span style={{ color: "var(--color-accent-400)" }}>Ceramic Coating</span>
                </div>
                {[
                  ["Stone-chip protection", "Yes — physical barrier", "No"],
                  ["Self-healing", "Yes — light scratches vanish with heat", "No"],
                  ["Durability", "Up to 10 years", "2–3 years"],
                  ["Gloss", "Good — near-invisible", "Excellent — deep, wet look"],
                  ["Ease of washing", "Good", "Excellent — water sheets off"],
                  ["Typical UK cost (Ferrari)", "£1,200–£2,500 front end; £3,500–£6,500+ full car", "From £180 (Latin King Detailing)"],
                  ["Best for", "Motorway miles, track days, long-term ownership", "Gloss, easy washing, daily protection"],
                ].map(([factor, ppf, ceramic]) => (
                  <div
                    key={factor}
                    className="grid grid-cols-3 p-4 text-sm border-t"
                    style={{ borderColor: "rgba(255,255,255,0.06)" }}
                  >
                    <span className="font-semibold text-white">{factor}</span>
                    <span style={{ color: "rgba(255,255,255,0.6)" }}>{ppf}</span>
                    <span className="font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>{ceramic}</span>
                  </div>
                ))}
              </div>

              <section>
                <h2 className="text-3xl mb-4" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}>
                  Paint correction first — always
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                  Before any coating or film, the paint must be corrected. Swirl marks, holograms and fine scratches are removed by machine polishing — permanently, not filled in with glaze. On a Ferrari this is done carefully, with paint depth measured first and the right pad and polish combination for the car. Paint correction at Latin King Detailing starts from £300. We have corrected paint on a Ferrari Purosangue, and the same process applies to every Ferrari we work on — 12Cilindri, 488, F8, Roma, Portofino or classic models.
                </p>
              </section>

              <section>
                <h2 className="text-3xl mb-4" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}>
                  Our Ferrari work in Manchester
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                  We have detailed a Ferrari 12Cilindri in Urmston — the photos are in our gallery — and corrected paint on a Ferrari Purosangue. Both cars were worked on at the owner&apos;s location by our mobile unit, with our own water and power. That is the advantage of a mobile detailer for a Ferrari owner: the car never has to be driven to a unit, queued behind other cars, or left overnight. We come to your home, workplace or garage across Manchester, Urmston, Trafford, Salford, Didsbury, Altrincham and the wider Greater Manchester area.
                </p>
                <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                  A full Ferrari detail starts from £180 and covers decontamination, machine polish, protection and a full interior deep clean. Ceramic coating starts from £180, paint correction from £300 — every car is quoted individually, and the fixed quote is confirmed before any work begins.
                </p>
              </section>

              {/* FAQ */}
              <section>
                <h2 className="text-3xl mb-6" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}>
                  Frequently asked questions
                </h2>
                <div className="space-y-4">
                  {FAQS.map((faq, i) => (
                    <div key={i} className="card p-6">
                      <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, fontSize: "1.05rem" }}>
                        {faq.question}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* Author / about */}
        <div className="section-container max-w-3xl">
          <div
            className="mt-12 p-6 rounded-xl flex items-center gap-4"
            style={{ background: "var(--color-base-900)", border: "1px solid var(--color-border)" }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center font-black text-lg flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #c41e3a, #7c0015)", color: "white" }}
            >
              LK
            </div>
            <div>
              <p className="font-bold text-white">{BUSINESS.name}</p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                Mobile car detailing &amp; ceramic coating specialists. Based in {BUSINESS.address.city}, {BUSINESS.address.postcode}.
              </p>
            </div>
          </div>

          {/* Related posts */}
          <div className="mt-12 mb-12">
            <h2 className="text-xl mb-5" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}>
              Related articles
            </h2>
            <div className="flex flex-col gap-3">
              <Link href="/blog/ceramic-coating-vs-ppf" className="flex items-center gap-3 group p-4 rounded-lg transition-colors" style={{ background: "var(--color-base-900)", border: "1px solid var(--color-border)" }}>
                <span className="flex-1 text-sm font-medium group-hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Ceramic coating vs PPF — which protection is right for your car?
                </span>
                <ArrowRight size={14} className="flex-shrink-0 transition-transform group-hover:translate-x-1" style={{ color: "rgba(255,255,255,0.3)" }} />
              </Link>
              <Link href="/blog/ceramic-coating-manchester-cost-benefits" className="flex items-center gap-3 group p-4 rounded-lg transition-colors" style={{ background: "var(--color-base-900)", border: "1px solid var(--color-border)" }}>
                <span className="flex-1 text-sm font-medium group-hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Ceramic coating Manchester: cost, benefits &amp; how long it lasts
                </span>
                <ArrowRight size={14} className="flex-shrink-0 transition-transform group-hover:translate-x-1" style={{ color: "rgba(255,255,255,0.3)" }} />
              </Link>
              <Link href="/gallery" className="flex items-center gap-3 group p-4 rounded-lg transition-colors" style={{ background: "var(--color-base-900)", border: "1px solid var(--color-border)" }}>
                <span className="flex-1 text-sm font-medium group-hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.7)" }}>
                  See our work — including the Ferrari 12Cilindri in Urmston
                </span>
                <ArrowRight size={14} className="flex-shrink-0 transition-transform group-hover:translate-x-1" style={{ color: "rgba(255,255,255,0.3)" }} />
              </Link>
              <a href="https://en.wikipedia.org/wiki/Ferrari_12Cilindri" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group p-4 rounded-lg transition-colors" style={{ background: "var(--color-base-900)", border: "1px solid var(--color-border)" }}>
                <span className="flex-1 text-sm font-medium group-hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Ferrari 12Cilindri — Wikipedia (external reference)
                </span>
                <ArrowRight size={14} className="flex-shrink-0 transition-transform group-hover:translate-x-1" style={{ color: "rgba(255,255,255,0.3)" }} />
              </a>
            </div>
          </div>
        </div>
      </article>

      <CTASection
        eyebrow="Ferrari detailing in Manchester"
        title="Book Ferrari detailing in Manchester"
        description="Ceramic coating, paint correction and full detailing for Ferrari — at your door, with a fixed quote confirmed before we start."
        primaryCTA="Book Ferrari Detailing"
      />
    </>
  );
}
