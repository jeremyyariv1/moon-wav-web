"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionTag from "@/components/shared/SectionTag";

type DeviceIcon = "earbud" | "roundGlasses" | "rectGlasses" | "pin" | "airpods";

const DEVICES: { name: string; note: string; icon: DeviceIcon }[] = [
  { name: "OpenAI Sweetpea", note: "Jony Ive · 40–50M units target, late 2026", icon: "earbud" },
  { name: "Meta Ray-Bans", note: "Scaling through 2026", icon: "roundGlasses" },
  { name: "Apple AI pin", note: "In development", icon: "pin" },
  { name: "Google AI glasses", note: "Launching", icon: "rectGlasses" },
  { name: "AirPods", note: "2B+ pairs already in the wild", icon: "airpods" },
];

function DeviceGlyph({ icon }: { icon: DeviceIcon }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 32 32",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.1,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "text-brand-light shrink-0",
  };
  switch (icon) {
    case "earbud":
      return (
        <svg {...common}>
          <path d="M 20 8 C 25 8, 27 13, 26 19 C 25 25, 19 26, 17 22 L 16 14 Z" />
          <circle cx="20" cy="13" r="1" fill="currentColor" />
        </svg>
      );
    case "roundGlasses":
      return (
        <svg {...common}>
          <circle cx="10" cy="17" r="5" />
          <circle cx="22" cy="17" r="5" />
          <path d="M 15 17 L 17 17" />
          <path d="M 5 13 L 4 11" />
          <path d="M 27 13 L 28 11" />
        </svg>
      );
    case "rectGlasses":
      return (
        <svg {...common}>
          <rect x="5" y="12" width="10" height="8" rx="1.5" />
          <rect x="17" y="12" width="10" height="8" rx="1.5" />
          <path d="M 15 16 L 17 16" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <rect x="9" y="9" width="14" height="14" rx="2" />
          <circle cx="16" cy="16" r="2.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "airpods":
      return (
        <svg {...common}>
          <ellipse cx="10" cy="16" rx="3" ry="6" />
          <ellipse cx="22" cy="16" rx="3" ry="6" />
          <circle cx="10" cy="13" r="0.8" fill="currentColor" stroke="none" />
          <circle cx="22" cy="13" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}

export default function Hardware() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="hardware" ref={ref} className="py-28 md:py-36 px-6 bg-brand-surface/30 border-y border-brand-border">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-7"
        >
          <SectionTag number="08" label="The tailwind" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white mb-10"
        >
          The hardware is arriving.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg text-brand-subtle leading-relaxed max-w-2xl"
        >
          <p>
            The hardware layer we need isn&apos;t a prediction — it&apos;s a
            scheduled event.{" "}
            <span
              className="italic text-white"
              style={{ fontFamily: "Georgia, serif" }}
            >
              moonwav
            </span>{" "}
            is device-agnostic: wherever there&apos;s a phone and a pair of
            Bluetooth audio devices, we run. Every AI wearable shipped from 2026
            onward adds to the surface.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid sm:grid-cols-2 gap-3"
        >
          {DEVICES.map(({ name, note, icon }) => (
            <div
              key={name}
              className="rounded-xl border border-brand-border bg-brand-card/40 px-4 py-3 flex items-center gap-4"
            >
              <DeviceGlyph icon={icon} />
              <div className="flex flex-col min-w-0">
                <span className="text-white text-sm font-semibold truncate">
                  {name}
                </span>
                <span className="text-brand-muted text-xs mt-0.5 truncate">
                  {note}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-14 pl-6 border-l-2 border-brand-primary text-2xl md:text-3xl italic text-white leading-snug max-w-2xl"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Hardware fragmentation is our tailwind. Sweetpea competes with Siri, not
          with us.
        </motion.blockquote>
      </div>
    </section>
  );
}
