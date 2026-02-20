'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { GuestServiceFormDiagram } from '@/components/diagrams';
import { TextInput, SelectField, NumberInput, TextAreaField } from '@/components/form-fields';
import { PlaceAutocomplete } from '@/components/PlaceAutocomplete';

export default function GuestServiceRequest() {
  return (<Suspense fallback={null}><GuestServiceRequestInner /></Suspense>);
}

const categoryOptions = [
  {value:'cleaning',label:'Cleaning'},{value:'maintenance',label:'Maintenance'},{value:'transport',label:'Transport'},
  {value:'photography',label:'Photography'},{value:'concierge',label:'Concierge'},{value:'wellness',label:'Wellness'},
  {value:'dining',label:'Dining'},{value:'activities',label:'Activities'},{value:'other',label:'Other'},
];

function GuestServiceRequestInner() {
  const searchParams = useSearchParams();
  const [prefilled, setPrefilled] = useState(false);
  const [form, setForm] = useState({
    destination: '', category: '', dateTime: '', adults: '', pickup: '', dropoff: '',
    timeWindow: '', budget: '', firstName: '', lastName: '', email: '', phone: '',
    country: '', notes: '', gdprConsent: false, marketingConsent: false,
  });

  useEffect(() => {
    if (prefilled) return;
    const source = searchParams.get('source');
    if (!source) return;
    setForm(prev => ({
      ...prev,
      destination: searchParams.get('destination') || prev.destination,
      category: searchParams.get('serviceCategory') || prev.category,
      dateTime: searchParams.get('date') || prev.dateTime,
      adults: searchParams.get('adults') || prev.adults,
      email: searchParams.get('email') || prev.email,
      phone: searchParams.get('phone') || prev.phone,
    }));
    setPrefilled(true);
  }, [searchParams, prefilled]);

  const u = (name: string, value: string | boolean) => setForm(prev => ({ ...prev, [name]: value }));
  const source = searchParams.get('source') || 'direct';
  const role = searchParams.get('role') || 'guest-services';

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await fetch('/api/forms/guest-service-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, _meta: { source, role, submittedAt: new Date().toISOString() } }),
      });
      window.location.href = '/thank-you-guest-service-request';
    } catch {
      alert('Something went wrong. Please try again.');
    }
  }

  return (
    <PageShell>
      <Hero title="Request a Local Service in Minutes" subtitle="Tell us what you need and we'll arrange it" ctaA="Submit Request" ctaB="Browse Services" ctaHrefA="/guest-service-request" ctaHrefB="/tours-activities" />
      <section className="section"><div className="container"><div className="card p-6 md:p-8">
        <SectionTitle title="Request a Service" />
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-4">
            <PlaceAutocomplete label="Destination / Region" name="destination" required value={form.destination} onTextChange={v => u('destination', v)} onChange={p => { if (p) { u('destination', p.displayName); } }} />
            <SelectField label="Service Category" name="category" options={categoryOptions} required value={form.category} onChange={e => u('category', e.target.value)} />
            <div><label className="block text-sm font-semibold text-slate-700 mb-1">Date & Time</label><input type="datetime-local" name="dateTime" className="w-full rounded-xl border border-slate-200 px-4 py-3" value={form.dateTime} onChange={e => u('dateTime', e.target.value)} /></div>
            <NumberInput label="Adults" name="adults" min={1} value={form.adults} onChange={e => u('adults', e.target.value)} />
            <TextInput label="Pickup (optional)" name="pickup" value={form.pickup} onChange={e => u('pickup', e.target.value)} />
            <TextInput label="Dropoff (optional)" name="dropoff" value={form.dropoff} onChange={e => u('dropoff', e.target.value)} />
            <SelectField label="Preferred Time Window" name="timeWindow" options={[{value:'none',label:'No preference'},{value:'morning',label:'Morning (08:00-12:00)'},{value:'afternoon',label:'Afternoon (12:00-17:00)'},{value:'evening',label:'Evening (17:00-22:00)'},{value:'night',label:'Night (22:00-02:00)'}]} value={form.timeWindow} onChange={e => u('timeWindow', e.target.value)} />
            <NumberInput label="Budget (EUR)" name="budget" value={form.budget} onChange={e => u('budget', e.target.value)} />
          </div>
          <hr className="border-slate-200" />
          <div className="grid md:grid-cols-2 gap-4">
            <TextInput label="First Name" name="firstName" value={form.firstName} onChange={e => u('firstName', e.target.value)} />
            <TextInput label="Last Name" name="lastName" value={form.lastName} onChange={e => u('lastName', e.target.value)} />
            <TextInput label="Email" name="email" type="email" required value={form.email} onChange={e => u('email', e.target.value)} />
            <TextInput label="Phone" name="phone" type="tel" value={form.phone} onChange={e => u('phone', e.target.value)} />
            <TextInput label="Country" name="country" value={form.country} onChange={e => u('country', e.target.value)} />
          </div>
          <TextAreaField label="Notes" name="notes" placeholder="Any special requests..." value={form.notes} onChange={e => u('notes', e.target.value)} />
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="rounded" checked={form.gdprConsent} onChange={e => u('gdprConsent', e.target.checked)} /> I consent to processing my data for this service request.</label>
            <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="rounded" checked={form.marketingConsent} onChange={e => u('marketingConsent', e.target.checked)} /> Keep me posted about offers and tips.</label>
          </div>
          <button type="submit" className="px-6 py-3 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-700">Submit Request</button>
        </form>
      </div></div></section>
    </PageShell>
  );
}
