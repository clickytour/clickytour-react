import type { CoreMirrorHotel } from "@/lib/coreMirrorHotelMock";
import { pickPrimaryCta, sanitizeDealTypes } from "@/lib/coreMirrorAdapters/dealTypeRules";
import type { CanonicalDetailsViewModel } from "@/lib/coreMirrorAdapters/types";

export function toHotelDetailsVM(hotel: CoreMirrorHotel): CanonicalDetailsViewModel {
  const dealType = sanitizeDealTypes("hotel", hotel.dealType);
  return {
    id: hotel.id,
    slug: hotel.slug,
    entityType: "hotel",
    title: hotel.title,
    subtitle: hotel.shortSummary,
    description: hotel.description,
    dealType,
    primaryImage: hotel.media.primaryImage,
    gallery: hotel.media.galleryImages,
    tags: [hotel.hotelType.replaceAll("_", " "), ...dealType.map((d) => d.replaceAll("_", " "))],
    facts: [
      { label: "From nightly", value: `${hotel.prices.fromNightlyEur} EUR` },
      { label: "Monthly", value: `${hotel.prices.monthlyEur} EUR` },
      { label: "Sale", value: `${hotel.prices.saleEur} EUR` },
    ],
    amenities: hotel.amenities,
    distances: hotel.distances,
    locationLabel: `${hotel.location.city}, ${hotel.location.region}, ${hotel.location.country}`,
    cta: {
      primary: pickPrimaryCta(dealType),
      secondary: "Open room inventory",
    },
  };
}
