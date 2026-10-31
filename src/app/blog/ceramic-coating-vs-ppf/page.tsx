import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { buildBreadcrumbSchema, buildFAQSchema, buildArticleSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Ceramic Coating vs PPF: Which Protection Is Right?",
  description:
    "Ceramic coating vs PPF — the honest comparison from a Manchester detailer. What each one does, how long it lasts, what it costs, and which suits your car.",
  alternates: { canonical: "/blog/ceramic-coating-vs-ppf" },
  openGraph: {
    title: "Ceramic Coating vs PPF: Which Protection Is Right for Your Car?",
    description:
      "PPF stops stone chips. Ceramic coating adds gloss and makes washing easier. Here is the honest comparison — costs, lifespan and which suits your car.",
    type: "article",
    publishedTime: "2026-10-31",
    modifiedTime: "2026-10-31",
    authors: [BUSINESS.url],
    tags: ["ceramic coating vs ppf", "ppf vs ceramic coating", "paint protection film", "ceramic coating manchester"],
  },
};

const FAQS = [
  {
    question: "Which lasts longer, ceramic coating or PPF?",
    answer:
      "PPF lasts longer — typically up to 10 years, compared with 2–3 years for a professionally applied ceramic coating. That is because PPF is a physical polyurethane film bonded to the paint, while ceramic coating is a thin liquid SiO₂ layer. The trade-off is cost: full-car PPF typically costs £3,500–£6,500+ in the UK, while ceramic coating at Latin King Detailing starts from £180.",
  },
  {
    question: "Does ceramic coating stop stone chips?",
    answer:
      "No. Ceramic coating adds scratch resistance and makes the paint easier to clean, but it is only a few microns thick and cannot absorb the impact of a stone chip. Only PPF — a physical film — protects against stone chips. If stone chips are your main concern, PPF on the front end is the right choice.",
  },
  {
    question: "Can ceramic coating be applied over PPF?",
    answer:
      "Yes — and it is a popular combination. PPF is fitted first to protect against stone chips, then a ceramic coating is applied over the film (and the rest of the car) to add gloss, hydrophobics and easier washing. The coating also makes the film itself easier to keep clean.",
  },
  {
    question: "Is PPF worth it?",
    answer:
      "PPF is worth it if you drive a high-value car, do regular motorway miles, or plan to keep the car for many years — the film prevents stone chips that would otherwise need a respray. For a daily driver kept for a few years, ceramic coating from £180 gives most of the visible benefit at a fraction of the cost.",
  },
  {
    question: "How much does PPF cost in the UK?",
    answer:
      "Typical UK market prices: individual panels from around £250–£600, a full front end (bonnet, bumper, wings, mirrors) typically £1,200–£2,500, and full-car PPF typically £3,500–£6,500+. Prices depend on vehicle size, model complexity and film choice. These are market ranges — Latin King Detailing does not fit PPF; our ceramic coating starts from £180.",
  },
];

