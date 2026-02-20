'use client';
import { useState } from 'react';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { GuestVacationFormDiagram } from '@/components/diagrams';
import { TextInput, DateInput, SelectField, NumberInput, CheckboxGroup, TextAreaField } from '@/components/form-fields';
import { MultiStepForm } from '@/components/multi-step-form';

export default function GuestsVacationRequest() {
  const [step, setStep] = useState(0);
  const steps = ['Trip Details', 'Preferences', 'Contact Info'];
  return (
    <PageShell>
      <Hero title="Request a Tailored Vacation Proposal" subtitle="Tell us about your ideal trip and we'll create a personalized proposal" ctaA="Submit Request" ctaB="Browse Rentals" />
      <section className="section"><div className="container"><div className="card p-6 md:p-8">
        <SectionTitle title="Tailored Proposal Request Form" />
        <MultiStepForm steps={steps} currentStep={step} onNext={() => setStep(s => s + 1)} onPrev={() => setStep(s => s - 1)} onSubmit={() => alert('Thank you! This form is in demo mode.')}>
          {step === 0 && <div className="grid md:grid-cols-2 gap-4">
            <DateInput label="Check-in" name="dateStart" required />
            <DateInput label="Check-out" name="dateEnd" required />
            <TextInput label="Destination / Region" name="destination" required />
            <SelectField label="Bedrooms" name="bedrooms" options={[{value:'1',label:'1'},{value:'2',label:'2'},{value:'3',label:'3'},{value:'4+',label:'4+'}]} />
            <SelectField label="Adults" name="adults" options={[{value:'1',label:'1'},{value:'2',label:'2'},{value:'3',label:'3'},{value:'4',label:'4'},{value:'5+',label:'5+'}]} required />
            <SelectField label="Children (3–14)" name="children314" options={[{value:'0',label:'0'},{value:'1',label:'1'},{value:'2',label:'2'},{value:'3+',label:'3+'}]} />
            <SelectField label="Children (0–3)" name="children03" options={[{value:'0',label:'0'},{value:'1',label:'1'},{value:'2',label:'2'}]} />
          </div>}
          {step === 1 && <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <SelectField label="Distance to beach" name="beach" options={[{value:'200',label:'≤ 200m'},{value:'500',label:'≤ 500m'},{value:'1000',label:'≤ 1000m'}]} />
              <SelectField label="Distance to infrastructure" name="infra" options={[{value:'0.5',label:'≤ 0.5 km'},{value:'1',label:'≤ 1 km'},{value:'2',label:'≤ 2 km'},{value:'5',label:'≤ 5 km'}]} />
              <NumberInput label="Budget From (€/night)" name="budgetFrom" min={100} placeholder="Min 100" />
              <NumberInput label="Budget To (€/night)" name="budgetTo" placeholder="Optional" />
            </div>
            <CheckboxGroup label="Extra Requirements" name="extras" options={['Private Pool','Sea View','Fast Wi-Fi','Parking','Pet Friendly','Accessible']} />
            <TextAreaField label="Notes" name="notes" placeholder="Any special requests..." />
          </div>}
          {step === 2 && <div className="grid md:grid-cols-2 gap-4">
            <TextInput label="First Name" name="firstName" />
            <TextInput label="Last Name" name="lastName" />
            <TextInput label="Email" name="email" type="email" required />
            <TextInput label="Phone" name="phone" type="tel" />
            <TextInput label="Country" name="country" />
            <div className="md:col-span-2 space-y-2">
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="rounded" /> I consent to processing my data for trip planning.</label>
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="rounded" /> Keep me posted about offers and tips.</label>
            </div>
          </div>}
        </MultiStepForm>
      </div></div></section>
    </PageShell>
  );
}