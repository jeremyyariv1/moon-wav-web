"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionTag from "@/components/shared/SectionTag";

const BENEFITS = [
  {
    title: "Reach without followers",
    desc: "From clip one, what compounds is performance — not subscriber count. The algorithm doesn&apos;t care if it&apos;s your first show or your hundredth.",
  },
  {
    title: "Free distribution",
    desc: "No posting schedule. No caption-writing. No ad spend. The feed runs every day whether you&apos;re online or not.",
  },
  {
    title: "Your audience stays yours",
    desc: "Listeners land back on your full episode in Apple, Spotify, your RSS. Your platform, your show, your subscriber count. We don&apos;t own your audience — we hand it to you.",
  },
  {
    title: "Clip-level analytics",
    desc: "Plays, skips, likes, conversion per clip. You learn which 90 seconds work — and you can engineer the next ones around what does.",
  },
];

export default function WhatYouGet() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="benefits" ref={ref} className="py-28 md:py-36 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-7 flex justify-center"
        >
          <SectionTag number="05" label="What you get" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white mb-16 text-center max-w-2xl mx-auto"
        >
          Free reach. Real data. Your audience stays yours.
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-5">
          {BENEFITS.map(({ title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="rounded-2xl border border-brand-border bg-brand-card/40 p-7 flex flex-col gap-3"
            >
              <h3 className="text-white font-semibold leading-snug">{title}</h3>
              <p
                className="text-brand-subtle text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: desc }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
