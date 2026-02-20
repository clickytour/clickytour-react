'use client';
import { PageShell, Hero } from '@/components/site';
import { AgentsApplyForm } from '@/components/forms';

export default function AgentsAgenciesForm() {
  return (
    <PageShell>
      <Hero
        title="Work Smarter. Sell More. Earn More."
        subtitle="Apply to access rentals, services, and real-estate inventory with white-label offers and net-pricing options."
        ctaA="Start Application"
        ctaB="Back to Agents"
      />
      <AgentsApplyForm />
    </PageShell>
  );
}
