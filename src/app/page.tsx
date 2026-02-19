"use client";

import { useMemo, useState } from 'react';
import { PageShell } from '@/components/site';

type RoleKey =
  | 'Guest'
  | 'Vacation Owner'
  | 'Real Estate Owner'
  | 'Service Provider'
  | 'Agent'
  | 'PM Company'
  | 'Job Seeker'
  | 'Media & Partners';

type RoleData = {
  heroTitle: string;
  heroSubtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  formTitle: string;
  formSubtitle: string;
  formRoleLabel: string;
  formFields: string[];
  formNote?: string;
  quickPills: string[];
  whatYouGet: string[];
  nextStepsTitle: string;
  nextStepsSubtitle: string;
  nextSteps: { title: string; desc: string; linkText: string }[];
  howItWorks: { title: string; desc: string }[];
  toolsTitle: string;
  tools: { title: string; desc: string; linkText: string }[];
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaButtons: [string, string];
};

const roleTabs: RoleKey[] = [
  'Guest',
  'Vacation Owner',
  'Real Estate Owner',
  'Service Provider',
  'Agent',
  'PM Company',
  'Job Seeker',
  'Media & Partners',
];

const baseHowItWorks = [
  { title: 'Choose role', desc: 'Pick your profile to unlock the right workflow.' },
  { title: 'Submit', desc: 'Send your request or listing details in minutes.' },
  { title: 'Automate', desc: 'Use role-based tools to reduce manual work.' },
  { title: 'Get results', desc: 'Track activity, leads, bookings, and outcomes.' },
];

const faqFromQuestions = (questions: string[]) =>
  questions.map((q) => ({
    q,
    a: 'Use the quick form and our team will guide you with the right next steps.',
  }));

const defaultRoleContent: RoleData = {
  heroTitle: 'One platform for rentals, real estate, and local services — built for every role.',
  heroSubtitle:
    'List, promote, manage, and get paid with automated tools, transparent pricing, and white-label presentations.',
  ctaPrimary: 'Explore how it works',
  ctaSecondary: 'Choose a role',
  formTitle: 'How would you like to work with ClickyTour?',
  formSubtitle: 'Choose a role to see the right quick form.',
  formRoleLabel: '- Choose...',
  formFields: [],
  formNote: "We'll prefill the next step and match you instantly.",
  quickPills: ['Automated tools', 'No hidden fees', 'Best rates logic', 'Fast onboarding', 'Verified partners', 'Support when needed'],
  whatYouGet: [
    'Role-based dashboards & automation',
    'Transparent pricing & fee rules',
    'White-label presentations & offers',
    'Fast, trackable payouts',
  ],
  nextStepsTitle: 'Start here',
  nextStepsSubtitle: 'Choose a role above (or in the mini-form) to see your next steps.',
  nextSteps: [
    {
      title: 'Guests',
      desc: 'Discover rentals, services, and experiences with clear pricing.',
      linkText: 'Explore →',
    },
    {
      title: 'Partners',
      desc: 'Owners, PMCs, providers: list, automate, and grow with dashboards.',
      linkText: 'See tools →',
    },
    {
      title: 'Agents & Jobs',
      desc: 'Create offers with net logic, or apply and get discovered.',
      linkText: 'Learn more →',
    },
  ],
  howItWorks: [
    { title: 'Choose role', desc: 'Switch the homepage to your path.' },
    { title: 'Submit', desc: 'List property/service or post a request.' },
    { title: 'Automate', desc: 'Use tools to manage & promote.' },
    { title: 'Get results', desc: 'Track earnings, leads, or next steps.' },
  ],
  toolsTitle: 'Automated tools for your role',
  tools: [
    { title: 'Explore Destinations', desc: 'Discover rental and service opportunities by location and goal.', linkText: 'Learn more' },
    { title: 'How the platform works', desc: 'Understand flows for guests, owners, providers, and partners.', linkText: 'Learn more' },
    { title: 'Automated tools overview', desc: 'See dashboards, automation, and workflow shortcuts in one view.', linkText: 'Learn more' },
    { title: 'White-label presentations', desc: 'Create branded/no-brand presentations and offer links fast.', linkText: 'Learn more' },
    { title: 'Transparent pricing rules', desc: 'Know exactly how pricing and fee logic works before you start.', linkText: 'Learn more' },
    { title: 'Support & FAQ', desc: 'Get guided answers and assistance whenever you need it.', linkText: 'Learn more' },
  ],
  faq: faqFromQuestions([
    'What is ClickyTour?',
    'Are there hidden fees?',
    'How do I start?',
    'Do I need staff to manage?',
    'What is white-label?',
    'How do payouts work?',
  ]),
  ctaTitle: 'Pick your role and start in minutes.',
  ctaText: "You'll be guided to the right listing or request form.",
  ctaButtons: ['Explore how it works', 'How it works'],
};

