import React from 'react';
import ThankYouTemplate from '@/components/thank-you-template';

const steps = [
  { icon: '📋', text: 'Review company profile and portfolio' },
  { icon: '🌍', text: 'Assess regional coverage and capacity' },
  { icon: '✉️', text: 'Contact with partnership onboarding details' },
];

export default function ThankYouPmc() {
  return (
    <ThankYouTemplate
      icon="✅"
      title="Thank you — we received your PMC application."
      subtitle="We will evaluate your company profile and contact you soon."
      steps={steps}
      ctaLabel="Back to PM Companies"
      ctaHref="/pm-companies"
    />
  );
}
