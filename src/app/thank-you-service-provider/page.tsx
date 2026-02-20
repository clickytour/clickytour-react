import React from 'react';
import ThankYouTemplate from '@/components/thank-you-template';

const steps = [
  { icon: '📄', text: 'Request routed by intent/service type/region' },
  { icon: '📋', text: 'Listings/staff/requests/marketing based on selection' },
  { icon: '✉️', text: 'Contact by email/WhatsApp' },
];

const urgentSection = {
  text: 'Contact us urgently by email or WhatsApp',
};

export default function ThankYouServiceProvider() {
  return (
    <ThankYouTemplate
      icon="✅"
      title="Thank you — we received your request."
      subtitle="We will review your service provider request shortly."
      steps={steps}
      urgentSection={urgentSection}
      ctaLabel="Back to Home"
      ctaHref="/"
    />
  );
}
