import type { Metadata } from "next";
import { Suspense } from "react";
import { SearchHub } from "@/components/SearchHub";
import { SearchHubSSR } from "@/components/SearchHubSSR";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://staging.villa4you.gr";

export const metadata: Metadata = {
  title: "Search Hub | Villa4You",
  description: "Discover vacation rentals, real estate, services, hotels and travel guides — all in one universal search hub.",
  alternates: {
    canonical: `${baseUrl}/search`,
  },
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ intent?: string }>;
}) {
  const params = await searchParams;
  const intent = params.intent || "vacation";

  return (
    <div className="min-h-screen bg-slate-50">
      <Suspense fallback={<SearchHubSSR intent={intent} />}>
        <SearchHub />
      </Suspense>
    </div>
  );
}
