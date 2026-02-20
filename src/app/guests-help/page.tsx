import Link from 'next/link';
import { GuestBookingFlowDiagram } from '@/components/diagrams';
import { FAQ, Hero, PageShell, SectionTitle } from '@/components/site';

const faqItems = [
  {
    q: 'How does ClickyTour booking work?',
    a: 'You can submit a request form or search listings. After we receive your request, we connect you with available hosts or service providers and send booking confirmation steps.',
  },
  {
    q: 'Can I request a custom plan?',
    a: 'Yes. The personalized planning service helps you build your trip based on destination, dates, budget, and travel style.',
  },
  {
    q: 'Is there a cancellation policy?',
    a: 'Each listing/provider includes specific terms before booking. Platform-assisted bookings follow guest protection and clearly stated conditions.',
  },
  {
    q: 'Are prices final?',
    a: 'Displayed prices are transparent, with any special conditions clarified before final confirmation.',
  },
  {
    q: 'Who can I contact for support?',
    a: 'Use the support page, WhatsApp, or direct communication channels shared during your booking process.',
  },
];

export default function GuestsHelpPage() {
  return (
    <PageShell>
      <Hero
diagram={<GuestBookingFlowDiagram />}
                title="Guest Help & FAQ"
        subtitle="Find quick answers about booking, planning, support, and policies so you can travel with confidence."
        ctaA="Browse topics"
        ctaB="Contact support"
      />

      

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="FAQ" title="Popular guest questions" />
          <FAQ items={faqItems} />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'How Booking Works', href: '/guests-help-how-booking-works/', desc: 'Understand request, confirmation, and booking flow.' },
            { title: 'Rental Policies', href: '/guests-help-rental-policies/', desc: 'View terms around stays, behavior, and usage rules.' },
            { title: 'Refunds & Cancellation', href: '/guests-help-refunds-cancellation/', desc: 'Learn timelines, conditions, and process steps.' },
            { title: 'Contact Support', href: '/guests-help-contact/', desc: 'Reach our team through the right channel for your case.' },
            { title: 'Personalized Planning', href: '/guests-personalized-planning/', desc: 'Get a tailored trip proposal from local experts.' },
            { title: 'Vacation Assistance', href: '/guests-vacation-assistance/', desc: 'Ask for services, activities, and trip coordination.' },
          ].map((item) => (
            <article key={item.title} className="card p-5">
              <h3 className="font-bold text-[#0F2B46]">{item.title}</h3>
              <p className="text-sm text-slate-600 mt-2">{item.desc}</p>
              <Link href={item.href} className="text-cyan-700 text-sm font-semibold mt-3 inline-block">Open page →</Link>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
