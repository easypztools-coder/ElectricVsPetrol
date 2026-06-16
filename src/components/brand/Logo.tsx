import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

const sizeMap = {
  sm: { size: 36, heading: "text-base", tagline: "text-xs" },
  md: { size: 48, heading: "text-lg", tagline: "text-xs" },
  lg: { size: 64, heading: "text-2xl", tagline: "text-sm" },
};

export default function Logo({ size = "md", showTagline = false }: LogoProps) {
  const s = sizeMap[size];

  return (
    <Link
      href="/"
      className="inline-flex items-center gap-3 group focus:outline-none"
      aria-label="ElectricVsPetrol.co.uk — home"
    >
      {/* Split circle emblem */}
      <svg
        width={s.size}
        height={s.size}
        viewBox="0 0 48 48"
        fill="none"
        aria-label="ElectricVsPetrol logo — EV on left, petrol on right"
        role="img"
        className="flex-shrink-0"
      >
        {/* White fill + navy outer ring */}
        <circle cx="24" cy="24" r="22" fill="white" stroke="#0B132B" strokeWidth="2" />

        {/* Left half — subtle EV blue tint (no clipPath to avoid duplicate-ID issues) */}
        <path d="M24 2 A22 22 0 0 0 24 46 Z" fill="#0066FF" fillOpacity="0.08" />

        {/* Vertical centre dividing line */}
        <line x1="24" y1="3" x2="24" y2="45" stroke="#E5E7EB" strokeWidth="1.5" />

        {/* Lightning bolt — EV side (left half, centred ~x=14, y=24) */}
        <path
          d="M16 13 L10 25 h5 L13 35 L20 23 h-5 L19 13 Z"
          fill="#0066FF"
        />

        {/* Petrol pump — right half */}
        {/* Body */}
        <rect
          x="31" y="14" width="12" height="17" rx="2"
          fill="#0B132B" fillOpacity="0.1"
          stroke="#0B132B" strokeWidth="1.3"
        />
        {/* Screen / display area */}
        <rect
          x="33" y="16" width="8" height="5" rx="1"
          fill="#0B132B" fillOpacity="0.3"
        />
        {/* Nozzle arm */}
        <path
          d="M43 18 L45 18 L45 22"
          stroke="#0B132B" strokeWidth="1.3"
          strokeLinecap="round" strokeLinejoin="round"
        />
        {/* Nozzle head */}
        <rect
          x="43" y="21" width="2" height="3" rx="0.5"
          fill="#0B132B" fillOpacity="0.3"
          stroke="#0B132B" strokeWidth="1"
        />
        {/* Fuel indicator dot */}
        <circle cx="37" cy="25.5" r="1.5" fill="#0B132B" fillOpacity="0.6" />
        {/* Base */}
        <rect
          x="31" y="30" width="12" height="2" rx="1"
          fill="#0B132B" fillOpacity="0.5"
        />
      </svg>

      {/* Word mark */}
      <div className="flex flex-col leading-tight">
        <span
          className={`font-display font-bold text-navy tracking-tight ${s.heading}`}
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          <span className="text-ev-blue">Electric</span>
          <span className="text-ev-grey/60 font-normal">Vs</span>
          <span>Petrol</span>
          <span className="text-ev-grey font-normal text-sm">.co.uk</span>
        </span>
        {showTagline && (
          <span className={`text-ev-grey font-normal ${s.tagline}`}>
            The UK EV True Cost Calculator
          </span>
        )}
      </div>
    </Link>
  );
}
