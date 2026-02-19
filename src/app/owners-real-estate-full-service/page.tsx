import { CheckList, FAQ, FeatureGrid, PageShell, SectionTitle } from '@/components/site';

export default function Page() {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-16 md:py-20">
        <div className="container">
          <p className="text-cyan-200 text-xs font-semibold uppercase tracking-[0.1em]">For Owners</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">Full Service</h1>
          <p className="max-w-3xl mt-4 text-cyan-100 text-lg">Let our network support your listing lifecycle?from preparation to buyer/tenant engagement.</p>
        </div>
      </section>
      
<section className="section"><div className="container"><SectionTitle title="Service coverage" /><FeatureGrid cols={2} items={[
{ title:'Preparation support', desc:'Guidance for content, visuals, and market positioning.', icon:'??'},
{ title:'Promotion execution', desc:'Campaign and partner distribution to increase visibility.', icon:'??'},
{ title:'Lead management flow', desc:'Structured handling of inquiries and follow-up actions.', icon:'??'},
{ title:'Reporting and optimization', desc:'Continuous performance review and next-step recommendations.', icon:'??'}
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
