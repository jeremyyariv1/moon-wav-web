"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const TIMES = [
  {
    label: "Early AM",
    time: "5–8 AM",
    icon: "🌙",
    bg: "from-indigo-950/60 to-violet-950/30",
    accent: "text-indigo-300",
    border: "border-indigo-800/40",
    content: "Weather + calendar briefing, overnight headlines, gentle wake-up content",
  },
  {
    label: "Morning",
    time: "8–11 AM",
    icon: "🌅",
    bg: "from-orange-950/60 to-amber-950/30",
    accent: "text-amber-300",
    border: "border-amber-800/40",
    content: "Subreddit catch-ups, trending discussions, quick interesting facts",
  },
  {
    label: "Midday",
    time: "11 AM–2 PM",
    icon: "☀️",
    bg: "from-yellow-950/60 to-orange-950/30",
    accent: "text-yellow-300",
    border: "border-yellow-800/40",
    content: "Creator clips, music discovery, self-improvement, motivation",
  },
  {
    label: "Evening",
    time: "5–9 PM",
    icon: "🌆",
    bg: "from-rose-950/60 to-purple-950/30",
    accent: "text-rose-300",
    border: "border-rose-800/40",
    content: "Longer pieces, deeper dives, mindfulness, wind-down content",
  },
  {
    label: "Late Night",
    time: "9 PM+",
    icon: "🌌",
    bg: "from-slate-950/80 to-brand-bg/60",
    accent: "text-slate-300",
    border: "border-slate-700/40",
    content: "Ambient, reflective, sleep-friendly — or catch up on what you missed",
  },
];

export default function TimeOfDay() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState(2); // Midday default

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-widest text-brand-primary font-semibold mb-3">
            Time-of-day intelligence
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            The feed reshapes itself{" "}
            <span className="bg-gradient-to-r from-brand-light to-brand-accent bg-clip-text text-transparent">
              around your day
            </span>
          </h2>
          <p className="text-brand-subtle text-base mt-4 max-w-md mx-auto">
            Different content at different hours. MoonWav knows what you need before you do.
          </p>
        </motion.div>

        {/* Time tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap gap-2 justify-center mb-6"
        >
          {TIMES.map(({ label, icon }, i) => (
            <button
              key={label}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                active === i
                  ? "bg-brand-primary text-white border-brand-primary shadow-lg shadow-brand-primary/25"
                  : "bg-brand-surface border-brand-border text-brand-subtle hover:text-white"
              }`}
            >
              <span>{icon}</span>
              {label}
            </button>
          ))}
        </motion.div>

        {/* Active card */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className={`rounded-2xl border ${TIMES[active].border} bg-gradient-to-br ${TIMES[active].bg} p-8 text-center`}
        >
          <p className="text-5xl mb-4">{TIMES[active].icon}</p>
          <p className={`text-sm font-semibold uppercase tracking-widest mb-2 ${TIMES[active].accent}`}>
            {TIMES[active].label} · {TIMES[active].time}
          </p>
          <p className="text-white text-lg font-medium max-w-md mx-auto leading-relaxed">
            {TIMES[active].content}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
