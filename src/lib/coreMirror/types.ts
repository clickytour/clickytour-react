export type DealMode = "short_term_rent" | "monthly_rent" | "sale";

export type CoreMirrorProperty = {
  id: string;
  slug: string;
  title: string;
  headline: string;
  shortDescription: string;
  detailDescription: string;
  type: "vacation" | "real-estate";
  dealTypes: DealMode[];
  status: string;
  location: { area: string; region: string; country: string; beachDistanceM?: number; lat?: number; lng?: number };
  metrics: { guests: number; bedrooms: number; bathrooms: number; areaSqm: number };
  gallery: string[];
  videoUrl?: string;
  tour3dUrl?: string;
  pricing: {
    currency: string;
    basicFromPrice: number;
    seasonalFromPrice?: number;
    seasonName?: string;
    minStayNights: number;
    seasonalRates: { label: string; from: string; to: string; nightly: number }[];
    unavailableDates: string[];
  };
  amenities: string[];
  highlights: string[];
  badges: string[];
  policies: { smokingAllowed: boolean; petsAllowed: boolean; cancellationSummary: string; tourismLicense: string };
  nearby: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
  related: { title: string; href: string; from: number; image: string }[];
  planyo?: { calendarId: string; resourceId: string; actionUrl: string };
  nearbyServices: { name: string; detail: string; href: string }[];
  blogPosts: { title: string; href: string; date: string; excerpt: string; image: string }[];
  realEstateMeta?: {
    salePriceEur?: number;
    monthlyRentEur?: number;
    roiPercent?: number;
    floorPlans?: { title: string; imageUrl: string }[];
    saleHighlights?: string[];
    monthlyHighlights?: string[];
    vacationHighlights?: string[];
  };
};

export type CoreMirrorHotel = {
  id: string;
  slug: string;
  title: string;
  shortSummary: string;
  description: string;
  hotelType: string;
  dealTypes: DealMode[];
  status: string;
  media: { primaryImage: string; galleryImages: string[]; videoUrl?: string; tour3dUrl?: string };
  location: { city: string; region: string; country: string };
  prices: { fromNightlyEur: number; monthlyEur?: number; saleEur?: number };
  amenities: string[];
  distances: { label: string; value: string }[];
};

export type CoreMirrorHotelRoom = {
  id: string;
  slug: string;
  hotelSlug: string;
  title: string;
  roomType: string;
  quantity: number;
  shortSummary: string;
  dealTypes: DealMode[];
  media: { primaryImage: string; galleryImages: string[]; videoUrl?: string; tour3dUrl?: string };
  rates: { nightlyEur: number; monthlyEur?: number };
  maxGuests: number;
  amenities: string[];
};

export type ServicePriceModel = "package" | "per_hour" | "per_person" | "per_service" | "quote";
export type ServiceBookingType = "external_booking_link" | "instant_booking" | "request_to_book";
export type ServiceAudienceTarget = "guests" | "agents" | "property_owners";

export type CoreMirrorService = {
  slug: string;
  businessName: string;
  legalName?: string;
  categoryId: string;
  subcategoryId: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  languagesSupported: string[];
  email: string;
  phone: string;
  websiteUrl?: string;
  status: string;
  location: { country: string; city: string; lat?: number; lng?: number; serviceAreaCoverageKm?: number };
  media: { primaryPhoto: string; galleryPhotos: string[]; promoVideoUrl?: string; logo?: string };
  pricing: {
    bookingType?: ServiceBookingType;
    externalBookingLink?: string;
    priceList: { title: string; priceModel: ServicePriceModel; guestPriceGross?: number; agentPriceNet?: number }[];
  };
  audienceTargets: ServiceAudienceTarget[];
  subscriptionPlan: string;
};

export type CoreMirrorBlogPost = {
  slug: string;
  title: string;
  category: string;
  publishedAt: string;
  excerpt: string;
  coverImage: string;
  content: string[];
  relatedPropertySlug?: string;
  status: string;
};

export type CoreMirrorJob = {
  id: string;
  slug: string;
  title: string;
  roleType: string;
  category: string;
  location: string;
  region: string;
  country: string;
  description: string;
  requirements: string[];
  benefits: string[];
  salaryRange?: string;
  companyName: string;
  companyLogo?: string;
  contactEmail: string;
  status: string;
};

export type CoreMirrorAgent = {
  id: string;
  slug: string;
  name: string;
  photo?: string;
  bio?: string;
  areas: string[];
  specialties: string[];
  rating?: number;
  reviewCount: number;
  subscriptionTier: "free" | "basic" | "premium";
  contactEmail?: string;
  phone?: string;
  status: string;
};

export type CoreMirrorPmc = {
  id: string;
  slug: string;
  companyName: string;
  logo?: string;
  description?: string;
  areas: string[];
  servicesOffered: string[];
  portfolioCount: number;
  rating?: number;
  reviewCount: number;
  subscriptionTier: "free" | "basic" | "premium";
  contactEmail?: string;
  phone?: string;
  website?: string;
  status: string;
};
