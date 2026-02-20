import Link from "next/link";
import type { CoreMirrorAgent } from "@/lib/coreMirror/types";
import { coreMirrorProperties } from "@/lib/coreMirror/properties";

export function AgentProfileSections({ agent }: { agent: CoreMirrorAgent }) {
  // Premium agents show listings from their areas
  const listings = agent.subscriptionTier === "premium"
    ? coreMirrorProperties.filter((p) => agent.areas.some((a) => p.location.region.toLowerCase().includes(a.toLowerCase())))
    : [];

  return (
    <div className="mx-auto max-w-[1000px] px-4 py-8">
      <div className="mb-4 text-sm text-slate-500">
        <Link href="/" className="hover:text-teal-600">Home</Link>
        <span className="mx-1">/</span>
        <Link href="/search?intent=pmcs" className="hover:text-teal-600">Partners</Link>
        <span className="mx-1">/</span>
        <span className="text-slate-700">{agent.name}</span>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <div className="space-y-6">
          {/* Profile card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              {agent.photo && (
                <img src={agent.photo} alt={agent.name} className="h-20 w-20 rounded-full object-cover" />
              )}
              <div>
                <h1 className="text-2xl font-bold text-slate-900">{agent.name}</h1>
                <div className="mt-1 flex flex-wrap gap-2">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${agent.subscriptionTier === "premium" ? "bg-amber-100 text-amber-700" : agent.subscriptionTier === "basic" ? "bg-sky-100 text-sky-700" : "bg-slate-100 text-slate-600"}`}>
                    {agent.subscriptionTier.charAt(0).toUpperCase() + agent.subscriptionTier.slice(1)}
                  </span>
                  {agent.rating && (
                    <span className="flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                      {agent.rating}/5 ({agent.reviewCount} reviews)
                    </span>
                  )}
                </div>
              </div>
            </div>
            {agent.bio && <p className="mt-4 leading-relaxed text-slate-600">{agent.bio}</p>}

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-slate-100 bg-slate-50 p-3">
                <p className="text-xs font-semibold text-slate-500">Areas</p>
                <p className="text-sm text-slate-800">{agent.areas.join(", ")}</p>
              </div>
              <div className="rounded-lg border border-slate-100 bg-slate-50 p-3">
                <p className="text-xs font-semibold text-slate-500">Specialties</p>
                <p className="text-sm text-slate-800">{agent.specialties.join(", ")}</p>
              </div>
            </div>
          </div>

          {/* Listings (premium only) */}
          {listings.length > 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">Listed Properties</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {listings.map((p) => (
                  <Link key={p.slug} href={`/property/${p.type === "real-estate" ? "real-estate" : "vacation"}/${p.slug}`} className="group overflow-hidden rounded-xl border border-slate-200 shadow-sm transition hover:shadow-md">
                    <img src={p.gallery[0]} alt={p.title} className="h-36 w-full object-cover transition-transform group-hover:scale-105" />
                    <div className="p-3">
                      <h3 className="text-sm font-semibold text-slate-900">{p.title}</h3>
                      <p className="mt-1 text-sm font-bold text-teal-700">From EUR {p.pricing.basicFromPrice}/night</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {agent.subscriptionTier === "free" && (
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center">
              <p className="text-sm text-amber-800">This agent is on the Free plan. Upgrade to see their listed properties.</p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="flex flex-col gap-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-bold text-slate-800">Contact Agent</h3>
            {agent.contactEmail && (
              <a href={`mailto:${agent.contactEmail}`} className="mt-3 block w-full rounded-xl bg-teal-600 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-teal-700">
                Send Email
              </a>
            )}
            {agent.phone && <p className="mt-2 text-center text-sm text-slate-500">{agent.phone}</p>}
          </div>
        </aside>
      </div>
    </div>
  );
}
