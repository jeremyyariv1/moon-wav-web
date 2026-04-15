import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#050508",
          surface: "#0d0b2e",
          card: "#140f4d",
          border: "#26197f",
          primary: "#8c4df2",
          light: "#a673ff",
          accent: "#ccb3ff",
          muted: "#475569",
          subtle: "#94a3b8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(ellipse 90% 60% at 50% -10%, rgba(140,77,242,0.22) 0%, transparent 65%)",
        "card-shine":
          "linear-gradient(135deg, rgba(140,77,242,0.1) 0%, rgba(204,179,255,0.04) 100%)",
      },
      keyframes: {
        waveBar: {
          "0%, 100%": { height: "4px", opacity: "0.4" },
          "50%": { height: "var(--bar-h, 28px)", opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 24px rgba(140,77,242,0.15)" },
          "50%": { boxShadow: "0 0 48px rgba(140,77,242,0.35)" },
        },
      },
      animation: {
        waveBar: "waveBar var(--bar-dur, 1.6s) ease-in-out infinite var(--bar-delay, 0s)",
        fadeUp: "fadeUp 0.7s ease both",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
