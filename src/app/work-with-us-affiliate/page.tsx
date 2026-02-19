import { FAQ, FeatureGrid, Hero, PageShell, SectionTitle } from '@/components/site';

const howItWorks = [
  {
    title: 'Sign Up',
    desc: 'Join and receive your unique affiliate referral links.',
    icon: '📝',
  },
  {
    title: 'Promote Listings',
    desc: 'Share ClickyTour rentals, real-estate offers, and services in your channels.',
    icon: '📣',
  },
  {
    title: 'Earn Commissions',
    desc: 'Get rewarded for confirmed bookings or sales generated from your referrals.',
    icon: '💸',
  },
];

const affiliateBenefits = [
  {
    title: 'Global Inventory',
    desc: 'Access rentals, properties, and travel services in one ecosystem.',
    icon: '🌍',
  },
  {
    title: 'White-Label Tools',
    desc: 'Use no-logo and partner-friendly presentation tools.',
    icon: '🎨',
  },
  {
    title: 'Performance Dashboard',
    desc: 'Track clicks, conversions, and estimated earnings clearly.',
    icon: '📊',
  },
  {
    title: 'Secure Payouts',
    desc: 'Reliable payout flows designed for affiliate operations.',
    icon: '🔐',
  },
];

const faq = [
  {
    q: 'Do I need to be a travel agent?',
    a: 'No. Content creators, marketers, and partners can all join as affiliates.',
  },
  {
    q: 'How are commissions calculated?',
    a: 'Commissions are based on confirmed referral outcomes. Exact terms can be defined per partner plan.',
  },
  {
    q: 'Can I start with a small audience?',
    a: 'Yes. Many affiliates begin with niche audiences and scale over time.',
  },
];

export default function WorkWithUsAffiliatePage() {
  return (
    <PageShell>
      <Hero
        title="Earn with ClickyTour as an Affiliate"
        subtitle="Promote rentals, real estate, and services. Earn commissions for every booking or sale through your referral links."
        ctaA="Join the Program"
        ctaB="Choose Your Plan"
      />

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="How It Works" title="Why Agents Choose ClickyTour" />
          <FeatureGrid items={howItWorks} cols={3} />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionTitle eyebrow="Affiliate Benefits" title="Why Affiliates Love ClickyTour" />
          <FeatureGrid items={affiliateBenefits} cols={4} />
        </div>
      </section>

      <section className="section">
        <div className="container max-w-4xl">
          <SectionTitle title="Affiliate FAQ" subtitle="Everything you need before joining." />
          <FAQ items={faq} />
        </div>
      </section>
    </PageShell>
  );
}
