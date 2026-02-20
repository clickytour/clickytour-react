import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Food & Wine Experiences" subtitle="Tastings, cooking classes, wine tours, and local cuisine." ctaA="Get Started" ctaB="Learn More" />
      <section className="section"><div className="container">
        <SectionTitle title="Food & Wine Experiences" subtitle="Savor authentic flavors and culinary traditions." />
        <div className="text-center py-12 text-slate-500"><p>Activity listings will be populated from Core.</p><p className="text-sm mt-1"><Link href="/tours-activities" className="text-teal-600 font-semibold hover:underline">Browse all categories</Link></p></div>
      </div></section>
    </PageShell>
  );
}