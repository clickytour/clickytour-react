"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  INTENTS,
  getAllSearchItems,
  filterAndSort,
  filtersToParams,
  paramsToFilters,
  type SearchIntent,
  type SearchFilters,
  type SearchResultItem,
  type SortOption,
} from "@/lib/searchHubEngine";
import { ListingCard } from "./ListingCard";
import { FilterSidebar } from "./FilterSidebar";
import { buildPickedForUrl, type PickedForItem } from "@/lib/pickedfor";

/* ── Intent tab colors ──────────────────────────────────── */
const INTENT_TAB_COLORS: Record<SearchIntent, { active: string; inactive: string }> = {
  vacation: { active: "bg-sky-600 text-white", inactive: "text-sky-700 hover:bg-sky-50" },
  "real-estate": { active: "bg-emerald-600 text-white", inactive: "text-emerald-700 hover:bg-emerald-50" },
  hotels: { active: "bg-violet-600 text-white", inactive: "text-violet-700 hover:bg-violet-50" },
  services: { active: "bg-amber-600 text-white", inactive: "text-amber-700 hover:bg-amber-50" },
  activities: { active: "bg-orange-600 text-white", inactive: "text-orange-700 hover:bg-orange-50" },
  jobs: { active: "bg-indigo-600 text-white", inactive: "text-indigo-700 hover:bg-indigo-50" },
  pmcs: { active: "bg-teal-600 text-white", inactive: "text-teal-700 hover:bg-teal-50" },
  blog: { active: "bg-rose-600 text-white", inactive: "text-rose-700 hover:bg-rose-50" },
};

const SORT_OPTIONS: Record<SearchIntent, { value: SortOption; label: string }[]> = {
  vacation: [
    { value: "relevance", label: "Relevance" },
    { value: "price-asc", label: "Price (low)" },
    { value: "price-desc", label: "Price (high)" },
    { value: "beach-distance", label: "Beach distance" },
    { value: "rating", label: "Rating" },
  ],
  "real-estate": [
    { value: "relevance", label: "Relevance" },
    { value: "price-asc", label: "Price (low)" },
    { value: "price-desc", label: "Price (high)" },
    { value: "area", label: "Area (largest)" },
  ],
  hotels: [
    { value: "relevance", label: "Relevance" },
    { value: "price-asc", label: "Price (low)" },
    { value: "price-desc", label: "Price (high)" },
    { value: "rating", label: "Rating" },
  ],
  services: [
    { value: "relevance", label: "Relevance" },
    { value: "price-asc", label: "Price (low)" },
    { value: "price-desc", label: "Price (high)" },
  ],
  activities: [
    { value: "relevance", label: "Relevance" },
    { value: "price-asc", label: "Price (low)" },
    { value: "price-desc", label: "Price (high)" },
  ],
  jobs: [
    { value: "relevance", label: "Relevance" },
    { value: "date", label: "Newest" },
  ],
  pmcs: [
    { value: "relevance", label: "Relevance" },
    { value: "rating", label: "Rating" },
  ],
  blog: [
    { value: "relevance", label: "Relevance" },
    { value: "date", label: "Newest" },
  ],
};

/* ── Basket ──────────────────────────────────────────────── */
type BasketItem = { id: string; intent: SearchIntent; title: string; image?: string; price?: number; priceLabel?: string; href: string };

function loadBasket(): BasketItem[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem("ct_basket") || "[]"); } catch { return []; }
}
function saveBasket(items: BasketItem[]) {
  if (typeof window !== "undefined") localStorage.setItem("ct_basket", JSON.stringify(items));
}

/* ══════════════════════════════════════════════════════════
   SEARCH HUB COMPONENT
   ══════════════════════════════════════════════════════════ */

