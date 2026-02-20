'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { MediaPartnersDiagram } from '@/components/diagrams';

function PartnershipForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', type: 'press', message: '', websiteHp: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');
  const u = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form.websiteHp) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/forms/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, _meta: { source: 'media-partnerships', submittedAt: new Date().toISOString() } }),
      });
      setStatus(res.ok ? 'ok' : 'err');
    } catch { setStatus('err'); }
  }

  if (status === 'ok') return (
    <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
      <p className="text-2xl">✅</p>
      <h3 className="mt-2 text-lg font-bold text-green-800">Thank you!</h3>
      <p className="mt-1 text-sm text-green-700">We&apos;ll review your inquiry and get back to you within 2 business days.</p>
    </div>
  );

  const inputClass = "w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="websiteHp" value={form.websiteHp} onChange={e => u('websiteHp', e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Your Name *</label>
          <input className={inputClass} required value={form.name} onChange={e => u('name', e.target.value)} />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Email *</label>
          <input type="email" className={inputClass} required value={form.email} onChange={e => u('email', e.target.value)} />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Company / Organization</label>
          <input className={inputClass} value={form.company} onChange={e => u('company', e.target.value)} />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Partnership Type *</label>
          <select className={inputClass} required value={form.type} onChange={e => u('type', e.target.value)}>
            <option value="press">Press & Media</option>
            <option value="strategic">Strategic Partnership</option>
            <option value="affiliate">Affiliate Program</option>
            <option value="technology">Technology Integration</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">Message *</label>
        <textarea className={`${inputClass} min-h-[120px]`} required value={form.message} onChange={e => u('message', e.target.value)} placeholder="Tell us about your partnership idea..." />
      </div>
      <button type="submit" disabled={status === 'sending'} className="rounded-lg bg-cyan-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-cyan-700 disabled:opacity-50">
        {status === 'sending' ? 'Sending...' : 'Submit Inquiry'}
      </button>
      {status === 'err' && <p className="text-sm text-red-600">Something went wrong. Please try again.</p>}
    </form>
  );
}

export default function Page() {
  return (
    <PageShell>
      <Hero title="Media & Partnerships" subtitle="Collaborate with ClickyTour — press, affiliates, and strategic partners." ctaA="Get Started" ctaB="Learn More" diagram={<MediaPartnersDiagram />} />
      <section className="section"><div className="container">
        <SectionTitle title="Partner With Us" subtitle="Join the ClickyTour ecosystem." />
        <div className="grid md:grid-cols-3 gap-4">
          {[{icon:'📰',t:'Press & Media',d:'Press kits, interviews, brand assets.'},{icon:'🤝',t:'Strategic Partners',d:'Technology, distribution, and market partners.'},{icon:'💰',t:'Affiliate Program',d:'Earn commissions by referring clients.'}].map(c => (
            <div key={c.t} className="card p-5"><p className="text-2xl">{c.icon}</p><h3 className="font-bold mt-2">{c.t}</h3><p className="text-slate-600 text-sm mt-1">{c.d}</p></div>
          ))}
        </div>
      </div></section>

      <section className="section bg-slate-50">
        <div className="container max-w-3xl">
          <SectionTitle title="Get in Touch" subtitle="Interested in partnering with ClickyTour? Fill out the form below." />
          <PartnershipForm />
        </div>
      </section>
    </PageShell>
  );
}