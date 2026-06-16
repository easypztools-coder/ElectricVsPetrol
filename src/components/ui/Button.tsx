import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-ev-blue text-white hover:bg-blue-700 active:bg-blue-800 shadow-sm",
  secondary:
    "bg-navy text-white hover:bg-slate-800 active:bg-slate-900 shadow-sm",
  outline:
    "border-2 border-ev-blue text-ev-blue bg-transparent hover:bg-blue-50 active:bg-blue-100",
  ghost:
    "bg-transparent text-navy hover:bg-gray-100 active:bg-gray-200",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={[
        "inline-flex items-center justify-center font-semibold rounded-lg",
        "transition-colors duration-150 focus:outline-none focus:ring-2",
        "focus:ring-ev-blue focus:ring-offset-2 disabled:opacity-50",
        "disabled:cursor-not-allowed cursor-pointer",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth ? "w-full" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </button>
  );
}
