'use client';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { StaffDirectoryDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Job Seeker Directory" subtitle="Browse candidates by role, location, and availability." ctaA="Get Started" ctaB="Learn More" diagram={<StaffDirectoryDiagram />} />
      <section className="section"><div className="container">
        <div className="card p-6 mb-6">
          <div className="grid md:grid-cols-4 gap-4">
            <div><label className="block text-sm font-semibold text-slate-700 mb-1">Role</label><select className="w-full rounded-xl border border-slate-200 px-4 py-3"><option>All Roles</option><option>Cleaner</option><option>Check-in</option><option>Maintenance</option><option>Cook</option><option>Guide</option><option>Driver</option></select></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-1">Location</label><input className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="Region / City" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-1">Availability</label><select className="w-full rounded-xl border border-slate-200 px-4 py-3"><option>Any</option><option>Immediate</option><option>Seasonal</option><option>Part-time</option></select></div>
            <div className="flex items-end"><button className="w-full px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700">Search</button></div>
          </div>
        </div>
        <div className="text-center py-12 text-slate-500"><p>No candidates to display yet.</p><p className="text-sm mt-1">Directory data will be populated from Core.</p></div>
      </div></section>
    </PageShell>
  );
}