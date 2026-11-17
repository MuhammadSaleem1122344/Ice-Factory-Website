import type { ChangeEvent } from "react";

interface Option { value: string; label: string }

interface Props {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  error?: string;
  type?: string;
  as?: "input" | "textarea" | "select";
  options?: Option[];
  placeholder?: string;
  required?: boolean;
}

export default function Field({
  label, name, value, onChange, error, type = "text", as = "input", options = [], placeholder, required,
}: Props) {
  const common = {
    id: name, name, value, onChange,
    "aria-invalid": !!error, "aria-describedby": error ? `${name}-error` : undefined,
    className: "form-control px-4 py-3 text-sm",
  };
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-navy-800">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {as === "textarea" ? (
        <textarea {...common} rows={4} placeholder={placeholder} />
      ) : as === "select" ? (
        <select {...common}>
          <option value="">Select…</option>
          {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      ) : (
        <input {...common} type={type} placeholder={placeholder} />
      )}
      {error && <p id={`${name}-error`} className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
