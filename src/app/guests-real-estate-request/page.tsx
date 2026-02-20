'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { GuestREFormDiagram } from '@/components/diagrams';
import { TextInput, SelectField, NumberInput, CheckboxGroup, TextAreaField } from '@/components/form-fields';
import { MultiStepForm } from '@/components/multi-step-form';
import { PlaceAutocomplete } from '@/components/PlaceAutocomplete';

export default function GuestsRealEstateRequest() {
  return (<Suspense fallback={null}><GuestsRealEstateRequestInner /></Suspense>);
}

function GuestsRealEstateRequestInner() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(0);
  const steps = ['Property Type', 'Details & Budget', 'Contact Info'];
  const [prefilled, setPrefilled] = useState(false);
  const [form, setForm] = useState({
    mode: '', type: '', regions: '', bedrooms: '', propType: [] as string[], sqmMin: '', sqmMax: '',
    features: [] as string[], timeframe: '', budgetFrom: '', budgetTo: '', legalSupport: false,
    notes: '', firstName: '', lastName: '', email: '', phone: '', country: '',
    gdprConsent: false, marketingConsent: false,
  });

  useEffect(() => {
    if (prefilled) return;
    const source = searchParams.get('source');
    if (!source) return;
    setForm(prev => ({
      ...prev,
      mode: searchParams.get('mode') || prev.mode,
      type: searchParams.get('propertyType') || prev.type,
      regions: searchParams.get('regions') || prev.regions,
      email: searchParams.get('email') || prev.email,
      phone: searchParams.get('phone') || prev.phone,
    }));
    setPrefilled(true);
  }, [searchParams, prefilled]);

  const u = (name: string, value: string | boolean | string[]) => setForm(prev => ({ ...prev, [name]: value }));
  const source = searchParams.get('source') || 'direct';
  const role = searchParams.get('role') || 'guest-real-estate';

  return (
    <PageShell>
      <Hero title="Request Real-Estate Options in Minutes" subtitle="Tell us what you're looking for and we'll find the best matches" ctaA="Submit Request" ctaB="Browse Properties" />
      <section className="section"><div className="container"><div className="card p-6 md:p-8">
        <SectionTitle title="Tell Us What You're Looking For" />
        <MultiStepForm steps={steps} currentStep={step} onNext={() => setStep(s => s + 1)} onPrev={() => setStep(s => s - 1)} onSubmit={async () => {
          try {
            await fetch('/api/forms/guest-real-estate-request', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ ...form, _meta: { source, role, submittedAt: new Date().toISOString() } }),
            });
            window.location.href = '/thank-you-guest-real-estate';
          } catch { alert('Something went wrong. Please try again.'); }
        }}>
          {step === 0 && <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <SelectField label="Mode" name="mode" options={[{value:'buy',label:'Buy'},{value:'rent',label:'Monthly Rent'}]} required value={form.mode} onChange={e => u('mode', e.target.value)} />
              <SelectField label="Type" name="type" options={[{value:'home',label:'Home'},{value:'land',label:'Land'},{value:'business',label:'Business'}]} required value={form.type} onChange={e => u('type', e.target.value)} />
              <PlaceAutocomplete label="Regions" name="regions" required value={form.regions} onTextChange={v => u('regions', v)} onChange={p => { if (p) { u('regions', p.displayName); } }} />
              <SelectField label="Bedrooms" name="bedrooms" options={[{value:'any',label:'Any'},{value:'1',label:'1'},{value:'2',label:'2'},{value:'3',label:'3'},{value:'4',label:'4'},{value:'5+',label:'5+'}]} value={form.bedrooms} onChange={e => u('bedrooms', e.target.value)} />
            </div>
            <CheckboxGroup label="Property Type" name="propType" options={['Apartment','House','Villa','Land Plot','Commercial']} value={form.propType} onChange={(vals: string[]) => u('propType', vals)} />
            <div className="grid md:grid-cols-2 gap-4">
              <NumberInput label="Min sqm" name="sqmMin" value={form.sqmMin} onChange={e => u('sqmMin', e.target.value)} />
              <NumberInput label="Max sqm" name="sqmMax" value={form.sqmMax} onChange={e => u('sqmMax', e.target.value)} />
            </div>
            <CheckboxGroup label="Features" name="features" options={['Sea View','Pool','Parking','Garden','New Build','Renovated']} value={form.features} onChange={(vals: string[]) => u('features', vals)} />
          </div>}
          {step === 1 && <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <SelectField label="Timeframe" name="timeframe" options={[{value:'none',label:'No preference'},{value:'now',label:'Immediate'},{value:'1-3',label:'1-3 months'},{value:'3-6',label:'3-6 months'},{value:'6-12',label:'6-12 months'}]} value={form.timeframe} onChange={e => u('timeframe', e.target.value)} />
              <div />
              <NumberInput label="Budget From (EUR)" name="budgetFrom" value={form.budgetFrom} onChange={e => u('budgetFrom', e.target.value)} />
              <NumberInput label="Budget To (EUR)" name="budgetTo" value={form.budgetTo} onChange={e => u('budgetTo', e.target.value)} />
            </div>
            <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="rounded" checked={form.legalSupport} onChange={e => u('legalSupport', e.target.checked)} /> Need legal/mortgage support</label>
            <TextAreaField label="Notes" name="notes" placeholder="Additional details..." value={form.notes} onChange={e => u('notes', e.target.value)} />
          </div>}
          {step === 2 && <div className="grid md:grid-cols-2 gap-4">
            <TextInput label="First Name" name="firstName" value={form.firstName} onChange={e => u('firstName', e.target.value)} />
            <TextInput label="Last Name" name="lastName" value={form.lastName} onChange={e => u('lastName', e.target.value)} />
            <TextInput label="Email" name="email" type="email" required value={form.email} onChange={e => u('email', e.target.value)} />
            <TextInput label="Phone" name="phone" type="tel" value={form.phone} onChange={e => u('phone', e.target.value)} />
            <TextInput label="Country" name="country" value={form.country} onChange={e => u('country', e.target.value)} />
            <div className="md:col-span-2 space-y-2">
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="rounded" checked={form.gdprConsent} onChange={e => u('gdprConsent', e.target.checked)} /> I consent to processing my data.</label>
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="rounded" checked={form.marketingConsent} onChange={e => u('marketingConsent', e.target.checked)} /> Send me property updates and tips.</label>
            </div>
          </div>}
        </MultiStepForm>
      </div></div></section>
    </PageShell>
  );
}
