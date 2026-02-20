import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { ActivitiesSearchDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <PageShell>
      <Hero diagram={<ActivitiesSearchDiagram />} title="Outdoor Adventures" subtitle="Hiking, cycling, climbing, and nature tours." ctaA="Get Started" ctaB="Learn More" />
      <section className="section"><div className="container">
        <SectionTitle title="Outdoor Adventures" subtitle="Get active and explore the great outdoors." />
        <div className="text-center py-12 text-slate-500"><p>Activity listings will be populated from Core.</p><p className="text-sm mt-1"><Link href="/tours-activities" className="text-teal-600 font-semibold hover:underline">Browse all categories</Link></p></div>
      </div></section>
    </PageShell>
  );
}