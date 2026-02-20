import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { PortfolioDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <PageShell>
      <Hero diagram={<PortfolioDiagram />} title="Portfolio" subtitle="Showcase of ClickyTour properties and services." ctaA="Get Started" ctaB="Learn More" />
      <section className="section"><div className="container">
        <SectionTitle title="Portfolio" subtitle="Showcase of ClickyTour properties and services." />
        <div className="text-center py-12 text-slate-500"><p>Content coming soon.</p></div>
      </div></section>
    </PageShell>
  );
}