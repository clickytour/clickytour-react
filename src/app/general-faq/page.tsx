import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { FAQDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <PageShell>
      <Hero title="General FAQ" subtitle="Frequently asked questions about ClickyTour." ctaA="Get Started" ctaB="Learn More" diagram={<FAQDiagram />} />
      <section className="section"><div className="container">
        <SectionTitle title="General FAQ" />
        <div className="space-y-3">
          {['How does ClickyTour work?','Is it free to use?','How do I create an account?','What destinations do you cover?','How can I contact support?'].map(q => (
            <details key={q} className="card p-4 cursor-pointer"><summary className="font-semibold text-slate-900">{q}</summary><p className="text-slate-600 text-sm mt-2">Answer coming soon.</p></details>
          ))}
        </div>
      </div></section>
    </PageShell>
  );
}