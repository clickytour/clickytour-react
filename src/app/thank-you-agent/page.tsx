import React from 'react';
import ThankYouTemplate from '@/components/thank-you-template';

const steps = [
  { icon: '📑', text: 'Review credentials/region/specialization' },
  { icon: '🏘️', text: 'Match with available property pools' },
  { icon: '✉️', text: 'Contact by email with onboarding steps' },
];

export default function ThankYouAgent() {
  return (
    <ThankYouTemplate
      icon="✅"
      title="Thank you — we received your agent application."
      subtitle="We appreciate your interest and will review your application carefully."
      steps={steps}
      ctaLabel="Back to Agents"
      ctaHref="/agents"
    />
  );
}
