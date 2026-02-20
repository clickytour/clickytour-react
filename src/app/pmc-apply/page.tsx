'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { PageShell, Hero } from '@/components/site';
import { PMCApplyFormDiagram } from '@/components/diagrams';
import { PmcApplyForm } from '@/components/forms';

export default function PMCApply() {
  return (<Suspense fallback={null}><PMCApplyInner /></Suspense>);
}

function PMCApplyInner() {
  const searchParams = useSearchParams();
  const iv: Record<string, string> = {};
  if (searchParams.get('source')) {
    if (searchParams.get('companyName')) iv.companyName = searchParams.get('companyName')!;
    if (searchParams.get('region')) iv.regions = searchParams.get('region')!;
    if (searchParams.get('email')) iv.email = searchParams.get('email')!;
    if (searchParams.get('phone')) iv.phone = searchParams.get('phone')!;
  }

  return (
    <PageShell>
      <Hero
        title="Apply as a PMC Partner on ClickyTour"
        subtitle="Complete the onboarding form to join our collaboration ecosystem. We review your portfolio profile, regional coverage, and operating model."
        ctaA="Start Application"
        ctaB="Back to Collaborate" ctaHrefA="/pmc-apply" ctaHrefB="/pm-companies"
        diagram={<PMCApplyFormDiagram />}
      />
      <PmcApplyForm initialValues={iv} />
    </PageShell>
  );
}
