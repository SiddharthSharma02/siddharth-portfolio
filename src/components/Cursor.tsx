"use client";

import { useEffect, useRef } from "react";

// Custom cursor: a dot plus a glowing ring that trails it. It takes the opposite
// brand colour of whatever is underneath: orange over ink or cream, ink over orange.
// Mouse-only; touch devices keep their native behaviour.
type Tone = "jalebi" | "kadak";

function toneUnder(el: Element | null): Tone {
  let node: Element | null = el;
  while (node && node !== document.documentElement) {
    if (node instanceof HTMLElement && node.dataset.cursor) return node.dataset.cursor as Tone;
    const bg = getComputedStyle(node).backgroundColor;
    const m = bg.match(/rgba?\(([^)]+)\)/);
    if (m) {
      const [r, g, b, a = "1"] = m[1].split(/[\s,/]+/).filter(Boolean);
      if (Number(a) > 0.5) {
        const R = Number(r), G = Number(g), B = Number(b);
        // Orange-ish ground (high red, mid green, low blue) → ink cursor.
        if (R > 200 && G > 80 && G < 170 && B < 120) return "kadak";
        return "jalebi";
      }
    }
    node = node.parentElement;
  }
  return "jalebi";
}

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = matchMedia("(hover: hover) and (pointer: fine)");
    if (!fine.matches) return;
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    root.classList.add("has-cursor");

    const p = { x: innerWidth / 2, y: innerHeight / 2 };
    const r = { ...p };
    let raf = 0;
    let check = 0;
    let visible = false;

    const setTone = () => {
      check = 0;
      const under = document.elementFromPoint(p.x, p.y);
      const tone = toneUnder(under);
      root.dataset.cursorTone = tone;
      const hot = !!under?.closest("a, button, [role=button], .work-row, .product, .mochi-pose");
      ring.current?.toggleAttribute("data-hot", hot);
    };

    const tick = () => {
      const k = still ? 1 : 0.2;
      r.x += (p.x - r.x) * k;
      r.y += (p.y - r.y) * k;
      if (dot.current) dot.current.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
      if (ring.current) ring.current.style.transform = `translate3d(${r.x}px, ${r.y}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      p.x = e.clientX;
      p.y = e.clientY;
      if (!visible) {
        visible = true;
        r.x = p.x;
        r.y = p.y;
        root.classList.add("cursor-on");
      }
      if (!check) check = requestAnimationFrame(setTone);
    };
    const onScroll = () => {
      if (!check) check = requestAnimationFrame(setTone);
    };
    const onLeave = () => {
      visible = false;
      root.classList.remove("cursor-on");
    };
    const onDown = () => ring.current?.setAttribute("data-press", "");
    const onUp = () => ring.current?.removeAttribute("data-press");

    addEventListener("pointermove", onMove, { passive: true });
    addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    addEventListener("pointerdown", onDown);
    addEventListener("pointerup", onUp);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(check);
      removeEventListener("pointermove", onMove);
      removeEventListener("scroll", onScroll);
      document.removeEventListener("pointerleave", onLeave);
      removeEventListener("pointerdown", onDown);
      removeEventListener("pointerup", onUp);
      root.classList.remove("has-cursor", "cursor-on");
    };
  }, []);

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden />
      <div ref={dot} className="cursor-dot" aria-hidden />
    </>
  );
}
