"use client";

import { useEffect, useRef } from "react";

// Silent stop-motion loop in the hero frame. Visitors who ask for reduced
// motion get the still poster instead.
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // iOS only autoplays when the element is truly muted.
    v.muted = true;
    v.defaultMuted = true;

    const still = matchMedia("(prefers-reduced-motion: reduce)");
    const events = ["touchstart", "pointerdown", "scroll", "keydown"] as const;

    // If autoplay is blocked (iPhone Low Power Mode, data saver), start on
    // the visitor's first touch or scroll instead.
    const retry = () => {
      events.forEach((e) => removeEventListener(e, retry));
      if (!still.matches) v.play().catch(() => {});
    };
    const apply = () => {
      if (still.matches) {
        v.pause();
        return;
      }
      v.play().catch(() => {
        events.forEach((e) => addEventListener(e, retry, { once: true, passive: true }));
      });
    };

    apply();
    still.addEventListener("change", apply);
    return () => {
      still.removeEventListener("change", apply);
      events.forEach((e) => removeEventListener(e, retry));
    };
  }, []);

  return (
    <video
      ref={ref}
      className="hero-video"
      poster="/video/hero-poster.jpg"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-label="Siddharth Sharma taking a bite of pizza, stop-motion loop"
    >
      {/* H.264 first: every phone decodes it. WebM is the fallback. */}
      <source src="/video/hero.mp4" type="video/mp4" />
      <source src="/video/hero.webm" type="video/webm" />
    </video>
  );
}
