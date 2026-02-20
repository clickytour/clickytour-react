import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { OffersDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Offers & Deals" subtitle="Special prices, packages, and seasonal promotions." ctaA="Get Started" ctaB="Learn More" diagram={<OffersDiagram />} />
      <section className="section"><div className="container">
        <SectionTitle title="Offers & Deals" subtitle="Special prices, packages, and seasonal promotions." />
        <div className="text-center py-12 text-slate-500"><p>Offers will be populated from Core.</p><p className="text-sm mt-1"><Link href="/offers" className="text-teal-600 font-semibold hover:underline">Browse all offers</Link></p></div>
      </div></section>
    </PageShell>
  );
}