"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import SectionTag from "@/components/shared/SectionTag";

const QUESTIONS = [
  {
    q: "Won't this cannibalize my downloads?",
    a: "No. The clip lives on moonwav; the episode lives wherever you publish. Dive Deeper drives listeners back to your distribution — Apple, Spotify, your RSS — where the download still counts. Top-of-funnel layer, not a replacement.",
  },
  {
    q: "Do I have to make new content?",
    a: "No. Pull 90 seconds from an episode you've already shipped. Treat it like the trailer you wish more people saw — same workflow as a social cut, one less platform tax.",
  },
  {
    q: "What if my existing audience doesn't use moonwav?",
    a: "They don't have to. moonwav is for the listeners you don't have yet. You're acquiring net-new ears, not migrating old ones.",
  },
  {
    q: "I've tried clip apps before — Snipd, Headliner, Descript. Why is this different?",
    a: "Snipd, Headliner, Descript help you *make* clips. They don't distribute them. A clip in Headliner has the same problem your show does — nobody sees it unless you post it somewhere. moonwav is the distribution side: you drop the clip, the algorithm puts it in front of cold ears.",
  },
  {
    q: "Why would 90 seconds work for what I do? My show is long-form for a reason.",
    a: "The clip isn't your art. It's the trailer. 90 seconds has one job: get someone curious enough to tap Dive Deeper. The episode is the meal. Long-form depth is exactly what we drive listeners back to.",
  },
  {
    q: "What stops moonwav from changing the rules later — like Spotify and exclusives?",
    a: "Two structural answers. First: the listener never leaves your distribution — Dive Deeper opens your episode in their app of choice, on your RSS. We don't own your show; you do. Second: our only leverage is the discovery surface, and we're built to share economics by design — not as a revocable favor.",
  },
  {
    q: "How do I know the algorithm will treat my work fairly?",
    a: "It optimizes for one thing: did this clip earn the listener's attention. No follower-count weighting, no chart bias, no editorial curation. If your clip lands better than someone else's, you get more reach. If it doesn't, no brand recognition will save it. That's the fair version.",
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
