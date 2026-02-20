"use client";

import { PageShell } from "@/components/site";
import { DirectoryLanding, DirectorySearch } from "@/components/marketplace";
import { MOCK_SERVICE_ITEMS, SERVICE_CATEGORIES, GREEK_REGIONS } from "@/lib/marketplace";

export default function ServicesDirectoryPage() {
  return (
    <PageShell>
      <DirectoryLanding type="service" stats={{ listed: 120, regions: 20, matches: 450 }}>
        <section className="py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Browse Services</h2>
            <p className="text-sm text-slate-600 mb-8">Find the right service provider for your needs.</p>
            <DirectorySearch
              items={MOCK_SERVICE_ITEMS}
              categories={SERVICE_CATEGORIES.map((c) => ({ slug: c.slug, label: c.label }))}
              regions={[...GREEK_REGIONS]}
              directoryLabel="Services"
            />
          </div>
        </section>
      </DirectoryLanding>
    </PageShell>
  );
}
