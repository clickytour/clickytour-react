import Link from 'next/link';
import { FeatureGrid, Hero, PageShell, SectionTitle } from '@/components/site';

const premiumBenefits = [
  { title: 'Full Itinerary Planning', desc: 'Accommodation, activities, logistics, and day-by-day guidance.', icon: '🧭' },
  { title: 'Priority Access', desc: 'High-demand services like yachts, private chefs, and premium villas.', icon: '🛥️' },
  { title: 'Live Concierge Support', desc: 'Real-time support before and during your trip.', icon: '📲' },
  { title: 'Exclusive Offers', desc: 'Private bundles and premium-only opportunities.', icon: '🎁' },
  { title: 'Booking Coordination', desc: 'Assistance with confirmations, timings, and check-in details.', icon: '✅' },
];

export default function GuestsPremiumTravelPlanPage() {
  return (
    <PageShell>
      <Hero
        title="Premium Travel Plan"
        subtitle="Unlock VIP-level planning and concierge support for a stress-free, highly personalized travel experience in Greece."
        ctaA="Request premium planning"
        ctaB="Compare planning options"
      />

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="What You Get" title="Premium support from start to finish" />
          <FeatureGrid items={premiumBenefits} cols={3} />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container grid md:grid-cols-2 gap-6">
          <article className="card p-6">
            <h3 className="text-xl font-bold text-[#0F2B46]">How it works</h3>
            <ol className="mt-4 list-decimal list-inside space-y-2 text-slate-600">
              <li>Submit your dream-trip details via our planning form.</li>
              <li>Our team aligns preferences, timing, and service level.</li>
              <li>Receive a complete premium plan with booking paths.</li>
              <li>Travel with concierge availability when needed.</li>
            </ol>
          </article>
          <article className="card p-6">
            <h3 className="text-xl font-bold text-[#0F2B46]">Ideal for</h3>
            <ul className="mt-4 list-disc list-inside space-y-2 text-slate-600">
              <li>Families needing end-to-end coordination</li>
              <li>Groups with complex logistics</li>
              <li>Honeymooners and milestone travelers</li>
              <li>Busy professionals outsourcing planning</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="rounded-xl bg-[#0F2B46] text-white p-8 md:p-10">
            <h2 className="text-3xl font-extrabold">Start your premium journey</h2>
            <p className="mt-3 text-cyan-100">Share your preferences and we&apos;ll design a premium plan around your style, pace, and priorities.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/guests-personalized-planning/" className="btn-primary">Request proposal</Link>
              <Link href="/guests-plans-offers/" className="btn-secondary">See current offers</Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
