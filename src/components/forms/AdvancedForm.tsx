"use client";

import { useState } from "react";
import Link from "next/link";

export interface AdvancedFormStep {
  title: string;
  description?: string;
  fields: AdvancedFormField[];
}

export interface AdvancedFormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "url" | "number" | "select" | "multiselect" | "textarea" | "file" | "checkbox" | "radio";
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  hint?: string;
  fullWidth?: boolean;
}

interface AdvancedFormProps {
  title: string;
  subtitle?: string;
  steps: AdvancedFormStep[];
  roleName: string;
  formType: string;
  successTitle?: string;
  successMessage?: string;
  successCta?: { label: string; href: string };
}

/**
 * Advanced multi-step form for subscription path.
 * 30-40 fields across 3-5 steps with uploads and verification.
 */
export function AdvancedForm({
  title,
  subtitle,
  steps,
  roleName,
  formType,
  successTitle = "Profile Submitted!",
  successMessage,
  successCta,
}: AdvancedFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [values, setValues] = useState<Record<string, string | string[]>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hp, setHp] = useState("");

  const step = steps[currentStep];
  const isLast = currentStep === steps.length - 1;

  function set(name: string, value: string | string[]) {
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function toggleMulti(name: string, val: string) {
    const current = (values[name] as string[]) || [];
    if (current.includes(val)) {
      set(name, current.filter((v) => v !== val));
    } else {
      set(name, [...current, val]);
    }
  }

  function canProceed() {
    for (const f of step.fields) {
      if (f.required) {
        const v = values[f.name];
        if (!v || (typeof v === "string" && !v.trim()) || (Array.isArray(v) && v.length === 0)) return false;
      }
    }
    return true;
  }

  async function handleSubmit() {
    if (hp) return;
    setLoading(true);
    try {
      await fetch(`/api/forms/${formType}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          _meta: {
            formTier: "advanced",
            formType,
            role: roleName,
            submittedAt: new Date().toISOString(),
            source: typeof window !== "undefined" ? window.location.href : "",
          },
        }),
      });
    } catch { /* silent */ }
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
          {successMessage || `Your full ${roleName.toLowerCase()} profile has been submitted for review. You'll be notified once it's live in the directory.`}
        </p>
        {successCta && (
          <Link href={successCta.href} className="mt-4 inline-block rounded-full bg-cyan-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-cyan-700 transition">
            {successCta.label}
          </Link>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-cyan-900 px-6 py-5 text-white">
        <h2 className="text-xl font-bold">{title}</h2>
        {subtitle && <p className="mt-1 text-sm text-cyan-200">{subtitle}</p>}
      </div>

      {/* Step indicator */}
      <div className="border-b border-slate-200 px-6 py-3">
        <div className="flex items-center gap-2">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <button
                onClick={() => i < currentStep && setCurrentStep(i)}
                className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition ${
                  i === currentStep ? "bg-cyan-600 text-white" : i < currentStep ? "bg-emerald-500 text-white cursor-pointer" : "bg-slate-200 text-slate-500"
                }`}
              >
                {i < currentStep ? "\u2713" : i + 1}
              </button>
              <span className={`text-xs font-medium hidden sm:inline ${i === currentStep ? "text-cyan-700" : "text-slate-400"}`}>
                {s.title}
              </span>
              {i < steps.length - 1 && <div className={`h-px w-6 ${i < currentStep ? "bg-emerald-300" : "bg-slate-200"}`} />}
            </div>
          ))}
        </div>
      </div>

      {/* Honeypot */}
      <input type="text" name="websiteHp" value={hp} onChange={(e) => setHp(e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" />

      {/* Step content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
        {step.description && <p className="mt-1 text-sm text-slate-500">{step.description}</p>}

        <div className={`mt-5 grid gap-4 ${step.fields.some((f) => f.fullWidth) ? "" : "sm:grid-cols-2"}`}>
          {step.fields.map((f) => (
            <div key={f.name} className={f.fullWidth ? "sm:col-span-2" : ""}>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {f.label} {f.required && <span className="text-red-400">*</span>}
              </label>
              {f.type === "select" ? (
                <select
                  value={(values[f.name] as string) || ""}
                  onChange={(e) => set(f.name, e.target.value)}
                  required={f.required}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
                >
                  <option value="">{f.placeholder || "Select..."}</option>
                  {f.options?.map((o) => (<option key={o.value} value={o.value}>{o.label}</option>))}
                </select>
              ) : f.type === "multiselect" ? (
                <div className="flex flex-wrap gap-2">
                  {f.options?.map((o) => {
                    const selected = ((values[f.name] as string[]) || []).includes(o.value);
                    return (
                      <button
                        key={o.value}
                        type="button"
                        onClick={() => toggleMulti(f.name, o.value)}
                        className={`rounded-full px-3 py-1 text-xs font-medium border transition ${
                          selected ? "bg-cyan-600 text-white border-cyan-600" : "bg-white text-slate-600 border-slate-200 hover:border-cyan-300"
                        }`}
                      >
                        {o.label}
                      </button>
                    );
                  })}
                </div>
              ) : f.type === "textarea" ? (
                <textarea
                  value={(values[f.name] as string) || ""}
                  onChange={(e) => set(f.name, e.target.value)}
                  required={f.required}
                  placeholder={f.placeholder}
                  rows={4}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 resize-none"
                />
              ) : f.type === "file" ? (
                <input
                  type="file"
                  multiple
                  accept="image/*,.pdf,.doc,.docx"
                  className="w-full text-sm text-slate-500 file:mr-3 file:rounded-full file:border-0 file:bg-cyan-50 file:px-4 file:py-2 file:text-xs file:font-semibold file:text-cyan-700 hover:file:bg-cyan-100"
                />
              ) : f.type === "checkbox" ? (
                <label className="flex items-start gap-2 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={values[f.name] === "true"}
                    onChange={(e) => set(f.name, e.target.checked ? "true" : "")}
                    className="mt-0.5 rounded border-slate-300"
                  />
                  {f.placeholder || f.label}
                </label>
              ) : (
                <input
                  type={f.type}
                  value={(values[f.name] as string) || ""}
                  onChange={(e) => set(f.name, e.target.value)}
                  required={f.required}
                  placeholder={f.placeholder}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
                />
              )}
              {f.hint && <p className="mt-1 text-xs text-slate-400">{f.hint}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-slate-200 px-6 py-4 flex justify-between">
        <button
          onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
          disabled={currentStep === 0}
          className="rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition disabled:opacity-30"
        >
          Back
        </button>
        {isLast ? (
          <button
            onClick={handleSubmit}
            disabled={loading || !canProceed()}
            className="rounded-full bg-cyan-600 px-8 py-2 text-sm font-semibold text-white hover:bg-cyan-700 transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Profile"}
          </button>
        ) : (
          <button
            onClick={() => setCurrentStep((s) => Math.min(steps.length - 1, s + 1))}
            disabled={!canProceed()}
            className="rounded-full bg-cyan-600 px-8 py-2 text-sm font-semibold text-white hover:bg-cyan-700 transition disabled:opacity-50"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
