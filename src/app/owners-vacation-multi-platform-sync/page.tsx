import { CheckList, FAQ, FeatureGrid, PageShell, SectionTitle } from '@/components/site';

export default function Page() {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-16 md:py-20">
        <div className="container">
          <p className="text-cyan-200 text-xs font-semibold uppercase tracking-[0.1em]">For Owners</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">Multi-Platform Sync</h1>
          <p className="max-w-3xl mt-4 text-cyan-100 text-lg">Publish once and keep calendars aligned across major OTAs while you stay in control locally.</p>
        </div>
      </section>
      
<section className="section"><div className="container"><SectionTitle title="What ClickyTour handles" /><FeatureGrid items={[
{ title:'30+ channel distribution', desc:'Show your listing across Airbnb, Booking, VRBO, and more.', icon:'??'},
{ title:'Real-time availability sync', desc:'Reduce double-booking risk with centralized updates.', icon:'??'},
{ title:'Central inbox', desc:'Handle inquiries and booking flow from one place.', icon:'??'},
{ title:'Performance tracking', desc:'Follow booking trends and profitability with clear reports.', icon:'??'},
{ title:'Agent visibility', desc:'Gain exposure through agent and tour-operator networks.', icon:'??'},
{ title:'Optional promotion', desc:'Boost reach through social and campaign tools.', icon:'??'}
]} /></div></section>
<section className="section section-soft"><div className="container"><SectionTitle title="What you still manage" /><CheckList items={[
'Guest check-ins and checkout processes',
'Cleaning and maintenance execution',
'Final pricing decisions and local policies',
'Property-level expenses and vendor choices'
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
