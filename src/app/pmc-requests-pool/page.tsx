"use client";

import { useState, useEffect } from "react";
import { PageShell, Hero } from "@/components/site";
import { PoolBrowser, SubscriptionGate } from "@/components/marketplace";
import { MOCK_POOL_CARDS } from "@/lib/marketplace";
import { fetchPool, submitClaim as apiSubmitClaim } from "@/lib/marketplace/client";
import type { PoolCard } from "@/lib/marketplace/types";

export default function PMCRequestsPoolPage() {
  const [cards, setCards] = useState<PoolCard[]>(MOCK_POOL_CARDS);
  const [loading, setLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);
  const [claimModal, setClaimModal] = useState<PoolCard | null>(null);
  const [claimForm, setClaimForm] = useState({ pmcName: "", pmcEmail: "", pmcPhone: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetchPool()
      .then((res) => {
        if (res.ok && res.items && res.items.length > 0) {
          setCards(res.items as unknown as PoolCard[]);
          setIsLive(!res._mock);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  function handleClaim(card: PoolCard) {
    setClaimModal(card);
    setSubmitted(false);
  }

  async function handleSubmitClaim() {
    if (!claimForm.pmcName || !claimModal) return;
    try {
      await apiSubmitClaim("mock-token", {
        ref: claimModal.ref,
        pmcName: claimForm.pmcName,
        pmcEmail: claimForm.pmcEmail,
        pmcPhone: claimForm.pmcPhone,
      });
      setSubmitted(true);
    } catch {
      alert("Failed to submit claim. Please try again.");
    }
  }

  return (
    <PageShell>
      <Hero
        title="PMC Requests Pool"
        subtitle="Browse property management requests from owners across Greece. Review property details, specs, and pricing — then claim requests you want to manage."
        ctaA="Apply as PMC"
        ctaHrefA="/pmc-apply"
        ctaB="PMC Directory"
        ctaHrefB="/pmc-directory"
      />

      {/* Data source indicator */}
      <section className="border-b border-slate-200 bg-white">
        <div className="container py-2 flex items-center gap-2 text-xs">
          <span className={`h-2 w-2 rounded-full ${isLive ? "bg-emerald-500" : "bg-amber-400"}`} />
          <span className="text-slate-500">{isLive ? "Live data from ClickyTour API" : "Demo data (API not connected)"}</span>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {loading ? (
            <div className="py-16 text-center text-slate-400">Loading pool data...</div>
          ) : (
            <PoolBrowser
              cards={cards}
              title="Incoming Property Requests"
              subtitle="Owner contact information is protected. Claim a request to start the connection process."
              onClaim={handleClaim}
            />
          )}
        </div>
      </section>

      {/* Info section */}
      <section className="bg-slate-50 py-12">
        <div className="container max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow-sm border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">How Claiming Works</h3>
              <ol className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><span className="flex-shrink-0 font-bold text-cyan-600">1.</span> Browse the pool and find properties matching your expertise</li>
                <li className="flex gap-2"><span className="flex-shrink-0 font-bold text-cyan-600">2.</span> Click &quot;Claim Request&quot; and submit your company details</li>
                <li className="flex gap-2"><span className="flex-shrink-0 font-bold text-cyan-600">3.</span> ClickyTour reviews and facilitates the connection with the owner</li>
                <li className="flex gap-2"><span className="flex-shrink-0 font-bold text-cyan-600">4.</span> Start managing the property once both parties agree</li>
              </ol>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">What You See</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="text-emerald-500">&#10003;</span> Property type, location, and specs</li>
                <li className="flex items-start gap-2"><span className="text-emerald-500">&#10003;</span> Desired rates and availability</li>
                <li className="flex items-start gap-2"><span className="text-emerald-500">&#10003;</span> Service tags and requirements</li>
                <li className="flex items-start gap-2"><span className="text-emerald-500">&#10003;</span> Property photos (up to 5)</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#10007;</span> Owner name, phone, email (protected)</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#10007;</span> Exact address and GPS (protected)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Claim modal */}
      {claimModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4" onClick={() => setClaimModal(null)}>
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
            {submitted ? (
              <div className="text-center py-4">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
                  <svg className="h-7 w-7 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Claim Submitted!</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Your claim for <strong>{claimModal.leadName}</strong> ({claimModal.ref}) has been submitted. ClickyTour will review and connect you with the owner.
                </p>
                <button onClick={() => setClaimModal(null)} className="mt-4 rounded-full bg-cyan-600 px-6 py-2 text-sm font-semibold text-white hover:bg-cyan-700">Close</button>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-bold text-slate-900">Claim This Property</h3>
                <p className="mt-1 text-sm text-slate-500"><strong>{claimModal.leadName}</strong> &middot; {claimModal.region} &middot; {claimModal.ref}</p>
                <div className="mt-4 space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Your Company Name *</label>
                    <input type="text" value={claimForm.pmcName} onChange={(e) => setClaimForm({ ...claimForm, pmcName: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100" placeholder="Aegean Property Management" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input type="email" value={claimForm.pmcEmail} onChange={(e) => setClaimForm({ ...claimForm, pmcEmail: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100" placeholder="info@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                    <input type="tel" value={claimForm.pmcPhone} onChange={(e) => setClaimForm({ ...claimForm, pmcPhone: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100" placeholder="+30 XXX XXX XXXX" />
                  </div>
                </div>
                <div className="mt-5 flex gap-3">
                  <button onClick={handleSubmitClaim} disabled={!claimForm.pmcName} className="flex-1 rounded-full bg-cyan-600 py-2.5 text-sm font-semibold text-white hover:bg-cyan-700 transition disabled:opacity-50 disabled:cursor-not-allowed">Submit Claim</button>
                  <button onClick={() => setClaimModal(null)} className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">Cancel</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </PageShell>
  );
}
