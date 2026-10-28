"use client";

import { useEffect, useRef } from "react";

// A single circle replaces the system cursor (mouse only). It uses a
// "difference" blend like the reference site, so whatever sits under it is
// inverted. The fill is picked per ground so the circle itself reads as the
// opposite brand colour: orange over ink, ink over orange, cream or pista.
type Ground = "ink" | "orange" | "cream" | "pista";

// fill = |target - ground| solved for the brand colour we want to see.
const FILL: Record<Ground, string> = {
  ink: "#ff852f", // shows as jalebi on kadak
  orange: "#c7510b", // shows as kadak on jalebi
  cream: "#d4dad1", // shows as kadak on chai
  pista: "#629b6e", // shows as kadak on pista
};

function groundUnder(el: Element | null): Ground {
  let node: Element | null = el;
  while (node && node !== document.documentElement) {
    const m = getComputedStyle(node).backgroundColor.match(/rgba?\(([^)]+)\)/);
    if (m) {
      const [r, g, b, a = 1] = m[1].split(/[\s,/]+/).filter(Boolean).map(Number);
      if (a > 0.5) {
        if (r > 200 && g > 80 && g < 170 && b < 120) return "orange";
        if (g > r && g > 150 && b < 160) return "pista";
        return 0.2126 * r + 0.7152 * g + 0.0722 * b < 90 ? "ink" : "cream";
      }
    }
    node = node.parentElement;
  }
  return "cream";
}

export function Cursor() {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    root.classList.add("has-cursor");

    const p = { x: -100, y: -100 };
    const c = { ...p };
    let raf = 0;
    let check = 0;
    let shown = false;

    const sample = () => {
      check = 0;
      const under = document.elementFromPoint(p.x, p.y);
      const node = el.current;
      if (!node) return;
      node.style.setProperty("--fill", FILL[groundUnder(under)]);
      const big = !!under?.closest(".hero-name, .contact-title");
      node.toggleAttribute("data-big", big);
      node.toggleAttribute("data-hot", !big && !!under?.closest("a, button, .work-row, .product, .mochi-pose"));
    };

    const tick = () => {
      const k = still ? 1 : 0.28;
      c.x += (p.x - c.x) * k;
      c.y += (p.y - c.y) * k;
      if (el.current) el.current.style.transform = `translate3d(${c.x}px, ${c.y}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      p.x = e.clientX;
      p.y = e.clientY;
      if (!shown) {
        shown = true;
        c.x = p.x;
        c.y = p.y;
        root.classList.add("cursor-on");
      }
      if (!check) check = requestAnimationFrame(sample);
    };
    const onScroll = () => {
      if (!check) check = requestAnimationFrame(sample);
    };
    const onLeave = () => {
      shown = false;
      root.classList.remove("cursor-on");
    };
    const onDown = () => el.current?.setAttribute("data-press", "");
    const onUp = () => el.current?.removeAttribute("data-press");

    addEventListener("pointermove", onMove, { passive: true });
    addEventListener("scroll", onScroll, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    addEventListener("pointerdown", onDown);
    addEventListener("pointerup", onUp);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(check);
      removeEventListener("pointermove", onMove);
      removeEventListener("scroll", onScroll);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      removeEventListener("pointerdown", onDown);
      removeEventListener("pointerup", onUp);
      root.classList.remove("has-cursor", "cursor-on");
    };
  }, []);

  return (
    <div ref={el} className="cursor" aria-hidden>
      <span className="cursor-blob" />
    </div>
  );
}
