"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { PageShell } from "@/components/site";
import { SubscriptionGate } from "@/components/marketplace";
import { MOCK_PMC_ITEMS } from "@/lib/marketplace";

function PMCContent() {
  const params = useSearchParams();
  const id = params.get("id") || "";

  // In production: fetch from CF Worker or Core mirror DB
  const pmc = MOCK_PMC_ITEMS.find((p) => p.id === id) || MOCK_PMC_ITEMS[0];

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-12">
        <div className="container max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 text-3xl shrink-0">
              {pmc.verifiedBadge ? "\uD83C\uDFE2" : "\uD83C\uDFE0"}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                {pmc.verifiedBadge && (
                  <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold uppercase text-emerald-300">Verified</span>
                )}
                {pmc.badges.map((b) => (
                  <span key={b} className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-cyan-200">{b}</span>
                ))}
              </div>
              <h1 className="text-3xl font-bold">{pmc.name}</h1>
              <p className="mt-1 text-cyan-200">{pmc.subtitle}</p>
              <div className="mt-2 flex items-center gap-4 text-sm text-cyan-100/70">
                <span>{pmc.region}{pmc.city ? `, ${pmc.city}` : ""}</span>
                {pmc.rating && <span>&#9733; {pmc.rating} ({pmc.reviewCount} reviews)</span>}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section">
        <div className="container max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">About</h2>
                <p className="text-slate-600 leading-relaxed">{pmc.description}</p>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">Services Offered</h2>
                <div className="flex flex-wrap gap-2">
                  {pmc.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-sm text-cyan-700">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">Company Stats</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {Object.entries(pmc.meta).map(([key, val]) => (
                    <div key={key} className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                      <span className="block text-lg font-bold text-slate-900">{String(val)}</span>
                      <span className="text-xs text-slate-500 capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photos placeholder */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">Portfolio</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="h-32 rounded-xl bg-slate-100 border border-dashed border-slate-300 flex items-center justify-center text-slate-400 text-sm">Photo {i}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {/* Contact — Gated */}
              <SubscriptionGate businessName={pmc.name} />

              {/* Quick facts */}
              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <h3 className="font-bold text-slate-900 mb-3">Quick Facts</h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between"><dt className="text-slate-500">Region</dt><dd className="font-medium text-slate-900">{pmc.region}</dd></div>
                  {pmc.city && <div className="flex justify-between"><dt className="text-slate-500">City</dt><dd className="font-medium text-slate-900">{pmc.city}</dd></div>}
                  <div className="flex justify-between"><dt className="text-slate-500">Category</dt><dd className="font-medium text-slate-900">{pmc.category}</dd></div>
                  <div className="flex justify-between"><dt className="text-slate-500">Listed</dt><dd className="font-medium text-slate-900">{new Date(pmc.createdAt).toLocaleDateString()}</dd></div>
                </dl>
              </div>

              {/* CTA */}
              <div className="rounded-xl bg-gradient-to-br from-cyan-600 to-cyan-700 p-5 text-center text-white">
                <h3 className="font-bold">Need Property Management?</h3>
                <p className="mt-1 text-cyan-100 text-sm">Submit your property and get matched with PMCs like {pmc.name}.</p>
                <a href="/owner-submit-property" className="mt-3 inline-block rounded-full bg-white px-5 py-2 text-sm font-semibold text-cyan-700 hover:bg-cyan-50 transition">Submit Property</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function PMCPresentationPage() {
  return (
    <PageShell>
      <Suspense fallback={<div className="py-20 text-center text-slate-400">Loading...</div>}>
        <PMCContent />
      </Suspense>
    </PageShell>
  );
}
