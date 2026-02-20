import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { MediaPartnersDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Media & Partnerships" subtitle="Collaborate with ClickyTour — press, affiliates, and strategic partners." ctaA="Get Started" ctaB="Learn More" diagram={<MediaPartnersDiagram />} />
      <section className="section"><div className="container">
        <SectionTitle title="Partner With Us" subtitle="Join the ClickyTour ecosystem." />
        <div className="grid md:grid-cols-3 gap-4">
          {[{icon:'📰',t:'Press & Media',d:'Press kits, interviews, brand assets.'},{icon:'🤝',t:'Strategic Partners',d:'Technology, distribution, and market partners.'},{icon:'💰',t:'Affiliate Program',d:'Earn commissions by referring clients.'}].map(c => (
            <div key={c.t} className="card p-5"><p className="text-2xl">{c.icon}</p><h3 className="font-bold mt-2">{c.t}</h3><p className="text-slate-600 text-sm mt-1">{c.d}</p></div>
          ))}
        </div>
      </div></section>
    </PageShell>
  );
}