"use client";

import { useEffect } from "react";

// Marks [data-reveal] elements as they scroll into view. Content is visible by
// default; the hidden starting state only applies once this has run.
export function Reveal() {
  useEffect(() => {
    const root = document.documentElement;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    // Anything already on screen shows immediately; only below-the-fold content waits.
    for (const el of els) {
      const r = el.getBoundingClientRect();
      if (r.top < innerHeight * 0.9) el.classList.add("is-in");
      else io.observe(el);
    }
    root.classList.add("reveal-ready");
    return () => io.disconnect();
  }, []);

  return null;
}
