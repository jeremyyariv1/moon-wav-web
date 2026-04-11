"use client";

// Heights and durations are deterministic (index-based) to avoid hydration mismatch
const BAR_COUNT = 48;

function getBarVars(i: number): React.CSSProperties {
  const h = Math.abs(Math.sin(i * 0.83 + 0.4)) * 42 + 10;
  const dur = 1.1 + Math.abs(Math.cos(i * 1.3)) * 1.0;
  const delay = (i * 0.065) % 2.2;
  return {
    "--bar-h": `${h}px`,
    "--bar-dur": `${dur.toFixed(2)}s`,
    "--bar-delay": `${delay.toFixed(2)}s`,
  } as React.CSSProperties;
}

interface Props {
  className?: string;
  barClass?: string;
}

export default function WaveformAnimation({ className = "", barClass = "" }: Props) {
  return (
    <div
      className={`flex items-center justify-center gap-[3px] ${className}`}
      aria-hidden="true"
    >
      {Array.from({ length: BAR_COUNT }, (_, i) => (
        <span
          key={i}
          className={`wave-bar flex-shrink-0 ${barClass}`}
          style={getBarVars(i)}
        />
      ))}
    </div>
  );
}
