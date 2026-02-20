import { CheckList, FeatureGrid, Hero, PageShell, SectionTitle } from '@/components/site';
import { AffiliateDiagram } from '@/components/diagrams';

const howItWorks = [
  {
    title: 'Join the Programme',
    desc: 'Complete a simple signup and receive your affiliate profile setup details.',
    icon: '📝',
  },
  {
    title: 'Share Your Referral Links',
    desc: 'Promote ClickyTour listings, services, and offers to your audience or clients.',
    icon: '🔗',
  },
  {
    title: 'Earn on Confirmed Results',
    desc: 'Get paid for eligible bookings or conversions generated from your referrals.',
    icon: '💸',
  },
];

const commission = [
  'Base commission for confirmed bookings and qualified sales',
  'Higher tiers for high-performing affiliates with consistent volume',
  'Recurring opportunities through long-term partner campaigns',
  'Transparent tracking dashboard with clicks, leads, and conversions',
];

const whoCanJoin = [
  { title: 'Travel creators & bloggers', desc: 'Share destination and accommodation content with monetization built in.', icon: '🎥' },
  { title: 'Real estate and rental agents', desc: 'Monetize your network with referral-based earnings.', icon: '🏘️' },
  { title: 'Local businesses and tourism partners', desc: 'Promote relevant services and offers to your clients.', icon: '🧭' },
  { title: 'Digital marketers & communities', desc: 'Run campaigns and grow affiliate revenue with performance data.', icon: '📈' },
];

export default function WorkWithUsAffiliatePage() {
  return (
    <PageShell>
      <Hero
diagram={<AffiliateDiagram />}
                title="Affiliate Programme: Earn by Referring"
        subtitle="Turn your audience, network, or client base into recurring income by promoting ClickyTour properties and services."
        ctaA="Join as Affiliate"
        ctaB="View Commission Plans"
      />

      

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="How It Works" title="Start in 3 Simple Steps" />
          <FeatureGrid items={howItWorks} cols={3} />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionTitle
            eyebrow="Commission Structure"
            title="Simple, Transparent, Performance-Based"
          />
          <CheckList items={commission} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Who Can Join" title="Built for a Wide Range of Partners" />
          <FeatureGrid items={whoCanJoin} cols={2} />

          <div className="card p-7 md:p-8 mt-8 bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white">
            <p className="text-cyan-200 font-semibold text-sm uppercase tracking-[0.08em]">Ready to start?</p>
            <h3 className="text-3xl font-extrabold mt-2">Become a ClickyTour Affiliate</h3>
            <p className="text-cyan-100 mt-3 max-w-2xl">
              Join today, get your referral tools, and start earning from travel and property opportunities.
            </p>
            <a href="/agents-affiliate" className="btn-primary mt-5">Apply for Affiliate Access</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
