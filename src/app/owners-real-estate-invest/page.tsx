import { CheckList, FAQ, FeatureGrid, PageShell, SectionTitle } from '@/components/site';

export default function Page() {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-16 md:py-20">
        <div className="container">
          <p className="text-cyan-200 text-xs font-semibold uppercase tracking-[0.1em]">For Owners</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">Invest</h1>
          <p className="max-w-3xl mt-4 text-cyan-100 text-lg">Explore investment-focused property opportunities with transparent data and partnership support.</p>
        </div>
      </section>
      
<section className="section"><div className="container"><SectionTitle title="Built for investors" /><FeatureGrid items={[
{ title:'Yield-focused opportunities', desc:'Identify properties aligned with rental or resale goals.', icon:'??'},
{ title:'Market insight', desc:'Compare location demand, seasonality, and trend indicators.', icon:'??'},
{ title:'Scenario planning', desc:'Estimate outcomes under different pricing and occupancy assumptions.', icon:'??'},
{ title:'Partner ecosystem', desc:'Connect with agents, PMs, and services to execute faster.', icon:'??'}
]} /></div></section>

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
