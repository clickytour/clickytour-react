'use client';
import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { ListingCard } from '@/components/ListingCard';
import { getAllSearchItems } from '@/lib/searchHubEngine';

export default function Page() {
  const items = getAllSearchItems().filter((i) => i.intent === 'services' || i.intent === 'activities');

  return (
    <PageShell>
      <Hero title="Services & Activities" subtitle="Discover local services and activities for all roles — guests, owners, agents, and providers." ctaA="Browse All" ctaB="List Yours" ctaHrefA="/search" ctaHrefB="/service-providers-list-service" />
      <section className="section"><div className="container">
        <SectionTitle eyebrow="All Roles" title="Services & Activities Directory" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          {items.map((item) => (<ListingCard key={item.id} item={item} />))}
        </div>
        {items.length === 0 && <div className="text-center py-12 text-slate-500"><p>No services or activities yet.</p></div>}
        <div className="mt-8 text-center">
          <Link href="/search?intent=services" className="inline-block px-8 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700">Advanced Search</Link>
        </div>
      </div></section>
    </PageShell>
  );
}
