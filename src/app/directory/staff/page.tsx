"use client";

import { PageShell } from "@/components/site";
import { DirectoryLanding, DirectorySearch } from "@/components/marketplace";
import { JobSeekerQuickForm } from "@/components/forms";
import { MOCK_STAFF_ITEMS, STAFF_ROLES, GREEK_REGIONS } from "@/lib/marketplace";

export default function StaffDirectoryPage() {
  return (
    <PageShell>
      <DirectoryLanding type="staff" stats={{ listed: 200, regions: 15, matches: 85 }}>
        <section className="py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Browse Staff & Job Seekers</h2>
                <p className="text-sm text-slate-600 mb-8">Find hospitality professionals — cleaners, hosts, managers, drivers, and more.</p>
                <DirectorySearch
                  items={MOCK_STAFF_ITEMS}
                  categories={STAFF_ROLES.map((r) => ({ slug: r.slug, label: r.label }))}
                  regions={[...GREEK_REGIONS]}
                  directoryLabel="Staff"
                />
              </div>
              <div className="lg:sticky lg:top-24 lg:self-start">
                <JobSeekerQuickForm />
              </div>
            </div>
          </div>
        </section>
      </DirectoryLanding>
    </PageShell>
  );
}
