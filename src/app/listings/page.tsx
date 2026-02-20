'use client';
import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { VacationRentalsDiagram } from '@/components/diagrams';
import { ListingCard } from '@/components/ListingCard';
import { getAllSearchItems } from '@/lib/searchHubEngine';

export default function Page() {
  const allItems = getAllSearchItems().filter((i) => ['vacation', 'real-estate', 'hotels'].includes(i.intent));

  return (
    <PageShell>
      <Hero title="All Listings" subtitle="Browse all available properties — vacation rentals, real estate, and hotels." ctaA="Search All" ctaB="Learn More" diagram={<VacationRentalsDiagram />} />
      <section className="section"><div className="container">
        <SectionTitle eyebrow="Browse" title="All Properties" subtitle="Explore our full catalog of listings." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          {allItems.map((item) => (<ListingCard key={item.id} item={item} />))}
        </div>
        {allItems.length === 0 && <div className="text-center py-12 text-slate-500"><p>No listings available yet.</p></div>}
        <div className="mt-8 text-center">
          <Link href="/search" className="inline-block px-8 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700">Advanced Search</Link>
        </div>
      </div></section>
    </PageShell>
  );
}
