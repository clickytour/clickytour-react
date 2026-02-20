import { CheckList, FAQ, FeatureGrid, PageShell, SectionTitle } from '@/components/site';

export default function Page() {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-16 md:py-20">
        <div className="container">
          <p className="text-cyan-200 text-xs font-semibold uppercase tracking-[0.1em]">For Owners</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">Invest in Greek Real Estate — Smart, Easy, Secure</h1>
          <p className="max-w-3xl mt-4 text-cyan-100 text-lg">Whether you’re looking for a buy-to-rent vacation home, a renovation flip, or a long-term income property,</p>
        </div>
      </section>
      
<section className="section"><div className="container"><SectionTitle title="About Services • Investors" /><FeatureGrid items={[{ title:'Match listings', desc:'Based on budget, location, and strategy.', icon:'??'},
{ title:'Send insights', desc:'ROI, seasonality, expenses, and projections.', icon:'??'},
{ title:'Activate services', desc:'Renovation / rental setup when you’re ready.', icon:'??'},
{ title:'€150k–€300k', desc:'€150k–€300k', icon:'??'},
{ title:'€1M+', desc:'€1M+', icon:'??'}]} /></div></section>

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
