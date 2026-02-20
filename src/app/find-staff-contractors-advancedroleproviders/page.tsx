'use client';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { TextInput, SelectField, NumberInput, TextAreaField } from '@/components/form-fields';
import { PlaceAutocomplete } from '@/components/PlaceAutocomplete';
import { FindStaffAdvancedDiagram } from '@/components/diagrams';

export default function Page() {
  return (
    <PageShell>
      <Hero diagram={<FindStaffAdvancedDiagram />} title="Advanced Staff Request" subtitle="Detailed staff request with full specifications as service provider." ctaA="Submit" ctaB="Quick Form" />
      <section className="section"><div className="container"><div className="card p-6 md:p-8">
        <SectionTitle title="Advanced Staff Request Form" />
        <form className="space-y-4" onSubmit={e => { e.preventDefault(); alert('Thank you! This form is in demo mode.'); }}>
          <div className="grid md:grid-cols-2 gap-4">
            <SelectField label="Role Category" name="roleCategory" options={[{value:'cleaning',label:'Cleaning'},{value:'checkin',label:'Check-in'},{value:'maintenance',label:'Maintenance'},{value:'garden',label:'Pool & Garden'},{value:'cooking',label:'Cooking'},{value:'guide',label:'Tour Guide'},{value:'driver',label:'Driver'},{value:'security',label:'Security'},{value:'admin',label:'Admin'},{value:'other',label:'Other'}]} required />
            <TextInput label="Role" name="role" required />
            <PlaceAutocomplete label="Destination / Region" name="destination" required />
            
            <SelectField label="Work Frequency" name="frequency" options={[{value:'daily',label:'Daily'},{value:'weekly',label:'Weekly'},{value:'biweekly',label:'Bi-weekly'},{value:'monthly',label:'Monthly'},{value:'seasonal',label:'Seasonal'},{value:'ondemand',label:'On Demand'}]} />
            <SelectField label="Availability" name="availability" options={[{value:'immediate',label:'Immediately'},{value:'1week',label:'Within 1 week'},{value:'1month',label:'Within 1 month'},{value:'seasonal',label:'Seasonal'},{value:'flexible',label:'Flexible'}]} />
            <TextInput label="Availability Dates" name="availDates" />
            <NumberInput label="Budget Min" name="budgetMin" />
            <NumberInput label="Budget Max" name="budgetMax" />
            <SelectField label="Currency" name="currency" options={[{value:'EUR',label:'EUR'},{value:'USD',label:'USD'},{value:'GBP',label:'GBP'}]} />
          </div>
          <TextInput label="Title" name="title" required />
          <TextAreaField label="Description" name="description" />
          <TextAreaField label="Service Requirements" name="serviceReqs" placeholder="Skills, certifications, tools..." />
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="rounded" /> I consent to processing my data.</label>
          <button type="submit" className="px-6 py-3 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-700">Submit Request</button>
        </form>
      </div></div></section>
    </PageShell>
  );
}