export function SearchHub() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const allItems = useMemo(() => getAllSearchItems(), []);
  const initialFilters = useMemo(() => paramsToFilters(searchParams), [searchParams]);
  const [filters, setFilters] = useState<SearchFilters>(initialFilters);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [basket, setBasket] = useState<BasketItem[]>([]);
  const [basketOpen, setBasketOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => { setBasket(loadBasket()); }, []);

  const syncUrl = useCallback(
    (f: SearchFilters) => {
      router.replace(`/search?${filtersToParams(f).toString()}`, { scroll: false });
    },
    [router]
  );

  const updateFilters = useCallback(
    (patch: Partial<SearchFilters>) => {
      setFilters((prev) => {
        const next = { ...prev, ...patch };
        syncUrl(next);
        return next;
      });
    },
    [syncUrl]
  );

  const setIntent = useCallback(
    (intent: SearchIntent) => {
      const base: SearchFilters = { intent, q: filters.q, location: filters.location, sort: "relevance" };
      setFilters(base);
      syncUrl(base);
    },
    [filters.q, filters.location, syncUrl]
  );

  const results = useMemo(() => filterAndSort(allItems, filters), [allItems, filters]);

  // Basket actions
  const addToBasket = useCallback((item: SearchResultItem) => {
    setBasket((prev) => {
      if (prev.some((b) => b.id === item.id)) return prev;
      const next = [...prev, { id: item.id, intent: item.intent, title: item.title, image: item.image, price: item.price, priceLabel: item.priceLabel, href: item.href }];
      saveBasket(next);
      return next;
    });
  }, []);

  const removeFromBasket = useCallback((id: string) => {
    setBasket((prev) => { const next = prev.filter((b) => b.id !== id); saveBasket(next); return next; });
  }, []);

  const isInBasket = useCallback((id: string) => basket.some((b) => b.id === id), [basket]);

  // Count per intent
  const intentCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const item of allItems) counts[item.intent] = (counts[item.intent] || 0) + 1;
    return counts;
  }, [allItems]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <h1 className="text-2xl font-bold text-slate-900">Search & Discover</h1>
          <p className="mt-1 text-sm text-slate-500">Find vacation rentals, properties, services, activities, jobs, and more.</p>

          {/* Intent tabs */}
          <div className="mt-4 flex flex-wrap gap-2">
            {INTENTS.map((tab) => {
              const isActive = filters.intent === tab.id;
              const colors = INTENT_TAB_COLORS[tab.id];
              return (
                <button
                  key={tab.id}
                  onClick={() => setIntent(tab.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? colors.active : colors.inactive}`}
                >
                  {tab.label}
                  <span className="ml-1.5 text-xs opacity-70">({intentCounts[tab.id] || 0})</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          {/* Desktop sidebar */}
          <div className="hidden lg:block">
            <FilterSidebar filters={filters} onUpdate={updateFilters} />
          </div>

          {/* Mobile filter toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="mb-4 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700"
            >
              {mobileFiltersOpen ? "Hide Filters" : "Show Filters"}
            </button>
            {mobileFiltersOpen && <FilterSidebar filters={filters} onUpdate={updateFilters} />}
          </div>

          {/* Results */}
          <div>
            {/* Toolbar */}
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-slate-500">{results.length} result{results.length !== 1 ? "s" : ""}</span>
              <div className="flex items-center gap-3">
                {/* Sort */}
                <select
                  value={filters.sort ?? "relevance"}
                  onChange={(e) => updateFilters({ sort: e.target.value as SortOption })}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700"
                >
                  {(SORT_OPTIONS[filters.intent] || SORT_OPTIONS.vacation).map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>

                {/* View toggle */}
                <div className="flex rounded-lg border border-slate-200">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`px-2.5 py-1.5 text-xs ${viewMode === "grid" ? "bg-teal-600 text-white" : "text-slate-500"}`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`px-2.5 py-1.5 text-xs ${viewMode === "list" ? "bg-teal-600 text-white" : "text-slate-500"}`}
                  >
                    List
                  </button>
                </div>

                {/* Basket */}
                <button
                  onClick={() => setBasketOpen(!basketOpen)}
                  className="relative rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700"
                >
                  Basket
                  {basket.length > 0 && (
                    <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-teal-600 text-[10px] text-white">
                      {basket.length}
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Basket panel */}
            {basketOpen && (
              <div className="mb-4 rounded-2xl border border-teal-200 bg-teal-50 p-4">
                <h3 className="mb-2 text-sm font-bold text-teal-800">Your Basket ({basket.length})</h3>
                {basket.length === 0 ? (
                  <p className="text-xs text-teal-600">Add items to compare or request a proposal.</p>
                ) : (
                  <div className="space-y-2">
                    {basket.map((b) => (
                      <div key={b.id} className="flex items-center justify-between rounded-lg bg-white p-2">
                        <div className="flex items-center gap-2">
                          {b.image && <img src={b.image} alt="" className="h-8 w-8 rounded object-cover" />}
                          <span className="text-sm text-slate-800">{b.title}</span>
                          {b.priceLabel && <span className="text-xs text-slate-500">{b.priceLabel}</span>}
                        </div>
                        <button onClick={() => removeFromBasket(b.id)} className="text-xs text-red-500 hover:text-red-700">Remove</button>
                      </div>
                    ))}
                    <a
                      href={buildPickedForUrl(basket.map((b) => ({ type: "property" as const, slug: b.id.replace(/^(vac|re|hotel|svc|act|job|pmc|blog)-/, ""), title: b.title, image: b.image, price: b.price, priceLabel: b.priceLabel })))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 block rounded-xl bg-teal-600 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-teal-700"
                    >
                      Get Proposal on PickedFor
                    </a>
                  </div>
                )}
              </div>
            )}

            {/* Results grid/list */}
            {results.length > 0 ? (
              <div className={viewMode === "grid" ? "grid gap-4 sm:grid-cols-2 xl:grid-cols-3" : "space-y-3"}>
                {results.map((item) => (
                  <ListingCard
                    key={item.id}
                    item={item}
                    view={viewMode}
                    onAddToBasket={addToBasket}
                    isInBasket={isInBasket(item.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="py-16 text-center">
                <p className="text-lg font-semibold text-slate-400">No results found</p>
                <p className="mt-1 text-sm text-slate-400">Try adjusting your filters or search terms.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
