"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { PageShell } from "@/components/site";
import { MOCK_POOL_CARDS, MOCK_PMC_ITEMS } from "@/lib/marketplace";
import { listAllSubmissions } from "@/lib/marketplace/client";
import type { PoolCard } from "@/lib/marketplace/types";

type Tab = "submissions" | "claims" | "pmcs" | "stats";

// Mock claims data
const MOCK_CLAIMS = [
  { ref: "CTV-A1B2C3", pmcName: "Aegean Property Management", pmcEmail: "info@aegeanpm.example", pmcPhone: "+30 281 0XX XXXX", claimedAtIso: "2026-02-19T11:00:00Z", status: "pending" },
  { ref: "CTV-A1B2C3", pmcName: "Island Stays Management", pmcEmail: "hello@islandstays.example", pmcPhone: "+30 228 9XX XXXX", claimedAtIso: "2026-02-19T14:30:00Z", status: "approved" },
  { ref: "CTV-D4E5F6", pmcName: "Athens Urban Living", pmcEmail: "contact@athensurban.example", pmcPhone: "+30 210 XXX XXXX", claimedAtIso: "2026-02-20T09:15:00Z", status: "pending" },
];

function StatCard({ label, value, change, color }: { label: string; value: string | number; change?: string; color: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <span className="text-sm text-slate-500">{label}</span>
      <div className="mt-1 flex items-baseline gap-2">
        <span className={`text-2xl font-bold text-${color}-600`}>{value}</span>
        {change && <span className="text-xs text-emerald-600 font-medium">{change}</span>}
      </div>
    </div>
  );
}

