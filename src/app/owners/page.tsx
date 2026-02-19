import { FAQ, FeatureGrid, Hero, PageShell, SectionTitle } from '@/components/site';

export default function OwnersPage() {
  return (
    <PageShell>
      <Hero title="Everything a property owner needs — in one clear path." subtitle="List, promote, manage, and collaborate with agents/partners using transparent rules and clean presentation tools." ctaA="List my property" ctaB="View owner tools" />

      <section className="section"><div className="container">
        <div className="flex gap-2 flex-wrap">{['Vacation Owner','Real Estate Owner'].map((x)=><span key={x} className="pill">{x}</span>)}</div>
        <div className="grid md:grid-cols-3 gap-3 mt-6">{['Owner-ready listing flow','White-label links/PDF','Promotion tools','Transparent fee rules','Fast onboarding','Support when needed'].map((x)=><div key={x} className="card p-4 font-medium">✅ {x}</div>)}</div>
      </div></section>

      <section className="section section-soft"><div className="container"><SectionTitle title="Quick navigation" />
      <FeatureGrid cols={3} items={[
        {title:'List & Promote',desc:'Create listing and choose visibility model.',icon:'📣'},
        {title:'Management Style',desc:'Self-managed or full support workflows.',icon:'⚙️'},
        {title:'Owner Dashboard',desc:'Bookings, leads and payouts in one place.',icon:'📊'},
        {title:'White-label Presentations',desc:'Send owner-ready PDF or links.',icon:'🪪'},
        {title:'Staff & Contractors',desc:'Request cleaning, repairs, check-in support.',icon:'🧰'},
        {title:'Agent/PMC Collaboration',desc:'Work with verified partners for growth.',icon:'🤝'},
      ]} /></div></section>

      <section className="section"><div className="container"><SectionTitle title="Choose your management style" />
        <FeatureGrid cols={2} items={[{title:'Self-managed',desc:'You control operations with our tools and automation.',icon:'🧭'},{title:'Full management',desc:'We connect you with teams for hands-off management.',icon:'🏢'}]} />
      </div></section>

      <section className="section section-soft"><div className="container"><SectionTitle title="Turn Your Property into Profit with ClickyTour" />
        <FeatureGrid cols={2} items={[
          {title:'Vacation Rental Owners',desc:'Free evaluation, list on 30+ sites, unified booking dashboard.',icon:'🏖️'},
          {title:'Real Estate Owners',desc:'Sell or lease faster with investor network and smart offers.',icon:'🏠'},
        ]} />
      </div></section>

      <section className="section"><div className="container"><SectionTitle title="Why Property Owners Trust ClickyTour" />
      <FeatureGrid cols={3} items={[{title:'18+ years experience',desc:'Built by operators who understand the market.',icon:'🧠'},{title:'Smart technology tools',desc:'Automation and visibility without complexity.',icon:'🛠️'},{title:'Hassle-free onboarding',desc:'Clear steps and guided setup from day one.',icon:'🚀'}]} />
      </div></section>

      <section className="section section-soft"><div className="container"><SectionTitle title="FAQ for Owners" />
      <FAQ items={[{q:'Can I start with self-management and upgrade later?',a:'Yes. You can begin with self-management and switch to supported management at any time.'},{q:'Can agents and PMCs help me promote?',a:'Yes, collaboration options are available with transparent pricing and access rules.'},{q:'Do I need technical skills?',a:'No. The listing flow and tools are built for non-technical owners.'}]} />
      </div></section>
    </PageShell>
  );
}
