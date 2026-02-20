import { CheckList, FAQ, FeatureGrid, PageShell, SectionTitle } from '@/components/site';
import { OwnerPlansDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-16 md:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start"><div><p className="text-cyan-200 text-xs font-semibold uppercase tracking-[0.1em]">For Owners</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">Plans & Pricing</h1>
          <p className="max-w-3xl mt-4 text-cyan-100 text-lg">Compare owner plans and select the feature set that matches your property strategy.</p>
        </div><div className="hidden lg:block max-w-sm"><OwnerPlansDiagram /></div></div></div>
      </section>
      
<section className="section"><div className="container"><SectionTitle title="Owner plans" /><div className="grid md:grid-cols-3 gap-4">{[
{n:'Starter',p:'For new owners',f:['Core listing setup','Basic dashboard access','Standard support']},
{n:'Growth',p:'For active operators',f:['Multi-channel sync','Advanced reporting','Promotion options']},
{n:'Managed',p:'For passive ownership',f:['Operational delegation','Partner coordination','Performance reporting']}
].map((plan)=> <article key={plan.n} className="card p-6"><p className="text-xs text-cyan-700 font-semibold">{plan.p}</p><h3 className="text-xl font-bold text-[#0F2B46] mt-1">{plan.n}</h3><ul className="mt-3 space-y-1 text-sm text-slate-600">{plan.f.map((x)=><li key={x}>? {x}</li>)}</ul></article>)}</div></div></section>

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
