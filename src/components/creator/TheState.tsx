"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionTag from "@/components/shared/SectionTag";
import PhyllotaxisShows from "@/components/shared/PhyllotaxisShows";

const FAILURES = [
  {
    name: "Apple Podcasts",
    line: "Charts reward shows that are already big. Discovery is editorial when it happens at all.",
  },
  {
    name: "Spotify",
    line: "Recommendations exist, but they help shows already winning. Most catalogs stay invisible.",
  },
  {
    name: "Social",
    line: "Drives a trickle if you have a TikTok-grade clip operation. Drives nothing if you don't.",
  },
  {
    name: "SEO",
    line: "Doesn't index audio. Your transcript is in the void.",
  },
  {
    name: "Word of mouth",
    line: "Real, valuable, and impossible to scale. The only thing that's ever consistently worked.",
  },
];

export default function TheState() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="state" ref={ref} className="py-28 md:py-36 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-7"
        >
          <SectionTag number="01" label="The state of play" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white mb-10"
        >
          Podcast discovery doesn&apos;t work.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-brand-subtle leading-relaxed max-w-2xl mb-16"
        >
          <p>
            Every podcaster has heard the same advice for a decade — be
            consistent, post on Instagram, ask for reviews. None of it works
            at scale. The medium never built a discovery layer because the
            open ecosystem made it everyone&apos;s problem and nobody&apos;s
            job.
          </p>
        </motion.div>

        {/* Display-scale stat moment + phyllotaxis visualization */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center"
        >
          <div className="border-l border-brand-border pl-6 md:pl-8">
            <p className="text-[10px] uppercase tracking-[0.28em] text-brand-muted mb-3">
              Apple Podcasts directory
            </p>
            <p
              className="text-7xl md:text-[8rem] italic font-bold text-white leading-[0.85] tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              4M
            </p>
            <p
              className="text-sm text-brand-subtle mt-3 italic max-w-xs"
              style={{ fontFamily: "Georgia, serif" }}
            >
              shows competing for one Browse page.
            </p>
          </div>

          <div className="w-full md:w-[440px]">
            <PhyllotaxisShows />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="rounded-2xl border border-brand-border bg-brand-card/40 overflow-hidden divide-y divide-brand-border"
        >
          {FAILURES.map(({ name, line }) => (
            <div key={name} className="px-6 py-4 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
              <span className="text-[10px] uppercase tracking-[0.22em] text-brand-light font-semibold md:w-32 shrink-0">
                {name}
              </span>
              <span className="text-brand-subtle text-sm leading-relaxed">
                {line}
              </span>
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
          The shows are good. The discovery isn&apos;t.
        </motion.blockquote>
      </div>
    </section>
  );
}
