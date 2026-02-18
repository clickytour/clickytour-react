export function CookiesSections() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 pb-12 pt-4">
      <div className="rounded-2xl border border-slate-300 bg-white p-5 md:p-8">
        <p className="text-sm text-slate-500">Home › <span className="font-semibold text-slate-700">Cookie Policy</span></p>

        <h1 className="mt-3 text-4xl font-semibold leading-tight text-slate-900 md:text-[56px] md:leading-none">
          Cookie Policy
        </h1>
        <p className="mt-3 text-sm text-slate-500">Last updated: February 2026</p>

        <div className="mt-8 space-y-8 text-slate-700 leading-relaxed">
          <Section title="What Are Cookies?">
            <p>Cookies are small text files placed on your device when you visit a website. They help the site remember your preferences, understand how you use the site, and improve your experience. Villa4you (villa4you.gr) uses cookies in accordance with the EU ePrivacy Directive and GDPR.</p>
          </Section>

          <Section title="Cookie Consent">
            <p>When you first visit our website, a cookie consent banner will appear allowing you to accept or customize your cookie preferences. You can change your preferences at any time through your browser settings or by revisiting our cookie settings panel.</p>
            <p className="mt-2">Essential cookies do not require consent as they are strictly necessary for the website to function.</p>
          </Section>

          <Section title="Types of Cookies We Use">
            <div className="mt-4 space-y-6">
              <CookieCategory
                name="🔒 Essential Cookies"
                description="Strictly necessary for the website to function. Cannot be disabled."
                cookies={[
                  { name: "session_id", purpose: "User session management", duration: "Session" },
                  { name: "csrf_token", purpose: "Security — prevents cross-site request forgery", duration: "Session" },
                  { name: "cookie_consent", purpose: "Stores your cookie consent preferences", duration: "1 year" },
                  { name: "locale", purpose: "Language preference", duration: "1 year" },
                ]}
              />
              <CookieCategory
                name="📊 Analytics Cookies"
                description="Help us understand how visitors use our website, so we can improve content and user experience. Requires consent."
                cookies={[
                  { name: "_ga", purpose: "Google Analytics — distinguishes users", duration: "2 years" },
                  { name: "_ga_*", purpose: "Google Analytics — maintains session state", duration: "2 years" },
                  { name: "_gid", purpose: "Google Analytics — distinguishes users", duration: "24 hours" },
                ]}
              />
              <CookieCategory
                name="📢 Marketing Cookies"
                description="Used to deliver relevant advertisements and track campaign effectiveness. Requires consent."
                cookies={[
                  { name: "_fbp", purpose: "Facebook Pixel — ad targeting and measurement", duration: "3 months" },
                  { name: "_gcl_au", purpose: "Google Ads — conversion tracking", duration: "3 months" },
                  { name: "NID", purpose: "Google — ad personalization", duration: "6 months" },
                ]}
              />
            </div>
          </Section>

          <Section title="How to Manage Cookies">
            <p>You can control cookies through several methods:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li><strong>Cookie banner:</strong> Adjust preferences when prompted on first visit</li>
              <li><strong>Browser settings:</strong> Most browsers allow you to block or delete cookies via their settings menu</li>
              <li><strong>Opt-out tools:</strong> Use <a href="https://tools.google.com/dlpage/gaoptout" className="text-sky-600 underline hover:text-sky-800" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a> or <a href="https://www.youronlinechoices.com/" className="text-sky-600 underline hover:text-sky-800" target="_blank" rel="noopener noreferrer">Your Online Choices</a></li>
            </ul>
            <p className="mt-2 text-sm text-slate-500">Note: Disabling certain cookies may affect website functionality.</p>
          </Section>

          <Section title="Third-Party Cookies">
            <p>Some cookies are set by third-party services that appear on our pages (e.g., Google Analytics, Facebook). We do not control these cookies. Please refer to the respective third-party privacy policies for more information.</p>
          </Section>

          <Section title="Updates to This Policy">
            <p>We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business operations. Please check this page periodically for updates.</p>
          </Section>

          <Section title="Contact">
            <p>For questions about our use of cookies, please contact:</p>
            <p className="mt-2">Email: privacy@villa4you.gr<br />Data Protection Officer: dpo@villa4you.gr</p>
            <p className="mt-2">Also see our <a href="/privacy" className="text-sky-600 underline hover:text-sky-800">Privacy Policy</a> for full details on data processing.</p>
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

function CookieCategory({ name, description, cookies }: { name: string; description: string; cookies: { name: string; purpose: string; duration: string }[] }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
      <p className="mt-1 text-sm text-slate-600">{description}</p>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left text-slate-500">
              <th className="pb-2 pr-4 font-medium">Cookie</th>
              <th className="pb-2 pr-4 font-medium">Purpose</th>
              <th className="pb-2 font-medium">Duration</th>
            </tr>
          </thead>
          <tbody>
            {cookies.map((c) => (
              <tr key={c.name} className="border-b border-slate-100">
                <td className="py-2 pr-4 font-mono text-xs text-slate-800">{c.name}</td>
                <td className="py-2 pr-4 text-slate-600">{c.purpose}</td>
                <td className="py-2 text-slate-600">{c.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
