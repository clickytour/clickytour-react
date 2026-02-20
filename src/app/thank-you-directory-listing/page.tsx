import ThankYouTemplate from '@/components/thank-you-template';

const steps = [
  { icon: '✏️', text: 'We review your listing details and verify your business profile' },
  { icon: '🌐', text: 'Your listing goes live in the ClickyTour directory (usually within 24h)' },
  { icon: '📈', text: 'Start receiving inquiries from potential clients across Greece' },
];

export default function ThankYouDirectoryListing() {
  return (
    <ThankYouTemplate
      icon="🎉"
      title="You're Almost Listed!"
      subtitle="Your directory listing has been submitted. We'll review and publish it shortly."
      steps={steps}
      ctaLabel="Explore Marketplace"
      ctaHref="/marketplace"
    />
  );
}
