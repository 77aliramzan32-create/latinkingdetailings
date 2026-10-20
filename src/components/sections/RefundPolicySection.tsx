import { Shield } from "lucide-react";

// Latin King Detailing — Deposit & Refund Policy.
// Rendered site-wide from the root layout as the last section before the footer.
const CANCELLATION_TERMS = [
  {
    term: "More than 48 hours’ notice",
    detail: "Deposits are refundable if you cancel your booking with at least 48 hours’ notice.",
  },
  {
    term: "24–48 hours’ notice",
    detail: "Deposits may be retained to cover preparation and lost booking time.",
  },
  {
    term: "Less than 24 hours’ notice",
    detail: "Deposits are non-refundable.",
  },
  {
    term: "No-shows",
    detail:
      "If you fail to attend the agreed appointment or are unavailable when we arrive, your deposit may be retained.",
  },
];

const POLICY_BLOCKS = [
  {
    title: "Booking Deposits",
    body: "A £50 deposit is required for all bookings over £100 to secure your appointment. Your deposit will be deducted from the final price of the service.",
  },
  {
    title: "Rescheduling",
    body: "We understand that plans can change. If you need to reschedule, please contact us as early as possible. Deposits can normally be transferred to a new appointment, subject to availability and sufficient notice.",
  },
  {
    title: "Weather & Circumstances Beyond Our Control",
    body: "As we provide a mobile detailing service, severe weather or circumstances outside our control may require us to reschedule. In these cases, your deposit will be transferred to your new appointment.",
  },
  {
    title: "Our Commitment",
    body: "At Latin King Detailing, we value every customer and aim to be fair and transparent. Deposits help us protect appointment availability and cover the time allocated to your booking.",
  },
];

export function RefundPolicySection() {
  return (
    <section
      id="deposit-refund-policy"
      className="section-pad"
      style={{ background: "var(--color-base-900)", borderTop: "1px solid var(--color-border)" }}
      aria-labelledby="refund-policy-heading"
    >
      <div className="section-container">
        <div className="max-w-3xl mb-10">
          <p className="eyebrow">Latin King Detailing</p>
          <h2 id="refund-policy-heading" className="mb-4">
            Deposit &amp; <span className="gradient-text-red">Refund Policy</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Booking Deposits */}
          <div className="card p-6" style={{ background: "var(--color-base-950)" }}>
            <h3
              className="font-bold text-white mb-3"
              style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, fontSize: "1.05rem" }}
            >
              {POLICY_BLOCKS[0].title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
              {POLICY_BLOCKS[0].body}
            </p>
          </div>

          {/* Cancellations & Refunds */}
          <div className="card p-6" style={{ background: "var(--color-base-950)" }}>
            <h3
              className="font-bold text-white mb-3"
              style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, fontSize: "1.05rem" }}
            >
              Cancellations &amp; Refunds
            </h3>
            <ul className="space-y-3">
              {CANCELLATION_TERMS.map((item) => (
                <li key={item.term} className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
                  <strong className="text-white">{item.term}:</strong> {item.detail}
                </li>
              ))}
            </ul>
          </div>

          {/* Remaining blocks */}
          {POLICY_BLOCKS.slice(1).map((block) => (
            <div key={block.title} className="card p-6" style={{ background: "var(--color-base-950)" }}>
              <h3
                className="font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, fontSize: "1.05rem" }}
              >
                {block.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
                {block.body}
              </p>
            </div>
          ))}

          {/* Agreement note */}
          <div
            className="card p-6 flex flex-col justify-center"
            style={{ background: "var(--color-base-950)", border: "1px solid rgba(196,30,58,0.35)" }}
          >
            <Shield size={20} className="mb-3" style={{ color: "var(--color-accent-500)" }} />
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
              By confirming your booking, you acknowledge and agree to this policy, subject to your statutory
              consumer rights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
