"use client";

import type { PoolCard as PoolCardType } from "@/lib/marketplace/types";

function timeAgo(iso: string) {
  const ms = Date.now() - new Date(iso).getTime();
  const d = Math.floor(ms / 86400000);
  if (d > 0) return `${d}d ago`;
  const h = Math.floor(ms / 3600000);
  if (h > 0) return `${h}h ago`;
  return "Just now";
}

export function PoolCard({
  card,
  onClaim,
}: {
  card: PoolCardType;
  onClaim?: (card: PoolCardType) => void;
}) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      {/* Image or placeholder */}
      <div className="relative h-40 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
        {card.images.length > 0 ? (
          <img
            src={card.images[0].url}
            alt={card.leadName}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-4xl text-slate-300">
              {card.propertyType === "Villa" ? "\uD83C\uDFE1" : card.propertyType === "Apartment" ? "\uD83C\uDFE2" : "\uD83C\uDFE0"}
            </span>
          </div>
        )}
        {/* Property type badge */}
        <span className="absolute right-3 top-3 rounded-full bg-sky-100 px-2 py-0.5 text-[10px] font-semibold uppercase text-sky-700">
          {card.propertyType || "Property"}
        </span>
        {/* Time badge */}
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-medium text-slate-600 backdrop-blur-sm">
          {timeAgo(card.createdAtIso)}
        </span>
        {/* Image count */}
        {card.images.length > 1 && (
          <span className="absolute right-3 bottom-3 rounded-full bg-black/50 px-2 py-0.5 text-[10px] text-white backdrop-blur-sm">
            +{card.images.length - 1} photos
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        {/* Location */}
        <div className="flex items-center gap-1 text-xs text-slate-500">
          <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          {card.city ? `${card.city}, ` : ""}{card.region}{card.country ? `, ${card.country}` : ""}
        </div>

        {/* Title */}
        <h3 className="mt-1 text-base font-semibold text-slate-900 line-clamp-1">{card.leadName}</h3>

        {/* Specs grid */}
        <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs">
          {card.bedrooms && (
            <div className="flex items-center gap-1.5 text-slate-600">
              <span className="text-slate-400">Beds</span> <span className="font-medium">{card.bedrooms}</span>
            </div>
          )}
          {card.bathrooms && (
            <div className="flex items-center gap-1.5 text-slate-600">
              <span className="text-slate-400">Baths</span> <span className="font-medium">{card.bathrooms}</span>
            </div>
          )}
          {card.maxGuests && (
            <div className="flex items-center gap-1.5 text-slate-600">
              <span className="text-slate-400">Guests</span> <span className="font-medium">{card.maxGuests}</span>
            </div>
          )}
          {card.squareMeters && (
            <div className="flex items-center gap-1.5 text-slate-600">
              <span className="text-slate-400">m2</span> <span className="font-medium">{card.squareMeters}</span>
            </div>
          )}
        </div>

        {/* Pool & Availability */}
        <div className="mt-2 flex flex-wrap gap-1.5">
          {card.hasPool && (
            <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-700">
              Pool{card.poolType ? ` (${card.poolType})` : ""}
            </span>
          )}
          {card.availableFromDate && (
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
              From {card.availableFromDate}
            </span>
          )}
        </div>

        {/* Tags */}
        {card.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {card.tags.slice(0, 3).map((t) => (
              <span key={t} className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] text-slate-600">{t}</span>
            ))}
          </div>
        )}

        {/* Price + Claim CTA */}
        <div className="mt-auto flex items-center justify-between pt-3 border-t border-slate-100 mt-3">
          {card.desiredNetoRate ? (
            <div className="text-sm">
              <span className="font-bold text-slate-900">{card.priceDescriptionPer === "total" ? "" : "\u20AC"}{card.desiredNetoRate}</span>
              <span className="text-xs text-slate-500 ml-1">{card.priceDescriptionPer}</span>
            </div>
          ) : <span />}

          <button
            onClick={() => onClaim?.(card)}
            className="rounded-full bg-cyan-600 px-4 py-1.5 text-xs font-semibold text-white hover:bg-cyan-700 transition"
          >
            Claim Request
          </button>
        </div>
      </div>

      {/* Ref badge */}
      <div className="absolute bottom-4 left-4 text-[9px] text-slate-300 font-mono">{card.ref}</div>
    </div>
  );
}
