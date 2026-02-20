import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { FindStaffOwnersDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Need a Cleaner, Check-in Staff, or Seasonal Help?" subtitle="Find reliable staff for your vacation property." ctaA="Quick Request" ctaB="Advanced Request" ctaHrefA="/find-staff-contractors-owners-quick-request" ctaHrefB="/find-staff-contractors-advancedroleowners" diagram={<FindStaffOwnersDiagram />} />
      <section className="section"><div className="container">
        <SectionTitle title="Why Use ClickyTour" />
        <div className="grid md:grid-cols-3 gap-4">
          <div className="card p-5"><p className="text-2xl">⚡</p><h3 className="font-bold mt-2">Hire Faster</h3><p className="text-slate-600 text-sm mt-1">Post once, get matched with local professionals.</p></div>
          <div className="card p-5"><p className="text-2xl">📍</p><h3 className="font-bold mt-2">Destination Accuracy</h3><p className="text-slate-600 text-sm mt-1">Candidates matched by location and availability.</p></div>
          <div className="card p-5"><p className="text-2xl">📋</p><h3 className="font-bold mt-2">One Place to Review</h3><p className="text-slate-600 text-sm mt-1">All applications in one dashboard.</p></div>
        </div>
        <div className="mt-8 flex gap-3">
          <Link href="/find-staff-contractors-owners-quick-request" className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700">Quick Request</Link>
          <Link href="/find-staff-contractors-advancedroleowners" className="px-6 py-3 border border-teal-600 text-teal-700 font-semibold rounded-xl hover:bg-teal-50">Advanced Request</Link>
        </div>
      </div></section>
    </PageShell>
  );
}