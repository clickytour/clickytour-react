import React from 'react';
import ThankYouTemplate from '@/components/thank-you-template';

const steps = [
  { icon: '📄', text: 'Request routed by intent/property type/location' },
  { icon: '📝', text: 'Evaluation/listing/sales support based on type' },
  { icon: '✉️', text: 'Contact by email/WhatsApp' },
];

const urgentSection = {
  text: 'Contact us urgently by email or WhatsApp',
};

export default function ThankYouRealEstateOwner() {
  return (
    <ThankYouTemplate
      icon="✅"
      title="Thank you — we received your request."
      subtitle="We will process your real estate request promptly."
      steps={steps}
      urgentSection={urgentSection}
      ctaLabel="Back to Home"
      ctaHref="/"
    />
  );
}
