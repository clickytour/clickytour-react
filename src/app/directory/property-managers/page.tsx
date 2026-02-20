"use client";

import { PageShell } from "@/components/site";
import { DirectoryLanding, DirectorySearch } from "@/components/marketplace";
import { PmcQuickForm } from "@/components/forms";
import { MOCK_PMC_ITEMS, PMC_SERVICE_TAGS, GREEK_REGIONS } from "@/lib/marketplace";

export default function PropertyManagersDirectoryPage() {
  return (
    <PageShell>
      <DirectoryLanding type="pmc" stats={{ listed: 30, regions: 12, matches: 95 }}>
        <section className="py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Browse Property Managers</h2>
                <p className="text-sm text-slate-600 mb-8">Find trusted PMCs for your vacation rental or real estate portfolio.</p>
                <DirectorySearch
                  items={MOCK_PMC_ITEMS}
                  categories={PMC_SERVICE_TAGS.map((t) => ({ slug: t, label: t }))}
                  regions={[...GREEK_REGIONS]}
                  directoryLabel="Property Managers"
                />
              </div>
              <div className="lg:sticky lg:top-24 lg:self-start">
                <PmcQuickForm />
              </div>
            </div>
          </div>
        </section>
      </DirectoryLanding>
    </PageShell>
  );
}
