import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { FindStaffProvidersDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Post Requests and Hire Local Help — Fast" subtitle="Service providers: find the staff you need." ctaA="Quick Request" ctaB="Advanced Request" ctaHrefA="/find-staff-contractors-providers-quick-request" ctaHrefB="/find-staff-contractors-advancedroleproviders" diagram={<FindStaffProvidersDiagram />} />
      <section className="section"><div className="container">
        <SectionTitle title="Why Use ClickyTour" />
        <div className="grid md:grid-cols-3 gap-4">
          <div className="card p-5"><p className="text-2xl">⚡</p><h3 className="font-bold mt-2">Hire on Demand</h3><p className="text-slate-600 text-sm mt-1">Seasonal, part-time, or full-time — your choice.</p></div>
          <div className="card p-5"><p className="text-2xl">📍</p><h3 className="font-bold mt-2">Match by Location</h3><p className="text-slate-600 text-sm mt-1">Find candidates near your operations.</p></div>
          <div className="card p-5"><p className="text-2xl">📊</p><h3 className="font-bold mt-2">Track Everything</h3><p className="text-slate-600 text-sm mt-1">Manage requests and applications in one place.</p></div>
        </div>
        <div className="mt-8 flex gap-3">
          <Link href="/find-staff-contractors-providers-quick-request" className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700">Quick Request</Link>
          <Link href="/find-staff-contractors-advancedroleproviders" className="px-6 py-3 border border-teal-600 text-teal-700 font-semibold rounded-xl hover:bg-teal-50">Advanced Request</Link>
        </div>
      </div></section>
    </PageShell>
  );
}