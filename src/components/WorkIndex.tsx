"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/content/site";
import { ArrowUpRight, GitHub } from "./icons";

// Project index. On a mouse, hovering a row shows that site's screenshot riding
// the cursor; on touch, each row carries its own thumbnail instead.
export function WorkIndex({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine) return;
    let raf = 0;
    const tick = () => {
      // Ease toward the pointer so the preview trails it a little.
      const k = still ? 1 : 0.18;
      pos.current.x += (target.current.x - pos.current.x) * k;
      pos.current.y += (target.current.y - pos.current.y) * k;
      const el = previewRef.current;
      if (el) el.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    // Scrolling moves rows out from under a still cursor, so drop the preview.
    const hide = () => setActive(null);
    addEventListener("scroll", hide, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("scroll", hide);
    };
  }, []);

  function onMove(e: React.PointerEvent) {
    if (e.pointerType !== "mouse") return;
    target.current = { x: e.clientX + 24, y: e.clientY - 120 };
    if (active === null) pos.current = { ...target.current };
    const row = (e.target as HTMLElement).closest<HTMLElement>("[data-index]");
    const next = row ? Number(row.dataset.index) : null;
    if (next !== active) setActive(next);
  }

  return (
    <div className="work-index" onPointerMove={onMove} onPointerLeave={() => setActive(null)}>
      <ol className="work-list">
        {projects.map((p, i) => (
          <li
            key={p.slug}
            className="work-row"
            data-reveal
            data-index={i}
            style={{ "--i": i } as React.CSSProperties}
          >
            <div className="work-row-main">
              <h3 className="work-name">
                <a href={p.live ?? p.repo} target="_blank" rel="noreferrer" className="work-link">
                  {p.name}
                  <ArrowUpRight className="icon work-arrow" />
                </a>
              </h3>
              <p className="work-summary">{p.summary}</p>
              <ul className="work-stack" aria-label="Built with">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div className="work-meta">
              <span className="work-year">{p.year}</span>
              {p.live && (
                <span className="live-dot" title="Live">
                  live
                </span>
              )}
              {p.repo && (
                <a href={p.repo} target="_blank" rel="noreferrer" className="icon-link" aria-label={`${p.name} source on GitHub`}>
                  <GitHub className="icon" />
                </a>
              )}
            </div>
            {p.image && (
              <div className="work-thumb">
                <Image src={p.image} alt={`${p.name} home page`} width={1200} height={750} sizes="(max-width: 760px) 92vw, 1px" />
              </div>
            )}
          </li>
        ))}
      </ol>

      <div ref={previewRef} className="work-preview" data-on={active !== null} aria-hidden>
        {projects.map((p, i) =>
          p.image ? (
            <Image
              key={p.slug}
              src={p.image}
              alt=""
              width={1200}
              height={750}
              sizes="420px"
              className="work-preview-img"
              data-active={active === i}
            />
          ) : null,
        )}
      </div>
    </div>
  );
}
