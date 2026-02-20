'use client';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { JobSeekerProfileDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <PageShell>
      <Hero diagram={<JobSeekerProfileDiagram />} title="Job Seeker Profile" subtitle="Your professional profile for employers." ctaA="Edit Profile" ctaB="View Applications" />
      <section className="section"><div className="container"><div className="card p-6 md:p-8">
        <SectionTitle title="Your Profile" subtitle="Complete your profile to get better matches." />
        <div className="space-y-6">
          <div className="flex items-center gap-4"><div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center text-3xl">👤</div><div><p className="font-bold text-lg">Guest User</p><p className="text-slate-500 text-sm">Complete your profile to get started</p></div></div>
          <div className="grid md:grid-cols-2 gap-4">
            {['Full Name','Email','Phone','Location','Languages','Roles','Experience','Availability'].map(f => (
              <div key={f}><label className="block text-sm font-semibold text-slate-700 mb-1">{f}</label><div className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-400">Not set</div></div>
            ))}
          </div>
          <a href="/find-staff-contractors-job-seekers-application" className="inline-block px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700">Complete Application →</a>
        </div>
      </div></div></section>
    </PageShell>
  );
}