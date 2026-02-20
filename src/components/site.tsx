'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useMemo, useState } from 'react';
import { MenuCategory, MenuLink, roleMenus } from './site-menu';

const topNavItems: Array<{
  href: string;
  label: string;
  megaMenu?: MenuCategory[];
  children?: MenuLink[];
}> = [
  { href: '/guests/', label: 'For Guests', megaMenu: roleMenus.guests },
  { href: '/owners/', label: 'For Owners', megaMenu: roleMenus.owners },
  { href: '/service-providers/', label: 'For Service Providers', megaMenu: roleMenus.serviceProviders },
  { href: '/agents/', label: 'For Agents', megaMenu: roleMenus.agents },
  { href: '/pm-companies/', label: 'For PM Companies', megaMenu: roleMenus.pmCompanies },
  {
    href: '/work-with-us/',
    label: 'Work With Us',
    children: [
      { href: '/work-with-us-quiz/', label: 'Find Your Role - Quiz' },
      { href: '/find-staff-contractors-job-seekers/', label: 'Job Opportunities' },
      { href: '/find-staff/', label: 'Find Staff & Contractors' },
      { href: '/find-staff-contractors-directory/', label: 'Staff Directory' },
      { href: '/find-staff-contractors-quick-request/', label: 'Quick Staff Request' },
      { href: '/work-with-us-affiliate/', label: 'Affiliate Programme' },
    ],
  },
  {
    href: '/tours-activities/',
    label: 'Explore',
    children: [
      { href: '/tours-activities/', label: 'Tours & Activities' },
      { href: '/vacation-rentals/', label: 'Vacation Rentals' },
      { href: '/search-rentals/', label: 'Search Rentals' },
      { href: '/offers/', label: 'Offers & Deals' },
      { href: '/real-estate/', label: 'Real Estate' },
      { href: '/destinations-2/', label: 'Destinations' },
      { href: '/marketplace/', label: 'Marketplace' },
      { href: '/blog/', label: 'Blog' },
    ],
  },
  {
    href: '/about/',
    label: 'About',
    children: [
      { href: '/about/', label: 'About Us' },
      { href: '/team/', label: 'Our Team' },
      { href: '/contact/', label: 'Contact Us' },
      { href: '/general-faq/', label: 'FAQ' },
      { href: '/support/', label: 'Support' },
    ],
  },
];

function flattenMenu(menu: MenuCategory[]) {
  return menu.flatMap((category) => category.items);
}

function VLogo({ className = 'w-7 h-7' }: { className?: string }) {
  return <Image src="/assets/v-logo-clean.png" alt="" width={120} height={120} className={className} />;
}

type NavScope = {
  label: string;
  items: typeof topNavItems;
  cta: { href: string; label: string };
  crossSell: Array<{ href: string; label: string }>;
};

