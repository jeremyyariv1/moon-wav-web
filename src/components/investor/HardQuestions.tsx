"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import SectionTag from "@/components/shared/SectionTag";

const QUESTIONS = [
  {
    q: "Isn't audio behavioral data lower-signal than video data? A swipe on TikTok teaches you about visual style, pacing, faces, music. A skip on a podcast clip teaches you almost nothing.",
    a: "Lower signal per interaction makes the dataset harder to accumulate — which is the moat. We compensate with context: same user, radically different preferences during commute vs workout vs wind-down.",
  },
  {
    q: "Your thesis says software goes to zero AND data is the moat. If models get smart enough to build the app in a weekend, they're also smart enough to cold-start recommendations from very little data. Doesn't that collapse your moat?",
    a: "A model knows what a Peloponnesian War explainer is. It doesn't know this user wants it at 7:42am but not 9pm. Models commoditize content understanding, not knowing the user.",
  },
  {
    q: "The wedge is content recommendation. The destination is personal assistant. Those are different products. How does skip-data on Wikipedia clips help you triage someone's inbox?",
    a: "It builds the daily habit and the contextual model of when to interrupt vs leave alone — prerequisites for any ambient assistant. Personalized briefings are the bridge: same feed, broader scope.",
  },
  {
    q: "Humane and Rabbit proved the in-ear AI category doesn't work. Why does it work in 2028?",
    a: "They sold hardware, behavior change, and AI all at once — no wedge. The category didn't fail; the go-to-market did. We build the habit first. The wedge stands on its own.",
  },
  {
    q: "OpenAI is shipping earbuds in late 2026. Altman is building hardware with Jony Ive. How do you not get crushed the moment Sweetpea launches?",
    a: "Sweetpea is reactive voice — it competes with Siri, not us. We're device-agnostic: every wearable shipped from 2026 onward is a surface we run on, not a competitor.",
  },
  {
    q: "Why does a user come back tomorrow? Short-form video works because faces and music are dopamine. Audio explainers are not.",
    a: "We compete with podcasts and music for the hours people already wear headphones — not with TikTok for scroll time. Today the choice is a 90-minute commitment or a playlist. We're the third option.",
  },
  {
    q: "Is this a venture-scale business if the companion vision never arrives? What if it's 2030 and Apple still hasn't shipped the wearable?",
    a: "At 100K MAU, ~$1.3M ARR from ads alone — audio CPMs are 3–5x display. The companion is the upside case. The base case is a real media business.",
  },
];

export default function HardQuestions() {
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
          <SectionTag number="09" label="Q&A" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white mb-14"
        >
          Hard questions.
        </motion.h2>

        <div className="flex flex-col gap-3">
          {QUESTIONS.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.05 }}
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
                    <div className="pl-12 text-brand-subtle leading-relaxed">
                      {a}
                    </div>
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
