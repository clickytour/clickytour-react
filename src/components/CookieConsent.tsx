"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const COOKIE_CONSENT_KEY = "villa4you_cookie_consent";

type ConsentValue = "accepted" | "preferences";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  const setConsent = (value: ConsentValue) => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-4 py-4 shadow-[0_-8px_24px_rgba(15,23,42,0.08)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-slate-700">
          We use essential and analytics cookies to improve your experience. You can accept cookies or manage
          preferences in our <Link href="/privacy-policy" className="font-medium text-blue-700 hover:text-blue-800">Privacy Policy</Link>.
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => setConsent("preferences")}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Manage Preferences
          </button>
          <button
            type="button"
            onClick={() => setConsent("accepted")}
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
