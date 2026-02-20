"use client";

import { useState } from "react";

type Step = 1 | 2 | 3;

type FormState = {
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  website: string;
  region: string;
  serviceCategory: string;
  serviceSubcategory: string;
  serviceDescription: string;
  pricingModel: string;
  packages: string;
  mediaLinks: string;
  termsAccepted: boolean;
  websiteHp: string;
};

const serviceCategories = [
  {
    id: "transfers",
    name: "Transfers & Transport",
    subcategories: [
      { id: "airport-transfer", name: "Airport Transfer" },
      { id: "port-transfer", name: "Port Transfer" },
      { id: "private-driver", name: "Private Driver" },
      { id: "shuttle", name: "Shuttle Service" },
    ],
  },
  {
    id: "cleaning",
    name: "Cleaning & Housekeeping",
    subcategories: [
      { id: "deep-cleaning", name: "Deep Cleaning" },
      { id: "turnover-cleaning", name: "Turnover Cleaning" },
      { id: "regular-cleaning", name: "Regular Cleaning" },
    ],
  },
  {
    id: "maintenance",
    name: "Maintenance & Repairs",
    subcategories: [
      { id: "plumbing", name: "Plumbing" },
      { id: "electrical", name: "Electrical" },
      { id: "pool-garden", name: "Pool & Garden" },
      { id: "general-repair", name: "General Repair" },
    ],
  },
  {
    id: "tours",
    name: "Tours & Activities",
    subcategories: [
      { id: "boat-tours", name: "Boat Tours" },
      { id: "cultural-tours", name: "Cultural Tours" },
      { id: "food-wine", name: "Food & Wine" },
      { id: "outdoor-adventure", name: "Outdoor Adventure" },
    ],
  },
  {
    id: "wellness",
    name: "Wellness & Spa",
    subcategories: [
      { id: "massage", name: "Massage" },
      { id: "yoga", name: "Yoga & Meditation" },
      { id: "spa-treatment", name: "Spa Treatment" },
    ],
  },
  {
    id: "concierge",
    name: "Concierge & Events",
    subcategories: [
      { id: "private-chef", name: "Private Chef" },
      { id: "event-planning", name: "Event Planning" },
      { id: "personal-shopper", name: "Personal Shopper" },
    ],
  },
  {
    id: "vehicle-rental",
    name: "Vehicle Rentals",
    subcategories: [
      { id: "car-rental", name: "Car Rental" },
      { id: "scooter-atv", name: "Scooter / ATV" },
      { id: "boat-rental", name: "Boat Rental" },
    ],
  },
  {
    id: "other",
    name: "Other",
    subcategories: [{ id: "other", name: "Other" }],
  },
];

const inputClass =
  "mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cyan-500";
const labelClass = "text-sm font-medium text-slate-700";

const initial: FormState = {
  businessName: "",
  contactName: "",
  email: "",
  phone: "",
  website: "",
  region: "",
  serviceCategory: serviceCategories[0].id,
  serviceSubcategory: serviceCategories[0].subcategories[0].id,
  serviceDescription: "",
  pricingModel: "Per service",
  packages: "",
  mediaLinks: "",
  termsAccepted: false,
  websiteHp: "",
};

