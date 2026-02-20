"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { PageShell } from "@/components/site";
import { MOCK_POOL_CARDS } from "@/lib/marketplace";

/** Full submission viewer — admin/operator sees ALL fields (no redaction) */
function FullViewerContent() {
  const params = useSearchParams();
  const ref = params.get("ref") || "";
  const token = params.get("token") || "";

  const card = MOCK_POOL_CARDS.find((c) => c.ref === ref);

  if (!ref || !token) {
    return (
      <section className="section">
        <div className="container max-w-3xl text-center py-16">
          <h2 className="text-xl font-bold text-slate-900">Submission Viewer</h2>
          <p className="mt-2 text-slate-500">Admin/operator access. Requires <code>?ref=...&amp;token=...</code> with a valid admin token.</p>
        </div>
      </section>
    );
  }

  if (!card) {
    return (
      <section className="section">
        <div className="container max-w-3xl text-center py-16">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-8">
            <h2 className="text-xl font-bold text-amber-900">Not Found</h2>
            <p className="mt-2 text-sm text-amber-700">Reference <strong>{ref}</strong> was not found or has expired.</p>
          </div>
        </div>
      </section>
    );
  }

  // Mock full data (in production, admin token returns unredacted payload)
  const ownerData = {
    ownerFirstName: "Nikolaos",
    ownerLastName: "Papadopoulos",
    ownerEmail: "nikos@example.com",
    ownerPhone: "+30 694 123 4567",
    propertyAddrStreet1: "Odos Kalamaki 12",
    propertyAddrPostal: "73100",
    googleMapPropertyUrl: "https://maps.google.com/?q=35.5138,24.0180",
    gpsLatitude: "35.5138",
    gpsLongitude: "24.0180",
  };

  return (
    <>
      {/* Admin banner */}
      <section className="bg-violet-600 text-white">
        <div className="container max-w-5xl py-3 flex items-center gap-3 text-sm">
          <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
          <span><strong>Admin View</strong> — Full submission data (unredacted). Do not share this URL.</span>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-5xl">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="rounded-full bg-sky-100 px-3 py-0.5 text-xs font-semibold text-sky-700">{card.propertyType}</span>
              <span className="rounded-full bg-slate-100 px-3 py-0.5 text-xs font-semibold text-slate-600">{card.role}/{card.subrole}</span>
              <span className="ml-auto font-mono text-sm text-slate-400">{card.ref}</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900">{card.leadName}</h1>
            <p className="text-sm text-slate-500">Created: {new Date(card.createdAtIso).toLocaleString()}</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Owner info (FULL) */}
            <div className="rounded-xl border-2 border-violet-200 bg-violet-50 p-5">
              <h3 className="font-bold text-violet-900 mb-3 flex items-center gap-2">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                Owner Information (Private)
              </h3>
              <dl className="space-y-2 text-sm">
                {Object.entries(ownerData).map(([key, val]) => (
                  <div key={key} className="flex justify-between gap-2">
                    <dt className="text-violet-700 capitalize">{key.replace(/([A-Z])/g, " $1").replace("owner ", "").trim()}</dt>
                    <dd className="font-medium text-violet-900 text-right">{val}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Property specs */}
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-slate-900 mb-3">Property Details</h3>
              <dl className="space-y-2 text-sm">
                {[
                  ["Type", card.propertyType],
                  ["Region", card.region],
                  ["City", card.city],
                  ["Country", card.country],
                  ["Bedrooms", card.bedrooms],
                  ["Bathrooms", card.bathrooms],
                  ["Max Guests", card.maxGuests],
                  ["Area (m\u00B2)", card.squareMeters],
                  ["Pool", card.hasPool ? (card.poolType || "Yes") : "No"],
                  ["Available From", card.availableFromDate],
                  ["Rate", card.desiredNetoRate ? `${card.desiredNetoRate} ${card.priceDescriptionPer}` : "Not set"],
                ].filter(([, v]) => v).map(([k, v]) => (
                  <div key={k} className="flex justify-between"><dt className="text-slate-500">{k}</dt><dd className="font-medium text-slate-900">{v}</dd></div>
                ))}
              </dl>
            </div>

            {/* Tags */}
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-slate-900 mb-3">Service Tags</h3>
              <div className="flex flex-wrap gap-2">
                {card.tags.map((t) => <span key={t} className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-sm text-cyan-700">{t}</span>)}
              </div>
            </div>

            {/* Images */}
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-slate-900 mb-3">Photos ({card.images.length})</h3>
              {card.images.length > 0 ? (
                <div className="grid grid-cols-2 gap-2">
                  {card.images.map((img, i) => (
                    <img key={i} src={img.url} alt={img.name} className="rounded-lg object-cover h-32 w-full" />
                  ))}
                </div>
              ) : (
                <p className="text-sm text-slate-500">No photos uploaded.</p>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`/pmc-submission-viewer?ref=${card.ref}&token=share`} target="_blank" className="rounded-full bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-cyan-700 transition">Generate PMC Share Link</a>
            <a href={`/ops-operator-pmc`} className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition">Back to Dashboard</a>
            <button className="rounded-full border border-red-300 px-5 py-2.5 text-sm font-semibold text-red-700 hover:bg-red-50 transition">Delete Submission</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default function SubmissionViewerPage() {
  return (
    <PageShell>
      <Suspense fallback={<div className="py-20 text-center text-slate-400">Loading...</div>}>
        <FullViewerContent />
      </Suspense>
    </PageShell>
  );
}
