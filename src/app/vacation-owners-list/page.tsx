'use client';
import { useState } from 'react';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { OwnerListFormDiagram } from '@/components/diagrams';
import { TextInput, DateInput, SelectField, NumberInput, CheckboxGroup, TextAreaField } from '@/components/form-fields';
import { MultiStepForm } from '@/components/multi-step-form';

export default function VacationOwnersList() {
  const [step, setStep] = useState(0);
  const [intent, setIntent] = useState('list');
  const listSteps = ['Property Info', 'Pricing & Availability', 'Contact'];
  const maintSteps = ['Service Details', 'Contact'];
  const steps = intent === 'maintenance' ? maintSteps : listSteps;
  return (
    <PageShell>
      <Hero title="List, Evaluate, or Request Services for Your Property" subtitle="Work with ClickyTour as a Vacation Property Owner" ctaA="Get Started" ctaB="Learn More" diagram={<OwnerListFormDiagram />} />
      <section className="section"><div className="container"><div className="card p-6 md:p-8">
        <SectionTitle title="Vacation Property Owner Form" />
        <div className="mb-6">
          <SelectField label="What do you need?" name="intent" options={[{value:'eval',label:'Property Evaluation'},{value:'list',label:'List & Manage My Property'},{value:'maintenance',label:'Repairs / Maintenance Service'}]} required />
          <div className="mt-2"><select className="w-full rounded-xl border border-slate-200 px-4 py-3" value={intent} onChange={e => { setIntent(e.target.value); setStep(0); }}><option value="list">List & Manage My Property</option><option value="eval">Property Evaluation</option><option value="maintenance">Repairs / Maintenance Service</option></select></div>
        </div>
        <MultiStepForm steps={steps} currentStep={step} onNext={() => setStep(s => s + 1)} onPrev={() => setStep(s => s - 1)} onSubmit={() => alert('Thank you! This form is in demo mode.')}>
          {intent !== 'maintenance' && step === 0 && <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <TextInput label="Property Type" name="propertyType" required />
              <TextInput label="Region" name="region" required />
              <TextInput label="Street Address" name="street1" />
              <TextInput label="City" name="city" />
              <TextInput label="State / Region" name="state" />
              <TextInput label="Postal Code" name="postal" />
              <TextInput label="Google Map URL" name="mapUrl" type="url" />
              <SelectField label="Condition" name="condition" options={[{value:'new',label:'New'},{value:'renovated',label:'Renovated'},{value:'good',label:'Good'},{value:'needsWork',label:'Needs Work'}]} />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <NumberInput label="Sqm" name="sqm" /><NumberInput label="Bedrooms" name="bedrooms" /><NumberInput label="Beds" name="beds" /><NumberInput label="Bathrooms" name="bathrooms" /><NumberInput label="Max Guests" name="maxGuests" /><NumberInput label="Floors" name="floors" />
            </div>
            <CheckboxGroup label="Amenities" name="amenities" options={['Fast Wi-Fi','Parking','AC','Heating','Equipped Kitchen','Washer','Pet Friendly','Accessible','Pool']} />
          </div>}
          {intent !== 'maintenance' && step === 1 && <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <SelectField label="Price per" name="pricePer" options={[{value:'night',label:'Per night'},{value:'week',label:'Per week'},{value:'month',label:'Per month'},{value:'season',label:'Per season'}]} />
              <NumberInput label="Desired Net Rate (€)" name="rate" />
              <DateInput label="Available From" name="availFrom" />
              <TextInput label="Blackout Periods" name="blackout" />
            </div>
            <CheckboxGroup label="Services Required" name="services" options={['Cleaning','Maintenance','Laundry','Pool care','Garden/Lawn','Guest Ops']} />
            <TextAreaField label="Additional Notes" name="notes" />
          </div>}
          {intent !== 'maintenance' && step === 2 && <div className="grid md:grid-cols-2 gap-4">
            <TextInput label="First Name" name="firstName" /><TextInput label="Last Name" name="lastName" />
            <TextInput label="Email" name="email" type="email" required /><TextInput label="Phone" name="phone" type="tel" />
            <TextInput label="Country" name="country" /><TextInput label="Photos/Docs Link" name="photosLink" type="url" />
            <div className="md:col-span-2 space-y-2">
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="rounded" /> I agree to Terms & Privacy</label>
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="rounded" /> I consent to management/listing contact</label>
            </div>
          </div>}
          {intent === 'maintenance' && step === 0 && <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <SelectField label="Service Category" name="serviceCategory" options={[{value:'plumbing',label:'Plumbing'},{value:'electrical',label:'Electrical'},{value:'hvac',label:'HVAC'},{value:'appliance',label:'Appliance Repair'},{value:'cleaning',label:'Cleaning'},{value:'painting',label:'Painting'},{value:'general',label:'General Maintenance'}]} required />
              <SelectField label="Urgency" name="urgency" options={[{value:'low',label:'Low'},{value:'normal',label:'Normal'},{value:'high',label:'High'},{value:'emergency',label:'Emergency'}]} required />
              <TextInput label="Address / Location" name="address" required />
              <DateInput label="Preferred Date" name="prefDate" />
            </div>
            <TextAreaField label="Description" name="description" placeholder="Describe the issue..." />
          </div>}
          {intent === 'maintenance' && step === 1 && <div className="grid md:grid-cols-2 gap-4">
            <TextInput label="First Name" name="firstName" /><TextInput label="Last Name" name="lastName" />
            <TextInput label="Email" name="email" type="email" required /><TextInput label="Phone" name="phone" type="tel" />
            <TextInput label="Country" name="country" />
            <div className="md:col-span-2"><label className="flex items-center gap-2 text-sm"><input type="checkbox" className="rounded" /> I consent to processing my data for this request.</label></div>
          </div>}
        </MultiStepForm>
      </div></div></section>
    </PageShell>
  );
}