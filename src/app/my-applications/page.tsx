'use client';
import { PageShell, Hero, SectionTitle } from '@/components/site';

export default function Page() {
  return (
    <PageShell>
      <Hero title="My Applications" subtitle="Track all your submitted applications." ctaA="Get Started" ctaB="Learn More" ctaHrefA="/find-staff-contractors-job-seekers-quick-application" ctaHrefB="/find-staff-contractors-job-seekers" />
      <section className="section"><div className="container">
        <div className="card p-6 mb-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div><label className="block text-sm font-semibold text-slate-700 mb-1">Status</label><select className="w-full rounded-xl border border-slate-200 px-4 py-3"><option>All</option><option>Pending</option><option>Reviewed</option><option>Accepted</option><option>Rejected</option></select></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-1">Destination</label><input className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="Filter" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-1">Search</label><input className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="Title, notes..." /></div>
          </div>
        </div>
        <div className="text-center py-12 text-slate-500"><p>No applications yet. <a href="/find-staff-contractors-job-seekers-application" className="text-teal-600 font-semibold hover:underline">Submit your first →</a></p></div>
      </div></section>
    </PageShell>
  );
}