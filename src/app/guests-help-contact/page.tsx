import { Hero, PageShell, SectionTitle } from '@/components/site';

const contactMethods = [
  { title: 'Support Form', detail: 'Best for booking, planning, and policy questions.', icon: '📝' },
  { title: 'Email', detail: 'support@clickytour.com', icon: '📧' },
  { title: 'WhatsApp', detail: 'Fast chat support for active trip needs.', icon: '📱' },
  { title: 'Phone', detail: 'Use for urgent operational matters when available.', icon: '📞' },
];

export default function GuestsHelpContactPage() {
  return (
    <PageShell>
      <Hero
        title="Support Contacts"
        subtitle="Reach the ClickyTour support team through the right channel for booking questions, trip planning, and urgent travel issues."
        ctaA="Submit support request"
        ctaB="View help center"
      />

      <section className="section">
        <div className="container">
          <SectionTitle title="Contact options" subtitle="This page was created from title intent because WP content is empty." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactMethods.map((method) => (
              <article key={method.title} className="card p-5">
                <p className="text-2xl">{method.icon}</p>
                <h3 className="font-bold text-[#0F2B46] mt-2">{method.title}</h3>
                <p className="text-sm text-slate-600 mt-2">{method.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container grid md:grid-cols-2 gap-6">
          <article className="card p-6">
            <h3 className="text-xl font-bold text-[#0F2B46]">What to include in your message</h3>
            <ul className="mt-4 list-disc list-inside space-y-2 text-slate-600">
              <li>Booking reference (if available)</li>
              <li>Destination and travel dates</li>
              <li>Short summary of the issue or request</li>
              <li>Preferred response channel</li>
            </ul>
          </article>
          <article className="card p-6">
            <h3 className="text-xl font-bold text-[#0F2B46]">Urgent situations</h3>
            <p className="mt-3 text-slate-600">For urgent health, safety, or immediate travel disruption in Greece, contact local emergency services first, then notify our team.</p>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
