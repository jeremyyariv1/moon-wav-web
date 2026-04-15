"use client";

import { motion } from "framer-motion";

export default function Window() {
  return (
    <section
      id="window"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Layered radial atmospherics */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-brand-primary/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute left-1/4 top-1/3 w-[400px] h-[400px] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-1/4 bottom-1/3 w-[300px] h-[300px] bg-brand-light/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Top eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex items-baseline gap-4 mb-12"
      >
        <span
          className="italic text-brand-light text-base leading-none"
          style={{ fontFamily: "Georgia, serif" }}
        >
          10
        </span>
        <span className="block h-px w-8 bg-brand-border translate-y-[-3px]" />
        <span className="text-[11px] uppercase tracking-[0.28em] text-brand-primary font-semibold">
          The window
        </span>
      </motion.div>

      {/* Cinematic statement */}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.02] text-white text-center max-w-5xl"
      >
        Whoever owns the daily habit
        <br />
        <span className="text-brand-subtle">when the hardware arrives,</span>
        <br />
        <span
          className="italic font-bold"
          style={{ fontFamily: "Georgia, serif" }}
        >
          owns{" "}
          <span className="bg-gradient-to-r from-brand-light via-brand-accent to-violet-300 bg-clip-text text-transparent">
            the decade.
          </span>
        </span>
      </motion.h2>

      {/* Footnote */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="relative z-10 mt-16 max-w-md text-center text-brand-subtle text-sm leading-relaxed"
      >
        Models commoditize. Hardware ships. Habit takes years. We start the years now.
      </motion.p>
    </section>
  );
}
