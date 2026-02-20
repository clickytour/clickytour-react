import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Our Team" subtitle="Meet the people behind ClickyTour." ctaA="Get Started" ctaB="Learn More" />
      <section className="section"><div className="container">
        <SectionTitle title="Leadership" />
        <div className="text-center py-12 text-slate-500"><p>Team profiles coming soon.</p></div>
      </div></section>
    </PageShell>
  );
}