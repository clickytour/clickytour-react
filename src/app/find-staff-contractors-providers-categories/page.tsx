import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Find the Right Staff for Your Business" subtitle="Browse all categories and roles available on ClickyTour." ctaA="Post Request" ctaB="Browse Directory" />
      <section className="section"><div className="container">
        <SectionTitle title="All Categories & Roles" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {['Cleaning & Housekeeping','Check-in & Guest Relations','Maintenance & Repairs','Pool & Garden Care','Cooking & Kitchen','Tour Guides & Activities','Drivers & Transfers','Security & Night Watch','Front Desk & Reception','Marketing & Photography','Concierge & Events','Admin & Accounting'].map(c => (
            <div key={c} className="card p-4 flex items-center gap-3"><span className="text-teal-600 text-xl">📋</span><span className="font-semibold">{c}</span></div>
          ))}
        </div>
        <div className="mt-8 text-center"><Link href="/find-staff-contractors-providers-quick-request" className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700">Ready to Hire? Post a Request →</Link></div>
      </div></section>
    </PageShell>
  );
}