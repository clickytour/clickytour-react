import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { DestinationsDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Destination Planning" subtitle="Plan your trip with local insights and recommendations." ctaA="Get Started" ctaB="Learn More" ctaHrefA="/search" ctaHrefB="/guests" diagram={<DestinationsDiagram />} />
      <section className="section"><div className="container">
        <SectionTitle title="Destination Planning" subtitle="Plan your trip with local insights and recommendations." />
        <div className="text-center py-12 text-slate-500"><p>Destination content will be populated from Core.</p></div>
      </div></section>
    </PageShell>
  );
}