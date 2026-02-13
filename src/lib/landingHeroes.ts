export type HeroPageConfig = {
  slug: string;
  route: string;
  badge: string;
  title: string;
  subtitle: string;
  chips: string[];
  ctaPrimary: string;
  ctaSecondary: string;
  trust: string[];
  heroImage: string;
  panelTitle: string;
  panelItems: { label: string; value: string }[];
  panelFooter: string;
};

export const heroPages: HeroPageConfig[] = [
  {
    slug: "for-guests",
    route: "/for-guests",
    badge: "Guest-first villa planning across Greece",
    title: "Book a Greek villa holiday with confidence, speed, and local support",
    subtitle:
      "Discover handpicked villas, transparent pricing, and personalized destination guidance so your trip feels easy from day one.",
    chips: ["Verified villas", "Local experts", "Fast shortlist"],
    ctaPrimary: "Browse villas",
    ctaSecondary: "Get trip advice",
    trust: ["⭐ 4.8/5 guest reviews", "🏝️ Top islands + mainland", "📞 Dedicated support"],
    heroImage:
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1800&auto=format&fit=crop",
    panelTitle: "How your booking journey works",
    panelItems: [
      { label: "1. Tell us your style", value: "Family, couples, group, event" },
      { label: "2. Receive top matches", value: "Curated options in 24h" },
      { label: "3. Confirm with clarity", value: "Simple terms + secure booking" },
    ],
    panelFooter: "No endless searching. Just better villa matches.",
  },
  {
    slug: "for-owners",
    route: "/for-owners",
    badge: "Revenue growth for villa owners",
    title: "Turn your villa into a high-performing, low-stress rental business",
    subtitle:
      "From listing optimization to guest communication and calendar strategy, we help owners increase occupancy and improve margins.",
    chips: ["Pricing strategy", "Premium positioning", "Owner transparency"],
    ctaPrimary: "Grow my revenue",
    ctaSecondary: "See owner services",
    trust: ["📈 Performance-led approach", "🧾 Clear reporting", "🤝 Dedicated account support"],
    heroImage:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1800&auto=format&fit=crop",
    panelTitle: "Owner growth framework",
    panelItems: [
      { label: "Market audit", value: "Positioning + competitive pricing" },
      { label: "Listing upgrade", value: "Content, media, conversion UX" },
      { label: "Ongoing optimization", value: "Rates, occupancy, guest quality" },
    ],
    panelFooter: "Built for owners who want professional results.",
  },
  {
    slug: "collaborate",
    route: "/collaborate",
    badge: "Partner network for quality growth",
    title: "Collaborate with Villa4you to unlock more bookings and shared value",
    subtitle:
      "We partner with travel professionals, service providers, and local experts to create better guest experiences and stronger occupancy outcomes.",
    chips: ["Travel partners", "Service ecosystem", "Co-marketing opportunities"],
    ctaPrimary: "Become a partner",
    ctaSecondary: "Explore collaboration models",
    trust: ["🌍 Cross-market exposure", "🔗 Reliable workflows", "💬 Responsive team"],
    heroImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1800&auto=format&fit=crop",
    panelTitle: "Partnership collaboration map",
    panelItems: [
      { label: "Discovery call", value: "Align goals and target audiences" },
      { label: "Pilot collaboration", value: "Launch a focused campaign" },
      { label: "Scale together", value: "Expand channels + service scope" },
    ],
    panelFooter: "Partnerships designed for long-term wins.",
  },
  {
    slug: "about",
    route: "/about",
    badge: "People, standards, and local know-how",
    title: "Meet the team behind memorable villa stays in Greece",
    subtitle:
      "Villa4you combines hospitality expertise, destination insight, and operational excellence to serve both guests and owners.",
    chips: ["18+ years in hospitality", "Guest & owner focus", "Human-first service"],
    ctaPrimary: "Our story",
    ctaSecondary: "Talk to our team",
    trust: ["👥 Experienced advisors", "🏛️ Greek destination knowledge", "✅ High quality standards"],
    heroImage:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1800&auto=format&fit=crop",
    panelTitle: "What defines Villa4you",
    panelItems: [
      { label: "Curated quality", value: "Villas evaluated for consistency" },
      { label: "Operational care", value: "Support before, during, after stay" },
      { label: "Sustainable growth", value: "Balanced value for guests & owners" },
    ],
    panelFooter: "Built on trust, service quality, and local expertise.",
  },
  {
    slug: "search-results-page-for-guests",
    route: "/search-results-page-for-guests",
    badge: "Smarter villa discovery experience",
    title: "Search results that help guests compare villas faster and book better",
    subtitle:
      "Clear filters, meaningful highlights, and destination-focused guidance help guests move from browsing to booking without friction.",
    chips: ["Clear comparison", "Intent-based filters", "Faster decision flow"],
    ctaPrimary: "Preview guest search UX",
    ctaSecondary: "Request UX walkthrough",
    trust: ["⚡ Reduced decision fatigue", "🧭 Better property fit", "📱 Mobile-friendly flow"],
    heroImage:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1800&auto=format&fit=crop",
    panelTitle: "Suggested search-result architecture",
    panelItems: [
      { label: "Top summary bar", value: "Dates, guests, location clarity" },
      { label: "Smart filter rail", value: "Amenities, distance, budget" },
      { label: "Result cards", value: "Photos, social proof, quick actions" },
    ],
    panelFooter: "Optimized to boost confidence and conversion.",
  },
  {
    slug: "vacation-property-management",
    route: "/vacation-property-management",
    badge: "End-to-end vacation rental management",
    title: "Professional vacation property management for owners who want peace of mind",
    subtitle:
      "We handle operations, guest communication, and performance optimization so your property earns more while your workload drops.",
    chips: ["Operations", "Guest experience", "Revenue optimization"],
    ctaPrimary: "Request management plan",
    ctaSecondary: "See management scope",
    trust: ["🛎️ Full service coverage", "📊 Data-driven decisions", "🏡 Asset care mindset"],
    heroImage:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1800&auto=format&fit=crop",
    panelTitle: "Management operating model",
    panelItems: [
      { label: "Onboarding", value: "Property readiness + standards" },
      { label: "Daily execution", value: "Bookings, check-ins, guest support" },
      { label: "Performance review", value: "Monthly insights + action plan" },
    ],
    panelFooter: "A system built to protect and grow your asset.",
  },
];

export const heroPagesBySlug = Object.fromEntries(heroPages.map((page) => [page.slug, page]));
