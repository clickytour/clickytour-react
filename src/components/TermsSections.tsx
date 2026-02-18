export function TermsSections() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 pb-12 pt-4">
      <div className="rounded-2xl border border-slate-300 bg-white p-5 md:p-8">
        <p className="text-sm text-slate-500">Home › <span className="font-semibold text-slate-700">Terms &amp; Conditions</span></p>

        <h1 className="mt-3 text-4xl font-semibold leading-tight text-slate-900 md:text-[56px] md:leading-none">
          Terms &amp; Conditions
        </h1>
        <p className="mt-3 text-sm text-slate-500">Last updated: February 2026</p>

        <div className="mt-8 space-y-8 text-slate-700 leading-relaxed">
          <Section title="1. Acceptance of Terms">
            <p>By accessing and using the Villa4you website (villa4you.gr) and services operated by ClickyTour, you agree to be bound by these Terms &amp; Conditions. If you do not agree with any part of these terms, please do not use our services.</p>
          </Section>

          <Section title="2. About Our Services">
            <p>Villa4you, operated by ClickyTour, provides vacation rental property management, listing, and booking facilitation services in Greece. Our platform connects property owners with guests seeking short-term vacation accommodation, primarily in Halkidiki and surrounding regions.</p>
            <p className="mt-2">We act as an intermediary between property owners and guests. Villa4you is not the owner of the listed properties unless explicitly stated.</p>
          </Section>

          <Section title="3. Bookings &amp; Reservations">
            <p>All bookings made through Villa4you are subject to availability and confirmation. A booking is considered confirmed only after:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Receipt of the required deposit or full payment</li>
              <li>Written confirmation via email from Villa4you</li>
              <li>Agreement to the specific property rules and policies</li>
            </ul>
            <p className="mt-2">Prices are quoted in Euros (€) and include applicable taxes unless otherwise stated. Additional fees (cleaning, linen, etc.) will be clearly disclosed before booking confirmation.</p>
          </Section>

          <Section title="4. Payment Terms">
            <p>A deposit of 30–50% of the total booking value is typically required to secure a reservation. The remaining balance is due no later than 30 days before the check-in date, or upon arrival for last-minute bookings.</p>
            <p className="mt-2">Accepted payment methods include bank transfer, credit/debit card, and other methods as indicated during the booking process.</p>
          </Section>

          <Section title="5. Cancellation &amp; Refund Policy">
            <p>Cancellation terms depend on the specific property and rate type selected:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li><strong>Flexible:</strong> Free cancellation up to 14 days before check-in. Full deposit refund minus administrative fees.</li>
              <li><strong>Moderate:</strong> Free cancellation up to 30 days before check-in. 50% deposit refund for cancellations 15–29 days before check-in.</li>
              <li><strong>Strict:</strong> Non-refundable deposit. Full payment required for cancellations within 30 days of check-in.</li>
            </ul>
            <p className="mt-2">Force majeure events (natural disasters, government restrictions, pandemics) will be evaluated on a case-by-case basis.</p>
          </Section>

          <Section title="6. Guest Responsibilities">
            <p>Guests agree to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Treat the property with care and respect</li>
              <li>Adhere to the maximum occupancy stated in the listing</li>
              <li>Comply with house rules and local regulations</li>
              <li>Report any damages immediately to Villa4you</li>
              <li>Vacate the property by the agreed check-out time</li>
            </ul>
            <p className="mt-2">A security deposit may be collected and will be refunded after inspection, minus any deductions for damages or excessive cleaning.</p>
          </Section>

          <Section title="7. Property Owner Responsibilities">
            <p>Property owners listed on Villa4you agree to provide accurate property descriptions, maintain the property in a safe and habitable condition, and comply with all applicable Greek laws regarding short-term rental operations (including registration with the appropriate authorities and tax compliance).</p>
          </Section>

          <Section title="8. Limitation of Liability">
            <p>Villa4you / ClickyTour acts as a facilitator and is not liable for:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Direct or indirect damages arising from the use of listed properties</li>
              <li>Personal injury, theft, or loss of belongings during a stay</li>
              <li>Service interruptions beyond our control (power outages, natural events)</li>
              <li>Inaccuracies in third-party information or services</li>
            </ul>
            <p className="mt-2">Our total liability shall not exceed the amount paid by the guest for the specific booking in question.</p>
          </Section>

          <Section title="9. Intellectual Property">
            <p>All content on villa4you.gr — including text, images, logos, and design — is the property of ClickyTour and is protected by Greek and international copyright law. Unauthorized reproduction or distribution is prohibited.</p>
          </Section>

          <Section title="10. Modifications">
            <p>Villa4you reserves the right to modify these Terms &amp; Conditions at any time. Changes take effect upon publication on the website. Continued use of our services after changes constitutes acceptance of the updated terms.</p>
          </Section>

          <Section title="11. Governing Law &amp; Jurisdiction">
            <p>These Terms &amp; Conditions are governed by and construed in accordance with the laws of the Hellenic Republic (Greece). Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Thessaloniki, Greece.</p>
          </Section>

          <Section title="12. Contact">
            <p>For questions regarding these terms, please contact us:</p>
            <p className="mt-2">Email: info@villa4you.gr<br />Phone: +30 2374 0 12345<br />Address: Kassandra, Halkidiki 63077, Greece</p>
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
