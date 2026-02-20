'use client';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { TextInput, DateInput, SelectField, NumberInput, CheckboxGroup, TextAreaField } from '@/components/form-fields';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Quick Application" subtitle="Apply in 2 minutes — get matched with opportunities." ctaA="Submit" ctaB="Learn More" />
      <section className="section"><div className="container"><div className="card p-6 md:p-8">
        <SectionTitle title="Quick Application" />
        <form className="space-y-4" onSubmit={e => { e.preventDefault(); alert('Thank you! This form is in demo mode.'); }}>
          <div className="grid md:grid-cols-2 gap-4">
            <TextInput label="First Name" name="firstName" required />
            <TextInput label="Last Name" name="lastName" required />
            <TextInput label="Email" name="email" type="email" required />
            <TextInput label="Phone" name="phone" type="tel" />
            <SelectField label="Preferred Chat App" name="chatApp" options={[{value:'whatsapp',label:'WhatsApp'},{value:'viber',label:'Viber'},{value:'telegram',label:'Telegram'},{value:'messenger',label:'Messenger'}]} />
            <SelectField label="Availability" name="availability" options={[{value:'immediate',label:'Immediately'},{value:'1week',label:'Within 1 week'},{value:'2weeks',label:'Within 2 weeks'},{value:'1month',label:'Within 1 month'}]} />
          </div>
          <TextAreaField label="Availability Notes" name="availNotes" placeholder="Any dates or preferences..." />
          <TextAreaField label="Message / Notes (optional)" name="notes" placeholder="Tell us about yourself..." />
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="rounded" /> I confirm the information is correct and allow ClickyTour to process this application.</label>
          <button type="submit" className="px-6 py-3 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-700">Submit</button>
        </form>
      </div></div></section>
    </PageShell>
  );
}