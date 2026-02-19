import { CheckList, FAQ, FeatureGrid, PageShell, SectionTitle } from '@/components/site';

export default function Page() {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-16 md:py-20">
        <div className="container">
          <p className="text-cyan-200 text-xs font-semibold uppercase tracking-[0.1em]">For Owners</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">Self Managed</h1>
          <p className="max-w-3xl mt-4 text-cyan-100 text-lg">Stay independent while using owner tools for listings, calendars, pricing, and communication.</p>
        </div>
      </section>
      
<section className="section"><div className="container"><SectionTitle title="Built for hands-on owners" /><FeatureGrid cols={2} items={[
{ title:'You manage operations', desc:'Handle check-ins, cleaning, maintenance, and local coordination.', icon:'??'},
{ title:'You keep control', desc:'Set net and gross prices, booking rules, and availability windows.', icon:'??'},
{ title:'You track finances', desc:'Monitor income vs expenses and export accountant-ready reports.', icon:'??'},
{ title:'You communicate directly', desc:'Use built-in messaging with guests, agents, and providers.', icon:'??'}
]} /></div></section>
<section className="section section-soft"><div className="container"><SectionTitle title="Included at no extra complexity" /><CheckList items={[
'Free listing in the ClickyTour owner ecosystem',
'Availability calendar controls',
'Sync option with Airbnb and other channels',
'Basic messaging and notification tools',
'Optional add-ons for social promotion and media creation'
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
