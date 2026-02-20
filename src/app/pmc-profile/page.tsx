"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { PageShell } from "@/components/site";
import { DirectoryProfile } from "@/components/marketplace";
import { MOCK_PMC_ITEMS } from "@/lib/marketplace";

function ProfileContent() {
  const params = useSearchParams();
  const id = params.get("id") || "";

  // In production: fetch from mirror DB or CF Worker
  const item = MOCK_PMC_ITEMS.find((p) => p.id === id) || MOCK_PMC_ITEMS[0];
  const related = MOCK_PMC_ITEMS.filter((p) => p.id !== item.id);

  return (
    <section className="section">
      <div className="container">
        <DirectoryProfile item={item} isSubscribed={false} relatedItems={related} />
      </div>
    </section>
  );
}

export default function PMCProfilePage() {
  return (
    <PageShell>
      <Suspense fallback={<div className="py-20 text-center text-slate-400">Loading profile...</div>}>
        <ProfileContent />
      </Suspense>
    </PageShell>
  );
}
