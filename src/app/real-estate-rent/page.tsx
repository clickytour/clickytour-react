import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { RealEstateHubDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Rent Property" subtitle="Long-term rentals for living or investment." ctaA="Get Started" ctaB="Learn More" diagram={<RealEstateHubDiagram />} />
      <section className="section"><div className="container">
        <SectionTitle title="Rent Property" subtitle="Long-term rentals for living or investment." />
        <div className="grid md:grid-cols-3 gap-4">
          {[{icon:'🏠',t:'Browse Properties',d:'Search by location, type, and budget.'},{icon:'📊',t:'Market Insights',d:'Property trends and investment data.'},{icon:'📝',t:'Free Consultation',d:'Expert advice on buying or selling.'}].map(c => (
            <div key={c.t} className="card p-5"><p className="text-2xl">{c.icon}</p><h3 className="font-bold mt-2">{c.t}</h3><p className="text-slate-600 text-sm mt-1">{c.d}</p></div>
          ))}
        </div>
      </div></section>
    </PageShell>
  );
}