export default function CeramicCoatingVsPpfPost() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Blog", url: `${BUSINESS.url}/blog` },
    { name: "Ceramic Coating vs PPF", url: `${BUSINESS.url}/blog/ceramic-coating-vs-ppf` },
  ]);
  const faqSchema = buildFAQSchema(FAQS);
  const articleSchema = buildArticleSchema({
    headline: "Ceramic Coating vs PPF: Which Protection Is Right for Your Car?",
    description:
      "PPF stops stone chips. Ceramic coating adds gloss and makes washing easier. The honest comparison — costs, lifespan and which suits your car.",
    datePublished: "2026-10-31",
    dateModified: "2026-10-31",
    url: `${BUSINESS.url}/blog/ceramic-coating-vs-ppf`,
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
                { label: "Ceramic Coating vs PPF" },
              ]}
            />

            <div className="flex items-center gap-3 mb-6">
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: "var(--color-base-800)", color: "rgba(255,255,255,0.6)" }}
              >
                Comparison
              </span>
              <span className="flex items-center gap-1.5 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                <Clock size={13} />
                6 min read
              </span>
            </div>

            <h1 className="mb-5">Ceramic Coating vs PPF: Which Protection Is Right for Your Car?</h1>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
              By Latin King Detailing · Mobile detailers based in Urmston, Manchester · Last updated 31 October 2026
            </p>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.68)", maxWidth: "58ch" }}>
              Ceramic coating and PPF are the two serious paint protection options — but they protect your car in completely different ways. One is a liquid layer that makes washing easier. The other is a physical film that stops stone chips. Here is the honest comparison, with real UK prices.
            </p>
          </div>
        </section>

        <section className="section-pad" style={{ background: "var(--color-base-900)" }}>
          <div className="section-container max-w-3xl">
            <div className="space-y-8">

              <div className="card p-6" style={{ background: "var(--color-base-800)", borderLeft: "4px solid var(--color-accent-500)" }}>
                <p className="text-sm font-semibold text-white mb-2">Key takeaway</p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                  PPF is a physical polyurethane film that stops stone chips and lasts up to 10 years — a full front end typically costs £1,200–£2,500 in the UK, a full car £3,500–£6,500+. Ceramic coating is a liquid SiO₂ layer that adds gloss, water repellency and chemical resistance for 2–3 years — from £180 at Latin King Detailing. PPF protects against impact; ceramic coating protects against everything else. Many owners combine them: PPF on the front, ceramic coating over the whole car.
                </p>
              </div>

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
                  ["What it is", "Clear polyurethane film", "Liquid SiO₂ polymer layer"],
                  ["Stone-chip protection", "Yes — physical barrier", "No — too thin to absorb impact"],
                  ["Scratch resistance", "High — self-healing film", "Moderate — harder than clear coat"],
                  ["Durability", "Up to 10 years", "2–3 years"],
                  ["Gloss", "Good — near-invisible", "Excellent — deep, wet look"],
                  ["Hydrophobics", "Good", "Excellent — water sheets off"],
                  ["Maintenance", "Wash normally", "Wash normally, easier to clean"],
                  ["Typical UK cost", "£1,200–£2,500 front end; £3,500–£6,500+ full car", "From £180 (Latin King Detailing)"],
                  ["Application time", "2–6 days", "1–2 days"],
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
                  What is ceramic coating?
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                  A ceramic coating is a liquid SiO₂ (silicon dioxide) polymer applied to clean, decontaminated paintwork. It cures and bonds to the clear coat, forming a thin, hard, hydrophobic layer. Water beads and sheets off, dirt bonds less strongly, and the paint gains UV and chemical resistance — plus a deep gloss that a wax cannot match. A professionally applied coating lasts 2–3 years with correct maintenance. At Latin King Detailing, ceramic coating starts from £180, and full paint decontamination and machine polishing are always included first — a coating is only as good as the paint underneath it.
                </p>
                <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                  What ceramic coating cannot do is stop stone chips. The layer is only a few microns thick. It adds scratch resistance against light wash swirls, but a stone hitting the bonnet at motorway speed goes straight through it. That is the one job only PPF can do.
                </p>
              </section>

              <section>
                <h2 className="text-3xl mb-4" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}>
                  What is PPF (paint protection film)?
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                  PPF is a clear, thick polyurethane film applied to the paintwork — most commonly the front bumper, bonnet, wings and mirrors, or the whole car. It is a physical barrier: stones, grit and road debris hit the film instead of your paint. Modern films are self-healing, so light scratches disappear with heat, and they last up to 10 years. PPF is fitted in a studio by a specialist installer — it is not a mobile service, and it is not something Latin King Detailing fits. Typical UK market prices are £1,200–£2,500 for a full front end and £3,500–£6,500+ for a full car, depending on vehicle size and complexity.
                </p>
                <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                  PPF has one weakness: it does not make the car easier to wash, and it does not add the deep gloss of a ceramic coating. That is why the two are so often combined — PPF where the damage happens, ceramic coating over everything.
                </p>
              </section>

              <section>
                <h2 className="text-3xl mb-4" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}>
                  Which cars suit ceramic coating, and which suit PPF?
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                  <strong>Everyday hatchbacks and saloons:</strong> ceramic coating. It keeps the car cleaner between washes, protects against Manchester rain and winter road salt, and costs from £180 — sensible protection for a car you will keep a few years.
                </p>
                <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                  <strong>Family SUVs and estates:</strong> ceramic coating, with PPF on the front end if you do regular motorway miles. SUVs take the most stone chips because of their upright front ends, so a front-end film is the highest-value PPF package.
                </p>
                <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                  <strong>Prestige cars and supercars:</strong> PPF on the front (or the full car) plus ceramic coating over the top. This is the standard protection package for cars like Ferrari, Lamborghini and Porsche — the film stops chips, the coating adds gloss and makes the whole car easier to keep clean. We have detailed a Ferrari 12Cilindri in Urmston and corrected paint on a Ferrari Purosangue — the same preparation and coating process applies, with a fixed quote confirmed per car.
                </p>
                <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                  <strong>Motorway commuters:</strong> PPF on the front end. If most of your miles are at motorway speed, stone chips are a matter of when, not if — and a respray costs far more than the film.
                </p>
              </section>

              <section>
                <h2 className="text-3xl mb-4" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}>
                  Can you combine ceramic coating and PPF?
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                  Yes — and for many owners it is the best answer. The order matters: PPF is fitted first, then ceramic coating is applied over the film and the rest of the car. The coating adds hydrophobics and gloss to the film itself, so the whole car washes easily and looks uniform. Whatever you choose, the preparation is the same: paint must be decontaminated and machine-polished first, because both products lock in whatever is underneath them — swirl marks included. That preparation is exactly what we do at Latin King Detailing: paint correction from £300, ceramic coating from £180, at your door across Manchester, Urmston, Trafford, Salford and the wider Greater Manchester area.
                </p>
              </section>

              <section>
                <h2 className="text-3xl mb-4" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}>
                  Which should you choose?
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                  <strong>Choose ceramic coating if:</strong> you want gloss, easier washing and chemical protection at a sensible price — and stone chips are not your main worry. From £180, it is the best-value protection for most cars in Manchester.
                </p>
                <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                  <strong>Choose PPF if:</strong> you drive a high-value car, do regular motorway miles, or plan to keep the car for many years. The film is the only product that stops stone chips — and a respray costs more than the film.
                </p>
                <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                  <strong>Choose both if:</strong> you want the complete package — PPF where the damage happens, ceramic coating everywhere for gloss and easy washing. Talk to us and we will give you an honest answer for your car, your mileage and your budget.
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
              <Link href="/blog/ceramic-coating-manchester-cost-benefits" className="flex items-center gap-3 group p-4 rounded-lg transition-colors" style={{ background: "var(--color-base-900)", border: "1px solid var(--color-border)" }}>
                <span className="flex-1 text-sm font-medium group-hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Ceramic coating Manchester: cost, benefits &amp; how long it lasts
                </span>
                <ArrowRight size={14} className="flex-shrink-0 transition-transform group-hover:translate-x-1" style={{ color: "rgba(255,255,255,0.3)" }} />
              </Link>
              <Link href="/blog/ferrari-ceramic-coating-manchester" className="flex items-center gap-3 group p-4 rounded-lg transition-colors" style={{ background: "var(--color-base-900)", border: "1px solid var(--color-border)" }}>
                <span className="flex-1 text-sm font-medium group-hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Ferrari ceramic coating in Manchester — coating, PPF &amp; detailing
                </span>
                <ArrowRight size={14} className="flex-shrink-0 transition-transform group-hover:translate-x-1" style={{ color: "rgba(255,255,255,0.3)" }} />
              </Link>
              <Link href="/blog/swirl-mark-removal-manchester" className="flex items-center gap-3 group p-4 rounded-lg transition-colors" style={{ background: "var(--color-base-900)", border: "1px solid var(--color-border)" }}>
                <span className="flex-1 text-sm font-medium group-hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Swirl mark removal in Manchester — what paint correction really does
                </span>
                <ArrowRight size={14} className="flex-shrink-0 transition-transform group-hover:translate-x-1" style={{ color: "rgba(255,255,255,0.3)" }} />
              </Link>
              <a href="https://en.wikipedia.org/wiki/Paint_protection_film" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group p-4 rounded-lg transition-colors" style={{ background: "var(--color-base-900)", border: "1px solid var(--color-border)" }}>
                <span className="flex-1 text-sm font-medium group-hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.7)" }}>
                  What is paint protection film? — Wikipedia (external reference)
                </span>
                <ArrowRight size={14} className="flex-shrink-0 transition-transform group-hover:translate-x-1" style={{ color: "rgba(255,255,255,0.3)" }} />
              </a>
            </div>
          </div>
        </div>
      </article>

      <CTASection
        eyebrow="Ceramic coating in Manchester"
        title="Book a ceramic coating in Manchester"
        description="Professional SiO₂ ceramic coating from £180, with full paint preparation always included. Fixed quote confirmed before we start."
        primaryCTA="Book Ceramic Coating"
      />
    </>
  );
}
