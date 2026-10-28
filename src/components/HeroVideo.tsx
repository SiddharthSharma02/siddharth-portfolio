"use client";

import { useEffect, useRef } from "react";

// Silent stop-motion loop in the hero frame. Visitors who ask for reduced
// motion get the still poster instead.
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const still = matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (still.matches) v.pause();
      else v.play().catch(() => {});
    };
    apply();
    still.addEventListener("change", apply);
    return () => still.removeEventListener("change", apply);
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
      <source src="/video/hero.webm" type="video/webm" />
      <source src="/video/hero.mp4" type="video/mp4" />
    </video>
  );
}
