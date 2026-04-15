"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionTag from "@/components/shared/SectionTag";

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
            The app is the data-collection apparatus.
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="space-y-5 text-lg text-brand-subtle leading-relaxed max-w-2xl"
        >
          <p>Every design decision is evaluated against a single question:</p>
          <p
            className="italic text-xl text-white"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Does this generate higher-quality preference signal per user-minute?
          </p>
          <p>
            The feed earns ear time. The ear time accumulates the dataset. The
            dataset unlocks the companion.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-14 rounded-2xl border border-brand-primary/30 bg-gradient-to-br from-brand-primary/10 to-brand-accent/5 p-8"
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-brand-light font-semibold mb-4">
            The flywheel
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="text-white font-semibold mb-1">1. Habit</p>
              <p className="text-brand-subtle leading-relaxed">
                Short-form audio earns daily, unthinking ear time.
              </p>
            </div>
            <div>
              <p className="text-white font-semibold mb-1">2. Signal</p>
              <p className="text-brand-subtle leading-relaxed">
                Every skip, like, and dive-deeper becomes context-conditioned
                preference data.
              </p>
            </div>
            <div>
              <p className="text-white font-semibold mb-1">3. Companion</p>
              <p className="text-brand-subtle leading-relaxed">
                The dataset powers the ambient AI that no model can cold-start.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
