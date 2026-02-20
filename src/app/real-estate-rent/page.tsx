'use client';
import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { ListingCard } from '@/components/ListingCard';
import { getAllSearchItems } from '@/lib/searchHubEngine';

export default function Page() {
  const reItems = getAllSearchItems().filter((i) => i.intent === 'real-estate');

  return (
    <PageShell>
      <Hero title="Real Estate — Rent" subtitle="Find long-term rental properties across Greece." ctaA="Search Rentals" ctaB="Learn More" />
      <section className="section"><div className="container">
        <SectionTitle eyebrow="For Rent" title="Properties Available for Monthly Rental" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          {reItems.map((item) => (
            <ListingCard key={item.id} item={item} />
          ))}
        </div>
        {reItems.length === 0 && <div className="text-center py-12 text-slate-500"><p>No rental properties available yet.</p></div>}
        <div className="mt-8 text-center">
          <Link href="/search?intent=real-estate" className="inline-block px-8 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700">View All Real Estate</Link>
        </div>
      </div></section>
    </PageShell>
  );
}
