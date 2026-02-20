import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { GuestServiceFormDiagram } from '@/components/diagrams';

const services = [
  { icon: '🧽', title: 'Cleaning & Linen', desc: 'Schedule trusted local cleaners and linen pickup.' },
  { icon: '🔧', title: 'Maintenance & Repairs', desc: 'Electrician, plumber, handyman — all in one dashboard.' },
  { icon: '🤝', title: 'Guest Check-in Reps', desc: 'Trained reps greet guests, manage key exchanges.' },
  { icon: '📸', title: 'Professional Photography', desc: 'Hire a pro to upgrade your listing visuals.' },
  { icon: '🏗️', title: 'Renovations & Upgrades', desc: 'Coordinate repairs or upgrades with vetted contractors.' },
];

export default function OwnersRequestService() {
  return (
    <PageShell>
      <Hero title="Start Getting Help with Your Property Today" subtitle="Need Help Managing Your Vacation Home?" ctaA="Request a Service" ctaB="Learn More" ctaHrefA="/guest-service-request" ctaHrefB="/owners" diagram={<GuestServiceFormDiagram />} />
      <section className="section"><div className="container">
        <SectionTitle title="Request Home Services — What's Available" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(s => <article key={s.title} className="card p-5"><p className="text-3xl">{s.icon}</p><h3 className="font-bold mt-2">{s.title}</h3><p className="text-slate-600 text-sm mt-1">{s.desc}</p></article>)}
        </div>
      </div></section>
      <section className="section section-soft"><div className="container">
        <SectionTitle title="How It Works" />
        <div className="grid md:grid-cols-4 gap-6">
          {[{n:'1️⃣',t:'Submit Request',d:'Tell us what you need.'},{n:'2️⃣',t:'We Match Providers',d:'Find vetted local pros.'},{n:'3️⃣',t:'Get Quotes',d:'Compare pricing and reviews.'},{n:'4️⃣',t:'Confirm & Schedule',d:'Book and track progress.'}].map(s => <div key={s.t} className="text-center"><p className="text-3xl">{s.n}</p><h3 className="font-bold mt-2">{s.t}</h3><p className="text-slate-600 text-sm mt-1">{s.d}</p></div>)}
        </div>
      </div></section>
      <section className="section"><div className="container">
        <SectionTitle title="Why Our Owners Love This Feature" />
        <div className="grid md:grid-cols-3 gap-4">
          {['Vetted local professionals','One dashboard for everything','Transparent pricing & reviews'].map(b => <div key={b} className="card p-4 flex items-center gap-3"><span className="text-teal-600 text-xl">✓</span><span className="font-semibold text-slate-800">{b}</span></div>)}
        </div>
        <div className="text-center mt-8"><Link href="/vacation-owners-list" className="inline-block px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700">Request a Service Now →</Link></div>
      </div></section>
    </PageShell>
  );
}