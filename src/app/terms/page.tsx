import { Hero, PageShell, SectionTitle } from '@/components/site';

export default function TermsPage() {
  return (
    <PageShell>
      <Hero
        title="Terms & Conditions"
        subtitle="The rules and responsibilities for using ClickyTour services and platform features."
        ctaA="Contact Support"
        ctaB="View Privacy Policy"
      />

      <section className="section section-soft">
        <div className="container max-w-4xl">
          <article className="card p-6 md:p-10 space-y-7 text-slate-700">
            <section>
              <SectionTitle title="1. Acceptance of Terms" />
              <p>
                By accessing or using ClickyTour, you agree to these Terms and any related policies. If you do not agree, please
                discontinue use of the platform.
              </p>
            </section>

            <section>
              <SectionTitle title="2. Platform Role" />
              <p>
                ClickyTour provides tools and connections for guests, owners, service providers, agents, and PM companies. Specific
                offerings and eligibility may vary by role and destination.
              </p>
            </section>

            <section>
              <SectionTitle title="3. Account Responsibilities" />
              <ul className="list-disc pl-5 space-y-2">
                <li>You are responsible for maintaining accurate account and profile information.</li>
                <li>You must keep your credentials secure and notify us of unauthorized access.</li>
                <li>You are responsible for activity performed through your account.</li>
              </ul>
            </section>

            <section>
              <SectionTitle title="4. Listings, Content & Conduct" />
              <p>
                Users must provide truthful listing and service information and must not upload unlawful, misleading, or infringing
                content. ClickyTour may remove content that violates these Terms.
              </p>
            </section>

            <section>
              <SectionTitle title="5. Payments, Commissions & Fees" />
              <p>
                Applicable fees, commissions, and payout rules depend on role, plan, and agreement. Users must review and accept the
                relevant commercial terms before participating in paid activities.
              </p>
            </section>

            <section>
              <SectionTitle title="6. Limitations & Liability" />
              <p>
                To the extent permitted by law, ClickyTour is not liable for indirect, incidental, or consequential damages arising
                from platform use, third-party actions, or business interruption.
              </p>
            </section>

            <section>
              <SectionTitle title="7. Suspension & Termination" />
              <p>
                We may suspend or terminate access for violations of these Terms, legal obligations, abuse, fraud, or risks to
                platform integrity and user safety.
              </p>
            </section>

            <section>
              <SectionTitle title="8. Governing Law & Updates" />
              <p>
                These Terms are governed by applicable laws in the operating jurisdiction of ClickyTour. We may update Terms from
                time to time and publish the current version on this page.
              </p>
            </section>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
