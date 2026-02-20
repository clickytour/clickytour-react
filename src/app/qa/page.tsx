'use client';
import Link from 'next/link';
import { PageShell } from '@/components/site';
import { useState } from 'react';

const sections: Array<{ label: string; icon: string; routes: string[] }> = [
  { label: 'Guests', icon: '🏖', routes: [
    'guests','guests-vacation-assistance','guests-what-to-do','guests-destinations','guests-plans-offers','trip-planer','guests-personalized-planning','guests-real-estate','guests-premium-travel-plan','guests-help','guests-help-how-booking-works','guests-help-rental-policies','guests-help-refunds-cancellation','guests-help-contact','guests-faq','guests-vacation-request','guests-real-estate-request','guests-request-vacation-services','guest-service-request',
  ]},
  { label: 'Owners', icon: '🏠', routes: [
    'owners','owners-vacation','owners-vacation-self-managed','owners-vacation-multi-platform-sync','owners-vacation-full-management','owners-vacation-list-property','owners-vacation-free-evaluation','owners-vacation-become-agent','owners-vacation-promote-rental','owners-vacation-dashboard','owners-real-estate','owners-real-estate-sale-rent','owners-real-estate-list-property','owners-real-estate-full-service','owners-real-estate-invest','owners-real-estate-request-proposals','owners-real-estate-promotion-tools','owners-faq','owners-plans-pricing','owners-request-service','owners-support','vacation-owners-list',
  ]},
  { label: 'Service Providers', icon: '🏪', routes: [
    'service-providers','service-providers-list-promote','service-providers-list-service','service-providers-sale-rent-business','service-providers-free-visibility','service-providers-dashboard','service-providers-what-you-can-offer','service-providers-for-guests','service-providers-for-guests-dining-nightlife','service-providers-for-guests-local-activities','service-providers-for-guests-wellness-spa','service-providers-for-guests-transfers-transport','service-providers-for-guests-vehicle-rentals','service-providers-for-guests-concierge-event','service-providers-for-guests-outdoor-activities','service-providers-for-guests-cultural-performances','service-providers-for-guests-attractions-family','service-providers-photo-viewpoint-tours','service-providers-for-guests-medical-health','service-providers-for-guests-retreats-education','service-providers-for-guests-seasonal-events','service-providers-for-guests-volunteer','service-providers-for-owners','service-providers-for-owners-cleaning-services','service-providers-for-owners-plumbing-electrical','service-providers-for-owners-laundry-linen','service-providers-for-owners-checkin-checkout','service-providers-for-owners-technical-repairs','service-providers-for-owners-home-maintenance','service-providers-for-owners-hosts','service-providers-find-staff','service-providers-grow-your-reach','service-providers-promotion-tools','service-providers-invest-tourism','service-providers-faq-pricing','service-providers-faq','service-providers-plans-overview','service-providers-list',
  ]},
  { label: 'Agents', icon: '💼', routes: [
    'agents','agents-book-get-paid','agents-book-net-pricing','agents-vacation-property-pool','agents-explore-services','agents-explore-activities','agents-explore-index','agents-local-activities','agents-real-estate-input','agents-real-estate','agents-real-estate-tools-sales','agents-list-properties','agents-real-estate-tools','agents-tools','agents-tools-advanced-search','agents-tools-white-label-offers','agents-tools-branded-templates','agents-dashboard','agents-offer-no-branding','agents-promote-local-services','agents-grow-promote','agents-affiliate','agents-help','agents-help-contact','agents-help-faq','agents-help-plans-pricing','agents-agenicies-form','agent-tools-hub',
  ]},
  { label: 'PM Companies', icon: '🏢', routes: [
    'pm-companies','management-promote-services','management-match-properties','management-showcase-white-label','management-grow-portfolio','management-vacation-property-pool','management-list-properties','management-allow-agents-book','management-increase-bookings','management-dashboard','management-channel-manager','management-tools-center','management-manage-operate','management-help','management-help-faq','management-help-plans-pricing','pmc-apply','property-management-company-form',
  ]},
  { label: 'Find Staff & Jobs', icon: '👥', routes: [
    'find-staff','find-staff-contractors','find-staff-contractors-management','find-staff-contractors-owners','find-staff-contractors-providers','find-staff-contractors-providers-categories','find-staff-contractors-job-seekers','find-staff-contractors-job-seekers-hub','find-staff-contractors-job-seekers-dashboard','find-staff-contractors-job-seekers-profile','find-staff-contractors-job-seekers-quick-application','find-staff-contractors-job-seekers-application','find-staff-contractors-job-seekers-advanced','find-staff-contractors-quick-request','find-staff-contractors-advanced','find-staff-contractors-advancedrolemanagement','find-staff-contractors-advancedroleowners','find-staff-contractors-advancedroleproviders','find-staff-contractors-management-quick-request','find-staff-contractors-owners-quick-request','find-staff-contractors-providers-quick-request','find-staff-contractors-universal','find-staff-contractors-directory','job-seeker-directory','request-detail-single','request-applications','my-applications','list-cv',
  ]},
  { label: 'Tours & Activities', icon: '🎭', routes: [
    'tours-activities','activities','activities-boats','activities-destination','activities-food-wine','activities-outdoor','activities-wellness','single-activity-tour-service',
  ]},
  { label: 'Vacation Rentals', icon: '🏡', routes: [
    'vacation-rentals','vacation-rentals-destination','vacation-rental-single-property','search-rentals','listings','seaside-villa',
  ]},
  { label: 'Offers', icon: '🏷', routes: [
    'offers','offers-hot','offers-last-minute','offers-group-deals',
  ]},
  { label: 'Real Estate', icon: '🏗', routes: [
    'real-estate','real-estate-buy','real-estate-rent','real-estate-buyer-form','real-estate-owners-list','real-estate-request-consultation','real-estate-proposals',
  ]},
  { label: 'Destinations & Explore', icon: '🌍', routes: [
    'destinations-2','destinations-planning','discover','advanced-search-booking','services-activities-search-cards-grid-all-roles',
  ]},
  { label: 'Vacation Assistance', icon: '🛎', routes: [
    'vacation-assistance-personalized-planning','vacation-assistance-reservation-help','vacation-assistance-reservation-help-2',
  ]},
  { label: 'Work With Us', icon: '🤝', routes: [
    'work-with-us','work-with-us-jobs','work-with-us-affiliate','work-with-us-quiz',
  ]},
  { label: 'Company & Info', icon: '🏛', routes: [
    'about','team','contact','blog','blog-category-travel-tips','media-partnerships','compare-partner-roles','portfolio','single-portfolio',
  ]},
  { label: 'Help & Support', icon: '❓', routes: [
    'help','faq','general-faq','support',
  ]},
  { label: 'Legal', icon: '📜', routes: [
    'privacy-policy','terms','general-terms','cookie-policy','gdpr-compliance',
  ]},
  { label: 'Thank You Pages', icon: '✅', routes: [
    'thank-you-agent','thank-you-guest-real-estate','thank-you-guest-service-request','thank-you-guest-vacation-request','thank-you-job-seeker','thank-you-media-partnerships','thank-you-pmc','thank-you-real-estate-owner','thank-you-service-provider','thank-you-vacation-owner',
  ]},
  { label: 'Forms & Apps', icon: '📝', routes: [
    'request-form','appointment','application-detail',
  ]},
  { label: 'Dynamic: Property Detail', icon: '🔗', routes: [
    'property/vacation/villa-azure-halkidiki','property/vacation/villa-azure-halkidiki/sale','property/vacation/villa-azure-halkidiki/monthly',
    'property/vacation/seaside-apartment-corfu',
    'property/real-estate/crete-stone-house','property/real-estate/crete-stone-house/sale','property/real-estate/crete-stone-house/monthly','property/real-estate/crete-stone-house/vacation',
  ]},
  { label: 'Dynamic: Hotel & Room Detail', icon: '🏨', routes: [
    'property/hotel/aegean-breeze-hotel','property/hotel/aegean-breeze-hotel/sale','property/hotel/aegean-breeze-hotel/monthly',
    'property/hotel-room/aegean-deluxe-suite','property/hotel-room/aegean-standard-room',
  ]},
  { label: 'Dynamic: Service Detail', icon: '🔧', routes: [
    'service/airport-transfer-halkidiki','service/villa-cleaning-pro','service/private-chef-corfu',
  ]},
  { label: 'Dynamic: Blog Posts', icon: '📰', routes: [
    'blog/best-coastal-towns-halkidiki','blog/property-investment-crete-2026','blog/how-agents-earn-with-clickytour',
  ]},
  { label: 'Dynamic: Job Listings', icon: '💼', routes: [
    'job/hospitality-manager-halkidiki','job/maintenance-technician-corfu','job/portfolio-manager-athens',
  ]},
  { label: 'Dynamic: Agent & PMC Profiles', icon: '👤', routes: [
    'agent/elena-travel-halkidiki','agent/marco-adventures-crete',
    'pmc/aegean-property-management','pmc/island-stays-corfu',
  ]},
  { label: 'Dynamic: Search Hub', icon: '🔍', routes: [
    'search',
  ]},
  { label: 'Marketplace & Directories', icon: '🏪', routes: [
    'marketplace',
    'directory/services',
    'directory/agents',
    'directory/property-managers',
    'directory/hotels',
    'directory/staff',
    'directory/partners',
    'pmc-directory',
    'pmc-requests-pool',
    'pmc-profile',
    'pmc-presentation',
    'pmc-submission-viewer',
    'property-presentation',
    'owner-submit-property',
    'ops-operator-pmc',
    'vacation-owners-list',
    'real-estate-owners-list',
    'submission-viewer',
  ]},
];

