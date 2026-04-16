"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionTag from "@/components/shared/SectionTag";
import StageArc from "@/components/shared/StageArc";

const STAGES = [
  {
    label: "Wedge",
    status: "Today",
    headline: "Personalized short-form audio feed.",
    body: "Earn daily ear time. Every interaction becomes preference data nobody else is accumulating.",
  },
  {
    label: "Bridge",
    status: "Next",
    headline: "Briefings extend the feed into assistant territory.",
    body: "Calendar, email, messages synthesized into the feed. Same UX. The handoff from content data to assistant data.",
  },
  {
    label: "Companion",
    status: "Destination",
    headline: "The ambient AI in your ear.",
    body: "Push-based, context-aware, always present. Powered by behavioral data no model can cold-start.",
  },
];

const BUILT = [
  "Native iOS app — player, profile, creator upload, lock-screen controls",
  "FastAPI backend on Railway — feed, interactions, admin, content pipeline",
  "Recommendation engine v1 — heuristic scoring + diversity + time-of-day weighting",
  "Personalized briefing service — weather, calendar, headlines, on-this-day",
];

const NEXT = [
  "TestFlight closed beta — campus cohort first",
  "Recommendation tuning against early-cohort signal",
  "Briefing expansion: email triage, message digests",
  "First 50–100 podcasters onboarded",
];

export default function Plan() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="plan" ref={ref} className="py-28 md:py-36 px-6 bg-brand-surface/30 border-y border-brand-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-7"
        >
          <SectionTag number="06" label="The plan" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white mb-4"
        >
          Wedge → Bridge → Companion.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-brand-subtle leading-relaxed max-w-2xl mb-16"
        >
          Each stage is a standalone business. Each stage builds the data the
          next one needs.
        </motion.p>

        {/* Arc: visual progression */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mb-16"
        >
          <StageArc
            stages={[
              { label: "Wedge", status: "Today" },
              { label: "Bridge", status: "Next" },
              { label: "Companion", status: "Destination" },
            ]}
          />
        </motion.div>

        {/* Three stages */}
        <div className="grid md:grid-cols-3 gap-5 mb-20">
          {STAGES.map(({ label, status, headline, body }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              className="rounded-2xl border border-brand-border bg-brand-card/50 p-7 flex flex-col gap-3"
            >
              <div className="flex items-baseline justify-between">
                <span
                  className="text-2xl italic text-brand-light"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {label}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-brand-muted font-semibold">
                  {status}
                </span>
              </div>
              <p className="text-white font-semibold leading-snug">{headline}</p>
              <p className="text-brand-subtle text-sm leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </div>

        {/* Where we are */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="grid md:grid-cols-2 gap-5"
        >
          <div className="rounded-2xl border border-brand-primary/30 bg-gradient-to-br from-brand-primary/10 to-brand-card/50 p-7">
            <p className="text-[10px] uppercase tracking-[0.22em] text-brand-light font-semibold mb-4">
              Built today
            </p>
            <ul className="space-y-2.5">
              {BUILT.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-brand-subtle leading-relaxed">
                  <span className="text-brand-primary mt-0.5 shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-brand-border bg-brand-card/40 p-7">
            <p className="text-[10px] uppercase tracking-[0.22em] text-brand-light font-semibold mb-4">
              Next 6–12 months
            </p>
            <ul className="space-y-2.5">
              {NEXT.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-brand-subtle leading-relaxed">
                  <span className="text-brand-light mt-0.5 shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-16 pl-6 border-l-2 border-brand-primary text-2xl md:text-3xl italic text-white leading-snug max-w-2xl"
          style={{ fontFamily: "Georgia, serif" }}
        >
          The wedge is a real business. The companion is the upside.
        </motion.blockquote>
      </div>
    </section>
  );
}
