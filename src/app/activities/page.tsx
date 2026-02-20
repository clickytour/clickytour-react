import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { ToursActivitiesDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <PageShell>
      <Hero title="All Activities" subtitle="Browse all available activities and experiences." ctaA="Get Started" ctaB="Learn More" diagram={<ToursActivitiesDiagram />} />
      <section className="section"><div className="container">
        <SectionTitle title="All Activities" subtitle="Find tours, activities, and experiences across all destinations." />
        <div className="text-center py-12 text-slate-500"><p>Activity listings will be populated from Core.</p><p className="text-sm mt-1"><Link href="/tours-activities" className="text-teal-600 font-semibold hover:underline">Browse all categories</Link></p></div>
      </div></section>
    </PageShell>
  );
}