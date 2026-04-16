"use client";

import { motion } from "framer-motion";

type Stage = { label: string; status: string };

/**
 * Horizontal progression: three nodes on a line, with line weight
 * shifting from solid → dashed as time moves right.
 */
export default function StageArc({ stages }: { stages: [Stage, Stage, Stage] }) {
  // Canvas: 720 wide, 180 tall, stages at 12%, 50%, 88% of width.
  const W = 720;
  const H = 180;
  const Y = 90;
  const positions = [W * 0.12, W * 0.5, W * 0.88];

  return (
    <div className="w-full max-w-[720px] mx-auto">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Wedge to bridge to companion progression"
      >
        {/* Line segments between nodes: left solid → middle dashed → right dashed */}
        <motion.line
          x1={positions[0]}
          y1={Y}
          x2={positions[1]}
          y2={Y}
          stroke="rgb(140 77 242)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.line
          x1={positions[1]}
          y1={Y}
          x2={positions[2]}
          y2={Y}
          stroke="rgb(166 115 255 / 0.6)"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Nodes: filled / half / outline */}
        {positions.map((x, i) => {
          const variant = i === 0 ? "filled" : i === 1 ? "half" : "outline";
          return (
            <motion.g
              key={i}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
            >
              <circle
                cx={x}
                cy={Y}
                r="18"
                fill="rgb(5 5 8)"
                stroke={
                  variant === "outline"
                    ? "rgb(148 163 184 / 0.5)"
                    : "rgb(140 77 242)"
                }
                strokeWidth="1"
              />
              <circle
                cx={x}
                cy={Y}
                r="5"
                fill={
                  variant === "filled"
                    ? "rgb(140 77 242)"
                    : variant === "half"
                    ? "rgb(166 115 255 / 0.6)"
                    : "rgb(148 163 184 / 0.3)"
                }
              />

              {/* Label + status, stacked below the node */}
              <text
                x={x}
                y={Y + 44}
                textAnchor="middle"
                fill="white"
                fontSize="20"
                fontStyle="italic"
                fontFamily="Georgia, serif"
              >
                {stages[i].label}
              </text>
              <text
                x={x}
                y={Y + 68}
                textAnchor="middle"
                fill="rgb(148 163 184)"
                fontSize="10"
                letterSpacing="0.22em"
              >
                {stages[i].status.toUpperCase()}
              </text>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}
