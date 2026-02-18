"use client";

import { useState } from "react";

const subjects = [
  "General Inquiry",
  "Booking Question",
  "Property Management",
  "Collaboration / Partnership",
  "Technical Support",
  "Complaint / Feedback",
  "Other",
];

export function ContactSections() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="mx-auto max-w-[1280px] px-4 pb-12 pt-4">
      <div className="rounded-2xl border border-slate-300 bg-white p-5 md:p-8">
        <p className="text-sm text-slate-500">Home › <span className="font-semibold text-slate-700">Contact Us</span></p>

        <h1 className="mt-3 text-4xl font-semibold leading-tight text-slate-900 md:text-[56px] md:leading-none">
          Get in Touch
        </h1>
        <p className="mt-3 text-lg text-slate-600 md:text-[21px]">
          Have a question about a booking, property, or partnership? We&apos;d love to hear from you.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-semibold text-slate-900">Send Us a Message</h2>
            {submitted ? (
              <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-6 text-center">
                <p className="text-lg font-medium text-green-800">Thank you for your message!</p>
                <p className="mt-2 text-sm text-green-700">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-700">Full Name *</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400"
                    placeholder="John Doe"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-slate-700">Email *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400"
                      placeholder="+30 2310 000 000"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Subject *</label>
                  <select
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900"
                  >
                    <option value="">Select a subject…</option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400"
                    placeholder="Tell us how we can help…"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-xl bg-sky-600 px-8 py-3 font-semibold text-white transition hover:bg-sky-700"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Info Column */}
          <div className="space-y-6">
            {/* Office Info */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-semibold text-slate-900">Office Information</h2>
              <div className="mt-4 space-y-3 text-slate-700">
                <div>
                  <p className="font-medium">📍 Address</p>
                  <p className="text-sm">Villa4you / ClickyTour<br />Kassandra, Halkidiki 63077<br />Greece</p>
                </div>
                <div>
                  <p className="font-medium">📞 Phone</p>
                  <p className="text-sm">+30 2374 0 12345</p>
                </div>
                <div>
                  <p className="font-medium">✉️ Email</p>
                  <p className="text-sm">info@villa4you.gr</p>
                </div>
                <div>
                  <p className="font-medium">💬 WhatsApp</p>
                  <p className="text-sm">+30 694 000 0000</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-semibold text-slate-900">Business Hours</h2>
              <div className="mt-4 space-y-1 text-sm text-slate-700">
                <div className="flex justify-between"><span>Monday – Friday</span><span className="font-medium">09:00 – 18:00</span></div>
                <div className="flex justify-between"><span>Saturday</span><span className="font-medium">10:00 – 14:00</span></div>
                <div className="flex justify-between"><span>Sunday</span><span className="text-slate-400">Closed</span></div>
              </div>
              <p className="mt-3 text-xs text-slate-500">* Peak season (Jun–Sep): extended hours, 7 days a week.</p>
            </div>

            {/* Map Placeholder */}
            <div className="flex h-52 items-center justify-center rounded-2xl border border-slate-200 bg-slate-100">
              <div className="text-center text-slate-400">
                <p className="text-4xl">🗺️</p>
                <p className="mt-2 text-sm font-medium">Map — coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
