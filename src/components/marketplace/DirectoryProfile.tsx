"use client";

import Link from "next/link";
import type { DirectoryItem } from "@/lib/marketplace/types";
import { SubscriptionGate } from "./SubscriptionGate";

/**
 * Universal directory profile page template.
 * Shows full profile with gated contact section for unsubscribed users.
 */
export function DirectoryProfile({
  item,
  isSubscribed = false,
  relatedItems = [],
}: {
  item: DirectoryItem;
  isSubscribed?: boolean;
  relatedItems?: DirectoryItem[];
}) {
  return (
    <div className="mx-auto max-w-4xl">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100">
        {item.coverPhoto ? (
          <img src={item.coverPhoto} alt={item.name} className="h-56 w-full object-cover" />
        ) : (
          <div className="flex h-56 w-full items-center justify-center">
            <span className="text-6xl text-slate-300">
              {item.type === "pmc" ? "\uD83C\uDFE2" : item.type === "service" ? "\uD83D\uDCBC" : item.type === "agent" ? "\uD83D\uDC65" : item.type === "hotel" ? "\uD83C\uDFE8" : "\uD83D\uDC64"}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-white">{item.name}</h1>
            {item.verifiedBadge && (
              <span className="flex items-center gap-1 rounded-full bg-emerald-500/80 px-2 py-0.5 text-xs font-semibold text-white backdrop-blur-sm">
                <svg className="h-3 w-3 fill-current" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                Verified
              </span>
            )}
          </div>
          {item.subtitle && <p className="mt-1 text-sm text-white/80">{item.subtitle}</p>}
          <div className="mt-2 flex items-center gap-3 text-sm text-white/70">
            <span>{item.city ? `${item.city}, ${item.region}` : item.region}</span>
            {item.rating && (
              <span className="flex items-center gap-1">
                <svg className="h-3.5 w-3.5 fill-amber-400" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                {item.rating} ({item.reviewCount ?? 0} reviews)
              </span>
            )}
            <span>Member since {new Date(item.createdAt).getFullYear()}</span>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        {/* Main content — 2/3 */}
        <div className="lg:col-span-2 space-y-8">
          {/* About */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">About</h2>
            <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
          </section>

          {/* Tags / Specialties */}
          {item.tags.length > 0 && (
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3">
                {item.type === "service" ? "Services Offered" : item.type === "pmc" ? "Management Services" : "Specialties"}
              </h2>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((t) => (
                  <span key={t} className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-sm text-cyan-700">{t}</span>
                ))}
              </div>
            </section>
          )}

          {/* Meta / Key Facts */}
          {Object.keys(item.meta).length > 0 && (
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3">Key Facts</h2>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(item.meta).map(([k, v]) => (
                  <div key={k} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <span className="text-xs text-slate-500 capitalize">{k.replace(/([A-Z])/g, " $1").trim()}</span>
                    <p className="text-sm font-semibold text-slate-900 mt-0.5">{String(v)}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Badges */}
          {item.badges.length > 0 && (
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3">Achievements</h2>
              <div className="flex flex-wrap gap-2">
                {item.badges.map((b) => (
                  <span key={b} className="flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-sm text-amber-700">
                    <svg className="h-3.5 w-3.5 fill-amber-500" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                    {b}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar — 1/3 */}
        <div className="space-y-6">
          {/* Contact section (gated) */}
          {isSubscribed ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-3">Contact Information</h3>
              <div className="space-y-2 text-sm">
                {item.gated.phone && (
                  <div className="flex items-center gap-2 text-slate-700">
                    <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    {item.gated.phone}
                  </div>
                )}
                {item.gated.email && (
                  <div className="flex items-center gap-2 text-slate-700">
                    <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    {item.gated.email}
                  </div>
                )}
                {item.gated.website && (
                  <div className="flex items-center gap-2 text-slate-700">
                    <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                    <a href={item.gated.website} target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">Website</a>
                  </div>
                )}
              </div>
              <button className="mt-4 w-full rounded-xl bg-cyan-600 py-2.5 text-sm font-semibold text-white hover:bg-cyan-700 transition">
                Send Message
              </button>
            </div>
          ) : (
            <SubscriptionGate businessName={item.name} variant="inline" />
          )}

          {/* Quick stats */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-3">At a Glance</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-slate-500">Type</span><span className="font-medium capitalize">{item.type}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Region</span><span className="font-medium">{item.region}</span></div>
              {item.rating && <div className="flex justify-between"><span className="text-slate-500">Rating</span><span className="font-medium">{item.rating}/5</span></div>}
              <div className="flex justify-between"><span className="text-slate-500">Status</span><span className="font-medium capitalize text-emerald-600">{item.status}</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      {relatedItems.length > 0 && (
        <section className="mt-12">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Similar Listings</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedItems.slice(0, 3).map((ri) => (
              <Link key={ri.id} href={ri.href} className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-slate-900 group-hover:text-cyan-700">{ri.name}</h3>
                <p className="mt-1 text-xs text-slate-500">{ri.region} - {ri.category}</p>
                {ri.rating && <span className="mt-2 inline-flex items-center gap-1 text-xs text-amber-600">★ {ri.rating}</span>}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
