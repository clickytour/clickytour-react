'use client';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { TextInput, DateInput, SelectField, NumberInput, CheckboxGroup, TextAreaField } from '@/components/form-fields';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Apply Once — Get Matched Across the ClickyTour Network" subtitle="Complete your full application for the best matches." ctaA="Submit" ctaB="Learn More" />
      <section className="section"><div className="container"><div className="card p-6 md:p-8">
        <SectionTitle title="Apply Once — Get Matched Across the ClickyTour Network" />
        <form className="space-y-4" onSubmit={e => { e.preventDefault(); alert('Thank you! This form is in demo mode.'); }}>
          <div className="grid md:grid-cols-2 gap-4">
            <TextInput label="First Name" name="firstName" required />
            <TextInput label="Last Name" name="lastName" required />
            <TextInput label="Email" name="email" type="email" required />
            <TextInput label="Phone" name="phone" type="tel" />
            <SelectField label="Preferred Chat App" name="chatApp" options={[{value:'whatsapp',label:'WhatsApp'},{value:'viber',label:'Viber'},{value:'telegram',label:'Telegram'},{value:'messenger',label:'Messenger'}]} />
            <SelectField label="Visibility" name="visibility" options={[{value:'public',label:'Public — visible to all'},{value:'private',label:'Private — matched only'}]} />
            <TextInput label="City" name="city" required />
            <TextInput label="Country" name="country" required />
          </div>
          <TextInput label="Roles Interested (comma-separated)" name="roles" placeholder="e.g., Cleaner, Check-in Agent" required />
          <TextInput label="Languages (comma-separated)" name="languages" placeholder="e.g., English, Greek" />
          <TextAreaField label="Experience Summary" name="experience" />
          <div className="grid md:grid-cols-2 gap-4">
            <SelectField label="Availability Type" name="availType" options={[{value:'immediate',label:'Immediately'},{value:'seasonal',label:'Seasonal'},{value:'parttime',label:'Part-time'},{value:'fulltime',label:'Full-time'}]} />
            <TextInput label="Availability Dates" name="availDates" placeholder="e.g., May–October 2026" />
          </div>
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="rounded" /> I consent to processing my data for job matching.</label>
          <button type="submit" className="px-6 py-3 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-700">Submit</button>
        </form>
      </div></div></section>
    </PageShell>
  );
}