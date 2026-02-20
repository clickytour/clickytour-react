"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { PageShell, Hero } from "@/components/site";
import { MOCK_POOL_CARDS } from "@/lib/marketplace";

function PropertyContent() {
  const params = useSearchParams();
  const ref = params.get("ref") || "";
  const token = params.get("token") || "";

  // In production: fetch from CF Worker API /api/submissions?ref=...&token=...
  // For now: show mock data or "not found"
  const card = MOCK_POOL_CARDS.find((c) => c.ref === ref);

  if (!ref) {
    return (
      <section className="section">
        <div className="container max-w-3xl text-center py-16">
          <h2 className="text-xl font-bold text-slate-900">Property Presentation</h2>
          <p className="mt-2 text-slate-500">Missing reference ID. This page requires a valid <code>?ref=...&amp;token=...</code> URL.</p>
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
            <p className="mt-2 text-sm text-amber-700">
              Reference <strong>{ref}</strong> was not found or has expired. Property submissions are available for 30 days.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="section">
        <div className="container max-w-4xl">
          {/* Redaction notice */}
          <div className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
            <strong>PMC Preview:</strong> Owner contact information and exact address are hidden for privacy. Claim this request through ClickyTour to be connected.
          </div>

          {/* Property header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="rounded-full bg-sky-100 px-3 py-0.5 text-xs font-semibold text-sky-700">{card.propertyType}</span>
              <span className="rounded-full bg-slate-100 px-3 py-0.5 text-xs font-semibold text-slate-600">{card.role}/{card.subrole}</span>
              <span className="text-xs text-slate-400 font-mono ml-auto">{card.ref}</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900">{card.leadName}</h1>
            <p className="mt-1 text-sm text-slate-500">
              {card.city ? `${card.city}, ` : ""}{card.region}{card.country ? `, ${card.country}` : ""}
              {" "}&middot; Listed {new Date(card.createdAtIso).toLocaleDateString()}
            </p>
          </div>

          {/* Images */}
          {card.images.length > 0 ? (
            <div className="mb-8 grid gap-2 grid-cols-2 lg:grid-cols-3">
              {card.images.map((img, i) => (
                <img key={i} src={img.url} alt={img.name} className="rounded-xl object-cover h-48 w-full" />
              ))}
            </div>
          ) : (
            <div className="mb-8 rounded-2xl bg-slate-50 border border-dashed border-slate-300 h-48 flex items-center justify-center text-slate-400">
              No photos provided
            </div>
          )}

          {/* Specs grid */}
          <div className="mb-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Bedrooms", value: card.bedrooms },
              { label: "Bathrooms", value: card.bathrooms },
              { label: "Max Guests", value: card.maxGuests },
              { label: "Area (m2)", value: card.squareMeters },
            ].filter((s) => s.value).map((s) => (
              <div key={s.label} className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                <span className="block text-2xl font-bold text-slate-900">{s.value}</span>
                <span className="text-xs text-slate-500">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Details */}
          <div className="mb-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-slate-900 mb-3">Property Details</h3>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between"><dt className="text-slate-500">Type</dt><dd className="font-medium">{card.propertyType}</dd></div>
                <div className="flex justify-between"><dt className="text-slate-500">Region</dt><dd className="font-medium">{card.region}</dd></div>
                {card.city && <div className="flex justify-between"><dt className="text-slate-500">City</dt><dd className="font-medium">{card.city}</dd></div>}
                {card.hasPool && <div className="flex justify-between"><dt className="text-slate-500">Pool</dt><dd className="font-medium">{card.poolType || "Yes"}</dd></div>}
                {card.availableFromDate && <div className="flex justify-between"><dt className="text-slate-500">Available From</dt><dd className="font-medium">{card.availableFromDate}</dd></div>}
              </dl>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-slate-900 mb-3">Pricing</h3>
              {card.desiredNetoRate ? (
                <div>
                  <span className="text-3xl font-bold text-cyan-600">
                    {card.priceDescriptionPer === "total" ? "" : "\u20AC"}{card.desiredNetoRate}
                  </span>
                  <span className="text-sm text-slate-500 ml-1">{card.priceDescriptionPer}</span>
                  <p className="mt-2 text-xs text-slate-500">Desired net rate set by the owner</p>
                </div>
              ) : (
                <p className="text-sm text-slate-500">No pricing specified</p>
              )}
            </div>
          </div>

          {/* Tags */}
          {card.tags.length > 0 && (
            <div className="mb-8">
              <h3 className="font-bold text-slate-900 mb-3">Service Requirements</h3>
              <div className="flex flex-wrap gap-2">
                {card.tags.map((t) => (
                  <span key={t} className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-sm text-cyan-700">{t}</span>
                ))}
              </div>
            </div>
          )}

          {/* Claim CTA */}
          <div className="rounded-2xl bg-gradient-to-br from-cyan-600 to-cyan-700 p-8 text-center text-white">
            <h3 className="text-xl font-bold">Interested in Managing This Property?</h3>
            <p className="mt-2 text-cyan-100 text-sm">Submit a claim and ClickyTour will facilitate the connection with the owner.</p>
            <a href={`/pmc-requests-pool`} className="mt-4 inline-block rounded-full bg-white px-8 py-2.5 text-sm font-semibold text-cyan-700 hover:bg-cyan-50 transition">
              Go to Requests Pool
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default function PropertyPresentationPage() {
  return (
    <PageShell>
      <Suspense fallback={<div className="py-20 text-center text-slate-400">Loading...</div>}>
        <PropertyContent />
      </Suspense>
    </PageShell>
  );
}
