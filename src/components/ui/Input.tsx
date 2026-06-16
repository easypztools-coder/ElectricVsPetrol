import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
  prefix?: string;
  suffix?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, hint, prefix, suffix, className = "", id, ...props },
  ref
) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={inputId}
        className="text-sm font-medium text-navy"
      >
        {label}
      </label>

      <div className="relative flex items-center">
        {prefix && (
          <span className="absolute left-3 text-ev-grey text-sm select-none pointer-events-none">
            {prefix}
          </span>
        )}
        <input
          ref={ref}
          id={inputId}
          {...props}
          className={[
            "w-full rounded-lg border bg-white text-navy text-sm",
            "transition-colors focus:outline-none focus:ring-2",
            "focus:ring-ev-blue focus:border-ev-blue",
            "placeholder:text-ev-grey/70",
            error
              ? "border-red-400 focus:ring-red-400 focus:border-red-400"
              : "border-border-light hover:border-ev-grey/60",
            prefix ? "pl-8" : "pl-3",
            suffix ? "pr-10" : "pr-3",
            "py-2.5",
            className,
          ]
            .filter(Boolean)
            .join(" ")}
        />
        {suffix && (
          <span className="absolute right-3 text-ev-grey text-sm select-none pointer-events-none">
            {suffix}
          </span>
        )}
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
});

export default Input;
