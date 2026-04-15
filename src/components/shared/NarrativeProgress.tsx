"use client";

import { useEffect, useState } from "react";

export type ProgressSection = { id: string; label: string };

export default function NarrativeProgress({
  sections,
}: {
  sections: ProgressSection[];
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    let raf = 0;
    function update() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        // Active section = the last section whose top has crossed
        // the trigger line (30% from the top of the viewport).
        // This handles tall sections correctly — once a section's
        // top has scrolled past the trigger, it stays active until
        // the next section's top crosses too.
        const triggerY = window.innerHeight * 0.3;
        let activeIdx = 0;
        sections.forEach((s, i) => {
          const el = document.getElementById(s.id);
          if (!el) return;
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerY) {
            activeIdx = i;
          }
        });
        setActive(activeIdx);
      });
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [sections]);

  return (
    <nav
      aria-label="Narrative progress"
      className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-30 flex-col items-end gap-3.5 pr-1"
    >
      {sections.map((s, i) => {
        const isActive = active === i;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="group flex items-center gap-3 justify-end cursor-pointer"
            aria-label={`Jump to ${s.label}`}
            aria-current={isActive ? "true" : undefined}
          >
            <span
              className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
                isActive
                  ? "text-brand-light opacity-100 translate-x-0"
                  : "text-brand-muted opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
              }`}
            >
              {s.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? "w-2 h-2 bg-brand-primary ring-4 ring-brand-primary/20"
                  : "w-1.5 h-1.5 bg-brand-border group-hover:bg-brand-light"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
