import Link from "next/link";
import type { CoreMirrorPmc } from "@/lib/coreMirror/types";
import { coreMirrorProperties } from "@/lib/coreMirror/properties";

export function PmcProfileSections({ pmc }: { pmc: CoreMirrorPmc }) {
  const listings = pmc.subscriptionTier === "premium"
    ? coreMirrorProperties.filter((p) => pmc.areas.some((a) => p.location.region.toLowerCase().includes(a.toLowerCase())))
    : [];

  return (
    <div className="mx-auto max-w-[1000px] px-4 py-8">
      <div className="mb-4 text-sm text-slate-500">
        <Link href="/" className="hover:text-teal-600">Home</Link>
        <span className="mx-1">/</span>
        <Link href="/search?intent=pmcs" className="hover:text-teal-600">PMCs</Link>
        <span className="mx-1">/</span>
        <span className="text-slate-700">{pmc.companyName}</span>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              {pmc.logo && <img src={pmc.logo} alt={pmc.companyName} className="h-16 w-16 rounded-xl object-cover" />}
              <div>
                <h1 className="text-2xl font-bold text-slate-900">{pmc.companyName}</h1>
                <div className="mt-1 flex flex-wrap gap-2">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${pmc.subscriptionTier === "premium" ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-600"}`}>
                    {pmc.subscriptionTier.charAt(0).toUpperCase() + pmc.subscriptionTier.slice(1)}
                  </span>
                  {pmc.rating && (
                    <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                      {pmc.rating}/5 ({pmc.reviewCount} reviews)
                    </span>
                  )}
                  <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
                    {pmc.portfolioCount} properties
                  </span>
                </div>
              </div>
            </div>
            {pmc.description && <p className="mt-4 leading-relaxed text-slate-600">{pmc.description}</p>}

            <div className="mt-4">
              <p className="text-xs font-semibold text-slate-500">Areas</p>
              <p className="text-sm text-slate-800">{pmc.areas.join(", ")}</p>
            </div>

            <div className="mt-3">
              <p className="text-xs font-semibold text-slate-500">Services Offered</p>
              <div className="mt-1 flex flex-wrap gap-1.5">
                {pmc.servicesOffered.map((s) => (
                  <span key={s} className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-medium text-teal-700">{s}</span>
                ))}
              </div>
            </div>
          </div>

          {listings.length > 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">Managed Properties</h2>
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

          {pmc.subscriptionTier === "free" && (
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center">
              <p className="text-sm text-amber-800">This company is on the Free plan. Managed properties are not displayed.</p>
            </div>
          )}
        </div>

        <aside className="flex flex-col gap-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-bold text-slate-800">Contact</h3>
            {pmc.contactEmail && (
              <a href={`mailto:${pmc.contactEmail}`} className="mt-3 block w-full rounded-xl bg-teal-600 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-teal-700">
                Send Email
              </a>
            )}
            {pmc.phone && <p className="mt-2 text-center text-sm text-slate-500">{pmc.phone}</p>}
            {pmc.website && (
              <a href={pmc.website} target="_blank" rel="noopener noreferrer" className="mt-2 block text-center text-sm text-teal-700 underline hover:text-teal-900">
                Visit Website
              </a>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
