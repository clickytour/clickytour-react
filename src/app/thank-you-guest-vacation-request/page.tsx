import React from 'react';
import ThankYouTemplate from '@/components/thank-you-template';

const steps = [
  { icon: '🏠', text: 'Match with available properties in your dates/location' },
  { icon: '📅', text: 'Check availability and best rates' },
  { icon: '✉️', text: 'Send personalized vacation proposals' },
];

export default function ThankYouGuestVacationRequest() {
  return (
    <ThankYouTemplate
      icon="✅"
      title="Thank you — we received your vacation request."
      subtitle="We will find the best vacation options for you."
      steps={steps}
      ctaLabel="Back to Vacation Rentals"
      ctaHref="/vacation-rentals"
    />
  );
}
