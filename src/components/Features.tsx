"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FEATURES = [
  {
    title: "Contextual Morning Briefing",
    description:
      "Weather, Google Calendar sync, overnight news, and subreddit catch-ups — delivered in audio before you're fully awake.",
    icon: "☀️",
    gradient: "from-amber-500/15 to-orange-500/5",
    border: "border-amber-500/20",
  },
  {
    title: "Reddit Sentiment Digests",
    description:
      "Follow subreddits. Hear AI recaps of top posts, dominant takes, funniest comments, and where the community is split.",
    icon: "📡",
    gradient: "from-orange-500/15 to-red-500/5",
    border: "border-orange-500/20",
  },
  {
    title: "Music & Creator Clips",
    description:
      "Podcast producers upload their best 90 seconds. Musicians preview new releases. Creators get a For You page for audio.",
    icon: "🎙️",
    gradient: "from-brand-primary/15 to-brand-accent/5",
    border: "border-brand-primary/20",
  },
  {
    title: "Breadth with Intentionality",
    description:
      "60–70% of clips match known preferences. 30–40% are deliberate exploration. New interest branches open with every like.",
    icon: "🔮",
    gradient: "from-violet-500/15 to-purple-500/5",
    border: "border-violet-500/20",
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="features" ref={ref} className="py-24 bg-brand-surface/30">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-brand-primary font-semibold mb-3">
            Core features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Built around your life,{" "}
            <span className="bg-gradient-to-r from-brand-light to-brand-accent bg-clip-text text-transparent">
              not your screen
            </span>
          </h2>
        </motion.div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {FEATURES.map(({ title, description, icon, gradient, border }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-2xl border ${border} bg-gradient-to-br ${gradient} bg-brand-card p-6 overflow-hidden group hover:border-opacity-60 transition-all`}
            >
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
              <p className="text-brand-subtle text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>

        {/* Dive Deeper callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-6 rounded-2xl border border-brand-primary/30 bg-gradient-to-r from-brand-primary/10 to-brand-accent/5 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4"
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-primary/20 border border-brand-primary/30 flex items-center justify-center text-brand-light text-xl">
            ↓
          </div>
          <div>
            <h3 className="text-base font-semibold text-white mb-1">The Dive Deeper Button</h3>
            <p className="text-brand-subtle text-sm leading-relaxed max-w-xl">
              The interaction that bridges short-form and long-form. Tap it on a Reddit digest →
              extended analysis. On a creator clip → full podcast episode. On a news summary → the
              deeper story. The app&apos;s highest-intent signal.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
