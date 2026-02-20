import React from 'react';
import ThankYouTemplate from '@/components/thank-you-template';

const steps = [
  { icon: '📍', text: 'Route to local real estate experts' },
  { icon: '🏠', text: 'Prepare matching property options' },
  { icon: '✉️', text: 'Contact with curated proposals' },
];

export default function ThankYouGuestRealEstate() {
  return (
    <ThankYouTemplate
      icon="✅"
      title="Thank you — we received your real estate inquiry."
      subtitle="We will connect you with the best real estate professionals."
      steps={steps}
      ctaLabel="Back to Real Estate"
      ctaHref="/real-estate"
    />
  );
}
