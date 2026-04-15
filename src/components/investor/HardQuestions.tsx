"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import SectionTag from "@/components/shared/SectionTag";

const QUESTIONS = [
  {
    q: "Isn't audio behavioral data lower-signal than video data? A swipe on TikTok teaches you about visual style, pacing, faces, music. A skip on a podcast clip teaches you almost nothing.",
    a: "Right that per-interaction signal is lower. Wrong that this makes the dataset less valuable — it makes it harder to accumulate, which is exactly the moat. If audio recommendation were easy from sparse signal, Spotify would have solved it. The compensating factor is context: the same user has radically different preferences during commute vs workout vs wind-down. We capture context-conditioned preference no incumbent has.",
  },
  {
    q: "Your thesis says software goes to zero AND data is the moat. If models get smart enough to build the app in a weekend, they're also smart enough to cold-start recommendations from very little data. Doesn't that collapse your moat?",
    a: "Foundation models compress cold-start but don't eliminate it for preference learning. A model knows what a Peloponnesian War explainer is. It doesn't know that this user wants it at 7:42am on the train but not at 9pm on the couch. Models commoditize content understanding. They don't commoditize knowing the user.",
  },
  {
    q: "The wedge is content recommendation. The destination is personal assistant. Those are different products. How does skip-data on Wikipedia clips help you triage someone's inbox?",
    a: "Two answers. First: it doesn't directly — but it builds the daily in-ear habit and the contextual model of when to interrupt vs leave alone. Those are prerequisites for any ambient assistant. Second: personalized briefings — news, calendar, important messages — are the bridge. Same feed mechanic, broader scope. That's where content data becomes assistant data.",
  },
  {
    q: "Humane and Rabbit proved the in-ear AI category doesn't work. Why does it work in 2028?",
    a: "Humane and Rabbit sold hardware, a behavior change, and an unproven AI relationship at once — with no wedge. The category didn't fail; the go-to-market did. The destination needs three things: ambient wearables at Apple/Meta scale, models reliable enough to trust, and users with an existing daily audio habit. We're not betting on the first two. We're building the third regardless — the wedge stands on its own.",
  },
  {
    q: "OpenAI is shipping earbuds in late 2026. Altman is building hardware with Jony Ive. How do you not get crushed the moment Sweetpea launches?",
    a: "Sweetpea is a reactive voice interface to ChatGPT — ask, it answers. It competes with Siri, not with us. moonwav is device-agnostic by design: we run on any phone with any Bluetooth audio — AirPods, Ray-Bans, Sweetpea, the two billion pairs of headphones already in the wild. Every AI wearable shipped from 2026 onward is a new surface we run on, not a new competitor. When Sweetpea launches, moonwav becomes more valuable — the same way Spotify did when AirPods shipped.",
  },
  {
    q: "Why does a user come back tomorrow? Short-form video works because faces and music are dopamine. Audio explainers are not.",
    a: "Different frame. We don't compete with TikTok for idle scroll time. We compete with podcasts and music for the four-plus hours a day people already wear headphones. They've decided to consume audio. The question is which audio — and today the choice is a 90-minute podcast they have to commit to, or a playlist that teaches them nothing. We're the third option.",
  },
  {
    q: "Is this a venture-scale business if the companion vision never arrives? What if it's 2030 and Apple still hasn't shipped the wearable?",
    a: "Yes, on its own merits. Short-form audio is a category that doesn't exist today. At 100K MAU we project ~$1.3M ARR through advertising alone — audio CPMs are 3–5x display. At Spotify scale, ads alone are a multi-billion outcome. The companion thesis is the upside case. We're building a real media business that earns the right to become something larger.",
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
          Where the thesis gets pressure-tested.
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
