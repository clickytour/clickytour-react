import { CheckList, FAQ, FeatureGrid, PageShell, SectionTitle } from '@/components/site';
import { OwnerBecomeAgentDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-16 md:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start"><div><p className="text-cyan-200 text-xs font-semibold uppercase tracking-[0.1em]">For Owners</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">Become an Agent</h1>
          <p className="max-w-3xl mt-4 text-cyan-100 text-lg">Promote listings, send branded offers, and earn commissions without owning inventory.</p>
        </div><div className="hidden lg:block max-w-sm"><OwnerBecomeAgentDiagram /></div></div></div>
      </section>
      
<section className="section"><div className="container"><SectionTitle title="How agent mode works" /><div className="grid md:grid-cols-4 gap-4">{['Choose listings','Generate branded quote','Share with client','Track commission'].map((s)=> <div key={s} className="card p-4 text-sm font-medium text-slate-700">{s}</div>)}</div></div></section>
<section className="section section-soft"><div className="container"><SectionTitle title="What you can promote" /><CheckList items={['Vacation rentals','Real-estate opportunities','Local service packages','Add-on experiences and support services']} /></div></section>

      <section className="section">
        <div className="container">
          <div className="rounded-xl bg-[#0F2B46] text-white p-8 md:p-10">
            <h2 className="text-3xl font-extrabold">Ready to move forward?</h2>
            <p className="text-cyan-100 mt-2">List your property or speak with owner support to choose the right path.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <button className="btn-primary">Get started</button>
              <button className="btn-secondary">Talk to support</button>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
