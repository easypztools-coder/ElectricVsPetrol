import { useId } from "react";

const NAVY = "#0B132B";
const BLUE = "#0066FF";

interface LogoMarkProps {
  size?: number | string;
  className?: string;
  title?: string;
}

export default function LogoMark({
  size = 48,
  className = "",
  title = "ElectricVsPetrol split-circle mark",
}: LogoMarkProps) {
  const uid = useId();
  // Sanitise: replace non-alphanumeric chars so the ID is valid in url() references
  const safe = uid.replace(/[^a-zA-Z0-9]/g, "");
  const lId = `${safe}l`;
  const rId = `${safe}r`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      role="img"
      aria-label={title}
      className={className}
    >
      <title>{title}</title>
      <defs>
        {/* Left-half clip (counterclockwise arc from top to bottom) */}
        <clipPath id={lId}>
          <path d="M32 2 A30 30 0 0 0 32 62 Z" />
        </clipPath>
        {/* Right-half clip (clockwise arc from top to bottom) */}
        <clipPath id={rId}>
          <path d="M32 2 A30 30 0 0 1 32 62 Z" />
        </clipPath>
      </defs>

      {/* ── Background halves ── */}
      <path d="M32 2 A30 30 0 0 0 32 62 Z" fill={BLUE} />
      <path d="M32 2 A30 30 0 0 1 32 62 Z" fill={NAVY} />

      {/* ── EV Type 2 connector — left half, white on blue ── */}
      <g clipPath={`url(#${lId})`}>
        {/* Connector housing: rounded-rect D-shape */}
        <path
          d="M8 23 C8 19 11 16 15 16 L19 16 C23 16 26 19 26 23 L26 33 C26 37 23 38 19 38 L15 38 C11 38 8 37 8 33 Z"
          stroke="white"
          strokeWidth="1.4"
          fill="white"
          fillOpacity="0.22"
        />
        {/* Type 2 pin holes — 7 total, sized for legibility at 44 px render */}
        {/* Row 1: L1, L2, L3 (three-phase) — L2 sits slightly higher */}
        <circle cx="12" cy="22"   r="2" fill="white" />
        <circle cx="17" cy="20"   r="2" fill="white" />
        <circle cx="22" cy="22"   r="2" fill="white" />
        {/* Row 2: N (neutral) + PE (earth) */}
        <circle cx="12" cy="27.5" r="2" fill="white" />
        <circle cx="22" cy="27.5" r="2" fill="white" />
        {/* Row 3: CP + PP (communication/proximity, slightly smaller) */}
        <circle cx="14.5" cy="33" r="1.5" fill="white" />
        <circle cx="19.5" cy="33" r="1.5" fill="white" />
        {/* Connector handle / grip */}
        <rect x="13.5" y="38" width="7" height="3" rx="1.5" fill="white" />
        {/* Cable stem */}
        <rect x="15.5" y="41" width="3" height="5" rx="1.5" fill="white" />
      </g>

      {/* ── Petrol pump — right half, white on navy ── */}
      <g clipPath={`url(#${rId})`}>
        {/* Pump body */}
        <rect
          x="38" y="17" width="13" height="21" rx="2"
          stroke="white" strokeWidth="1.4"
          fill="white" fillOpacity="0.1"
        />
        {/* Display / screen panel */}
        <rect
          x="40" y="20" width="9" height="6" rx="1"
          fill="white" fillOpacity="0.35"
        />
        {/* Nozzle arm — L-shape extending right */}
        <path
          d="M51 22 L55 22 L55 28 L53 28"
          stroke="white" strokeWidth="1.4"
          strokeLinecap="round" strokeLinejoin="round"
        />
        {/* Nozzle head */}
        <rect x="50" y="26.5" width="4" height="2.5" rx="1" fill="white" />
        {/* Base platform */}
        <rect
          x="38" y="37.5" width="13" height="2.5" rx="1"
          fill="white" fillOpacity="0.6"
        />
      </g>

      {/* ── Outer ring (painted on top to clean edges) ── */}
      <circle cx="32" cy="32" r="30" stroke={NAVY} strokeWidth="1.5" fill="none" />

      {/* ── Centre divider ── */}
      <line
        x1="32" y1="2" x2="32" y2="62"
        stroke="white" strokeWidth="1.5" strokeOpacity="0.45"
      />
    </svg>
  );
}
