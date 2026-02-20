"use client";

import { useState, useMemo } from "react";
import type { DirectoryItem, DirectoryFilters } from "@/lib/marketplace/types";
import { DirectoryCard } from "./DirectoryCard";
import { SubscriptionGate } from "./SubscriptionGate";

/**
 * Reusable directory search/filter/grid component.
 * Used across all 7 directories.
 */
export function DirectorySearch({
  items,
  categories,
  regions,
  directoryLabel = "Results",
  showCategoryFilter = true,
  showRegionFilter = true,
}: {
  items: DirectoryItem[];
  categories?: { slug: string; label: string }[];
  regions?: string[];
  directoryLabel?: string;
  showCategoryFilter?: boolean;
  showRegionFilter?: boolean;
}) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [sortBy, setSortBy] = useState<"newest" | "rating" | "name">("rating");
  const [gateItem, setGateItem] = useState<DirectoryItem | null>(null);

  // Derive unique categories/regions from data if not provided
  const derivedCategories = useMemo(() => {
    if (categories) return categories;
    const cats = new Set(items.map((i) => i.category).filter(Boolean));
    return Array.from(cats).map((c) => ({ slug: c!, label: c! }));
  }, [items, categories]);

  const derivedRegions = useMemo(() => {
    if (regions) return regions;
    return Array.from(new Set(items.map((i) => i.region).filter(Boolean)));
  }, [items, regions]);

  // Filter + sort
  const filtered = useMemo(() => {
    let result = items;
    if (query) {
      const q = query.toLowerCase();
      result = result.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          i.description.toLowerCase().includes(q) ||
          i.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    if (selectedCategory) {
      result = result.filter((i) => i.category === selectedCategory);
    }
    if (selectedRegion) {
      result = result.filter((i) => i.region === selectedRegion);
    }
    // Sort
    result = [...result].sort((a, b) => {
      if (sortBy === "rating") return (b.rating ?? 0) - (a.rating ?? 0);
      if (sortBy === "newest") return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      return a.name.localeCompare(b.name);
    });
    return result;
  }, [items, query, selectedCategory, selectedRegion, sortBy]);

  return (
    <div>
      {/* Search bar + filters */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        {/* Search input */}
        <div className="relative flex-1">
          <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder={`Search ${directoryLabel.toLowerCase()}...`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
          />
        </div>

        {/* Category filter */}
        {showCategoryFilter && derivedCategories.length > 0 && (
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-cyan-400"
          >
            <option value="">All Categories</option>
            {derivedCategories.map((c) => (
              <option key={c.slug} value={c.slug}>{c.label}</option>
            ))}
          </select>
        )}

        {/* Region filter */}
        {showRegionFilter && derivedRegions.length > 0 && (
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-cyan-400"
          >
            <option value="">All Regions</option>
            {derivedRegions.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        )}

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
          className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-cyan-400"
        >
          <option value="rating">Top Rated</option>
          <option value="newest">Newest</option>
          <option value="name">A-Z</option>
        </select>
      </div>

      {/* Results count */}
      <div className="mb-4 text-sm text-slate-500">
        {filtered.length} {filtered.length === 1 ? "result" : "results"}
        {(query || selectedCategory || selectedRegion) && " found"}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <DirectoryCard
              key={item.id}
              item={item}
              onContactClick={(i) => setGateItem(i)}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 py-16 text-center">
          <p className="text-slate-500">No {directoryLabel.toLowerCase()} found matching your criteria.</p>
          <button
            onClick={() => { setQuery(""); setSelectedCategory(""); setSelectedRegion(""); }}
            className="mt-3 text-sm text-cyan-600 hover:text-cyan-700 font-medium"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Subscription gate modal */}
      {gateItem && (
        <SubscriptionGate
          businessName={gateItem.name}
          variant="modal"
          onClose={() => setGateItem(null)}
        />
      )}
    </div>
  );
}
