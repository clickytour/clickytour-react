'use client';
import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { ListingCard } from '@/components/ListingCard';
import { getAllSearchItems } from '@/lib/searchHubEngine';

export default function Page() {
  const vacationItems = getAllSearchItems().filter((i) => i.intent === 'vacation');

  return (
    <PageShell>
      <Hero title="Vacation Properties" subtitle="Browse individual vacation rental properties with full details." ctaA="Search All" ctaB="Learn More" />
      <section className="section"><div className="container">
        <SectionTitle eyebrow="Properties" title="Available Vacation Rentals" subtitle="Click any property to view full details, gallery, pricing, and availability." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          {vacationItems.map((item) => (<ListingCard key={item.id} item={item} />))}
        </div>
        {vacationItems.length === 0 && <div className="text-center py-12 text-slate-500"><p>No properties available yet.</p></div>}
        <div className="mt-8 text-center">
          <Link href="/search?intent=vacation" className="inline-block px-8 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700">Advanced Search</Link>
        </div>
      </div></section>
    </PageShell>
  );
}
