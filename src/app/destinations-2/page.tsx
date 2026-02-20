import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Destinations" subtitle="Explore popular destinations for your next trip." ctaA="Get Started" ctaB="Learn More" />
      <section className="section"><div className="container">
        <SectionTitle title="Destinations" subtitle="Explore popular destinations for your next trip." />
        <div className="text-center py-12 text-slate-500"><p>Destination content will be populated from Core.</p></div>
      </div></section>
    </PageShell>
  );
}