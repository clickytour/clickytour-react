import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Services for Owners & Hosts" subtitle="Find services to manage your property better." ctaA="Get Started" ctaB="Learn More" ctaHrefA="/service-providers-list-service" ctaHrefB="/service-providers" />
      <section className="section"><div className="container">
        <SectionTitle title="Services for Owners & Hosts" subtitle="Find services to manage your property better." />
        <div className="text-center py-12 text-slate-500"><p>Content coming soon.</p></div>
      </div></section>
    </PageShell>
  );
}