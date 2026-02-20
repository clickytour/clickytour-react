'use client';

import { ReactNode } from 'react';

export function MultiStepForm({ steps, currentStep, onNext, onPrev, onSubmit, children }: { steps: string[]; currentStep: number; onNext: () => void; onPrev: () => void; onSubmit: () => void; children: ReactNode }) {
  const isLast = currentStep === steps.length - 1;
  return (
    <div>
      <div className="flex items-center gap-2 mb-8">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${i <= currentStep ? 'bg-teal-600 text-white' : 'bg-slate-200 text-slate-500'}`}>{i + 1}</div>
            <span className={`text-sm hidden sm:inline ${i <= currentStep ? 'text-teal-700 font-semibold' : 'text-slate-400'}`}>{s}</span>
            {i < steps.length - 1 && <div className={`w-8 h-0.5 ${i < currentStep ? 'bg-teal-600' : 'bg-slate-200'}`} />}
          </div>
        ))}
      </div>
      <div className="space-y-4">{children}</div>
      <div className="flex justify-between mt-8">
        {currentStep > 0 ? <button type="button" onClick={onPrev} className="px-6 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50">Previous</button> : <div />}
        {isLast ? <button type="button" onClick={onSubmit} className="px-6 py-3 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-700">Submit</button> : <button type="button" onClick={onNext} className="px-6 py-3 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-700">Next</button>}
      </div>
    </div>
  );
}
