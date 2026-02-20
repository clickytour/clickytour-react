import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Travel Tips" subtitle="Expert advice for your next trip." ctaA="Get Started" ctaB="Learn More" />
      <section className="section"><div className="container">
        <SectionTitle title="Travel Tips" subtitle="Expert advice for your next trip." />
        <div className="text-center py-12 text-slate-500"><p>Content coming soon.</p></div>
      </div></section>
    </PageShell>
  );
}