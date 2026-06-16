// UK Type 2 (Mennekes) EV charging connector — simplified geometric SVG
interface EvConnectorIconProps {
  size?: number;
  className?: string;
  color?: string;
}

export default function EvConnectorIcon({
  size = 24,
  className = "",
  color = "#0066FF",
}: EvConnectorIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-label="EV Type 2 charging connector"
      role="img"
      className={className}
    >
      {/* Connector body — flat-top D-shape */}
      <path
        d="M5 12 C5 8 8 5 12 5 L20 5 C24 5 27 8 27 12 L27 22 C27 26 24 28 20 28 L12 28 C8 28 5 26 5 22 Z"
        fill={color}
        opacity="0.12"
        stroke={color}
        strokeWidth="1.5"
      />
      {/* Top flat edge */}
      <line x1="5" y1="11" x2="27" y2="11" stroke={color} strokeWidth="1.5" />

      {/* 7 pin layout — Type 2 pattern */}
      {/* Top row: 3 pins */}
      <circle cx="11" cy="16" r="1.6" fill={color} />
      <circle cx="16" cy="14.5" r="1.6" fill={color} />
      <circle cx="21" cy="16" r="1.6" fill={color} />

      {/* Middle row: 2 pins (phase + earth) */}
      <circle cx="12.5" cy="20" r="1.6" fill={color} />
      <circle cx="19.5" cy="20" r="1.6" fill={color} />

      {/* Bottom: CP + PP pilot pins (smaller) */}
      <circle cx="16" cy="23" r="1.1" fill={color} opacity="0.8" />

      {/* Cable / handle bar */}
      <rect x="13" y="28" width="6" height="2.5" rx="1" fill={color} />
    </svg>
  );
}
