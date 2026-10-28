"use client";

import { useEffect, useRef } from "react";

// Splash counter, 0 → 100. Driven from JS because Safari doesn't repaint
// a CSS counter fed by an animated custom property.
const DELAY = 300;
const DURATION = 1700;

// Matches the old CSS curve, cubic-bezier(0.65, 0, 0.35, 1), closely enough.
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

export function IntroCount() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    // performance.now() counts from page load, so the count stays in step
    // with the CSS splash even if this hydrates late.
    const tick = () => {
      const t = Math.min(Math.max((performance.now() - DELAY) / DURATION, 0), 1);
      el.textContent = `${Math.round(ease(t) * 100)}’`;
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    tick();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <span ref={ref} className="intro-count">
      0{"’"}
    </span>
  );
}
