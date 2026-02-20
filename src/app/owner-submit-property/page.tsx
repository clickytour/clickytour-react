"use client";

import { useState } from "react";
import { PageShell, Hero, SectionTitle } from "@/components/site";
import { PlaceAutocomplete } from "@/components/PlaceAutocomplete";
import { PMC_SERVICE_TAGS } from "@/lib/marketplace/config";

type Step = 1 | 2 | 3;

const inputClass = "mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cyan-500";
const labelClass = "text-sm font-medium text-slate-700";

const propertyTypes = ["Villa", "House", "Apartment", "Townhouse", "Maisonette", "Studio", "Land", "Commercial", "Other"];
const subroles = [
  { value: "vacation", label: "Vacation Rental Management" },
  { value: "real-estate", label: "Real Estate Sale/Rent" },
  { value: "both", label: "Both (Rental + Sale)" },
];

export default function OwnerSubmitPropertyPage() {
  const [step, setStep] = useState<Step>(1);
  const [subrole, setSubrole] = useState("vacation");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState("");

  function toggleTag(tag: string) {
    setSelectedTags((prev) => prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]);
  }

  async function handleSubmit() {
    setSubmitting(true);
    try {
      const formEl = document.querySelector<HTMLFormElement>("#owner-submit-form");
      const formData = formEl ? new FormData(formEl) : new FormData();
      const fields: Record<string, string> = {};
      formData.forEach((v, k) => { fields[k] = v.toString(); });

      const payload = {
        source: "clickytour-react",
        formType: "owner-property-submission",
        role: "owner",
        subrole,
        tags: selectedTags,
        submittedAt: new Date().toISOString(),
        fields,
      };

      // In production: POST to CF Worker /api/init first (Turnstile), then /api/submissions
      const r = await fetch("/api/forms/owner-property-submission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!r.ok) throw new Error("failed");
      const data = await r.json();
      setRefId(data.ref || "CTV-DEMO01");
      setSubmitted(true);
    } catch {
      alert("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <PageShell>
        <section className="section">
          <div className="container max-w-2xl text-center py-16">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
              <svg className="h-10 w-10 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </div>
            <h1 className="text-3xl font-bold text-slate-900">Property Submitted!</h1>
            <p className="mt-3 text-slate-600">Your property has been submitted to the ClickyTour marketplace. Your reference ID is:</p>
            <div className="mt-4 inline-block rounded-xl bg-slate-100 px-6 py-3 font-mono text-xl font-bold text-cyan-700">{refId}</div>
            <p className="mt-4 text-sm text-slate-500">Save this reference. You can use it to track your submission status. Matching property management companies will be able to view a redacted version of your listing and express interest.</p>
            <div className="mt-6 flex justify-center gap-3">
              <a href="/owners" className="rounded-full bg-cyan-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-cyan-700 transition">Back to Owners</a>
              <a href="/marketplace" className="rounded-full border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition">View Marketplace</a>
            </div>
          </div>
        </section>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <Hero
        title="Submit Your Property"
        subtitle="List your property on the ClickyTour marketplace. Get matched with trusted property management companies, agents, and service providers across Greece."
        ctaA="Start Submission"
        ctaHrefA="#owner-submit-form"
        ctaB="How It Works"
        ctaHrefB="/pmc-requests-pool"
      />

      <section className="section">
        <div className="container max-w-4xl">
          {/* How it works */}
          <div className="mb-8 grid gap-4 md:grid-cols-3">
            {[
              { step: "1", title: "Submit Property", desc: "Fill in your property details and management preferences. Takes 5-10 minutes." },
              { step: "2", title: "PMCs Browse & Claim", desc: "Qualified PMCs see a redacted version and express interest. Your contact info stays private." },
              { step: "3", title: "ClickyTour Connects", desc: "We review claims and facilitate introductions. You choose who to work with." },
            ].map((s) => (
              <div key={s.step} className="rounded-xl border border-slate-200 bg-white p-5 text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 text-cyan-700 font-bold">{s.step}</div>
                <h3 className="mt-3 font-bold text-slate-900">{s.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          <form id="owner-submit-form" className="rounded-2xl border border-slate-300 bg-white p-4 md:p-6" onSubmit={(e) => e.preventDefault()}>
            <h2 className="text-2xl font-bold text-slate-900">Property Submission Form</h2>
            <p className="mt-1 text-sm text-slate-500">All fields marked * are required. Your personal information is never shared with PMCs.</p>

            {/* Step indicators */}
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {[
                { n: 1, label: "Owner & Property Type" },
                { n: 2, label: "Location & Specs" },
                { n: 3, label: "Pricing & Services" },
              ].map(({ n, label }) => {
                const active = step === n; const done = step > n;
                return (
                  <button key={n} type="button" onClick={() => setStep(n as Step)}
                    className={`rounded-xl border p-3 text-left text-sm transition ${active ? "border-cyan-600 bg-cyan-600 text-white" : done ? "border-emerald-600 bg-emerald-50 text-emerald-800" : "border-slate-300 bg-slate-50 text-slate-700"}`}>
                    <div className="font-semibold">Step {n}</div>
                    <div className="mt-0.5 text-xs opacity-90">{label}</div>
                  </button>
                );
              })}
            </div>

            {/* Step 1: Owner + Property Type */}
            {step === 1 && (
              <>
                <fieldset className="mt-4 rounded-xl border border-slate-200 p-3">
                  <legend className="px-2 text-sm font-semibold text-slate-800">What Are You Looking For?</legend>
                  <div className="grid gap-3 md:grid-cols-2">
                    <label className={labelClass}>Purpose *
                      <select name="subrole" className={inputClass} value={subrole} onChange={(e) => setSubrole(e.target.value)}>
                        {subroles.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
                      </select>
                    </label>
                    <label className={labelClass}>Property Type *
                      <select name="propertyType" className={inputClass}>
                        {propertyTypes.map((t) => <option key={t}>{t}</option>)}
                      </select>
                    </label>
                  </div>
                </fieldset>

                <fieldset className="mt-4 rounded-xl border border-slate-200 p-3">
                  <legend className="px-2 text-sm font-semibold text-slate-800">Owner Contact (Private)</legend>
                  <p className="mb-3 text-xs text-slate-500">This information is never shown to PMCs. ClickyTour uses it to contact you.</p>
                  <div className="grid gap-3 md:grid-cols-2">
                    <label className={labelClass}>First Name *<input name="ownerFirstName" className={inputClass} required /></label>
                    <label className={labelClass}>Last Name *<input name="ownerLastName" className={inputClass} required /></label>
                    <label className={labelClass}>Email *<input name="ownerEmail" type="email" className={inputClass} required /></label>
                    <label className={labelClass}>Phone<input name="ownerPhone" type="tel" className={inputClass} placeholder="+30 ..." /></label>
                    <label className={labelClass}>Preferred Contact
                      <select name="preferredContact" className={inputClass}>
                        <option value="">Select...</option><option>Email</option><option>Phone</option><option>WhatsApp</option><option>Viber</option>
                      </select>
                    </label>
                    <label className={labelClass}>Country<input name="ownerCountry" className={inputClass} defaultValue="Greece" /></label>
                  </div>
                </fieldset>

                <fieldset className="mt-4 rounded-xl border border-slate-200 p-3">
                  <legend className="px-2 text-sm font-semibold text-slate-800">Property Name</legend>
                  <label className={labelClass}>Give your property a name (visible to PMCs)
                    <input name="leadName" className={inputClass} placeholder="e.g. Seaside Villa in Chania" required />
                  </label>
                </fieldset>
              </>
            )}

            {/* Step 2: Location & Specs */}
            {step === 2 && (
              <>
                <fieldset className="mt-4 rounded-xl border border-slate-200 p-3">
                  <legend className="px-2 text-sm font-semibold text-slate-800">Location</legend>
                  <div className="grid gap-3 md:grid-cols-2">
                    <PlaceAutocomplete label="Region *" name="region" placeholder="e.g., Crete" required />
                    <label className={labelClass}>City<input name="city" className={inputClass} /></label>
                    <label className={labelClass}>Street Address (Private)<input name="propertyAddrStreet1" className={inputClass} /></label>
                    <label className={labelClass}>Postal Code (Private)<input name="propertyAddrPostal" className={inputClass} /></label>
                    <label className={labelClass}>Google Maps URL (Private)<input name="googleMapPropertyUrl" className={inputClass} placeholder="https://maps.google.com/..." /></label>
                    <label className={labelClass}>Country<input name="country" className={inputClass} defaultValue="Greece" /></label>
                  </div>
                </fieldset>

                <fieldset className="mt-4 rounded-xl border border-slate-200 p-3">
                  <legend className="px-2 text-sm font-semibold text-slate-800">Property Specs</legend>
                  <div className="grid gap-3 md:grid-cols-3">
                    <label className={labelClass}>Bedrooms *<input type="number" name="bedrooms" className={inputClass} min="0" required /></label>
                    <label className={labelClass}>Bathrooms<input type="number" name="bathrooms" className={inputClass} min="0" /></label>
                    <label className={labelClass}>Max Guests<input type="number" name="maxGuests" className={inputClass} min="1" /></label>
                    <label className={labelClass}>Square Meters<input type="number" name="squareMeters" className={inputClass} min="1" /></label>
                    <label className={labelClass}>Floors<input type="number" name="floors" className={inputClass} min="1" /></label>
                    <label className={labelClass}>Year Built<input type="number" name="yearBuilt" className={inputClass} /></label>
                  </div>
                  <div className="mt-3 grid gap-3 md:grid-cols-2">
                    <div className={labelClass}>Has Pool?
                      <div className="mt-2 flex gap-4 text-sm text-slate-700">
                        <label className="flex items-center gap-2"><input type="radio" name="hasPool" value="yes" /> Yes</label>
                        <label className="flex items-center gap-2"><input type="radio" name="hasPool" value="no" defaultChecked /> No</label>
                      </div>
                    </div>
                    <label className={labelClass}>Pool Type<input name="poolType" className={inputClass} placeholder="Private / Shared / Infinity" /></label>
                  </div>
                </fieldset>

                <fieldset className="mt-4 rounded-xl border border-slate-200 p-3">
                  <legend className="px-2 text-sm font-semibold text-slate-800">Photos</legend>
                  <p className="mb-2 text-xs text-slate-500">Upload up to 5 photos. These will be visible to PMCs browsing the pool.</p>
                  <input type="file" name="photos" accept="image/*" multiple className="block w-full text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-cyan-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-cyan-700 hover:file:bg-cyan-100" />
                </fieldset>
              </>
            )}

            {/* Step 3: Pricing & Services */}
            {step === 3 && (
              <>
                <fieldset className="mt-4 rounded-xl border border-slate-200 p-3">
                  <legend className="px-2 text-sm font-semibold text-slate-800">Pricing</legend>
                  <div className="grid gap-3 md:grid-cols-2">
                    <label className={labelClass}>Desired Net Rate *<input name="desiredNetoRate" className={inputClass} placeholder="e.g. 150" required /></label>
                    <label className={labelClass}>Rate Period
                      <select name="priceDescriptionPer" className={inputClass}>
                        <option value="per night">Per Night</option>
                        <option value="per week">Per Week</option>
                        <option value="per month">Per Month</option>
                        <option value="total">Total (Sale Price)</option>
                      </select>
                    </label>
                    <label className={labelClass}>Available From<input type="date" name="availableFromDate" className={inputClass} /></label>
                    <label className={labelClass}>Available Until (Optional)<input type="date" name="availableUntilDate" className={inputClass} /></label>
                  </div>
                </fieldset>

                <fieldset className="mt-4 rounded-xl border border-slate-200 p-3">
                  <legend className="px-2 text-sm font-semibold text-slate-800">Services Needed</legend>
                  <p className="mb-3 text-xs text-slate-500">Select which services you need from a property management company.</p>
                  <div className="flex flex-wrap gap-2">
                    {PMC_SERVICE_TAGS.map((tag) => (
                      <button key={tag} type="button" onClick={() => toggleTag(tag)}
                        className={`rounded-full border px-3 py-1.5 text-sm transition ${selectedTags.includes(tag) ? "border-cyan-600 bg-cyan-50 text-cyan-700 font-medium" : "border-slate-300 bg-white text-slate-600 hover:border-slate-400"}`}>
                        {tag}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <fieldset className="mt-4 rounded-xl border border-slate-200 p-3">
                  <legend className="px-2 text-sm font-semibold text-slate-800">Additional Notes</legend>
                  <label className={labelClass}>Anything else PMCs should know?
                    <textarea name="notes" className={inputClass} rows={3} placeholder="Special requirements, timeline preferences, etc." />
                  </label>
                </fieldset>

                <div className="mt-4 space-y-2 text-sm text-slate-700">
                  <label className="flex items-start gap-2">
                    <input type="checkbox" name="consent" className="mt-1" required />
                    I agree to the <a href="/terms" className="text-cyan-600 underline">Terms of Service</a> and <a href="/privacy-policy" className="text-cyan-600 underline">Privacy Policy</a>. I understand my contact information will remain private and only shared after mutual consent.
                  </label>
                  <label className="flex items-start gap-2">
                    <input type="checkbox" name="marketingConsent" className="mt-1" />
                    I&apos;d like to receive property management tips and market updates from ClickyTour.
                  </label>
                </div>

                {/* Honeypot */}
                <div className="hidden"><input name="websiteHp" tabIndex={-1} autoComplete="off" /></div>
              </>
            )}

            {/* Navigation */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex gap-3">
                {step > 1 && (
                  <button type="button" onClick={() => setStep((s) => (s - 1) as Step)} className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50">Previous</button>
                )}
                {step < 3 ? (
                  <button type="button" onClick={() => setStep((s) => (s + 1) as Step)} className="rounded-xl bg-cyan-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-cyan-700">Next Step</button>
                ) : (
                  <button type="button" onClick={handleSubmit} disabled={submitting} className="rounded-xl bg-cyan-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-cyan-700 disabled:opacity-60">
                    {submitting ? "Submitting..." : "Submit Property"}
                  </button>
                )}
              </div>
              <span className="text-xs text-slate-400">Step {step} of 3</span>
            </div>
          </form>
        </div>
      </section>

      {/* Privacy callout */}
      <section className="bg-slate-50 py-10">
        <div className="container max-w-3xl text-center">
          <h3 className="text-lg font-bold text-slate-900">Your Privacy is Protected</h3>
          <p className="mt-2 text-sm text-slate-600">Owner name, email, phone, exact address, and GPS coordinates are <strong>never</strong> shown to PMCs. They see only property specs, region, photos, and service requirements. ClickyTour acts as a trusted broker between both parties.</p>
        </div>
      </section>
    </PageShell>
  );
}