const scopedNavs: Record<string, NavScope> = {
  guests: {
    label: 'For Guests',
    items: [
      { href: '/guests/', label: 'Overview' },
      { href: '/guests-vacation-assistance/', label: 'Vacation', children: [
        { href: '/guests-vacation-assistance/', label: 'Vacation Assistance' },
        { href: '/guests-personalized-planning/', label: 'Personalized Planning' },
        { href: '/guests-premium-travel-plan/', label: 'Premium Travel Plan' },
        { href: '/guests-what-to-do/', label: 'What to Do & Where to Go' },
        { href: '/guests-destinations/', label: 'Destinations' },
        { href: '/guests-plans-offers/', label: 'Plans & Offers' },
        { href: '/trip-planer/', label: 'Trip Planner' },
      ]},
      { href: '/guests-real-estate/', label: 'Real Estate' },
      { href: '/tours-activities/', label: 'Tours & Activities', children: [
        { href: '/tours-activities/', label: 'All Tours' },
        { href: '/activities-boats/', label: 'Boats & Water' },
        { href: '/activities-outdoor/', label: 'Outdoor' },
        { href: '/activities-food-wine/', label: 'Food & Wine' },
        { href: '/activities-wellness/', label: 'Wellness' },
      ]},
      { href: '/vacation-rentals/', label: 'Rentals', children: [
        { href: '/vacation-rentals/', label: 'Vacation Rentals' },
        { href: '/search-rentals/', label: 'Search Rentals' },
        { href: '/offers/', label: 'Offers & Deals' },
      ]},
      { href: '/guests-help/', label: 'Help', children: [
        { href: '/guests-help/', label: 'Help Center' },
        { href: '/guests-help-how-booking-works/', label: 'How Booking Works' },
        { href: '/guests-help-rental-policies/', label: 'Rental Policies' },
        { href: '/guests-faq/', label: 'Guest FAQ' },
        { href: '/guests-help-contact/', label: 'Contact' },
      ]},
    ],
    cta: { href: '/guests-vacation-request/', label: 'Plan My Trip' },
    crossSell: [{ href: '/service-providers-for-guests/', label: 'Local Services' }],
  },
  owners: {
    label: 'For Owners',
    items: [
      { href: '/owners/', label: 'Overview' },
      { href: '/owners-vacation/', label: 'Vacation', children: [
        { href: '/owners-vacation/', label: 'Vacation Hub' },
        { href: '/owners-vacation-list-property/', label: 'List Property' },
        { href: '/owners-vacation-full-management/', label: 'Full Management' },
        { href: '/owners-vacation-self-managed/', label: 'Self Managed' },
        { href: '/owners-vacation-promote-rental/', label: 'Promote Rental' },
        { href: '/owners-vacation-free-evaluation/', label: 'Free Evaluation' },
        { href: '/owners-vacation-dashboard/', label: 'Dashboard' },
      ]},
      { href: '/owners-real-estate/', label: 'Real Estate', children: [
        { href: '/owners-real-estate/', label: 'Real Estate Hub' },
        { href: '/owners-real-estate-sale-rent/', label: 'Sale or Rent' },
        { href: '/owners-real-estate-list-property/', label: 'List Property' },
        { href: '/owners-real-estate-invest/', label: 'Invest' },
        { href: '/owners-real-estate-request-proposals/', label: 'Proposals' },
      ]},
      { href: '/owners-faq/', label: 'Help', children: [
        { href: '/owners-faq/', label: 'FAQ' },
        { href: '/owners-plans-pricing/', label: 'Plans & Pricing' },
        { href: '/owners-support/', label: 'Support' },
      ]},
    ],
    cta: { href: '/owners-vacation-list-property/', label: 'List My Property' },
    crossSell: [{ href: '/service-providers-for-owners/', label: 'Services' }, { href: '/pm-companies/', label: 'PMC' }],
  },
  serviceProviders: {
    label: 'For Providers',
    items: [
      { href: '/service-providers/', label: 'Overview' },
      { href: '/service-providers-list-promote/', label: 'List & Promote', children: [
        { href: '/service-providers-list-promote/', label: 'List & Promote' },
        { href: '/service-providers-list-service/', label: 'List Service' },
        { href: '/service-providers-free-visibility/', label: 'Free Visibility' },
        { href: '/service-providers-promotion-tools/', label: 'Promotion Tools' },
        { href: '/service-providers-grow-your-reach/', label: 'Grow Reach' },
      ]},
      { href: '/service-providers-for-guests/', label: 'For Tourists', children: [
        { href: '/service-providers-for-guests/', label: 'All Tourist Services' },
        { href: '/service-providers-for-guests-dining-nightlife/', label: 'Dining & Nightlife' },
        { href: '/service-providers-for-guests-local-activities/', label: 'Local Activities' },
        { href: '/service-providers-for-guests-wellness-spa/', label: 'Wellness & Spa' },
        { href: '/service-providers-for-guests-transfers-transport/', label: 'Transfers' },
      ]},
      { href: '/service-providers-for-owners/', label: 'For Owners', children: [
        { href: '/service-providers-for-owners/', label: 'All Owner Services' },
        { href: '/service-providers-for-owners-cleaning-services/', label: 'Cleaning' },
        { href: '/service-providers-for-owners-home-maintenance/', label: 'Maintenance' },
        { href: '/service-providers-for-owners-checkin-checkout/', label: 'Check-in/out' },
      ]},
      { href: '/service-providers-dashboard/', label: 'Dashboard' },
      { href: '/service-providers-faq/', label: 'Help', children: [
        { href: '/service-providers-faq/', label: 'FAQ' },
        { href: '/service-providers-faq-pricing/', label: 'Pricing' },
        { href: '/service-providers-plans-overview/', label: 'Plans' },
      ]},
    ],
    cta: { href: '/service-providers-list-service/', label: 'List My Service' },
    crossSell: [{ href: '/find-staff/', label: 'Find Staff' }],
  },
  agents: {
    label: 'For Agents',
    items: [
      { href: '/agents/', label: 'Overview' },
      { href: '/agents-book-get-paid/', label: 'Book & Earn', children: [
        { href: '/agents-book-get-paid/', label: 'Book & Get Paid' },
        { href: '/agents-book-net-pricing/', label: 'Net Pricing' },
        { href: '/agents-vacation-property-pool/', label: 'Property Pool' },
        { href: '/agents-explore-services/', label: 'Explore Services' },
        { href: '/agents-explore-activities/', label: 'Explore Activities' },
      ]},
      { href: '/agents-real-estate/', label: 'Real Estate', children: [
        { href: '/agents-real-estate/', label: 'Real Estate' },
        { href: '/agents-real-estate-tools/', label: 'RE Tools' },
        { href: '/agents-list-properties/', label: 'List Properties' },
      ]},
      { href: '/agents-tools/', label: 'Tools', children: [
        { href: '/agents-tools/', label: 'Tools Hub' },
        { href: '/agents-tools-advanced-search/', label: 'Advanced Search' },
        { href: '/agents-tools-white-label-offers/', label: 'White-label' },
        { href: '/agents-tools-branded-templates/', label: 'Templates' },
        { href: '/agents-dashboard/', label: 'Dashboard' },
      ]},
      { href: '/agents-help-faq/', label: 'Help', children: [
        { href: '/agents-help-faq/', label: 'FAQ' },
        { href: '/agents-help-plans-pricing/', label: 'Plans & Pricing' },
        { href: '/agents-help-contact/', label: 'Contact' },
      ]},
    ],
    cta: { href: '/agents-agenicies-form/', label: 'Register as Agent' },
    crossSell: [{ href: '/service-providers/', label: 'Services' }],
  },
  pmCompanies: {
    label: 'For PMC',
    items: [
      { href: '/pm-companies/', label: 'Overview' },
      { href: '/management-grow-portfolio/', label: 'Grow', children: [
        { href: '/management-promote-services/', label: 'Promote Services' },
        { href: '/management-match-properties/', label: 'Match Properties' },
        { href: '/management-showcase-white-label/', label: 'White-label' },
      ]},
      { href: '/management-list-properties/', label: 'Bookings', children: [
        { href: '/management-vacation-property-pool/', label: 'Property Pool' },
        { href: '/management-list-properties/', label: 'List Properties' },
        { href: '/management-allow-agents-book/', label: 'Agent Bookings' },
        { href: '/management-increase-bookings/', label: 'Increase Bookings' },
      ]},
      { href: '/management-dashboard/', label: 'Manage', children: [
        { href: '/management-dashboard/', label: 'Dashboard' },
        { href: '/management-channel-manager/', label: 'Channel Manager' },
        { href: '/management-tools-center/', label: 'Tools Center' },
      ]},
      { href: '/management-help-faq/', label: 'Help', children: [
        { href: '/management-help-faq/', label: 'FAQ' },
        { href: '/management-help-plans-pricing/', label: 'Plans & Pricing' },
      ]},
    ],
    cta: { href: '/pmc-apply/', label: 'Apply as PMC' },
    crossSell: [{ href: '/find-staff/', label: 'Find Staff' }, { href: '/agents/', label: 'Agents' }],
  },
  findStaff: {
    label: 'Find Staff',
    items: [
      { href: '/find-staff/', label: 'Overview' },
      { href: '/find-staff-contractors-management/', label: 'For Employers', children: [
        { href: '/find-staff-contractors-management/', label: 'For PM Companies' },
        { href: '/find-staff-contractors-owners/', label: 'For Owners' },
        { href: '/find-staff-contractors-providers/', label: 'For Providers' },
        { href: '/find-staff-contractors-quick-request/', label: 'Quick Request' },
      ]},
      { href: '/find-staff-contractors-job-seekers/', label: 'For Job Seekers', children: [
        { href: '/find-staff-contractors-job-seekers/', label: 'Job Opportunities' },
        { href: '/find-staff-contractors-job-seekers-application/', label: 'Apply' },
        { href: '/find-staff-contractors-job-seekers-dashboard/', label: 'Dashboard' },
        { href: '/my-applications/', label: 'My Applications' },
      ]},
      { href: '/find-staff-contractors-directory/', label: 'Directory' },
      { href: '/list-cv/', label: 'Submit CV' },
    ],
    cta: { href: '/find-staff-contractors-quick-request/', label: 'Post a Request' },
    crossSell: [{ href: '/service-providers/', label: 'Services' }],
  },
  explore: {
    label: 'Explore',
    items: [
      { href: '/tours-activities/', label: 'Tours', children: [
        { href: '/tours-activities/', label: 'All Tours' },
        { href: '/activities-boats/', label: 'Boats & Water' },
        { href: '/activities-outdoor/', label: 'Outdoor' },
        { href: '/activities-food-wine/', label: 'Food & Wine' },
        { href: '/activities-wellness/', label: 'Wellness' },
      ]},
      { href: '/vacation-rentals/', label: 'Rentals', children: [
        { href: '/vacation-rentals/', label: 'All Rentals' },
        { href: '/search-rentals/', label: 'Search' },
        { href: '/vacation-rentals-destination/', label: 'By Destination' },
      ]},
      { href: '/offers/', label: 'Offers', children: [
        { href: '/offers/', label: 'All Offers' },
        { href: '/offers-hot/', label: 'Hot Offers' },
        { href: '/offers-last-minute/', label: 'Last Minute' },
        { href: '/offers-group-deals/', label: 'Group Deals' },
      ]},
      { href: '/real-estate/', label: 'Real Estate' },
      { href: '/destinations-2/', label: 'Destinations' },
      { href: '/marketplace/', label: 'Marketplace' },
    ],
    cta: { href: '/search-rentals/', label: 'Search Now' },
    crossSell: [{ href: '/guests/', label: 'For Guests' }],
  },
};

