"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionTag from "@/components/shared/SectionTag";

const BLOCKERS = [
  {
    name: "ElevenLabs",
    line: "Going B2C cannibalizes their paying customers.",
    detail:
      "They sell API infrastructure. Going B2C requires muscles they've never built — Twilio, Stripe, and Algolia all tried and failed.",
  },
  {
    name: "Anthropic / OpenAI",
    line: "Voice is reactive. The feed paradigm is the opposite.",
    detail:
      "Ambient, push-based, no query required. Even if they shipped tomorrow, their data flywheel starts at zero on day one.",
  },
  {
    name: "Spotify",
    line: "Feed mechanics break their licensing economics.",
    detail:
      "Their entire org is built around long-form playback and label relationships. The feed is structurally incompatible.",
  },
];

export default function Incumbents() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="incumbents" ref={ref} className="py-28 md:py-36 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-7 flex justify-center"
        >
          <SectionTag number="07" label="The competition" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white mb-16 text-center max-w-2xl mx-auto"
        >
          Why incumbents cannot catch up.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-5">
          {BLOCKERS.map(({ name, line, detail }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="rounded-2xl border border-brand-border bg-brand-card/50 p-7 flex flex-col"
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-brand-light font-semibold mb-4">
                {name}
              </p>
              <p className="text-white text-lg font-semibold leading-snug mb-4">
                {line}
              </p>
              <p className="text-brand-subtle text-sm leading-relaxed">{detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