const roleContent: Record<RoleKey, RoleData> = {
  Guest: {
    heroTitle: 'Explore vacations and services — with clear prices and simple booking.',
    heroSubtitle: 'Find family trips, romantic escapes, and travel help in one place — no confusion, no hidden fees.',
    ctaPrimary: 'Explore Destinations',
    ctaSecondary: 'Request a Travel Plan',
    formTitle: 'Request your vacation stay',
    formSubtitle: 'Fill the form and we will respond quickly with curated proposals within 1 business day.',
    formRoleLabel: 'Guest (Travel & Rentals)',
    formFields: ['Check-in', 'Check-out', 'Destination/Region?', 'Adults', 'Email', 'Phone'],
    quickPills: ['Smart discovery', 'Travel planning', 'Trusted partners', 'Deals & offers', 'Trip directory', 'Payment', 'Support'],
    whatYouGet: ['Smart discovery & offers', 'Clear pricing before you book', 'Trusted partners & reviews', 'Support when needed'],
    nextStepsTitle: 'Next steps for Guests',
    nextStepsSubtitle: 'Start quickly and move step-by-step with guided actions.',
    nextSteps: [
      { title: 'Browse & compare', desc: 'Explore rentals, destinations, and activities with filters.', linkText: 'Explore →' },
      { title: 'Request a plan', desc: 'Share your trip details and receive tailored proposals.', linkText: 'Request →' },
      { title: 'Save options', desc: 'Save favorites and share with your group.', linkText: 'Favorites →' },
    ],
    howItWorks: baseHowItWorks,
    toolsTitle: 'Tools for Guests',
    tools: [
      { title: 'Smart Search', desc: 'Explore rentals, services, and destinations with filters.', linkText: 'Learn more' },
      { title: 'Personalized Planning', desc: 'Work with us to get curated travel to your taste.', linkText: 'Learn more' },
      { title: 'Deals & Offers', desc: 'Track seasonal deals and limited packages.', linkText: 'Learn more' },
      { title: 'Favorite & Sharing', desc: 'Save listings and share with your group.', linkText: 'Learn more' },
      { title: 'Support & Policies', desc: 'Refunds, cancellations, and booking guidance.', linkText: 'Learn more' },
      { title: 'Secure Payments (where applicable)', desc: 'Safe transactions with payment status tracking.', linkText: 'Learn more' },
    ],
    faq: faqFromQuestions([
      'How do I start?',
      'Are there hidden fees?',
      'What does "best rates" mean?',
      'Can I contact a provider directly?',
      'How do refunds work?',
    ]),
    ctaTitle: 'Ready to explore?',
    ctaText: 'Find destinations and browse rentals/services, or request a personalized plan.',
    ctaButtons: ['Explore Destinations', 'How it works'],
  },
  'Vacation Owner': {
    heroTitle: 'List your vacation rental and manage with automation — not extra staff.',
    heroSubtitle: 'Availability, promotion tools, and partner presentations — with transparent fees and easy payouts.',
    ctaPrimary: 'List My Property',
    ctaSecondary: 'Get Free Evaluation',
    formTitle: 'List your vacation property',
    formSubtitle: 'Fill the form and we will respond quickly with the best next steps within 1 business day.',
    formRoleLabel: 'Vacation Property Owner / Host',
    formFields: ['Property Type*', 'Email*', 'Last name', 'Phone'],
    quickPills: ['Owner Dashboard', 'Calendar & sync', 'Promotion tools', 'Pricing tracking', 'White label', 'Pricing', 'Agent collaboration', 'Feedback & reviews'],
    whatYouGet: ['Owner dashboards & automation', 'No hidden fees', 'White-label presentations', 'Earnings & payouts tracking'],
    nextStepsTitle: 'Next steps for Vacation Owners',
    nextStepsSubtitle: 'Start quickly and move step-by-step with guided actions.',
    nextSteps: [
      { title: 'Create your listing', desc: 'Add property details and publish to the network.', linkText: 'List property →' },
      { title: 'Set availability', desc: 'Manage your calendar and sync with other subscriptions.', linkText: 'Calendar →' },
      { title: 'Promote & share', desc: 'Use tools + white-label links to share your rental.', linkText: 'Promotion →' },
    ],
    howItWorks: baseHowItWorks,
    toolsTitle: 'Tools for Vacation Owners',
    tools: [
      { title: 'Listing + Owner Dashboard', desc: 'Create listing and manage the key metrics.', linkText: 'Learn more' },
      { title: 'Availability & Calendar', desc: 'Manage availability and sync connections.', linkText: 'Learn more' },
      { title: 'Promotion Tools', desc: 'Social media and marketplace marketing flows.', linkText: 'Learn more' },
      { title: 'Financial Tracking', desc: 'Track earnings with summary and reporting.', linkText: 'Learn more' },
      { title: 'Service Requests', desc: 'Request cleaning, support, and other services for your rental.', linkText: 'Learn more' },
      { title: 'White-label Offer Links', desc: 'Share with partners rooms via branded links.', linkText: 'Learn more' },
    ],
    faq: faqFromQuestions([
      'Is listing free?',
      'Do I need staff to manage?',
      'How do payouts work?',
      'Can agents promote my property?',
      'What is white-label?',
    ]),
    ctaTitle: 'Ready to list your rental?',
    ctaText: 'Start the listing and choose the model that fits you.',
    ctaButtons: ['List My Property', 'How it works'],
  },
  'Real Estate Owner': {
    heroTitle: 'Sell or rent your real estate with a clear workflow and professional presentation.',
    heroSubtitle: 'Listing, presentation, proposals, and support tools — designed to attract brokers and save time.',
    ctaPrimary: 'List My Property',
    ctaSecondary: 'Request Full-Service Help',
    formTitle: 'Sell or rent your property',
    formSubtitle: 'Fill the form and we will respond quickly with the best next steps within 1 business day.',
    formRoleLabel: 'Real Estate Seller / Landlord',
    formFields: ['Property Type*', 'City/Region*', 'Email*', 'Phone'],
    quickPills: ['Selected listing', 'Proposals', 'Promotion tools', 'Agent collaboration', 'Promotion', 'Tracking & reports'],
    whatYouGet: ['Real estate listing tools', 'Transparent pricing rules', 'White-label presentations', 'Lead & proposal workflow'],
    nextStepsTitle: 'Next steps for Real Estate Owners',
    nextStepsSubtitle: 'Start quickly and move step-by-step with guided actions.',
    nextSteps: [
      { title: 'List property', desc: 'Create a sale or listing in minutes.', linkText: 'List now →' },
      { title: 'Request proposals', desc: 'Ask for brokers/agents to review proposals.', linkText: 'Request →' },
      { title: 'Share presentations', desc: 'Branded proposals to send via PDF.', linkText: 'White label →' },
    ],
    howItWorks: baseHowItWorks,
    toolsTitle: 'Tools for Real Estate Owners',
    tools: [
      { title: 'List Property (Sale/Rent)', desc: 'Create a real estate listing to the network.', linkText: 'Learn more' },
      { title: 'Request Proposals', desc: 'Set for brokers/agents to propose acquisitions on listings.', linkText: 'Learn more' },
      { title: 'Promotion Tools', desc: 'Promote with tools and competitions.', linkText: 'Learn more' },
      { title: 'White-label Showcase', desc: 'Showcase your real property presentation links.', linkText: 'Learn more' },
      { title: 'Agent Collaboration', desc: 'Assign agents and manage collaboration.', linkText: 'Learn more' },
      { title: 'Reporting & Tracking', desc: 'Track views, inquiries, and results.', linkText: 'Learn more' },
    ],
    faq: faqFromQuestions([
      'Can I list for sale and for rent?',
      'Are fees transparent?',
      'Can I use white-label presentations?',
      'Do you guarantee best prices?',
      'Can you help with the process?',
    ]),
    ctaTitle: 'Ready to list your real estate?',
    ctaText: 'Create a listing or request proposals in minutes.',
    ctaButtons: ['List My Property', 'How it works'],
  },
  'Service Provider': {
    heroTitle: 'List your business/service and get visibility — with automation, not extra staff.',
    heroSubtitle: 'A universal provider workspace: listing editor, inquiries, scheduling, templates, and clear pricing rules.',
    ctaPrimary: 'List My Service',
    ctaSecondary: 'See Plans & Pricing',
    formTitle: 'List your business / service',
    formSubtitle: 'Fill the form and we will respond quickly with tailored onboarding steps within 1 business day.',
    formRoleLabel: 'Local Business / Service Provider',
    formFields: ['Service Type*', 'Region*', 'Email*', 'Phone'],
    quickPills: ['Universal workspace', 'Leads & requests', 'Scheduling', 'Templates', 'Net/gross rules', 'Hire staff'],
    whatYouGet: ['Universal provider workspace', 'No hidden fees', 'Direct leads & requests', 'Easy payouts (where applicable)'],
    nextStepsTitle: 'Next steps for Service Providers',
    nextStepsSubtitle: 'Start quickly and move step-by-step with guided actions.',
    nextSteps: [
      { title: 'Create listing', desc: 'Add your services/plans and publish.', linkText: 'List service →' },
      { title: 'Set pricing model', desc: 'Configure pricing and booking logic.', linkText: 'Pricing →' },
      { title: 'Get leads', desc: 'Receive requests from guests/clients/agents.', linkText: 'Requests →' },
    ],
    howItWorks: baseHowItWorks,
    toolsTitle: 'Tools for Service Providers',
    tools: [
      { title: 'Universal Listing Editor', desc: 'Publish your services & set up flows.', linkText: 'Learn more' },
      { title: 'Leads & Direct Requests', desc: 'Get requests from guests, owners, agents.', linkText: 'Learn more' },
      { title: 'Availability & Scheduling', desc: 'Manage slot-like or preset schedules.', linkText: 'Learn more' },
      { title: 'Templates & Messaging', desc: 'Create templates for client communication.', linkText: 'Learn more' },
      { title: 'Net/Gross Pricing', desc: 'Manage how pricing works for clients.', linkText: 'Learn more' },
      { title: 'Find Staff / Contractors', desc: 'Hire sub-contractors as per needs.', linkText: 'Learn more' },
    ],
    faq: faqFromQuestions([
      'Do I pay commission?',
      'Do I need staff for management?',
      'Can agents resell my service?',
      'Can I appear in multiple categories?',
      'How do I get paid?',
    ]),
    ctaTitle: 'Ready to list your service?',
    ctaText: 'Publish your listing and start receiving requests.',
    ctaButtons: ['List My Service', 'How it works'],
  },
  Agent: {
    heroTitle: 'Become an agent: search inventory, create offers, and earn — fast.',
    heroSubtitle: 'Advanced search + 1-click white-label offers + templates — designed for selling without friction.',
    ctaPrimary: 'Become an Agent',
    ctaSecondary: 'Create White-label Offer',
    formTitle: 'Become an agent partner',
    formSubtitle: 'Fill the form and we will respond quickly with access steps within 1 business day.',
    formRoleLabel: 'Travel Agent / Agency Partner',
    formFields: ['Agency Name*', 'Markets*', 'Email*', 'Phone'],
    quickPills: ['Advanced search', 'Net rates', 'White-label PDF', 'Templates', 'Agent dashboard', 'Payout tracking'],
    whatYouGet: ['Advanced search across inventory', 'White-label offers & PDFs', 'Messaging templates', 'Track earnings & payouts'],
    nextStepsTitle: 'Next steps for Agents',
    nextStepsSubtitle: 'Start quickly and move step-by-step with guided actions.',
    nextSteps: [
      { title: 'Join as agent', desc: 'Create your agent profile and access tools.', linkText: 'Join →' },
      { title: 'Create offer', desc: 'Generate white-label via/PDF in 1 click.', linkText: 'Offer →' },
      { title: 'Track earnings', desc: 'Monitor leads, bookings, payouts.', linkText: 'Dashboard →' },
    ],
    howItWorks: baseHowItWorks,
    toolsTitle: 'Tools for Agents',
    tools: [
      { title: 'Advanced Search', desc: 'Filter across rentals and inventory.', linkText: 'Learn more' },
      { title: 'White-label Offers', desc: 'Create branded or no-logo PDF with your branding.', linkText: 'Learn more' },
      { title: 'Templates & Chat Tools', desc: 'Communication templates ready to send.', linkText: 'Learn more' },
      { title: 'Net Pricing Access', desc: 'Access net rates and set markup logic.', linkText: 'Learn more' },
      { title: 'Agent Dashboard', desc: 'Full overview of clients, bookings, commissions.', linkText: 'Learn more' },
      { title: 'Payout Tracking', desc: 'Track commission and payout status.', linkText: 'Learn more' },
    ],
    faq: faqFromQuestions([
      'How do I earn?',
      'What is net pricing?',
      'Can I send offers without ClickyTour branding?',
      'Are there hidden fees?',
      'How fast can I create an offer?',
    ]),
    ctaTitle: 'Ready to earn as an agent?',
    ctaText: 'Join, share deals with your customers.',
    ctaButtons: ['Become an Agent', 'How it works'],
  },
  'PM Company': {
    heroTitle: 'Grow your property management portfolio and boost bookings.',
    heroSubtitle: 'Get matched with owners, and use tools to operate efficiently — with transparency built-in.',
    ctaPrimary: 'Grow My Portfolio',
    ctaSecondary: 'List Properties',
    formTitle: 'Grow as a PM Company',
    formSubtitle: 'Fill the form and we will respond quickly with tailored next steps within 1 business day.',
    formRoleLabel: 'Property Management Company (PMC)',
    formFields: ['Company Name*', 'Region/Manager*', 'Email*', 'Phone'],
    quickPills: ['Owner matching', 'White-label showcase', 'Agent network', 'Promotion tools', 'Manager dashboard', 'Growth analytics'],
    whatYouGet: ['Owner matching & growth tools', 'White-label showcase', 'Tools center & dashboards', 'Clear payout rules'],
    nextStepsTitle: 'Next steps for PM Companies',
    nextStepsSubtitle: 'Start quickly and move step-by-step with guided actions.',
    nextSteps: [
      { title: 'Grow portfolio', desc: 'Showcase and get matched with new owners.', linkText: 'Grow →' },
      { title: 'List properties', desc: 'Add managed listings to expand exposure.', linkText: 'List →' },
      { title: 'White-label showcase', desc: 'Branded proposals to acquire & retain.', linkText: 'Showcase →' },
    ],
    howItWorks: baseHowItWorks,
    toolsTitle: 'Tools for PM Companies',
    tools: [
      { title: 'Grow Your Portfolio', desc: 'Property pipeline and owner management.', linkText: 'Learn more' },
      { title: 'List Your Properties', desc: 'Add managed properties to the network.', linkText: 'Learn more' },
      { title: 'White-label Showcase', desc: 'Branded presentations that close faster.', linkText: 'Learn more' },
      { title: 'Tools Center', desc: 'All tools from one unified workspace.', linkText: 'Learn more' },
      { title: 'Allow Agents to Book', desc: 'Enable agents to view and book your listings.', linkText: 'Learn more' },
      { title: 'Manager Dashboard', desc: 'Full overview of operations & reporting.', linkText: 'Learn more' },
    ],
    faq: faqFromQuestions([
      'Can I close listings without breaking contracts?',
      'Do you provide tools?',
      'Are fees clear?',
      'Can I allow agents to book?',
      'Do I need extra staff?',
    ]),
    ctaTitle: 'Ready to grow your PMC?',
    ctaText: 'Get matched with owners and managed properties.',
    ctaButtons: ['Grow My Portfolio', 'How it works'],
  },
  'Job Seeker': {
    heroTitle: 'Find work in tourism — apply fast and get discovered.',
    heroSubtitle: 'Create a profile, apply to requests, and connect with operational employers and PMCs.',
    ctaPrimary: 'Quick Application',
    ctaSecondary: 'View Requests Board',
    formTitle: 'Apply as a job seeker / freelancer',
    formSubtitle: 'Fill the form and we will respond quickly within 1 business day.',
    formRoleLabel: 'Job Seeker / Freelancer',
    formFields: ['Desired Role*', 'Skill(s)', 'Email*', 'Phone'],
    quickPills: ['Quick apply', 'Requests board', 'CV upload', 'Post references', 'Discovery', 'Profiles'],
    whatYouGet: ['Quick application forms', 'Requests board', 'Optional public profile', 'Fast contact methods'],
    nextStepsTitle: 'Next steps for Job Seekers',
    nextStepsSubtitle: 'Start quickly and move step-by-step with guided actions.',
    nextSteps: [
      { title: 'Quick apply', desc: 'Submit your details fast and get routed.', linkText: 'Apply →' },
      { title: 'See requests board', desc: 'Browse open requests and apply.', linkText: 'Browse →' },
      { title: 'Build your profile', desc: 'Add experience and create a stronger profile.', linkText: 'Advanced →' },
    ],
    howItWorks: baseHowItWorks,
    toolsTitle: 'Tools for Job Seekers',
    tools: [
      { title: 'Quick Application', desc: 'Submit a one-page fast application.', linkText: 'Learn more' },
      { title: 'Advanced Application', desc: 'Add full skills, experience, and portfolio.', linkText: 'Learn more' },
      { title: 'Requests Board', desc: 'See open requests from operators and apply.', linkText: 'Learn more' },
      { title: 'Job Seeker Directory', desc: 'Appear in searches if public are set premium.', linkText: 'Learn more' },
      { title: 'Chat/Preference', desc: 'WhatsApp/Viber/Email/Telegram.', linkText: 'Learn more' },
      { title: 'Status Tracking', desc: 'Track application status.', linkText: 'Learn more' },
    ],
    faq: faqFromQuestions([
      'Is it free to apply?',
      'Can I hide my profile?',
      'How do I get contacted?',
      'Do I need a CV?',
      'Where do I see open jobs?',
    ]),
    ctaTitle: 'Ready to apply?',
    ctaText: 'Submit your profile and start connecting instantly.',
    ctaButtons: ['Quick Application', 'How it works'],
  },
  'Media & Partners': {
    heroTitle: "Media & partnerships — let's collaborate with ClickyTour.",
    heroSubtitle: 'Reach the right team for media purposes, integrations, and brand collaborations — routed to the right team.',
    ctaPrimary: 'Send Partnership Request',
    ctaSecondary: 'Press / Media Page',
    formTitle: 'Send a media / partnership request',
    formSubtitle: 'Fill the form and we will respond quickly within 1 business day.',
    formRoleLabel: 'Media & Partnership Requester',
    formFields: ['Type*', 'Email*', 'Phone'],
    quickPills: ['Partnership routing', 'Media kit', 'Integrations', 'Brand assets'],
    whatYouGet: ['Fast routing to the right team', 'Clear collaboration scope', 'Partnership-ready assets', 'Follow-up & next steps'],
    nextStepsTitle: 'Next steps for Media & Partners',
    nextStepsSubtitle: 'Start quickly and move step-by-step with guided actions.',
    nextSteps: [
      { title: 'Send request', desc: 'Partnership topic + organization details.', linkText: 'Send →' },
      { title: 'Press / Media kit', desc: 'Official brand and media documents.', linkText: 'Press →' },
      { title: 'Explore Work With Us', desc: 'See partnership types and programs.', linkText: 'Explore →' },
    ],
    howItWorks: baseHowItWorks,
    toolsTitle: 'Tools for Media & Partners',
    tools: [
      { title: 'Partnership Request Form', desc: 'Submit a partnership request — it will reach the right team.', linkText: 'Learn more' },
      { title: 'Press / Media Kit', desc: 'Download logos, media docs, and materials.', linkText: 'Learn more' },
      { title: 'Collaboration Types', desc: 'Affiliation, sponsorship, integration, media coverage.', linkText: 'Learn more' },
      { title: 'Contact & Support', desc: 'Direct message for quick or follow-up needs.', linkText: 'Learn more' },
      { title: 'Newsletter / Updates', desc: 'Company overview for potential partners.', linkText: 'Learn more' },
      { title: 'Company Overview', desc: 'Company overview for potential partners.', linkText: 'Learn more' },
    ],
    faq: faqFromQuestions([
      'What should I include in my request?',
      'Do you accept affiliate partnerships?',
      'Can I request an integration/API partnership?',
      'How fast will you respond?',
      'Where do I find official assets?',
    ]),
    ctaTitle: "Send your request — we'll route it correctly.",
    ctaText: "Use the form and we'll match you with the right contact.",
    ctaButtons: ['Send Partnership Request', 'How it works'],
  },
};

