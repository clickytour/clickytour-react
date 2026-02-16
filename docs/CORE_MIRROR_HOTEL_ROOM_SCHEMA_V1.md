# CORE_MIRROR_HOTEL_ROOM_SCHEMA_V1

Status: Draft finalized for mock-mode (pre Core DB integration)
Date: 2026-02-16
Source: Core Add Room UI screenshots

## Objective
Define a dedicated Hotel Room child schema linked to Hotel parent, supporting rental/monthly/sale modes with room-level availability and pricing.

---

## 1) Canonical Entity: `CoreMirrorHotelRoomV1`

```ts
type DealType = "short_term_rent" | "monthly_rent" | "sale";
type DateRange = { from: string; to: string }; // YYYY-MM-DD

type RoomType =
  | "single"
  | "double"
  | "twin"
  | "triple"
  | "family"
  | "studio"
  | "suite"
  | "apartment"
  | "dormitory_bed"
  | "bungalow"
  | "maisonette"
  | "villa"
  | string;

type SeasonRate = {
  seasonType: "season" | "custom";
  seasonId?: string;
  basicNightNetEur?: number;
  basicNightGrossEur?: number;
  weekendNightNetEur?: number;
  weekendNightGrossEur?: number;
  minStayNights?: number;
  maxStayNights?: number;
  checkInDays?: string[];
  checkOutDays?: string[];
  discountEnabled?: boolean;
};

type CoreMirrorHotelRoomV1 = {
  id: string;
  slug: string;
  hotelId: string;          // parent hotel link
  hotelSlug?: string;
  status?: "draft" | "approved" | "deactivated" | string;

  basic: {
    title: string;
    roomType: RoomType;
    quantity?: number;
    floorspace?: number;
    floorspaceUnit?: string;
  };

  media: {
    primaryImage: string;
    galleryImages?: string[];
    tour3dUrl?: string;
  };

  rooms?: {
    bedroomsCount?: number;
    bathroomsCount?: number;
    kitchensCount?: number;
    otherRooms?: string[];
  };

  highlights?: string[];
  attributes?: string[]; // amenities in room modal

  availability?: {
    availableForSale?: boolean;
    availableForRentPeriods?: DateRange[];
    unavailablePeriods?: DateRange[];
  };

  rates?: {
    // nightly
    basicNightNetEur?: number;
    basicNightGrossEur?: number;
    weekendNightNetEur?: number;
    weekendNightGrossEur?: number;

    // monthly
    monthlyRateEur?: number;
    monthlyRatePerSqmEur?: number;

    // rules
    maxGuests?: number;
    minStayNights?: number;
    maxStayNights?: number;
    checkInDays?: string[];
    checkOutDays?: string[];

    seasonalRates?: SeasonRate[];
  };

  dealType?: DealType[]; // inherited from hotel unless overridden

  sync?: {
    enabled?: boolean;
    externalRoomId?: string;
    source?: string;
  };
};
```

---

## 2) Required vs Optional

### Hard required
- `id`, `slug`
- `hotelId`
- `basic.title`
- `basic.roomType`
- `media.primaryImage`

### Strongly recommended
- `rates.maxGuests`
- at least one price source (`basicNightNetEur` or `monthlyRateEur`)
- `availability` ranges for sell/rent visibility

### Optional
All non-required fields; hide empty sections in room-details UI.

---

## 3) Canonical UI Mapping (Hotel Room details)

- Hero: room title + room type + quantity + gallery
- Room specs: size, beds/rooms summary, max guests
- Availability: sale/rent flags + unavailable periods
- Pricing tabs:
  - nightly (basic/weekend)
  - monthly
  - seasonal (if defined)
- Attributes block: room amenities
- CTA: Reserve room / Monthly request / Invest inquiry
- Parent context: “Part of Hotel X” with backlink to parent hotel page

---

## 4) Parent-Child Binding Rules

1. Hotel is canonical parent; room cannot exist without `hotelId`.
2. `dealType` defaults to hotel deal modes if room-level not set.
3. Parent hotel page may show room cards from child entities.
4. Room detail page should include parent hotel summary snippet.

---

## 5) Confirmed by screenshots

Confirmed sections in Add Room modal:
- Basic Details (title, room type enum, quantity, floorspace, unit)
- Media (primary, gallery, 3D tour)
- Attributes (amenities list)
- Availability (for sale + rent periods + unavailable periods)
- Basic rates (nightly + monthly + basic rules)
- Seasonal rates modal (season/custom season + min/max stay + checkin/out days + discount)

Room type enum examples confirmed:
- Single, Double, Twin, Triple, Family, Studio, Suite, Apartment, Dormitory Bed, Bungalow, Maisonette, Villa.

---

## 6) Pending for V1.1 closure

Need optional remaining screenshots if present in room flow:
- Dedicated “Rooms” internals section details (if separate from basic)
- Highlights section values (if populated)
- Synchronisation details
