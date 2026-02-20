'use client';

import { ReactNode } from 'react';

const inputClass = 'w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none';
const labelClass = 'block text-sm font-semibold text-slate-700 mb-1';

export function TextInput({ label, name, type = 'text', placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (<div><label className={labelClass}>{label}{required && ' *'}</label><input type={type} name={name} placeholder={placeholder} className={inputClass} /></div>);
}

export function NumberInput({ label, name, min, max, placeholder }: { label: string; name: string; min?: number; max?: number; placeholder?: string }) {
  return (<div><label className={labelClass}>{label}</label><input type="number" name={name} min={min} max={max} placeholder={placeholder} className={inputClass} /></div>);
}

export function DateInput({ label, name, required }: { label: string; name: string; required?: boolean }) {
  return (<div><label className={labelClass}>{label}{required && ' *'}</label><input type="date" name={name} className={inputClass} /></div>);
}

export function SelectField({ label, name, options, required }: { label: string; name: string; options: { value: string; label: string }[]; required?: boolean }) {
  return (<div><label className={labelClass}>{label}{required && ' *'}</label><select name={name} className={inputClass}><option value="">Please Select</option>{options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}</select></div>);
}

export function CheckboxGroup({ label, options, name }: { label: string; options: string[]; name: string }) {
  return (<div><p className={labelClass}>{label}</p><div className="flex flex-wrap gap-3 mt-1">{options.map(o => <label key={o} className="flex items-center gap-2 text-sm text-slate-700"><input type="checkbox" name={name} value={o} className="rounded border-slate-300" />{o}</label>)}</div></div>);
}

export function TextAreaField({ label, name, placeholder, rows = 4 }: { label: string; name: string; placeholder?: string; rows?: number }) {
  return (<div><label className={labelClass}>{label}</label><textarea name={name} placeholder={placeholder} rows={rows} className={inputClass} /></div>);
}

export function FileUpload({ label, name, hint }: { label: string; name: string; hint?: string }) {
  return (<div><label className={labelClass}>{label}</label><input type="file" name={name} className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100" />{hint && <p className="text-xs text-slate-400 mt-1">{hint}</p>}</div>);
}

export function FormSection({ title, children }: { title?: string; children: ReactNode }) {
  return (<div className="space-y-4">{title && <h3 className="text-lg font-bold text-slate-800">{title}</h3>}{children}</div>);
}
