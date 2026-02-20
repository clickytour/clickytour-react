import ThankYouTemplate from '@/components/thank-you-template';

const steps = [
  { icon: '📋', text: 'ClickyTour reviews your claim and verifies your profile' },
  { icon: '📞', text: 'We facilitate the introduction between you and the property owner' },
  { icon: '✅', text: 'Once both parties agree, you can start the engagement' },
];

export default function ThankYouMarketplaceClaim() {
  return (
    <ThankYouTemplate
      icon="🤝"
      title="Claim Submitted!"
      subtitle="We've received your claim request. ClickyTour will review and connect you with the listing owner."
      steps={steps}
      ctaLabel="Browse More Requests"
      ctaHref="/pmc-requests-pool"
    />
  );
}
