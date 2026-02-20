'use client';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { JobSeekerHubDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Job Seeker Hub" subtitle="Your central dashboard for job opportunities." ctaA="Apply" ctaB="Browse" ctaHrefA="/find-staff-contractors-job-seekers-quick-application" ctaHrefB="/find-staff-contractors-job-seekers" diagram={<JobSeekerHubDiagram />} />
      <section className="section"><div className="container">
        <SectionTitle title="Quick Access" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[{icon:'📝',t:'Apply',href:'/find-staff-contractors-job-seekers-application'},{icon:'📊',t:'Dashboard',href:'/find-staff-contractors-job-seekers-dashboard'},{icon:'👤',t:'Profile',href:'/find-staff-contractors-job-seekers-profile'},{icon:'📋',t:'My Applications',href:'/my-applications'}].map(c => (
            <a key={c.t} href={c.href} className="card p-5 text-center hover:shadow-lg"><p className="text-3xl">{c.icon}</p><h3 className="font-bold mt-2">{c.t}</h3></a>
          ))}
        </div>
      </div></section>
    </PageShell>
  );
}