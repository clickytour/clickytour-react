import Link from 'next/link';
import { GuestServicesDiagram } from '@/components/diagrams';
import { Hero, PageShell, SectionTitle } from '@/components/site';

const destinations = [
  { name: 'Santorini', focus: 'Sunset sailing, wine routes, caldera villages' },
  { name: 'Athens', focus: 'Culture tours, gastronomy, city experiences' },
  { name: 'Crete', focus: 'Beaches, nature escapes, authentic local food' },
  { name: 'Paros', focus: 'Boat days, boutique dining, island hopping' },
  { name: 'Mykonos', focus: 'Premium stays, nightlife, curated experiences' },
  { name: 'Halkidiki', focus: 'Family beaches, relaxation, hidden coves' },
];

export default function GuestsDestinationsPage() {
  return (
    <PageShell>
      <Hero
        title="Destinations"
        subtitle="Browse top Greek regions and discover activities, services, and local highlights based on where you stay."
        ctaA="Browse by destination"
        ctaB="Ask for recommendations"
      />

      <section className="section"><div className="container max-w-lg mx-auto"><GuestServicesDiagram /></div></section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Where to Explore"
            title="Top destination inspiration"
            subtitle="The source content focused on helping guests filter experiences by region and category for faster planning."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {destinations.map((item) => (
              <article key={item.name} className="card p-5">
                <h3 className="font-bold text-[#0F2B46] text-lg">{item.name}</h3>
                <p className="text-sm text-slate-600 mt-2">{item.focus}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container grid md:grid-cols-2 gap-6">
          <article className="card p-6">
            <h3 className="text-xl font-bold text-[#0F2B46]">Filter your destination search</h3>
            <ul className="mt-4 list-disc list-inside space-y-2 text-slate-600">
              <li>Activities & tours</li>
              <li>Dining & nightlife</li>
              <li>Wellness & spa</li>
              <li>Transport & mobility</li>
              <li>Attractions & culture</li>
            </ul>
          </article>
          <article className="card p-6">
            <h3 className="text-xl font-bold text-[#0F2B46]">Didn&apos;t find the right option?</h3>
            <p className="mt-3 text-slate-600">Request vacation assistance and we&apos;ll suggest experiences based on your travel dates, budget, and group profile.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/guests-vacation-assistance/" className="btn-primary">Request assistance</Link>
              <Link href="/guests-what-to-do/" className="btn-secondary">Explore activities</Link>
            </div>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
