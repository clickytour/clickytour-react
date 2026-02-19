import Link from "next/link";
import { redirect } from "next/navigation";
import { proposals } from "@/lib/proposalMockData";
import { detailListings } from "@/lib/detailMockData";
import { qaRoutes } from "@/lib/qaRoutes";
import { canAccessQa } from "@/lib/qaAccess";

const templates = ["modern", "document", "magazine"] as const;
const templateLabels = { modern: "🖥️ Modern", document: "📄 Document", magazine: "🖼️ Magazine" };
const typeEmoji: Record<string, string> = { vacation: "🏖️", hotel: "🏨", "hotel-room": "🛏️", "real-estate": "🏠", service: "✨" };

const routeGroups = ["For Guests", "For Owners", "Collaborate", "Templates", "Single Complexis", "Company & Utility"] as const;

export default function QaHubPage() {
  if (!canAccessQa()) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-2 text-3xl font-bold">PickedFor — QA Hub</h1>
        <p className="mb-8 text-sm text-gray-500">All proposals, templates, detail pages, search hub, and site routes for QA review.</p>

        <h2 className="mb-4 text-2xl font-bold">🔍 Search Hub</h2>
        <div className="mb-10 rounded-lg border border-gray-200 bg-white p-4">
          <div className="mb-2 flex items-center justify-between">
            <p className="font-semibold">🔍 Search Hub — All Intents</p>
            <span className="text-xs font-medium text-amber-600">Pending QA</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href="/search?intent=vacation" className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-gray-400 hover:bg-gray-50">🏖️ Vacation</Link>
            <Link href="/search?intent=real-estate" className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-gray-400 hover:bg-gray-50">🏠 Real Estate</Link>
            <Link href="/search?intent=services" className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-gray-400 hover:bg-gray-50">✨ Services</Link>
            <Link href="/search?intent=hotels" className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-gray-400 hover:bg-gray-50">🏨 Hotels</Link>
            <Link href="/search?intent=blog" className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-gray-400 hover:bg-gray-50">📝 Blog</Link>
            <Link href="/search" className="rounded-lg border border-blue-300 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700 hover:border-blue-400">🔍 Full Hub</Link>
          </div>
        </div>

        <h2 className="mb-4 text-2xl font-bold">📋 Proposal Pages</h2>
        <div className="mb-10 space-y-4">
          {proposals.map((p) => (
            <div key={p.id} className="rounded-lg border border-gray-200 bg-white p-4">
              <div className="mb-2 flex items-center justify-between">
                <div>
                  <p className="font-semibold">{p.title}</p>
                  <p className="text-sm text-gray-500">{p.entityType} · {p.items.length || p.bundleItems?.length || 0} items</p>
                </div>
                <span className="text-xs font-medium text-amber-600">Pending QA</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {templates.map((t) => (
                  <Link key={t} href={`/proposal/${p.id}?template=${t}`} className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-gray-400 hover:bg-gray-50">
                    {templateLabels[t]}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h2 className="mb-4 text-2xl font-bold">📄 Detail Pages</h2>
        <div className="mb-10 space-y-3">
          {detailListings.map((l) => (
            <div key={l.id} className="rounded-lg border border-gray-200 bg-white p-4">
              <div className="mb-2 flex items-center justify-between">
                <div>
                  <p className="font-semibold">{typeEmoji[l.type] || ""} {l.name}</p>
                  <p className="text-sm text-gray-500">{l.listingType} · {l.region}</p>
                </div>
                <span className="text-xs font-medium text-amber-600">Pending QA</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Link href={`/pickedfor/detail/${l.slug}?mode=brand`} className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-gray-400 hover:bg-gray-50">🏷️ Branded</Link>
                <Link href={`/pickedfor/detail/${l.slug}?mode=nologo`} className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-gray-400 hover:bg-gray-50">🔒 No-logo</Link>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mb-4 text-2xl font-bold">🧭 Company & Utility + Full Route Matrix</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {routeGroups.map((group) => {
            const routes = qaRoutes.filter((r) => r.group === group);
            return (
              <section key={group} className="rounded-lg border border-gray-200 bg-white p-4">
                <h3 className="mb-2 font-semibold">{group}</h3>
                <ul className="space-y-1">
                  {routes.map((r) => (
                    <li key={r.href}>
                      <a href={r.href} className="flex items-center justify-between rounded px-2 py-1 text-sm text-blue-700 hover:bg-gray-50 hover:underline">
                        <span>{r.label}</span>
                        <span className="text-[10px] text-amber-700">{r.status}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
