import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Build Your Local Team Per Destination" subtitle="Hire staff for your property management operations." ctaA="Quick Request" ctaB="Advanced Request" />
      <section className="section"><div className="container">
        <SectionTitle title="Why Use ClickyTour" />
        <div className="grid md:grid-cols-3 gap-4">
          <div className="card p-5"><p className="text-2xl">🌍</p><h3 className="font-bold mt-2">Operational Coverage</h3><p className="text-slate-600 text-sm mt-1">Hire per destination — cleaners, check-in, maintenance.</p></div>
          <div className="card p-5"><p className="text-2xl">📋</p><h3 className="font-bold mt-2">Structured Workflow</h3><p className="text-slate-600 text-sm mt-1">Post requests, review applications, track progress.</p></div>
          <div className="card p-5"><p className="text-2xl">⚡</p><h3 className="font-bold mt-2">Less Admin Work</h3><p className="text-slate-600 text-sm mt-1">We handle matching and filtering — you decide.</p></div>
        </div>
        <div className="mt-8 flex gap-3">
          <Link href="/find-staff-contractors-management-quick-request" className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700">Quick Request</Link>
          <Link href="/find-staff-contractors-advancedrolemanagement" className="px-6 py-3 border border-teal-600 text-teal-700 font-semibold rounded-xl hover:bg-teal-50">Advanced Request</Link>
        </div>
      </div></section>
    </PageShell>
  );
}