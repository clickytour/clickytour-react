'use client';
import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { SPListPromoteDiagram } from '@/components/diagrams';
import { ListingCard } from '@/components/ListingCard';
import { getAllSearchItems } from '@/lib/searchHubEngine';

export default function Page() {
  const serviceItems = getAllSearchItems().filter((i) => i.intent === 'services');

  return (
    <PageShell>
      <Hero title="Service Providers" subtitle="Find trusted local service providers for your property or vacation needs." ctaA="Browse Services" ctaB="List Your Service" diagram={<SPListPromoteDiagram />} />
      <section className="section"><div className="container">
        <SectionTitle eyebrow="Directory" title="Local Service Providers" subtitle="Professional services across Greece." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          {serviceItems.map((item) => (<ListingCard key={item.id} item={item} />))}
        </div>
        {serviceItems.length === 0 && <div className="text-center py-12 text-slate-500"><p>No services listed yet.</p></div>}
        <div className="mt-8 text-center">
          <Link href="/search?intent=services" className="inline-block px-8 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700">Search All Services</Link>
        </div>
      </div></section>
    </PageShell>
  );
}
