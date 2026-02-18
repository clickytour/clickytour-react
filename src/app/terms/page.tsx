import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Villa4you",
  description: "Read the terms and conditions for using the Villa4you vacation rental platform.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f3f5f8] py-10">
      <div className="mx-auto max-w-[900px] px-4">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h1 className="text-3xl font-semibold text-slate-900">Terms of Service</h1>
          <p className="mt-3 text-sm text-slate-600">Last updated: February 2026</p>

          <div className="prose prose-slate mt-8 max-w-none prose-headings:font-semibold prose-a:text-blue-700">
            <p>
              These Terms of Service ("Terms") govern your access to and use of the Villa4you platform. By using our
              website and services, you agree to be bound by these Terms.
            </p>

            <h2>1. About the Service</h2>
            <p>
              Villa4you is a vacation rental listing and booking platform connecting guests with accommodation listings
              in Greece and other supported destinations.
            </p>

            <h2>2. Eligibility and Accounts</h2>
            <ul>
              <li>You must provide accurate and complete information when creating an account or booking.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You are responsible for all activity under your account.</li>
            </ul>

            <h2>3. User Obligations</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the platform for unlawful, fraudulent, or abusive purposes</li>
              <li>Submit false or misleading information</li>
              <li>Interfere with platform security, operations, or other users&apos; experience</li>
              <li>Violate applicable local, national, or EU laws and regulations</li>
            </ul>

            <h2>4. Booking Terms</h2>
            <ul>
              <li>All bookings are subject to availability and confirmation.</li>
              <li>Prices, taxes, and fees are shown during the booking process and may vary by listing.</li>
              <li>Cancellation, refund, and modification policies may differ per property and booking terms.</li>
              <li>Guests are responsible for reviewing property-specific rules before booking.</li>
            </ul>

            <h2>5. Payments</h2>
            <p>
              Payments are processed through authorized payment providers. By submitting payment details, you confirm
              you are authorized to use the selected payment method.
            </p>

            <h2>6. Listings and Availability</h2>
            <p>
              We strive to keep listings accurate and up to date, but we do not guarantee that all listing information
              is error-free or continuously available.
            </p>

            <h2>7. Liability and Disclaimers</h2>
            <ul>
              <li>The platform is provided on an "as is" and "as available" basis.</li>
              <li>
                To the extent permitted by law, Villa4you is not liable for indirect, incidental, or consequential
                damages arising from use of the platform.
              </li>
              <li>
                Villa4you&apos;s total liability for any claim related to a booking or service is limited to the amount paid
                through the platform for the relevant booking.
              </li>
            </ul>

            <h2>8. Termination</h2>
            <p>
              We may suspend or terminate access to the platform where users violate these Terms, applicable law, or
              platform policies.
            </p>

            <h2>9. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of the platform after updates become effective
              constitutes acceptance of the revised Terms.
            </p>

            <h2>10. Governing Law and Jurisdiction</h2>
            <p>
              These Terms are governed by the laws of Greece. Any disputes shall be subject to the competent courts of
              Greece, unless otherwise required by mandatory consumer protection law.
            </p>

            <h2>11. Contact</h2>
            <p>
              For questions about these Terms, contact <a href="mailto:info@villa4you.gr">info@villa4you.gr</a>.
              <br />
              <strong>Villa4you, Lefkada, Greece</strong>
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
