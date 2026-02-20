import ThankYouTemplate from '@/components/thank-you-template';

const steps = [
  { icon: '🔍', text: 'Your submission is now visible in the marketplace pool (with protected contact info)' },
  { icon: '🏢', text: 'Qualified professionals will review and express interest in your listing' },
  { icon: '🤝', text: 'ClickyTour facilitates introductions — you choose who to work with' },
];

export default function ThankYouMarketplaceSubmission() {
  return (
    <ThankYouTemplate
      icon="✅"
      title="Property Submitted Successfully!"
      subtitle="Your listing is now live in the ClickyTour marketplace. We'll notify you when professionals express interest."
      steps={steps}
      ctaLabel="View Marketplace"
      ctaHref="/marketplace"
    />
  );
}
