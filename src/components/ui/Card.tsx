import { HTMLAttributes } from "react";

type CardVariant = "default" | "highlight" | "saving" | "cost" | "ev";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: "sm" | "md" | "lg";
}

const variantClasses: Record<CardVariant, string> = {
  default:   "bg-white border border-border-light shadow-sm",
  highlight: "bg-white border-2 border-ev-blue shadow-md",
  saving:    "bg-ev-green/10 border border-ev-green/30 shadow-sm",
  cost:      "bg-ev-amber/10 border border-ev-amber/30 shadow-sm",
  ev:        "bg-ev-blue/5 border border-ev-blue/20 shadow-sm",
};

const paddingClasses = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  variant = "default",
  padding = "md",
  className = "",
  children,
  ...props
}: CardProps) {
  return (
    <div
      {...props}
      className={[
        "rounded-2xl",
        variantClasses[variant],
        paddingClasses[padding],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
