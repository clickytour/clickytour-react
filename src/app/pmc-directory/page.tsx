'use client';
import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { ListingCard } from '@/components/ListingCard';
import { getAllSearchItems } from '@/lib/searchHubEngine';

export default function Page() {
  const pmcItems = getAllSearchItems().filter((i) => i.intent === 'pmcs');

  return (
    <PageShell>
      <Hero title="PMC Directory" subtitle="Find property management companies by destination and service type." ctaA="Browse PMCs" ctaB="Apply as PMC" />
      <section className="section"><div className="container">
        <SectionTitle eyebrow="Directory" title="Property Management Companies" subtitle="Trusted partners managing vacation and real estate portfolios." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          {pmcItems.map((item) => (<ListingCard key={item.id} item={item} />))}
        </div>
        {pmcItems.length === 0 && <div className="text-center py-12 text-slate-500"><p>No PMCs listed yet.</p></div>}
        <div className="mt-8 text-center">
          <Link href="/search?intent=pmcs" className="inline-block px-8 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700">Search All PMCs</Link>
        </div>
      </div></section>
    </PageShell>
  );
}
