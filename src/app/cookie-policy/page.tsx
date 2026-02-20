import { Hero, PageShell, SectionTitle } from '@/components/site';

export default function CookiePolicyPage() {
  return (
    <PageShell>
      <Hero
        title="Cookie Policy"
        subtitle="How ClickyTour uses cookies and similar technologies to improve functionality and experience."
        ctaA="Manage Preferences"
        ctaB="Read Privacy Policy" ctaHrefA="/privacy-policy" ctaHrefB="/privacy-policy"
      />

      <section className="section section-soft">
        <div className="container max-w-4xl">
          <article className="card p-6 md:p-10 space-y-7 text-slate-700">
            <section>
              <SectionTitle title="1. What Are Cookies?" />
              <p>
                Cookies are small text files stored on your device when you visit a website. They help remember preferences,
                authenticate sessions, and support analytics.
              </p>
            </section>

            <section>
              <SectionTitle title="2. Types of Cookies We Use" />
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Essential cookies:</strong> Required for basic website and account functionality.</li>
                <li><strong>Performance cookies:</strong> Help us understand usage patterns and improve pages.</li>
                <li><strong>Preference cookies:</strong> Remember settings such as language or role context.</li>
                <li><strong>Marketing cookies:</strong> May be used for relevant campaign measurement where permitted.</li>
              </ul>
            </section>

            <section>
              <SectionTitle title="3. Why We Use Cookies" />
              <p>
                Cookies help us keep the platform secure, speed up navigation, personalize content, and optimize user journeys for
                guests, owners, service providers, agents, and PM companies.
              </p>
            </section>

            <section>
              <SectionTitle title="4. Managing Cookie Preferences" />
              <p>
                You can manage or delete cookies through your browser settings. Disabling essential cookies may affect platform
                functionality and access to some features.
              </p>
            </section>

            <section>
              <SectionTitle title="5. Updates to This Policy" />
              <p>
                We may update this Cookie Policy from time to time to reflect legal or technical changes. The latest version is
                always posted here.
              </p>
            </section>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
