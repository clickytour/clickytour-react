'use client';
import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { VacationRentalsDiagram } from '@/components/diagrams';
import { ListingCard } from '@/components/ListingCard';
import { getAllSearchItems } from '@/lib/searchHubEngine';

export default function Page() {
  const vacationItems = getAllSearchItems().filter((i) => i.intent === 'vacation');

  return (
    <PageShell>
      <Hero title="Vacation Rentals" subtitle="Find your perfect vacation home — villas, apartments, and more." ctaA="Search All" ctaB="Learn More" diagram={<VacationRentalsDiagram />} />
      <section className="section"><div className="container">
        {/* Quick filters */}
        <div className="card p-6 mb-6">
          <div className="grid md:grid-cols-4 gap-4">
            <div><label className="block text-sm font-semibold text-slate-700 mb-1">Destination</label><input className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="Where?" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-1">Check-in</label><input type="date" className="w-full rounded-xl border border-slate-200 px-4 py-3" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-1">Guests</label><select className="w-full rounded-xl border border-slate-200 px-4 py-3"><option>Any</option><option>1-2</option><option>3-4</option><option>5-6</option><option>7+</option></select></div>
            <div className="flex items-end"><Link href="/search?intent=vacation" className="w-full px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 text-center block">Search</Link></div>
          </div>
        </div>

        <SectionTitle eyebrow="Browse" title="Featured Vacation Properties" subtitle="Hand-picked properties from our mirror database." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          {vacationItems.map((item) => (
            <ListingCard key={item.id} item={item} />
          ))}
        </div>

        {vacationItems.length === 0 && (
          <div className="text-center py-12 text-slate-500"><p>No vacation properties available yet. Check back soon!</p></div>
        )}

        <div className="mt-8 text-center">
          <Link href="/search?intent=vacation" className="inline-block px-8 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700">
            View All Vacation Rentals
          </Link>
        </div>
      </div></section>
    </PageShell>
  );
}
