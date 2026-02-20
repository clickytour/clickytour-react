"use client";

import { PageShell, Hero } from "@/components/site";
import { DirectorySearch } from "@/components/marketplace";
import { MOCK_PMC_ITEMS, PMC_SERVICE_TAGS, GREEK_REGIONS } from "@/lib/marketplace";
import { PMCDirectoryDiagram } from "@/components/diagrams";

const categories = PMC_SERVICE_TAGS.map((t) => ({ slug: t, label: t }));
const regions = [...GREEK_REGIONS];

export default function PMCDirectoryPage() {
  return (
    <PageShell>
      <Hero
        diagram={<PMCDirectoryDiagram />}
        title="PMC Directory"
        subtitle="Find trusted property management companies across Greece. Browse profiles, compare services, and connect with the right partner for your property."
        ctaA="List Your PMC"
        ctaHrefA="/pmc-apply"
        ctaB="Submit Your Property"
        ctaHrefB="/marketplace/property-management/submit"
      />

      <section className="section">
        <div className="container">
          <DirectorySearch
            items={MOCK_PMC_ITEMS}
            categories={categories}
            regions={regions}
            directoryLabel="Property Management Companies"
            showCategoryFilter
            showRegionFilter
          />
        </div>
      </section>

      {/* How to get listed */}
      <section className="bg-slate-50 py-12">
        <div className="container max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-slate-900">Are You a Property Management Company?</h2>
          <p className="mt-2 text-sm text-slate-600">
            Join the ClickyTour directory and get matched with property owners looking for management services.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { n: "1", t: "Apply", d: "Submit your company profile with services, coverage areas, and portfolio." },
              { n: "2", t: "Get Listed", d: "After verification, your profile appears in the directory for owners to find." },
              { n: "3", t: "Access the Pool", d: "Browse incoming property requests from owners seeking management." },
            ].map((s) => (
              <div key={s.n} className="rounded-xl bg-white p-5 shadow-sm border border-slate-200">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-600 text-white text-sm font-bold">{s.n}</span>
                <h3 className="mt-2 font-bold text-slate-900">{s.t}</h3>
                <p className="mt-1 text-sm text-slate-600">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
