'use client';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { FindStaffHubDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Find Staff / Contractors" subtitle="Universal entry point for all staffing needs." ctaA="Get Started" ctaB="Learn More" diagram={<FindStaffHubDiagram />} />
      <section className="section"><div className="container">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6"><h3 className="text-xl font-bold mb-4">🏢 I&apos;m Hiring</h3><div className="space-y-2">
            <a href="/find-staff-contractors-quick-request" className="block p-3 rounded-xl bg-slate-50 hover:bg-teal-50 font-semibold">Quick Request</a>
            <a href="/find-staff-contractors-advanced" className="block p-3 rounded-xl bg-slate-50 hover:bg-teal-50 font-semibold">Advanced Request</a>
            <a href="/find-staff-contractors-directory" className="block p-3 rounded-xl bg-slate-50 hover:bg-teal-50 font-semibold">Browse Candidates</a>
          </div></div>
          <div className="card p-6"><h3 className="text-xl font-bold mb-4">👤 I&apos;m Looking for Work</h3><div className="space-y-2">
            <a href="/find-staff-contractors-job-seekers-quick-application" className="block p-3 rounded-xl bg-slate-50 hover:bg-teal-50 font-semibold">Quick Application</a>
            <a href="/find-staff-contractors-job-seekers-application" className="block p-3 rounded-xl bg-slate-50 hover:bg-teal-50 font-semibold">Full Application</a>
            <a href="/find-staff-contractors-job-seekers-dashboard" className="block p-3 rounded-xl bg-slate-50 hover:bg-teal-50 font-semibold">My Dashboard</a>
          </div></div>
        </div>
      </div></section>
    </PageShell>
  );
}