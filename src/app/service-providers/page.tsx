import { FAQ, FeatureGrid, Hero, PageShell, SectionTitle } from '@/components/site';

export default function ServiceProvidersPage() {
  const categories = ['Dining/Cafes','Local Activities','Wellness & Spa','Transfers & Transport','Vehicle Rentals','Concierge','Outdoor Activities','Cultural Performances','Attractions','Photo & Viewpoint Tours','Medical & Health','Retreats & Education','Seasonal Events','Volunteer'];
  return (
    <PageShell>
      <Hero title="For Guests & Tourists: get bookings and visibility where travelers search." subtitle="List your business, reach guests and agents, and offer services to owners — from one structured menu." ctaA="List my service" ctaB="Free evaluation" />

      <section className="section"><div className="container">
        <div className="flex gap-2 flex-wrap mb-6">{['For Guests & Tourists','For Owners & Hosts'].map((x)=><span key={x} className="pill">{x}</span>)}</div>
        <div className="grid md:grid-cols-2 gap-3">{['A clear listing & onboarding flow','Transparent pricing & plan rules','Promotion tools & templates','Access to guests, agents, owners'].map((x)=><div className="card p-4 font-medium" key={x}>✅ {x}</div>)}</div>
      </div></section>

      <section className="section section-soft"><div className="container"><SectionTitle title="Provider Navigation" />
      <FeatureGrid cols={3} items={[
        {title:'List & Promote',desc:'Create profile and set service visibility.',icon:'📌'},
        {title:'For Guests/Tourists',desc:'Offer packages for travelers and visitors.',icon:'🧳'},
        {title:'What You Can Offer',desc:'Define categories and subcategories.',icon:'🧩'},
        {title:'Pricing & Plans',desc:'Clear options and fee structure.',icon:'🧾'},
        {title:'Support & FAQ',desc:'Guides, policies, and assistance.',icon:'💬'},
        {title:'Mobile-first listing',desc:'Optimized for quick on-the-go updates.',icon:'📱'},
      ]} /></div></section>

      <section className="section"><div className="container"><SectionTitle title="Guest-facing categories" />
      <div className="grid md:grid-cols-2 gap-4">
        {categories.map((c)=><div key={c} className="card p-4"><h3 className="font-bold">{c}</h3><div className="mt-3 flex flex-wrap gap-2"><span className="pill">Top picks</span><span className="pill">Premium</span><span className="pill">Family</span></div></div>)}
      </div>
      </div></section>

      <section className="section section-soft"><div className="container"><SectionTitle title="FAQ for Service Providers" />
      <FAQ items={[{q:'How quickly can my listing go live?',a:'After basic verification, listings can be published quickly through the guided flow.'},{q:'Can I target both guests and owners?',a:'Yes, you can choose service audiences and categories per offer.'},{q:'Do you provide promotional templates?',a:'Yes, providers get promotion assets and reusable templates.'}]} /></div></section>

      <section className="section"><div className="container card p-8 text-center bg-gradient-to-r from-cyan-50 to-white"><h3 className="text-3xl font-extrabold">Ready to join as a provider?</h3><p className="text-slate-500 mt-2">Create your listing or request evaluation and we’ll guide you.</p><button className="btn-primary mt-5">Start now</button></div></section>
    </PageShell>
  );
}
