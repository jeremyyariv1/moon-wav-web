"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

export default function InvestorHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-primary/8 rounded-full blur-[140px] pointer-events-none" />

      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-5">
        <span
          className="italic font-semibold text-white text-lg"
          style={{ fontFamily: "Georgia, serif" }}
        >
          moonwav
        </span>
        <a
          href="/api/logout"
          className="text-xs text-brand-muted hover:text-white transition-colors"
        >
          Sign out
        </a>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
        <motion.p
          {...fadeUp(0.05)}
          className="text-[11px] uppercase tracking-[0.28em] text-brand-primary font-semibold"
        >
          The companion thesis
        </motion.p>

        <motion.h1
          {...fadeUp(0.15)}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.02] text-white"
        >
          The interface{" "}
          <span className="bg-gradient-to-r from-brand-light via-brand-accent to-violet-300 bg-clip-text text-transparent">
            beyond the screen.
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="text-xl md:text-2xl italic text-brand-subtle max-w-2xl leading-relaxed"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Building the daily habit that makes the in-ear AI companion inevitable.
        </motion.p>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 rounded-full border border-brand-border flex items-start justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1.5 rounded-full bg-brand-subtle"
          />
        </div>
      </motion.div>
    </section>
  );
}
