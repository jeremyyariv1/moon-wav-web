"use client";

import { motion } from "framer-motion";

/**
 * Line-art iPhone containing an abstracted moonwav player.
 * Drawn entirely in SVG with 1px strokes. No fills except for
 * the waveform bars (brand-primary at low opacity).
 */
export default function PhoneOutline() {
  const W = 280;
  const H = 580;

  return (
    <motion.svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full max-w-[280px] h-auto mx-auto"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      role="img"
      aria-label="moonwav iPhone app — abstracted player view"
    >
      {/* Phone body outline */}
      <rect
        x="8"
        y="8"
        width={W - 16}
        height={H - 16}
        rx="36"
        fill="none"
        stroke="rgb(148 163 184 / 0.4)"
        strokeWidth="1"
      />

      {/* Inner screen frame */}
      <rect
        x="14"
        y="14"
        width={W - 28}
        height={H - 28}
        rx="30"
        fill="rgb(5 5 8)"
        stroke="rgb(38 25 127 / 0.5)"
        strokeWidth="0.5"
      />

      {/* Dynamic island */}
      <rect
        x={(W - 62) / 2}
        y="32"
        width="62"
        height="16"
        rx="8"
        fill="rgb(0 0 0)"
      />

      {/* Status: time right-aligned */}
      <text
        x={W - 44}
        y="28"
        fontSize="8"
        fill="rgb(148 163 184 / 0.8)"
        textAnchor="end"
      >
        9:41
      </text>

      {/* Top bar: wordmark + time of day */}
      <text
        x={W / 2}
        y="94"
        fontSize="17"
        fontStyle="italic"
        fontFamily="Georgia, serif"
        fill="white"
        textAnchor="middle"
      >
        moonwav
      </text>
      <text
        x={W / 2}
        y="110"
        fontSize="7"
        letterSpacing="0.22em"
        fill="rgb(148 163 184 / 0.7)"
        textAnchor="middle"
      >
        GOOD MORNING
      </text>

      {/* Soft divider */}
      <line
        x1="32"
        y1="142"
        x2={W - 32}
        y2="142"
        stroke="rgb(38 25 127 / 0.5)"
        strokeWidth="0.5"
      />

      {/* Category chip */}
      <rect
        x={(W - 90) / 2}
        y="168"
        width="90"
        height="22"
        rx="11"
        fill="none"
        stroke="rgb(140 77 242 / 0.5)"
        strokeWidth="0.8"
      />
      <text
        x={W / 2}
        y="184"
        fontSize="8"
        letterSpacing="0.2em"
        fill="rgb(166 115 255)"
        textAnchor="middle"
      >
        PSYCHOLOGY
      </text>

      {/* Now playing title */}
      <text
        x={W / 2}
        y="222"
        fontSize="12"
        fill="white"
        textAnchor="middle"
        fontWeight="600"
      >
        the psychology of
      </text>
      <text
        x={W / 2}
        y="240"
        fontSize="12"
        fill="white"
        textAnchor="middle"
        fontWeight="600"
      >
        habit formation
      </text>

      {/* Waveform */}
      <g transform={`translate(32, 320)`}>
        {Array.from({ length: 26 }, (_, i) => {
          const envelope = Math.sin((i / 25) * Math.PI);
          const base =
            Math.sin(i * 0.9) * 10 +
            Math.sin(i * 2.1 + 0.5) * 6 +
            Math.sin(i * 3.7) * 3;
          const h = Math.max(3, Math.abs(base) * envelope + 5);
          const x = i * 8;
          const isPlayed = i < 10;
          return (
            <rect
              key={i}
              x={x}
              y={-h}
              width="3"
              height={h * 2}
              rx="1.5"
              fill={
                isPlayed
                  ? "rgb(140 77 242 / 0.85)"
                  : "rgb(140 77 242 / 0.35)"
              }
            />
          );
        })}
      </g>

      {/* Progress bar */}
      <line
        x1="32"
        y1="388"
        x2={W - 32}
        y2="388"
        stroke="rgb(38 25 127 / 0.6)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="32"
        y1="388"
        x2={32 + (W - 64) * 0.38}
        y2="388"
        stroke="rgb(140 77 242)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Time labels */}
      <text x="34" y="408" fontSize="7" fill="rgb(148 163 184 / 0.7)">
        0:38
      </text>
      <text
        x={W - 34}
        y="408"
        fontSize="7"
        fill="rgb(148 163 184 / 0.7)"
        textAnchor="end"
      >
        -1:02
      </text>

      {/* Play button */}
      <circle
        cx={W / 2}
        cy="450"
        r="22"
        fill="none"
        stroke="rgb(140 77 242)"
        strokeWidth="1"
      />
      <path
        d={`M ${W / 2 - 5} 443 L ${W / 2 + 7} 450 L ${W / 2 - 5} 457 Z`}
        fill="rgb(140 77 242)"
      />

      {/* Four reaction buttons */}
      {[
        { x: W * 0.15, label: "dislike" },
        { x: W * 0.38, label: "like" },
        { x: W * 0.62, label: "save" },
        { x: W * 0.85, label: "deeper" },
      ].map(({ x, label }) => (
        <g key={label}>
          <circle
            cx={x}
            cy="510"
            r="11"
            fill="none"
            stroke="rgb(148 163 184 / 0.45)"
            strokeWidth="0.8"
          />
          <circle
            cx={x}
            cy="510"
            r="1.8"
            fill="rgb(148 163 184 / 0.7)"
          />
          <text
            x={x}
            y="536"
            fontSize="6.5"
            fill="rgb(148 163 184 / 0.7)"
            textAnchor="middle"
            letterSpacing="0.08em"
          >
            {label}
          </text>
        </g>
      ))}

      {/* Home indicator */}
      <rect
        x={(W - 90) / 2}
        y={H - 20}
        width="90"
        height="3"
        rx="1.5"
        fill="rgb(148 163 184 / 0.35)"
      />
    </motion.svg>
  );
}
