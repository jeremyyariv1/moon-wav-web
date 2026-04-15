"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionTag from "@/components/shared/SectionTag";

const SIGNALS = [
  { label: "Like", desc: "More like this." },
  { label: "Dislike", desc: "Less like this." },
  { label: "Skip", desc: "Negative, weighted by how far in." },
  { label: "Dive Deeper", desc: "Strongest intent — generates extended audio on the topic in real time." },
];

const SOURCES = [
  {
    name: "AI-generated explainers",
    desc: "Wikipedia facts, news, Reddit digests synthesized into natural audio. Infinite supply, generated for cents.",
  },
  {
    name: "Creator clips",
    desc: "Podcasters and musicians upload 60–90 second clips. Algorithmic distribution to cold ears.",
  },
  {
    name: "Personalized briefing",
    desc: "Weather, calendar, overnight headlines, on-this-day. The bridge to assistant.",
  },
];

const TIME_MODES = [
  { label: "Early AM", note: "Briefing, weather, overnight headlines" },
  { label: "Morning", note: "Reddit catch-ups, quick facts" },
  { label: "Midday", note: "Creator clips, music, motivation" },
  { label: "Evening", note: "Longer pieces, deep dives" },
  { label: "Late Night", note: "Reflective, ambient, sleep-friendly" },
];

export default function Product() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="product" ref={ref} className="py-28 md:py-36 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-7"
        >
          <SectionTag number="05" label="The product" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white mb-10 max-w-3xl"
        >
          Press play. Audio flows. The feed shapes itself.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-brand-subtle leading-relaxed max-w-2xl mb-16"
        >
          <p>
            No scrolling. No choosing. Hit play and a continuous stream of
            20-second to 5-minute clips unfolds — tuned to interests, time of
            day, and what just got reacted to. Four buttons shape the feed.
            Every tap becomes preference signal: context-conditioned, behavioral,
            ours.
          </p>
        </motion.div>

        {/* The four signals */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <p className="text-[10px] uppercase tracking-[0.22em] text-brand-light font-semibold mb-5">
            Four signals · the entire interaction surface
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {SIGNALS.map(({ label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.06 }}
                className="rounded-xl border border-brand-border bg-brand-card/40 p-5 flex flex-col gap-2"
              >
                <span className="text-white font-semibold text-sm">{label}</span>
                <span className="text-brand-subtle text-xs leading-relaxed">
                  {desc}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Content sources */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mb-16"
        >
          <p className="text-[10px] uppercase tracking-[0.22em] text-brand-light font-semibold mb-5">
            What flows through the feed
          </p>
          <div className="grid md:grid-cols-3 gap-3">
            {SOURCES.map(({ name, desc }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.05 }}
                className="rounded-xl border border-brand-border bg-brand-card/40 p-5"
              >
                <p className="text-white font-semibold text-sm mb-1.5">{name}</p>
                <p className="text-brand-subtle text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Time-of-day intelligence */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mb-16"
        >
          <p className="text-[10px] uppercase tracking-[0.22em] text-brand-light font-semibold mb-5">
            The feed reshapes itself across the day
          </p>
          <div className="rounded-2xl border border-brand-border bg-brand-card/30 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-brand-border">
              {TIME_MODES.map(({ label, note }) => (
                <div key={label} className="px-4 py-5 flex flex-col gap-1.5">
                  <span
                    className="text-xs italic text-brand-light"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {label}
                  </span>
                  <span className="text-brand-subtle text-xs leading-relaxed">
                    {note}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="pl-6 border-l-2 border-brand-primary text-2xl md:text-3xl italic text-white leading-snug max-w-2xl"
          style={{ fontFamily: "Georgia, serif" }}
        >
          The simplest interface that could plausibly produce a behavioral dataset
          this rich.
        </motion.blockquote>
      </div>
    </section>
  );
}
