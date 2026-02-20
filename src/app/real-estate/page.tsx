'use client';
import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { OwnerRealEstateDiagram } from '@/components/diagrams';
import { ListingCard } from '@/components/ListingCard';
import { getAllSearchItems } from '@/lib/searchHubEngine';

export default function Page() {
  const reItems = getAllSearchItems().filter((i) => i.intent === 'real-estate');

  return (
    <PageShell>
      <Hero title="Real Estate" subtitle="Buy, sell, or rent properties across Greece. Investment and lifestyle opportunities." ctaA="Browse Properties" ctaB="List Yours" ctaHrefA="/real-estate-buy" ctaHrefB="/real-estate-owners-list" diagram={<OwnerRealEstateDiagram />} />
      <section className="section"><div className="container">
        <SectionTitle eyebrow="Market" title="Featured Real Estate" subtitle="Properties for sale, monthly rent, and vacation rental." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          {reItems.map((item) => (<ListingCard key={item.id} item={item} />))}
        </div>
        {reItems.length === 0 && <div className="text-center py-12 text-slate-500"><p>No properties available yet.</p></div>}
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/real-estate-buy" className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700">Buy</Link>
          <Link href="/real-estate-rent" className="px-6 py-3 border border-teal-600 text-teal-700 font-semibold rounded-xl hover:bg-teal-50">Rent</Link>
          <Link href="/search?intent=real-estate" className="px-6 py-3 border border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-50">Search All</Link>
        </div>
      </div></section>
    </PageShell>
  );
}
