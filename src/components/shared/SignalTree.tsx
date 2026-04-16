"use client";

import { motion } from "framer-motion";

/**
 * Tree-of-Life-inspired node graph. Ten nodes, twenty-two paths,
 * arranged in the classical Sephirot layout (three pillars, four tiers).
 *
 * We read it vertically: raw signal at the bottom (Malkuth) rising
 * through middle tiers (Yesod, Tiferet, etc.) to the companion at top
 * (Keter). Nodes draw in from bottom to top as the section comes into
 * view — visual analog of signal propagating upward.
 *
 * Labels sit on the right margin as small italic-Georgia markers,
 * tying the mystical layout to moonwav's Wedge → Bridge → Companion.
 */

// Canvas in SVG units
const W = 440;
const H = 720;
const cx = W / 2;
const pillarOffset = 110;

type Node = { id: number; x: number; y: number };

const NODES: Node[] = [
  { id: 1, x: cx, y: 70 }, // Keter (crown) — Companion destination
  { id: 2, x: cx + pillarOffset, y: 150 }, // Chokmah
  { id: 3, x: cx - pillarOffset, y: 150 }, // Binah
  { id: 4, x: cx + pillarOffset, y: 300 }, // Chesed
  { id: 5, x: cx - pillarOffset, y: 300 }, // Gevurah
  { id: 6, x: cx, y: 375 }, // Tiferet — beauty/center
  { id: 7, x: cx + pillarOffset, y: 480 }, // Netzach
  { id: 8, x: cx - pillarOffset, y: 480 }, // Hod
  { id: 9, x: cx, y: 570 }, // Yesod — foundation
  { id: 10, x: cx, y: 650 }, // Malkuth — kingdom / raw signal
];

// 22 classical paths (not all drawn — selecting the 22 of the Tree of Life)
const PATHS: [number, number][] = [
  [1, 2], [1, 3], [1, 6],
  [2, 3], [2, 4], [2, 6],
  [3, 5], [3, 6],
  [4, 5], [4, 6], [4, 7],
  [5, 6], [5, 8],
  [6, 7], [6, 8], [6, 9],
  [7, 8], [7, 9], [7, 10],
  [8, 9], [8, 10],
  [9, 10],
];

const TIER_LABELS = [
  { y: 70, label: "companion", sublabel: "destination" },
  { y: 375, label: "bridge", sublabel: "next" },
  { y: 650, label: "wedge", sublabel: "today" },
];

function nodeById(id: number) {
  return NODES.find((n) => n.id === id)!;
}

export default function SignalTree() {
  return (
    <div className="w-full max-w-[440px] mx-auto">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Signal tree — ten nodes ascending from wedge to companion"
      >
        {/* Paths — drawn in from bottom-up timing */}
        {PATHS.map(([a, b], i) => {
          const na = nodeById(a);
          const nb = nodeById(b);
          // Bottom-up timing: compute delay from the LOWER node's y position
          const lowerY = Math.max(na.y, nb.y);
          const delay = (1 - lowerY / H) * 1.4;
          return (
            <motion.line
              key={i}
              x1={na.x}
              y1={na.y}
              x2={nb.x}
              y2={nb.y}
              stroke="rgb(38 25 127 / 0.9)"
              strokeWidth="0.8"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                delay: 0.2 + delay * 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          );
        })}

        {/* Nodes */}
        {NODES.map((node) => {
          const delay = (1 - node.y / H) * 1.2;
          const isTop = node.id === 1;
          const isBottom = node.id === 10;
          return (
            <motion.g
              key={node.id}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: 0.3 + delay * 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Soft halo */}
              <circle
                cx={node.x}
                cy={node.y}
                r={isTop || isBottom ? 22 : 16}
                fill="rgb(140 77 242 / 0.1)"
              />
              {/* Outer ring */}
              <circle
                cx={node.x}
                cy={node.y}
                r={isTop || isBottom ? 13 : 9}
                fill="rgb(5 5 8)"
                stroke="rgb(140 77 242)"
                strokeWidth="1"
              />
              {/* Inner dot */}
              <circle
                cx={node.x}
                cy={node.y}
                r={isTop || isBottom ? 4 : 2.5}
                fill="rgb(140 77 242)"
              />
            </motion.g>
          );
        })}

        {/* Tier labels on the right margin */}
        {TIER_LABELS.map((tier, i) => (
          <motion.g
            key={tier.label}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.6,
              delay: 0.6 + i * 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Connector dash */}
            <line
              x1={cx + pillarOffset + 30}
              y1={tier.y}
              x2={W - 80}
              y2={tier.y}
              stroke="rgb(38 25 127 / 0.6)"
              strokeWidth="0.5"
              strokeDasharray="2 3"
            />
            <text
              x={W - 10}
              y={tier.y + 4}
              textAnchor="end"
              fill="white"
              fontSize="16"
              fontStyle="italic"
              fontFamily="Georgia, serif"
            >
              {tier.label}
            </text>
            <text
              x={W - 10}
              y={tier.y + 20}
              textAnchor="end"
              fill="rgb(148 163 184 / 0.8)"
              fontSize="9"
              letterSpacing="0.22em"
            >
              {tier.sublabel.toUpperCase()}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
