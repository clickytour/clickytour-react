"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { PageShell, Hero } from "@/components/site";
import { MOCK_POOL_CARDS } from "@/lib/marketplace";

function ViewerContent() {
  const params = useSearchParams();
  const ref = params.get("ref") || "";
  const token = params.get("token") || "";

  // In production: fetch from CF Worker /api/submissions?ref=...&token=...
  // PMC view = redacted via share token
  const card = MOCK_POOL_CARDS.find((c) => c.ref === ref);

  if (!ref) {
    return (
      <section className="section">
        <div className="container max-w-3xl text-center py-16">
          <h2 className="text-xl font-bold text-slate-900">PMC Submission Viewer</h2>
          <p className="mt-2 text-slate-500">This page requires a valid <code>?ref=...&amp;token=...</code> URL shared by ClickyTour.</p>
          <a href="/pmc-requests-pool" className="mt-4 inline-block rounded-full bg-cyan-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-cyan-700">Browse Requests Pool</a>
        </div>
      </section>
    );
  }

  if (!card) {
    return (
      <section className="section">
        <div className="container max-w-3xl text-center py-16">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-8">
            <h2 className="text-xl font-bold text-amber-900">Submission Not Found</h2>
            <p className="mt-2 text-sm text-amber-700">Reference <strong>{ref}</strong> was not found or has expired (submissions expire after 30 days).</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* PMC notice */}
      <section className="bg-emerald-50 border-b border-emerald-200">
        <div className="container max-w-4xl py-3 flex items-center gap-3 text-sm text-emerald-800">
          <svg className="h-5 w-5 text-emerald-600 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          <span><strong>PMC Preview</strong> — Owner contact details and exact address are hidden. Claim this request to be connected.</span>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="rounded-full bg-sky-100 px-3 py-0.5 text-xs font-semibold text-sky-700">{card.propertyType}</span>
                <span className="rounded-full bg-slate-100 px-3 py-0.5 text-xs font-semibold text-slate-600">{card.role}/{card.subrole}</span>
              </div>
              <h1 className="text-2xl font-bold text-slate-900">{card.leadName}</h1>
              <p className="text-sm text-slate-500">{card.city ? `${card.city}, ` : ""}{card.region}, {card.country} &middot; {new Date(card.createdAtIso).toLocaleDateString()}</p>
            </div>
            <span className="font-mono text-sm text-slate-400">{card.ref}</span>
          </div>

          {/* Images */}
          {card.images.length > 0 ? (
            <div className="mb-8 grid gap-2 grid-cols-2 lg:grid-cols-3">
              {card.images.map((img, i) => (
                <img key={i} src={img.url} alt={img.name} className="rounded-xl object-cover h-48 w-full" />
              ))}
            </div>
          ) : (
            <div className="mb-8 rounded-2xl bg-slate-50 border border-dashed border-slate-300 h-40 flex items-center justify-center text-slate-400">No photos provided</div>
          )}

          <div className="grid gap-6 md:grid-cols-2">
            {/* Specs */}
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-slate-900 mb-3">Property Specs</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[
                  { label: "Bedrooms", value: card.bedrooms },
                  { label: "Bathrooms", value: card.bathrooms },
                  { label: "Max Guests", value: card.maxGuests },
                  { label: "Area (m\u00B2)", value: card.squareMeters },
                  { label: "Pool", value: card.hasPool ? (card.poolType || "Yes") : "No" },
                  { label: "Available From", value: card.availableFromDate || "Not specified" },
                ].map((s) => (
                  <div key={s.label} className="flex justify-between"><span className="text-slate-500">{s.label}</span><span className="font-medium text-slate-900">{s.value || "-"}</span></div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-slate-900 mb-3">Pricing</h3>
              {card.desiredNetoRate ? (
                <div>
                  <span className="text-3xl font-bold text-cyan-600">{card.priceDescriptionPer === "total" ? "" : "\u20AC"}{card.desiredNetoRate}</span>
                  <span className="text-sm text-slate-500 ml-2">{card.priceDescriptionPer}</span>
                  <p className="mt-2 text-xs text-slate-500">Desired net rate set by owner</p>
                </div>
              ) : (
                <p className="text-sm text-slate-500">No pricing specified</p>
              )}
            </div>

            {/* Tags */}
            <div className="rounded-xl border border-slate-200 bg-white p-5 md:col-span-2">
              <h3 className="font-bold text-slate-900 mb-3">Service Requirements</h3>
              {card.tags.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((t) => <span key={t} className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-sm text-cyan-700">{t}</span>)}
                </div>
              ) : (
                <p className="text-sm text-slate-500">No specific service requirements listed.</p>
              )}
            </div>

            {/* Redacted fields notice */}
            <div className="rounded-xl border border-red-200 bg-red-50 p-5 md:col-span-2">
              <h3 className="font-bold text-red-900 mb-2">Hidden Information</h3>
              <p className="text-sm text-red-700">The following fields are hidden for privacy: Owner name, email, phone, street address, postal code, GPS coordinates, tracking data.</p>
            </div>
          </div>

          {/* Claim CTA */}
          <div className="mt-8 rounded-2xl bg-gradient-to-br from-cyan-600 to-cyan-700 p-8 text-center text-white">
            <h3 className="text-xl font-bold">Interested in Managing This Property?</h3>
            <p className="mt-2 text-cyan-100 text-sm">Submit a claim request and ClickyTour will facilitate the introduction with the property owner.</p>
            <a href="/pmc-requests-pool" className="mt-4 inline-block rounded-full bg-white px-8 py-2.5 text-sm font-semibold text-cyan-700 hover:bg-cyan-50 transition">Go to Requests Pool</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default function PMCSubmissionViewerPage() {
  return (
    <PageShell>
      <Suspense fallback={<div className="py-20 text-center text-slate-400">Loading...</div>}>
        <ViewerContent />
      </Suspense>
    </PageShell>
  );
}
