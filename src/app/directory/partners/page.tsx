"use client";

import { PageShell } from "@/components/site";
import { DirectoryLanding } from "@/components/marketplace";

export default function PartnersDirectoryPage() {
  return (
    <PageShell>
      <DirectoryLanding type="partner" stats={{ listed: 25, regions: 10, matches: 40 }}>
        <section className="py-16">
          <div className="container mx-auto max-w-6xl px-4 text-center">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-8">
              <h2 className="text-xl font-bold text-amber-900">Coming Soon</h2>
              <p className="mt-2 text-sm text-amber-700 max-w-lg mx-auto">
                The B2B Partner Network is currently being built. Register your interest to be notified when it launches.
              </p>
              <a href="/contact" className="mt-4 inline-block rounded-full bg-amber-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-amber-700 transition">
                Register Interest
              </a>
            </div>
          </div>
        </section>
      </DirectoryLanding>
    </PageShell>
  );
}
