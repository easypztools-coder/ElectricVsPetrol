// Simplified geometric petrol pump icon
interface PetrolPumpIconProps {
  size?: number;
  className?: string;
  color?: string;
}

export default function PetrolPumpIcon({
  size = 24,
  className = "",
  color = "#0B132B",
}: PetrolPumpIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-label="Petrol pump"
      role="img"
      className={className}
    >
      {/* Pump body */}
      <rect
        x="4"
        y="8"
        width="16"
        height="20"
        rx="2"
        stroke={color}
        strokeWidth="1.5"
        fill={color}
        fillOpacity="0.1"
      />

      {/* Screen / display area */}
      <rect x="7" y="11" width="10" height="6" rx="1" fill={color} opacity="0.3" />

      {/* Nozzle housing (right side) */}
      <path
        d="M20 12 L24 12 L24 16 C24 17 25 18 25 19 L25 22 C25 22.6 24.6 23 24 23 L23 23"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Nozzle tip */}
      <path
        d="M23 20 L27 20 L27 23 L23 23"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={color}
        fillOpacity="0.15"
      />

      {/* Fuel indicator dot */}
      <circle cx="12" cy="21" r="1.5" fill={color} opacity="0.6" />

      {/* Base */}
      <rect x="4" y="26" width="16" height="2" rx="1" fill={color} opacity="0.5" />
    </svg>
  );
}
