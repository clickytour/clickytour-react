import type { CoreMirrorHotelRoom } from "@/lib/coreMirrorHotelRoomMock";
import { pickPrimaryCta, sanitizeDealTypes } from "@/lib/coreMirrorAdapters/dealTypeRules";
import type { CanonicalDetailsViewModel } from "@/lib/coreMirrorAdapters/types";

export function toHotelRoomDetailsVM(room: CoreMirrorHotelRoom): CanonicalDetailsViewModel {
  const dealType = sanitizeDealTypes("hotel-room", room.dealType);
  return {
    id: room.id,
    slug: room.slug,
    entityType: "hotel-room",
    title: room.title,
    subtitle: room.shortSummary,
    dealType,
    primaryImage: room.media.primaryImage,
    gallery: room.media.galleryImages,
    tags: [room.roomType, ...dealType.map((d) => d.replaceAll("_", " "))],
    facts: [
      { label: "Max guests", value: room.maxGuests },
      { label: "Quantity", value: room.quantity },
      { label: "Nightly", value: `${room.rates.nightlyEur} EUR` },
      { label: "Monthly", value: `${room.rates.monthlyEur} EUR` },
    ],
    amenities: room.amenities,
    distances: [{ label: "Hotel", value: room.hotelSlug }],
    locationLabel: `Part of ${room.hotelSlug}`,
    cta: {
      primary: pickPrimaryCta(dealType),
      secondary: "View parent hotel",
    },
  };
}
