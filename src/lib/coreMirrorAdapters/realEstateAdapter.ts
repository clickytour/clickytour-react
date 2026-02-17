import type { CoreMirrorRealEstateProperty } from "@/lib/coreMirrorRealEstateMock";
import { pickPrimaryCta, sanitizeDealTypes } from "@/lib/coreMirrorAdapters/dealTypeRules";
import type { CanonicalDetailsViewModel } from "@/lib/coreMirrorAdapters/types";

export function toRealEstateDetailsVM(property: CoreMirrorRealEstateProperty): CanonicalDetailsViewModel {
  const dealType = sanitizeDealTypes("real-estate", property.dealType);
  return {
    id: property.id,
    slug: property.slug,
    entityType: "real-estate",
    title: property.title,
    subtitle: property.shortSummary,
    description: property.description,
    dealType,
    primaryImage: property.media.primaryImage,
    gallery: property.media.galleryImages,
    tags: ["Real Estate", ...dealType.map((d) => d.replaceAll("_", " "))],
    facts: [
      { label: "Bedrooms", value: property.metrics.bedrooms },
      { label: "Bathrooms", value: property.metrics.bathrooms },
      { label: "Area", value: `${property.metrics.areaSqm} m²` },
      { label: "Sale", value: `${property.prices.saleEur} EUR` },
      { label: "Monthly", value: `${property.prices.monthlyEur} EUR` },
      { label: "ROI", value: `${property.prices.roiPercent}%` },
    ],
    amenities: property.amenities,
    distances: property.distances,
    locationLabel: `${property.location.city}, ${property.location.region}, ${property.location.country}`,
    media: {
      videoUrl: property.media.videoUrl,
      tour3dUrl: property.media.tour3dUrl,
      contentUrls: property.media.contentUrls,
    },
    relatedServices: property.nearbyServices,
    relatedBlogPosts: property.blogPosts,
    cta: {
      primary: pickPrimaryCta(dealType),
      secondary: "Schedule viewing",
    },
  };
}
