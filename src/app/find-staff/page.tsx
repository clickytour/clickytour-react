import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { FindStaffHubDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Find Staff & Contractors" subtitle="For tourism and property — fast hiring, worldwide." ctaA="Post a Request" ctaB="Browse Candidates" ctaHrefA="/find-staff-contractors-quick-request" ctaHrefB="/find-staff-contractors-job-seekers" diagram={<FindStaffHubDiagram />} />
      <section className="section"><div className="container">
        <SectionTitle title="Hire by Role" subtitle="Find the right people for every job in tourism and property management." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: '🏢', t: 'For PM Companies', d: 'Build your local team per destination.', href: '/find-staff-contractors-management' },
            { icon: '🏠', t: 'For Property Owners', d: 'Cleaners, check-in staff, seasonal help.', href: '/find-staff-contractors-owners' },
            { icon: '🏪', t: 'For Service Providers', d: 'Post requests and hire local help fast.', href: '/find-staff-contractors-providers' },
            { icon: '👤', t: 'For Job Seekers', d: 'Find opportunities in tourism & property.', href: '/find-staff-contractors-job-seekers' },
            { icon: '📋', t: 'Browse Directory', d: 'Search available candidates by role.', href: '/find-staff-contractors-directory' },
            { icon: '📝', t: 'Post a Request', d: 'Submit a quick or advanced staff request.', href: '/find-staff-contractors-quick-request' },
          ].map(c => (
            <Link key={c.t} href={c.href} className="card p-5 hover:shadow-lg transition-shadow">
              <p className="text-3xl">{c.icon}</p>
              <h3 className="font-bold mt-2">{c.t}</h3>
              <p className="text-slate-600 text-sm mt-1">{c.d}</p>
            </Link>
          ))}
        </div>
      </div></section>
    </PageShell>
  );
}
