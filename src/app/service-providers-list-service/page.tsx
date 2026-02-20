'use client';
import { PageShell } from '@/components/site';
import { SPListServiceDiagram } from '@/components/diagrams';
import { ServisApplyForm } from '@/components/forms';

const subtitle = "Join ClickyTour and make your service visible to tourists, property owners, and agents — in just a few steps.";

export default function ServiceProvidersListService() {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-14 md:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start">
            <div>
              <p className="text-cyan-200 text-xs font-semibold uppercase tracking-[0.1em]">For Service Providers</p>
              <h1 className="text-4xl md:text-5xl font-extrabold mt-2">Your Service in Front of Thousands of Customers</h1>
              <p className="text-cyan-100 mt-4 max-w-3xl">{subtitle}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="#provider-form" className="btn-primary">Start Listing Now</a>
                <a href="/support" className="btn-secondary">Contact Support</a>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-cyan-200/30 bg-white/10 px-3 py-1 text-xs text-cyan-100">Structured onboarding</span>
                <span className="rounded-full border border-cyan-200/30 bg-white/10 px-3 py-1 text-xs text-cyan-100">GDPR-ready consent</span>
                <span className="rounded-full border border-cyan-200/30 bg-white/10 px-3 py-1 text-xs text-cyan-100">Turnstile-ready captcha</span>
              </div>
            </div>
            <div className="hidden lg:block max-w-sm"><SPListServiceDiagram /></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-3 md:grid-cols-3 mb-8">
            {[
              { step: "1", title: "Create account", desc: "Start onboarding with your business details." },
              { step: "2", title: "Fill service details", desc: "Add pricing, description, and images." },
              { step: "3", title: "Publish & earn", desc: "Go live and start receiving bookings." },
            ].map((s) => (
              <div key={s.step} className="card p-4">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-600 text-sm font-bold text-white">{s.step}</div>
                <h3 className="mt-2 font-bold text-slate-900">{s.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="provider-form">
        <ServisApplyForm />
      </div>

      <section className="section">
        <div className="container">
          <div className="rounded-2xl bg-[#0F2B46] text-white p-7 md:p-10">
            <h2 className="text-2xl md:text-3xl font-extrabold">Ready to move forward?</h2>
            <p className="text-cyan-100 mt-2">Take the next step and strengthen your provider visibility on ClickyTour.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="#provider-form" className="btn-primary">Start Listing Now</a>
              <a href="/support" className="btn-secondary">Contact Support</a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
