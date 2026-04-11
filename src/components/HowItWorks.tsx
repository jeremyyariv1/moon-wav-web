"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const STEPS = [
  {
    number: "01",
    title: "Listen",
    description:
      "An auto-playing audio stream with minimal UI. Content flows continuously — no tapping, no scrolling, no choosing. Just press play.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "React",
    description:
      "Four controls: Like, Dislike, Skip, and Dive Deeper. Every tap trains the feed in real time — the algorithm learns your taste instantly.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Discover",
    description:
      "Within 15–20 clips the algorithm reflects your interests, energy, and curiosity — while still surprising you with things you didn't know you wanted.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" ref={ref} className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-brand-primary font-semibold mb-3">
            How it works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Three steps. Zero friction.
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {STEPS.map(({ number, title, description, icon }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col items-start md:items-center md:text-center"
              >
                {/* Icon bubble */}
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-brand-surface border border-brand-border flex items-center justify-center mb-6 text-brand-primary shadow-lg shadow-brand-primary/10">
                  {icon}
                  <span className="absolute -top-2 -right-2 text-[10px] font-bold bg-brand-primary text-white rounded-full w-5 h-5 flex items-center justify-center">
                    {number.slice(1)}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
                <p className="text-brand-subtle text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
