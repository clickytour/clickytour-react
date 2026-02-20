import React from 'react';
import ThankYouTemplate from '@/components/thank-you-template';

const steps = [
  { icon: '🔎', text: 'Match request with local service providers' },
  { icon: '📊', text: 'Compare options and availability' },
  { icon: '✉️', text: 'Send you personalized recommendations' },
];

export default function ThankYouGuestServiceRequest() {
  return (
    <ThankYouTemplate
      icon="✅"
      title="Thank you — we received your service request."
      subtitle="We are processing your request and will get back shortly."
      steps={steps}
      ctaLabel="Back to Services"
      ctaHref="/services"
    />
  );
}
