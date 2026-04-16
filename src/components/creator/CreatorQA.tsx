"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import SectionTag from "@/components/shared/SectionTag";

const QUESTIONS = [
  {
    q: "Won't this cannibalize my downloads?",
    a: "The clip lives on moonwav; the full episode stays on your platform. Dive Deeper sends listeners back to your distribution.",
  },
  {
    q: "Do I have to make new content?",
    a: "Pull 90 seconds from an episode you already shipped. Same workflow as a social cut.",
  },
  {
    q: "What if my existing audience doesn't use moonwav?",
    a: "moonwav is for listeners you don't have yet. Net-new ears, not migration.",
  },
  {
    q: "I've tried clip apps before — Snipd, Headliner, Descript. Why is this different?",
    a: "Snipd and Headliner help you make clips. They don't distribute them. We're the distribution.",
  },
  {
    q: "Why would 90 seconds work for what I do? My show is long-form for a reason.",
    a: "The clip is the preview, not the show. The episode is the payoff — long-form depth is what we drive listeners back to.",
  },
  {
    q: "What stops moonwav from changing the rules later — like Spotify and exclusives?",
    a: "The listener never leaves your distribution. We don't own your show; you do.",
  },
  {
    q: "How do I know the algorithm will treat my work fairly?",
    a: "It optimizes for one thing: did the clip earn attention. No follower weighting, no chart bias, no editorial picks.",
  },
];

export default function CreatorQA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="qa" ref={ref} className="py-28 md:py-36 px-6 bg-brand-surface/30 border-y border-brand-border">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-7"
        >
          <SectionTag number="06" label="Q&A" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white mb-14"
        >
          What podcasters keep asking.
        </motion.h2>

        <div className="flex flex-col gap-3">
          {QUESTIONS.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
                className="rounded-2xl border border-brand-border bg-brand-card/40 overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-start gap-5 hover:bg-brand-card/80 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] text-brand-light font-semibold mt-1 shrink-0">
                    Q{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-white font-semibold leading-snug">
                    {q}
                  </span>
                  <span
                    className={`text-brand-subtle text-xl shrink-0 transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="px-6 pb-6 pt-0"
                  >
                    <div className="pl-12 text-brand-subtle leading-relaxed">{a}</div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
