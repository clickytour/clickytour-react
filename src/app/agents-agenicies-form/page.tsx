'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { PageShell, Hero } from '@/components/site';
import { AgentsApplyForm } from '@/components/forms';

export default function AgentsAgenciesForm() {
  return (<Suspense fallback={null}><AgentsAgenciesFormInner /></Suspense>);
}

function AgentsAgenciesFormInner() {
  const searchParams = useSearchParams();
  const iv: Record<string, string> = {};
  if (searchParams.get('source')) {
    if (searchParams.get('agencyName')) iv.businessName = searchParams.get('agencyName')!;
    if (searchParams.get('markets')) iv.regions = searchParams.get('markets')!;
    if (searchParams.get('email')) iv.email = searchParams.get('email')!;
    if (searchParams.get('phone')) iv.phone = searchParams.get('phone')!;
  }

  return (
    <PageShell>
      <Hero
        title="Work Smarter. Sell More. Earn More."
        subtitle="Apply to access rentals, services, and real-estate inventory with white-label offers and net-pricing options."
        ctaA="Start Application"
        ctaB="Back to Agents"
      />
      <AgentsApplyForm initialValues={iv} />
    </PageShell>
  );
}
