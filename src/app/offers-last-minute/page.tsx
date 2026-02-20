import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Last Minute Deals" subtitle="Grab last-minute discounts on stays and activities." ctaA="Get Started" ctaB="Learn More" />
      <section className="section"><div className="container">
        <SectionTitle title="Last Minute Deals" subtitle="Grab last-minute discounts on stays and activities." />
        <div className="text-center py-12 text-slate-500"><p>Offers will be populated from Core.</p><p className="text-sm mt-1"><Link href="/offers" className="text-teal-600 font-semibold hover:underline">Browse all offers</Link></p></div>
      </div></section>
    </PageShell>
  );
}