export default function OpsOperatorPMCPage() {
  const [tab, setTab] = useState<Tab>("submissions");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [liveCards, setLiveCards] = useState<PoolCard[]>(MOCK_POOL_CARDS);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    listAllSubmissions()
      .then((res) => {
        if (res.ok && res.items) {
          setLiveCards(res.items as unknown as PoolCard[]);
          setIsLive(!res._mock);
        }
      })
      .catch(() => {});
  }, []);

  const filteredSubmissions = useMemo(() => {
    let items = liveCards;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      items = items.filter((c) => c.leadName.toLowerCase().includes(q) || c.ref.toLowerCase().includes(q) || c.region.toLowerCase().includes(q));
    }
    return items;
  }, [searchQuery, liveCards]);

  const filteredClaims = useMemo(() => {
    let items = MOCK_CLAIMS;
    if (statusFilter) items = items.filter((c) => c.status === statusFilter);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      items = items.filter((c) => c.pmcName.toLowerCase().includes(q) || c.ref.toLowerCase().includes(q));
    }
    return items;
  }, [searchQuery, statusFilter]);

  const tabs: { id: Tab; label: string; count: number }[] = [
    { id: "submissions", label: "Submissions", count: liveCards.length },
    { id: "claims", label: "Claims", count: MOCK_CLAIMS.length },
    { id: "pmcs", label: "PMCs", count: MOCK_PMC_ITEMS.length },
    { id: "stats", label: "Stats", count: 0 },
  ];

  return (
    <PageShell>
      {/* Header */}
      <section className="bg-gradient-to-r from-violet-900 to-violet-700 text-white py-8">
        <div className="container">
          <div className="flex items-center gap-3 mb-1">
            <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">Operator</span>
            <span className="rounded-full bg-amber-500/20 px-2.5 py-0.5 text-[10px] font-bold uppercase text-amber-300">CRM</span>
          </div>
          <h1 className="text-3xl font-bold">Operations Dashboard</h1>
          <p className="mt-1 text-violet-200 text-sm">Manage property submissions, PMC claims, and marketplace operations.</p>
        </div>
      </section>

      {/* Stats row */}
      <section className="bg-slate-50 py-6 border-b border-slate-200">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard label="Total Submissions" value={liveCards.length} change="+2 this week" color="cyan" />
            <StatCard label="Active Claims" value={MOCK_CLAIMS.filter((c) => c.status === "pending").length} color="amber" />
            <StatCard label="PMCs Registered" value={MOCK_PMC_ITEMS.length} change="+1 this week" color="violet" />
            <StatCard label="Successful Matches" value={MOCK_CLAIMS.filter((c) => c.status === "approved").length} color="emerald" />
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="border-b border-slate-200 bg-white">
        <div className="container">
          <div className="flex items-center gap-1 overflow-x-auto">
            {tabs.map((t) => (
              <button key={t.id} onClick={() => setTab(t.id)}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition whitespace-nowrap ${tab === t.id ? "border-violet-600 text-violet-700" : "border-transparent text-slate-500 hover:text-slate-700"}`}>
                {t.label} {t.count > 0 && <span className="ml-1 rounded-full bg-slate-100 px-2 py-0.5 text-xs">{t.count}</span>}
              </button>
            ))}
            <div className="ml-auto flex items-center gap-2 py-2">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm outline-none focus:border-violet-400 w-48"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Submissions tab */}
          {tab === "submissions" && (
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-900">All Submissions</h2>
                <span className="text-sm text-slate-500">{filteredSubmissions.length} total</span>
              </div>
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50 text-left">
                    <tr>
                      <th className="px-4 py-3 font-medium text-slate-500">Ref</th>
                      <th className="px-4 py-3 font-medium text-slate-500">Property</th>
                      <th className="px-4 py-3 font-medium text-slate-500">Type</th>
                      <th className="px-4 py-3 font-medium text-slate-500">Region</th>
                      <th className="px-4 py-3 font-medium text-slate-500">Rate</th>
                      <th className="px-4 py-3 font-medium text-slate-500">Claims</th>
                      <th className="px-4 py-3 font-medium text-slate-500">Created</th>
                      <th className="px-4 py-3 font-medium text-slate-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredSubmissions.map((card) => {
                      const claimCount = MOCK_CLAIMS.filter((c) => c.ref === card.ref).length;
                      return (
                        <tr key={card.ref} className="hover:bg-slate-50">
                          <td className="px-4 py-3 font-mono text-xs text-cyan-700">{card.ref}</td>
                          <td className="px-4 py-3 font-medium text-slate-900">{card.leadName}</td>
                          <td className="px-4 py-3"><span className="rounded-full bg-sky-100 px-2 py-0.5 text-xs text-sky-700">{card.propertyType}</span></td>
                          <td className="px-4 py-3 text-slate-600">{card.region}</td>
                          <td className="px-4 py-3 text-slate-600">{card.desiredNetoRate ? `\u20AC${card.desiredNetoRate}` : "-"}</td>
                          <td className="px-4 py-3">
                            <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${claimCount > 0 ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-500"}`}>
                              {claimCount}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-xs text-slate-500">{new Date(card.createdAtIso).toLocaleDateString()}</td>
                          <td className="px-4 py-3">
                            <div className="flex gap-1">
                              <Link href={`/submission-viewer?ref=${card.ref}&token=admin`} className="rounded-lg bg-violet-100 px-2.5 py-1 text-xs font-medium text-violet-700 hover:bg-violet-200 transition">View</Link>
                              <Link href={`/pmc-submission-viewer?ref=${card.ref}&token=share`} className="rounded-lg bg-cyan-100 px-2.5 py-1 text-xs font-medium text-cyan-700 hover:bg-cyan-200 transition">PMC Link</Link>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Claims tab */}
          {tab === "claims" && (
            <div>
              <div className="mb-4 flex items-center justify-between gap-3">
                <h2 className="text-lg font-bold text-slate-900">All Claims</h2>
                <div className="flex gap-2">
                  <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm outline-none">
                    <option value="">All Statuses</option>
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>
              </div>
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50 text-left">
                    <tr>
                      <th className="px-4 py-3 font-medium text-slate-500">Ref</th>
                      <th className="px-4 py-3 font-medium text-slate-500">PMC</th>
                      <th className="px-4 py-3 font-medium text-slate-500">Email</th>
                      <th className="px-4 py-3 font-medium text-slate-500">Phone</th>
                      <th className="px-4 py-3 font-medium text-slate-500">Status</th>
                      <th className="px-4 py-3 font-medium text-slate-500">Claimed</th>
                      <th className="px-4 py-3 font-medium text-slate-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredClaims.map((claim, i) => (
                      <tr key={`${claim.ref}-${i}`} className="hover:bg-slate-50">
                        <td className="px-4 py-3 font-mono text-xs text-cyan-700">{claim.ref}</td>
                        <td className="px-4 py-3 font-medium text-slate-900">{claim.pmcName}</td>
                        <td className="px-4 py-3 text-slate-600">{claim.pmcEmail}</td>
                        <td className="px-4 py-3 text-slate-600">{claim.pmcPhone}</td>
                        <td className="px-4 py-3">
                          <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${claim.status === "approved" ? "bg-emerald-100 text-emerald-700" : claim.status === "rejected" ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"}`}>
                            {claim.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-xs text-slate-500">{new Date(claim.claimedAtIso).toLocaleString()}</td>
                        <td className="px-4 py-3">
                          <div className="flex gap-1">
                            {claim.status === "pending" && (
                              <>
                                <button className="rounded-lg bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700 hover:bg-emerald-200 transition">Approve</button>
                                <button className="rounded-lg bg-red-100 px-2.5 py-1 text-xs font-medium text-red-700 hover:bg-red-200 transition">Reject</button>
                              </>
                            )}
                            <Link href={`/submission-viewer?ref=${claim.ref}&token=admin`} className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 hover:bg-slate-200 transition">View</Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* PMCs tab */}
          {tab === "pmcs" && (
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-900">Registered PMCs</h2>
                <span className="text-sm text-slate-500">{MOCK_PMC_ITEMS.length} registered</span>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {MOCK_PMC_ITEMS.map((pmc) => (
                  <div key={pmc.id} className="rounded-xl border border-slate-200 bg-white p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-slate-900">{pmc.name}</h3>
                        <p className="text-xs text-slate-500">{pmc.subtitle}</p>
                      </div>
                      {pmc.verifiedBadge && <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">Verified</span>}
                    </div>
                    <div className="space-y-1 text-sm text-slate-600 mb-3">
                      <p>Region: {pmc.region}</p>
                      <p>Rating: {pmc.rating} ({pmc.reviewCount} reviews)</p>
                      <p>Properties: {String(pmc.meta.managedProperties)}</p>
                    </div>
                    {/* Operator sees gated info */}
                    <div className="rounded-lg bg-violet-50 border border-violet-200 p-3 text-xs space-y-1 mb-3">
                      <p className="font-semibold text-violet-800">Contact (Operator Only)</p>
                      <p className="text-violet-700">{pmc.gated.email}</p>
                      <p className="text-violet-700">{pmc.gated.phone}</p>
                      {pmc.gated.website && <p className="text-violet-700">{pmc.gated.website}</p>}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {pmc.tags.slice(0, 4).map((t) => <span key={t} className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-600">{t}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stats tab */}
          {tab === "stats" && (
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-4">Marketplace Analytics</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white p-6">
                  <h3 className="font-bold text-slate-900 mb-4">Submissions by Region</h3>
                  <div className="space-y-3">
                    {Array.from(new Set(liveCards.map((c) => c.region))).map((region) => {
                      const count = liveCards.filter((c) => c.region === region).length;
                      const pct = Math.round((count / liveCards.length) * 100);
                      return (
                        <div key={region}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-slate-700">{region}</span>
                            <span className="text-slate-500">{count} ({pct}%)</span>
                          </div>
                          <div className="h-2 rounded-full bg-slate-100">
                            <div className="h-full rounded-full bg-cyan-500 transition-all" style={{ width: `${pct}%` }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-6">
                  <h3 className="font-bold text-slate-900 mb-4">Claim Conversion</h3>
                  <div className="space-y-4">
                    <div className="text-center py-6">
                      <span className="text-5xl font-bold text-emerald-600">{Math.round((MOCK_CLAIMS.filter((c) => c.status === "approved").length / Math.max(MOCK_CLAIMS.length, 1)) * 100)}%</span>
                      <p className="mt-2 text-sm text-slate-500">Claims approved</p>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div><span className="block text-lg font-bold text-amber-600">{MOCK_CLAIMS.filter((c) => c.status === "pending").length}</span><span className="text-xs text-slate-500">Pending</span></div>
                      <div><span className="block text-lg font-bold text-emerald-600">{MOCK_CLAIMS.filter((c) => c.status === "approved").length}</span><span className="text-xs text-slate-500">Approved</span></div>
                      <div><span className="block text-lg font-bold text-red-600">{MOCK_CLAIMS.filter((c) => c.status === "rejected").length}</span><span className="text-xs text-slate-500">Rejected</span></div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-6">
                  <h3 className="font-bold text-slate-900 mb-4">Property Types</h3>
                  <div className="space-y-3">
                    {Array.from(new Set(liveCards.map((c) => c.propertyType))).map((type) => {
                      const count = liveCards.filter((c) => c.propertyType === type).length;
                      return (
                        <div key={type} className="flex items-center justify-between text-sm">
                          <span className="text-slate-700">{type}</span>
                          <span className="rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-medium text-sky-700">{count}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-6">
                  <h3 className="font-bold text-slate-900 mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    {[
                      { action: "New submission", detail: "CTV-J1K2L3 - Seaside Villa Halkidiki", time: "2h ago", color: "cyan" },
                      { action: "Claim approved", detail: "Island Stays -> CTV-A1B2C3", time: "5h ago", color: "emerald" },
                      { action: "New claim", detail: "Athens Urban Living -> CTV-D4E5F6", time: "1d ago", color: "amber" },
                      { action: "PMC registered", detail: "Athens Urban Living", time: "3d ago", color: "violet" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm">
                        <div className={`mt-1 h-2 w-2 rounded-full bg-${item.color}-500 shrink-0`} />
                        <div className="flex-1">
                          <span className="font-medium text-slate-900">{item.action}</span>
                          <p className="text-xs text-slate-500">{item.detail}</p>
                        </div>
                        <span className="text-xs text-slate-400 whitespace-nowrap">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}
