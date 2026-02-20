import Link from 'next/link';
import { GuestServicesDiagram } from '@/components/diagrams';
import { FeatureGrid, Hero, PageShell, SectionTitle } from '@/components/site';

const categories = [
  { title: 'Activities & Tours', desc: 'Boat trips, guided tours, hiking routes, and local adventures.', icon: '🎒' },
  { title: 'Dining & Nightlife', desc: 'Tavernas, rooftop bars, beach clubs, and hidden local gems.', icon: '🍽️' },
  { title: 'Wellness & Spa', desc: 'Relaxation, retreat sessions, and recovery experiences.', icon: '💆' },
  { title: 'Transport & Rentals', desc: 'Taxis, transfers, and vehicle options for every itinerary.', icon: '🚗' },
  { title: 'Attractions & Culture', desc: 'Museums, landmarks, and culture-rich experiences.', icon: '🏛️' },
  { title: 'Seasonal Events', desc: 'Festivals, local fairs, and period-specific happenings.', icon: '🎉' },
];

const featured = [
  { title: 'Wine Tasting Tour – Santorini', desc: 'Three vineyards, local stories, and curated tasting sessions.', icon: '🍷' },
  { title: 'Sunset Cruise – Paros', desc: 'Catamaran cruise with drinks, views, and relaxed evening timing.', icon: '⛵' },
  { title: 'Spa Day – Athens', desc: 'Wellness package with full access and optional treatment add-ons.', icon: '🧖' },
];

export default function GuestsWhatToDoPage() {
  return (
    <PageShell>
      <Hero
        title="What to Do & Where to Go"
        subtitle="Explore handpicked experiences for your stay in Greece, from tours and dining to wellness and family activities."
        ctaA="Explore categories"
        ctaB="Request suggestions"
      />

      <section className="section"><div className="container max-w-lg mx-auto"><GuestServicesDiagram /></div></section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Explore by Category"
            title="Find experiences that fit your travel style"
            subtitle="The original content highlighted practical activity buckets to help guests find the right options quickly."
          />
          <FeatureGrid items={categories} cols={3} />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionTitle eyebrow="Featured Experiences" title="Popular choices from guests" />
          <FeatureGrid items={featured} cols={3} />
        </div>
      </section>

      <section className="section">
        <div className="container grid md:grid-cols-2 gap-6">
          <article className="card p-6">
            <h3 className="text-xl font-bold text-[#0F2B46]">Popular destinations</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Crete', 'Santorini', 'Halkidiki', 'Mykonos', 'Athens', 'Paros'].map((d) => (
                <span key={d} className="pill">{d}</span>
              ))}
            </div>
            <p className="mt-4 text-slate-600">Search by destination to view relevant services, activity listings, and local experiences.</p>
          </article>
          <article className="card p-6">
            <h3 className="text-xl font-bold text-[#0F2B46]">Need help deciding?</h3>
            <p className="mt-3 text-slate-600">Share your stay details, trip dates, and interests. Our team can send curated suggestions fast.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/guests-personalized-planning/" className="btn-primary">Request activity help</Link>
              <Link href="/guests-destinations/" className="btn-secondary">Browse destinations</Link>
            </div>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
