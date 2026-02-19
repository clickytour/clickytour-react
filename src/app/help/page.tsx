import { Hero, PageShell, SectionTitle } from '@/components/site';

const categories = [
  { title: 'Getting Started', desc: 'Role selection, onboarding basics, and first setup steps.', icon: '🚀' },
  { title: 'Account & Security', desc: 'Sign in, profile settings, access, and account safety.', icon: '🔐' },
  { title: 'Listings & Services', desc: 'Creating listings, updating details, and improving visibility.', icon: '📋' },
  { title: 'Bookings & Operations', desc: 'Booking flows, guest communication, and operation best practices.', icon: '🧭' },
  { title: 'Payments & Commissions', desc: 'Fees, payouts, affiliate commissions, and transaction guidance.', icon: '💳' },
  { title: 'Support & Troubleshooting', desc: 'Common issues, request handling, and technical support paths.', icon: '🛠️' },
];

const popularArticles = [
  'How to choose the right role on ClickyTour',
  'How owners can publish and optimize a property listing',
  'How service providers appear in search results',
  'How agents track referral performance',
  'How PM companies manage multi-property workflows',
  'What to include in a support request for faster resolution',
];

export default function HelpPage() {
  return (
    <PageShell>
      <Hero
        title="Help Center"
        subtitle="Search guides, explore categories, and find answers for every ClickyTour role."
        ctaA="Search Help"
        ctaB="Create Support Ticket"
      />

      <section className="section section-soft">
        <div className="container max-w-4xl">
          <div className="card p-5 md:p-6">
            <label className="text-sm font-semibold text-slate-700">Search help articles</label>
            <input
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3"
              placeholder="Search: onboarding, listings, payments, account..."
            />
            <p className="text-xs text-slate-500 mt-2">Search is static in this demo page.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle title="Help Categories" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <article key={category.title} className="card p-5">
                <p className="text-2xl">{category.icon}</p>
                <h3 className="font-bold mt-3">{category.title}</h3>
                <p className="text-sm text-slate-600 mt-2">{category.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container max-w-4xl">
          <SectionTitle title="Popular Articles" />
          <div className="card p-6">
            <ul className="space-y-3">
              {popularArticles.map((article) => (
                <li key={article} className="border-b border-slate-100 pb-3 last:border-b-0 last:pb-0 text-slate-700">
                  {article}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
