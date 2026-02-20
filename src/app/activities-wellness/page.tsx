import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Wellness & Spa" subtitle="Yoga, spa treatments, retreats, and relaxation." ctaA="Get Started" ctaB="Learn More" />
      <section className="section"><div className="container">
        <SectionTitle title="Wellness & Spa" subtitle="Recharge your body and mind on vacation." />
        <div className="text-center py-12 text-slate-500"><p>Activity listings will be populated from Core.</p><p className="text-sm mt-1"><Link href="/tours-activities" className="text-teal-600 font-semibold hover:underline">Browse all categories</Link></p></div>
      </div></section>
    </PageShell>
  );
}