import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Service Providers List" subtitle="Browse all registered service providers." ctaA="Get Started" ctaB="Learn More" />
      <section className="section"><div className="container">
        <SectionTitle title="Service Providers List" subtitle="Browse all registered service providers." />
        <div className="text-center py-12 text-slate-500"><p>Content coming soon.</p></div>
      </div></section>
    </PageShell>
  );
}