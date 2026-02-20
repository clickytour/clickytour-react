import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Seaside Villa" subtitle="Sample property — luxury beachfront villa." ctaA="Get Started" ctaB="Learn More" ctaHrefA="/search" ctaHrefB="/vacation-rentals" />
      <section className="section"><div className="container">
        <SectionTitle title="Seaside Villa" subtitle="Sample property — luxury beachfront villa." />
        <div className="text-center py-12 text-slate-500"><p>Content coming soon.</p></div>
      </div></section>
    </PageShell>
  );
}