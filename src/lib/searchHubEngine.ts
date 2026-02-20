/**
 * ClickyTour Search Hub Engine
 * Unified search index across all Core Mirror data sources.
 * Extended from villa4you pattern with additional intents: activities, jobs, PMCs.
 */

import { coreMirrorProperties } from "./coreMirror/properties";
import { coreMirrorHotels, coreMirrorHotelRooms } from "./coreMirror/hotels";
import { coreMirrorServices } from "./coreMirror/services";
import { coreMirrorBlogPosts } from "./coreMirror/blog";
import { coreMirrorJobs } from "./coreMirror/jobs";
import { coreMirrorAgents } from "./coreMirror/agents";
import { coreMirrorPmcs } from "./coreMirror/pmcs";

/* ── Intent types ─────────────────────────────────────────── */

export type SearchIntent = "vacation" | "real-estate" | "hotels" | "services" | "activities" | "jobs" | "pmcs" | "blog";

export const INTENTS: { id: SearchIntent; label: string; icon: string }[] = [
  { id: "vacation", label: "Vacation Rentals", icon: "sun" },
  { id: "hotels", label: "Hotels", icon: "building" },
  { id: "real-estate", label: "Real Estate", icon: "home" },
  { id: "services", label: "Services", icon: "wrench" },
  { id: "activities", label: "Activities", icon: "compass" },
  { id: "jobs", label: "Jobs", icon: "briefcase" },
  { id: "pmcs", label: "PMCs", icon: "users" },
  { id: "blog", label: "Blog", icon: "file-text" },
];

export type SortOption = "relevance" | "price-asc" | "price-desc" | "beach-distance" | "date" | "area" | "roi" | "rating";

/* ── Unified search result item ──────────────────────────── */

export type SearchResultItem = {
  id: string;
  intent: SearchIntent;
  title: string;
  description: string;
  image?: string;
  images?: string[];
  href: string;
  price?: number;
  priceLabel?: string;
  location?: string;
  region?: string;
  badges: string[];
  facts: { label: string; value: string }[];
  rating?: number;
  reviewCount?: number;
  availability?: "available" | "unavailable" | "new";
  // filtering extras
  bedrooms?: number;
  bathrooms?: number;
  guests?: number;
  areaSqm?: number;
  beachDistanceM?: number;
  amenities?: string[];
  categoryId?: string;
  subcategoryId?: string;
  blogCategory?: string;
  publishedAt?: string;
  dealTypes?: string[];
  roleType?: string;
  jobCategory?: string;
  subscriptionTier?: string;
};

/* ── Search filters ──────────────────────────────────────── */

export type SearchFilters = {
  intent: SearchIntent;
  q?: string;
  location?: string;
  sort?: SortOption;
  bedrooms?: number;
  guests?: number;
  beachDistance?: string;
  budgetMin?: number;
  budgetMax?: number;
  amenities?: string[];
  features?: string[];
  category?: string;
  subcategory?: string;
  blogCategory?: string;
  mode?: "buy" | "rent";
  stars?: number;
  roleType?: string;
  jobCategory?: string;
};

/* ── Build index ─────────────────────────────────────────── */

function vacationItems(): SearchResultItem[] {
  return coreMirrorProperties
    .filter((p) => p.type === "vacation")
    .map((p) => ({
      id: `vac-${p.slug}`,
      intent: "vacation" as SearchIntent,
      title: p.title,
      description: p.shortDescription,
      image: p.gallery[0],
      images: p.gallery,
      href: `/property/vacation/${p.slug}`,
      price: p.pricing.basicFromPrice,
      priceLabel: `From EUR${p.pricing.basicFromPrice}/night`,
      location: p.location.area,
      region: p.location.region,
      badges: p.badges,
      facts: [
        { label: "Guests", value: String(p.metrics.guests) },
        { label: "Bedrooms", value: String(p.metrics.bedrooms) },
        { label: "Beach", value: p.location.beachDistanceM ? `${p.location.beachDistanceM}m` : "N/A" },
      ],
      rating: 4.8,
      reviewCount: 95,
      availability: "available" as const,
      bedrooms: p.metrics.bedrooms,
      bathrooms: p.metrics.bathrooms,
      guests: p.metrics.guests,
      areaSqm: p.metrics.areaSqm,
      beachDistanceM: p.location.beachDistanceM,
      amenities: p.amenities,
      dealTypes: p.dealTypes,
    }));
}

