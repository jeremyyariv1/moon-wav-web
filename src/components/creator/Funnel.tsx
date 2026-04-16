"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionTag from "@/components/shared/SectionTag";
import FunnelShape from "@/components/shared/FunnelShape";

const STAGES = [
  { label: "Cold listener", note: "Someone who has never heard of you" },
  { label: "Skip / like", note: "First signal — does the clip land?" },
  { label: "Dive Deeper", note: "Strongest intent — they want the full thing" },
  { label: "Full episode", note: "Opens in their podcast app of choice" },
  { label: "Subscriber", note: "Counted in your existing distribution" },
];

export default function Funnel() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="funnel" ref={ref} className="py-28 md:py-36 px-6 bg-brand-surface/30 border-y border-brand-border">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-7"
        >
          <SectionTag number="04" label="The funnel" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white mb-10"
        >
          From cold listener to subscriber on{" "}
          <span className="text-brand-light">your</span> platform.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-brand-subtle leading-relaxed max-w-2xl mb-12"
        >
          Five stages, every one measured. You see exactly where listeners drop
          off, what clips convert, and which episodes bring them all the way to
          subscribe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <FunnelShape stages={STAGES as [typeof STAGES[0], typeof STAGES[0], typeof STAGES[0], typeof STAGES[0], typeof STAGES[0]]} />
        </motion.div>
      </div>
    </section>
  );
}
