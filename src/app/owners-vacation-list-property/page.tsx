import { CheckList, FAQ, FeatureGrid, PageShell, SectionTitle } from '@/components/site';

export default function Page() {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-16 md:py-20">
        <div className="container">
          <p className="text-cyan-200 text-xs font-semibold uppercase tracking-[0.1em]">For Owners</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">List My Property</h1>
          <p className="max-w-3xl mt-4 text-cyan-100 text-lg">Start in minutes with a clear submission flow and guided owner onboarding.</p>
        </div>
      </section>
      
<section className="section"><div className="container"><SectionTitle title="Simple listing process" /><div className="grid md:grid-cols-3 gap-4">{['Submit basic property information','We review and prepare your listing draft','You approve and publish'].map((s)=> <div key={s} className="card p-5 text-slate-700">{s}</div>)}</div></div></section>
<section className="section section-soft"><div className="container"><SectionTitle title="What happens after submission" /><CheckList items={[
'Initial quality and market review',
'Dashboard access for edits and controls',
'Channel setup and visibility options',
'Support for photos, content, and optimization'
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
