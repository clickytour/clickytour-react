import { FAQ, FeatureGrid, Hero, PageShell, SectionTitle } from '@/components/site';

export default function PMCPage() {
  return (
    <PageShell>
      <Hero title="Grow your portfolio and bookings — with a structured PMC path" subtitle="Two growth paths: list your properties to get demand, and offer ClickyTour network properties to expand your portfolio." ctaA="Start PMC pathway" ctaB="Open matching" />

      <section className="section"><div className="container"><div className="flex gap-2 flex-wrap">{['List Your Properties','Increase Your Portfolio'].map((x)=><span className="pill" key={x}>{x}</span>)}</div>
      <div className="grid md:grid-cols-2 gap-4 mt-6"><div className="card p-5"><h3 className="font-bold">Path A — List your properties</h3><ul className="mt-3 text-slate-600 space-y-1"><li>• Increase occupancy from visibility + partners</li><li>• Enable white-label offers</li><li>• Optional agent net pricing</li></ul></div><div className="card p-5"><h3 className="font-bold">Path B — Offer network inventory</h3><ul className="mt-3 text-slate-600 space-y-1"><li>• Expand portfolio without onboarding new units first</li><li>• Send no-logo PDF/link presentations</li><li>• Track performance and commissions</li></ul></div></div></div></section>

      <section className="section section-soft"><div className="container"><SectionTitle title="How the ecosystem works" />
      <FeatureGrid cols={3} items={[{title:'Owner requests help',desc:'ClickyTour verifies property basics.',icon:'1️⃣'},{title:'PMC gets matched',desc:'Based on region and services.',icon:'2️⃣'},{title:'You close agreement',desc:'Direct communication with owner.',icon:'3️⃣'}]} /></div></section>

      <section className="section"><div className="container"><SectionTitle title="What you get" />
      <FeatureGrid cols={3} items={[{title:'Portfolio growth',desc:'Owner matching + inbound leads.',icon:'📌'},{title:'Sales tools',desc:'White-label showcase to close faster.',icon:'📣'},{title:'Operations',desc:'Dashboard, channels, payouts, reports.',icon:'⚙️'}]} /></div></section>

      <section className="section section-soft"><div className="container"><SectionTitle title="Who Can Work With Us" />
      <FeatureGrid cols={3} items={[{title:'Small/Medium PMCs',desc:'Grow customers by listing inventory.',icon:'🏢'},{title:'Regional Managers',desc:'Expand managed area with owner matching.',icon:'🌍'},{title:'Real Estate Agencies',desc:'Rental division growth with white-label offers.',icon:'🏙️'}]} /></div></section>

      <section className="section"><div className="container card p-6"><SectionTitle title="One-Click Offers. No Extra Work." subtitle="Save 30+ minutes per lead with automated templates and filters." /><ul className="text-slate-600 space-y-1"><li>• Add your logo or send without branding</li><li>• Include pricing, details, and guest terms</li><li>• Share via link or export as PDF</li></ul></div></section>

      <section className="section section-soft"><div className="container"><SectionTitle title="Quick navigation" /><FeatureGrid cols={3} items={[{title:'Matching',desc:'Get matched with new properties.',icon:'🔗'},{title:'Listings',desc:'Publish inventory for demand.',icon:'🏠'},{title:'White-label',desc:'Win owner contracts and guest deals.',icon:'🪪'}]} /></div></section>

      <section className="section"><div className="container"><SectionTitle title="Join in 3 easy steps" /><FeatureGrid cols={3} items={[{title:'Register as PMC',desc:'Submit profile and region coverage.',icon:'✅'},{title:'Add/List Properties',desc:'Publish inventory for visibility.',icon:'🏘️'},{title:'Share, Book, Grow',desc:'Use proposals and net pricing.',icon:'🚀'}]} /></div></section>

      <section className="section section-soft"><div className="container"><SectionTitle title="FAQ preview" /><FAQ items={[{q:'How do we get new properties from ClickyTour?',a:'Use matching. When owners list in your area, qualified PMCs are connected directly.'},{q:'What is the white-label showcase?',a:'Client-ready property presentations in PDF/link with your brand or no logo.'},{q:'Can agents book our properties?',a:'Yes, if you enable agent net pricing and define your payout rules.'}]} /></div></section>

      <section className="section"><div className="container grid md:grid-cols-2 gap-4"><div className="card p-6"><SectionTitle title="Start form" /><input className="rounded-xl border border-slate-200 px-4 py-3 w-full mb-2" placeholder="Company name"/><input className="rounded-xl border border-slate-200 px-4 py-3 w-full mb-2" placeholder="Email"/><button className="btn-primary mt-2">Start now</button></div><div className="card p-6"><SectionTitle title="Testimonials" /><p className="text-slate-600">“ClickyTour helped us grow occupancy and close owner contracts faster with white-label offers.”</p></div></div></section>
    </PageShell>
  );
}
