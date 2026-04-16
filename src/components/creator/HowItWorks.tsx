"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionTag from "@/components/shared/SectionTag";

const STEPS = [
  {
    n: "01",
    title: "Drop a clip",
    desc: "Pull 60–90 seconds from an episode you already shipped — the sharpest moment, the part a trailer would lead with. No new content needed.",
  },
  {
    n: "02",
    title: "The algorithm finds the right ears",
    desc: "Listeners who don't follow you hear it in their feed — ranked by what they respond to, not by your follower count or chart position. Performance compounds.",
  },
  {
    n: "03",
    title: "They go from clip to subscriber",
    desc: "A tap on Dive Deeper opens your full episode wherever you publish. Subscribers count where they always counted — Apple, Spotify, your RSS.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how" ref={ref} className="py-28 md:py-36 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-7 flex justify-center"
        >
          <SectionTag number="03" label="How it works" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white mb-16 text-center max-w-2xl mx-auto"
        >
          Three steps. No new platform to learn.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-5">
          {STEPS.map(({ n, title, desc }, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="rounded-2xl border border-brand-border bg-brand-card/50 p-7 flex flex-col gap-3"
            >
              <span
                className="text-2xl italic text-brand-light"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {n}
              </span>
              <h3 className="text-white font-semibold leading-snug">{title}</h3>
              <p className="text-brand-subtle text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
