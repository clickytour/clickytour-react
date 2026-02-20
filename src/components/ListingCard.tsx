"use client";

import Link from "next/link";
import type { SearchResultItem } from "@/lib/searchHubEngine";

const INTENT_COLORS: Record<string, string> = {
  vacation: "bg-sky-100 text-sky-700",
  "real-estate": "bg-emerald-100 text-emerald-700",
  services: "bg-amber-100 text-amber-700",
  activities: "bg-orange-100 text-orange-700",
  hotels: "bg-violet-100 text-violet-700",
  jobs: "bg-indigo-100 text-indigo-700",
  pmcs: "bg-teal-100 text-teal-700",
  blog: "bg-rose-100 text-rose-700",
};

const AVAILABILITY_STYLES: Record<string, string> = {
  available: "bg-emerald-500",
  unavailable: "bg-red-400",
  new: "bg-blue-500",
};

export function ListingCard({
  item,
  view = "grid",
  onAddToBasket,
  isInBasket,
}: {
  item: SearchResultItem;
  view?: "grid" | "list";
  onAddToBasket?: (item: SearchResultItem) => void;
  isInBasket?: boolean;
}) {
  if (view === "list") {
    return (
      <Link
        href={item.href}
        className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition-shadow hover:shadow-md"
      >
        {/* Image */}
        <div className="relative h-32 w-48 flex-shrink-0 overflow-hidden rounded-xl">
          {item.image ? (
            <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-slate-100 text-slate-400">No image</div>
          )}
          {item.availability && (
            <span className={`absolute left-2 top-2 h-2.5 w-2.5 rounded-full ${AVAILABILITY_STYLES[item.availability]}`} />
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between py-1">
          <div>
            <div className="mb-1 flex items-center gap-2">
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase ${INTENT_COLORS[item.intent] ?? "bg-slate-100 text-slate-600"}`}>
                {item.intent}
              </span>
              {item.location && <span className="text-xs text-slate-500">{item.location}</span>}
            </div>
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-teal-700">{item.title}</h3>
            <p className="mt-1 line-clamp-2 text-xs text-slate-500">{item.description}</p>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex flex-wrap gap-1">
              {item.facts.slice(0, 3).map((f) => (
                <span key={f.label} className="rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[10px] text-slate-600">
                  {f.label}: {f.value}
                </span>
              ))}
            </div>
            {item.priceLabel && <span className="text-sm font-semibold text-teal-700">{item.priceLabel}</span>}
          </div>
        </div>
      </Link>
    );
  }

  // Grid view (default)
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      {/* Image */}
      <Link href={item.href} className="relative block h-48 overflow-hidden">
        {item.image ? (
          <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-100 text-slate-400">No image</div>
        )}
        {item.availability && (
          <span className={`absolute left-3 top-3 h-2.5 w-2.5 rounded-full ${AVAILABILITY_STYLES[item.availability]}`} />
        )}
        <span className={`absolute right-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase ${INTENT_COLORS[item.intent] ?? "bg-slate-100 text-slate-600"}`}>
          {item.intent}
        </span>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 flex items-center gap-2">
          {item.location && <span className="text-xs text-slate-500">{item.location}{item.region ? `, ${item.region}` : ""}</span>}
        </div>
        <Link href={item.href}>
          <h3 className="text-base font-semibold text-slate-900 group-hover:text-teal-700">{item.title}</h3>
        </Link>
        <p className="mt-1 line-clamp-2 text-sm text-slate-500">{item.description}</p>

        {/* Facts row */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {item.facts.slice(0, 4).map((f) => (
            <span key={f.label} className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] text-slate-600">
              {f.label}: {f.value}
            </span>
          ))}
        </div>

        {/* Badges */}
        {item.badges.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {item.badges.slice(0, 3).map((b) => (
              <span key={b} className="rounded-full bg-teal-50 px-2 py-0.5 text-[10px] font-medium text-teal-700">{b}</span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-3">
          {item.priceLabel && <span className="text-base font-bold text-teal-700">{item.priceLabel}</span>}
          {item.rating && (
            <span className="flex items-center gap-1 text-sm text-amber-600">
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
              {item.rating} {item.reviewCount ? `(${item.reviewCount})` : ""}
            </span>
          )}
        </div>
      </div>

      {/* Basket button */}
      {onAddToBasket && (
        <button
          onClick={(e) => { e.preventDefault(); onAddToBasket(item); }}
          className={`absolute bottom-4 right-4 rounded-full p-2 shadow-sm transition ${
            isInBasket ? "bg-teal-600 text-white" : "bg-white text-slate-600 hover:bg-teal-50 hover:text-teal-700"
          }`}
          title={isInBasket ? "In basket" : "Add to basket"}
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {isInBasket ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            )}
          </svg>
        </button>
      )}
    </div>
  );
}
