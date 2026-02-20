import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { ActivitiesSearchDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <PageShell>
      <Hero diagram={<ActivitiesSearchDiagram />} title="Destination Tours" subtitle="Guided tours and local experiences by destination." ctaA="Get Started" ctaB="Learn More" />
      <section className="section"><div className="container">
        <SectionTitle title="Destination Tours" subtitle="Discover hidden gems with expert local guides." />
        <div className="text-center py-12 text-slate-500"><p>Activity listings will be populated from Core.</p><p className="text-sm mt-1"><Link href="/tours-activities" className="text-teal-600 font-semibold hover:underline">Browse all categories</Link></p></div>
      </div></section>
    </PageShell>
  );
}