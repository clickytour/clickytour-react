import ThankYouTemplate from '@/components/thank-you-template';

const steps = [
  { icon: '🏨', text: 'We verify your hotel details and star rating' },
  { icon: '📸', text: 'Your property appears in the Hotels directory with full profile' },
  { icon: '📩', text: 'Guests and agents can discover and contact you directly' },
];

export default function ThankYouHotelListing() {
  return (
    <ThankYouTemplate
      icon="✅"
      title="Hotel Listing Submitted!"
      subtitle="Your hotel will appear in the ClickyTour directory after a brief verification."
      steps={steps}
      ctaLabel="Browse Hotels Directory"
      ctaHref="/directory/hotels"
    />
  );
}
