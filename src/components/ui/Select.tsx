import { SelectHTMLAttributes } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  error?: string;
  hint?: string;
}

export default function Select({
  label,
  options,
  error,
  hint,
  className = "",
  id,
  ...props
}: SelectProps) {
  const selectId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={selectId}
        className="text-sm font-medium text-navy"
      >
        {label}
      </label>

      <div className="relative">
        <select
          id={selectId}
          {...props}
          className={[
            "w-full appearance-none rounded-lg border bg-white text-navy text-sm",
            "pl-3 pr-9 py-2.5 cursor-pointer",
            "transition-colors focus:outline-none focus:ring-2",
            "focus:ring-ev-blue focus:border-ev-blue",
            error
              ? "border-red-400 focus:ring-red-400"
              : "border-border-light hover:border-ev-grey/60",
            className,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Chevron */}
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ev-grey">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 6l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

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
