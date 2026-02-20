import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Portfolio Item" subtitle="Detailed view of a portfolio entry." ctaA="Get Started" ctaB="Learn More" />
      <section className="section"><div className="container">
        <SectionTitle title="Portfolio Item" subtitle="Detailed view of a portfolio entry." />
        <div className="text-center py-12 text-slate-500"><p>Content coming soon.</p></div>
      </div></section>
    </PageShell>
  );
}