import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { DestinationsDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Destinations" subtitle="Explore popular destinations for your next trip." ctaA="Get Started" ctaB="Learn More" ctaHrefA="/search" ctaHrefB="/guests" diagram={<DestinationsDiagram />} />
      <section className="section"><div className="container">
        <SectionTitle title="Destinations" subtitle="Explore popular destinations for your next trip." />
        <div className="text-center py-12 text-slate-500"><p>Destination content will be populated from Core.</p></div>
      </div></section>
    </PageShell>
  );
}