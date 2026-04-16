"use client";

import { motion } from "framer-motion";

/**
 * Two stacked rectangles with a labeled gap between them.
 * Visualizes "moonwav runs *above* your existing show."
 */
export default function LayerAbove() {
  const W = 560;
  const H = 260;

  return (
    <div className="w-full max-w-[560px] mx-auto">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="moonwav sits as a discovery layer above your show"
      >
        {/* TOP LAYER: moonwav (filled, active) */}
        <motion.g
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <rect
            x="40"
            y="22"
            width="480"
            height="72"
            rx="6"
            fill="rgb(140 77 242 / 0.12)"
            stroke="rgb(140 77 242)"
            strokeWidth="1.2"
          />
          <text
            x={W / 2}
            y="64"
            textAnchor="middle"
            fill="white"
            fontSize="28"
            fontStyle="italic"
            fontFamily="Georgia, serif"
          >
            moonwav
          </text>
          <text
            x={W / 2}
            y="84"
            textAnchor="middle"
            fill="rgb(166 115 255)"
            fontSize="10"
            letterSpacing="0.22em"
          >
            DISCOVERY LAYER
          </text>
        </motion.g>

        {/* GAP: labeled transition */}
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Vertical connectors on left and right */}
          <line x1="120" y1="94" x2="120" y2="166" stroke="rgb(38 25 127)" strokeWidth="1" strokeDasharray="3 4" />
          <line x1="440" y1="94" x2="440" y2="166" stroke="rgb(38 25 127)" strokeWidth="1" strokeDasharray="3 4" />

          {/* Arrow pointing down (flow from discovery → show) */}
          <line
            x1={W / 2}
            y1="108"
            x2={W / 2}
            y2="152"
            stroke="rgb(166 115 255 / 0.6)"
            strokeWidth="1"
          />
          <path
            d={`M ${W / 2 - 5} 148 L ${W / 2} 156 L ${W / 2 + 5} 148`}
            fill="none"
            stroke="rgb(166 115 255 / 0.6)"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Label to the side of the arrow */}
          <text
            x={W / 2 + 18}
            y="135"
            fill="rgb(148 163 184)"
            fontSize="11"
            fontStyle="italic"
            fontFamily="Georgia, serif"
          >
            dive deeper
          </text>
        </motion.g>

        {/* BOTTOM LAYER: your show (muted, outline only) */}
        <motion.g
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <rect
            x="40"
            y="166"
            width="480"
            height="72"
            rx="6"
            fill="none"
            stroke="rgb(148 163 184 / 0.4)"
            strokeWidth="1"
          />
          <text
            x={W / 2}
            y="208"
            textAnchor="middle"
            fill="rgb(226 232 240)"
            fontSize="20"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
          >
            Your show
          </text>
          <text
            x={W / 2}
            y="228"
            textAnchor="middle"
            fill="rgb(148 163 184 / 0.7)"
            fontSize="10"
            letterSpacing="0.22em"
          >
            APPLE · SPOTIFY · YOUR RSS
          </text>
        </motion.g>
      </svg>
    </div>
  );
}
