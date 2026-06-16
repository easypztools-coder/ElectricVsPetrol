import EvConnectorIcon from "@/components/icons/EvConnectorIcon";
import PetrolPumpIcon from "@/components/icons/PetrolPumpIcon";
import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

const sizeMap = {
  sm: { icon: 20, heading: "text-base", tagline: "text-xs" },
  md: { icon: 28, heading: "text-lg", tagline: "text-xs" },
  lg: { icon: 36, heading: "text-2xl", tagline: "text-sm" },
};

export default function Logo({ size = "md", showTagline = false }: LogoProps) {
  const s = sizeMap[size];

  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2.5 group focus:outline-none"
      aria-label="ElectricVsPetrol.co.uk — home"
    >
      {/* Split icon lockup */}
      <div className="flex items-center gap-0.5">
        <EvConnectorIcon size={s.icon} color="#0066FF" />
        <span className="text-ev-grey/50 font-light text-lg leading-none select-none">
          /
        </span>
        <PetrolPumpIcon size={s.icon} color="#0B132B" />
      </div>

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
