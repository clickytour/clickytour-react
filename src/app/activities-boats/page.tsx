import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { ActivitiesSearchDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <PageShell>
      <Hero diagram={<ActivitiesSearchDiagram />} title="Boats & Water Sports" subtitle="Sailing, jet ski, kayaking, diving, and boat tours." ctaA="Get Started" ctaB="Learn More" />
      <section className="section"><div className="container">
        <SectionTitle title="Boats & Water Sports" subtitle="Explore the coastline and enjoy water-based adventures." />
        <div className="text-center py-12 text-slate-500"><p>Activity listings will be populated from Core.</p><p className="text-sm mt-1"><Link href="/tours-activities" className="text-teal-600 font-semibold hover:underline">Browse all categories</Link></p></div>
      </div></section>
    </PageShell>
  );
}