function useNavScope(): { scoped: boolean; scope: NavScope | null; key: string } {
  const pathname = usePathname();
  if (pathname.startsWith('/guests') || pathname.startsWith('/guest-service')) return { scoped: true, scope: scopedNavs.guests, key: 'guests' };
  if (pathname.startsWith('/owners') || pathname.startsWith('/vacation-owners')) return { scoped: true, scope: scopedNavs.owners, key: 'owners' };
  if (pathname.startsWith('/service-providers')) return { scoped: true, scope: scopedNavs.serviceProviders, key: 'serviceProviders' };
  if (pathname.startsWith('/agents')) return { scoped: true, scope: scopedNavs.agents, key: 'agents' };
  if (pathname.startsWith('/pm-companies') || pathname.startsWith('/management') || pathname.startsWith('/pmc')) return { scoped: true, scope: scopedNavs.pmCompanies, key: 'pmCompanies' };
  if (pathname.startsWith('/find-staff') || pathname.startsWith('/job-seeker') || pathname.startsWith('/list-cv') || pathname.startsWith('/my-applications') || pathname.startsWith('/request-detail') || pathname.startsWith('/request-applications')) return { scoped: true, scope: scopedNavs.findStaff, key: 'findStaff' };
  if (pathname.startsWith('/tours') || pathname.startsWith('/activities') || pathname.startsWith('/offers') || pathname.startsWith('/vacation-rental') || pathname.startsWith('/search-rental') || pathname.startsWith('/listings') || pathname.startsWith('/real-estate') && !pathname.startsWith('/real-estate-owner') || pathname.startsWith('/destinations') || pathname.startsWith('/discover') || pathname.startsWith('/marketplace')) return { scoped: true, scope: scopedNavs.explore, key: 'explore' };
  return { scoped: false, scope: null, key: '' };
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [subOpen, setSubOpen] = useState<string | null>(null);
  const { scoped, scope } = useNavScope();

  const navItems = scoped && scope ? scope.items : topNavItems;

  return (
    <header className="sticky top-0 z-40 bg-[#0F2B46] text-white">
      <div className="container flex items-center justify-between h-12">
        <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setMobileOpen(false)}>
          <VLogo className="w-9 h-9" />
          <span className="font-bold text-[15px] tracking-tight">ClickyTour</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 ml-8">
          {navItems.map((item) => {
            if (item.children) {
              return (
                <div key={item.href} className="relative group">
                  <Link href={item.href} className="px-2.5 py-1.5 text-[12px] font-medium text-cyan-100/90 hover:text-white transition-colors whitespace-nowrap">
                    {item.label}
                  </Link>
                  <div className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-150 absolute left-0 top-full pt-1 z-50">
                    <div className="min-w-[220px] rounded-lg border border-cyan-800/50 bg-[#0c2339] py-1 shadow-xl">
                      {item.children.map((sub) => (
                        <Link key={sub.href} href={sub.href} className="block px-3.5 py-2 text-[12px] text-cyan-100/90 hover:bg-cyan-500/15 hover:text-white transition-colors">
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            if (item.megaMenu) {
              return (
                <div key={item.href} className="relative group">
                  <Link href={item.href} className="px-2.5 py-1.5 text-[12px] font-medium text-cyan-100/90 hover:text-white transition-colors whitespace-nowrap">
                    {item.label}
                  </Link>
                  <div className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-150 absolute left-0 top-full pt-1 z-50">
                    <div className="w-[760px] rounded-xl border border-cyan-800/50 bg-[#0c2339] p-4 shadow-xl">
                      <div className="grid grid-cols-3 gap-4">
                        {item.megaMenu.map((cat) => (
                          <div key={cat.label}>
                            <p className="text-[11px] uppercase tracking-wide text-cyan-300 mb-2">{cat.label}</p>
                            <ul className="space-y-1.5">
                              {cat.items.slice(0, 6).map((sub) => (
                                <li key={sub.href}>
                                  <Link href={sub.href} className="text-[12px] text-cyan-100/90 hover:text-white transition-colors leading-snug">
                                    {sub.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link key={item.href} href={item.href} className="px-2.5 py-1.5 text-[12px] font-medium text-cyan-100/90 hover:text-white transition-colors whitespace-nowrap">
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-2 ml-auto">
          {scoped && scope && (
            <>
              {scope.crossSell.map(cs => (
                <Link key={cs.href} href={cs.href} className="text-[10px] text-teal-300/70 hover:text-white whitespace-nowrap">{cs.label}</Link>
              ))}
              <Link href="/" className="text-[10px] text-cyan-300/70 hover:text-white whitespace-nowrap">All Roles</Link>
              <span className="w-px h-4 bg-cyan-700/50" />
            </>
          )}
          <Link href="/qa/" className="inline-flex items-center px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] font-semibold hover:bg-amber-500/30 transition-colors whitespace-nowrap">
            ⚙ QA
          </Link>
          <Link href={scoped && scope ? scope.cta.href : '/get-started/'} className="inline-flex items-center px-4 py-1.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white text-[12px] font-semibold transition-colors whitespace-nowrap">
            {scoped && scope ? scope.cta.label : 'Get Started'}
          </Link>
        </div>

        <button aria-label="Toggle menu" className="lg:hidden p-2 text-cyan-100" onClick={() => setMobileOpen((v) => !v)}>
          {mobileOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-cyan-900/40 bg-[#0F2B46] max-h-[85vh] overflow-y-auto">
          <nav className="container py-3 flex flex-col gap-0.5">
            {scoped && scope && (
              <div className="flex items-center justify-between px-3 py-2 mb-1 bg-teal-700/20 rounded-lg">
                <p className="text-[12px] text-teal-300 font-semibold">{scope.label}</p>
                <Link href="/" className="text-[11px] text-cyan-300 hover:text-white font-medium" onClick={() => setMobileOpen(false)}>← All Roles</Link>
              </div>
            )}
            {navItems.map((item) => (
              <div key={item.href} className="border-b border-cyan-900/30 last:border-0">
                {(item.children || item.megaMenu) ? (
                  <>
                    <button className="w-full flex items-center justify-between px-3 py-3 text-[14px] text-cyan-100 font-semibold" onClick={() => setSubOpen((v) => (v === item.href ? null : item.href))}>
                      {item.label}
                      <svg className={`w-4 h-4 transition-transform ${subOpen === item.href ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
                    </button>
                    {subOpen === item.href && (
                      <div className="pl-2 pb-2 max-h-[50vh] overflow-y-auto">
                        {item.megaMenu ? (
                          item.megaMenu.map((cat) => (
                            <div key={cat.label} className="mb-2">
                              <p className="px-3 py-1 text-[10px] uppercase tracking-wider text-cyan-400 font-semibold">{cat.label}</p>
                              {cat.items.slice(0, 6).map((sub) => (
                                <Link key={sub.href} href={sub.href} className="block px-3 py-2 text-[13px] text-cyan-100/80 hover:text-white hover:bg-cyan-800/30 rounded-md" onClick={() => setMobileOpen(false)}>
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          ))
                        ) : (
                          (item.children || []).map((sub) => (
                            <Link key={sub.href} href={sub.href} className="block px-3 py-2 text-[13px] text-cyan-100/80 hover:text-white hover:bg-cyan-800/30 rounded-md" onClick={() => setMobileOpen(false)}>
                              {sub.label}
                            </Link>
                          ))
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href} className="block px-3 py-3 text-[14px] text-cyan-100 font-semibold hover:text-white" onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            {scoped && scope && scope.crossSell.length > 0 && (
              <div className="px-3 py-2 mt-1">
                <p className="text-[10px] uppercase tracking-wider text-cyan-400 font-semibold mb-1">Related</p>
                <div className="flex flex-wrap gap-2">
                  {scope.crossSell.map(cs => (
                    <Link key={cs.href} href={cs.href} className="px-3 py-1.5 text-[12px] rounded-full border border-cyan-700/50 text-cyan-200 hover:bg-cyan-800/30" onClick={() => setMobileOpen(false)}>
                      {cs.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            <Link href={scoped && scope ? scope.cta.href : '/get-started/'} className="mx-3 mt-3 text-center py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white text-[14px] font-bold shadow-lg" onClick={() => setMobileOpen(false)}>
              {scoped && scope ? scope.cta.label : 'Get Started'}
            </Link>
            <Link href="/qa/" className="mx-3 mt-1 mb-1 text-center py-2 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[12px] font-semibold" onClick={() => setMobileOpen(false)}>
              ⚙ QA Dashboard
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SidebarLayout({
  title,
  menu,
  children,
}: {
  title: string;
  menu: MenuCategory[];
  children: ReactNode;
}) {
  const links = useMemo(() => flattenMenu(menu), [menu]);
  const [mobileTabsOpen, setMobileTabsOpen] = useState(false);

  return (
    <section className="section pt-8">
      <div className="container">
        <div className="lg:hidden mb-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-semibold text-[#0F2B46]">{title} navigation</p>
            <button className="text-xs px-3 py-1.5 rounded-full border border-cyan-200 text-cyan-800" onClick={() => setMobileTabsOpen((v) => !v)}>
              {mobileTabsOpen ? 'Hide menu' : 'Show menu'}
            </button>
          </div>
          {mobileTabsOpen && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="whitespace-nowrap rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs px-3 py-1.5">
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-[280px_minmax(0,1fr)] gap-8">
          <aside className="hidden lg:block card p-4 h-max sticky top-16">
            <p className="text-xs uppercase tracking-wider text-cyan-700 font-semibold mb-3">{title}</p>
            <div className="space-y-4">
              {menu.map((category) => (
                <div key={category.label}>
                  <p className="text-xs text-slate-500 font-semibold mb-1.5">{category.label}</p>
                  <ul className="space-y-1.5">
                    {category.items.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className="text-sm text-slate-700 hover:text-cyan-700 transition-colors leading-snug">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </aside>

          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}

type FooterCol = { t: string; l: Array<{ href: string; label: string }> };
type FooterHero = { eyebrow: string; title: string; subtitle: string; pills: Array<{ href: string; label: string }> };
type FooterContext = { hero: FooterHero; cols: FooterCol[] };

function useContextualFooter(): FooterContext {
  const pathname = usePathname();

  const fixed = [
    {
      t: 'Company',
      l: [
        { href: '/about/', label: 'About ClickyTour' },
        { href: '/team/', label: 'Our Team' },
        { href: '/contact/', label: 'Contact' },
        { href: '/blog/', label: 'Blog & News' },
        { href: '/general-faq/', label: 'FAQ' },
        { href: '/support/', label: 'Help & Support' },
      ],
    },
    {
      t: 'Legal',
      l: [
        { href: '/privacy-policy/', label: 'Privacy Policy' },
        { href: '/terms/', label: 'Terms & Conditions' },
        { href: '/cookie-policy/', label: 'Cookie Policy' },
        { href: '/gdpr-compliance/', label: 'GDPR Compliance' },
      ],
    },
  ];

  const contextSets: Record<string, Array<{ t: string; l: Array<{ href: string; label: string }> }>> = {
    guests: [
      { t: 'Guest Services', l: [
        { href: '/guests-vacation-assistance/', label: 'Vacation Assistance' },
        { href: '/guests-personalized-planning/', label: 'Personalized Planning' },
        { href: '/guests-premium-travel-plan/', label: 'Premium Travel Plan' },
        { href: '/guests-what-to-do/', label: 'What to Do & Where to Go' },
        { href: '/guests-destinations/', label: 'Destinations' },
        { href: '/guests-plans-offers/', label: 'Plans & Offers' },
      ]},
      { t: 'Explore', l: [
        { href: '/tours-activities/', label: 'Tours & Activities' },
        { href: '/vacation-rentals/', label: 'Vacation Rentals' },
        { href: '/offers/', label: 'Offers & Deals' },
        { href: '/trip-planer/', label: 'Trip Planner' },
        { href: '/search-rentals/', label: 'Search Rentals' },
      ]},
      { t: 'Guest Help', l: [
        { href: '/guests-help/', label: 'Help Center' },
        { href: '/guests-help-how-booking-works/', label: 'How Booking Works' },
        { href: '/guests-help-rental-policies/', label: 'Rental Policies' },
        { href: '/guests-help-refunds-cancellation/', label: 'Refunds & Cancellation' },
        { href: '/guests-faq/', label: 'Guest FAQ' },
      ]},
    ],
    owners: [
      { t: 'Vacation Property', l: [
        { href: '/owners-vacation/', label: 'Vacation Owners Hub' },
        { href: '/owners-vacation-list-property/', label: 'List My Property' },
        { href: '/owners-vacation-full-management/', label: 'Full Management' },
        { href: '/owners-vacation-self-managed/', label: 'Self Managed' },
        { href: '/owners-vacation-promote-rental/', label: 'Promote My Rental' },
        { href: '/owners-vacation-free-evaluation/', label: 'Free Evaluation' },
      ]},
      { t: 'Real Estate', l: [
        { href: '/owners-real-estate/', label: 'Real Estate Hub' },
        { href: '/owners-real-estate-sale-rent/', label: 'Sale or Rent' },
        { href: '/owners-real-estate-list-property/', label: 'List Property' },
        { href: '/owners-real-estate-invest/', label: 'Invest' },
        { href: '/owners-real-estate-request-proposals/', label: 'Request Proposals' },
      ]},
      { t: 'Owner Resources', l: [
        { href: '/owners-vacation-dashboard/', label: 'Dashboard' },
        { href: '/owners-faq/', label: 'Owner FAQ' },
        { href: '/owners-plans-pricing/', label: 'Plans & Pricing' },
        { href: '/owners-support/', label: 'Owner Support' },
        { href: '/owners-vacation-become-agent/', label: 'Become an Agent' },
      ]},
    ],
    serviceProviders: [
      { t: 'List & Promote', l: [
        { href: '/service-providers-list-promote/', label: 'List & Promote' },
        { href: '/service-providers-list-service/', label: 'List Your Service' },
        { href: '/service-providers-free-visibility/', label: 'Free Visibility' },
        { href: '/service-providers-promotion-tools/', label: 'Promotion Tools' },
        { href: '/service-providers-grow-your-reach/', label: 'Grow Your Reach' },
      ]},
      { t: 'Services For', l: [
        { href: '/service-providers-for-guests/', label: 'For Guests / Tourists' },
        { href: '/service-providers-for-owners/', label: 'For Owners / Hosts' },
        { href: '/service-providers-what-you-can-offer/', label: 'What You Can Offer' },
        { href: '/service-providers-sale-rent-business/', label: 'Sale or Rent Business' },
        { href: '/service-providers-invest-tourism/', label: 'Invest in Tourism' },
      ]},
      { t: 'Provider Resources', l: [
        { href: '/service-providers-dashboard/', label: 'Dashboard' },
        { href: '/service-providers-faq/', label: 'Business FAQ' },
        { href: '/service-providers-faq-pricing/', label: 'FAQ & Pricing' },
        { href: '/service-providers-plans-overview/', label: 'Plans Overview' },
        { href: '/service-providers-find-staff/', label: 'Find Staff' },
      ]},
    ],
    agents: [
      { t: 'Book & Earn', l: [
        { href: '/agents-book-get-paid/', label: 'Book & Get Paid' },
        { href: '/agents-book-net-pricing/', label: 'Net Pricing' },
        { href: '/agents-vacation-property-pool/', label: 'Property Pool' },
        { href: '/agents-explore-services/', label: 'Explore Services' },
        { href: '/agents-explore-activities/', label: 'Explore Activities' },
      ]},
      { t: 'Agent Tools', l: [
        { href: '/agents-tools/', label: 'Tools Hub' },
        { href: '/agents-tools-advanced-search/', label: 'Advanced Search' },
        { href: '/agents-tools-white-label-offers/', label: 'White-label Offers' },
        { href: '/agents-tools-branded-templates/', label: 'Branded Templates' },
        { href: '/agents-dashboard/', label: 'Dashboard' },
      ]},
      { t: 'Agent Support', l: [
        { href: '/agents-real-estate/', label: 'Real Estate' },
        { href: '/agents-help-faq/', label: 'Agent FAQ' },
        { href: '/agents-help-plans-pricing/', label: 'Plans & Pricing' },
        { href: '/agents-help-contact/', label: 'Contact Support' },
        { href: '/work-with-us-affiliate/', label: 'Affiliate Programme' },
      ]},
    ],
    pmCompanies: [
      { t: 'Grow Portfolio', l: [
        { href: '/management-promote-services/', label: 'Promote Services' },
        { href: '/management-match-properties/', label: 'Match Properties' },
        { href: '/management-showcase-white-label/', label: 'White-label Showcase' },
        { href: '/management-grow-portfolio/', label: 'Grow Portfolio' },
      ]},
      { t: 'Bookings & Operations', l: [
        { href: '/management-vacation-property-pool/', label: 'Property Pool' },
        { href: '/management-list-properties/', label: 'List Properties' },
        { href: '/management-allow-agents-book/', label: 'Agent Bookings (Net)' },
        { href: '/management-channel-manager/', label: 'Channel Manager' },
        { href: '/management-dashboard/', label: 'Dashboard' },
      ]},
      { t: 'PM Resources', l: [
        { href: '/management-tools-center/', label: 'Tools Center' },
        { href: '/management-help-faq/', label: 'Manager FAQ' },
        { href: '/management-help-plans-pricing/', label: 'Plans & Pricing' },
        { href: '/pmc-directory/', label: 'PMC Directory' },
        { href: '/pmc-apply/', label: 'Apply as PMC' },
      ]},
    ],
    findStaff: [
      { t: 'For Employers', l: [
        { href: '/find-staff/', label: 'Find Staff Hub' },
        { href: '/find-staff-contractors-management/', label: 'For PM Companies' },
        { href: '/find-staff-contractors-owners/', label: 'For Owners' },
        { href: '/find-staff-contractors-providers/', label: 'For Providers' },
        { href: '/find-staff-contractors-quick-request/', label: 'Quick Request' },
      ]},
      { t: 'For Job Seekers', l: [
        { href: '/find-staff-contractors-job-seekers/', label: 'Job Opportunities' },
        { href: '/find-staff-contractors-job-seekers-application/', label: 'Apply Now' },
        { href: '/find-staff-contractors-job-seekers-dashboard/', label: 'Dashboard' },
        { href: '/find-staff-contractors-job-seekers-profile/', label: 'My Profile' },
        { href: '/my-applications/', label: 'My Applications' },
      ]},
      { t: 'Directory', l: [
        { href: '/find-staff-contractors-directory/', label: 'Candidate Directory' },
        { href: '/job-seeker-directory/', label: 'Job Seeker Directory' },
        { href: '/find-staff-contractors-universal/', label: 'Universal Entry' },
        { href: '/list-cv/', label: 'Submit CV' },
        { href: '/find-staff-contractors-providers-categories/', label: 'All Categories' },
      ]},
    ],
    explore: [
      { t: 'Tours & Activities', l: [
        { href: '/tours-activities/', label: 'All Tours' },
        { href: '/activities-boats/', label: 'Boats & Water' },
        { href: '/activities-outdoor/', label: 'Outdoor Adventures' },
        { href: '/activities-food-wine/', label: 'Food & Wine' },
        { href: '/activities-wellness/', label: 'Wellness & Spa' },
        { href: '/activities-destination/', label: 'By Destination' },
      ]},
      { t: 'Vacation Rentals', l: [
        { href: '/vacation-rentals/', label: 'All Rentals' },
        { href: '/search-rentals/', label: 'Search Rentals' },
        { href: '/vacation-rentals-destination/', label: 'By Destination' },
        { href: '/offers/', label: 'Offers & Deals' },
        { href: '/offers-hot/', label: 'Hot Offers' },
        { href: '/offers-last-minute/', label: 'Last Minute' },
      ]},
      { t: 'More', l: [
        { href: '/real-estate/', label: 'Real Estate' },
        { href: '/destinations-2/', label: 'Destinations' },
        { href: '/marketplace/', label: 'Marketplace' },
        { href: '/discover/', label: 'Discover' },
        { href: '/blog/', label: 'Blog' },
      ]},
    ],
  };

  // Default columns
  const defaultCols = [
    { t: 'Partner With Us', l: [
      { href: '/guests/', label: 'For Guests' },
      { href: '/owners/', label: 'For Owners' },
      { href: '/service-providers/', label: 'For Service Providers' },
      { href: '/agents/', label: 'For Agents' },
      { href: '/pm-companies/', label: 'For PM Companies' },
    ]},
    { t: 'Explore', l: [
      { href: '/tours-activities/', label: 'Tours & Activities' },
      { href: '/vacation-rentals/', label: 'Vacation Rentals' },
      { href: '/offers/', label: 'Offers & Deals' },
      { href: '/real-estate/', label: 'Real Estate' },
      { href: '/destinations-2/', label: 'Destinations' },
      { href: '/marketplace/', label: 'Marketplace' },
    ]},
    { t: 'Find Staff & Jobs', l: [
      { href: '/find-staff/', label: 'Find Staff' },
      { href: '/find-staff-contractors-job-seekers/', label: 'Job Seekers' },
      { href: '/find-staff-contractors-directory/', label: 'Staff Directory' },
      { href: '/find-staff-contractors-quick-request/', label: 'Quick Request' },
      { href: '/work-with-us-affiliate/', label: 'Affiliate Programme' },
    ]},
  ];

  const heroes: Record<string, FooterHero> = {
    guests: { eyebrow: 'For Travelers', title: 'Plan your perfect vacation with ClickyTour.', subtitle: 'Discover rentals, activities, and local experiences.', pills: [
      { href: '/guests-vacation-assistance/', label: 'Vacation Assistance' }, { href: '/tours-activities/', label: 'Tours & Activities' }, { href: '/search-rentals/', label: 'Search Rentals' }, { href: '/trip-planer/', label: 'Trip Planner' },
    ]},
    owners: { eyebrow: 'For Property Owners', title: 'List, manage, and grow your property income.', subtitle: 'Vacation rentals, real estate, and full management services.', pills: [
      { href: '/owners-vacation-list-property/', label: 'List Property' }, { href: '/owners-vacation-free-evaluation/', label: 'Free Evaluation' }, { href: '/owners-real-estate/', label: 'Real Estate' }, { href: '/owners-plans-pricing/', label: 'Plans & Pricing' },
    ]},
    serviceProviders: { eyebrow: 'For Service Providers', title: 'Reach travelers and property owners directly.', subtitle: 'List your services, grow your reach, and get booked.', pills: [
      { href: '/service-providers-list-service/', label: 'List Service' }, { href: '/service-providers-free-visibility/', label: 'Free Visibility' }, { href: '/service-providers-for-guests/', label: 'For Tourists' }, { href: '/service-providers-for-owners/', label: 'For Owners' },
    ]},
    agents: { eyebrow: 'For Travel Agents', title: 'Book, earn, and grow your travel business.', subtitle: 'Net pricing, white-label tools, and property access.', pills: [
      { href: '/agents-book-net-pricing/', label: 'Net Pricing' }, { href: '/agents-tools/', label: 'Agent Tools' }, { href: '/agents-dashboard/', label: 'Dashboard' }, { href: '/agents-help-plans-pricing/', label: 'Plans & Pricing' },
    ]},
    pmCompanies: { eyebrow: 'For PM Companies', title: 'Scale your property management operations.', subtitle: 'Grow your portfolio, increase bookings, streamline operations.', pills: [
      { href: '/management-list-properties/', label: 'List Properties' }, { href: '/management-dashboard/', label: 'Dashboard' }, { href: '/management-channel-manager/', label: 'Channel Manager' }, { href: '/management-help-plans-pricing/', label: 'Plans & Pricing' },
    ]},
    findStaff: { eyebrow: 'Staff & Jobs', title: 'Hire tourism professionals or find your next job.', subtitle: 'Fast, location-based matching for the hospitality industry.', pills: [
      { href: '/find-staff-contractors-quick-request/', label: 'Post a Request' }, { href: '/find-staff-contractors-job-seekers-application/', label: 'Apply Now' }, { href: '/find-staff-contractors-directory/', label: 'Directory' }, { href: '/list-cv/', label: 'Submit CV' },
    ]},
    explore: { eyebrow: 'Explore', title: 'Discover tours, rentals, deals, and destinations.', subtitle: 'Your gateway to the best travel experiences.', pills: [
      { href: '/tours-activities/', label: 'Tours' }, { href: '/vacation-rentals/', label: 'Rentals' }, { href: '/offers/', label: 'Deals' }, { href: '/real-estate/', label: 'Real Estate' }, { href: '/destinations-2/', label: 'Destinations' },
    ]},
  };

  const defaultHero: FooterHero = { eyebrow: 'Explore Our Platform', title: 'Built for guests, owners, providers, agents and property managers.', subtitle: 'Where Travelers, Hosts, and Partners Connect.', pills: [
    { href: '/guests/', label: 'For Guests' }, { href: '/owners/', label: 'For Owners' }, { href: '/service-providers/', label: 'For Service Providers' }, { href: '/agents/', label: 'For Agents' }, { href: '/pm-companies/', label: 'For PM Companies' },
  ]};

  let key = '';
  if (pathname.startsWith('/guests')) key = 'guests';
  else if (pathname.startsWith('/owners')) key = 'owners';
  else if (pathname.startsWith('/service-providers')) key = 'serviceProviders';
  else if (pathname.startsWith('/agents')) key = 'agents';
  else if (pathname.startsWith('/pm-companies') || pathname.startsWith('/management')) key = 'pmCompanies';
  else if (pathname.startsWith('/find-staff') || pathname.startsWith('/job-seeker') || pathname.startsWith('/list-cv') || pathname.startsWith('/my-applications') || pathname.startsWith('/request-')) key = 'findStaff';
  else if (pathname.startsWith('/tours') || pathname.startsWith('/activities') || pathname.startsWith('/offers') || pathname.startsWith('/vacation-rental') || pathname.startsWith('/search-rental') || pathname.startsWith('/listings') || pathname.startsWith('/real-estate') || pathname.startsWith('/destinations') || pathname.startsWith('/discover') || pathname.startsWith('/marketplace')) key = 'explore';

  const contextual = key ? contextSets[key] : defaultCols;
  const hero = key ? heroes[key] : defaultHero;

  return { hero, cols: [...contextual, ...fixed] };
}

export function Footer() {
  const { hero, cols: footerCols } = useContextualFooter();

  return (
    <footer className="bg-[#0F2B46] text-white mt-14">
      <div className="border-b border-cyan-900/40">
        <div className="container py-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">{hero.eyebrow}</p>
            <h3 className="text-2xl md:text-3xl font-extrabold mt-2 leading-tight">{hero.title}</h3>
            <p className="text-cyan-100/70 mt-2 text-sm">{hero.subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
            {hero.pills.map((p) => (
              <Link key={p.href} href={p.href} className="px-3 py-1.5 text-[11px] font-medium rounded-full border border-cyan-700/60 text-cyan-100/90 hover:bg-cyan-800/40 hover:text-white transition-colors">
                {p.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container py-10">
        <div className="flex items-center gap-2 mb-8 sm:mb-0">
          <VLogo className="w-11 h-11" />
          <div>
            <p className="font-bold text-lg">ClickyTour</p>
            <p className="text-[11px] text-cyan-100/70">Travel • Real Estate • Services</p>
          </div>
        </div>
        <p className="text-cyan-100/80 text-sm mb-8 sm:hidden">Where Travelers, Hosts & Partners Connect</p>

        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-8">
          {footerCols.map((c) => (
            <div key={c.t}>
              <h4 className="font-bold text-sm mb-3 text-cyan-50">{c.t}</h4>
              <ul className="space-y-2 text-[13px]">
                {c.l.map((x) => (
                  <li key={x.label}>
                    <Link href={x.href} className="text-cyan-100/80 hover:text-white transition-colors">{x.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="sm:hidden divide-y divide-cyan-900/40">
          {footerCols.map((c) => (
            <details key={c.t} className="group">
              <summary className="flex items-center justify-between py-3 cursor-pointer">
                <h4 className="font-bold text-sm text-cyan-50">{c.t}</h4>
                <svg className="w-4 h-4 text-cyan-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
              </summary>
              <ul className="space-y-2 text-[13px] pb-3 pl-2">
                {c.l.map((x) => (
                  <li key={x.label}>
                    <Link href={x.href} className="text-cyan-100/80 hover:text-white transition-colors">{x.label}</Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>

      <div className="border-t border-cyan-900/40 text-cyan-100/60 text-xs py-4 text-center">© 2026 ClickyTour. All rights reserved.</div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export function Hero({ title, subtitle, ctaA = 'Start now', ctaB = 'Book demo', diagram }: { title: string; subtitle: string; ctaA?: string; ctaB?: string; diagram?: React.ReactNode }) {
  return (
    <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-16 md:py-20">
      <div className="container">
        <div className={diagram ? "grid lg:grid-cols-[1fr_auto] gap-8 items-start" : ""}>
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold max-w-4xl">{title}</h1>
            <p className="max-w-3xl mt-4 text-cyan-100 text-lg">{subtitle}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button className="btn-primary">{ctaA}</button>
              <button className="btn-secondary">{ctaB}</button>
            </div>
          </div>
          {diagram && <div className="hidden lg:block max-w-sm">{diagram}</div>}
        </div>
      </div>
    </section>
  );
}

export function SectionTitle({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-7">
      {eyebrow && <p className="text-cyan-700 font-semibold text-sm">{eyebrow}</p>}
      <h2 className="text-3xl font-extrabold text-slate-900 mt-1">{title}</h2>
      {subtitle && <p className="text-slate-500 mt-2 max-w-3xl">{subtitle}</p>}
    </div>
  );
}

export function FeatureGrid({ items, cols = 3 }: { items: { title: string; desc: string; icon?: string; tag?: string }[]; cols?: number }) {
  const cls = cols === 4 ? 'md:grid-cols-4' : cols === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3';
  return (
    <div className={`grid ${cls} gap-4`}>
      {items.map((item) => (
        <article key={item.title} className="card p-5">
          <p className="text-2xl">{item.icon || '✨'}</p>
          <h3 className="font-bold mt-3">{item.title}</h3>
          <p className="text-sm text-slate-500 mt-2">{item.desc}</p>
          {item.tag && <span className="inline-block mt-3 text-xs px-2 py-1 rounded-full bg-cyan-50 text-cyan-700">{item.tag}</span>}
        </article>
      ))}
    </div>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid md:grid-cols-2 gap-3">
      {items.map((i) => (
        <li key={i} className="card p-4 font-medium text-slate-700">✅ {i}</li>
      ))}
    </ul>
  );
}

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details key={item.q} className="card p-4 group">
          <summary className="font-semibold cursor-pointer list-none flex justify-between">{item.q}<span className="text-cyan-700">⌄</span></summary>
          <p className="text-slate-600 mt-3 text-sm">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
