import fs from 'node:fs';
import path from 'node:path';

const pages = {
  'management-grow-portfolio': {
    title: 'Grow Your Portfolio with ClickyTour',
    subtitle: 'Expand your reach, add properties from other PM companies, and get more bookings without adding extra staff or overhead.',
    introTitle: 'Scale with less manual work',
    introText: 'The original page focused on moving from manual, limited growth to automated and scalable portfolio expansion. With ClickyTour, you can access a shared network of inventory, agents, and services while keeping your operations lean.',
    highlights: ['Move beyond managing only your own inventory', 'Send white-label offers in seconds', 'Increase bookings while reducing repetitive tasks'],
    features: [
      { title: 'Shared inventory access', desc: 'Discover and activate relevant properties from the network.', icon: '🏘️' },
      { title: 'Automated proposal flow', desc: 'Build and share client-ready offers in a few clicks.', icon: '⚡' },
      { title: 'Lower growth cost', desc: 'Expand faster without immediately increasing team size.', icon: '💸' },
    ],
    steps: [
      { title: 'Join as a PMC', desc: 'Create your company profile and define your market focus.' },
      { title: 'Activate growth tools', desc: 'Enable matching, listing, and white-label proposal features.' },
      { title: 'Scale bookings', desc: 'Promote inventory and convert demand through agent and guest channels.' },
    ],
    ctaTitle: 'Ready to grow your portfolio?',
    ctaText: 'Start with a scalable setup and expand your managed inventory through the ClickyTour ecosystem.',
    ctaPrimary: 'Join as PMC',
    ctaSecondary: 'See How It Works',
  },
  'management-promote-services': {
    title: 'Promote Your Services to Property Owners', subtitle: 'Present your management services clearly and win more owner partnerships.', introTitle: 'Turn expertise into signed agreements', introText: 'This page had no WordPress content. We rebuilt it around the intended goal: helping PM companies market their services to property owners with clear positioning, trust signals, and conversion-focused communication.',
    highlights: ['Show your value proposition in owner-friendly language', 'Present operations, reporting, and revenue support clearly', 'Use branded proposals to shorten decision cycles'],
    features: [
      { title: 'Service showcase pages', desc: 'Display your core management services in a structured format.', icon: '🧾' },
      { title: 'Owner-ready proposals', desc: 'Share polished offers with transparent deliverables.', icon: '📄' },
      { title: 'Trust-building assets', desc: 'Highlight portfolio performance, standards, and workflows.', icon: '✅' },
    ],
    steps: [
      { title: 'Define owner segments', desc: 'Group owners by property type, region, and expectations.' },
      { title: 'Package your service model', desc: 'Set clear tiers, deliverables, and pricing logic.' },
      { title: 'Launch outreach', desc: 'Promote your services through ClickyTour channels and follow-up flows.' },
    ],
    ctaTitle: 'Need help packaging your service offer?', ctaText: 'Build a service presentation that owners understand and trust.', ctaPrimary: 'Start Service Setup', ctaSecondary: 'Book a Strategy Call',
  },
  'management-match-properties': {
    title: 'Get Matched with New Properties Instantly', subtitle: 'Expand your portfolio with verified properties from ClickyTour owner channels.', introTitle: 'Smart matching for PM growth', introText: 'The source content emphasized instant match alerts, fit by region and style, and fast onboarding from dashboard to live listing.', highlights: ['Receive property alerts inside your dashboard', 'Approve and customize selected matches quickly', 'Publish and promote new listings without delay'],
    features: [
      { title: 'Regional fit matching', desc: 'Prioritized opportunities based on your operating footprint.', icon: '📍' },
      { title: 'Fast approval workflow', desc: 'Accept and configure properties in a guided flow.', icon: '⚙️' },
      { title: 'Exclusive network access', desc: 'See opportunities not broadly available on open channels.', icon: '🔐' },
    ],
    steps: [
      { title: 'Receive alerts', desc: 'Matched properties appear automatically in your manager view.' },
      { title: 'Approve and brand', desc: 'Set terms, pricing rules, and optional white-label settings.' },
      { title: 'Go live', desc: 'Publish listings and start promoting to guests and partners.' },
    ],
    ctaTitle: 'Start receiving property matches', ctaText: 'Activate match alerts and expand your inventory pipeline today.', ctaPrimary: 'Get Match Alerts', ctaSecondary: 'See Sample Properties',
  },
  'management-showcase-white-label': {
    title: 'Showcase Your Properties with White-label Offers', subtitle: 'Send professional proposals instantly under your own agency brand.', introTitle: 'Stay visible while competitors stay hidden', introText: 'The WordPress page focused on full branding control, faster sales cycles, and client protection through neutral white-label presentation.', highlights: ['Your brand front and center in every offer', 'No ClickyTour branding shown to your clients', 'Generate polished proposals in seconds'],
    features: [
      { title: 'Full branding control', desc: 'Use your logo, company details, and communication style.', icon: '🎨' },
      { title: 'Faster turnaround', desc: 'Eliminate manual formatting and repetitive design work.', icon: '⏱️' },
      { title: 'Client protection', desc: 'Share neutral offers without exposing supplier sources.', icon: '🛡️' },
    ],
    steps: [
      { title: 'Select properties', desc: 'Pick listings from your own portfolio or network inventory.' },
      { title: 'Generate branded offer', desc: 'Apply your company identity automatically.' },
      { title: 'Send and convert', desc: 'Share instantly and follow engagement in your workflow.' },
    ],
    ctaTitle: 'Want to preview white-label mode?', ctaText: 'Generate your first branded proposal and test the full flow.', ctaPrimary: 'See White-label in Action', ctaSecondary: 'Try It in Dashboard',
  },
  'management-increase-bookings': {
    title: 'Increase Bookings Without Increasing Costs', subtitle: 'Use ClickyTour booking channels, agent demand, and operational tools to lift occupancy.', introTitle: 'More demand, same operational control', introText: 'Source content highlighted three growth drivers: booking pool participation, agent bookings, and visibility through targeted campaigns.', highlights: ['Join the ClickyTour booking pool', 'Enable direct sales through verified agents', 'Gain promotion support in seasonal campaigns'],
    features: [
      { title: 'Booking pool access', desc: 'Expose your inventory to active guest demand streams.', icon: '🌊' },
      { title: 'Agent network sales', desc: 'Open controlled net-pricing channels for partner sales.', icon: '🤝' },
      { title: 'Performance analytics', desc: 'Track channel output and optimize where it matters.', icon: '📊' },
    ],
    steps: [
      { title: 'Activate pool visibility', desc: 'Make eligible properties discoverable in network demand flow.' },
      { title: 'Enable partner selling', desc: 'Allow approved agents to book at configured pricing.' },
      { title: 'Optimize weekly', desc: 'Use dashboards to adjust rates, rules, and campaign participation.' },
    ],
    ctaTitle: 'Increase occupancy with less friction', ctaText: 'Switch on the channels that bring incremental bookings without bloating costs.', ctaPrimary: 'Join the Booking Pool', ctaSecondary: 'Book a Demo',
  },
  'management-vacation-property-pool': {
    title: 'Vacation Property Pool', subtitle: 'Book and promote network properties to grow supply and revenue without extra acquisition costs.', introTitle: 'Expand inventory through the pool', introText: 'The original content focused on access to more properties, reduced workload, and commission opportunities through net pricing and white-label distribution.', highlights: ['Browse ready-to-sell properties from the dashboard', 'Send white-label offers under your own brand', 'Track bookings and commissions in one place'],
    features: [
      { title: 'More inventory instantly', desc: 'Offer wider choice without direct property sourcing.', icon: '🏡' },
      { title: 'Lower operational burden', desc: 'Avoid repetitive content production for every opportunity.', icon: '🧠' },
      { title: 'Commission upside', desc: 'Monetize demand by booking from approved pool supply.', icon: '💰' },
    ],
    steps: [
      { title: 'Explore pool properties', desc: 'Review available listings matched to your target audience.' },
      { title: 'Send offers', desc: 'Package options into client-ready white-label proposals.' },
      { title: 'Book and monitor', desc: 'Confirm reservations and follow outcomes from one dashboard.' },
    ],
    ctaTitle: 'Ready to use the vacation property pool?', ctaText: 'Start offering more options today with a low-friction operating model.', ctaPrimary: 'Explore the Pool', ctaSecondary: 'Join the Pool Now',
  },
  'management-list-properties': {
    title: 'List Your Properties on ClickyTour', subtitle: 'Reach more guests, agents, and partners with each listing you publish.', introTitle: 'From upload to active demand', introText: 'The source page described a simple listing flow: upload, validate, publish, then receive leads and bookings through multiple channels.', highlights: ['Publish across ClickyTour and partner demand channels', 'Share high-quality media and rich listing details', 'Track listing performance with analytics'],
    features: [
      { title: 'Broad distribution', desc: 'Push availability to connected channels from a single workflow.', icon: '🌐' },
      { title: 'Media and presentation tools', desc: 'Use strong visuals and offer formats to increase conversion.', icon: '🖼️' },
      { title: 'Performance reporting', desc: 'Monitor views, clicks, and booking trends per listing.', icon: '📈' },
    ],
    steps: [
      { title: 'Upload listing data', desc: 'Add property details, pricing, and content assets.' },
      { title: 'Validate and publish', desc: 'Complete quality checks and activate the listing.' },
      { title: 'Capture bookings', desc: 'Handle incoming reservations with centralized control.' },
    ],
    ctaTitle: 'Start listing your portfolio', ctaText: 'Make your inventory discoverable and conversion-ready across channels.', ctaPrimary: 'Add My Properties', ctaSecondary: 'Book a Demo',
  },
  'management-allow-agents-book': {
    title: 'Allow Agents to Book with Net Pricing', subtitle: 'Give verified agents controlled access to your inventory and unlock additional sales.', introTitle: 'Your inventory, their distribution reach', introText: 'The original content focused on setting net rates, publishing to agent dashboards, and receiving net payouts while agents add their margin.', highlights: ['Set net pricing by season and property', 'Grant access only to verified agents', 'Track partner performance and bookings'],
    features: [
      { title: 'Net price control', desc: 'Keep pricing authority while enabling partner resale.', icon: '💲' },
      { title: 'Verified agent access', desc: 'Share inventory only with approved professional sellers.', icon: '🔎' },
      { title: 'Reporting and oversight', desc: 'Monitor who sells, what converts, and where to scale.', icon: '📋' },
    ],
    steps: [
      { title: 'Define net rates', desc: 'Set protected base pricing for agent channels.' },
      { title: 'Publish inventory', desc: 'Expose selected listings to your approved partner network.' },
      { title: 'Collect bookings', desc: 'Receive reservation flow and payout visibility in dashboard.' },
    ],
    ctaTitle: 'Activate your agent sales channel', ctaText: 'Enable net pricing and open a controlled growth route for bookings.', ctaPrimary: 'Enable Net Pricing', ctaSecondary: 'Learn How It Works',
  },
  'management-manage-operate': {
    title: 'Manage & Operate in One System', subtitle: 'Run properties, bookings, payouts, and communications from a centralized operational hub.', introTitle: 'Simplify daily operations', introText: 'This page emphasized centralized dashboards, channel automation, integrated reporting, and connected tools that reduce fragmentation in day-to-day management.', highlights: ['View properties, reservations, and payouts in one screen', 'Sync calendars and rates across multiple channels', 'Use integrated tools for marketing, finance, and communication'],
    features: [
      { title: 'Central dashboard', desc: 'Keep all core operating data visible and actionable.', icon: '🧭' },
      { title: 'Channel management', desc: 'Reduce overbooking risk through synchronized availability.', icon: '🔄' },
      { title: 'Financial exports', desc: 'Generate accountant-ready records faster.', icon: '🧮' },
    ],
    steps: [
      { title: 'Open manager dashboard', desc: 'Start from one control point for all portfolio activity.' },
      { title: 'Connect tools and channels', desc: 'Link distribution, communications, and financial workflows.' },
      { title: 'Operate and optimize', desc: 'Track KPIs and improve processes over time.' },
    ],
    ctaTitle: 'Ready to simplify operations?', ctaText: 'Bring your management stack together and run with less friction.', ctaPrimary: 'Open Dashboard', ctaSecondary: 'Explore Tools',
  },
  'management-dashboard': {
    title: 'Manager Dashboard', subtitle: 'Your command center for bookings, performance, payouts, and partner communication.', introTitle: 'Everything in one secure place', introText: 'The source page described the dashboard as a single interface for reservations, earnings, communications, and integrations with channel and tools modules.', highlights: ['Monitor real-time booking activity', 'Track revenue and occupancy trends', 'Manage payouts and communication centrally'],
    features: [
      { title: 'Real-time bookings', desc: 'Stay updated on reservation flow across connected channels.', icon: '⏱️' },
      { title: 'Performance insights', desc: 'See occupancy, ranking, and revenue metrics clearly.', icon: '📊' },
      { title: 'Automation links', desc: 'Sync with channel manager and tools center workflows.', icon: '🧩' },
    ],
    steps: [
      { title: 'Review daily KPIs', desc: 'Check occupancy, arrivals, departures, and booking pace.' },
      { title: 'Handle operations', desc: 'Coordinate tasks, messaging, and service updates.' },
      { title: 'Export and report', desc: 'Share financial and performance outputs with your team.' },
    ],
    ctaTitle: 'Run your business from one dashboard', ctaText: 'Operate smarter with live data and connected management tools.', ctaPrimary: 'Log In Now', ctaSecondary: 'See Features',
  },
  'management-channel-manager': {
    title: 'Channel Manager Integration', subtitle: 'Connect once and manage rates, availability, and bookings across your distribution stack.', introTitle: 'Keep channels synced and controlled', introText: 'Although the original page included placeholder content, its core intent is clear: centralized channel synchronization to prevent conflicts and reduce manual updates.', highlights: ['Sync rates and availability from one source', 'Reduce overbookings through real-time updates', 'Maintain operational consistency across channels'],
    features: [
      { title: 'Unified sync engine', desc: 'Push inventory changes to connected platforms quickly.', icon: '🔗' },
      { title: 'Conflict prevention', desc: 'Protect against calendar mismatches and double bookings.', icon: '🚫' },
      { title: 'Time-saving automation', desc: 'Cut repetitive channel-by-channel manual work.', icon: '🤖' },
    ],
    steps: [
      { title: 'Connect your channels', desc: 'Authorize platforms and map inventory correctly.' },
      { title: 'Set sync rules', desc: 'Define rates, availability logic, and update priorities.' },
      { title: 'Monitor performance', desc: 'Track channel output and optimize distribution strategy.' },
    ],
    ctaTitle: 'Activate Channel Manager', ctaText: 'Centralize distribution and keep your listings accurate everywhere.', ctaPrimary: 'Activate Channel Manager', ctaSecondary: 'See How It Works',
  },
  'management-tools-center': {
    title: 'Tools Center', subtitle: 'A practical toolkit for PM companies to operate faster, communicate better, and convert more bookings.', introTitle: 'One place for operational tools', introText: 'This page had empty WP content. We rebuilt it as a structured overview of the manager toolkit: proposal tools, communication flows, reporting, and automation support.', highlights: ['Access proposal, communication, and reporting tools', 'Reduce repetitive admin work', 'Standardize team workflows and outputs'],
    features: [
      { title: 'Offer builder', desc: 'Create branded proposals quickly with reusable blocks.', icon: '🧰' },
      { title: 'Communication templates', desc: 'Respond faster with consistent guest and owner messaging.', icon: '💬' },
      { title: 'Operations automations', desc: 'Trigger repeatable actions for routine management tasks.', icon: '⚙️' },
    ],
    steps: [
      { title: 'Enable relevant modules', desc: 'Select tools that match your team workflow.' },
      { title: 'Assign roles', desc: 'Set permissions for managers, coordinators, and finance users.' },
      { title: 'Track impact', desc: 'Measure time saved and conversion improvements over time.' },
    ],
    ctaTitle: 'Explore the Tools Center', ctaText: 'Equip your team with practical tools that improve execution every week.', ctaPrimary: 'Open Tools Center', ctaSecondary: 'Talk to Support',
  },
  'management-help': {
    title: 'Help & Support for PM Companies', subtitle: 'Get guidance for setup, daily operations, and troubleshooting across the PM toolkit.', introTitle: 'Support built around real workflows', introText: 'This page had no WordPress content. We rebuilt it as a support gateway for PM companies who need fast answers on onboarding, integrations, booking flows, and reporting.', highlights: ['Step-by-step onboarding help', 'Operational support for listings and bookings', 'Escalation paths for urgent issues'],
    features: [
      { title: 'Knowledge guides', desc: 'Find practical articles by feature and workflow.', icon: '📚' },
      { title: 'Live support routes', desc: 'Reach the right team for technical or account issues.', icon: '🛟' },
      { title: 'Priority handling', desc: 'Escalate high-impact incidents with clear SLA paths.', icon: '🚨' },
    ],
    steps: [
      { title: 'Search help topics', desc: 'Start with setup, operations, or finance categories.' },
      { title: 'Open a support case', desc: 'Share context and screenshots for faster resolution.' },
      { title: 'Follow resolution updates', desc: 'Track progress and next actions in your support thread.' },
    ],
    ctaTitle: 'Need help right now?', ctaText: 'Use the fastest support path based on issue type and urgency.', ctaPrimary: 'Open Support', ctaSecondary: 'Browse Help Articles',
  },
  'management-help-faq': {
    title: 'FAQ for Managers', subtitle: 'Quick answers to common PM questions about listings, bookings, channels, and payments.', introTitle: 'Answers to the questions teams ask most', introText: 'This page had empty WP content. We rebuilt it as a dedicated FAQ view for manager operations and platform workflows.', highlights: ['Coverage across onboarding, bookings, pricing, and reporting', 'Simple answers designed for daily PM operations', 'Direct links to next actions and support routes'],
    faq: [
      { q: 'How long does onboarding usually take?', a: 'Most PM companies can complete initial setup in a few days, depending on data readiness and channel connections.' },
      { q: 'Can I control which properties agents can sell?', a: 'Yes. You can define availability and access rules, including which listings are visible in partner channels.' },
      { q: 'How does net pricing work?', a: 'You set a protected net rate. Agents add their own margin, while your payout remains based on your configured net amount.' },
      { q: 'Can I send offers under my own brand?', a: 'Yes. White-label mode allows branded proposals without exposing supplier-side platform branding.' },
      { q: 'Where can I track payouts and commissions?', a: 'Use the manager dashboard reporting area to monitor pending amounts, settled payouts, and partner performance.' },
    ],
    ctaTitle: 'Still need an answer?', ctaText: 'Our team can help with workflow-specific guidance for your operation.', ctaPrimary: 'Contact Support', ctaSecondary: 'Go to Help Center',
  },
  'management-help-plans-pricing': {
    title: 'Manager Plans & Pricing', subtitle: 'Choose the plan that fits your portfolio size, workflow needs, and growth goals.', introTitle: 'Clear pricing for every stage', introText: 'This page had empty WP content. We rebuilt it as a practical overview for PM companies evaluating plan levels, feature access, and support options.', highlights: ['Plans aligned to team size and inventory complexity', 'Transparent feature access by tier', 'Upgrade paths as your operation grows'],
    features: [
      { title: 'Starter', desc: 'For smaller teams needing core listing and booking management.', icon: '🌱' },
      { title: 'Growth', desc: 'Adds channel automation, white-label offers, and deeper analytics.', icon: '🚀' },
      { title: 'Scale', desc: 'Advanced integrations, priority support, and enterprise workflows.', icon: '🏢' },
    ],
    faq: [
      { q: 'Can I switch plans later?', a: 'Yes, you can upgrade as your portfolio expands and your workflow requirements evolve.' },
      { q: 'Do plans include white-label tools?', a: 'White-label access is typically included in Growth and above, based on your setup package.' },
      { q: 'Is onboarding support included?', a: 'All plans include onboarding guidance, with higher tiers offering deeper hands-on support.' },
    ],
    ctaTitle: 'Need help selecting a plan?', ctaText: 'We can recommend the best setup based on your current portfolio and target growth.', ctaPrimary: 'Compare Plans', ctaSecondary: 'Talk to Sales',
  },
};

const base = path.resolve('src/app');

for (const [slug, data] of Object.entries(pages)) {
  const filePath = path.join(base, slug, 'page.tsx');
  const content = `import { PMPage } from '@/components/pm-page';

export default function Page() {
  return <PMPage ${Object.entries(data)
    .map(([k, v]) => `${k}={${JSON.stringify(v)}}`)
    .join('\n    ')} />;
}
`;
  fs.writeFileSync(filePath, content);
}

console.log(`Generated ${Object.keys(pages).length} PM pages.`);
