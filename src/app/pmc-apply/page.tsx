'use client';
import { useState } from 'react';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { PMCApplyFormDiagram } from '@/components/diagrams';
import { TextInput, SelectField, NumberInput, CheckboxGroup, TextAreaField } from '@/components/form-fields';
import { MultiStepForm } from '@/components/multi-step-form';

export default function PMCApply() {
  const [step, setStep] = useState(0);
  const steps = ['Company Info', 'Services & Coverage', 'Profile & Submit'];
  return (
    <PageShell>
      <Hero title="Apply as a PMC on ClickyTour" subtitle="PMC Profile Submission" ctaA="Apply Now" ctaB="Learn More" diagram={<PMCApplyFormDiagram />} />
      <section className="section"><div className="container"><div className="card p-6 md:p-8">
        <SectionTitle title="PMC Application Form" />
        <MultiStepForm steps={steps} currentStep={step} onNext={() => setStep(s => s + 1)} onPrev={() => setStep(s => s - 1)} onSubmit={() => alert('Thank you! This form is in demo mode.')}>
          {step === 0 && <div className="grid md:grid-cols-2 gap-4">
            <TextInput label="Company Name" name="companyName" required />
            <TextInput label="Brand Name (optional)" name="brandName" />
            <div className="md:col-span-2"><TextInput label="Short Pitch (public)" name="pitch" required /></div>
            <TextInput label="Manager / Contact Name" name="managerName" required />
            <TextInput label="Work Email" name="email" type="email" required />
            <TextInput label="Phone" name="phone" type="tel" required />
            <TextInput label="Website" name="website" type="url" />
            <SelectField label="Preferred Contact" name="contact" options={[{value:'email',label:'Email'},{value:'phone',label:'Phone'},{value:'whatsapp',label:'WhatsApp'},{value:'viber',label:'Viber'},{value:'telegram',label:'Telegram'},{value:'messenger',label:'Messenger'}]} />
          </div>}
          {step === 1 && <div className="space-y-4">
            <TextInput label="Regions (comma-separated)" name="regions" required />
            <CheckboxGroup label="Service Tags" name="tags" options={['Full Management','Guest Ops','Check-in / Check-out','Cleaning & Linen','Maintenance & Repairs','Revenue Management','Channel Manager','Owner Reporting','Real Estate Support','Renovation / Projects','Luxury / Villas','City Apartments']} />
            <TextInput label="Custom Tags (comma-separated)" name="customTags" />
            <div className="grid md:grid-cols-3 gap-4">
              <NumberInput label="Coverage Radius (km)" name="radius" />
              <NumberInput label="Years of Experience" name="years" />
              <NumberInput label="Managed Properties" name="properties" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <TextInput label="Languages (comma-separated)" name="languages" />
              <TextInput label="Property Types (comma-separated)" name="propTypes" />
            </div>
          </div>}
          {step === 2 && <div className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <TextInput label="Instagram" name="instagram" type="url" />
              <TextInput label="Facebook" name="facebook" type="url" />
              <TextInput label="LinkedIn" name="linkedin" type="url" />
            </div>
            <TextAreaField label="Company Description (public)" name="description" />
            <div className="grid md:grid-cols-2 gap-4">
              <TextInput label="Logo URL" name="logoUrl" type="url" />
              <TextInput label="Cover Image URL" name="coverUrl" type="url" />
            </div>
            <TextAreaField label="Gallery Image URLs (one per line)" name="gallery" rows={3} />
            <TextInput label="Files Link (Drive/Dropbox)" name="filesLink" type="url" />
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="rounded" /> I agree to Terms & Privacy</label>
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="rounded" /> I consent to processing my data.</label>
            </div>
          </div>}
        </MultiStepForm>
      </div></div></section>
    </PageShell>
  );
}