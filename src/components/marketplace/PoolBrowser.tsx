"use client";

import { useState, useMemo } from "react";
import type { PoolCard as PoolCardType } from "@/lib/marketplace/types";
import { PoolCard } from "./PoolCard";

/**
 * Reusable pool browser — browse redacted submission cards.
 * Used for PMC requests pool, service requests, agent requests, etc.
 */
export function PoolBrowser({
  cards,
  title = "Requests Pool",
  subtitle,
  onClaim,
}: {
  cards: PoolCardType[];
  title?: string;
  subtitle?: string;
  onClaim?: (card: PoolCardType) => void;
}) {
  const [regionFilter, setRegionFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [sortBy, setSortBy] = useState<"newest" | "price">("newest");

  const regions = useMemo(() => Array.from(new Set(cards.map((c) => c.region).filter(Boolean))), [cards]);
  const types = useMemo(() => Array.from(new Set(cards.map((c) => c.propertyType).filter(Boolean))), [cards]);

  const filtered = useMemo(() => {
    let result = cards;
    if (regionFilter) result = result.filter((c) => c.region === regionFilter);
    if (typeFilter) result = result.filter((c) => c.propertyType === typeFilter);
    result = [...result].sort((a, b) => {
      if (sortBy === "newest") return new Date(b.createdAtIso).getTime() - new Date(a.createdAtIso).getTime();
      return (parseFloat(a.desiredNetoRate) || 0) - (parseFloat(b.desiredNetoRate) || 0);
    });
    return result;
  }, [cards, regionFilter, typeFilter, sortBy]);

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
        {subtitle && <p className="mt-1 text-sm text-slate-500">{subtitle}</p>}
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        {regions.length > 0 && (
          <select
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-cyan-400"
          >
            <option value="">All Regions</option>
            {regions.map((r) => (<option key={r} value={r}>{r}</option>))}
          </select>
        )}
        {types.length > 0 && (
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-cyan-400"
          >
            <option value="">All Types</option>
            {types.map((t) => (<option key={t} value={t}>{t}</option>))}
          </select>
        )}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
          className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-cyan-400"
        >
          <option value="newest">Newest First</option>
          <option value="price">Price: Low to High</option>
        </select>
        <span className="ml-auto text-sm text-slate-500">{filtered.length} requests</span>
      </div>

      {/* Notice */}
      <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
        <strong>Privacy protected:</strong> Owner contact information is hidden. Claim a request to start the connection process through ClickyTour.
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((card) => (
            <PoolCard key={card.ref} card={card} onClaim={onClaim} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 py-16 text-center">
          <p className="text-slate-500">No requests in the pool matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
