import Link from "next/link";
import LogoMark from "./LogoMark";

export type LogoVariant = "default" | "compact" | "mark" | "footer";

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  href?: string;
  showTagline?: boolean;
  /** Legacy size prop — still accepted so existing callers don't break */
  size?: "sm" | "md" | "lg";
}

const markSizes = { sm: 36, md: 44, lg: 56 } as const;

const textSizes = {
  sm: { wordmark: "1rem", suffix: "0.7rem" },
  md: { wordmark: "1.125rem", suffix: "0.75rem" },
  lg: { wordmark: "1.5rem", suffix: "0.85rem" },
} as const;

/** Text colours per background context */
const colours = {
  light: { brand: "#0B132B", accent: "#0066FF", muted: "#6B7280" },
  dark:  { brand: "#FFFFFF", accent: "#0066FF", muted: "rgba(255,255,255,0.55)" },
};

export default function Logo({
  variant = "default",
  className = "",
  href = "/",
  showTagline,
  size = "md",
}: LogoProps) {
  const isMarkOnly = variant === "mark";
  const isDark     = variant === "footer";
  const c          = isDark ? colours.dark : colours.light;
  const iconSize   = markSizes[size];
  const ts         = textSizes[size];

  // Show tagline when prop is explicitly set; otherwise default on "default" variant only
  const showTag = showTagline ?? (variant === "default");

  const wordmark = !isMarkOnly && (
    <span className="flex flex-col leading-tight">
      <span
        style={{
          fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
          fontSize: ts.wordmark,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          lineHeight: 1.15,
        }}
      >
        <span style={{ color: c.brand }}>Electric</span>
        <span style={{ color: c.accent }}>Vs</span>
        <span style={{ color: c.brand }}>Petrol</span>
        <span
          style={{
            color: c.muted,
            fontSize: ts.suffix,
            fontWeight: 400,
            letterSpacing: 0,
          }}
        >
          .co.uk
        </span>
      </span>

      {showTag && (
        <span
          className="hidden sm:block"
          style={{
            fontFamily: "var(--font-sans, 'Inter', sans-serif)",
            fontSize: "0.65rem",
            fontWeight: 400,
            color: c.muted,
            letterSpacing: "0.04em",
            lineHeight: 1.4,
            marginTop: "0.15em",
          }}
        >
          The UK EV True Cost Calculator
        </span>
      )}
    </span>
  );

  const inner = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark size={iconSize} className="flex-shrink-0" />
      {wordmark}
    </span>
  );

  if (!href) return inner;

  return (
    <Link
      href={href}
      className="inline-flex focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 rounded-sm"
      aria-label="ElectricVsPetrol.co.uk — home"
    >
      {inner}
    </Link>
  );
}
