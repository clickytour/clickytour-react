import Link from 'next/link';
import { Hero, PageShell, SectionTitle } from '@/components/site';

export default function GuestsHelpRefundsCancellationPage() {
  return (
    <PageShell>
      <Hero
        title="Refunds & Cancellation"
        subtitle="Understand how cancellation requests, refund timelines, and policy conditions are handled."
        ctaA="Check cancellation rules"
        ctaB="Contact support" ctaHrefA="/guests-help-contact" ctaHrefB="/guests-help"
      />

      <section className="section">
        <div className="container">
          <SectionTitle title="How cancellation works" subtitle="This page was created from title intent because WP content is empty." />
          <div className="grid md:grid-cols-3 gap-4">
            <article className="card p-5">
              <h3 className="font-bold text-[#0F2B46]">1. Review policy</h3>
              <p className="text-sm text-slate-600 mt-2">Cancellation terms depend on listing/provider rules shown before booking confirmation.</p>
            </article>
            <article className="card p-5">
              <h3 className="font-bold text-[#0F2B46]">2. Submit request</h3>
              <p className="text-sm text-slate-600 mt-2">Send your cancellation details promptly through support to speed processing.</p>
            </article>
            <article className="card p-5">
              <h3 className="font-bold text-[#0F2B46]">3. Receive outcome</h3>
              <p className="text-sm text-slate-600 mt-2">Eligible refunds are processed according to provider timing and payment method.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container grid md:grid-cols-2 gap-6">
          <article className="card p-6">
            <h3 className="text-xl font-bold text-[#0F2B46]">Common factors affecting refunds</h3>
            <ul className="mt-4 list-disc list-inside space-y-2 text-slate-600">
              <li>How close to check-in the cancellation is made</li>
              <li>Provider-specific policy selected at booking time</li>
              <li>Service type (accommodation, activity, transfer, etc.)</li>
              <li>Force majeure or emergency-related exceptions</li>
            </ul>
          </article>
          <article className="card p-6">
            <h3 className="text-xl font-bold text-[#0F2B46]">Need case-specific guidance?</h3>
            <p className="mt-3 text-slate-600">Share your booking details and we&apos;ll help you understand the applicable policy and next steps.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/guests-help-contact/" className="btn-primary">Open support contact</Link>
              <Link href="/guests-help/" className="btn-secondary">Return to help center</Link>
            </div>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
