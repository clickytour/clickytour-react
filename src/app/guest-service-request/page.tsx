'use client';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { GuestServiceFormDiagram } from '@/components/diagrams';
import { TextInput, SelectField, NumberInput, TextAreaField } from '@/components/form-fields';

export default function GuestServiceRequest() {
  return (
    <PageShell>
      <Hero title="Request a Local Service in Minutes" subtitle="Tell us what you need and we'll arrange it" ctaA="Submit Request" ctaB="Browse Services" />
      <section className="section"><div className="container"><div className="card p-6 md:p-8">
        <SectionTitle title="Request a Service" />
        <form className="space-y-4" onSubmit={e => { e.preventDefault(); alert('Thank you! This form is in demo mode.'); }}>
          <div className="grid md:grid-cols-2 gap-4">
            <TextInput label="Destination / Region" name="destination" required />
            <SelectField label="Service Category" name="category" options={[{value:'cleaning',label:'Cleaning'},{value:'maintenance',label:'Maintenance'},{value:'transport',label:'Transport'},{value:'photography',label:'Photography'},{value:'concierge',label:'Concierge'},{value:'wellness',label:'Wellness'},{value:'dining',label:'Dining'},{value:'activities',label:'Activities'},{value:'other',label:'Other'}]} required />
            <div><label className="block text-sm font-semibold text-slate-700 mb-1">Date & Time</label><input type="datetime-local" name="dateTime" className="w-full rounded-xl border border-slate-200 px-4 py-3" /></div>
            <NumberInput label="Adults" name="adults" min={1} />
            <TextInput label="Pickup (optional)" name="pickup" />
            <TextInput label="Dropoff (optional)" name="dropoff" />
            <SelectField label="Preferred Time Window" name="timeWindow" options={[{value:'none',label:'No preference'},{value:'morning',label:'Morning (08:00–12:00)'},{value:'afternoon',label:'Afternoon (12:00–17:00)'},{value:'evening',label:'Evening (17:00–22:00)'},{value:'night',label:'Night (22:00–02:00)'}]} />
            <NumberInput label="Budget (€)" name="budget" />
          </div>
          <hr className="border-slate-200" />
          <div className="grid md:grid-cols-2 gap-4">
            <TextInput label="First Name" name="firstName" />
            <TextInput label="Last Name" name="lastName" />
            <TextInput label="Email" name="email" type="email" required />
            <TextInput label="Phone" name="phone" type="tel" />
            <TextInput label="Country" name="country" />
          </div>
          <TextAreaField label="Notes" name="notes" placeholder="Any special requests..." />
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="rounded" /> I consent to processing my data for this service request.</label>
            <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="rounded" /> Keep me posted about offers and tips.</label>
          </div>
          <button type="submit" className="px-6 py-3 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-700">Submit Request</button>
        </form>
      </div></div></section>
    </PageShell>
  );
}