import Link from 'next/link';
import { GuestPlanningDiagram } from '@/components/diagrams';
import { FeatureGrid, Hero, PageShell, SectionTitle } from '@/components/site';

const assistanceAreas = [
  { title: 'Personalized Planning', desc: 'Share your dates, group profile, and priorities to receive a tailored proposal.', icon: '📩' },
  { title: 'What to Do & Where to Go', desc: 'Discover activities, dining, transport, and local experiences in one place.', icon: '🗺️' },
  { title: 'Deals & Offers', desc: 'Access hot deals, last-minute opportunities, and group-friendly options.', icon: '🎁' },
];

const serviceCategories = [
  { title: 'Transfers & Transport', desc: 'Airport pickups, private transfers, and local mobility support.', icon: '🚖' },
  { title: 'Vehicle Rentals', desc: 'Cars, scooters, bikes, and ATVs for flexible exploration.', icon: '🚗' },
  { title: 'Spa & Wellness', desc: 'Massages, beauty sessions, and relaxation packages.', icon: '🧖' },
  { title: 'Home Help & Cleaning', desc: 'Cleaning, laundry, and practical in-stay support.', icon: '🧹' },
  { title: 'Medical Assistance', desc: 'Access to clinics, doctors, and urgent support guidance.', icon: '🏥' },
  { title: 'Concierge & Events', desc: 'Celebrations, surprises, local hosts, and special moments.', icon: '🎉' },
];

export default function GuestsVacationAssistancePage() {
  return (
    <PageShell>
      <Hero
        title="Vacation Assistance"
        subtitle="Plan your ideal Greek trip with expert help for accommodation, activities, transport, and on-trip support."
        ctaA="Request assistance"
        ctaB="Browse rentals"
      />

      <section className="section"><div className="container max-w-lg mx-auto"><GuestPlanningDiagram /></div></section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Plan, Discover, Book"
            title="Support for every step of your stay"
            subtitle="Based on the original page content, we organized the full guest assistance flow into practical modules."
          />
          <FeatureGrid items={assistanceAreas} cols={3} />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionTitle
            eyebrow="Available Services"
            title="Choose the help you need"
            subtitle="From transfers to wellness and concierge requests, ClickyTour helps you coordinate trusted local providers."
          />
          <FeatureGrid items={serviceCategories} cols={3} />
        </div>
      </section>

      <section className="section">
        <div className="container grid lg:grid-cols-2 gap-6">
          <article className="card p-6">
            <h3 className="text-xl font-bold text-[#0F2B46]">How requests work</h3>
            <ol className="mt-4 space-y-2 text-slate-600 list-decimal list-inside">
              <li>Submit your destination, date, group details, and preferred service.</li>
              <li>Add optional budget, pickup/dropoff, and time preferences.</li>
              <li>Receive curated options from our team and verified partners.</li>
              <li>Confirm your preferred choice and continue with booking support.</li>
            </ol>
          </article>

          <article className="card p-6">
            <h3 className="text-xl font-bold text-[#0F2B46]">Popular guest requests</h3>
            <ul className="mt-4 space-y-2 text-slate-600 list-disc list-inside">
              <li>Airport transfer + late check-in coordination</li>
              <li>Boat tours, sunset cruises, and private day trips</li>
              <li>Wellness, beauty, and in-villa services</li>
              <li>Family-friendly activity planning</li>
              <li>Special occasion concierge setup</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="rounded-xl bg-[#0F2B46] text-white p-8 md:p-10">
            <h2 className="text-3xl font-extrabold">Need help planning your vacation?</h2>
            <p className="mt-3 text-cyan-100 max-w-3xl">
              Tell us what you need and we&apos;ll prepare options for stays, experiences, and services that match your trip style.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/guests-personalized-planning/" className="btn-primary">Start personalized planning</Link>
              <Link href="/guests-help/" className="btn-secondary">Guest help center</Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
