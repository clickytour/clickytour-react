import { Hero, PageShell, SectionTitle } from '@/components/site';
import { ContactDiagram } from '@/components/diagrams';

const ticketCategories = [
  'Account Access',
  'Listing / Content Updates',
  'Booking Issue',
  'Payment / Payout',
  'Technical Problem',
  'Partnership & Business Inquiry',
];

export default function SupportPage() {
  return (
    <PageShell>
      <Hero
        title="Support Tickets"
        subtitle="Submit a ticket and our team will route your request to the right support specialist."
        ctaA="Submit Ticket"
        ctaB="Visit Help Center"
      />

      <section className="section"><div className="container max-w-lg mx-auto"><ContactDiagram /></div></section>

      <section className="section section-soft">
        <div className="container max-w-4xl">
          <div className="card p-6 md:p-8">
            <SectionTitle
              title="Create a Support Ticket"
              subtitle="This form is static in the current implementation (no backend submission)."
            />

            <form className="grid md:grid-cols-2 gap-4">
              <input className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Full name" />
              <input className="rounded-xl border border-slate-200 px-4 py-3" type="email" placeholder="Email" />

              <select className="rounded-xl border border-slate-200 px-4 py-3 md:col-span-2">
                <option>Select ticket category</option>
                {ticketCategories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>

              <input className="rounded-xl border border-slate-200 px-4 py-3 md:col-span-2" placeholder="Subject" />
              <textarea className="rounded-xl border border-slate-200 px-4 py-3 md:col-span-2" rows={7} placeholder="Describe your issue in detail" />

              <button className="btn-primary md:col-span-2">Submit Ticket</button>
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
