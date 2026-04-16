"use client";

import { motion } from "framer-motion";

/**
 * Golden-angle phyllotaxis spiral — the seed pattern found in
 * sunflowers and pinecones. 1200 dots radiate from a center,
 * each placed at i × 137.508°.
 *
 * Center dot (highlighted) = YOUR show.
 * Every other dot = one of the other 3,999,999 shows.
 *
 * The natural geometry does the emotional work: you can see at a
 * glance how small one show is in the crowd, and how deliberately
 * the crowd is arranged — not random, but structured by a law.
 */

const DOT_COUNT = 1200;
const GOLDEN_ANGLE = 137.5077640500378 * (Math.PI / 180);
const W = 440;
const H = 440;
const CX = W / 2;
const CY = H / 2;
const SPACING = 5.6;

type Dot = { x: number; y: number; r: number; isCenter: boolean };

function computeDots(): Dot[] {
  const dots: Dot[] = [];
  for (let i = 0; i < DOT_COUNT; i++) {
    const radius = SPACING * Math.sqrt(i);
    const theta = i * GOLDEN_ANGLE;
    const x = CX + radius * Math.cos(theta);
    const y = CY + radius * Math.sin(theta);
    dots.push({ x, y, r: radius, isCenter: i === 0 });
  }
  return dots;
}

export default function PhyllotaxisShows() {
  const dots = computeDots();
  const maxRadius = Math.max(...dots.map((d) => d.r));

  return (
    <div className="w-full max-w-[440px] mx-auto">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Phyllotaxis spiral: your show among four million"
      >
        {/* Ambient radial glow behind the spiral */}
        <defs>
          <radialGradient id="phyllo-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgb(140 77 242)" stopOpacity="0.15" />
            <stop offset="60%" stopColor="rgb(140 77 242)" stopOpacity="0.03" />
            <stop offset="100%" stopColor="rgb(140 77 242)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx={CX} cy={CY} r={maxRadius} fill="url(#phyllo-glow)" />

        {/* Outer dots (the 4M crowd) — render as a single group so the fade is cheap */}
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {dots.map((d, i) =>
            d.isCenter ? null : (
              <circle
                key={i}
                cx={d.x}
                cy={d.y}
                // Shrink dots toward the edge — gives the spiral a natural tapering
                r={Math.max(0.55, 1.1 - (d.r / maxRadius) * 0.55)}
                fill="rgb(148 163 184)"
                fillOpacity={Math.max(0.15, 0.55 - (d.r / maxRadius) * 0.4)}
              />
            )
          )}
        </motion.g>

        {/* Center highlight ring */}
        <motion.circle
          cx={CX}
          cy={CY}
          r="14"
          fill="none"
          stroke="rgb(140 77 242 / 0.4)"
          strokeWidth="0.8"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            delay: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {/* Center dot (your show) */}
        <motion.circle
          cx={CX}
          cy={CY}
          r="3.2"
          fill="rgb(140 77 242)"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            delay: 1.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {/* Leader line + label for center */}
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 1.9 }}
        >
          <line
            x1={CX}
            y1={CY - 16}
            x2={CX}
            y2={CY - 48}
            stroke="rgb(140 77 242 / 0.6)"
            strokeWidth="0.8"
          />
          <text
            x={CX}
            y={CY - 58}
            textAnchor="middle"
            fill="white"
            fontSize="14"
            fontStyle="italic"
            fontFamily="Georgia, serif"
          >
            your show
          </text>
        </motion.g>
      </svg>
    </div>
  );
}
