export function PrivacySections() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 pb-12 pt-4">
      <div className="rounded-2xl border border-slate-300 bg-white p-5 md:p-8">
        <p className="text-sm text-slate-500">Home › <span className="font-semibold text-slate-700">Privacy Policy</span></p>

        <h1 className="mt-3 text-4xl font-semibold leading-tight text-slate-900 md:text-[56px] md:leading-none">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-slate-500">Last updated: February 2026 · GDPR Compliant</p>

        <div className="mt-8 space-y-8 text-slate-700 leading-relaxed">
          <Section title="1. Data Controller">
            <p>The data controller for personal data collected through villa4you.gr is:</p>
            <p className="mt-2 font-medium">Villa4you / ClickyTour<br />Kassandra, Halkidiki 63077, Greece<br />Email: privacy@villa4you.gr<br />Phone: +30 2374 0 12345</p>
          </Section>

          <Section title="2. Data We Collect">
            <p>We may collect and process the following categories of personal data:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li><strong>Identity data:</strong> name, surname, date of birth, nationality</li>
              <li><strong>Contact data:</strong> email address, phone number, postal address</li>
              <li><strong>Booking data:</strong> reservation details, check-in/out dates, guest count, preferences</li>
              <li><strong>Payment data:</strong> payment method, transaction references (we do not store full card numbers)</li>
              <li><strong>Technical data:</strong> IP address, browser type, device information, cookies</li>
              <li><strong>Communication data:</strong> messages, reviews, support requests</li>
              <li><strong>Property owner data:</strong> property details, tax identification, bank account for payouts</li>
            </ul>
          </Section>

          <Section title="3. Purpose of Processing">
            <p>We process your personal data for the following purposes:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Processing and managing bookings and reservations</li>
              <li>Communicating with you about your booking or inquiry</li>
              <li>Payment processing and fraud prevention</li>
              <li>Improving our website and services</li>
              <li>Sending marketing communications (only with your consent)</li>
              <li>Compliance with legal obligations (tax, regulatory)</li>
              <li>Protecting our legitimate interests (security, dispute resolution)</li>
            </ul>
          </Section>

          <Section title="4. Legal Basis for Processing">
            <p>We process personal data based on one or more of the following legal grounds under the GDPR:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li><strong>Contract performance:</strong> processing necessary to fulfill your booking</li>
              <li><strong>Consent:</strong> marketing emails, non-essential cookies</li>
              <li><strong>Legal obligation:</strong> tax and regulatory compliance</li>
              <li><strong>Legitimate interests:</strong> fraud prevention, service improvement, analytics</li>
            </ul>
          </Section>

          <Section title="5. Data Retention">
            <p>We retain personal data only as long as necessary for the purposes outlined above:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li><strong>Booking data:</strong> 5 years after the stay (tax/legal requirements)</li>
              <li><strong>Account data:</strong> until you request deletion</li>
              <li><strong>Marketing data:</strong> until you unsubscribe or withdraw consent</li>
              <li><strong>Technical/analytics data:</strong> up to 26 months</li>
              <li><strong>Communication records:</strong> 3 years</li>
            </ul>
          </Section>

          <Section title="6. Data Sharing">
            <p>We may share your data with:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Property owners (to fulfill your booking)</li>
              <li>Payment processors (Stripe, bank partners)</li>
              <li>Cloud hosting providers (within the EU/EEA)</li>
              <li>Analytics services (Google Analytics — see Cookie Policy)</li>
              <li>Legal authorities when required by law</li>
            </ul>
            <p className="mt-2">We do not sell your personal data to third parties.</p>
          </Section>

          <Section title="7. International Transfers">
            <p>Your data is primarily stored within the European Economic Area (EEA). Where data is transferred outside the EEA, we ensure adequate safeguards are in place, such as Standard Contractual Clauses (SCCs) approved by the European Commission.</p>
          </Section>

          <Section title="8. Your Rights">
            <p>Under the GDPR, you have the following rights:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li><strong>Right of access:</strong> request a copy of your personal data</li>
              <li><strong>Right to rectification:</strong> correct inaccurate data</li>
              <li><strong>Right to erasure:</strong> request deletion of your data (&quot;right to be forgotten&quot;)</li>
              <li><strong>Right to restrict processing:</strong> limit how we use your data</li>
              <li><strong>Right to data portability:</strong> receive your data in a structured format</li>
              <li><strong>Right to object:</strong> object to processing based on legitimate interests or direct marketing</li>
              <li><strong>Right to withdraw consent:</strong> at any time, without affecting prior processing</li>
            </ul>
            <p className="mt-2">To exercise your rights, contact us at privacy@villa4you.gr. We will respond within 30 days.</p>
          </Section>

          <Section title="9. Cookies">
            <p>Our website uses cookies to enhance your experience. For detailed information on the cookies we use, their purpose, and how to manage your preferences, please see our <a href="/cookies" className="text-sky-600 underline hover:text-sky-800">Cookie Policy</a>.</p>
          </Section>

          <Section title="10. Data Protection Officer (DPO)">
            <p>For any questions or concerns about our data processing practices, or to exercise your data protection rights, please contact our Data Protection Officer:</p>
            <p className="mt-2">Email: dpo@villa4you.gr<br />Address: Villa4you / ClickyTour, Kassandra, Halkidiki 63077, Greece</p>
          </Section>

          <Section title="11. Complaints">
            <p>If you believe your data protection rights have been violated, you have the right to lodge a complaint with the Hellenic Data Protection Authority (HDPA):</p>
            <p className="mt-2">Hellenic Data Protection Authority<br />Kifissias 1-3, 115 23 Athens, Greece<br />www.dpa.gr</p>
          </Section>

          <Section title="12. Changes to This Policy">
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.</p>
          </Section>
        </div>
      </div>
    </section>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <div className="mt-2">{children}</div>
    </div>
  );
}
