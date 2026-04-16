"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionTag from "@/components/shared/SectionTag";

export default function Destination() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="destination" ref={ref} className="py-28 md:py-36 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-7"
        >
          <SectionTag number="01" label="The destination" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white mb-10"
        >
          The next interface is voice in your ear — ambient, personalized, always
          present.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg text-brand-subtle leading-relaxed max-w-2xl"
        >
          <p>
            Foundation labs are solving model quality with billions. The
            bottleneck is the missing daily habit — ambient, personalized,
            interruptible audio. Spotify trained the world on music. Podcasts
            trained it on long-form. Nobody has trained it on this.
          </p>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-14 pl-6 border-l-2 border-brand-primary text-2xl md:text-3xl italic text-white leading-snug max-w-2xl"
          style={{ fontFamily: "Georgia, serif" }}
        >
          We are building the habit. The habit is the wedge.
        </motion.blockquote>
      </div>
    </section>
  );
}
