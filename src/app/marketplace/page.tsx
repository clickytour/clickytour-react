import Link from "next/link";
import { PageShell } from "@/components/site";
import { DIRECTORY_CONFIG } from "@/lib/marketplace/config";
import type { DirectoryType } from "@/lib/marketplace/types";

const DIRECTORIES: { type: DirectoryType; emoji: string; count: string }[] = [
  { type: "property", emoji: "\uD83C\uDFE0", count: "50+" },
  { type: "pmc", emoji: "\uD83C\uDFE2", count: "30+" },
  { type: "service", emoji: "\uD83D\uDCBC", count: "120+" },
  { type: "agent", emoji: "\uD83D\uDC65", count: "45+" },
  { type: "hotel", emoji: "\uD83C\uDFE8", count: "60+" },
  { type: "staff", emoji: "\uD83D\uDC64", count: "200+" },
  { type: "partner", emoji: "\uD83E\uDD1D", count: "25+" },
];

export default function MarketplacePage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 py-24 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="container relative mx-auto max-w-6xl px-4 text-center">
          <span className="inline-block rounded-full bg-cyan-500/20 px-4 py-1 text-sm font-medium text-cyan-300 mb-4">
            ClickyTour Ecosystem
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            The Hospitality Marketplace
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            7 directories connecting every role in tourism and hospitality. Find property managers, services, agents, hotels, staff, and business partners — all in one ecosystem.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#directories" className="rounded-full bg-cyan-600 px-8 py-3 text-sm font-semibold text-white hover:bg-cyan-700 transition shadow-lg">
              Explore Directories
            </Link>
            <Link href="/contact" className="rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold text-white hover:bg-white/20 transition backdrop-blur-sm">
              View Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-200 bg-white py-8">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 text-center">
            <div><span className="block text-3xl font-bold text-cyan-600">7</span><span className="text-sm text-slate-500">Directories</span></div>
            <div><span className="block text-3xl font-bold text-cyan-600">530+</span><span className="text-sm text-slate-500">Listed Businesses</span></div>
            <div><span className="block text-3xl font-bold text-cyan-600">20+</span><span className="text-sm text-slate-500">Regions Covered</span></div>
            <div><span className="block text-3xl font-bold text-cyan-600">1,200+</span><span className="text-sm text-slate-500">Connections Made</span></div>
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section id="directories" className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Browse Directories</h2>
            <p className="mt-2 text-slate-600">Each directory connects providers with clients — both ways.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DIRECTORIES.map(({ type, emoji, count }) => {
              const cfg = DIRECTORY_CONFIG[type];
              return (
                <div key={type} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{emoji}</span>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition">{cfg.pluralLabel}</h3>
                      <span className="text-xs text-slate-500">{count} listings</span>
                    </div>
                  </div>

                  {/* Side A */}
                  <div className="mb-3 rounded-xl bg-cyan-50 p-3">
                    <p className="text-xs font-semibold text-cyan-700 mb-1">Looking for {cfg.label.toLowerCase()}?</p>
                    <p className="text-xs text-slate-600">{cfg.sideA.description}</p>
                    <Link href={cfg.urlBase} className="mt-2 inline-block text-xs font-semibold text-cyan-600 hover:text-cyan-700">
                      {cfg.sideA.cta} &rarr;
                    </Link>
                  </div>

                  {/* Side B */}
                  <div className="rounded-xl bg-emerald-50 p-3">
                    <p className="text-xs font-semibold text-emerald-700 mb-1">Are you a {cfg.label.toLowerCase()}?</p>
                    <p className="text-xs text-slate-600">{cfg.sideB.description}</p>
                    <Link href={`${cfg.listUrl}`} className="mt-2 inline-block text-xs font-semibold text-emerald-600 hover:text-emerald-700">
                      {cfg.sideB.cta} &rarr;
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900">How the Marketplace Works</h2>
          <p className="mt-2 text-sm text-slate-600">Simple, transparent, privacy-first</p>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { n: "1", t: "Browse Free", d: "Search any directory. See profiles, ratings, specialties, and coverage areas." },
              { n: "2", t: "Find Your Match", d: "Use filters to narrow down by region, category, and rating." },
              { n: "3", t: "Subscribe to Connect", d: "Unlock contact info with a subscription. Your details stay protected." },
              { n: "4", t: "Collaborate", d: "ClickyTour facilitates the connection. Build your network with confidence." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl bg-white p-5 shadow-sm border border-slate-200">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-600 text-white font-bold">{s.n}</span>
                <h3 className="mt-3 font-bold text-slate-900">{s.t}</h3>
                <p className="mt-1 text-sm text-slate-600">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy notice */}
      <section className="py-12">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
            <h3 className="text-xl font-bold text-emerald-900">Privacy-First Marketplace</h3>
            <p className="mt-2 text-sm text-emerald-700 max-w-lg mx-auto">
              Contact information is never shown to unsubscribed users. ClickyTour acts as a trusted broker — your data is protected until you choose to connect.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-16">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl bg-gradient-to-br from-cyan-600 to-cyan-700 p-10 text-white shadow-lg">
            <h2 className="text-2xl font-bold">Join the ClickyTour Ecosystem</h2>
            <p className="mt-2 text-cyan-100">Whether you&apos;re looking for services or offering them — there&apos;s a place for you.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-cyan-700 hover:bg-cyan-50 transition">
                Register Free
              </Link>
              <Link href="/contact" className="rounded-full border border-white/40 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
                View Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
