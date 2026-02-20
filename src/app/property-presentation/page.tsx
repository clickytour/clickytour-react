import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Property Presentation" subtitle="Professional property showcase template." ctaA="Get Started" ctaB="Learn More" ctaHrefA="/search" ctaHrefB="/about" />
      <section className="section"><div className="container">
        <SectionTitle title="Property Presentation" subtitle="Professional property showcase template." />
        <div className="text-center py-12 text-slate-500"><p>Content coming soon.</p></div>
      </div></section>
    </PageShell>
  );
}