import Link from 'next/link';
import { FeatureGrid, Hero, PageShell, SectionTitle, SidebarLayout } from '@/components/site';
import { roleMenus } from '@/components/site-menu';

const rentalDestinations = [
  'Mykonos',
  'Santorini',
  'Crete',
  'Corfu',
  'Paros',
  'Athens Riviera',
];

const topStays = [
  { title: 'Sea-view villas', desc: 'Private pools, sunset decks, and concierge-ready options.' },
  { title: 'Family apartments', desc: 'Central locations near beaches, shops, and transport.' },
  { title: 'Group houses', desc: 'Large homes for friends, reunions, and celebration trips.' },
];

const deals = [
  { title: 'Early booking offers', desc: 'Secure lower rates with advance reservation windows.' },
  { title: 'Last-minute escapes', desc: 'Flexible inventory with short-notice check-in availability.' },
  { title: 'Long-stay discounts', desc: 'Weekly and monthly savings on selected properties.' },
];

export default function GuestsPage() {
  const menu = roleMenus.guests;

  return (
    <PageShell>
      <Hero
        title="Find your perfect stay in Greece."
        subtitle="Search villas and apartments with clear pricing and quick filters."
        ctaA="Start search"
        ctaB="Need planning help?" ctaHrefA="/guests-vacation-request" ctaHrefB="/guests-help"
      />

      <SidebarLayout title="For Guests" menu={menu}>
        <section className="py-16">
          <SectionTitle
            eyebrow="Smart Search"
            title="Search by trip type"
            subtitle="Use either path based on your current goal."
          />

          <div className="grid lg:grid-cols-2 gap-5">
            <article className="card p-6">
              <h3 className="font-bold text-[#0F2B46] text-xl">Vacation Rentals</h3>
              <div className="mt-4 grid gap-3">
                {['Destination', 'Check-in', 'Check-out', 'Guests'].map((field) => (
                  <div key={field} className="rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-500">
                    {field}
                  </div>
                ))}
              </div>
              <button className="btn-primary mt-4">Search rentals</button>
            </article>

            <article className="card p-6">
              <h3 className="font-bold text-[#0F2B46] text-xl">Real Estate</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {['Destination', 'Date', 'Category', 'Location', 'Buy / Rent', 'Budget'].map((field) => (
                  <div key={field} className="rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-500">
                    {field}
                  </div>
                ))}
              </div>
              <button className="btn-secondary mt-4">Explore real estate</button>
            </article>
          </div>

          <div className="mt-5 card p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <p className="font-bold text-[#0F2B46]">Need help choosing?</p>
              <p className="text-sm text-slate-600">Tell us your travel style and we will guide you to the best fit.</p>
            </div>
            <Link href="/personalized-travel-planning/" className="btn-primary">
              Get personalized planning
            </Link>
          </div>
        </section>

        <section className="py-16">
          <SectionTitle eyebrow="Vacation Assistance" title="Want us to plan it for you?" subtitle="Tell us dates, destination and preferences — we'll send proposals." />
          <div className="card p-6">
            <p className="text-slate-600">Our team can prepare curated options, compare neighborhoods, and suggest stay combinations.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Family trips', 'Romantic escapes', 'Island hopping', 'Group stays'].map((tag) => (
                <span key={tag} className="pill">{tag}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <SectionTitle title="Top rental destinations" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rentalDestinations.map((destination) => (
              <article key={destination} className="card p-5">
                <h3 className="font-bold text-[#0F2B46]">{destination}</h3>
                <p className="text-sm text-slate-500 mt-1">Popular villas, apartments, and local experiences.</p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-16">
          <SectionTitle title="Top stays right now" />
          <FeatureGrid items={topStays.map((item) => ({ ...item, icon: '🏡' }))} />
        </section>

        <section className="py-16">
          <SectionTitle title="Deals & offers" />
          <FeatureGrid items={deals.map((item) => ({ ...item, icon: '💸' }))} />
        </section>

        <section className="py-16">
          <SectionTitle
            eyebrow="Real Estate"
            title="Thinking long-term in Greece?"
            subtitle="If you're considering a move, second home, or investment, explore available properties with the same guided flow."
          />
          <div className="card p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-slate-600">Switch from short-term stays to buy/rent opportunities across major Greek regions.</p>
            <Link href="/real-estate/" className="btn-secondary">View real estate options</Link>
          </div>
        </section>

        <section className="py-16">
          <SectionTitle title="How it works" />
          <div className="grid md:grid-cols-4 gap-4">
            {[
              'Search by destination and dates',
              'Shortlist your preferred stays',
              'Request support or book directly',
              'Travel with clear confirmations',
            ].map((step, i) => (
              <article key={step} className="card p-5">
                <p className="text-xs font-semibold text-cyan-700">STEP {i + 1}</p>
                <h3 className="font-bold mt-2 text-[#0F2B46]">{step}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="py-16">
          <div className="rounded-xl bg-[#0F2B46] text-white p-8 md:p-10">
            <h2 className="text-3xl font-extrabold">Ready to plan your stay in Greece?</h2>
            <p className="text-cyan-100 mt-2">Search instantly or ask our team to prepare options tailored to your trip.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/search" className="btn-primary">Start searching</Link>
              <Link href="/guests-vacation-request" className="btn-secondary">Send trip brief</Link>
            </div>
          </div>
        </section>
      </SidebarLayout>
    </PageShell>
  );
}