function realEstateItems(): SearchResultItem[] {
  return coreMirrorProperties
    .filter((p) => p.type === "real-estate")
    .map((p) => ({
      id: `re-${p.slug}`,
      intent: "real-estate" as SearchIntent,
      title: p.title,
      description: p.shortDescription,
      image: p.gallery[0],
      images: p.gallery,
      href: `/property/real-estate/${p.slug}`,
      price: p.realEstateMeta?.salePriceEur ?? p.pricing.basicFromPrice,
      priceLabel: p.realEstateMeta?.salePriceEur
        ? `Sale EUR${(p.realEstateMeta.salePriceEur / 1000).toFixed(0)}K`
        : `From EUR${p.pricing.basicFromPrice}/night`,
      location: p.location.area,
      region: p.location.region,
      badges: p.badges,
      facts: [
        { label: "Bedrooms", value: String(p.metrics.bedrooms) },
        { label: "Area", value: `${p.metrics.areaSqm} sqm` },
        ...(p.realEstateMeta?.roiPercent ? [{ label: "ROI", value: `${p.realEstateMeta.roiPercent}%` }] : []),
      ],
      rating: 4.7,
      reviewCount: 42,
      availability: "available" as const,
      bedrooms: p.metrics.bedrooms,
      bathrooms: p.metrics.bathrooms,
      areaSqm: p.metrics.areaSqm,
      amenities: p.amenities,
      dealTypes: p.dealTypes,
    }));
}

function hotelItems(): SearchResultItem[] {
  return coreMirrorHotels.map((h) => ({
    id: `hotel-${h.slug}`,
    intent: "hotels" as SearchIntent,
    title: h.title,
    description: h.shortSummary,
    image: h.media.primaryImage,
    images: [h.media.primaryImage, ...h.media.galleryImages],
    href: `/property/hotel/${h.slug}`,
    price: h.prices.fromNightlyEur,
    priceLabel: `From EUR${h.prices.fromNightlyEur}/night`,
    location: h.location.city,
    region: h.location.region,
    badges: h.amenities.slice(0, 3),
    facts: [
      { label: "Type", value: h.hotelType.replace(/_/g, " ") },
      ...h.distances.slice(0, 2),
    ],
    rating: 4.6,
    reviewCount: 180,
    availability: "available" as const,
    amenities: h.amenities,
    dealTypes: h.dealTypes,
  }));
}

function serviceItems(): SearchResultItem[] {
  return coreMirrorServices
    .filter((s) => s.categoryId !== "dining-nightlife" && s.categoryId !== "outdoor-activities")
    .map((s) => ({
      id: `svc-${s.slug}`,
      intent: "services" as SearchIntent,
      title: s.businessName,
      description: s.shortDescription,
      image: s.media.primaryPhoto,
      images: [s.media.primaryPhoto, ...s.media.galleryPhotos],
      href: `/service/${s.slug}`,
      price: s.pricing.priceList[0]?.guestPriceGross,
      priceLabel: s.pricing.priceList[0]?.guestPriceGross
        ? `From EUR${s.pricing.priceList[0].guestPriceGross}`
        : "Request quote",
      location: s.location.city,
      region: s.location.country,
      badges: s.highlights.slice(0, 2),
      facts: [
        { label: "Category", value: s.categoryId.replace(/-/g, " ") },
        { label: "Area", value: s.location.serviceAreaCoverageKm ? `${s.location.serviceAreaCoverageKm}km radius` : s.location.city },
      ],
      availability: "available" as const,
      categoryId: s.categoryId,
      subcategoryId: s.subcategoryId,
    }));
}

function activityItems(): SearchResultItem[] {
  return coreMirrorServices
    .filter((s) => s.categoryId === "dining-nightlife" || s.audienceTargets.includes("guests"))
    .map((s) => ({
      id: `act-${s.slug}`,
      intent: "activities" as SearchIntent,
      title: s.businessName,
      description: s.shortDescription,
      image: s.media.primaryPhoto,
      href: `/service/${s.slug}`,
      price: s.pricing.priceList[0]?.guestPriceGross,
      priceLabel: s.pricing.priceList[0]?.guestPriceGross
        ? `From EUR${s.pricing.priceList[0].guestPriceGross}/person`
        : "Request quote",
      location: s.location.city,
      badges: s.highlights.slice(0, 2),
      facts: [{ label: "Languages", value: s.languagesSupported.join(", ") }],
      availability: "available" as const,
      categoryId: s.categoryId,
    }));
}

function jobItems(): SearchResultItem[] {
  return coreMirrorJobs.map((j) => ({
    id: `job-${j.slug}`,
    intent: "jobs" as SearchIntent,
    title: j.title,
    description: j.description.slice(0, 150) + "...",
    href: `/job/${j.slug}`,
    price: undefined,
    priceLabel: j.salaryRange || "Competitive",
    location: j.location,
    region: j.region,
    badges: [j.roleType, j.category],
    facts: [
      { label: "Type", value: j.roleType },
      { label: "Company", value: j.companyName },
    ],
    availability: j.status === "open" ? ("available" as const) : ("unavailable" as const),
    roleType: j.roleType,
    jobCategory: j.category,
  }));
}

function pmcItems(): SearchResultItem[] {
  return coreMirrorPmcs.map((p) => ({
    id: `pmc-${p.slug}`,
    intent: "pmcs" as SearchIntent,
    title: p.companyName,
    description: p.description || "",
    image: p.logo,
    href: `/pmc/${p.slug}`,
    location: p.areas[0],
    badges: p.servicesOffered.slice(0, 3),
    facts: [
      { label: "Properties", value: String(p.portfolioCount) },
      { label: "Rating", value: p.rating ? `${p.rating}/5` : "New" },
    ],
    rating: p.rating ?? undefined,
    reviewCount: p.reviewCount,
    availability: "available" as const,
    subscriptionTier: p.subscriptionTier,
  }));
}

