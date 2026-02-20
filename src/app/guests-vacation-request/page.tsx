'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { GuestVacationFormDiagram } from '@/components/diagrams';
import { TextInput, DateInput, SelectField, NumberInput, CheckboxGroup, TextAreaField } from '@/components/form-fields';
import { MultiStepForm } from '@/components/multi-step-form';

export default function GuestsVacationRequest() {
  return (
    <Suspense fallback={null}>
      <GuestsVacationRequestInner />
    </Suspense>
  );
}

function GuestsVacationRequestInner() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(0);
  const steps = ['Trip Details', 'Preferences', 'Contact Info'];

  /* ── Prefill from URL params (homepage mini-form redirect) ── */
  const [prefilled, setPrefilled] = useState(false);
  const [form, setForm] = useState({
    dateStart: '',
    dateEnd: '',
    destination: '',
    bedrooms: '',
    adults: '',
    children314: '',
    children03: '',
    beach: '',
    infra: '',
    budgetFrom: '',
    budgetTo: '',
    extras: [] as string[],
    notes: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    gdprConsent: false,
    marketingConsent: false,
  });

  useEffect(() => {
    if (prefilled) return;
    const source = searchParams.get('source');
    if (!source) return;

    setForm(prev => ({
      ...prev,
      dateStart: searchParams.get('checkIn') || prev.dateStart,
      dateEnd: searchParams.get('checkOut') || prev.dateEnd,
      destination: searchParams.get('destination') || prev.destination,
      adults: searchParams.get('adults') || prev.adults,
      email: searchParams.get('email') || prev.email,
      phone: searchParams.get('phone') || prev.phone,
    }));
    setPrefilled(true);
  }, [searchParams, prefilled]);

  const updateField = (name: string, value: string | boolean | string[]) =>
    setForm(prev => ({ ...prev, [name]: value }));

  const source = searchParams.get('source') || 'direct';
  const role = searchParams.get('role') || 'guest-vacation';
  return (
    <PageShell>
      <Hero title="Request a Tailored Vacation Proposal" subtitle="Tell us about your ideal trip and we'll create a personalized proposal" ctaA="Submit Request" ctaB="Browse Rentals" />
      <section className="section"><div className="container"><div className="card p-6 md:p-8">
        <SectionTitle title="Tailored Proposal Request Form" />
        <MultiStepForm steps={steps} currentStep={step} onNext={() => setStep(s => s + 1)} onPrev={() => setStep(s => s - 1)} onSubmit={async () => {
          try {
            await fetch('/api/forms/guest-vacation-request', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                ...form,
                _meta: { source, role, submittedAt: new Date().toISOString() },
              }),
            });
            window.location.href = '/thank-you-guest-vacation-request';
          } catch {
            alert('Something went wrong. Please try again.');
          }
        }}>
          {step === 0 && <div className="grid md:grid-cols-2 gap-4">
            <DateInput label="Check-in" name="dateStart" required value={form.dateStart} onChange={e => updateField('dateStart', e.target.value)} />
            <DateInput label="Check-out" name="dateEnd" required value={form.dateEnd} onChange={e => updateField('dateEnd', e.target.value)} />
            <TextInput label="Destination / Region" name="destination" required value={form.destination} onChange={e => updateField('destination', e.target.value)} />
            <SelectField label="Bedrooms" name="bedrooms" options={[{value:'1',label:'1'},{value:'2',label:'2'},{value:'3',label:'3'},{value:'4+',label:'4+'}]} value={form.bedrooms} onChange={e => updateField('bedrooms', e.target.value)} />
            <SelectField label="Adults" name="adults" options={[{value:'1',label:'1'},{value:'2',label:'2'},{value:'3',label:'3'},{value:'4',label:'4'},{value:'5+',label:'5+'}]} required value={form.adults} onChange={e => updateField('adults', e.target.value)} />
            <SelectField label="Children (3-14)" name="children314" options={[{value:'0',label:'0'},{value:'1',label:'1'},{value:'2',label:'2'},{value:'3+',label:'3+'}]} value={form.children314} onChange={e => updateField('children314', e.target.value)} />
            <SelectField label="Children (0-3)" name="children03" options={[{value:'0',label:'0'},{value:'1',label:'1'},{value:'2',label:'2'}]} value={form.children03} onChange={e => updateField('children03', e.target.value)} />
          </div>}
          {step === 1 && <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <SelectField label="Distance to beach" name="beach" options={[{value:'200',label:'<= 200m'},{value:'500',label:'<= 500m'},{value:'1000',label:'<= 1000m'}]} value={form.beach} onChange={e => updateField('beach', e.target.value)} />
              <SelectField label="Distance to infrastructure" name="infra" options={[{value:'0.5',label:'<= 0.5 km'},{value:'1',label:'<= 1 km'},{value:'2',label:'<= 2 km'},{value:'5',label:'<= 5 km'}]} value={form.infra} onChange={e => updateField('infra', e.target.value)} />
              <NumberInput label="Budget From (EUR/night)" name="budgetFrom" min={100} placeholder="Min 100" value={form.budgetFrom} onChange={e => updateField('budgetFrom', e.target.value)} />
              <NumberInput label="Budget To (EUR/night)" name="budgetTo" placeholder="Optional" value={form.budgetTo} onChange={e => updateField('budgetTo', e.target.value)} />
            </div>
            <CheckboxGroup label="Extra Requirements" name="extras" options={['Private Pool','Sea View','Fast Wi-Fi','Parking','Pet Friendly','Accessible']} value={form.extras} onChange={(vals: string[]) => updateField('extras', vals)} />
            <TextAreaField label="Notes" name="notes" placeholder="Any special requests..." value={form.notes} onChange={e => updateField('notes', e.target.value)} />
          </div>}
          {step === 2 && <div className="grid md:grid-cols-2 gap-4">
            <TextInput label="First Name" name="firstName" value={form.firstName} onChange={e => updateField('firstName', e.target.value)} />
            <TextInput label="Last Name" name="lastName" value={form.lastName} onChange={e => updateField('lastName', e.target.value)} />
            <TextInput label="Email" name="email" type="email" required value={form.email} onChange={e => updateField('email', e.target.value)} />
            <TextInput label="Phone" name="phone" type="tel" value={form.phone} onChange={e => updateField('phone', e.target.value)} />
            <TextInput label="Country" name="country" value={form.country} onChange={e => updateField('country', e.target.value)} />
            <div className="md:col-span-2 space-y-2">
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="rounded" checked={form.gdprConsent} onChange={e => updateField('gdprConsent', e.target.checked)} /> I consent to processing my data for trip planning.</label>
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="rounded" checked={form.marketingConsent} onChange={e => updateField('marketingConsent', e.target.checked)} /> Keep me posted about offers and tips.</label>
            </div>
          </div>}
        </MultiStepForm>
      </div></div></section>
    </PageShell>
  );
}