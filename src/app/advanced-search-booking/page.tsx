import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { AdvancedSearchDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Advanced Search & Booking" subtitle="Find exactly what you need with advanced filters." ctaA="Get Started" ctaB="Learn More" ctaHrefA="/search" ctaHrefB="/guests" diagram={<AdvancedSearchDiagram />} />
      <section className="section"><div className="container">
        <SectionTitle title="Advanced Search & Booking" subtitle="Find exactly what you need with advanced filters." />
        <div className="text-center py-12 text-slate-500"><p>Content coming soon.</p></div>
      </div></section>
    </PageShell>
  );
}