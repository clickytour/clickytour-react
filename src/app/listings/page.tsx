'use client';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { VacationRentalsDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <PageShell>
      <Hero title="All Listings" subtitle="Browse all available properties and services." ctaA="Get Started" ctaB="Learn More" diagram={<VacationRentalsDiagram />} />
      <section className="section"><div className="container">
        <div className="card p-6 mb-6">
          <div className="grid md:grid-cols-4 gap-4">
            <div><label className="block text-sm font-semibold text-slate-700 mb-1">Destination</label><input className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="Where?" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-1">Check-in</label><input type="date" className="w-full rounded-xl border border-slate-200 px-4 py-3" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-1">Guests</label><select className="w-full rounded-xl border border-slate-200 px-4 py-3"><option>1</option><option>2</option><option>3-4</option><option>5-6</option><option>7+</option></select></div>
            <div className="flex items-end"><button className="w-full px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700">Search</button></div>
          </div>
        </div>
        <div className="text-center py-12 text-slate-500"><p>Listings will be populated from Core.</p></div>
      </div></section>
    </PageShell>
  );
}