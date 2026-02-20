'use client';
import { PageShell, Hero, SectionTitle } from '@/components/site';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Job Request Details" subtitle="View full details of a staff request." ctaA="Get Started" ctaB="Learn More" />
      <section className="section"><div className="container"><div className="card p-6 md:p-8">
        <div className="flex items-center justify-between mb-6"><span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full">Open</span><span className="text-slate-400 text-sm">Request #---</span></div>
        <h2 className="text-2xl font-bold text-slate-900">Sample Request Title</h2>
        <p className="text-slate-600 mt-2">This is a demo view. Real request details will be loaded from Core.</p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          {['Role','Location','Availability','Budget','Posted By','Date Posted'].map(f => (<div key={f}><p className="text-sm font-semibold text-slate-500">{f}</p><p className="text-slate-800">—</p></div>))}
        </div>
        <div className="mt-8"><a href="/find-staff-contractors-job-seekers-advanced" className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700">Apply to This Request →</a></div>
      </div></div></section>
    </PageShell>
  );
}