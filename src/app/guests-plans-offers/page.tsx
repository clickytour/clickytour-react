import Link from 'next/link';
import { GuestPremiumDiagram } from '@/components/diagrams';
import { Hero, PageShell, SectionTitle } from '@/components/site';

const offerTypes = [
  { title: 'Hot Deals', desc: 'Time-limited promotions from selected partners.', icon: '🔥' },
  { title: 'Last Minute', desc: 'Short-notice opportunities for flexible travelers.', icon: '⏱️' },
  { title: 'Group Discounts', desc: 'Special pricing for families, friends, and events.', icon: '👥' },
];

export default function GuestsPlansOffersPage() {
  return (
    <PageShell>
      <Hero
        title="Plans & Offers"
        subtitle="Discover exclusive guest offers including hot deals, last-minute options, and group booking benefits."
        ctaA="Browse offers"
        ctaB="Request custom plan"
      />

      <section className="section"><div className="container max-w-lg mx-auto"><GuestPremiumDiagram /></div></section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Offer Types"
            title="Choose the best deal format"
            subtitle="Based on the original content, offers are grouped by urgency, flexibility, and travel-party size."
          />

          <div className="grid md:grid-cols-3 gap-4">
            {offerTypes.map((offer) => (
              <article key={offer.title} className="card p-5">
                <p className="text-2xl">{offer.icon}</p>
                <h3 className="font-bold mt-2 text-[#0F2B46]">{offer.title}</h3>
                <p className="text-sm text-slate-600 mt-2">{offer.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container grid lg:grid-cols-2 gap-6">
          <article className="card p-6">
            <h3 className="text-xl font-bold text-[#0F2B46]">Offers FAQ highlights</h3>
            <ul className="mt-4 space-y-2 text-slate-600 list-disc list-inside">
              <li>Hot offers are limited-time promotions from selected partners.</li>
              <li>Some listings allow combining deal types with group discounts.</li>
              <li>Final pricing is always confirmed before checkout.</li>
            </ul>
          </article>

          <article className="card p-6">
            <h3 className="text-xl font-bold text-[#0F2B46]">Upgrade available</h3>
            <p className="mt-3 text-slate-600">The source page promotes a Premium Travel Plan with concierge support, insider offers, and priority handling.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/guests-premium-travel-plan/" className="btn-primary">Premium travel plan</Link>
              <Link href="/guests-personalized-planning/" className="btn-secondary">Build custom plan</Link>
            </div>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
