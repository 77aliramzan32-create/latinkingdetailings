"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Stagger delay (seconds) once the element enters view. */
  delay?: number;
  /** Vertical offset (px) of the hidden state. */
  y?: number;
  /** Scale of the hidden state (e.g. 0.95). Omit for no scaling. */
  scale?: number;
  /** How far below the viewport bottom the element may sit before it counts as "in view". */
  margin?: string;
}

/**
 * Tiny scroll-reveal wrapper — replaces framer-motion `whileInView`
 * (a 40 KB gzip library) with a ~1 KB IntersectionObserver.
 *
 * - Server-renders visible, so content is never hidden if JS fails to run.
 * - On mount, elements that start below the fold are hidden, then fade/slide
 *   in once when scrolled into view. Elements already in view stay visible
 *   (no flash, no animation on load).
 * - Respects `prefers-reduced-motion`: no hiding, no animation.
 */
export function Reveal({
  children,
  className,
  style,
  delay = 0,
  y = 20,
  scale,
  margin = "-40px",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Already in the viewport on load → leave visible, no animation.
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    setHidden(true);
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHidden(false);
          io.disconnect();
        }
      },
      { rootMargin: `0px 0px ${margin} 0px` }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [margin]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: hidden ? 0 : 1,
        transform: hidden
          ? `translateY(${y}px)${scale ? ` scale(${scale})` : ""}`
          : "none",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
