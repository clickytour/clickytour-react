/* ── Marketplace & Directory shared types ── */

/** Pool card item — what public users see (redacted) */
export interface PoolCard {
  ref: string;
  createdAtIso: string;
  role: string;
  subrole: string;
  leadName: string;
  propertyType: string;
  region: string;
  city: string;
  country: string;
  bedrooms: string;
  bathrooms: string;
  maxGuests: string;
  squareMeters: string;
  hasPool: boolean;
  poolType: string;
  desiredNetoRate: string;
  priceDescriptionPer: string;
  availableFromDate: string;
  tags: string[];
  images: { name: string; contentType: string; url: string }[];
  pmcUrl: string;
  fullUrl: string;
}

/** Directory listing card — universal across all 7 directories */
export interface DirectoryItem {
  id: string;
  type: DirectoryType;
  name: string;
  subtitle?: string;
  description: string;
  category?: string;
  subcategory?: string;
  region: string;
  city?: string;
  country?: string;
  coverPhoto?: string;
  photos?: string[];
  rating?: number;
  reviewCount?: number;
  tags: string[];
  badges: string[];
  verifiedBadge: boolean;
  /** Gated fields — only shown to subscribers */
  gated: {
    phone?: string;
    email?: string;
    website?: string;
    address?: string;
    socialLinks?: Record<string, string>;
    portfolio?: string[];
    pricingDetails?: string;
  };
  /** Public metadata */
  meta: Record<string, string | number | boolean>;
  href: string;
  createdAt: string;
  status: "available" | "claimed" | "pending" | "inactive";
}

export type DirectoryType =
  | "pmc"
  | "service"
  | "agent"
  | "hotel"
  | "staff"
  | "partner"
  | "property";

/** Submission form payload — sent to CF Worker or API stub */
export interface SubmissionPayload {
  ref?: string;
  role: string;
  subrole?: string;
  leadName: string;
  fields: Record<string, unknown>;
  files?: { name: string; r2Key: string; contentType: string }[];
  tags?: string[];
  tracking?: Record<string, string>;
  createdAtIso: string;
}

/** Claim request */
export interface ClaimRequest {
  ref: string;
  pmcName?: string;
  pmcEmail?: string;
  pmcPhone?: string;
  businessName?: string;
  businessEmail?: string;
  businessPhone?: string;
  claimedAtIso?: string;
}

/** Subscription tier for gating */
export type SubscriptionTier = "free" | "registered" | "starter" | "professional" | "enterprise" | "operator";

/** Pool API response */
export interface PoolResponse {
  ok: boolean;
  count: number;
  items: PoolCard[];
  nextCursor: string | null;
  error?: string;
}

/** Directory search filters */
export interface DirectoryFilters {
  query?: string;
  category?: string;
  region?: string;
  type?: DirectoryType;
  sortBy?: "newest" | "rating" | "name";
  page?: number;
  limit?: number;
}
