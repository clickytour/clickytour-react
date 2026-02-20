'use client';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { JobSeekerDashboardDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <PageShell>
      <Hero diagram={<JobSeekerDashboardDiagram />} title="Job Seeker Dashboard" subtitle="Track your applications and matches." ctaA="New Application" ctaB="View Profile" />
      <section className="section"><div className="container">
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {[{n:'0',t:'Active Applications',c:'bg-teal-50 text-teal-700'},{n:'0',t:'Interviews',c:'bg-amber-50 text-amber-700'},{n:'0',t:'Offers',c:'bg-green-50 text-green-700'}].map(s => (
            <div key={s.t} className={`card p-5 ${s.c}`}><p className="text-3xl font-bold">{s.n}</p><p className="text-sm font-semibold mt-1">{s.t}</p></div>
          ))}
        </div>
        <div className="card p-6"><SectionTitle title="Recent Activity" /><p className="text-slate-500 text-center py-8">No activity yet. <a href="/find-staff-contractors-job-seekers-application" className="text-teal-600 font-semibold hover:underline">Submit your first application →</a></p></div>
      </div></section>
    </PageShell>
  );
}