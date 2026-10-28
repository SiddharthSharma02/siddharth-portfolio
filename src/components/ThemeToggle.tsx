"use client";

import { Moon, Sun } from "./icons";

export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-label="Switch light or dark theme">
      <Sun className="icon icon-sun" />
      <Moon className="icon icon-moon" />
    </button>
  );
}
