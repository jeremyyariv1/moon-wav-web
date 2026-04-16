"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Stage = { label: string; note: string };

/**
 * Five tapering trapezoids forming a funnel. Label to the right of each stage.
 * Each trapezoid's fill saturates as the user scrolls past it —
 * the eye literally moves down the funnel as the stages brighten.
 */
export default function FunnelShape({
  stages,
}: {
  stages: [Stage, Stage, Stage, Stage, Stage];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Five fill-opacity ramps, each tied to a different scroll window.
  // Declared individually (not in a loop) to respect React's hooks rules.
  const o0 = useTransform(scrollYProgress, [0.15, 0.4], [0.08, 0.32]);
  const o1 = useTransform(scrollYProgress, [0.22, 0.47], [0.08, 0.34]);
  const o2 = useTransform(scrollYProgress, [0.29, 0.54], [0.08, 0.36]);
  const o3 = useTransform(scrollYProgress, [0.36, 0.61], [0.08, 0.38]);
  const o4 = useTransform(scrollYProgress, [0.43, 0.68], [0.08, 0.42]);
  const fillOpacities = [o0, o1, o2, o3, o4];

  const W = 640;
  const H = 440;
  const funnelWidth = 300;
  const funnelX = 20;
  const stageH = 72;
  const gap = 6;

  const widthAt = (i: number) => {
    const t = i / stages.length;
    return funnelWidth * (1 - t * 0.7);
  };

  return (
    <div ref={containerRef} className="w-full max-w-[640px] mx-auto">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Funnel from cold ear to subscriber"
      >
        {stages.map((stage, i) => {
          const yTop = i * (stageH + gap);
          const wTop = widthAt(i);
          const wBot = widthAt(i + 1);
          const xTopL = funnelX + (funnelWidth - wTop) / 2;
          const xTopR = xTopL + wTop;
          const xBotL = funnelX + (funnelWidth - wBot) / 2;
          const xBotR = xBotL + wBot;

          const d = `M ${xTopL} ${yTop} L ${xTopR} ${yTop} L ${xBotR} ${
            yTop + stageH
          } L ${xBotL} ${yTop + stageH} Z`;

          const midY = yTop + stageH / 2;
          const labelX = funnelX + funnelWidth + 40;

          return (
            <motion.g
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: 0.15 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.path
                d={d}
                fill="rgb(140 77 242)"
                stroke="rgb(140 77 242)"
                strokeWidth="1.2"
                style={{ fillOpacity: fillOpacities[i] }}
              />

              {/* Stage number inside the trapezoid */}
              <text
                x={funnelX + funnelWidth / 2}
                y={midY + 5}
                textAnchor="middle"
                fill="rgb(166 115 255)"
                fontSize="13"
                fontStyle="italic"
                fontFamily="Georgia, serif"
              >
                0{i + 1}
              </text>

              {/* Connector line from funnel edge to label */}
              <line
                x1={xTopR > xBotR ? xTopR : xBotR}
                y1={midY}
                x2={labelX - 12}
                y2={midY}
                stroke="rgb(38 25 127 / 0.8)"
                strokeWidth="1"
                strokeDasharray="2 3"
              />

              {/* Label */}
              <text
                x={labelX}
                y={midY - 4}
                fill="white"
                fontSize="16"
                fontFamily="ui-sans-serif, system-ui, sans-serif"
                fontWeight="600"
              >
                {stage.label}
              </text>
              <text
                x={labelX}
                y={midY + 14}
                fill="rgb(148 163 184)"
                fontSize="12"
                fontFamily="ui-sans-serif, system-ui, sans-serif"
              >
                {stage.note}
              </text>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}
