import { Star, MapPin, CheckCircle, Award } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";

// Server component: scroll reveals are the tiny Reveal wrapper and the
// count-up numbers are the AnimatedNumber client island — no framer-motion,
// so this section needs no hydration of its own.
interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}

const STATS: Stat[] = [
  {
    value: BUSINESS.rating.ratingValue,
    suffix: "★",
    label: "Average rating across Google & Facebook",
    icon: <Star size={20} fill="currentColor" style={{ color: "var(--color-gold)" }} />,
  },
  {
    value: BUSINESS.rating.ratingCount,
    suffix: "+",
    label: "Verified 5-star customer reviews",
    icon: <Award size={20} style={{ color: "var(--color-accent-500)" }} />,
  },
  {
    value: BUSINESS.areas.length,
    suffix: "+",
    label: "Locations served across Greater Manchester",
    icon: <MapPin size={20} style={{ color: "var(--color-accent-500)" }} />,
  },
  {
    value: 100,
    suffix: "%",
    label: "Mobile — no travel required, we come to you",
    icon: <CheckCircle size={20} style={{ color: "var(--color-accent-500)" }} />,
  },
];

export function StatsSection() {
  return (
    <section
      className="relative border-y"
      style={{ borderColor: "var(--color-border)", background: "var(--color-base-900)" }}
      aria-label="Latin King Detailing — key stats"
    >
      <div className="section-container py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {STATS.map((stat, i) => (
            <Reveal
              key={i}
              y={20}
              delay={i * 0.1}
              margin="-60px"
              className="flex flex-col items-center lg:items-start gap-3 text-center lg:text-left"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                aria-hidden="true"
              >
                {stat.icon}
              </div>
              <div>
                <div
                  className="text-4xl font-black leading-none mb-1 tabular-nums"
                  style={{
                    fontFamily: "var(--font-barlow-condensed)",
                    fontWeight: 900,
                    color: "#fff",
                  }}
                >
                  <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm leading-snug" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="text-center text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
          Proudly covering M41, M32, M33, M17, M30, M27, WA13, WA14 &amp; WA3 postcodes across Greater Manchester.
        </p>
      </div>
    </section>
  );
}
