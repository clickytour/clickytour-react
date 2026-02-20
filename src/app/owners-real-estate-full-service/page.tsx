import { CheckList, FAQ, FeatureGrid, PageShell, SectionTitle } from '@/components/site';
import { OwnerFullManagementDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-16 md:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start"><div><p className="text-cyan-200 text-xs font-semibold uppercase tracking-[0.1em]">For Owners</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">About Services • Reside Sphere by ClickyTour</h1>
          <p className="max-w-3xl mt-4 text-cyan-100 text-lg">Expert Services for Property Owners</p>
        </div><div className="hidden lg:block max-w-sm"><OwnerFullManagementDiagram /></div></div></div>
      </section>
      
<section className="section"><div className="container"><SectionTitle title="About Services • Reside Sphere by ClickyTour" /><FeatureGrid cols={2} items={[{ title:'Long-term support (strategy → execution → post-sale help)', desc:'Long-term support (strategy → execution → post-sale help)', icon:'??'},
{ title:'Fast access to vetted professionals (builders, inspectors, legal)', desc:'Fast access to vetted professionals (builders, inspectors, legal)', icon:'??'},
{ title:'Optional dashboard tracking + white-label quotes when needed', desc:'Optional dashboard tracking + white-label quotes when needed', icon:'??'},
{ title:'Guidance through the full transaction lifecycle.', desc:'Request a Service', icon:'??'},
{ title:'Private link', desc:'with your request status', icon:'??'},
{ title:'Direct contact', desc:'with a specialist (via dashboard)', icon:'??'}]} /></div></section>

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
