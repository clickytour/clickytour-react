'use client';
import { useState } from 'react';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { OwnerListFormDiagram } from '@/components/diagrams';
import { TextInput, DateInput, SelectField, NumberInput, CheckboxGroup, TextAreaField } from '@/components/form-fields';
import { MultiStepForm } from '@/components/multi-step-form';
import { PlaceAutocomplete } from '@/components/PlaceAutocomplete';

export default function RealEstateOwnersList() {
  const [step, setStep] = useState(0);
  const [intent, setIntent] = useState('list');
  const steps = intent === 'maintenance' ? ['Service Details','Contact'] : ['Property Info','Details & Pricing','Contact'];
  return (
    <PageShell>
      <Hero title="Sell, Evaluate, or Request Services for Your Property" subtitle="Sell or List Your Property with ClickyTour" ctaA="Get Started" ctaB="Learn More" ctaHrefA="/real-estate-owners-list" ctaHrefB="/real-estate" diagram={<OwnerListFormDiagram />} />
      <section className="section"><div className="container"><div className="card p-6 md:p-8">
        <SectionTitle title="Real Estate Property Form" />
        <div className="mb-6"><label className="block text-sm font-semibold text-slate-700 mb-1">What do you need? *</label><select className="w-full rounded-xl border border-slate-200 px-4 py-3" value={intent} onChange={e => { setIntent(e.target.value); setStep(0); }}><option value="eval">Property Evaluation</option><option value="list">List My Property</option><option value="maintenance">Repairs / Maintenance</option></select></div>
        <MultiStepForm steps={steps} currentStep={step} onNext={() => setStep(s => s + 1)} onPrev={() => setStep(s => s - 1)} onSubmit={() => alert('Thank you! This form is in demo mode.')}>
          {intent !== 'maintenance' && step === 0 && <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <TextInput label="Property Type" name="propertyType" required /><PlaceAutocomplete label="City / Region" name="region" required />
              <TextInput label="Street Address" name="street" /><TextInput label="City" name="city" />
              <TextInput label="Postal Code" name="postal" /><TextInput label="Country" name="country" />
              <TextInput label="Google Map Link" name="mapUrl" type="url" />
              <SelectField label="Available For" name="availFor" options={[{value:'sale',label:'Sale'},{value:'rent',label:'Rent'}]} />
              <SelectField label="Sea View" name="seaView" options={[{value:'yes',label:'Yes'},{value:'no',label:'No'}]} />
              <SelectField label="Orientation" name="orientation" options={[{value:'N',label:'N'},{value:'NE',label:'NE'},{value:'E',label:'E'},{value:'SE',label:'SE'},{value:'S',label:'S'},{value:'SW',label:'SW'},{value:'W',label:'W'},{value:'NW',label:'NW'}]} />
            </div>
            <CheckboxGroup label="Condition" name="condition" options={['New','Renovated','Good','Needs Work']} />
            <CheckboxGroup label="Use" name="use" options={['Residential','Holiday Let','Commercial','Investment']} />
            <TextAreaField label="Short Description" name="description" />
          </div>}
          {intent !== 'maintenance' && step === 1 && <div className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <NumberInput label="Plot Area (sqm)" name="plotArea" /><NumberInput label="Living Area (sqm)" name="livingArea" /><NumberInput label="Total sqm" name="totalSqm" />
              <NumberInput label="Bedrooms" name="bedrooms" /><NumberInput label="Bathrooms" name="bathrooms" /><NumberInput label="Floor" name="floor" />
              <NumberInput label="Year Built" name="yearBuilt" /><NumberInput label="Year Renovated" name="yearRenovated" />
            </div>
            <CheckboxGroup label="Amenities" name="amenities" options={['Pool','AC','Heating','Wi-Fi','Parking','Elevator','Garden','Solar','Storage','Fireplace']} />
            <div className="grid md:grid-cols-2 gap-4">
              <NumberInput label="Sale Price (€)" name="priceSale" /><NumberInput label="Rent/month (€)" name="priceRent" />
              <DateInput label="Available From" name="availFrom" />
            </div>
          </div>}
          {intent !== 'maintenance' && step === 2 && <div className="grid md:grid-cols-2 gap-4">
            <TextInput label="First Name" name="firstName" /><TextInput label="Last Name" name="lastName" />
            <TextInput label="Email" name="email" type="email" required /><TextInput label="Phone" name="phone" type="tel" />
            <TextInput label="Country" name="country" /><TextInput label="Photos Link" name="photosLink" type="url" />
            <div className="md:col-span-2 space-y-2">
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="rounded" /> I agree to Terms & Privacy</label>
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="rounded" /> I consent to processing my data.</label>
            </div>
          </div>}
          {intent === 'maintenance' && step === 0 && <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <SelectField label="Service Category" name="cat" options={[{value:'plumbing',label:'Plumbing'},{value:'electrical',label:'Electrical'},{value:'hvac',label:'HVAC'},{value:'appliance',label:'Appliance Repair'},{value:'cleaning',label:'Cleaning'},{value:'painting',label:'Painting'},{value:'general',label:'General Maintenance'}]} required />
              <SelectField label="Urgency" name="urgency" options={[{value:'low',label:'Low'},{value:'normal',label:'Normal'},{value:'high',label:'High'},{value:'emergency',label:'Emergency'}]} required />
              <TextInput label="Address" name="address" required /><DateInput label="Preferred Date" name="prefDate" />
            </div>
            <TextAreaField label="Description" name="description" placeholder="Describe the issue..." />
          </div>}
          {intent === 'maintenance' && step === 1 && <div className="grid md:grid-cols-2 gap-4">
            <TextInput label="First Name" name="firstName" /><TextInput label="Last Name" name="lastName" />
            <TextInput label="Email" name="email" type="email" required /><TextInput label="Phone" name="phone" type="tel" />
            <TextInput label="Country" name="country" />
            <div className="md:col-span-2"><label className="flex items-center gap-2 text-sm"><input type="checkbox" className="rounded" /> I consent to processing my data.</label></div>
          </div>}
        </MultiStepForm>
      </div></div></section>
    </PageShell>
  );
}