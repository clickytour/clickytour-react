/**
 * Villa4you Proposal Bridge
 *
 * Converts Core Mirror mock data (vacation properties, hotels, real estate)
 * into the Proposal interface used by proposal templates.
 * Villa4you proposals are ALWAYS mode=brand with real property names.
 */

import type { Proposal, ProposalItem } from "@/lib/proposalMockData";
import { getCoreMirrorPropertyBySlug, type CoreMirrorProperty } from "@/lib/coreMirrorPropertyMock";
import { getCoreMirrorHotelBySlug, type CoreMirrorHotel } from "@/lib/coreMirrorHotelMock";
import { getCoreMirrorRealEstateBySlug, type CoreMirrorRealEstateProperty } from "@/lib/coreMirrorRealEstateMock";

// ── Converters ──────────────────────────────────────────────

function vacationToItem(p: CoreMirrorProperty): ProposalItem {
  return {
    name: p.title,
    description: p.shortDescription,
    image: p.gallery[0],
    images: p.gallery,
    region: `${p.location.area}, ${p.location.region}`,
    listingType: "Villa",
    bedrooms: p.metrics.bedrooms,
    bathrooms: p.metrics.bathrooms,
    maxGuests: p.metrics.guests,
    pricePerNight: p.pricing.basicFrom,
    totalPrice: p.pricing.basicFrom * p.pricing.minStayNights,
    rating: 4.8,
    reviewCount: 94,
    detailsUrl: `/property/${p.slug}`,
    videoUrl: p.videoUrl,
    tour3dUrl: p.tour3dUrl,
    availability: "available",
    originalMatch: true,
  };
}

function hotelToItem(h: CoreMirrorHotel): ProposalItem {
  return {
    name: h.title,
    description: h.shortSummary,
    image: h.media.primaryImage,
    images: [h.media.primaryImage, ...h.media.galleryImages],
    region: `${h.location.city}, ${h.location.region}`,
    listingType: "Hotel",
    pricePerNight: h.prices.fromNightlyEur,
    totalPrice: h.prices.fromNightlyEur * 7,
    rating: 4.6,
    reviewCount: 212,
    detailsUrl: `/property/hotel/${h.slug}`,
    videoUrl: h.media.videoUrl,
    tour3dUrl: h.media.tour3dUrl,
    availability: "available",
    originalMatch: true,
  };
}

function realEstateToItem(r: CoreMirrorRealEstateProperty): ProposalItem {
  return {
    name: r.title,
    description: r.shortSummary,
    image: r.media.primaryImage,
    images: [r.media.primaryImage, ...r.media.galleryImages],
    region: `${r.location.city}, ${r.location.region}`,
    listingType: "Investment Property",
    bedrooms: r.metrics.bedrooms,
    bathrooms: r.metrics.bathrooms,
    totalPrice: r.prices.saleEur,
    rating: 4.4,
    reviewCount: 18,
    detailsUrl: `/property/real-estate/${r.slug}`,
    videoUrl: r.media.videoUrl,
    tour3dUrl: r.media.tour3dUrl,
    availability: "available",
    originalMatch: true,
  };
}

// ── Pre-built Villa4you Proposals ───────────────────────────

function buildVilla4youProposals(): Proposal[] {
  const vacation = getCoreMirrorPropertyBySlug("villa-glarokavos-sea-view");
  const hotel = getCoreMirrorHotelBySlug("aegean-boutique-hotel");
  const realEstate = getCoreMirrorRealEstateBySlug("kassandra-investment-villa");

  const proposals: Proposal[] = [];

  // 1 — Vacation villa proposal
  if (vacation) {
    proposals.push({
      id: "v4y-vacation-halkidiki",
      mode: "brand",
      type: "individual",
      entityType: "vacation",
      title: "Halkidiki Sea-View Villa Selection",
      subtitle: "Curated vacation villas for your summer stay",
      createdAt: "2026-02-18T10:00:00Z",
      expiresAt: "2026-04-01T23:59:59Z",
      items: [vacationToItem(vacation)],
    });
  }

  // 2 — Hotel proposal
  if (hotel) {
    proposals.push({
      id: "v4y-hotel-pefkohori",
      mode: "brand",
      type: "individual",
      entityType: "hotel_room",
      title: "Boutique Hotel Stays in Halkidiki",
      subtitle: "Premium hotel options with flexible booking",
      createdAt: "2026-02-18T10:00:00Z",
      expiresAt: "2026-04-01T23:59:59Z",
      items: [hotelToItem(hotel)],
    });
  }

  // 3 — Real estate proposal
  if (realEstate) {
    proposals.push({
      id: "v4y-investment-kassandra",
      mode: "brand",
      type: "individual",
      entityType: "real_estate",
      title: "Investment Opportunities in Kassandra",
      subtitle: "Sea-view properties with strong ROI potential",
      createdAt: "2026-02-18T10:00:00Z",
      expiresAt: "2026-04-01T23:59:59Z",
      items: [realEstateToItem(realEstate)],
    });
  }

  // 4 — Combination proposal (all types)
  const comboItems: ProposalItem[] = [];
  if (vacation) comboItems.push(vacationToItem(vacation));
  if (hotel) comboItems.push(hotelToItem(hotel));
  if (realEstate) comboItems.push(realEstateToItem(realEstate));

  if (comboItems.length > 0) {
    proposals.push({
      id: "v4y-combo-halkidiki",
      mode: "brand",
      type: "combination",
      entityType: "vacation",
      title: "Complete Halkidiki Property Collection",
      subtitle: "Villas, hotels, and investment properties — all in one proposal",
      createdAt: "2026-02-18T10:00:00Z",
      expiresAt: "2026-04-01T23:59:59Z",
      items: comboItems,
    });
  }

  return proposals;
}

// ── Public API ──────────────────────────────────────────────

let _cache: Proposal[] | null = null;

export function getVilla4youProposals(): Proposal[] {
  if (!_cache) _cache = buildVilla4youProposals();
  return _cache;
}

export function getVilla4youProposalById(id: string): Proposal | undefined {
  return getVilla4youProposals().find((p) => p.id === id);
}
