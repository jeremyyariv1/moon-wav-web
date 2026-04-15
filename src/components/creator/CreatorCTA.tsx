"use client";

import { motion } from "framer-motion";

export default function CreatorCTA() {
  return (
    <section
      id="cta"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Layered atmospherics */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-brand-primary/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute left-1/4 top-1/3 w-[400px] h-[400px] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-1/4 bottom-1/3 w-[300px] h-[300px] bg-brand-light/8 rounded-full blur-[100px] pointer-events-none" />

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
          07
        </span>
        <span className="block h-px w-8 bg-brand-border translate-y-[-3px]" />
        <span className="text-[11px] uppercase tracking-[0.28em] text-brand-primary font-semibold">
          The first cohort
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-5xl md:text-7xl lg:text-[5rem] font-bold tracking-tight leading-[1.02] text-white text-center max-w-4xl"
      >
        Your show is great.
        <br />
        <span
          className="italic font-bold"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Now make sure people{" "}
          <span className="bg-gradient-to-r from-brand-light via-brand-accent to-violet-300 bg-clip-text text-transparent">
            hear it.
          </span>
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="relative z-10 mt-12 max-w-xl text-center text-brand-subtle text-lg md:text-xl leading-relaxed italic"
        style={{ fontFamily: "Georgia, serif" }}
      >
        You&apos;ve been told for a decade discovery doesn&apos;t exist. Today
        it does.
      </motion.p>

      <motion.a
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.65 }}
        href="#"
        className="relative z-10 mt-12 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-primary hover:bg-brand-light transition-colors text-white font-semibold text-base shadow-2xl shadow-brand-primary/40"
      >
        Apply for early creator access
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </motion.a>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="relative z-10 mt-6 text-xs text-brand-muted text-center"
      >
        Limited spots · Hands-on support · No platform fees during the preview
      </motion.p>
    </section>
  );
}
