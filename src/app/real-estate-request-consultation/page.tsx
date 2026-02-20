'use client';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { REBuyerFormDiagram2 } from '@/components/diagrams';
import { TextInput, SelectField, TextAreaField } from '@/components/form-fields';

export default function RealEstateRequestConsultation() {
  return (
    <PageShell>
      <Hero title="Talk to an Advisor" subtitle="Get expert guidance on your real estate needs" ctaA="Send Message" ctaB="Call Us" />
      <section className="section"><div className="container"><div className="card p-6 md:p-8">
        <SectionTitle title="Request a Consultation" />
        <form className="space-y-4" onSubmit={e => { e.preventDefault(); alert('Thank you! This form is in demo mode.'); }}>
          <div className="grid md:grid-cols-2 gap-4">
            <TextInput label="Full Name" name="fullName" required />
            <TextInput label="Email" name="email" type="email" required />
            <TextInput label="Phone / WhatsApp" name="phone" type="tel" />
            <SelectField label="Preferred Contact Method" name="contactMethod" options={[{value:'email',label:'Email'},{value:'phone',label:'Phone call'},{value:'whatsapp',label:'WhatsApp'},{value:'telegram',label:'Telegram'},{value:'viber',label:'Viber'},{value:'messenger',label:'Messenger'}]} />
            <SelectField label="What do you need help with?" name="topic" options={[{value:'vacation',label:'Vacation rentals / stays'},{value:'tours',label:'Tours & activities'},{value:'rebuy',label:'Real estate — buy'},{value:'rerent',label:'Real estate — rent long-term'},{value:'other',label:'Other / Not sure'}]} required />
            <TextInput label="Destination / Area (optional)" name="destination" />
          </div>
          <TextAreaField label="Short Details" name="message" placeholder="Tell us more about what you need..." />
          <button type="submit" className="px-6 py-3 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-700">Send Request</button>
        </form>
      </div></div></section>
      <section className="section section-soft"><div className="container">
        <SectionTitle title="What Happens Next" />
        <div className="grid md:grid-cols-3 gap-6">
          {[{n:'1',t:'We Review',d:'Your request is assigned to a local advisor within 24h.'},{n:'2',t:'We Contact You',d:'Expect a call or message via your preferred method.'},{n:'3',t:'We Guide You',d:'From search to closing — we support every step.'}].map(s => <div key={s.n} className="text-center"><div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">{s.n}</div><h3 className="font-bold mt-3">{s.t}</h3><p className="text-slate-600 text-sm mt-1">{s.d}</p></div>)}
        </div>
      </div></section>
    </PageShell>
  );
}