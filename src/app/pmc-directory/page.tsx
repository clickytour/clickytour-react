'use client';
import { PageShell, Hero, SectionTitle } from '@/components/site';

export default function Page() {
  return (
    <PageShell>
      <Hero title="PMC Directory" subtitle="Find property management companies by destination." ctaA="Get Started" ctaB="Learn More" />
      <section className="section"><div className="container">
        <div className="text-center py-12 text-slate-500"><p>This page will be connected to Core.</p></div>
      </div></section>
    </PageShell>
  );
}