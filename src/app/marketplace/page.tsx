import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { MarketplaceDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <PageShell>
      <Hero title="ClickyTour Marketplace" subtitle="Services, tools, and add-ons for tourism professionals." ctaA="Get Started" ctaB="Learn More" diagram={<MarketplaceDiagram />} />
      <section className="section"><div className="container">
        <SectionTitle title="Browse the Marketplace" subtitle="Find services, tools, and solutions for your business." />
        <div className="grid md:grid-cols-3 gap-4">
          {[{icon:'🏠',t:'Property Services',d:'Cleaning, maintenance, check-in.'},{icon:'📸',t:'Marketing & Media',d:'Photography, video, social media.'},{icon:'🔧',t:'Tools & Software',d:'Channel managers, booking engines.'},{icon:'📊',t:'Analytics',d:'Performance tracking and insights.'},{icon:'💼',t:'Professional Services',d:'Legal, accounting, consulting.'},{icon:'🎯',t:'Promotion',d:'Visibility boosts, featured listings.'}].map(c => (
            <div key={c.t} className="card p-5"><p className="text-2xl">{c.icon}</p><h3 className="font-bold mt-2">{c.t}</h3><p className="text-slate-600 text-sm mt-1">{c.d}</p></div>
          ))}
        </div>
      </div></section>
    </PageShell>
  );
}