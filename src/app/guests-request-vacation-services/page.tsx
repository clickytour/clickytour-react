import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';

const services = [
  { icon: '🧹', title: 'Cleaning & Linen', desc: 'Schedule trusted local cleaners and linen pickup.' },
  { icon: '⚡', title: 'Electrician / Plumber', desc: 'Electrician, plumber, handyman — all in one place.' },
  { icon: '🤝', title: 'Guest Check-in Reps', desc: 'Trained reps greet guests, manage key exchanges.' },
  { icon: '📸', title: 'Professional Photography', desc: 'Hire a pro to capture your experience.' },
  { icon: '🔧', title: 'Repairs & Maintenance', desc: 'Coordinate repairs or upgrades easily.' },
  { icon: '🚗', title: 'Transfers & Transport', desc: 'Airport pickups, car rentals, boat transfers.' },
];

export default function GuestsRequestVacationServices() {
  return (
    <PageShell>
      <Hero title="Need Help During Your Stay? We've Got You Covered." subtitle="Most Requested Services by Our Guests" ctaA="Request a Service" ctaB="Browse Services" />
      <section className="section"><div className="container">
        <SectionTitle title="Popular Services" subtitle="Choose from our most requested services" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(s => <article key={s.title} className="card p-5"><p className="text-3xl">{s.icon}</p><h3 className="font-bold mt-2">{s.title}</h3><p className="text-slate-600 text-sm mt-1">{s.desc}</p></article>)}
        </div>
      </div></section>
      <section className="section section-soft"><div className="container">
        <SectionTitle title="How It Works" />
        <div className="grid md:grid-cols-3 gap-6">
          {[{n:'1',t:'Submit Request',d:'Tell us what you need and where.'},{n:'2',t:'We Match Providers',d:'We find the best local professionals.'},{n:'3',t:'Get Confirmation',d:'Book, pay, and enjoy your stay.'}].map(s => <div key={s.n} className="text-center"><div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">{s.n}</div><h3 className="font-bold mt-3">{s.t}</h3><p className="text-slate-600 text-sm mt-1">{s.d}</p></div>)}
        </div>
      </div></section>
      <section className="section"><div className="container text-center">
        <h2 className="text-2xl font-bold text-slate-900">Need urgent help or want to request multiple services?</h2>
        <p className="text-slate-600 mt-2">Fill out our quick service request form and we'll handle the rest.</p>
        <Link href="/guest-service-request" className="inline-block mt-4 px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700">Request a Service Now →</Link>
      </div></section>
    </PageShell>
  );
}