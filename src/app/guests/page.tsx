import { FeatureGrid, Hero, PageShell, SectionTitle } from '@/components/site';

export default function GuestsPage() {
  return (
    <PageShell>
      <Hero title="Find your perfect stay in Greece." subtitle="Search villas and apartments with clear pricing and quick filters." ctaA="Book now" ctaB="Request assistance" />

      <section className="section">
        <div className="container card p-5">
          <div className="flex gap-2 flex-wrap mb-4">{['Rentals', 'Activities', 'Real Estate'].map((x) => <span key={x} className="pill">{x}</span>)}</div>
          <div className="grid md:grid-cols-4 gap-3">
            <input className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Destination" />
            <input className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Check-in / Date" />
            <input className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Check-out / Guests" />
            <button className="btn-primary">Search</button>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">{['Beachfront', 'Private Pool', 'Family Friendly', 'Luxury', 'Pet Friendly', 'Last Minute'].map((x) => <span key={x} className="pill">{x}</span>)}</div>
        </div>
      </section>

      <section className="section section-soft"><div className="container"><SectionTitle title="Vacation Assistance" subtitle="Tell us dates, destination and preferences — we’ll send proposals." /><button className="btn-primary">Request a personalized plan</button></div></section>

      <section className="section"><div className="container"><SectionTitle title="Top rental destinations" />
        <FeatureGrid items={['Crete','Santorini','Athens','Mykonos','Paros','Halkidiki'].map((d)=>({title:d,desc:'Popular stays, activities and local services.',icon:'📍'}))} />
      </div></section>

      <section className="section section-soft"><div className="container"><SectionTitle title="Top stays right now" />
        <FeatureGrid cols={2} items={[
          {title:'Sea View Villa • Crete',desc:'Private pool, 8 guests, instant booking.',icon:'🏖️'},
          {title:'Sunset Suite • Santorini',desc:'Caldera view, romantic setup.',icon:'🌅'},
          {title:'Urban Flat • Athens',desc:'City center, walkable, modern.',icon:'🏙️'},
          {title:'Cycladic Home • Paros',desc:'Family-friendly, near beach.',icon:'🏡'},
        ]} />
      </div></section>

      <section className="section"><div className="container"><SectionTitle title="Deals & offers" /><FeatureGrid cols={3} items={[{title:'Last Minute Deals',desc:'Book quickly with discounted rates.',icon:'🔥'},{title:'Hot Offers',desc:'Weekly curated offers across islands.',icon:'🎁'},{title:'Group Packages',desc:'Bundles for friends and family trips.',icon:'👨‍👩‍👧‍👦'}]} /></div></section>

      <section className="section section-soft"><div className="container"><SectionTitle title="Activities" /><FeatureGrid items={[{title:'Boat Trips',desc:'Daily cruises and private charters.',icon:'⛵'},{title:'Food & Wine',desc:'Tastings and local gastronomy routes.',icon:'🍷'},{title:'Wellness',desc:'Spa, yoga, and relaxation experiences.',icon:'🧘'},{title:'Transfers',desc:'Airport and island transportation.',icon:'🚐'},{title:'Adventure',desc:'Hiking, diving and outdoor activities.',icon:'🥾'},{title:'Cultural Tours',desc:'Guided history and village tours.',icon:'🏛️'}]} /></div></section>

      <section className="section"><div className="container"><SectionTitle title="How booking works" />
      <FeatureGrid cols={4} items={[{title:'Search',desc:'Choose destination and dates.',icon:'1️⃣'},{title:'Compare',desc:'Filter by features and price.',icon:'2️⃣'},{title:'Book',desc:'Secure reservation in a few clicks.',icon:'3️⃣'},{title:'Support',desc:'Get help before and during your stay.',icon:'4️⃣'}]} />
      </div></section>
    </PageShell>
  );
}
