import Link from 'next/link';
import { GuestBookingFlowDiagram } from '@/components/diagrams';
import { Hero, PageShell, SectionTitle } from '@/components/site';

export default function GuestsHelpHowBookingWorksPage() {
  return (
    <PageShell>
      <Hero
diagram={<GuestBookingFlowDiagram/>}
                title="How Booking Works"
        subtitle="A clear step-by-step guide for finding, requesting, and confirming your stay or service on ClickyTour."
        ctaA="Start a request"
        ctaB="Contact support" ctaHrefA="/guests-vacation-request" ctaHrefB="/guests-help"
      />

      

      <section className="section">
        <div className="container">
          <SectionTitle title="How Booking Works" subtitle="This page was created from title intent because WP content is empty." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              '1. Search listings or submit a custom request',
              '2. Review proposals, pricing, and availability',
              '3. Confirm details and complete secure payment',
              '4. Receive final instructions and travel support',
            ].map((step) => (
              <article key={step} className="card p-5">
                <h3 className="font-bold text-[#0F2B46]">{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container grid md:grid-cols-2 gap-6">
          <article className="card p-6">
            <h3 className="text-xl font-bold text-[#0F2B46]">Before you confirm</h3>
            <ul className="mt-4 list-disc list-inside space-y-2 text-slate-600">
              <li>Check cancellation and policy terms</li>
              <li>Confirm total cost and included services</li>
              <li>Review check-in/check-out and contact details</li>
            </ul>
          </article>
          <article className="card p-6">
            <h3 className="text-xl font-bold text-[#0F2B46]">Need help during booking?</h3>
            <p className="mt-3 text-slate-600">Our team can support you with comparison, clarification, and booking coordination.</p>
            <div className="mt-5 flex gap-3 flex-wrap">
              <Link href="/guests-help-contact/" className="btn-primary">Get support</Link>
              <Link href="/guests-help/" className="btn-secondary">Back to help center</Link>
            </div>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
