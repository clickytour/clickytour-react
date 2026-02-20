'use client';
import { useState } from 'react';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { REBuyerFormDiagram2 } from '@/components/diagrams';
import { TextInput, DateInput, SelectField, NumberInput, CheckboxGroup, TextAreaField } from '@/components/form-fields';

export default function RealEstateProposals() {
  const [mode, setMode] = useState('buy');
  return (
    <PageShell>
      <Hero title="We'll Find the Perfect Options for You" subtitle="Choose the type of property you need" ctaA="Submit Request" ctaB="Browse Listings" />
      <section className="section"><div className="container">
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[{v:'buy',icon:'🏠',t:'Buy Property',d:'Find your dream home or investment.'},{v:'rent',icon:'🔑',t:'Rent Property',d:'Long-term or seasonal rentals.'}].map(c => <button key={c.v} onClick={() => setMode(c.v)} className={`card p-6 text-left border-2 ${mode === c.v ? 'border-teal-600' : 'border-transparent'}`}><p className="text-3xl">{c.icon}</p><h3 className="font-bold mt-2">{c.t}</h3><p className="text-slate-600 text-sm">{c.d}</p></button>)}
        </div>
      </div></section>
      <section className="section section-soft"><div className="container"><div className="card p-6 md:p-8">
        <SectionTitle title="Tailored Proposal Request Form" />
        <form className="space-y-4" onSubmit={e => { e.preventDefault(); alert('Thank you! This form is in demo mode.'); }}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <DateInput label="Check-in" name="dateStart" />
            <DateInput label="Check-out" name="dateEnd" />
            <SelectField label="Bedrooms" name="bedrooms" options={[{value:'1',label:'1'},{value:'2',label:'2'},{value:'3',label:'3'},{value:'4',label:'4'},{value:'5',label:'5'},{value:'6+',label:'6+'}]} />
            <SelectField label="Adults" name="adults" options={[{value:'1',label:'1'},{value:'2',label:'2'},{value:'3',label:'3'},{value:'4',label:'4'},{value:'5',label:'5'},{value:'6+',label:'6+'}]} />
            <SelectField label="Children (3–14)" name="children314" options={[{value:'0',label:'0'},{value:'1',label:'1'},{value:'2',label:'2'},{value:'3',label:'3'},{value:'4+',label:'4+'}]} />
            <SelectField label="Children (0–3)" name="children03" options={[{value:'0',label:'0'},{value:'1',label:'1'},{value:'2',label:'2'}]} />
            <SelectField label="Distance to Beach" name="beach" options={[{value:'100',label:'< 100m'},{value:'200',label:'100–200m'},{value:'500',label:'200–500m'},{value:'1000',label:'500–1000m'}]} />
            <SelectField label="Distance to Infrastructure" name="infra" options={[{value:'1',label:'< 1 km'},{value:'2',label:'1–2 km'},{value:'5',label:'2–5 km'},{value:'10',label:'5–10 km'}]} />
          </div>
          <CheckboxGroup label="Extra Requirements" name="extras" options={['Swimming Pool','Pets Allowed','Baby Cot','Extra Cot','Airport Transfer']} />
          <TextAreaField label="Notes" name="notes" />
          <div className="grid md:grid-cols-2 gap-4">
            <NumberInput label="Budget From (€/night)" name="budgetFrom" /><NumberInput label="Budget To (€/night)" name="budgetTo" />
          </div>
          <hr className="border-slate-200" />
          <div className="grid md:grid-cols-2 gap-4">
            <TextInput label="First Name" name="firstName" /><TextInput label="Last Name" name="lastName" />
            <TextInput label="Email" name="email" type="email" required /><TextInput label="Phone" name="phone" type="tel" />
            <TextInput label="Country" name="country" /><TextInput label="Agency Name (optional)" name="agency" />
          </div>
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="rounded" /> I agree to the privacy policy.</label>
          <button type="submit" className="px-6 py-3 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-700">Submit Proposal Request</button>
        </form>
      </div></div></section>
      <section className="section"><div className="container">
        <SectionTitle title="Why Use ClickyTour for Real Estate?" />
        <div className="grid md:grid-cols-3 gap-4">
          {['Local expert network in every region','Curated proposals tailored to your needs','Full support from search to closing'].map(b => <div key={b} className="card p-4 flex items-center gap-3"><span className="text-teal-600 text-xl">✓</span><span className="font-semibold">{b}</span></div>)}
        </div>
      </div></section>
    </PageShell>
  );
}