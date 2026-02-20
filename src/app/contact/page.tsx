import Link from 'next/link';
import { ContactDiagram } from '@/components/diagrams';
import { Hero, PageShell, SectionTitle } from '@/components/site';

export default function ContactPage() {
  return (
    <PageShell>
      <Hero
        title="Contact ClickyTour"
        subtitle="Need help with listings, bookings, partnerships, or account setup? Our team is here to support you."
        ctaA="Send Message"
        ctaB="Open Support Ticket"
      />

      <section className="section"><div className="container max-w-lg mx-auto"><ContactDiagram /></div></section>

      <section className="section">
        <div className="container grid md:grid-cols-3 gap-4">
          {[
            { title: 'Support Email', value: 'support@clickytour.club', icon: '✉️' },
            { title: 'Partnerships', value: 'partners@clickytour.club', icon: '🤝' },
            { title: 'Office Hours', value: 'Mon–Fri, 09:00–18:00 (EET)', icon: '🕘' },
          ].map((item) => (
            <article key={item.title} className="card p-5">
              <p className="text-2xl">{item.icon}</p>
              <h3 className="font-bold mt-2">{item.title}</h3>
              <p className="text-slate-600 mt-2 text-sm">{item.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
          <div className="card p-6 md:p-8">
            <SectionTitle title="Send Us a Message" subtitle="This form is static for now and does not submit to a backend." />
            <form className="grid md:grid-cols-2 gap-4">
              <input className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Full name" />
              <input className="rounded-xl border border-slate-200 px-4 py-3" type="email" placeholder="Email address" />
              <input className="rounded-xl border border-slate-200 px-4 py-3 md:col-span-2" placeholder="Subject" />
              <textarea className="rounded-xl border border-slate-200 px-4 py-3 md:col-span-2" rows={6} placeholder="Message" />
              <button className="btn-primary md:col-span-2">Send Message</button>
            </form>
          </div>

          <div className="card p-6 md:p-8">
            <h3 className="text-2xl font-extrabold text-slate-900">Need quick answers?</h3>
            <p className="text-slate-600 mt-3">
              Visit our FAQ and Help Center for guides on onboarding, listings, bookings, payments and support.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/faq/" className="btn-secondary">Go to FAQ</Link>
              <Link href="/help/" className="btn-secondary">Help Center</Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
