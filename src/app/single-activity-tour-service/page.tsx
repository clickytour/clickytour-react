'use client';
import { PageShell, Hero, SectionTitle } from '@/components/site';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Activity Details" subtitle="View full details, availability, and pricing." ctaA="Get Started" ctaB="Learn More" />
      <section className="section"><div className="container"><div className="card p-6 md:p-8">
        <div className="flex items-center justify-between mb-4"><span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full">Available</span></div>
        <h2 className="text-2xl font-bold text-slate-900">Sample Activity</h2>
        <p className="text-slate-600 mt-2">Activity details will be loaded from Core.</p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          {['Type','Location','Duration','Price','Provider','Languages'].map(f => (<div key={f}><p className="text-sm font-semibold text-slate-500">{f}</p><p className="text-slate-800">&mdash;</p></div>))}
        </div>
        <div className="mt-8 flex gap-3"><button className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700">Book Now</button><button className="px-6 py-3 border border-teal-600 text-teal-700 font-semibold rounded-xl hover:bg-teal-50">Contact Provider</button></div>
      </div></div></section>
    </PageShell>
  );
}