const articleCards = [
  {
    title: 'A Coastal Gem Surrounded by Beauty',
    desc: 'Discover destination highlights, trusted partners, and new travel opportunities.',
    tag: 'Insight',
  },
  {
    title: 'A Splendid & Tropical Luxury of Palms 12',
    desc: 'Explore premium property stories and platform-ready presentation examples.',
    tag: 'News',
  },
];

export default function Home() {
  const [activeRole, setActiveRole] = useState<RoleKey | null>(null);
  const [openFaq, setOpenFaq] = useState<number>(0);

  const data = useMemo(() => (activeRole ? roleContent[activeRole] : defaultRoleContent), [activeRole]);

  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#0F2B46] to-[#123a5d] text-white py-12 md:py-14 transition-all duration-300">
        <div className="container grid lg:grid-cols-[1.25fr_0.95fr] gap-7 items-start">
          <div>
            <p className="text-cyan-200 text-xs mb-3">clickytour.club</p>
            <h1 className="text-[48px] md:text-[56px] font-extrabold max-w-3xl leading-[1.08]">{data.heroTitle}</h1>
            <p className="text-cyan-100 mt-4 max-w-2xl text-[15px]">{data.heroSubtitle}</p>

            <div className="flex flex-wrap gap-2 mt-7">
              {roleTabs.map((role) => (
                <button
                  key={role}
                  onClick={() => {
                    setActiveRole(role);
                    setOpenFaq(0);
                  }}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                    activeRole === role
                      ? 'bg-cyan-500/25 border-cyan-200 text-white'
                      : 'bg-white/10 border-cyan-200/35 text-cyan-100 hover:bg-white/20'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <button className="btn-primary">{data.ctaPrimary}</button>
              <button className="btn-secondary">{data.ctaSecondary}</button>
            </div>
          </div>

          <div className="card p-5 md:p-6 text-slate-800 transition-all duration-300">
            <h3 className="font-extrabold text-xl">{data.formTitle}</h3>
            <p className="text-slate-500 text-sm mt-1">{data.formSubtitle}</p>

            <div className="mt-4 space-y-3">
              <select
                className="w-full rounded-xl border border-slate-200 px-4 py-3 bg-white"
                value={activeRole ?? ''}
                onChange={(e) => {
                  const nextRole = e.target.value as RoleKey | '';
                  setActiveRole(nextRole || null);
                  setOpenFaq(0);
                }}
              >
                <option value="">{data.formRoleLabel}</option>
                {roleTabs.map((role) => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
              {data.formFields.map((field) => (
                <input key={field} placeholder={field} className="w-full rounded-xl border border-slate-200 px-4 py-3" />
              ))}
            </div>
            <button className="btn-primary w-full mt-4">Continue →</button>
            {data.formNote && <p className="text-slate-500 text-sm mt-3">{data.formNote}</p>}
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {data.quickPills.map((pill) => (
              <div key={pill} className="pill text-center">{pill}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <h2 className="text-[34px] md:text-[40px] font-extrabold">What you get</h2>
          <div className="grid md:grid-cols-2 gap-3 mt-6">
            {data.whatYouGet.map((item) => (
              <div key={item} className="card p-4 font-medium">✅ {item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="text-[34px] md:text-[40px] font-extrabold">{data.nextStepsTitle}</h2>
          <p className="text-slate-500 mt-2">{data.nextStepsSubtitle}</p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {data.nextSteps.map((step) => (
              <article key={step.title} className="card p-5">
                <h3 className="font-bold text-lg">{step.title}</h3>
                <p className="text-sm text-slate-500 mt-2">{step.desc}</p>
                <a href="#" className="text-cyan-700 text-sm font-semibold mt-3 inline-block">{step.linkText}</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <h2 className="text-[34px] md:text-[40px] font-extrabold">How it works</h2>
          <div className="grid md:grid-cols-4 gap-4 mt-6">
            {data.howItWorks.map((item, index) => (
              <article key={item.title} className="card p-5">
                <p className="text-cyan-700 font-extrabold text-lg">{index + 1}</p>
                <h3 className="font-bold mt-2">{item.title}</h3>
                <p className="text-sm text-slate-500 mt-2">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="text-[34px] md:text-[40px] font-extrabold">{data.toolsTitle}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {data.tools.map((tool) => (
              <article key={tool.title} className="card p-5">
                <h3 className="font-bold">{tool.title}</h3>
                <p className="text-sm text-slate-500 mt-2">{tool.desc}</p>
                <a href="#" className="text-cyan-700 text-sm font-semibold mt-3 inline-block">{tool.linkText}</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container grid lg:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-[34px] md:text-[40px] font-extrabold">White-label presentations</h2>
            <p className="text-slate-500 mt-3">Create offers as links or PDFs with your branding (or no branding), ready to share instantly.</p>
            <ul className="space-y-2 text-slate-600 mt-4">
              <li>• Offer links for rentals, services, and real estate</li>
              <li>• One-click PDF export</li>
              <li>• Great for agents, PM companies, and owners</li>
            </ul>
            <button className="btn-primary mt-5">Get White-label Tools</button>
          </div>
          <div className="card p-6 bg-gradient-to-br from-cyan-50 to-white">
            <p className="font-semibold">✓ Agent branded template</p>
            <p className="font-semibold mt-2">✓ No-brand presentation</p>
            <p className="font-semibold mt-2">✓ Shareable link</p>
            <p className="font-semibold mt-2">✓ PDF export</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="text-[34px] md:text-[40px] font-extrabold">Transparent, fair, and simple</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {[
              {
                title: 'No hidden fees',
                desc: 'Clear plans and pricing rules before you commit to anything.',
              },
              {
                title: 'Best rates structure',
                desc: 'Transparent pricing logic with clear net and final values.',
              },
              {
                title: 'Easy payouts',
                desc: 'Track earnings, schedules, and payout status in one place.',
              },
            ].map((item) => (
              <article key={item.title} className="card p-5">
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm text-slate-500 mt-2">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container max-w-4xl">
          <h2 className="text-[34px] md:text-[40px] font-extrabold">FAQ</h2>
          <div className="mt-6 space-y-3">
            {data.faq.map((item, idx) => (
              <div key={item.q} className="card p-4">
                <button
                  className="w-full text-left font-semibold flex justify-between items-center"
                  onClick={() => setOpenFaq((p) => (p === idx ? -1 : idx))}
                >
                  <span>{item.q}</span>
                  <span className="text-cyan-700">{openFaq === idx ? '−' : '+'}</span>
                </button>
                {openFaq === idx && <p className="text-sm text-slate-600 mt-3">{item.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card p-7 md:p-9 bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white">
            <h2 className="text-[34px] md:text-[40px] font-extrabold">{data.ctaTitle}</h2>
            <p className="text-cyan-100 mt-2">{data.ctaText}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <button className="btn-primary">{data.ctaButtons[0]}</button>
              <button className="btn-secondary">{data.ctaButtons[1]}</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="flex flex-wrap justify-between gap-3 items-end">
            <div>
              <p className="text-cyan-700 font-semibold text-sm">Insight</p>
              <h2 className="text-[34px] md:text-[40px] font-extrabold">Latest Article & News</h2>
            </div>
            <button className="btn-secondary">Discover</button>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            {articleCards.map((a) => (
              <article key={a.title} className="card p-5">
                <span className="inline-block text-xs rounded-full bg-cyan-50 text-cyan-700 px-2 py-1">{a.tag}</span>
                <h3 className="font-bold text-lg mt-3">{a.title}</h3>
                <p className="text-sm text-slate-500 mt-2">{a.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl">
          <div className="card p-6">
            <h3 className="text-2xl font-extrabold">How would you like to work with ClickyTour?</h3>
            <p className="text-slate-500 text-sm mt-2">Choose a role to see the right quick form.</p>
            <div className="grid sm:grid-cols-[1fr_auto] gap-3 mt-4">
              <select
                className="rounded-xl border border-slate-200 px-4 py-3"
                value={activeRole ?? ''}
                onChange={(e) => {
                  const nextRole = e.target.value as RoleKey | '';
                  setActiveRole(nextRole || null);
                  setOpenFaq(0);
                }}
              >
                <option value="">- Choose...</option>
                {roleTabs.map((role) => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
              <button className="btn-primary">Continue →</button>
            </div>
            <p className="text-slate-500 text-sm mt-3">We'll prefill the next step and match you instantly.</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

