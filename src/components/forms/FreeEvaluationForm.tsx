"use client";

import { useState } from "react";

type Step = 1 | 2 | 3;

const inputClass = "mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cyan-500";
const labelClass = "text-sm font-medium text-slate-700";

const managementModels = [
  {
    title: "Self-Managed Assist",
    badge: "You run ops",
    bullets: [
      "Listing tune-up (photos brief, copy, amenities mapping)",
      "Smart pricing rules for Greek seasonality & events",
      "Channel setup/health (Airbnb, Booking.com, Vrbo, Google)",
      "Owner handles guest comms & housekeeping",
    ],
  },
  {
    title: "Multi-Platform",
    badge: "Co-managed",
    bullets: [
      "Full multi-channel distribution & sync",
      "7/7 multilingual guest comms (EN/EL + optional DE/FR/RU)",
      "Revenue & yield management + min-stay/L.O.S control",
      "Access to vetted cleaners, laundry, pool/garden, transfers",
    ],
  },
  {
    title: "Fully Managed",
    badge: "Hands-off",
    bullets: [
      "End-to-end operations with quality standards & reporting",
      "Guest support 24/7, check-in/out & in-stay care",
      "Housekeeping schedule, linens, maintenance coordination",
      "Upsells & concierge (transfers, tours, chefs, activities)",
    ],
  },
];

const amenities = ["Pool", "Sea view", "Parking", "Wi-Fi", "A/C", "BBQ", "Pet-friendly", "Baby equipment", "EV charger", "Hot tub", "Gym", "Accessible"];

