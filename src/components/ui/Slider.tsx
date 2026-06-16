"use client";

import { InputHTMLAttributes } from "react";

interface SliderProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  valueLabel: string;
  error?: string;
  hint?: string;
}

export default function Slider({
  label,
  valueLabel,
  error,
  hint,
  id,
  className = "",
  ...props
}: SliderProps) {
  const sliderId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <label htmlFor={sliderId} className="text-sm font-medium text-navy">
          {label}
        </label>
        <span className="text-sm font-semibold text-ev-blue">{valueLabel}</span>
      </div>

      <input
        type="range"
        id={sliderId}
        {...props}
        className={["w-full accent-ev-blue", className].filter(Boolean).join(" ")}
        aria-label={label}
        aria-valuetext={valueLabel}
      />

      {hint && !error && (
        <p className="text-xs text-ev-grey">{hint}</p>
      )}
      {error && (
        <p className="text-xs text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
