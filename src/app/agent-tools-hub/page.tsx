import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Agent Tools Hub" subtitle="All tools and resources for ClickyTour agents — quotation builders, white-label offers, advanced search, and more." ctaA="Browse All Agent Tools" ctaB="Back to Agents" ctaHrefA="/tools?role=agent" ctaHrefB="/agents" />
      <section className="section"><div className="container">
        <SectionTitle title="Tools for Agents" subtitle="Explore the full catalog of tools designed for travel agents and brokers." />
        <div className="text-center py-12"><Link href="/tools?role=agent" className="btn-primary">Open Tools Hub (Agent Filter)</Link></div>
      </div></section>
    </PageShell>
  );
}