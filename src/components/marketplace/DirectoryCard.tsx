"use client";

import Link from "next/link";
import type { DirectoryItem } from "@/lib/marketplace/types";

const TYPE_COLORS: Record<string, string> = {
  pmc: "bg-teal-100 text-teal-700",
  service: "bg-amber-100 text-amber-700",
  agent: "bg-indigo-100 text-indigo-700",
  hotel: "bg-violet-100 text-violet-700",
  staff: "bg-cyan-100 text-cyan-700",
  partner: "bg-emerald-100 text-emerald-700",
  property: "bg-sky-100 text-sky-700",
};

const STATUS_DOT: Record<string, string> = {
  available: "bg-emerald-500",
  claimed: "bg-amber-500",
  pending: "bg-blue-400",
  inactive: "bg-slate-300",
};

export function DirectoryCard({
  item,
  onContactClick,
  isSubscribed = false,
}: {
  item: DirectoryItem;
  onContactClick?: (item: DirectoryItem) => void;
  isSubscribed?: boolean;
}) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      {/* Cover Image */}
      <Link href={item.href} className="relative block h-44 overflow-hidden bg-slate-100">
        {item.coverPhoto ? (
          <img
            src={item.coverPhoto}
            alt={item.name}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
            <span className="text-4xl text-slate-300">
              {item.type === "pmc" ? "\uD83C\uDFE2" : item.type === "service" ? "\uD83D\uDCBC" : item.type === "agent" ? "\uD83D\uDC65" : item.type === "hotel" ? "\uD83C\uDFE8" : item.type === "staff" ? "\uD83D\uDC64" : "\uD83E\uDD1D"}
            </span>
          </div>
        )}
        {/* Status dot */}
        <span className={`absolute left-3 top-3 h-2.5 w-2.5 rounded-full ${STATUS_DOT[item.status] ?? "bg-slate-300"}`} />
        {/* Type badge */}
        <span className={`absolute right-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase ${TYPE_COLORS[item.type] ?? "bg-slate-100 text-slate-600"}`}>
          {item.category || item.type}
        </span>
        {/* Verified */}
        {item.verifiedBadge && (
          <span className="absolute left-3 bottom-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 backdrop-blur-sm">
            <svg className="h-3 w-3 fill-current" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
            Verified
          </span>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        {/* Location */}
        <div className="mb-1 flex items-center gap-1 text-xs text-slate-500">
          <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          {item.city ? `${item.city}, ${item.region}` : item.region}{item.country ? `, ${item.country}` : ""}
        </div>

        {/* Name */}
        <Link href={item.href}>
          <h3 className="text-base font-semibold text-slate-900 group-hover:text-cyan-700 line-clamp-1">{item.name}</h3>
        </Link>
        {item.subtitle && <p className="text-xs text-slate-500 mt-0.5">{item.subtitle}</p>}

        {/* Description */}
        <p className="mt-2 text-sm text-slate-600 line-clamp-2">{item.description}</p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-1">
          {item.tags.slice(0, 4).map((t) => (
            <span key={t} className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] text-slate-600">{t}</span>
          ))}
          {item.tags.length > 4 && <span className="text-[10px] text-slate-400">+{item.tags.length - 4}</span>}
        </div>

        {/* Badges */}
        {item.badges.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {item.badges.slice(0, 3).map((b) => (
              <span key={b} className="rounded-full bg-cyan-50 px-2 py-0.5 text-[10px] font-medium text-cyan-700">{b}</span>
            ))}
          </div>
        )}

        {/* Footer: Rating + Contact CTA */}
        <div className="mt-auto flex items-center justify-between pt-3 border-t border-slate-100 mt-3">
          {item.rating ? (
            <span className="flex items-center gap-1 text-sm">
              <svg className="h-3.5 w-3.5 fill-amber-400" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
              <span className="font-semibold text-slate-900">{item.rating}</span>
              {item.reviewCount && <span className="text-slate-400 text-xs">({item.reviewCount})</span>}
            </span>
          ) : <span />}

          {isSubscribed ? (
            <Link href={item.href} className="rounded-full bg-cyan-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-cyan-700 transition">
              View Contact
            </Link>
          ) : (
            <button
              onClick={() => onContactClick?.(item)}
              className="flex items-center gap-1 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1.5 text-xs font-semibold text-cyan-700 hover:bg-cyan-100 transition"
            >
              <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              Contact Info
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
