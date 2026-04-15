"use client";

import { motion } from "framer-motion";
import WaveformAnimation from "./WaveformAnimation";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

const BUTTONS = [
  { label: "Dislike", icon: "✕", color: "text-red-400 border-red-400/30 hover:bg-red-400/10" },
  { label: "Like", icon: "♥", color: "text-emerald-400 border-emerald-400/30 hover:bg-emerald-400/10" },
  { label: "Skip", icon: "⏭", color: "text-brand-subtle border-brand-border hover:bg-white/5" },
  { label: "Dive Deeper", icon: "↓", color: "text-brand-light border-brand-primary/40 hover:bg-brand-primary/10" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-primary/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-6">
        {/* Badge */}
        <motion.div {...fadeUp(0.1)}>
          <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full border border-brand-border bg-brand-surface text-brand-subtle">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-light animate-pulse" />
            iOS beta · closed preview
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white"
        >
          Short-Form Audio,{" "}
          <span className="bg-gradient-to-r from-brand-light via-brand-accent to-violet-400 bg-clip-text text-transparent">
            Personalized
          </span>{" "}
          to Your Day
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-lg md:text-xl text-brand-subtle max-w-xl leading-relaxed"
        >
          A bite-sized, algorithmically curated audio feed — 20-second clips to
          5-minute deep dives — that adapts to your interests, your schedule, and
          the time of day.
        </motion.p>

        {/* Mock player card */}
        <motion.div
          {...fadeUp(0.45)}
          className="w-full max-w-md rounded-2xl border border-brand-border bg-brand-card bg-card-shine p-5 shadow-2xl shadow-black/50 animate-pulseGlow mt-2"
        >
          {/* Now playing info */}
          <div className="flex items-start justify-between mb-4">
            <div className="text-left">
              <p className="text-[11px] uppercase tracking-widest text-brand-muted font-medium mb-0.5">
                Now Playing
              </p>
              <p className="text-sm font-semibold text-white leading-snug">
                The Psychology of Habit Formation
              </p>
              <p className="text-xs text-brand-subtle mt-0.5">Wikipedia Digest · 1 min 12 s</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-[10px] px-2 py-0.5 rounded-full border border-brand-border text-brand-subtle">
                Midday
              </span>
            </div>
          </div>

          {/* Waveform */}
          <WaveformAnimation className="w-full h-12 my-2" />

          {/* Progress bar */}
          <div className="w-full h-0.5 bg-brand-border rounded-full mt-3 mb-4">
            <div className="h-full w-2/5 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full" />
          </div>

          {/* Interaction buttons */}
          <div className="grid grid-cols-4 gap-2">
            {BUTTONS.map(({ label, icon, color }) => (
              <button
                key={label}
                className={`flex flex-col items-center gap-1 py-2 px-1 rounded-xl border transition-colors cursor-pointer ${color}`}
                aria-label={label}
              >
                <span className="text-base leading-none">{icon}</span>
                <span className="text-[10px] font-medium leading-none">{label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Creator CTA */}
        <motion.div {...fadeUp(0.55)} className="flex flex-col sm:flex-row gap-3 items-center">
          <a
            id="apply"
            href="#creators"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-primary hover:bg-brand-light transition-colors text-white font-semibold text-sm shadow-lg shadow-brand-primary/30"
          >
            Apply for early creator access
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-brand-subtle hover:text-white transition-colors flex items-center gap-1"
          >
            See how it works
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
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
