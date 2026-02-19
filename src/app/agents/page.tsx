import { FeatureGrid, Hero, PageShell, SectionTitle } from '@/components/site';

export default function AgentsPage() {
  return (
    <PageShell>
      <Hero title="Work Smarter. Sell More. Earn More." subtitle="ClickyTour connects you to rentals, tours/activities, and real estate — plus tools to package, present, and close faster." ctaA="Join as agent" ctaB="Book demo" />

      <section className="section"><div className="container"><SectionTitle title="Why Agents Choose ClickyTour" />
      <FeatureGrid cols={3} items={[{title:'Access all listings',desc:'Rentals, real estate and services in one system.',icon:'🧭'},{title:'Instant white-label offers',desc:'Branded or no-logo quotes in one click.',icon:'📄'},{title:'Net pricing',desc:'Book at agent rates and earn your margin.',icon:'💰'}]} /></div></section>

      <section className="section section-soft"><div className="container"><SectionTitle title="How it works" subtitle="Search → Select → Send → Earn" />
      <FeatureGrid cols={4} items={[{title:'Search',desc:'Advanced search across verticals.',icon:'1️⃣'},{title:'Select',desc:'Build multi-product proposals.',icon:'2️⃣'},{title:'Send',desc:'Generate PDF or share link instantly.',icon:'3️⃣'},{title:'Earn',desc:'Complete bookings and track payouts.',icon:'4️⃣'}]} /></div></section>

      <section className="section"><div className="container"><SectionTitle title="Agent Tools" />
      <FeatureGrid cols={3} items={[
        {title:'Advanced Search',desc:'Filter by type, location, dates and budget.',icon:'🔎',tag:'Rentals • Services • Real Estate'},
        {title:'Quotation Builder',desc:'Create white-label quotes in seconds.',icon:'🧾',tag:'PDF • Link • Brand'},
        {title:'Dashboard',desc:'Track clients, offers, bookings and commissions.',icon:'📊',tag:'Clients • Commissions'},
        {title:'White-label Payments',desc:'Secure, trackable payment workflows.',icon:'💳',tag:'Secure • Partner-ready'},
        {title:'Promotion Tools',desc:'Email + social templates and reusable assets.',icon:'📣',tag:'Templates'},
        {title:'Direct Role Access',desc:'Communicate with owners, PMCs and providers.',icon:'🤝',tag:'Unified access'},
      ]} /></div></section>

      <section className="section section-soft"><div className="container"><SectionTitle title="Operations support" subtitle="Find local support staff & contractors for tours, transfers, and vacation bookings." /><button className="btn-primary">Request support</button></div></section>

      <section className="section"><div className="container card p-5"><SectionTitle title="Partner wizard" subtitle="Request partnership, find staff, or submit an advanced request on behalf of customers." /><div className="grid md:grid-cols-3 gap-3"><input className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Agency / Name"/><input className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Email"/><input className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Request type"/></div><button className="btn-primary mt-4">Continue</button></div></section>

      <section className="section section-soft"><div className="container"><SectionTitle title="Agent Plans & Pricing" />
      <FeatureGrid cols={3} items={[{title:'Free Access',desc:'Limited listings, test workflow.',icon:'🆓'},{title:'Pro Plan',desc:'Full toolkit, net pricing, branded quotes.',icon:'⭐'},{title:'Commission Model',desc:'No subscription — pay per booking.',icon:'📈'}]} /></div></section>

      <section className="section"><div className="container"><SectionTitle title="Why Choose Us" />
      <FeatureGrid cols={3} items={[{title:'Cleaner workflow',desc:'Search → select → offer → book in one place.',icon:'⚡'},{title:'Client-ready presentation',desc:'Professional output that closes faster.',icon:'🎯'},{title:'Multi-vertical access',desc:'Travel + services + real estate ecosystem.',icon:'🌐'}]} /></div></section>

      <section className="section section-soft"><div className="container"><SectionTitle eyebrow="Insight" title="Latest articles & news" />
      <FeatureGrid cols={2} items={[{title:'A Coastal Gem Surrounded by Beauty',desc:'January 30, 2026',icon:'📰'},{title:'Platform updates',desc:'New tools, partner rules and improvements.',icon:'🚀'}]} /></div></section>
    </PageShell>
  );
}
