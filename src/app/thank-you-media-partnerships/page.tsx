import React from 'react';
import ThankYouTemplate from '@/components/thank-you-template';

const steps = [
  { icon: '📄', text: 'Review partnership proposal' },
  { icon: '🔍', text: 'Evaluate alignment and reach' },
  { icon: '✉️', text: 'Contact with collaboration details' },
];

export default function ThankYouMediaPartnerships() {
  return (
    <ThankYouTemplate
      icon="✅"
      title="Thank you — we received your media partnership inquiry."
      subtitle="We will review your inquiry and get back to you."
      steps={steps}
      ctaLabel="Back to About Us"
      ctaHref="/about"
    />
  );
}
