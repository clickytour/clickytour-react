'use client';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { PMCApplyFormDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <PageShell>
      <Hero title="PMC Presentation" subtitle="How ClickyTour empowers property management companies." ctaA="Get Started" ctaB="Learn More" ctaHrefA="/pmc-apply" ctaHrefB="/pm-companies" diagram={<PMCApplyFormDiagram />} />
      <section className="section"><div className="container">
        <div className="text-center py-12 text-slate-500"><p>This page will be connected to Core.</p></div>
      </div></section>
    </PageShell>
  );
}