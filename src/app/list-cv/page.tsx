'use client';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { TextInput, DateInput, SelectField, NumberInput, CheckboxGroup, TextAreaField } from '@/components/form-fields';
import { PlaceAutocomplete } from '@/components/PlaceAutocomplete';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Apply as Staff / Contractor" subtitle="Submit your CV and get matched with opportunities." ctaA="Submit" ctaB="Learn More" />
      <section className="section"><div className="container"><div className="card p-6 md:p-8">
        <SectionTitle title="Apply as Staff / Contractor" />
        <form className="space-y-4" onSubmit={e => { e.preventDefault(); alert('Thank you! This form is in demo mode.'); }}>
          <div className="grid md:grid-cols-2 gap-4">
            <TextInput label="First Name" name="firstName" required />
            <TextInput label="Last Name" name="lastName" required />
            <TextInput label="Email" name="email" type="email" required />
            <TextInput label="Phone" name="phone" type="tel" />
            <TextInput label="Location (City, Country)" name="location" required />
            <DateInput label="Available From" name="availFrom" />
            <DateInput label="Available To" name="availTo" />
            <TextInput label="Desired Role" name="role" />
            <PlaceAutocomplete label="Region" name="region" />
          </div>
          <CheckboxGroup label="Roles Interested" name="roles" options={['Driver','Tour Guide','Cleaner','Check-in / Host','Maintenance','Cook / Kitchen','Pool & Garden','Security','Concierge','Admin']} />
          <TextAreaField label="Experience & Skills" name="experience" />
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="rounded" /> I consent to processing my data for job matching.</label>
          <button type="submit" className="px-6 py-3 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-700">Submit</button>
        </form>
      </div></div></section>
    </PageShell>
  );
}