'use client';
import { useState } from 'react';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { PMCApplyFormDiagram } from '@/components/diagrams';
import { TextInput, DateInput, SelectField, NumberInput, TextAreaField } from '@/components/form-fields';

export default function PropertyManagementCompanyForm() {
  const [intent, setIntent] = useState('list');
  return (
    <PageShell>
      <Hero title="Work with ClickyTour as a PMC" subtitle="Property Management Company — Request Form" ctaA="Submit" ctaB="Learn More" diagram={<PMCApplyFormDiagram />} />
      <section className="section"><div className="container"><div className="card p-6 md:p-8">
        <SectionTitle title="PMC Request Form" />
        <form className="space-y-6" onSubmit={e => { e.preventDefault(); alert('Thank you! This form is in demo mode.'); }}>
          <div className="mb-4"><label className="block text-sm font-semibold text-slate-700 mb-1">What do you want to do? *</label><select className="w-full rounded-xl border border-slate-200 px-4 py-3" value={intent} onChange={e => setIntent(e.target.value)}><option value="list">List your properties</option><option value="matched">Get matched with owners</option><option value="collab">Collaboration / partnership</option><option value="staff">Staff finding (contractors)</option><option value="services">Request services</option></select></div>
          <div className="grid md:grid-cols-2 gap-4">
            <TextInput label="Company Name" name="companyName" required />
            <TextInput label="Regions Managed" name="regions" required />
            <TextInput label="Email" name="email" type="email" required />
            <TextInput label="Phone" name="phone" type="tel" />
          </div>
          {intent === 'list' && <div className="grid md:grid-cols-2 gap-4">
            <NumberInput label="Number of Units" name="units" />
            <TextInput label="PMS Used" name="pms" />
            <SelectField label="Use Planyo?" name="planyo" options={[{value:'yes',label:'Yes'},{value:'no',label:'No'}]} />
          </div>}
          {(intent === 'matched' || intent === 'collab') && <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <NumberInput label="Onboarding Capacity / month" name="capacity" />
              <TextInput label="Integrations (comma-sep)" name="integrations" />
              <TextInput label="Collaboration Models" name="models" />
              <TextInput label="SLAs" name="slas" />
              <TextInput label="Expected Volumes" name="volumes" />
            </div>
            <TextAreaField label="Notes" name="notes" />
          </div>}
          {intent === 'staff' && <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <TextInput label="Roles Needed" name="roles" />
              <NumberInput label="Headcount" name="headcount" />
              <TextInput label="Date Range" name="dateRange" />
              <TextInput label="Location" name="location" />
              <TextInput label="Rate Range (€)" name="rateRange" />
            </div>
            <TextAreaField label="Notes" name="staffNotes" />
          </div>}
          {intent === 'services' && <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <TextInput label="Category" name="category" />
              <DateInput label="Deadline" name="deadline" />
            </div>
            <TextAreaField label="Description" name="description" />
          </div>}
          <hr className="border-slate-200" />
          <div className="grid md:grid-cols-2 gap-4">
            <TextInput label="Target Regions" name="targetRegions" />
            <TextInput label="Unit Profile" name="unitProfile" />
            <TextInput label="References (links)" name="references" />
          </div>
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="rounded" /> I consent to processing my data.</label>
            <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="rounded" /> Send me PMC updates and offers.</label>
          </div>
          <button type="submit" className="px-6 py-3 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-700">Submit Request</button>
        </form>
      </div></div></section>
    </PageShell>
  );
}