import { CheckList, FAQ, FeatureGrid, PageShell, SectionTitle } from '@/components/site';
import { OwnerFreeEvalDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-16 md:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start"><div><p className="text-cyan-200 text-xs font-semibold uppercase tracking-[0.1em]">For Owners</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">ClickyTour.com • Vacation Owners • Free Evaluation</h1>
          <p className="max-w-3xl mt-4 text-cyan-100 text-lg">Want to Know What Your Property Can Earn</p>
        </div><div className="hidden lg:block max-w-sm"><OwnerFreeEvalDiagram /></div></div></div>
      </section>
      
<section className="section"><div className="container"><SectionTitle title="ClickyTour.com • Vacation Owners • Free Evaluation" /><FeatureGrid cols={2} items={[{ title:'Review & Submit', desc:'Review & Submit', icon:'??'},
{ title:'Submit', desc:'What happens next?', icon:'??'},
{ title:'Expert Review', desc:'Market positioning, potential earnings & service matches.', icon:'??'},
{ title:'Presentation Link', desc:'No-brand URL to share freely without contact risk.', icon:'??'},
{ title:'Optional Onboarding', desc:'Continue with Self-managed, Multi-Channel, or Full Management.', icon:'??'},
{ title:'🚪 Check-in/out', desc:'🚪 Check-in/out', icon:'??'}]} /></div></section>

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
