import type { Metadata } from "next";
import Link from "next/link";
import { Clock, CheckCircle, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { buildBreadcrumbSchema, buildFAQSchema, buildArticleSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Swirl Mark Removal Manchester | Paint Correction Guide",
  description:
    "Swirl marks ruin otherwise good paint. How paint correction permanently removes them in Manchester, what it costs (from £300), and how to stop them coming back.",
  alternates: { canonical: "/blog/swirl-mark-removal-manchester" },
  openGraph: {
    title: "Swirl Mark Removal Manchester: What Paint Correction Really Does",
    description:
      "Why your paint has swirl marks, how machine paint correction removes them permanently, and what it costs in Manchester.",
    type: "article",
    publishedTime: "2026-10-31",
    modifiedTime: "2026-10-31",
    authors: [BUSINESS.url],
    tags: ["swirl mark removal manchester", "paint correction manchester", "scratch removal"],
  },
};

const FAQS = [
  {
    question: "Can swirl marks be removed permanently?",
    answer:
      "Yes. Swirl marks sit in the clear coat layer of your paint. Paint correction physically removes a microscopic layer of clear coat — typically 1–3 microns from a panel that is 50–100 microns thick — levelling the surface until the swirls are gone. Because the defects are removed, not filled in, they do not come back. New swirls can still form later if the car is washed incorrectly, which is why correct wash technique and a ceramic coating matter after correction.",
  },
  {
    question: "How much does paint correction cost in Manchester?",
    answer:
      "Paint correction in Manchester starts from £300 at Latin King Detailing. The exact price depends on vehicle size and how badly swirled the paint is — a one-stage correction suits lightly swirled paint, while a two-stage correction is needed for heavily swirled or scratched paint. Machine polishing (a lighter enhancement) starts from £200. We measure paint depth with a gauge before every correction and confirm your fixed quote first.",
  },
  {
    question: "How long does paint correction take?",
    answer:
      "Paint correction takes 6–12 hours depending on vehicle size and paint condition. It is a full-day job: wash and decontamination, paint depth assessment, machine correction (one or two stages), panel-wipe inspection, then wax, sealant or ceramic coating to protect the freshly corrected paint.",
  },
  {
    question: "Will paint correction damage my paint?",
    answer:
      "When performed correctly by a trained professional, no. A one-stage correction removes only about 1–3 microns of clear coat from panels that are typically 50–100 microns thick. We measure paint depth before starting to confirm the clear coat is thick enough to work safely, and we select the correct machine, pad and compound combination for your specific paint type.",
  },
  {
    question: "What is the difference between paint correction and machine polishing?",
    answer:
      "Machine polishing is the broad term for using a powered polishing machine. Paint correction is a specific, multi-stage machine polishing process aimed at removing significant defects — swirl marks, scratches, water spots and oxidation. A standard machine polish (from £200) enhances gloss and removes mild defects; full correction (from £300) goes further with more aggressive compounds and more passes.",
  },
];

export default function SwirlMarkRemovalPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Blog", url: `${BUSINESS.url}/blog` },
    { name: "Swirl Mark Removal Manchester", url: `${BUSINESS.url}/blog/swirl-mark-removal-manchester` },
  ]);
  const faqSchema = buildFAQSchema(FAQS);
  const articleSchema = buildArticleSchema({
    headline: "Swirl Mark Removal Manchester: What Paint Correction Really Does",
    description:
      "Why your paint has swirl marks, how machine paint correction removes them permanently, and what it costs in Manchester.",
    datePublished: "2026-10-31",
    dateModified: "2026-10-31",
    url: `${BUSINESS.url}/blog/swirl-mark-removal-manchester`,
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
                { label: "Swirl Mark Removal Manchester" },
              ]}
            />

            <div className="flex items-center gap-3 mb-6">
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: "var(--color-base-800)", color: "rgba(255,255,255,0.6)" }}
              >
                Paint Correction Guide
              </span>
              <span className="flex items-center gap-1.5 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                <Clock size={13} />
                6 min read
              </span>
            </div>

            <h1 className="mb-5">Swirl Mark Removal Manchester: What Paint Correction Really Does</h1>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
              By Latin King Detailing · Mobile detailers based in Urmston, Manchester · Last updated 31 October 2026
            </p>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.68)", maxWidth: "58ch" }}>
              Look at your paint in direct sunlight and you will probably see them: thousands of fine circular scratches, like a spider&apos;s web across the bonnet and doors. Here is what they are, why they appear, and how to get rid of them for good.
            </p>
          </div>
        </section>

        <section className="section-pad" style={{ background: "var(--color-base-900)" }}>
          <div className="section-container max-w-3xl">
            <div className="space-y-8">

              <div className="card p-6" style={{ background: "var(--color-base-800)", borderLeft: "4px solid var(--color-accent-500)" }}>
                <p className="text-sm font-semibold text-white mb-2">Key takeaway</p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Swirl marks are microscopic scratches in the clear coat, caused mostly by automated car washes and incorrect hand washing. Paint correction removes them permanently by machine-polishing away 1–3 microns of clear coat — they are removed, not filled in, so they cannot come back. Correction in Manchester starts from £300; lighter machine polishing starts from £200.
                </p>
              </div>

              <div>
                <h2 className="mb-4">What are swirl marks, really?</h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Swirl marks are thousands of microscopic scratches in the clear coat — the transparent protective layer on top of your car&apos;s coloured paint. They are almost always circular because they follow the motion of washing and drying. On dark cars they are obvious in sunlight; on silver and white cars they hide until you look closely, but they are there, dulling the gloss.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  They are not &ldquo;just dirt&rdquo;. No amount of washing removes them, because they are damage to the surface itself. The only ways to deal with them are to hide them temporarily with a filler product — which washes off in a few weeks — or to remove them properly with paint correction.
                </p>
              </div>

              <div>
                <h2 className="mb-4">What causes swirl marks?</h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  In our experience working on driveways across Urmston, Stretford, Sale and Didsbury, the causes are almost always the same:
                </p>
                <ul className="space-y-2">
                  {[
                    "Automated car washes — the brushes and cloth strips drag grit across every panel.",
                    "Hand car washes using one bucket, recycled water and worn cloths.",
                    "Drying with a bath towel or chamois instead of a clean microfibre drying towel.",
                    "Washing a dirty car without a foam pre-wash — grit gets dragged across the paint by the wash mitt.",
                    "Waxing or polishing by hand with a dirty applicator pad.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                      <CheckCircle size={14} className="mt-0.5 flex-shrink-0" style={{ color: "var(--color-accent-500)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="mb-4">How paint correction removes swirl marks</h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Paint correction is machine polishing done properly. A dual-action or rotary machine, the correct compound and pad, and a trained hand level the clear coat by removing a controlled, microscopic amount — typically 1–3 microns from panels that are 50–100 microns thick. The swirls are physically removed, not filled in, so they cannot reappear.
                </p>
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Every correction we do follows the same process:
                </p>
                <ul className="space-y-2">
                  {[
                    "Paint depth gauge assessment — we measure the clear coat before touching it.",
                    "Full wash, iron fallout removal and clay bar decontamination.",
                    "One-stage correction for light swirls, or two-stage for heavily swirled paint.",
                    "Panel-wipe inspection under dual-beam lighting.",
                    "Wax, sealant or ceramic coating to protect the freshly corrected paint.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                      <CheckCircle size={14} className="mt-0.5 flex-shrink-0" style={{ color: "var(--color-accent-500)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="mb-4">Paint correction vs machine polishing</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { name: "Machine polishing", price: "From £200", time: "4–8 hours", best: "Mild swirls, dull paint, gloss enhancement, pre-coating prep" },
                    { name: "Paint correction", price: "From £300", time: "6–12 hours", best: "Heavy swirls, scratches, water spots, oxidation — permanent removal" },
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
                  Not sure which one your paint needs? That is what the paint depth gauge and inspection are for — we assess first and quote a fixed price before any work begins.
                </p>
              </div>

              <div>
                <h2 className="mb-4">How to stop swirl marks coming back</h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Correction is permanent, but new swirls form the moment the car is washed badly again. The three habits that matter most:
                </p>
                <ul className="space-y-2">
                  {[
                    "Foam-cannon pre-wash before any contact — loosen the dirt first.",
                    "Two-bucket wash method with a clean microfibre wash mitt.",
                    "Dry with a clean, plush microfibre drying towel — never a bath towel or chamois.",
                    "Avoid automated brush car washes entirely.",
                    "Add a ceramic coating after correction — the hard, slick surface resists light swirls far better than bare clear coat.",
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
                  <Link href="/services/paint-correction" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    Paint Correction Service <ArrowRight size={13} />
                  </Link>
                  <Link href="/services/machine-polishing" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    Machine Polishing <ArrowRight size={13} />
                  </Link>
                  <Link href="/blog/paint-correction-vs-machine-polishing" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    Correction vs Machine Polishing <ArrowRight size={13} />
                  </Link>
                  <Link href="/blog/ceramic-coating-manchester-cost-benefits" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    Ceramic Coating Manchester <ArrowRight size={13} />
                  </Link>
                  <a href="https://en.wikipedia.org/wiki/Car_detailing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    Car detailing explained — Wikipedia <ArrowRight size={13} />
                  </a>
                  <a href="https://gtechniq.com/5-common-diy-paint-correction-mistakes/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    5 paint correction mistakes to avoid — Gtechniq <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>

      <CTASection
        eyebrow="Paint Correction — Greater Manchester"
        title="See Your Paint Properly Again"
        description="Swirl mark removal from £300, machine polishing from £200. Paint depth checked first, fixed quote confirmed before we start — fully mobile at your door."
        primaryCTA="Get My Correction Quote"
      />
    </>
  );
}
