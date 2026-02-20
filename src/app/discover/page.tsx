import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { DestinationsDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Discover" subtitle="Explore what each destination has to offer." ctaA="Get Started" ctaB="Learn More" ctaHrefA="/search" ctaHrefB="/about" diagram={<DestinationsDiagram />} />
      <section className="section"><div className="container">
        <SectionTitle title="Discover" subtitle="Explore what each destination has to offer." />
        <div className="text-center py-12 text-slate-500"><p>Destination content will be populated from Core.</p></div>
      </div></section>
    </PageShell>
  );
}