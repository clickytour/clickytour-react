'use client';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { StaffDirectoryDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Job Seeker Directory" subtitle="Search and filter candidates for staffing." ctaA="Get Started" ctaB="Learn More" diagram={<StaffDirectoryDiagram />} />
      <section className="section"><div className="container">
        <div className="card p-6 mb-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div><label className="block text-sm font-semibold text-slate-700 mb-1">Role Category</label><select className="w-full rounded-xl border border-slate-200 px-4 py-3"><option>All</option><option>Cleaning</option><option>Check-in</option><option>Maintenance</option><option>Cooking</option><option>Tours</option><option>Transport</option></select></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-1">Location</label><input className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="Destination or region" /></div>
            <div className="flex items-end"><button className="w-full px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700">Search</button></div>
          </div>
        </div>
        <div className="text-center py-12 text-slate-500"><p>Directory results will appear here.</p></div>
      </div></section>
    </PageShell>
  );
}