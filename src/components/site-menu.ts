export type MenuLink = { href: string; label: string };
export type MenuCategory = { label: string; href?: string; items: MenuLink[] };

export const roleMenus: Record<'guests' | 'owners' | 'serviceProviders' | 'agents' | 'pmCompanies', MenuCategory[]> = {
  guests: [
    {
      label: 'For Guests',
      href: '/guests/',
      items: [
        { href: '/guests-vacation-assistance/', label: 'Vacation Assistance' },
        { href: '/guests-what-to-do/', label: 'What to Do & Where to Go' },
        { href: '/guests-destinations/', label: 'Destinations' },
        { href: '/guests-plans-offers/', label: 'Plans & Offers' },
        { href: '/trip-planer/', label: 'Trip Planner' },
        { href: '/guests-personalized-planning/', label: 'Personalized Planning' },
        { href: '/guests-real-estate/', label: 'Real Estate' },
        { href: '/guests-premium-travel-plan/', label: 'Premium Travel Plan' },
        { href: '/guests-help/', label: 'Guest Help & FAQ' },
        { href: '/guests-help-how-booking-works/', label: 'How Booking Works' },
        { href: '/guests-help-rental-policies/', label: 'Rental Policies' },
        { href: '/guests-help-refunds-cancellation/', label: 'Refunds & Cancellation' },
        { href: '/guests-help-contact/', label: 'Support Contacts' },
      ],
    },
  ],
  owners: [
    {
      label: 'Vacation Property Owners',
      href: '/owners-vacation/',
      items: [
        { href: '/owners-vacation-self-managed/', label: 'Self Managed' },
        { href: '/owners-vacation-multi-platform-sync/', label: 'Multi-Platform Sync' },
        { href: '/owners-vacation-full-management/', label: 'Full Management' },
        { href: '/owners-vacation-list-property/', label: 'List My Property' },
        { href: '/owners-vacation-free-evaluation/', label: 'Free Evaluation Form' },
        { href: '/owners-vacation-become-agent/', label: 'Become an Agent' },
        { href: '/owners-vacation-promote-rental/', label: 'Promote My Rental' },
        { href: '/owners-vacation-dashboard/', label: 'Vacation Owner Dashboard' },
      ],
    },
    {
      label: 'Real Estate Property Owners',
      href: '/owners-real-estate/',
      items: [
        { href: '/owners-real-estate-sale-rent/', label: 'Sale or Rent My Property' },
        { href: '/owners-real-estate-list-property/', label: 'List Real Estate Property' },
        { href: '/owners-real-estate-full-service/', label: 'Full-Service Real Estate Help' },
        { href: '/owners-real-estate-invest/', label: 'Invest in a Property' },
        { href: '/owners-real-estate-request-proposals/', label: 'Request Property Proposals' },
        { href: '/owners-real-estate-promotion-tools/', label: 'Promotion Tools' },
      ],
    },
    {
      label: 'Other',
      items: [
        { href: '/owners-faq/', label: 'FAQ for Owners' },
        { href: '/owners-plans-pricing/', label: 'Owner Plans & Pricing' },
      ],
    },
  ],
  serviceProviders: [
    {
      label: 'Main',
      items: [
        { href: '/service-providers-list-promote/', label: 'List & Promote' },
        { href: '/service-providers-list-service/', label: 'List Your Business/Service' },
        { href: '/service-providers-sale-rent-business/', label: 'Sale or Rent Your Business' },
        { href: '/service-providers-free-visibility/', label: 'Free Visibility Evaluation' },
        { href: '/service-providers-dashboard/', label: 'Service Provider Dashboard' },
        { href: '/service-providers-what-you-can-offer/', label: 'What You Can Offer' },
      ],
    },
    {
      label: 'For Guests/Tourists',
      href: '/service-providers-for-guests/',
      items: [
        { href: '/service-providers-for-guests/dining-cafes-nightlife/', label: 'Dining, Cafes & Nightlife' },
        { href: '/service-providers-for-guests/local-activities/', label: 'Local Activities' },
        { href: '/service-providers-for-guests/wellness-spa/', label: 'Wellness & Spa' },
        { href: '/service-providers-for-guests/transfers-transport/', label: 'Transfers & Transport' },
        { href: '/service-providers-for-guests/vehicle-rentals/', label: 'Vehicle Rentals' },
        { href: '/service-providers-for-guests/concierge-event-services/', label: 'Concierge & Event Services' },
        { href: '/service-providers-for-guests/outdoor-activities/', label: 'Outdoor Activities' },
        { href: '/service-providers-for-guests/cultural-performances/', label: 'Cultural Performances' },
        { href: '/service-providers-for-guests/attractions-family-activities/', label: 'Attractions & Family Activities' },
        { href: '/service-providers-for-guests/photo-viewpoint-tours/', label: 'Photo & Viewpoint Tours' },
        { href: '/service-providers-for-guests/medical-health-services/', label: 'Medical & Health Services' },
        { href: '/service-providers-for-guests/retreats-education/', label: 'Retreats & Education' },
        { href: '/service-providers-for-guests/seasonal-events/', label: 'Seasonal Events' },
        { href: '/service-providers-for-guests/volunteer/', label: 'Volunteer' },
      ],
    },
    {
      label: 'For Property Owners / Hosts',
      href: '/service-providers-for-owners/',
      items: [
        { href: '/service-providers-for-owners/cleaning-services/', label: 'Cleaning Services' },
        { href: '/service-providers-for-owners/plumbing-electrical/', label: 'Plumbing & Electrical' },
        { href: '/service-providers-for-owners/laundry-linen/', label: 'Laundry & Linen' },
        { href: '/service-providers-for-owners/check-in-check-out/', label: 'Check-In / Check-Out' },
        { href: '/service-providers-for-owners/technical-repairs/', label: 'Technical Repairs' },
        { href: '/service-providers-for-owners/home-maintenance/', label: 'Home Maintenance' },
      ],
    },
    {
      label: 'Other',
      items: [
        { href: '/service-providers-find-staff/', label: 'Find Staff / Contractors' },
        { href: '/service-providers-grow-your-reach/', label: 'Grow Your Reach' },
        { href: '/service-providers-promotion-tools/', label: 'Promotion Tools & Templates' },
        { href: '/service-providers-invest-tourism/', label: 'Invest in Tourism Businesses' },
        { href: '/service-providers-faq-pricing/', label: 'FAQ & Pricing' },
        { href: '/service-providers-faq/', label: 'Business FAQ' },
        { href: '/service-providers-plans-overview/', label: 'Plans Overview' },
      ],
    },
  ],
  agents: [
    {
      label: 'Book & Get Paid',
      href: '/agents-book-get-paid/',
      items: [
        { href: '/agents-book-get-paid/book-rentals-services-net-pricing/', label: 'Book Rentals & Services with Net Pricing' },
        { href: '/agents-book-get-paid/vacation-property-pool/', label: 'Vacation Property Pool' },
        { href: '/agents-book-get-paid/explore-vacation-services-businesses/', label: 'Explore Vacation Services / Businesses' },
        { href: '/agents-book-get-paid/explore-activities/', label: 'Explore Activities' },
        { href: '/agents-book-get-paid/explore-main-index/', label: 'Explore Main Index' },
        { href: '/agents-book-get-paid/agents-local-activities/', label: 'Agents Local Activities' },
      ],
    },
    {
      label: 'Real Estate',
      items: [
        { href: '/agents-real-estate/input/', label: 'Real Estate Input' },
        { href: '/agents-real-estate/', label: 'Real Estate' },
        { href: '/agents-real-estate/sales-agent-tools/', label: 'Real Estate Sales Agent Tools' },
        { href: '/agents-real-estate/list-properties/', label: 'List Properties on ClickyTour' },
        { href: '/agents-real-estate/tools/', label: 'Real Estate Tools for Agents' },
      ],
    },
    {
      label: 'Tools',
      items: [
        { href: '/agents-tools/', label: 'ClickyTour Tools For Agents' },
        { href: '/agents-tools/advanced-search/', label: 'Advanced Search Tools' },
        { href: '/agents-tools/create-white-label-offers/', label: 'Create White-label Offers' },
        { href: '/agents-tools/branded-templates-chat/', label: 'Branded Templates & Chat Tools' },
        { href: '/agents-dashboard/', label: 'Agent Dashboard' },
      ],
    },
    {
      label: 'Grow & Promote',
      items: [
        { href: '/agents-grow/offer-listings-without-branding/', label: 'Offer Listings Without Branding' },
        { href: '/agents-grow/promote-local-services/', label: 'Promote Local Services' },
        { href: '/work-with-us-affiliate/', label: 'Affiliate Program' },
      ],
    },
    {
      label: 'Help & Support',
      items: [
        { href: '/agents-support-contact/', label: 'Contact & Support (agents)' },
        { href: '/agents-faq/', label: 'FAQ for Agents' },
        { href: '/agents-plans-pricing/', label: 'Agent Plans & Pricing' },
      ],
    },
  ],
  pmCompanies: [
    {
      label: 'Grow Your Portfolio',
      items: [
        { href: '/pm-companies/grow/promote-services-property-owners/', label: 'Promote Your Services to Property Owners' },
        { href: '/pm-companies/grow/get-matched-new-properties/', label: 'Get Matched with New Properties' },
        { href: '/pm-companies/grow/showcase-properties-white-label/', label: 'Showcase Your Properties (White-label)' },
      ],
    },
    {
      label: 'Increase Bookings',
      items: [
        { href: '/pm-companies/bookings/vacation-property-pool/', label: 'Vacation Property Pool' },
        { href: '/pm-companies/bookings/list-your-properties/', label: 'List Your Properties' },
        { href: '/pm-companies/bookings/allow-agents-book-net-pricing/', label: 'Allow Agents to Book (Net Pricing)' },
      ],
    },
    {
      label: 'Manage & Operate',
      items: [
        { href: '/pm-companies/manager-dashboard/', label: 'Manager Dashboard' },
        { href: '/pm-companies/channel-manager-integration/', label: 'Channel Manager Integration' },
        { href: '/pm-companies/tools-center/', label: 'Tools Center' },
      ],
    },
    {
      label: 'Help & Support',
      items: [
        { href: '/pm-companies-faq/', label: 'FAQ for Managers' },
        { href: '/pm-companies-plans-pricing/', label: 'Manager Plans & Pricing' },
      ],
    },
  ],
};
