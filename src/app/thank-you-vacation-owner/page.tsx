import React from 'react';
import ThankYouTemplate from '@/components/thank-you-template';

const steps = [
  { icon: '📄', text: 'Request routed by intent/property type/region' },
  { icon: '📝', text: 'Evaluation/listing/onboarding/service coordination' },
  { icon: '✉️', text: 'Contact by email/WhatsApp' },
];

const urgentSection = {
  text: 'Contact us urgently by email or WhatsApp',
};

export default function ThankYouVacationOwner() {
  return (
    <ThankYouTemplate
      icon="✅"
      title="Thank you — we received your request."
      subtitle="We will get back to you regarding your vacation property request."
      steps={steps}
      urgentSection={urgentSection}
      ctaLabel="Back to Home"
      ctaHref="/"
    />
  );
}
