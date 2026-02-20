'use client';
import { useState } from 'react';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { REBuyerFormDiagram2 } from '@/components/diagrams';
import { TextInput, SelectField, NumberInput, CheckboxGroup, TextAreaField } from '@/components/form-fields';
import { MultiStepForm } from '@/components/multi-step-form';
import { PlaceAutocomplete } from '@/components/PlaceAutocomplete';

export default function RealEstateBuyerForm() {
  const [step, setStep] = useState(0);
  const steps = ['Property Type', 'Details & Budget', 'Contact Info'];
  return (
    <PageShell>
      <Hero title="Find Your Ideal Property" subtitle="Tell us what you're looking for" ctaA="Submit Request" ctaB="Browse Listings" />
      <section className="section"><div className="container"><div className="card p-6 md:p-8">
        <SectionTitle title="Tell Us What You're Looking For" />
        <MultiStepForm steps={steps} currentStep={step} onNext={() => setStep(s => s + 1)} onPrev={() => setStep(s => s - 1)} onSubmit={() => alert('Thank you! This form is in demo mode.')}>
          {step === 0 && <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <SelectField label="Mode" name="mode" options={[{value:'buy',label:'Buy'},{value:'rent',label:'Monthly Rent'}]} required />
              <SelectField label="Type" name="type" options={[{value:'home',label:'Home'},{value:'land',label:'Land'},{value:'business',label:'Business'}]} required />
              <PlaceAutocomplete label="Regions" name="regions" required />
              <SelectField label="Bedrooms" name="bedrooms" options={[{value:'any',label:'Any'},{value:'1',label:'1'},{value:'2',label:'2'},{value:'3',label:'3'},{value:'4',label:'4'},{value:'5+',label:'5+'}]} />
            </div>
            <CheckboxGroup label="Property Type" name="propType" options={['Apartment','House','Villa','Land Plot','Commercial']} />
            <div className="grid md:grid-cols-2 gap-4"><NumberInput label="Min sqm" name="sqmMin" /><NumberInput label="Max sqm" name="sqmMax" /></div>
            <CheckboxGroup label="Features" name="features" options={['Sea View','Pool','Parking','Garden','New Build','Renovated']} />
          </div>}
          {step === 1 && <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <SelectField label="Timeframe" name="timeframe" options={[{value:'none',label:'No preference'},{value:'now',label:'Immediate'},{value:'1-3',label:'1–3 months'},{value:'3-6',label:'3–6 months'},{value:'6-12',label:'6–12 months'}]} />
              <div />
              <NumberInput label="Budget From (€)" name="budgetFrom" /><NumberInput label="Budget To (€)" name="budgetTo" />
            </div>
            <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="rounded" /> Need legal/mortgage support</label>
            <TextAreaField label="Notes" name="notes" />
          </div>}
          {step === 2 && <div className="grid md:grid-cols-2 gap-4">
            <TextInput label="First Name" name="firstName" /><TextInput label="Last Name" name="lastName" />
            <TextInput label="Email" name="email" type="email" required /><TextInput label="Phone" name="phone" type="tel" />
            <TextInput label="Country" name="country" />
            <div className="md:col-span-2 space-y-2">
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="rounded" /> I consent to processing my data.</label>
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="rounded" /> Send me property updates.</label>
            </div>
          </div>}
        </MultiStepForm>
      </div></div></section>
    </PageShell>
  );
}