import Link from 'next/link';
import { WorkWithUsDiagram } from '@/components/diagrams';
import { PageShell } from '@/components/site';

const roles = [
  { title: 'Find Your Role – Quiz', desc: 'Not sure where you fit? Take our quick quiz to discover the best way to work with ClickyTour.', href: '/work-with-us-quiz/', icon: '🎯' },
  { title: 'Job Opportunities', desc: 'Explore open positions and join the ClickyTour team. We are always looking for passionate people.', href: '/work-with-us-jobs/', icon: '💼' },
  { title: 'Affiliate Program', desc: 'Earn commissions by referring guests, owners, or service providers to ClickyTour.', href: '/work-with-us-affiliate/', icon: '🤝' },
  { title: 'Compare Partner Roles', desc: 'See side-by-side how each partner role works — from agents and owners to service providers and PMCs.', href: '/work-with-us-quiz/', icon: '📊' },
];

const partnerRoles = [
  { title: 'For Guests', desc: 'Book vacation rentals, tours, activities, and explore real estate.', href: '/guests/', icon: '🏖️' },
  { title: 'For Owners', desc: 'List your vacation or real estate property and reach more guests.', href: '/owners/', icon: '🏠' },
  { title: 'For Service Providers', desc: 'Promote your tours, transfers, wellness, and local services.', href: '/service-providers/', icon: '🔧' },
  { title: 'For Agents', desc: 'Access listings, build white-label offers, and earn with net pricing.', href: '/agents/', icon: '🤝' },
  { title: 'For PM Companies', desc: 'Grow your portfolio, increase bookings, and manage operations.', href: '/pm-companies/', icon: '🏢' },
];

export default function WorkWithUsPage() {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-16 md:py-20">
        <div className="container max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Work With Us</h1>
          <p className="text-cyan-100 mt-4 text-lg max-w-2xl mx-auto">
            Whether you want to join our team, become a partner, or earn through referrals — there's a place for you at ClickyTour.
          </p>
        </div>
      </section>

      <section className="section"><div className="container max-w-lg mx-auto"><WorkWithUsDiagram /></div></section>

      <section className="py-14">
        <div className="container max-w-5xl">
          <h2 className="text-2xl font-bold text-[#0F2B46] mb-8 text-center">Get Started</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {roles.map((r) => (
              <Link key={r.title} href={r.href} className="group rounded-xl border border-slate-200 bg-white p-6 hover:shadow-lg hover:border-cyan-300 transition-all">
                <span className="text-3xl">{r.icon}</span>
                <h3 className="text-lg font-bold text-[#0F2B46] mt-3 group-hover:text-cyan-700 transition-colors">{r.title}</h3>
                <p className="text-slate-600 text-sm mt-2">{r.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-slate-50">
        <div className="container max-w-5xl">
          <h2 className="text-2xl font-bold text-[#0F2B46] mb-3 text-center">Explore Partner Roles</h2>
          <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">ClickyTour connects travelers, property owners, service providers, agents, and management companies in one platform.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {partnerRoles.map((r) => (
              <Link key={r.title} href={r.href} className="group rounded-xl border border-slate-200 bg-white p-5 hover:shadow-md hover:border-cyan-300 transition-all">
                <span className="text-2xl">{r.icon}</span>
                <h3 className="text-base font-bold text-[#0F2B46] mt-2 group-hover:text-cyan-700 transition-colors">{r.title}</h3>
                <p className="text-slate-500 text-sm mt-1">{r.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container max-w-3xl text-center">
          <div className="rounded-xl bg-[#0F2B46] text-white p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-extrabold">Ready to Get Started?</h2>
            <p className="text-cyan-100 mt-3">Take our role quiz to find the best fit, or contact us directly.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/work-with-us-quiz/" className="rounded-lg bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-6 py-3 transition-colors">Take the Quiz</Link>
              <Link href="/contact/" className="rounded-lg border border-white/30 hover:bg-white/10 text-white font-semibold px-6 py-3 transition-colors">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
