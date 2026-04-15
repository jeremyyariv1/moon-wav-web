"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionTag from "@/components/shared/SectionTag";

const CASES = [
  {
    name: "TikTok",
    claim: "Reels and Shorts are software-equivalent.",
    detail:
      "Meta and Google have more engineers and more capital. They still lose, because TikTok's For You algorithm is trained on swipe data that didn't exist before TikTok built the habit to generate it.",
  },
  {
    name: "Netflix",
    claim: "Disney and Warner own better IP and more money.",
    detail:
      "Netflix wins recommendations because it has fifteen years of viewing data nobody else has. IP is content. Data is the product.",
  },
];

export default function Pattern() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pattern" ref={ref} className="py-28 md:py-36 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-7 flex justify-center"
        >
          <SectionTag number="03" label="The pattern" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white mb-16 text-center max-w-2xl mx-auto"
        >
          We&apos;ve seen this shape before.
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-5">
          {CASES.map(({ name, claim, detail }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="rounded-2xl border border-brand-border bg-brand-card/50 p-8"
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-brand-light font-semibold mb-4">
                {name}
              </p>
              <p className="text-white text-xl font-semibold leading-snug mb-4">
                {claim}
              </p>
              <p className="text-brand-subtle leading-relaxed">{detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
