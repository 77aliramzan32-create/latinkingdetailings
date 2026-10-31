"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Count-up number that starts when scrolled into view.
 * Extracted from StatsSection so the section itself can be a server
 * component; uses a native IntersectionObserver instead of framer-motion.
 */
export function AnimatedNumber({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const steps = 40;
    const step = target / steps;
    let count = 0;
    const timer = setInterval(() => {
      count += step;
      if (count >= target) {
        setCurrent(target);
        clearInterval(timer);
      } else {
        setCurrent(Math.round(count * 10) / 10);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  const display = Number.isInteger(target)
    ? Math.round(current).toString()
    : current.toFixed(1);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
