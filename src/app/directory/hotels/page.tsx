"use client";

import { PageShell } from "@/components/site";
import { DirectoryLanding, DirectorySearch } from "@/components/marketplace";
import { HotelQuickForm } from "@/components/forms";
import { MOCK_HOTEL_ITEMS, HOTEL_TYPES, GREEK_REGIONS } from "@/lib/marketplace";

export default function HotelsDirectoryPage() {
  return (
    <PageShell>
      <DirectoryLanding type="hotel" stats={{ listed: 60, regions: 18, matches: 320 }}>
        <section className="py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Browse Hotels & Accommodation</h2>
                <p className="text-sm text-slate-600 mb-8">Discover hotels, boutique stays, and resorts across Greece.</p>
                <DirectorySearch
                  items={MOCK_HOTEL_ITEMS}
                  categories={HOTEL_TYPES.map((t) => ({ slug: t.slug, label: t.label }))}
                  regions={[...GREEK_REGIONS]}
                  directoryLabel="Hotels"
                />
              </div>
              <div className="lg:sticky lg:top-24 lg:self-start">
                <HotelQuickForm />
              </div>
            </div>
          </div>
        </section>
      </DirectoryLanding>
    </PageShell>
  );
}
