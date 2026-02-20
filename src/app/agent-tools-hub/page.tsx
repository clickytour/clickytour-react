import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Agent Tools Hub" subtitle="All tools and resources for ClickyTour agents." ctaA="Get Started" ctaB="Learn More" ctaHrefA="/agents-tools" ctaHrefB="/agents" />
      <section className="section"><div className="container">
        <SectionTitle title="Agent Tools Hub" subtitle="All tools and resources for ClickyTour agents." />
        <div className="text-center py-12 text-slate-500"><p>Content coming soon.</p></div>
      </div></section>
    </PageShell>
  );
}