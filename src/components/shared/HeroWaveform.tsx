"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * A low-opacity horizontal waveform that sits behind the hero.
 * Three layered sine-harmonic curves. Ties to scroll: as the user
 * scrolls through the hero, the wave drifts upward and fades out.
 *
 * This is the signature visual element — audio made visible.
 * Intended to sit absolute inside a hero section.
 */
export default function HeroWaveform() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.9], [1, 0.7, 0]);

  const W = 1600;
  const H = 240;
  const mid = H / 2;
  const points = 220;

  const buildPath = (phase: number, ampMult: number, freq: number) => {
    let d = `M 0 ${mid}`;
    for (let i = 1; i <= points; i++) {
      const t = i / points;
      const x = t * W;
      // Edge taper so the line feels intentional, not random
      const envelope = Math.sin(t * Math.PI);
      const y =
        mid +
        envelope *
          ampMult *
          (Math.sin(t * Math.PI * freq + phase) * 32 +
            Math.sin(t * Math.PI * freq * 2.3 + phase) * 14 +
            Math.sin(t * Math.PI * freq * 4.9 + phase) * 5);
      d += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
    }
    return d;
  };

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="absolute inset-x-0 top-[52%] -translate-y-1/2 pointer-events-none"
      aria-hidden
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d={buildPath(0, 1, 8)}
          fill="none"
          stroke="rgb(166 115 255 / 0.35)"
          strokeWidth="0.9"
          strokeLinecap="round"
        />
        <path
          d={buildPath(1.4, 0.7, 6)}
          fill="none"
          stroke="rgb(140 77 242 / 0.25)"
          strokeWidth="0.7"
          strokeLinecap="round"
        />
        <path
          d={buildPath(2.6, 0.5, 11)}
          fill="none"
          stroke="rgb(204 179 255 / 0.22)"
          strokeWidth="0.5"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}
