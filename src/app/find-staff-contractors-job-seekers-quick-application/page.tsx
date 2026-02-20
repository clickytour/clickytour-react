'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { PageShell, Hero, SectionTitle } from '@/components/site';
import { TextInput, SelectField, TextAreaField } from '@/components/form-fields';

export default function Page() {
  return (<Suspense fallback={null}><QuickApplicationInner /></Suspense>);
}

function QuickApplicationInner() {
  const searchParams = useSearchParams();
  const [prefilled, setPrefilled] = useState(false);
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', chatApp: '', availability: '',
    desiredRole: '', skills: '', availNotes: '', notes: '', gdprConsent: false,
  });

  useEffect(() => {
    if (prefilled) return;
    const source = searchParams.get('source');
    if (!source) return;
    setForm(prev => ({
      ...prev,
      desiredRole: searchParams.get('desiredRole') || prev.desiredRole,
      skills: searchParams.get('skills') || prev.skills,
      email: searchParams.get('email') || prev.email,
      phone: searchParams.get('phone') || prev.phone,
    }));
    setPrefilled(true);
  }, [searchParams, prefilled]);

  const u = (name: string, value: string | boolean) => setForm(prev => ({ ...prev, [name]: value }));
  const source = searchParams.get('source') || 'direct';
  const role = searchParams.get('role') || 'job-seeker';

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await fetch('/api/forms/job-seeker-apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, _meta: { source, role, submittedAt: new Date().toISOString() } }),
      });
      window.location.href = '/thank-you-job-seeker';
    } catch { alert('Something went wrong. Please try again.'); }
  }

  return (
    <PageShell>
      <Hero title="Quick Application" subtitle="Apply in 2 minutes - get matched with opportunities." ctaA="Submit" ctaB="Learn More" />
      <section className="section"><div className="container"><div className="card p-6 md:p-8">
        <SectionTitle title="Quick Application" />
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-4">
            <TextInput label="First Name" name="firstName" required value={form.firstName} onChange={e => u('firstName', e.target.value)} />
            <TextInput label="Last Name" name="lastName" required value={form.lastName} onChange={e => u('lastName', e.target.value)} />
            <TextInput label="Email" name="email" type="email" required value={form.email} onChange={e => u('email', e.target.value)} />
            <TextInput label="Phone" name="phone" type="tel" value={form.phone} onChange={e => u('phone', e.target.value)} />
            <SelectField label="Desired Role" name="desiredRole" options={[
              {value:'cleaning',label:'Cleaning / Housekeeping'},{value:'maintenance',label:'Maintenance / Repairs'},
              {value:'hospitality',label:'Hospitality / Guest Ops'},{value:'driver',label:'Driver / Transfer'},
              {value:'chef',label:'Chef / Catering'},{value:'management',label:'Property Management'},
              {value:'marketing',label:'Marketing / Sales'},{value:'other',label:'Other'},
            ]} value={form.desiredRole} onChange={e => u('desiredRole', e.target.value)} />
            <SelectField label="Preferred Chat App" name="chatApp" options={[{value:'whatsapp',label:'WhatsApp'},{value:'viber',label:'Viber'},{value:'telegram',label:'Telegram'},{value:'messenger',label:'Messenger'}]} value={form.chatApp} onChange={e => u('chatApp', e.target.value)} />
            <SelectField label="Availability" name="availability" options={[{value:'immediate',label:'Immediately'},{value:'1week',label:'Within 1 week'},{value:'2weeks',label:'Within 2 weeks'},{value:'1month',label:'Within 1 month'}]} value={form.availability} onChange={e => u('availability', e.target.value)} />
            <TextInput label="Key Skills" name="skills" value={form.skills} onChange={e => u('skills', e.target.value)} />
          </div>
          <TextAreaField label="Availability Notes" name="availNotes" placeholder="Any dates or preferences..." value={form.availNotes} onChange={e => u('availNotes', e.target.value)} />
          <TextAreaField label="Message / Notes (optional)" name="notes" placeholder="Tell us about yourself..." value={form.notes} onChange={e => u('notes', e.target.value)} />
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="rounded" checked={form.gdprConsent} onChange={e => u('gdprConsent', e.target.checked)} /> I confirm the information is correct and allow ClickyTour to process this application.</label>
          <button type="submit" className="px-6 py-3 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-700">Submit</button>
        </form>
      </div></div></section>
    </PageShell>
  );
}
