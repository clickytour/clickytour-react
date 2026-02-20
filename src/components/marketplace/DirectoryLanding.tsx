"use client";

import Link from "next/link";
import type { DirectoryType } from "@/lib/marketplace/types";
import { DIRECTORY_CONFIG } from "@/lib/marketplace/config";

/**
 * Reusable directory landing page template.
 * Shows both sides of the marketplace (Side A: find, Side B: list/join).
 */
export function DirectoryLanding({
  type,
  stats,
  children,
}: {
  type: DirectoryType;
  stats?: { listed: number; regions: number; matches: number };
  children?: React.ReactNode;
}) {
  const config = DIRECTORY_CONFIG[type];
  if (!config) return null;

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 py-20 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="container relative mx-auto max-w-6xl px-4 text-center">
          <span className="inline-block rounded-full bg-cyan-500/20 px-4 py-1 text-sm font-medium text-cyan-300 mb-4">
            ClickyTour {config.pluralLabel}
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {config.pluralLabel}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Connect with trusted {config.pluralLabel.toLowerCase()} across Greece. Browse profiles, compare services, and find the perfect match.
          </p>

          {/* Stats */}
          {stats && (
            <div className="mt-8 flex justify-center gap-8">
              <div><span className="block text-3xl font-bold text-cyan-400">{stats.listed}+</span><span className="text-sm text-slate-400">Listed</span></div>
              <div><span className="block text-3xl font-bold text-cyan-400">{stats.regions}+</span><span className="text-sm text-slate-400">Regions</span></div>
              <div><span className="block text-3xl font-bold text-cyan-400">{stats.matches}+</span><span className="text-sm text-slate-400">Matches Made</span></div>
            </div>
          )}

          {/* Dual CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`${config.urlBase}`} className="rounded-full bg-cyan-600 px-8 py-3 text-sm font-semibold text-white hover:bg-cyan-700 transition shadow-lg">
              {config.sideA.cta}
            </Link>
            <Link href={`${config.listUrl}`} className="rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold text-white hover:bg-white/20 transition backdrop-blur-sm">
              {config.sideB.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Two sides */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Side A: Find */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600 mb-4">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
              <h2 className="text-xl font-bold text-slate-900">{config.sideA.label}</h2>
              <p className="mt-2 text-sm text-slate-600">{config.sideA.description}</p>
              <ul className="mt-4 space-y-2">
                {["Browse verified profiles", "Compare ratings & reviews", "Filter by region & specialty", "View portfolios & credentials"].map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-slate-700">
                    <svg className="h-4 w-4 text-cyan-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {b}
                  </li>
                ))}
              </ul>
              <Link href={config.urlBase} className="mt-6 inline-block rounded-full bg-cyan-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-cyan-700 transition">
                {config.sideA.cta}
              </Link>
            </div>

            {/* Side B: List/Join */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 mb-4">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
              </div>
              <h2 className="text-xl font-bold text-slate-900">{config.sideB.label}</h2>
              <p className="mt-2 text-sm text-slate-600">{config.sideB.description}</p>
              <ul className="mt-4 space-y-2">
                {["Free basic listing", "Reach thousands of potential clients", "Get matched with relevant requests", "Upgrade for premium features"].map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-slate-700">
                    <svg className="h-4 w-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {b}
                  </li>
                ))}
              </ul>
              <Link href={`${config.listUrl}`} className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 transition">
                {config.sideB.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900">How It Works</h2>
          <p className="mt-2 text-sm text-slate-600">Simple, transparent, and privacy-first</p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              { step: "1", title: "Browse or List", desc: "Search the directory or create your free profile. No commitment required." },
              { step: "2", title: "Connect", desc: "Found a match? Request contact info. Your details stay protected until you choose to share." },
              { step: "3", title: "Collaborate", desc: "ClickyTour facilitates the connection. Start working together with confidence." },
            ].map((s) => (
              <div key={s.step} className="relative rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-600 text-white font-bold text-lg">{s.step}</span>
                <h3 className="mt-3 text-base font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom content slot */}
      {children}

      {/* Bottom CTA */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl bg-gradient-to-br from-cyan-600 to-cyan-700 p-10 text-white shadow-lg">
            <h2 className="text-2xl font-bold">Ready to Get Started?</h2>
            <p className="mt-2 text-cyan-100">Join the ClickyTour ecosystem — the largest hospitality network in Greece.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href={config.urlBase} className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-cyan-700 hover:bg-cyan-50 transition">
                {config.sideA.cta}
              </Link>
              <Link href={`${config.listUrl}`} className="rounded-full border border-white/40 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
                {config.sideB.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
