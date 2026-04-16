"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Node = { label: string; sub: string };

/**
 * Three nodes on a dashed circle with directional arcs between them.
 * Used to visualize the Habit → Signal → Companion flywheel.
 *
 * The dashed background circle rotates subtly with scroll — no more than
 * ~10° total range, so the motion feels like the wheel is turning
 * rather than spinning.
 */
export default function FlywheelDiagram({
  nodes,
}: {
  nodes: [Node, Node, Node];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const wheelRotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  // Layout: canvas 480x480, center (240, 240), radius 140.
  // Nodes at 90° (top), 210° (bottom-left), 330° (bottom-right).
  const size = 480;
  const c = size / 2;
  const r = 140;

  const angles = [-90, 150, 30]; // degrees, starting at top, clockwise
  const pos = angles.map((deg) => {
    const rad = (deg * Math.PI) / 180;
    return { x: c + r * Math.cos(rad), y: c + r * Math.sin(rad) };
  });

  // Arc from node i to node i+1 along the circle (clockwise)
  const arcPath = (fromIdx: number, toIdx: number) => {
    // Shrink endpoints slightly so arrows don't overlap node circles
    const start = pos[fromIdx];
    const end = pos[toIdx];
    const shrink = 26; // node visual radius + breathing room
    const startAngle = (angles[fromIdx] * Math.PI) / 180;
    const endAngle = (angles[toIdx] * Math.PI) / 180;
    const sx = c + r * Math.cos(startAngle + shrink / r);
    const sy = c + r * Math.sin(startAngle + shrink / r);
    const ex = c + r * Math.cos(endAngle - shrink / r);
    const ey = c + r * Math.sin(endAngle - shrink / r);
    return `M ${sx} ${sy} A ${r} ${r} 0 0 1 ${ex} ${ey}`;
  };

  // Label offset radius — labels sit outside the circle
  const labelR = r + 52;
  const labelPos = angles.map((deg) => {
    const rad = (deg * Math.PI) / 180;
    return { x: c + labelR * Math.cos(rad), y: c + labelR * Math.sin(rad) };
  });

  return (
    <div ref={containerRef} className="w-full max-w-[480px] mx-auto">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full h-auto"
        role="img"
        aria-label="Flywheel: habit produces signal produces companion"
      >
        <defs>
          <marker
            id="flywheel-arrow"
            viewBox="0 0 10 10"
            refX="7"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto"
          >
            <path d="M 0 1 L 8 5 L 0 9 Z" fill="rgb(140 77 242)" />
          </marker>
        </defs>

        {/* Dashed background circle — rotates subtly with scroll */}
        <motion.circle
          cx={c}
          cy={c}
          r={r}
          fill="none"
          stroke="rgb(38 25 127 / 0.8)"
          strokeWidth="1"
          strokeDasharray="2 8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          style={{
            rotate: wheelRotate,
            transformOrigin: `${c}px ${c}px`,
            transformBox: "fill-box" as unknown as undefined,
          }}
        />

        {/* Directional arcs */}
        {[
          arcPath(0, 2),
          arcPath(2, 1),
          arcPath(1, 0),
        ].map((d, i) => (
          <motion.path
            key={i}
            d={d}
            fill="none"
            stroke="rgb(140 77 242)"
            strokeWidth="1.5"
            strokeLinecap="round"
            markerEnd="url(#flywheel-arrow)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, delay: 0.3 + i * 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}

        {/* Nodes: soft ring + solid core */}
        {pos.map((p, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
          >
            <circle cx={p.x} cy={p.y} r="22" fill="rgb(5 5 8)" stroke="rgb(140 77 242)" strokeWidth="1" />
            <circle cx={p.x} cy={p.y} r="5" fill="rgb(140 77 242)" />
          </motion.g>
        ))}

        {/* Labels */}
        {labelPos.map((p, i) => (
          <motion.g
            key={`label-${i}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 1.0 + i * 0.1 }}
          >
            <text
              x={p.x}
              y={p.y - 6}
              textAnchor="middle"
              fill="white"
              fontSize="18"
              fontStyle="italic"
              fontFamily="Georgia, serif"
            >
              {nodes[i].label}
            </text>
            <text
              x={p.x}
              y={p.y + 14}
              textAnchor="middle"
              fill="rgb(148 163 184)"
              fontSize="11"
              letterSpacing="0.15em"
            >
              {nodes[i].sub.toUpperCase()}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