function blogItems(): SearchResultItem[] {
  return coreMirrorBlogPosts.map((b) => ({
    id: `blog-${b.slug}`,
    intent: "blog" as SearchIntent,
    title: b.title,
    description: b.excerpt,
    image: b.coverImage,
    href: `/blog/${b.slug}`,
    badges: [b.category],
    facts: [{ label: "Published", value: b.publishedAt }],
    availability: "available" as const,
    blogCategory: b.category,
    publishedAt: b.publishedAt,
  }));
}

/* ── Public API ───────────────────────────────────────────── */

export function getAllSearchItems(): SearchResultItem[] {
  return [
    ...vacationItems(),
    ...realEstateItems(),
    ...hotelItems(),
    ...serviceItems(),
    ...activityItems(),
    ...jobItems(),
    ...pmcItems(),
    ...blogItems(),
  ];
}

export function filterAndSort(items: SearchResultItem[], filters: SearchFilters): SearchResultItem[] {
  let results = items.filter((item) => item.intent === filters.intent);

  if (filters.q) {
    const q = filters.q.toLowerCase();
    results = results.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.location?.toLowerCase().includes(q)
    );
  }

  if (filters.location) {
    const loc = filters.location.toLowerCase();
    results = results.filter(
      (item) => item.location?.toLowerCase().includes(loc) || item.region?.toLowerCase().includes(loc)
    );
  }

  if (filters.bedrooms) results = results.filter((item) => (item.bedrooms ?? 0) >= filters.bedrooms!);
  if (filters.guests) results = results.filter((item) => (item.guests ?? 0) >= filters.guests!);
  if (filters.budgetMin) results = results.filter((item) => (item.price ?? 0) >= filters.budgetMin!);
  if (filters.budgetMax) results = results.filter((item) => (item.price ?? Infinity) <= filters.budgetMax!);
  if (filters.category) results = results.filter((item) => item.categoryId === filters.category);
  if (filters.blogCategory) results = results.filter((item) => item.blogCategory === filters.blogCategory);
  if (filters.roleType) results = results.filter((item) => item.roleType === filters.roleType);
  if (filters.jobCategory) results = results.filter((item) => item.jobCategory === filters.jobCategory);
  if (filters.amenities?.length) {
    results = results.filter((item) =>
      filters.amenities!.every((a) => item.amenities?.some((ia) => ia.toLowerCase().includes(a.toLowerCase())))
    );
  }

  // Sort
  switch (filters.sort) {
    case "price-asc":
      results.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
      break;
    case "price-desc":
      results.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
      break;
    case "beach-distance":
      results.sort((a, b) => (a.beachDistanceM ?? Infinity) - (b.beachDistanceM ?? Infinity));
      break;
    case "date":
      results.sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? ""));
      break;
    case "rating":
      results.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
      break;
    case "area":
      results.sort((a, b) => (b.areaSqm ?? 0) - (a.areaSqm ?? 0));
      break;
  }

  return results;
}

export function filtersToParams(filters: SearchFilters): URLSearchParams {
  const p = new URLSearchParams();
  p.set("intent", filters.intent);
  if (filters.q) p.set("q", filters.q);
  if (filters.location) p.set("location", filters.location);
  if (filters.sort && filters.sort !== "relevance") p.set("sort", filters.sort);
  if (filters.bedrooms) p.set("bedrooms", String(filters.bedrooms));
  if (filters.guests) p.set("guests", String(filters.guests));
  if (filters.budgetMin) p.set("budgetMin", String(filters.budgetMin));
  if (filters.budgetMax) p.set("budgetMax", String(filters.budgetMax));
  if (filters.category) p.set("category", filters.category);
  if (filters.blogCategory) p.set("blogCategory", filters.blogCategory);
  if (filters.roleType) p.set("roleType", filters.roleType);
  if (filters.jobCategory) p.set("jobCategory", filters.jobCategory);
  return p;
}

export function paramsToFilters(params: URLSearchParams): SearchFilters {
  return {
    intent: (params.get("intent") as SearchIntent) || "vacation",
    q: params.get("q") || undefined,
    location: params.get("location") || undefined,
    sort: (params.get("sort") as SortOption) || "relevance",
    bedrooms: params.get("bedrooms") ? Number(params.get("bedrooms")) : undefined,
    guests: params.get("guests") ? Number(params.get("guests")) : undefined,
    budgetMin: params.get("budgetMin") ? Number(params.get("budgetMin")) : undefined,
    budgetMax: params.get("budgetMax") ? Number(params.get("budgetMax")) : undefined,
    category: params.get("category") || undefined,
    blogCategory: params.get("blogCategory") || undefined,
    roleType: params.get("roleType") || undefined,
    jobCategory: params.get("jobCategory") || undefined,
  };
}