const totalPages = sections.reduce((a, s) => a + s.routes.length, 0);

export default function Page() {
  const [filter, setFilter] = useState('');
  const [expandedAll, setExpandedAll] = useState(true);

  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-10">
        <div className="container">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-amber-400 text-xs font-bold uppercase tracking-wider">⚙️ QA Dashboard — Dev Only</p>
              <h1 className="text-3xl font-extrabold mt-1">All Pages ({totalPages})</h1>
              <p className="text-cyan-100/70 text-sm mt-1">{sections.length} sections • <span className="text-amber-400 font-semibold">All Pending QA</span></p>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Filter pages..."
                className="px-4 py-2 rounded-xl bg-white/10 border border-cyan-700/50 text-white placeholder-cyan-300/50 text-sm w-60"
                value={filter}
                onChange={e => setFilter(e.target.value)}
              />
              <button onClick={() => setExpandedAll(v => !v)} className="px-4 py-2 rounded-xl bg-cyan-500/20 border border-cyan-700/50 text-cyan-100 text-sm hover:bg-cyan-500/30">
                {expandedAll ? 'Collapse All' : 'Expand All'}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section"><div className="container">
        <div className="space-y-4">
          {sections.map(sec => {
            const filtered = filter
              ? sec.routes.filter(r => r.includes(filter.toLowerCase()))
              : sec.routes;
            if (filter && filtered.length === 0) return null;
            return (
              <details key={sec.label} open={expandedAll || (filter !== '' && filtered.length > 0)}>
                <summary className="cursor-pointer card p-4 flex items-center gap-3 hover:shadow-md">
                  <span className="text-2xl">{sec.icon}</span>
                  <span className="font-bold text-slate-900">{sec.label}</span>
                  <span className="ml-auto text-sm text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">{filtered.length} pages</span>
                </summary>
                <div className="mt-1 ml-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-1 pb-2">
                  {filtered.map(route => (
                    <div key={route} className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-amber-50 transition-colors">
                      <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" title="Pending QA" />
                      <Link
                        href={`/${route}/`}
                        target="_blank"
                        className="text-slate-700 hover:text-teal-700 flex-1"
                      >
                        /{route}
                      </Link>
                      <span className="text-[10px] font-semibold text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded-full whitespace-nowrap">Pending</span>
                    </div>
                  ))}
                </div>
              </details>
            );
          })}
        </div>
      </div></section>
    </PageShell>
  );
}