export function ServisApplyForm() {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState("");

  const selectedCat = serviceCategories.find((c) => c.id === form.serviceCategory) ?? serviceCategories[0];
  const subcats = selectedCat.subcategories;

  function setField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((p) => ({ ...p, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  function validate(targetStep: Step) {
    const e: Record<string, string> = {};
    if (targetStep === 1) {
      if (!form.businessName.trim()) e.businessName = "Required.";
      if (!form.contactName.trim()) e.contactName = "Required.";
      if (!form.email.trim()) e.email = "Required.";
      if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email.";
      if (!form.region.trim()) e.region = "Required.";
    }
    if (targetStep === 2) {
      if (!form.serviceDescription.trim() || form.serviceDescription.trim().length < 30)
        e.serviceDescription = "Min 30 characters.";
      if (!form.packages.trim()) e.packages = "Add at least one package/price.";
    }
    if (targetStep === 3) {
      if (!form.termsAccepted) e.termsAccepted = "Required.";
      if (form.websiteHp.trim()) e.websiteHp = "Spam check failed.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function nextStep() {
    if (!validate(step)) return;
    setStep((s) => (s === 1 ? 2 : 3));
  }
  function prevStep() {
    setStep((s) => (s === 1 ? 1 : s === 2 ? 1 : 2));
  }

  async function onSubmit() {
    if (!validate(3)) return;
    setSubmitting(true);
    setMsg("");
    try {
      const payload = {
        source: "clickytour-react",
        formType: "service-provider-apply",
        submittedAt: new Date().toISOString(),
        business: { name: form.businessName, contact: form.contactName, email: form.email, phone: form.phone, website: form.website, region: form.region },
        service: {
          categoryId: form.serviceCategory,
          categoryName: selectedCat.name,
          subcategoryId: form.serviceSubcategory,
          subcategoryName: subcats.find((s) => s.id === form.serviceSubcategory)?.name || "",
          description: form.serviceDescription,
          pricingModel: form.pricingModel,
          packages: form.packages,
        },
        assets: { mediaLinks: form.mediaLinks.split(",").map((s) => s.trim()).filter(Boolean) },
        consent: { termsAccepted: form.termsAccepted },
      };
      const r = await fetch("/api/forms/service-provider-apply", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!r.ok) throw new Error("failed");
      setMsg("Submitted successfully! Our team will review your listing soon.");
      setForm(initial);
      setStep(1);
    } catch {
      setMsg("Submission failed. Please retry.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="mx-auto max-w-[1280px] px-4 pb-10">
      <form className="rounded-2xl border border-slate-300 bg-white p-4 md:p-6" onSubmit={(e) => e.preventDefault()}>
        <h2 className="text-3xl font-bold text-slate-900">Provider Listing Form</h2>
        <p className="mt-1 text-slate-600">3-step onboarding to list your service on ClickyTour.</p>
        <p className="mt-1 text-sm text-slate-500">Required fields are marked with *</p>

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {[1, 2, 3].map((n) => {
            const active = step === n;
            const done = step > n;
            return (
              <button key={n} type="button" onClick={() => setStep(n as Step)}
                className={`rounded-xl border p-3 text-left text-sm ${active ? "border-cyan-600 bg-cyan-600 text-white" : done ? "border-emerald-600 bg-emerald-50 text-emerald-800" : "border-slate-300 bg-slate-50 text-slate-700"}`}>
                <div className="font-semibold">Step {n}</div>
                <div className="mt-0.5 text-xs opacity-90">{n === 1 ? "Business details" : n === 2 ? "Service details" : "Review & submit"}</div>
              </button>
            );
          })}
        </div>

        {step === 1 && (
          <fieldset className="mt-4 rounded-xl border border-slate-200 p-3">
            <legend className="px-2 text-sm font-semibold text-slate-800">Business details</legend>
            <div className="grid gap-3 md:grid-cols-2">
              <label className={labelClass}>Business name *<input className={inputClass} value={form.businessName} onChange={(e) => setField("businessName", e.target.value)} />{errors.businessName && <span className="text-xs text-red-600">{errors.businessName}</span>}</label>
              <label className={labelClass}>Contact person *<input className={inputClass} value={form.contactName} onChange={(e) => setField("contactName", e.target.value)} />{errors.contactName && <span className="text-xs text-red-600">{errors.contactName}</span>}</label>
              <label className={labelClass}>Email *<input type="email" className={inputClass} value={form.email} onChange={(e) => setField("email", e.target.value)} />{errors.email && <span className="text-xs text-red-600">{errors.email}</span>}</label>
              <label className={labelClass}>Phone<input className={inputClass} value={form.phone} onChange={(e) => setField("phone", e.target.value)} /></label>
              <label className={labelClass}>Website<input className={inputClass} value={form.website} onChange={(e) => setField("website", e.target.value)} /></label>
              <label className={labelClass}>Region *<input className={inputClass} placeholder="Halkidiki, Crete..." value={form.region} onChange={(e) => setField("region", e.target.value)} />{errors.region && <span className="text-xs text-red-600">{errors.region}</span>}</label>
            </div>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset className="mt-4 rounded-xl border border-slate-200 p-3">
            <legend className="px-2 text-sm font-semibold text-slate-800">Service details</legend>
            <div className="grid gap-3 md:grid-cols-2">
              <label className={labelClass}>Service category
                <select className={inputClass} value={form.serviceCategory} onChange={(e) => { setField("serviceCategory", e.target.value); const cat = serviceCategories.find((c) => c.id === e.target.value); setField("serviceSubcategory", cat?.subcategories[0]?.id ?? ""); }}>
                  {serviceCategories.map((cat) => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
                </select>
              </label>
              <label className={labelClass}>Subcategory
                <select className={inputClass} value={form.serviceSubcategory} onChange={(e) => setField("serviceSubcategory", e.target.value)}>
                  {subcats.map((sub) => <option key={sub.id} value={sub.id}>{sub.name}</option>)}
                </select>
              </label>
              <label className={labelClass}>Pricing model
                <select className={inputClass} value={form.pricingModel} onChange={(e) => setField("pricingModel", e.target.value)}>
                  <option>Per service</option><option>Per hour</option><option>Per person</option><option>Package based</option><option>Custom quote</option>
                </select>
              </label>
            </div>
            <label className={`${labelClass} mt-3 block`}>Service description *<textarea className={inputClass} rows={4} value={form.serviceDescription} onChange={(e) => setField("serviceDescription", e.target.value)} />{errors.serviceDescription && <span className="text-xs text-red-600">{errors.serviceDescription}</span>}</label>
            <label className={`${labelClass} mt-3 block`}>Prices / packages *<textarea className={inputClass} rows={3} value={form.packages} onChange={(e) => setField("packages", e.target.value)} />{errors.packages && <span className="text-xs text-red-600">{errors.packages}</span>}</label>
            <label className={`${labelClass} mt-3 block`}>Photos / video links (comma-separated)<textarea className={inputClass} rows={2} value={form.mediaLinks} onChange={(e) => setField("mediaLinks", e.target.value)} /></label>
          </fieldset>
        )}

        {step === 3 && (
          <fieldset className="mt-4 rounded-xl border border-slate-200 p-3">
            <legend className="px-2 text-sm font-semibold text-slate-800">Consent & verification</legend>
            <label className="mt-2 flex items-start gap-2 text-sm text-slate-700">
              <input type="checkbox" className="mt-1" checked={form.termsAccepted} onChange={(e) => setField("termsAccepted", e.target.checked)} />
              I confirm all submitted details are accurate and authorized.
            </label>
            {errors.termsAccepted && <p className="mt-1 text-xs text-red-600">{errors.termsAccepted}</p>}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" value={form.websiteHp} onChange={(e) => setField("websiteHp", e.target.value)} />
          </fieldset>
        )}

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex gap-3">
            <button type="button" onClick={prevStep} disabled={step === 1} className="rounded-xl border border-slate-800 bg-white px-5 py-2.5 text-sm font-medium text-slate-900 disabled:cursor-not-allowed disabled:opacity-40">Previous</button>
            {step < 3 ? (
              <button type="button" onClick={nextStep} className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white">Next step</button>
            ) : (
              <button type="button" onClick={onSubmit} disabled={submitting} className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white disabled:opacity-60">{submitting ? "Submitting..." : "Submit listing"}</button>
            )}
          </div>
        </div>

        {msg && <p className={`mt-3 text-sm ${msg.includes("successfully") ? "text-emerald-700" : "text-red-600"}`}>{msg}</p>}
      </form>
    </section>
  );
}
