"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const STEPS = [
  {
    n: "01",
    title: "Drop a clip",
    desc: "60–90 seconds from an episode you already shipped — the best moment, the spiciest take, the part that always lands in trailers.",
  },
  {
    n: "02",
    title: "The algorithm finds the right ears",
    desc: "Cold listeners who don't follow you yet hear it in their feed — ranked by what they actually like, not by follower count or chart position.",
  },
  {
    n: "03",
    title: "They go from clip to subscriber",
    desc: "A tap on Dive Deeper opens your full episode wherever you publish — Apple, Spotify, your RSS. Subscribers count where they always counted.",
  },
];

const BENEFITS = [
  {
    icon: "📣",
    title: "Top-of-funnel that runs every day",
    desc: "The feed surfaces your clip to listeners who've never heard of you. Free distribution, no posting schedule, no caption-writing.",
  },
  {
    icon: "🎯",
    title: "Reach without followers",
    desc: "You don't have to build an audience first and distribute second. From clip one, performance is what compounds — not subscriber count.",
  },
  {
    icon: "🔁",
    title: "A funnel that actually moves",
    desc: "Cold ear → liked clip → Dive Deeper → full episode → subscriber on your platform of choice. Every stage measured.",
  },
  {
    icon: "📊",
    title: "Clip-level analytics",
    desc: "Plays, skips, likes, dive-deepers per clip. You learn which 90 seconds convert — and you can engineer the next ones around what works.",
  },
];

const OBJECTIONS = [
  {
    q: "Won't this cannibalize my downloads?",
    a: "No. The clip lives on moonwav. The full episode lives wherever you publish it today. Dive Deeper drives listeners straight back to your distribution — Apple, Spotify, your RSS — where the download still counts. We're a top-of-funnel layer, not a replacement.",
  },
  {
    q: "Do I have to make new content?",
    a: "No. Pull 90 seconds from an episode you've already shipped. Treat the clip like the trailer you wish more people saw. Once a week, once an episode — the workflow is the same as making a social cut, with one less platform tax.",
  },
  {
    q: "What if my existing audience doesn't use moonwav?",
    a: "They don't have to. moonwav is for the listeners you don't have yet. Your existing fans keep listening wherever they listen — they're not who this is for. You're acquiring net-new ears, not migrating old ones.",
  },
];

export default function CreatorSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="creators" ref={ref} className="py-24 bg-brand-surface/30">
      <div className="max-w-5xl mx-auto px-6 flex flex-col gap-12">
        {/* HOOK CARD: Validate the problem + pull quote + reframe */}
        <div className="rounded-3xl border border-brand-primary/25 bg-gradient-to-br from-brand-primary/10 via-brand-card to-brand-accent/5 overflow-hidden">
          <div className="p-8 md:p-12">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase tracking-widest text-brand-primary font-semibold mb-5"
            >
              For podcasters
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white mb-5 max-w-2xl"
            >
              You make great episodes. The hard part is being found.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-brand-subtle text-lg leading-relaxed max-w-2xl"
            >
              Apple and Spotify reward shows that are already big. Social barely
              moves the dial. SEO doesn&apos;t index audio. The discovery layer
              podcasting deserves was never built — so most shows just stall at
              whatever ceiling their owned channels can reach.
            </motion.p>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-10 pl-6 border-l-2 border-brand-primary text-2xl md:text-3xl italic text-white leading-snug max-w-2xl font-bold"
              style={{ fontFamily: "Georgia, serif" }}
            >
              &ldquo;Give us your best 90 seconds. We&apos;ll find you listeners
              who didn&apos;t know they needed you.&rdquo;
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-brand-subtle text-base leading-relaxed mt-10 max-w-2xl"
            >
              <span className="italic" style={{ fontFamily: "Georgia, serif" }}>
                moonwav
              </span>{" "}
              isn&apos;t another podcast app. It&apos;s a top-of-funnel layer that
              runs <em>above</em> the show you already publish. Cold listeners
              discover you through the clip. Warm listeners follow it back to your
              full episode, in your existing distribution. You keep your platform,
              your monetization, your subscribers — and gain a discovery channel
              you&apos;ve never had.
            </motion.p>
          </div>
        </div>

        {/* HOW IT WORKS FOR YOU — 3 steps */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-[10px] uppercase tracking-[0.22em] text-brand-primary font-semibold mb-6"
          >
            How it works for you
          </motion.p>

          <div className="grid md:grid-cols-3 gap-5">
            {STEPS.map(({ n, title, desc }, i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.65 + i * 0.08 }}
                className="rounded-2xl border border-brand-border bg-brand-card/40 p-6 flex flex-col gap-3"
              >
                <span
                  className="text-xs italic text-brand-light"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {n}
                </span>
                <h3 className="text-white font-semibold leading-snug">
                  {title}
                </h3>
                <p className="text-brand-subtle text-sm leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FUNNEL STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.95 }}
        >
          <p className="text-[10px] uppercase tracking-[0.22em] text-brand-primary font-semibold mb-4">
            The funnel
          </p>
          <div className="flex flex-wrap items-center gap-2 md:gap-3 text-sm">
            {[
              "Cold ear",
              "Skip / like",
              "Dive deeper",
              "Full episode",
              "Subscriber",
            ].map((step, i, arr) => (
              <span key={step} className="flex items-center gap-2 md:gap-3">
                <span className="rounded-full border border-brand-border bg-brand-surface/60 px-3 py-1.5 text-white">
                  {step}
                </span>
                {i < arr.length - 1 && (
                  <span className="text-brand-primary">→</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>

        {/* BENEFITS */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1.05 }}
            className="text-[10px] uppercase tracking-[0.22em] text-brand-primary font-semibold mb-6"
          >
            What you get
          </motion.p>

          <div className="grid md:grid-cols-2 gap-5">
            {BENEFITS.map(({ icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.1 + i * 0.07 }}
                className="flex flex-col gap-2 rounded-xl border border-brand-border bg-brand-card/40 p-5"
              >
                <span className="text-2xl">{icon}</span>
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="text-brand-subtle text-sm leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* OBJECTIONS */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="text-[10px] uppercase tracking-[0.22em] text-brand-primary font-semibold mb-6"
          >
            What podcasters keep asking
          </motion.p>

          <div className="grid md:grid-cols-3 gap-5">
            {OBJECTIONS.map(({ q, a }, i) => (
              <motion.div
                key={q}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.45 + i * 0.08 }}
                className="rounded-2xl border border-brand-border bg-brand-card/40 p-6 flex flex-col gap-3"
              >
                <h3 className="text-white font-semibold leading-snug">{q}</h3>
                <p className="text-brand-subtle text-sm leading-relaxed">{a}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.7 }}
          className="rounded-3xl border border-brand-primary/30 bg-gradient-to-br from-brand-primary/15 to-brand-accent/5 p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <div className="max-w-md">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight">
              We&apos;re onboarding the first cohort of creators now.
            </h3>
            <p className="text-brand-subtle text-sm mt-2">
              Limited spots. Hands-on support. No platform fees during the preview.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-primary hover:bg-brand-light transition-colors text-white font-semibold text-sm shadow-lg shadow-brand-primary/30 self-start md:self-auto whitespace-nowrap"
          >
            Apply for early creator access
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
