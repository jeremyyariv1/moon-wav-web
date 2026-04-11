"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const BENEFITS = [
  {
    icon: "📊",
    title: "Clip-level analytics",
    desc: "See plays, likes, skips, and Dive Deeper taps per clip.",
  },
  {
    icon: "🎯",
    title: "Algorithmic distribution",
    desc: "Reach listeners who didn't know they needed you — no followers required.",
  },
  {
    icon: "📻",
    title: "The audio For You page",
    desc: "The discoverability mechanism that podcasts have never had.",
  },
];

export default function CreatorSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="creators" ref={ref} className="py-24 bg-brand-surface/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-3xl border border-brand-primary/25 bg-gradient-to-br from-brand-primary/10 via-brand-card to-brand-accent/5 overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Badge */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase tracking-widest text-brand-primary font-semibold mb-5"
            >
              For creators
            </motion.p>

            {/* Pull quote */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl md:text-4xl font-bold text-white leading-tight mb-4 max-w-2xl"
            >
              &ldquo;Give us your best 90 seconds. We&apos;ll find you listeners who didn&apos;t
              know they needed you.&rdquo;
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-brand-subtle text-base mb-10 max-w-xl"
            >
              MoonWav gives podcast producers and musicians the For You page that audio has never
              had — algorithmic reach to cold audiences, zero follower count required.
            </motion.p>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-5 mb-10">
              {BENEFITS.map(({ icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                  className="flex flex-col gap-2"
                >
                  <span className="text-2xl">{icon}</span>
                  <h3 className="text-sm font-semibold text-white">{title}</h3>
                  <p className="text-brand-subtle text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-primary hover:bg-brand-light transition-colors text-white font-semibold text-sm shadow-lg shadow-brand-primary/30"
              >
                Apply for early creator access
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
