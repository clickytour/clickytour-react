'use client';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { TextInput, DateInput, SelectField, NumberInput, CheckboxGroup, TextAreaField } from '@/components/form-fields';
import { PlaceAutocomplete } from '@/components/PlaceAutocomplete';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Advanced Job Application" subtitle="Apply to a specific request with full details." ctaA="Submit" ctaB="Learn More" />
      <section className="section"><div className="container"><div className="card p-6 md:p-8">
        <SectionTitle title="Advanced Job Application" />
        <form className="space-y-4" onSubmit={e => { e.preventDefault(); alert('Thank you! This form is in demo mode.'); }}>
          <div className="grid md:grid-cols-2 gap-4">
            <TextInput label="Request ID" name="requestId" placeholder="From the job listing" />
            <PlaceAutocomplete label="Destination / Region" name="destination" required />
            <TextInput label="First Name" name="firstName" required />
            <TextInput label="Last Name" name="lastName" required />
            <TextInput label="Email" name="email" type="email" required />
            <TextInput label="Phone" name="phone" type="tel" />
            <TextInput label="City" name="city" />
            <TextInput label="Country" name="country" />
          </div>
          <TextInput label="Roles (comma-separated)" name="roles" />
          <TextInput label="Languages (comma-separated)" name="languages" />
          <TextAreaField label="Experience Summary" name="experience" />
          <div className="grid md:grid-cols-2 gap-4">
            <SelectField label="Availability" name="availability" options={[{value:'immediate',label:'Immediately'},{value:'seasonal',label:'Seasonal'},{value:'parttime',label:'Part-time'},{value:'fulltime',label:'Full-time'}]} />
            <TextInput label="Availability Dates" name="availDates" />
          </div>
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="rounded" /> I consent to processing my data.</label>
          <button type="submit" className="px-6 py-3 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-700">Submit</button>
        </form>
      </div></div></section>
    </PageShell>
  );
}