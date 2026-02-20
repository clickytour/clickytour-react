import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { FindStaffFlowDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Find Staff & Contractors" subtitle="Tourism & property staffing, worldwide." ctaA="Post Request" ctaB="Browse" ctaHrefA="/find-staff-contractors-quick-request" ctaHrefB="/find-staff-contractors-directory" diagram={<FindStaffFlowDiagram />} />
      <section className="section"><div className="container">
        <SectionTitle title="How It Works" subtitle="Simple, fast, location-based hiring." />
        <div className="grid md:grid-cols-3 gap-6">
          {[{n:'1',t:'Post a Request',d:'Describe what you need — role, location, dates.'},{n:'2',t:'Get Matched',d:'We match you with qualified candidates nearby.'},{n:'3',t:'Hire & Manage',d:'Review profiles, interview, and onboard.'}].map(s => (
            <div key={s.n} className="text-center"><div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">{s.n}</div><h3 className="font-bold mt-3">{s.t}</h3><p className="text-slate-600 text-sm mt-1">{s.d}</p></div>
          ))}
        </div>
      </div></section>
      <section className="section section-soft"><div className="container">
        <SectionTitle title="Hire by Role" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[{icon:'🏢',t:'PM Companies',href:'/find-staff-contractors-management'},{icon:'🏠',t:'Owners',href:'/find-staff-contractors-owners'},{icon:'🏪',t:'Providers',href:'/find-staff-contractors-providers'},{icon:'👤',t:'Job Seekers',href:'/find-staff-contractors-job-seekers'}].map(c => (
            <Link key={c.t} href={c.href} className="card p-5 text-center hover:shadow-lg"><p className="text-3xl">{c.icon}</p><h3 className="font-bold mt-2">{c.t}</h3></Link>
          ))}
        </div>
      </div></section>
    </PageShell>
  );
}