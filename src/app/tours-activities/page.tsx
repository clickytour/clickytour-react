'use client';
import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { ListingCard } from '@/components/ListingCard';
import { getAllSearchItems } from '@/lib/searchHubEngine';

export default function Page() {
  const items = getAllSearchItems().filter((i) => i.intent === 'activities');

  return (
    <PageShell>
      <Hero title="Tours & Activities" subtitle="Discover unique local experiences, tours, and activities across Greece." ctaA="Browse Activities" ctaB="List Yours" />
      <section className="section"><div className="container">
        <SectionTitle eyebrow="Explore" title="Featured Activities" subtitle="Curated experiences from local providers." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          {items.map((item) => (<ListingCard key={item.id} item={item} />))}
        </div>
        {items.length === 0 && <div className="text-center py-12 text-slate-500"><p>No activities available yet.</p></div>}
        <div className="mt-8 text-center">
          <Link href="/search?intent=activities" className="inline-block px-8 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700">Search All Activities</Link>
        </div>
      </div></section>
    </PageShell>
  );
}
