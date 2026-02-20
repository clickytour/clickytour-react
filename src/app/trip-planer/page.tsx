import Link from 'next/link';
import { TripPlannerDiagram } from '@/components/diagrams';
import { Hero, PageShell, SectionTitle } from '@/components/site';

const topDestinations = [
  { title: 'Crete', desc: 'Villas, beaches, and nature-driven stays.' },
  { title: 'Santorini', desc: 'Romantic scenery, sunsets, and premium experiences.' },
  { title: 'Halkidiki', desc: 'Quiet coastlines and family-friendly options.' },
  { title: 'Athens', desc: 'Culture, city breaks, and food exploration.' },
];

export default function TripPlanerPage() {
  return (
    <PageShell>
      <Hero
diagram={<TripPlannerDiagram />}
                title="Trip Planner"
        subtitle="Plan your dream trip to Greece by combining destinations, personalized support, and current travel deals."
        ctaA="Start planning"
        ctaB="View destinations"
      />

      

      <section className="section">
        <div className="container">
          <SectionTitle title="Top Greek destinations" subtitle="Start from a region and build your itinerary around your preferred pace and travel style." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topDestinations.map((item) => (
              <article key={item.title} className="card p-5">
                <h3 className="font-bold text-[#0F2B46]">{item.title}</h3>
                <p className="text-sm text-slate-600 mt-2">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container grid md:grid-cols-2 gap-6">
          <article className="card p-6">
            <h3 className="text-xl font-bold text-[#0F2B46]">Need a tailored proposal?</h3>
            <p className="mt-3 text-slate-600">Share your budget, dates, and preferences. Our team can prepare a no-commitment plan for your stay.</p>
            <Link href="/guests-personalized-planning/" className="btn-primary mt-5 inline-flex">Request tailored proposal</Link>
          </article>

          <article className="card p-6">
            <h3 className="text-xl font-bold text-[#0F2B46]">Current offers</h3>
            <ul className="mt-4 space-y-2 text-slate-600 list-disc list-inside">
              <li>Hot Offers</li>
              <li>Last-Minute Deals</li>
              <li>Group Booking Benefits</li>
              <li>Premium Plan Add-ons</li>
            </ul>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
