"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionTag from "@/components/shared/SectionTag";
import FlywheelDiagram from "@/components/shared/FlywheelDiagram";

export default function OneLayerUp() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="strategy" ref={ref} className="py-28 md:py-36 px-6 bg-brand-surface/30 border-y border-brand-border">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-7"
        >
          <SectionTag number="04" label="One layer up" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white mb-10"
        >
          The app is not the product.
          <br />
          <span className="text-brand-light">
            The app is the instrument.
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="space-y-5 text-lg text-brand-subtle leading-relaxed max-w-2xl"
        >
          <p
            className="italic text-xl md:text-2xl text-white"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Does this generate higher-quality preference signal per user-minute?
          </p>
          <p>
            The feed earns ear time. Ear time accumulates the dataset. The
            dataset makes the companion real.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-16 rounded-3xl border border-brand-primary/20 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-accent/5 px-6 py-12 md:py-16"
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-brand-light font-semibold mb-10 text-center">
            The flywheel
          </p>
          <FlywheelDiagram
            nodes={[
              { label: "Habit", sub: "daily ear time" },
              { label: "Signal", sub: "preference data" },
              { label: "Companion", sub: "ambient AI" },
            ]}
          />
        </motion.div>
      </div>
    </section>
  );
}
