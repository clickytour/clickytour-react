"use client";

import { Suspense } from "react";
import { PageShell } from "@/components/site";
import { SearchHub } from "@/components/SearchHub";

export default function SearchPage() {
  return (
    <PageShell>
      <Suspense fallback={<div className="flex min-h-[60vh] items-center justify-center text-slate-400">Loading search...</div>}>
        <SearchHub />
      </Suspense>
    </PageShell>
  );
}