export function FreeEvaluationForm() {
  const [step, setStep] = useState<Step>(1);
  const [requestType, setRequestType] = useState("Property Evaluation");
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState("");

  async function handleSubmit() {
    setSubmitting(true);
    setMsg("");
    try {
      const formEl = document.querySelector<HTMLFormElement>("#eval-form");
      const formData = formEl ? new FormData(formEl) : new FormData();
      const data: Record<string, string> = {};
      formData.forEach((v, k) => { data[k] = v.toString(); });

      const payload = {
        source: "clickytour-react",
        formType: "owner-free-evaluation",
        requestType,
        submittedAt: new Date().toISOString(),
        data,
      };
      const r = await fetch("/api/forms/owner-evaluation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!r.ok) throw new Error("failed");
      setMsg("Evaluation request submitted! We'll respond within 1-2 business days.");
    } catch {
      setMsg("Submission failed. Please retry.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* Management Models Section */}
      <section className="mx-auto max-w-[1280px] px-4 pb-6">
        <h2 className="text-3xl font-bold text-slate-900">Choose the management model that fits your villa</h2>
        <p className="mt-2 text-sm text-slate-600">We operate across Greece (islands & mainland). Multi-lingual guest ops and vetted local providers.</p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {managementModels.map((m) => (
            <article key={m.title} className="flex h-full flex-col rounded-xl border border-slate-300 bg-white">
              <div className="border-b border-slate-300 p-4">
                <span className="inline-block rounded-full border border-slate-300 px-2 py-1 text-xs text-slate-600">{m.badge}</span>
                <h3 className="mt-2 text-2xl font-bold text-slate-900">{m.title}</h3>
              </div>
              <ul className="flex-1 space-y-2 p-4 text-sm text-slate-700">
                {m.bullets.map((b) => <li key={b}>• {b}</li>)}
              </ul>
              <div className="border-t border-slate-300 p-4">
                <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white">Get Free Evaluation</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Owner Intake Form */}
      <section className="mx-auto max-w-[1280px] px-4 pb-10">
        <form id="eval-form" className="rounded-2xl border border-slate-300 bg-white p-4 md:p-6" onSubmit={(e) => e.preventDefault()}>
          <h2 className="text-3xl font-bold text-slate-900">Owner / Property Intake Form</h2>
          <p className="mt-1 text-slate-600">3-step intake with dynamic fields based on your request type.</p>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {[1, 2, 3].map((n) => {
              const active = step === n; const done = step > n;
              return (
                <button key={n} type="button" onClick={() => setStep(n as Step)}
                  className={`rounded-xl border p-3 text-left text-sm ${active ? "border-cyan-600 bg-cyan-600 text-white" : done ? "border-emerald-600 bg-emerald-50 text-emerald-800" : "border-slate-300 bg-slate-50 text-slate-700"}`}>
                  <div className="font-semibold">Step {n}</div>
                  <div className="mt-0.5 text-xs opacity-90">{n === 1 ? "Start + Contact" : n === 2 ? "Region + Specs" : "Distances + Amenities"}</div>
                </button>
              );
            })}
          </div>

          {step === 1 && (
            <>
              <fieldset className="mt-4 rounded-xl border border-slate-200 p-3">
                <legend className="px-2 text-sm font-semibold text-slate-800">Start</legend>
                <div className="grid gap-3 md:grid-cols-2">
                  <label className={labelClass}>What do you need? *
                    <select name="requestType" className={inputClass} value={requestType} onChange={(e) => setRequestType(e.target.value)}>
                      <option>Property Evaluation</option><option>Listing & Marketing</option><option>Full Management</option><option>Consultation</option>
                    </select>
                  </label>
                  <label className={labelClass}>Property Type *
                    <select name="propertyType" className={inputClass}>
                      <option>Villa</option><option>House</option><option>Apartment</option><option>Townhouse</option><option>Maisonette</option><option>Other</option>
                    </select>
                  </label>
                </div>
              </fieldset>

              {requestType === "Property Evaluation" && (
                <fieldset className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50/40 p-3">
                  <legend className="px-2 text-sm font-semibold text-emerald-800">Evaluation Snapshot</legend>
                  <div className="grid gap-3 md:grid-cols-2">
                    <label className={labelClass}>Current nightly range<input name="nightlyRange" className={inputClass} placeholder="e.g. 250-420" /></label>
                    <label className={labelClass}>Target monthly revenue<input name="targetRevenue" className={inputClass} placeholder="Optional" /></label>
                  </div>
                </fieldset>
              )}
              {requestType === "Listing & Marketing" && (
                <fieldset className="mt-4 rounded-xl border border-sky-200 bg-sky-50/40 p-3">
                  <legend className="px-2 text-sm font-semibold text-sky-800">Listing & Marketing Focus</legend>
                  <div className="grid gap-3 md:grid-cols-2">
                    <label className={labelClass}>Existing listing URL<input name="listingUrl" className={inputClass} placeholder="https://..." /></label>
                    <label className={labelClass}>Main issue
                      <select name="mainIssue" className={inputClass}><option>Low visibility</option><option>Low conversion</option><option>Weak pricing</option><option>Content quality</option></select>
                    </label>
                  </div>
                </fieldset>
              )}
              {requestType === "Full Management" && (
                <fieldset className="mt-4 rounded-xl border border-violet-200 bg-violet-50/40 p-3">
                  <legend className="px-2 text-sm font-semibold text-violet-800">Full Management Needs</legend>
                  <div className="grid gap-3 md:grid-cols-2">
                    <label className={labelClass}>Current status
                      <select name="mgmtStatus" className={inputClass}><option>Self-managed</option><option>Agency-managed</option><option>Mixed</option></select>
                    </label>
                    <label className={labelClass}>Preferred start month<input name="startMonth" className={inputClass} placeholder="e.g. May 2026" /></label>
                  </div>
                </fieldset>
              )}
              {requestType === "Consultation" && (
                <fieldset className="mt-4 rounded-xl border border-amber-200 bg-amber-50/40 p-3">
                  <legend className="px-2 text-sm font-semibold text-amber-800">Consultation Brief</legend>
                  <label className={labelClass}>What do you want to discuss?<textarea name="consultBrief" className={inputClass} rows={3} placeholder="Goals, blockers, timeline..." /></label>
                </fieldset>
              )}

              <fieldset className="mt-4 rounded-xl border border-slate-200 p-3">
                <legend className="px-2 text-sm font-semibold text-slate-800">Owner / Contact</legend>
                <div className="grid gap-3 md:grid-cols-2">
                  <label className={labelClass}>First Name *<input name="firstName" className={inputClass} /></label>
                  <label className={labelClass}>Last Name *<input name="lastName" className={inputClass} /></label>
                  <label className={labelClass}>Email *<input name="email" type="email" className={inputClass} /></label>
                  <label className={labelClass}>Phone<input name="phone" className={inputClass} placeholder="+30 ..." /></label>
                  <label className={labelClass}>Preferred chat
                    <select name="chat" className={inputClass}><option value="">Select...</option><option>whatsapp</option><option>viber</option><option>telegram</option><option>messenger</option><option>email</option></select>
                  </label>
                  <label className={labelClass}>Country<input name="country" className={inputClass} /></label>
                </div>
              </fieldset>
            </>
          )}

          {step === 2 && (
            <>
              <fieldset className="mt-4 rounded-xl border border-slate-200 p-3">
                <legend className="px-2 text-sm font-semibold text-slate-800">Region & Address</legend>
                <div className="grid gap-3 md:grid-cols-2">
                  <label className={labelClass}>Region *
                    <select name="region" className={inputClass}><option>Crete</option><option>Halkidiki</option><option>Santorini</option><option>Athens</option><option>Mykonos</option><option>Paros</option><option>Other</option></select>
                  </label>
                  <label className={labelClass}>Region (text)<input name="regionText" className={inputClass} placeholder="If Other" /></label>
                  <label className={labelClass}>Street<input name="street" className={inputClass} /></label>
                  <label className={labelClass}>City<input name="city" className={inputClass} /></label>
                  <label className={labelClass}>Postal Code<input name="postalCode" className={inputClass} /></label>
                  <label className={labelClass}>Google Map URL<input name="mapUrl" className={inputClass} placeholder="https://..." /></label>
                </div>
              </fieldset>
              <fieldset className="mt-4 rounded-xl border border-slate-200 p-3">
                <legend className="px-2 text-sm font-semibold text-slate-800">History</legend>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className={labelClass}>Rented before?
                    <div className="mt-2 flex gap-4 text-sm text-slate-700">
                      <label className="flex items-center gap-2"><input type="radio" name="rentedBefore" value="yes" /> Yes</label>
                      <label className="flex items-center gap-2"><input type="radio" name="rentedBefore" value="no" defaultChecked /> No</label>
                    </div>
                  </div>
                  <label className={labelClass}>Existing Listing URL<input name="existingListingUrl" className={inputClass} placeholder="https://..." /></label>
                </div>
                <label className={`${labelClass} mt-3 block`}>Brief history<textarea name="history" className={inputClass} rows={3} /></label>
              </fieldset>
              <fieldset className="mt-4 rounded-xl border border-slate-200 p-3">
                <legend className="px-2 text-sm font-semibold text-slate-800">Property Specs</legend>
                <div className="grid gap-3 md:grid-cols-2">
                  <label className={labelClass}>Title<input name="propertyTitle" className={inputClass} placeholder="Internal name" /></label>
                  <label className={labelClass}>Condition
                    <select name="condition" className={inputClass}><option>Select</option><option>New</option><option>Excellent</option><option>Good</option><option>Needs renovation</option></select>
                  </label>
                </div>
                <div className="mt-3 grid gap-3 md:grid-cols-3">
                  <label className={labelClass}>Square meters<input type="number" name="sqm" className={inputClass} /></label>
                  <label className={labelClass}>Bedrooms *<input type="number" name="bedrooms" className={inputClass} /></label>
                  <label className={labelClass}>Beds<input type="number" name="beds" className={inputClass} /></label>
                  <label className={labelClass}>Bathrooms<input type="number" name="bathrooms" className={inputClass} /></label>
                  <label className={labelClass}>Max Guests<input type="number" name="maxGuests" className={inputClass} /></label>
                  <label className={labelClass}>Floors<input type="number" name="floors" className={inputClass} /></label>
                </div>
                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  <div className={labelClass}>Has Pool?
                    <div className="mt-2 flex gap-4 text-sm text-slate-700">
                      <label className="flex items-center gap-2"><input type="radio" name="hasPool" value="yes" /> Yes</label>
                      <label className="flex items-center gap-2"><input type="radio" name="hasPool" value="no" defaultChecked /> No</label>
                    </div>
                  </div>
                  <label className={labelClass}>Pool Type<input name="poolType" className={inputClass} placeholder="Private / Shared" /></label>
                </div>
              </fieldset>
            </>
          )}

          {step === 3 && (
            <>
              <fieldset className="mt-4 rounded-xl border border-slate-200 p-3">
                <legend className="px-2 text-sm font-semibold text-slate-800">Distances</legend>
                <div className="grid gap-3 md:grid-cols-3">
                  <label className={labelClass}>Beach (m)<input type="number" name="distBeach" className={inputClass} /></label>
                  <label className={labelClass}>Infrastructure (km)<input type="number" name="distInfra" className={inputClass} /></label>
                  <label className={labelClass}>Airport (km)<input type="number" name="distAirport" className={inputClass} /></label>
                  <label className={labelClass}>Supermarket (km)<input type="number" name="distSupermarket" className={inputClass} /></label>
                  <label className={labelClass}>Restaurants (km)<input type="number" name="distRestaurants" className={inputClass} /></label>
                  <label className={labelClass}>Marina (km)<input type="number" name="distMarina" className={inputClass} /></label>
                  <label className={labelClass}>Police (km)<input type="number" name="distPolice" className={inputClass} /></label>
                  <label className={labelClass}>Medical (km)<input type="number" name="distMedical" className={inputClass} /></label>
                </div>
              </fieldset>
              <fieldset className="mt-4 rounded-xl border border-slate-200 p-3">
                <legend className="px-2 text-sm font-semibold text-slate-800">Key Amenities</legend>
                <div className="flex flex-wrap gap-2">
                  {amenities.map((a) => (
                    <label key={a} className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1 text-sm text-slate-700">
                      <input type="checkbox" name="amenities" value={a} /> {a}
                    </label>
                  ))}
                </div>
              </fieldset>
              <div className="mt-4 rounded-xl border border-slate-200 p-3 text-sm text-slate-700">
                <label className="flex items-start gap-2"><input type="checkbox" name="consent" className="mt-1" /> I consent to data processing for evaluation and contact purposes.</label>
              </div>
            </>
          )}

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex gap-3">
              <button type="button" onClick={() => setStep((s) => Math.max(1, s - 1) as Step)} className="rounded-xl border border-slate-800 bg-white px-5 py-2.5 text-sm font-medium text-slate-900">Previous</button>
              {step < 3 ? (
                <button type="button" onClick={() => setStep((s) => Math.min(3, s + 1) as Step)} className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white">Next step</button>
              ) : (
                <button type="button" onClick={handleSubmit} disabled={submitting} className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white disabled:opacity-60">
                  {submitting ? "Submitting..." : "Submit evaluation request"}
                </button>
              )}
            </div>
          </div>

          {msg && <p className={`mt-3 text-sm ${msg.includes("submitted") ? "text-emerald-700" : "text-red-600"}`}>{msg}</p>}
        </form>
      </section>
    </>
  );
}
