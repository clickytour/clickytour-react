"use client";

import { PageShell } from "@/components/site";
import { DirectoryLanding, DirectorySearch } from "@/components/marketplace";
import { MOCK_AGENT_ITEMS, AGENT_TYPES, GREEK_REGIONS } from "@/lib/marketplace";

export default function AgentsDirectoryPage() {
  return (
    <PageShell>
      <DirectoryLanding type="agent" stats={{ listed: 45, regions: 15, matches: 180 }}>
        <section className="py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Browse Agents & Brokers</h2>
            <p className="text-sm text-slate-600 mb-8">Find travel agents, real estate brokers, and tour operators.</p>
            <DirectorySearch
              items={MOCK_AGENT_ITEMS}
              categories={AGENT_TYPES.map((t) => ({ slug: t.slug, label: t.label }))}
              regions={[...GREEK_REGIONS]}
              directoryLabel="Agents"
            />
          </div>
        </section>
      </DirectoryLanding>
    </PageShell>
  );
}
