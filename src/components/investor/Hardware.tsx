"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionTag from "@/components/shared/SectionTag";

const DEVICES = [
  { name: "OpenAI Sweetpea", note: "Jony Ive · 40–50M units target, late 2026" },
  { name: "Meta Ray-Bans", note: "Scaling through 2026" },
  { name: "Apple AI pin", note: "In development" },
  { name: "Google AI glasses", note: "Launching" },
  { name: "AirPods", note: "2B+ pairs already in the wild" },
];

export default function Hardware() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="hardware" ref={ref} className="py-28 md:py-36 px-6 bg-brand-surface/30 border-y border-brand-border">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-7"
        >
          <SectionTag number="08" label="The tailwind" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white mb-10"
        >
          The hardware is arriving — built for us by companies with billions of
          dollars.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg text-brand-subtle leading-relaxed max-w-2xl"
        >
          <p>
            The hardware layer we need isn&apos;t a prediction — it&apos;s a
            scheduled event.{" "}
            <span
              className="italic text-white"
              style={{ fontFamily: "Georgia, serif" }}
            >
              moonwav
            </span>{" "}
            is device-agnostic: wherever there&apos;s a phone and a pair of
            Bluetooth audio devices, we run. Every AI wearable shipped from 2026
            onward adds to the surface.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid sm:grid-cols-2 gap-3"
        >
          {DEVICES.map(({ name, note }) => (
            <div
              key={name}
              className="rounded-xl border border-brand-border bg-brand-card/40 px-4 py-3 flex flex-col"
            >
              <span className="text-white text-sm font-semibold">{name}</span>
              <span className="text-brand-muted text-xs mt-0.5">{note}</span>
            </div>
          ))}
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-14 pl-6 border-l-2 border-brand-primary text-2xl md:text-3xl italic text-white leading-snug max-w-2xl"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Hardware fragmentation is our tailwind. Sweetpea competes with Siri, not
          with us.
        </motion.blockquote>
      </div>
    </section>
  );
}
