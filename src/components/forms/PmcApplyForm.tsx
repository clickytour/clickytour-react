"use client";

import { useState } from "react";

type OnboardingIntent = "full-management" | "co-managed" | "revenue-only";
type Step = 1 | 2 | 3;

type FormState = {
  companyName: string;
  legalName: string;
  contactPerson: string;
  role: string;
  email: string;
  phone: string;
  messaging: string;
  website: string;
  regions: string;
  languages: string;
  propertyTypes: string;
  customTags: string;
  managedCount: string;
  years: string;
  onboardingIntent: OnboardingIntent;
  onboardingStatus: "ready-now" | "pilot-phase" | "planning";
  currentChannels: string[];
  pmsTool: string;
  averageAdr: string;
  occupancyTarget: string;
  serviceModelNote: string;
  description: string;
  logoFileName: string;
  referral: string;
  consentData: boolean;
  consentAccuracy: boolean;
  websiteHp: string;
};

const inputClass = "mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cyan-500";
const labelClass = "text-sm font-medium text-slate-700";

const channelOptions = ["Airbnb", "Booking.com", "Vrbo", "Direct website", "Other"];

const intentMeta: Record<OnboardingIntent, { title: string; hint: string }> = {
  "full-management": { title: "Full management", hint: "ClickyTour support across distribution, pricing, and operational workflow." },
  "co-managed": { title: "Co-managed", hint: "You run core operations; we handle channel/pricing collaboration." },
  "revenue-only": { title: "Revenue management only", hint: "Pricing strategy, occupancy optimization, and distribution performance." },
};

const initial: FormState = {
  companyName: "", legalName: "", contactPerson: "", role: "", email: "", phone: "", messaging: "", website: "",
  regions: "", languages: "", propertyTypes: "", customTags: "", managedCount: "", years: "",
  onboardingIntent: "full-management", onboardingStatus: "ready-now", currentChannels: [], pmsTool: "",
  averageAdr: "", occupancyTarget: "", serviceModelNote: "", description: "", logoFileName: "", referral: "",
  consentData: false, consentAccuracy: false, websiteHp: "",
};

