import React from 'react';
import ThankYouTemplate from '@/components/thank-you-template';

const steps = [
  { icon: '🔍', text: 'We check role/location/availability/experience' },
  { icon: '🤝', text: 'If fit, connect with PMC/client' },
  { icon: '✉️', text: 'Contact by email/WhatsApp' },
];

const urgentSection = {
  text: 'Contact us urgently by email or WhatsApp',
};

export default function ThankYouJobSeeker() {
  return (
    <ThankYouTemplate
      icon="✅"
      title="Thank you — we received your application."
      subtitle="We appreciate your interest and will review your submission promptly."
      steps={steps}
      urgentSection={urgentSection}
      ctaLabel="Back to Home"
      ctaHref="/"
    />
  );
}
