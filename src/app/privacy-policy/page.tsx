import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Villa4you",
  description: "Learn how Villa4you collects, uses, and protects personal data in accordance with GDPR.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f3f5f8] py-10">
      <div className="mx-auto max-w-[900px] px-4">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h1 className="text-3xl font-semibold text-slate-900">Privacy Policy</h1>
          <p className="mt-3 text-sm text-slate-600">Last updated: February 2026</p>

          <div className="prose prose-slate mt-8 max-w-none prose-headings:font-semibold prose-a:text-blue-700">
            <p>
              Villa4you ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, store, and protect your personal data when you use our vacation rental platform.
            </p>

            <h2>1. Who We Are</h2>
            <p>
              Data Controller: <strong>Villa4you, Lefkada, Greece</strong>
              <br />
              Contact: <a href="mailto:info@villa4you.gr">info@villa4you.gr</a>
            </p>

            <h2>2. Data We Collect</h2>
            <p>We may collect the following categories of personal data:</p>
            <ul>
              <li>Identity and contact details (name, email, phone number)</li>
              <li>Booking details (check-in/check-out dates, guest preferences, transaction references)</li>
              <li>Account data (login information, saved properties, communication history)</li>
              <li>Technical data (IP address, device type, browser type, usage analytics)</li>
              <li>Customer support messages and service-related communications</li>
            </ul>

            <h2>3. How We Use Your Data</h2>
            <p>We process personal data to:</p>
            <ul>
              <li>Provide and manage bookings and platform services</li>
              <li>Communicate with users about reservations, updates, and support</li>
              <li>Improve platform functionality, quality, and security</li>
              <li>Comply with legal obligations, including tax and regulatory requirements</li>
              <li>Prevent fraud, abuse, and unauthorized access</li>
            </ul>

            <h2>4. Legal Basis (GDPR)</h2>
            <p>
              Depending on the purpose, we rely on one or more legal bases under GDPR: performance of a contract,
              legal obligation, legitimate interest, and consent (for optional cookies/marketing where applicable).
            </p>

            <h2>5. Cookies and Similar Technologies</h2>
            <p>
              We use cookies and similar technologies to operate the site, remember preferences, and analyze traffic.
              Essential cookies are required for core platform functionality. Non-essential cookies are used only with
              your consent.
            </p>

            <h2>6. Third-Party Services</h2>
            <p>We may share limited personal data with trusted third parties such as:</p>
            <ul>
              <li>Payment processors</li>
              <li>Hosting and infrastructure providers</li>
              <li>Analytics and error-monitoring providers</li>
              <li>Communication tools (email/customer support)</li>
            </ul>
            <p>
              These providers process data under contractual safeguards and only for defined purposes, in line with
              applicable data protection laws.
            </p>

            <h2>7. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to fulfill the purposes described in this policy,
              including legal, accounting, and compliance obligations.
            </p>

            <h2>8. Your Rights Under GDPR</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request erasure of data where legally applicable</li>
              <li>Restrict or object to certain processing activities</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time (where processing is based on consent)</li>
              <li>Lodge a complaint with your local data protection authority</li>
            </ul>

            <h2>9. Security</h2>
            <p>
              We use reasonable technical and organizational security measures to protect personal data against
              unauthorized access, loss, misuse, or alteration.
            </p>

            <h2>10. Contact</h2>
            <p>
              For privacy-related requests, contact us at <a href="mailto:info@villa4you.gr">info@villa4you.gr</a>.
              <br />
              <strong>Villa4you, Lefkada, Greece</strong>
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
