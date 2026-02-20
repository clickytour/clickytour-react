"use client";

import Link from "next/link";

/**
 * Subscription gate overlay — shown when unsubscribed user tries to access gated content.
 * Used inline on profile pages (contact section) and as modal from card "Contact Info" clicks.
 */
export function SubscriptionGate({
  businessName,
  variant = "inline",
  onClose,
}: {
  businessName?: string;
  variant?: "inline" | "modal";
  onClose?: () => void;
}) {
  const content = (
    <div className="rounded-2xl border border-cyan-200 bg-gradient-to-br from-cyan-50 to-white p-6 text-center">
      {/* Lock icon */}
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-100">
        <svg className="h-7 w-7 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
      </div>

      <h3 className="text-lg font-bold text-slate-900">
        {businessName ? `Contact ${businessName}` : "Unlock Contact Information"}
      </h3>
      <p className="mt-2 text-sm text-slate-600 max-w-sm mx-auto">
        Subscribe to ClickyTour to reveal contact details, send direct messages, and access full profiles.
      </p>

      {/* Benefits */}
      <div className="mt-4 space-y-2 text-left max-w-xs mx-auto">
        {[
          "Reveal phone & email instantly",
          "Send direct messages",
          "Access full photo galleries & portfolios",
          "Save favorites & get match notifications",
          "Priority in search results",
        ].map((b) => (
          <div key={b} className="flex items-start gap-2 text-sm text-slate-700">
            <svg className="h-4 w-4 flex-shrink-0 text-cyan-600 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {b}
          </div>
        ))}
      </div>

      {/* CTAs */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/contact"
          className="rounded-full bg-cyan-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-cyan-700 transition shadow-sm"
        >
          Subscribe Now
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
        >
          Register Free
        </Link>
      </div>
      <p className="mt-3 text-xs text-slate-400">Plans start from EUR9.99/month. Cancel anytime.</p>
    </div>
  );

  if (variant === "modal") {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4" onClick={onClose}>
        <div className="relative w-full max-w-md" onClick={(e) => e.stopPropagation()}>
          {onClose && (
            <button onClick={onClose} className="absolute -top-3 -right-3 z-10 rounded-full bg-white p-1 shadow-md hover:bg-slate-50">
              <svg className="h-5 w-5 text-slate-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          {content}
        </div>
      </div>
    );
  }

  return content;
}
