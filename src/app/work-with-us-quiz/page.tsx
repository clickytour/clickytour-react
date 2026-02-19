'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Hero, PageShell, SectionTitle } from '@/components/site';

type RoleKey = 'guests' | 'owners' | 'service-providers' | 'agents' | 'pm-companies';

type AnswerOption = {
  label: string;
  role: RoleKey;
  hint: string;
  icon: string;
};

const roleMap: Record<RoleKey, { title: string; href: string; description: string }> = {
  guests: {
    title: 'Guest / Traveler',
    href: '/guests/',
    description: 'Book stays, discover local services, and plan complete trip experiences.',
  },
  owners: {
    title: 'Property Owner',
    href: '/owners/',
    description: 'List and promote your property, improve occupancy, and simplify operations.',
  },
  'service-providers': {
    title: 'Service Provider',
    href: '/service-providers/',
    description: 'Offer cleaning, transfers, tours, and local services to guests and owners.',
  },
  agents: {
    title: 'Agent / Affiliate',
    href: '/agents/',
    description: 'Promote listings, earn commissions, and grow your client portfolio.',
  },
  'pm-companies': {
    title: 'PM Company',
    href: '/pm-companies/',
    description: 'Manage multiple properties with workflows built for scale and performance.',
  },
};

const stepOneOptions: AnswerOption[] = [
  { label: 'I travel and book stays', role: 'guests', hint: 'Accommodation + local experiences', icon: '✈️' },
  { label: 'I own a property', role: 'owners', hint: 'Rentals, sales, and exposure', icon: '🏡' },
  { label: 'I offer local services', role: 'service-providers', hint: 'Cleaning, tours, transport, wellness', icon: '🛎️' },
  { label: 'I sell/promote properties', role: 'agents', hint: 'Agency, affiliate, referral business', icon: '🤝' },
  { label: 'I run a management company', role: 'pm-companies', hint: 'Operations for multiple properties', icon: '🏢' },
];

const stepTwoOptions: AnswerOption[] = [
  { label: 'I need booking tools and destination support', role: 'guests', hint: 'Best fit for travelers', icon: '🧳' },
  { label: 'I need more visibility and owner-side control', role: 'owners', hint: 'Best fit for owners', icon: '📈' },
  { label: 'I want to receive service leads regularly', role: 'service-providers', hint: 'Best fit for providers', icon: '🧰' },
  { label: 'I want referral earnings and white-label offers', role: 'agents', hint: 'Best fit for agents', icon: '💼' },
  { label: 'I need central tools for teams and portfolio growth', role: 'pm-companies', hint: 'Best fit for PM companies', icon: '📊' },
];

export default function WorkWithUsQuizPage() {
  const [step, setStep] = useState(1);
  const [primaryRole, setPrimaryRole] = useState<RoleKey | null>(null);
  const [goalRole, setGoalRole] = useState<RoleKey | null>(null);

  const resultRole = useMemo<RoleKey | null>(() => goalRole || primaryRole, [goalRole, primaryRole]);
  const result = resultRole ? roleMap[resultRole] : null;

  return (
    <PageShell>
      <Hero
        title="Find Your Role on ClickyTour"
        subtitle="A quick 2-step quiz to match you with the right role, tools, and next actions in our ecosystem."
        ctaA="Start Quiz"
        ctaB="Explore Roles"
      />

      <section className="section section-soft">
        <div className="container max-w-5xl">
          <SectionTitle
            eyebrow="Interactive Role Finder"
            title="What describes you best?"
            subtitle="Pick the option that best matches your current profile and goals."
          />

          <div className="card p-6 md:p-8">
            <div className="flex gap-2 mb-6">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className={`h-2 rounded-full flex-1 ${step >= n ? 'bg-cyan-500' : 'bg-slate-200'}`}
                />
              ))}
            </div>

            {step === 1 && (
              <>
                <h3 className="text-2xl font-extrabold text-slate-900">Step 1: Your current role</h3>
                <p className="text-slate-600 mt-2">Select one option to continue.</p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {stepOneOptions.map((option) => (
                    <button
                      key={option.label}
                      onClick={() => {
                        setPrimaryRole(option.role);
                        setStep(2);
                      }}
                      className="text-left rounded-xl border border-cyan-100 bg-white hover:border-cyan-400 hover:bg-cyan-50/60 transition p-4"
                    >
                      <p className="text-2xl">{option.icon}</p>
                      <p className="font-bold mt-2 text-slate-900">{option.label}</p>
                      <p className="text-sm text-slate-600 mt-1">{option.hint}</p>
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h3 className="text-2xl font-extrabold text-slate-900">Step 2: Your main goal</h3>
                <p className="text-slate-600 mt-2">Choose what you want to achieve next.</p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {stepTwoOptions.map((option) => (
                    <button
                      key={option.label}
                      onClick={() => {
                        setGoalRole(option.role);
                        setStep(3);
                      }}
                      className="text-left rounded-xl border border-cyan-100 bg-white hover:border-cyan-400 hover:bg-cyan-50/60 transition p-4"
                    >
                      <p className="text-2xl">{option.icon}</p>
                      <p className="font-bold mt-2 text-slate-900">{option.label}</p>
                      <p className="text-sm text-slate-600 mt-1">{option.hint}</p>
                    </button>
                  ))}
                </div>
                <button onClick={() => setStep(1)} className="mt-6 text-sm font-semibold text-cyan-700 hover:text-cyan-800">
                  ← Back
                </button>
              </>
            )}

            {step === 3 && result && (
              <>
                <h3 className="text-2xl font-extrabold text-slate-900">Your best match: {result.title}</h3>
                <p className="text-slate-600 mt-2 max-w-2xl">{result.description}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href={result.href} className="btn-primary">Go to {result.title} Page</Link>
                  <button
                    onClick={() => {
                      setPrimaryRole(null);
                      setGoalRole(null);
                      setStep(1);
                    }}
                    className="btn-secondary"
                  >
                    Retake Quiz
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
