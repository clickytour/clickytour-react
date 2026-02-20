'use client';
import { PageShell, Hero } from '@/components/site';
import { PMCApplyFormDiagram } from '@/components/diagrams';
import { PmcApplyForm } from '@/components/forms';

export default function PMCApply() {
  return (
    <PageShell>
      <Hero
        title="Apply as a PMC Partner on ClickyTour"
        subtitle="Complete the onboarding form to join our collaboration ecosystem. We review your portfolio profile, regional coverage, and operating model."
        ctaA="Start Application"
        ctaB="Back to Collaborate"
        diagram={<PMCApplyFormDiagram />}
      />
      <PmcApplyForm />
    </PageShell>
  );
}
