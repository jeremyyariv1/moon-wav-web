"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionTag from "@/components/shared/SectionTag";

export default function TheReframe() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="reframe" ref={ref} className="py-28 md:py-36 px-6 bg-brand-surface/30 border-y border-brand-border">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-7"
        >
          <SectionTag number="02" label="The reframe" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white mb-10"
        >
          <span className="italic" style={{ fontFamily: "Georgia, serif" }}>
            moonwav
          </span>{" "}
          isn&apos;t another podcast app. It&apos;s the layer{" "}
          <span className="text-brand-light">above</span> your show.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-5 text-lg text-brand-subtle leading-relaxed max-w-2xl"
        >
          <p>
            We&apos;re not asking you or your listeners to switch apps. moonwav
            runs <em>above</em> your existing show, in your existing distribution.
          </p>
          <p>
            You upload one 90-second clip from an episode you already shipped.
            Our algorithm finds cold ears most likely to like it. The ones who tap{" "}
            <span className="text-white font-semibold">Dive Deeper</span> land on
            your full episode in Apple, Spotify, your RSS — and you gain a
            subscriber where you&apos;ve always counted them. We don&apos;t own
            your show; we own the discovery surface above it.
          </p>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 pl-6 border-l-2 border-brand-primary text-2xl md:text-3xl italic text-white leading-snug max-w-2xl font-bold"
          style={{ fontFamily: "Georgia, serif" }}
        >
          &ldquo;Give us your best 90 seconds. We&apos;ll find you listeners who
          didn&apos;t know they needed you.&rdquo;
        </motion.blockquote>
      </div>
    </section>
  );
}
