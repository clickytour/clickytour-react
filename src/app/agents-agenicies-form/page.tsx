'use client';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { TextInput, SelectField, TextAreaField } from '@/components/form-fields';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Agent / Agency Registration" subtitle="Register as a ClickyTour agent or agency." ctaA="Submit" ctaB="Learn More" />
      <section className="section"><div className="container"><div className="card p-6 md:p-8">
        <SectionTitle title="Agent / Agency Registration" />
        <form className="space-y-4" onSubmit={e => { e.preventDefault(); alert('Thank you! This form is in demo mode.'); }}>
          <div className="grid md:grid-cols-2 gap-4">
            <TextInput label="Full Name" name="name" required />
            <TextInput label="Email" name="email" type="email" required />
            <TextInput label="Phone" name="phone" type="tel" />
            <TextInput label="Company / Property" name="company" />
          </div>
          <TextAreaField label="Message" name="message" placeholder="Tell us more..." />
          <button type="submit" className="px-6 py-3 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-700">Submit</button>
        </form>
      </div></div></section>
    </PageShell>
  );
}