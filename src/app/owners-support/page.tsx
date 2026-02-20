import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Owner Support" subtitle="Help and resources for property owners." ctaA="Get Started" ctaB="Learn More" ctaHrefA="/contact" ctaHrefB="/owners-faq" />
      <section className="section"><div className="container">
        <SectionTitle title="Owner Support" subtitle="Help and resources for property owners." />
        <div className="text-center py-12 text-slate-500"><p>Content coming soon.</p></div>
      </div></section>
    </PageShell>
  );
}