export function PmcApplyForm({ initialValues }: { initialValues?: Partial<FormState> }) {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<FormState>({ ...initial, ...initialValues });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState("");

  function setField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((p) => ({ ...p, [key]: value }));
    setErrors((prev) => { if (!prev[key]) return prev; const next = { ...prev }; delete next[key]; return next; });
  }

  function toggleChannel(ch: string) {
    setForm((p) => ({ ...p, currentChannels: p.currentChannels.includes(ch) ? p.currentChannels.filter((c) => c !== ch) : [...p.currentChannels, ch] }));
  }

  function validate(t: Step) {
    const e: Record<string, string> = {};
    if (t === 1) {
      if (!form.companyName.trim()) e.companyName = "Required.";
      if (!form.contactPerson.trim()) e.contactPerson = "Required.";
      if (!form.role.trim()) e.role = "Required.";
      if (!form.email.trim()) e.email = "Required.";
      if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email.";
      if (!form.phone.trim()) e.phone = "Required.";
      if (!form.messaging.trim()) e.messaging = "Required.";
      if (!form.website.trim()) e.website = "Required.";
      if (!form.regions.trim()) e.regions = "Required.";
      if (!form.languages.trim()) e.languages = "Required.";
      if (!form.propertyTypes.trim()) e.propertyTypes = "Required.";
    }
    if (t === 2) {
      if (!form.description.trim() || form.description.trim().length < 40) e.description = "Min 40 characters.";
      if (!form.managedCount.trim()) e.managedCount = "Required.";
      if (!form.years.trim()) e.years = "Required.";
      if (form.currentChannels.length === 0) e.currentChannels = "Select at least one.";
      if (!form.logoFileName.trim()) e.logoFileName = "Upload a logo.";
    }
    if (t === 3) {
      if (!form.consentData) e.consentData = "Required.";
      if (!form.consentAccuracy) e.consentAccuracy = "Required.";
      if (form.websiteHp.trim()) e.websiteHp = "Spam check failed.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function goNext() { if (!validate(step)) return; setStep((s) => (s === 1 ? 2 : 3)); }
  function goPrev() { setStep((s) => (s === 3 ? 2 : 1)); }

  async function submitForm() {
    if (!validate(3)) return;
    setSubmitting(true); setStatus("idle"); setStatusMsg("");
    try {
      const payload = {
        source: "clickytour-react", formType: "pmc-apply", submittedAt: new Date().toISOString(),
        company: { companyName: form.companyName, legalName: form.legalName, contactPerson: form.contactPerson, role: form.role, email: form.email, phone: form.phone, messaging: form.messaging, website: form.website },
        portfolio: { regions: form.regions.split(",").map((s) => s.trim()).filter(Boolean), languages: form.languages.split(",").map((s) => s.trim()).filter(Boolean), propertyTypes: form.propertyTypes.split(",").map((s) => s.trim()).filter(Boolean), customTags: form.customTags.split(",").map((s) => s.trim()).filter(Boolean), managedCount: Number(form.managedCount || 0), yearsExperience: Number(form.years || 0) },
        operations: { onboardingIntent: form.onboardingIntent, onboardingStatus: form.onboardingStatus, currentChannels: form.currentChannels, pmsTool: form.pmsTool, averageAdr: form.averageAdr, occupancyTarget: form.occupancyTarget, serviceModelNote: form.serviceModelNote },
        profile: { description: form.description, logoFileName: form.logoFileName, referral: form.referral },
        consent: { dataProcessing: form.consentData, dataAccuracy: form.consentAccuracy },
      };
      const r = await fetch("/api/forms/pmc-apply", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!r.ok) throw new Error("failed");
      setStatus("success"); setStatusMsg("PMC application submitted! Our team will review your profile shortly.");
      setForm(initial); setStep(1);
    } catch { setStatus("error"); setStatusMsg("Submission failed. Please retry."); }
    finally { setSubmitting(false); }
  }

  return (
    <section className="mx-auto max-w-[1280px] px-4 pb-10">
      <div className="rounded-2xl border border-slate-300 bg-white p-4 md:p-6">
        <h2 className="text-3xl font-bold text-slate-900">PMC Application Form</h2>
        <p className="mt-1 text-slate-600">3-step application with validation, dynamic fields, and consent checks.</p>
        <p className="mt-1 text-sm text-slate-500">Required fields are marked with *</p>

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {[1, 2, 3].map((n) => {
            const active = step === n; const done = step > n;
            return (
              <button key={n} type="button" onClick={() => setStep(n as Step)}
                className={`rounded-xl border p-3 text-left text-sm ${active ? "border-cyan-600 bg-cyan-600 text-white" : done ? "border-emerald-600 bg-emerald-50 text-emerald-800" : "border-slate-300 bg-slate-50 text-slate-700"}`}>
                <div className="font-semibold">Step {n}</div>
                <div className="mt-0.5 text-xs opacity-90">{n === 1 ? "Company & coverage" : n === 2 ? "Operations & profile" : "Review & submit"}</div>
              </button>
            );
          })}
        </div>

        <form className="mt-4 space-y-4" onSubmit={(e) => e.preventDefault()}>
          {step === 1 && (
            <>
              <fieldset className="rounded-xl border border-slate-200 p-3">
                <legend className="px-2 text-sm font-semibold text-slate-800">Company profile</legend>
                <div className="grid gap-3 md:grid-cols-2">
                  <label className={labelClass}>Company name *<input className={inputClass} value={form.companyName} onChange={(e) => setField("companyName", e.target.value)} />{errors.companyName && <span className="text-xs text-red-600">{errors.companyName}</span>}</label>
                  <label className={labelClass}>Legal name<input className={inputClass} value={form.legalName} onChange={(e) => setField("legalName", e.target.value)} /></label>
                  <label className={labelClass}>Contact person *<input className={inputClass} value={form.contactPerson} onChange={(e) => setField("contactPerson", e.target.value)} />{errors.contactPerson && <span className="text-xs text-red-600">{errors.contactPerson}</span>}</label>
                  <label className={labelClass}>Role / position *
                    <select className={inputClass} value={form.role} onChange={(e) => setField("role", e.target.value)}>
                      <option value="">Please select</option><option value="owner-founder">Owner / Founder</option><option value="general-manager">General Manager</option><option value="operations-manager">Operations Manager</option><option value="sales-business-dev">Sales / Business Development</option><option value="revenue-manager">Revenue Manager</option><option value="other">Other</option>
                    </select>{errors.role && <span className="text-xs text-red-600">{errors.role}</span>}</label>
                  <label className={labelClass}>Email *<input type="email" className={inputClass} value={form.email} onChange={(e) => setField("email", e.target.value)} />{errors.email && <span className="text-xs text-red-600">{errors.email}</span>}</label>
                  <label className={labelClass}>Phone *<input className={inputClass} placeholder="+30 ..." value={form.phone} onChange={(e) => setField("phone", e.target.value)} />{errors.phone && <span className="text-xs text-red-600">{errors.phone}</span>}</label>
                  <label className={labelClass}>Preferred chat *
                    <select className={inputClass} value={form.messaging} onChange={(e) => setField("messaging", e.target.value)}>
                      <option value="">Please select</option><option value="whatsapp">WhatsApp</option><option value="viber">Viber</option><option value="telegram">Telegram</option><option value="email">Email only</option>
                    </select>{errors.messaging && <span className="text-xs text-red-600">{errors.messaging}</span>}</label>
                  <label className={labelClass}>Website *<input className={inputClass} placeholder="https://..." value={form.website} onChange={(e) => setField("website", e.target.value)} />{errors.website && <span className="text-xs text-red-600">{errors.website}</span>}</label>
                </div>
              </fieldset>
              <fieldset className="rounded-xl border border-slate-200 p-3">
                <legend className="px-2 text-sm font-semibold text-slate-800">Coverage & portfolio</legend>
                <div className="grid gap-3 md:grid-cols-2">
                  <label className={labelClass}>Regions / areas *<input className={inputClass} placeholder="Halkidiki, Crete..." value={form.regions} onChange={(e) => setField("regions", e.target.value)} />{errors.regions && <span className="text-xs text-red-600">{errors.regions}</span>}</label>
                  <label className={labelClass}>Languages *<input className={inputClass} placeholder="EN, EL, DE..." value={form.languages} onChange={(e) => setField("languages", e.target.value)} />{errors.languages && <span className="text-xs text-red-600">{errors.languages}</span>}</label>
                  <label className={labelClass}>Property types *<input className={inputClass} placeholder="Villa, Apartment..." value={form.propertyTypes} onChange={(e) => setField("propertyTypes", e.target.value)} />{errors.propertyTypes && <span className="text-xs text-red-600">{errors.propertyTypes}</span>}</label>
                  <label className={labelClass}>Custom tags<input className={inputClass} placeholder="beachfront, family, luxury" value={form.customTags} onChange={(e) => setField("customTags", e.target.value)} /></label>
                </div>
              </fieldset>
            </>
          )}

          {step === 2 && (
            <>
              <fieldset className="rounded-xl border border-slate-200 p-3">
                <legend className="px-2 text-sm font-semibold text-slate-800">Service model</legend>
                <div className="grid gap-3 md:grid-cols-3">
                  {(Object.keys(intentMeta) as OnboardingIntent[]).map((intent) => {
                    const active = form.onboardingIntent === intent;
                    return (
                      <button key={intent} type="button" onClick={() => setField("onboardingIntent", intent)}
                        className={`rounded-xl border p-3 text-left ${active ? "border-cyan-600 bg-cyan-600 text-white" : "border-slate-300 bg-slate-50 text-slate-700"}`}>
                        <div className="text-sm font-semibold">{intentMeta[intent].title}</div>
                        <div className="mt-1 text-xs opacity-90">{intentMeta[intent].hint}</div>
                      </button>
                    );
                  })}
                </div>
                <label className={`${labelClass} mt-3 block`}>Onboarding status *
                  <select className={inputClass} value={form.onboardingStatus} onChange={(e) => setField("onboardingStatus", e.target.value as FormState["onboardingStatus"])}>
                    <option value="ready-now">Ready now</option><option value="pilot-phase">Pilot phase</option><option value="planning">Planning stage</option>
                  </select>
                </label>
              </fieldset>
              <fieldset className="rounded-xl border border-slate-200 p-3">
                <legend className="px-2 text-sm font-semibold text-slate-800">Operations snapshot</legend>
                <div className="grid gap-3 md:grid-cols-2">
                  <label className={labelClass}>Managed properties *<input type="number" className={inputClass} value={form.managedCount} onChange={(e) => setField("managedCount", e.target.value)} />{errors.managedCount && <span className="text-xs text-red-600">{errors.managedCount}</span>}</label>
                  <label className={labelClass}>Years of experience *<input type="number" className={inputClass} value={form.years} onChange={(e) => setField("years", e.target.value)} />{errors.years && <span className="text-xs text-red-600">{errors.years}</span>}</label>
                  <label className={labelClass}>Current PMS<input className={inputClass} placeholder="Hostaway, Guesty..." value={form.pmsTool} onChange={(e) => setField("pmsTool", e.target.value)} /></label>
                  <label className={labelClass}>Average ADR<input className={inputClass} placeholder="e.g. 230 EUR" value={form.averageAdr} onChange={(e) => setField("averageAdr", e.target.value)} /></label>
                  <label className={labelClass}>Occupancy target<input className={inputClass} placeholder="e.g. +12%" value={form.occupancyTarget} onChange={(e) => setField("occupancyTarget", e.target.value)} /></label>
                  <label className={labelClass}>Referral
                    <select className={inputClass} value={form.referral} onChange={(e) => setField("referral", e.target.value)}>
                      <option value="">Please select</option><option value="google-search">Google Search</option><option value="social-media">Social Media</option><option value="partner-referral">Partner Referral</option><option value="event-webinar">Event / Webinar</option><option value="direct-contact">Direct Contact</option><option value="other">Other</option>
                    </select>
                  </label>
                </div>
                <div className="mt-3">
                  <p className="text-sm font-medium text-slate-700">Active channels *</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {channelOptions.map((ch) => {
                      const active = form.currentChannels.includes(ch);
                      return <button key={ch} type="button" onClick={() => toggleChannel(ch)} className={`rounded-full border px-3 py-1.5 text-sm ${active ? "border-cyan-600 bg-cyan-600 text-white" : "border-slate-300 bg-white text-slate-700"}`}>{ch}</button>;
                    })}
                  </div>
                  {errors.currentChannels && <span className="text-xs text-red-600">{errors.currentChannels}</span>}
                </div>
              </fieldset>
              <fieldset className="rounded-xl border border-slate-200 p-3">
                <legend className="px-2 text-sm font-semibold text-slate-800">Company profile content</legend>
                <label className={`${labelClass} mt-2 block`}>Company description *<textarea className={inputClass} rows={4} placeholder="Services, destination strengths..." value={form.description} onChange={(e) => setField("description", e.target.value)} />{errors.description && <span className="text-xs text-red-600">{errors.description}</span>}</label>
                <label className={`${labelClass} mt-3 block`}>Upload logo *
                  <input type="file" accept="image/*" className={inputClass} onChange={(e) => { const file = e.target.files?.[0]; setField("logoFileName", file ? file.name : ""); }} />
                  {form.logoFileName && <span className="mt-1 block text-xs text-slate-600">Selected: {form.logoFileName}</span>}
                  {errors.logoFileName && <span className="text-xs text-red-600">{errors.logoFileName}</span>}
                </label>
                <label className={`${labelClass} mt-3 block`}>Extra details<textarea className={inputClass} rows={3} placeholder="Goals, constraints, region plans" value={form.serviceModelNote} onChange={(e) => setField("serviceModelNote", e.target.value)} /></label>
              </fieldset>
            </>
          )}

          {step === 3 && (
            <fieldset className="rounded-xl border border-slate-200 p-3">
              <legend className="px-2 text-sm font-semibold text-slate-800">Consent & verification</legend>
              <label className="flex items-start gap-2 text-sm text-slate-700"><input type="checkbox" className="mt-1" checked={form.consentData} onChange={(e) => setField("consentData", e.target.checked)} />I consent to data processing for partner profile review.</label>
              {errors.consentData && <p className="mt-1 text-xs text-red-600">{errors.consentData}</p>}
              <label className="mt-2 flex items-start gap-2 text-sm text-slate-700"><input type="checkbox" className="mt-1" checked={form.consentAccuracy} onChange={(e) => setField("consentAccuracy", e.target.checked)} />I confirm submitted data is accurate and authorized.</label>
              {errors.consentAccuracy && <p className="mt-1 text-xs text-red-600">{errors.consentAccuracy}</p>}
              <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" value={form.websiteHp} onChange={(e) => setField("websiteHp", e.target.value)} />
            </fieldset>
          )}

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex gap-3">
              <button type="button" onClick={goPrev} disabled={step === 1} className="rounded-xl border border-slate-800 bg-white px-5 py-2.5 text-sm font-medium text-slate-900 disabled:cursor-not-allowed disabled:opacity-40">Previous</button>
              {step < 3 ? (
                <button type="button" onClick={goNext} className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white">Next step</button>
              ) : (
                <button type="button" onClick={submitForm} disabled={submitting} className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white disabled:opacity-60">{submitting ? "Submitting..." : "Submit PMC application"}</button>
              )}
            </div>
          </div>

          {status !== "idle" && <p className={`rounded-lg border px-3 py-2 text-sm ${status === "success" ? "border-emerald-300 bg-emerald-50 text-emerald-800" : "border-red-300 bg-red-50 text-red-700"}`}>{statusMsg}</p>}
        </form>
      </div>
    </section>
  );
}
