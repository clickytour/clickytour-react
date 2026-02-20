import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { JobSeekerHubDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Job Opportunities in Tourism & Property — Worldwide" subtitle="Find work as a cleaner, check-in agent, maintenance pro, guide, and more." ctaA="Apply Now" ctaB="Browse Jobs" />
      <section className="section"><div className="container">
        <SectionTitle title="Get Started" subtitle="Choose your path" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {icon:'📝',t:'Quick Application',d:'Apply in 2 minutes.',href:'/find-staff-contractors-job-seekers-quick-application'},
            {icon:'📋',t:'Full Application',d:'Complete profile for better matching.',href:'/find-staff-contractors-job-seekers-application'},
            {icon:'📊',t:'My Dashboard',d:'Track applications and matches.',href:'/find-staff-contractors-job-seekers-dashboard'},
            {icon:'👤',t:'My Profile',d:'Edit skills and availability.',href:'/find-staff-contractors-job-seekers-profile'},
            {icon:'🔍',t:'Browse Requests',d:'See what employers need.',href:'/find-staff-contractors-directory'},
            {icon:'📄',t:'Submit CV',d:'Upload CV for review.',href:'/list-cv'},
          ].map(c => (
            <Link key={c.t} href={c.href} className="card p-5 hover:shadow-lg transition-shadow">
              <p className="text-3xl">{c.icon}</p><h3 className="font-bold mt-2">{c.t}</h3><p className="text-slate-600 text-sm mt-1">{c.d}</p>
            </Link>
          ))}
        </div>
      </div></section>
    </PageShell>
  );
}