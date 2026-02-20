import ThankYouTemplate from '@/components/thank-you-template';

const steps = [
  { icon: '🔍', text: 'Our partnerships team reviews your B2B application' },
  { icon: '📞', text: 'We schedule a discovery call to discuss collaboration opportunities' },
  { icon: '🤝', text: 'Onboard as a ClickyTour ecosystem partner with mutual referral benefits' },
];

export default function ThankYouPartnerApplication() {
  return (
    <ThankYouTemplate
      icon="🤝"
      title="Partnership Application Received!"
      subtitle="Thank you for your interest in joining the ClickyTour B2B ecosystem."
      steps={steps}
      ctaLabel="Explore Partner Directory"
      ctaHref="/directory/partners"
    />
  );
}
