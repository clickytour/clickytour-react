"use client";

import { useState } from "react";
import Link from "next/link";

export interface QuickFormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "select" | "textarea";
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
}

interface QuickFormProps {
  title: string;
  subtitle?: string;
  fields: QuickFormField[];
  roleName: string;
  formType: string;
  successTitle?: string;
  successMessage?: string;
  successCta?: { label: string; href: string };
  upgradeHref?: string;
  accentColor?: string;
}

/**
 * Universal Quick Application form — single screen, 5-7 fields.
 * For ad traffic and first-time visitors. Captures lead fast.
 */
export function QuickForm({
  title,
  subtitle,
  fields,
  roleName,
  formType,
  successTitle = "You're In!",
  successMessage,
  successCta,
  upgradeHref,
  accentColor = "cyan",
}: QuickFormProps) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Honeypot
  const [hp, setHp] = useState("");

  function set(name: string, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (hp) return; // bot

    // Validate required
    for (const f of fields) {
      if (f.required && !values[f.name]?.trim()) return;
    }

    setLoading(true);
    try {
      await fetch(`/api/forms/${formType}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          _meta: {
            formTier: "quick",
            formType,
            role: roleName,
            submittedAt: new Date().toISOString(),
            source: typeof window !== "undefined" ? window.location.href : "",
          },
        }),
      });
    } catch {
      // silent — design-first
    }
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
          <svg className="h-7 w-7 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-emerald-900">{successTitle}</h3>
        <p className="mt-2 text-sm text-emerald-700 max-w-md mx-auto">
          {successMessage || `Thanks for your interest! We've received your quick application as ${roleName.toLowerCase()}.`}
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          {successCta && (
            <Link href={successCta.href} className={`rounded-full bg-${accentColor}-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-${accentColor}-700 transition`}>
              {successCta.label}
            </Link>
          )}
          {upgradeHref && (
            <Link href={upgradeHref} className="rounded-full border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition">
              Complete Full Profile &rarr;
            </Link>
          )}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5">
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        {subtitle && <p className="mt-1 text-sm text-slate-500">{subtitle}</p>}
      </div>

      {/* Honeypot */}
      <input
        type="text"
        name="websiteHp"
        value={hp}
        onChange={(e) => setHp(e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="space-y-4">
        {fields.map((f) => (
          <div key={f.name}>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              {f.label} {f.required && <span className="text-red-400">*</span>}
            </label>
            {f.type === "select" ? (
              <select
                value={values[f.name] || ""}
                onChange={(e) => set(f.name, e.target.value)}
                required={f.required}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
              >
                <option value="">{f.placeholder || "Select..."}</option>
                {f.options?.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            ) : f.type === "textarea" ? (
              <textarea
                value={values[f.name] || ""}
                onChange={(e) => set(f.name, e.target.value)}
                required={f.required}
                placeholder={f.placeholder}
                rows={3}
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 resize-none"
              />
            ) : (
              <input
                type={f.type}
                value={values[f.name] || ""}
                onChange={(e) => set(f.name, e.target.value)}
                required={f.required}
                placeholder={f.placeholder}
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
              />
            )}
          </div>
        ))}
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`mt-6 w-full rounded-xl bg-cyan-600 py-3 text-sm font-semibold text-white hover:bg-cyan-700 transition disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {loading ? "Submitting..." : "Get Started"}
      </button>

      <p className="mt-3 text-xs text-slate-400 text-center">
        Quick application — takes less than 30 seconds. No commitment.
      </p>
    </form>
  );
}
