import { Hero, PageShell, SectionTitle } from '@/components/site';

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <Hero
        title="Privacy Policy"
        subtitle="How ClickyTour collects, uses, and protects personal information across our platform."
        ctaA="Contact Privacy Team"
        ctaB="View Terms" ctaHrefA="mailto:privacy@clickytour.com" ctaHrefB="/terms"
      />

      <section className="section section-soft">
        <div className="container max-w-4xl">
          <article className="card p-6 md:p-10 space-y-7 text-slate-700">
            <section>
              <SectionTitle title="1. Scope" />
              <p>
                This Privacy Policy applies to ClickyTour websites, role-based pages, onboarding forms, and support interactions.
                It explains what data we collect, why we process it, and your rights regarding that data.
              </p>
            </section>

            <section>
              <SectionTitle title="2. Information We Collect" />
              <ul className="list-disc pl-5 space-y-2">
                <li>Account and profile information such as name, email, role type, and contact details.</li>
                <li>Listing and operational data provided by owners, service providers, agents, or PM companies.</li>
                <li>Communication records from support requests, contact forms, and help interactions.</li>
                <li>Technical and usage data such as browser type, pages visited, and session diagnostics.</li>
              </ul>
            </section>

            <section>
              <SectionTitle title="3. How We Use Information" />
              <ul className="list-disc pl-5 space-y-2">
                <li>To provide and improve ClickyTour services and role-specific platform functionality.</li>
                <li>To process onboarding requests, bookings, referrals, and partner communications.</li>
                <li>To secure our systems, prevent abuse, and comply with legal obligations.</li>
                <li>To send relevant updates, notices, and service communications.</li>
              </ul>
            </section>

            <section>
              <SectionTitle title="4. Legal Bases & Data Sharing" />
              <p>
                We process data based on consent, contractual necessity, legitimate interests, and legal obligations. Data may be
                shared with trusted processors (e.g. hosting, analytics, communication services) under confidentiality and data
                protection agreements.
              </p>
            </section>

            <section>
              <SectionTitle title="5. Retention & Security" />
              <p>
                We retain personal data only as long as needed for operational, legal, and support purposes. ClickyTour applies
                organizational and technical safeguards to protect data against unauthorized access, alteration, or loss.
              </p>
            </section>

            <section>
              <SectionTitle title="6. Your Rights" />
              <p>
                Depending on your jurisdiction, you may request access, correction, deletion, restriction, or portability of your
                personal data, and object to certain processing activities.
              </p>
              <p className="mt-2">For privacy requests, contact: <strong>privacy@clickytour.club</strong></p>
            </section>

            <section>
              <SectionTitle title="7. Policy Updates" />
              <p>
                We may update this policy to reflect legal, operational, or product changes. The latest version will always be
                available on this page.
              </p>
            </section>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
