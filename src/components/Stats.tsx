"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const STATS = [
  { value: "546M", label: "Global podcast listeners" },
  { value: "31 min", label: "Avg. podcast length" },
  { value: "0", label: "Short-form audio platforms" },
  { value: "73%", label: "Gen Z prefer audio under 5 min" },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 border-y border-brand-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-light to-brand-accent bg-clip-text text-transparent mb-2">
                {value}
              </p>
              <p className="text-sm text-brand-subtle leading-snug">{label}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center text-brand-subtle mt-10 text-base max-w-xl mx-auto"
        >
          Podcasts are too long. Music apps don&apos;t inform. News apps don&apos;t engage.{" "}
          <span className="text-white font-medium">We fill that gap.</span>
        </motion.p>
      </div>
    </section>
  );
}
