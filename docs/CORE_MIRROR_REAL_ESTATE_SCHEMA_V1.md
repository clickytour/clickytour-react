# CORE_MIRROR_REAL_ESTATE_SCHEMA_V1

Status: Draft finalized for mock-mode (pre Core DB integration)
Date: 2026-02-16
Source: Core Create Property (Real Estate) UI screenshots

## Objective
Define a dedicated Real Estate mirror schema (separate from Vacation Property) to support canonical buy/rent details pages with correct field parity.

---

## 1) Canonical Entity: `CoreMirrorRealEstatePropertyV1`

```ts
type DealType = "monthly_rent" | "sale" | "short_term_rent";
type PropertyClass = "residential" | "commercial" | "land" | "hotel" | "hotel_room" | "other";

type Orientation =
  | "east"
  | "north"
  | "west"
  | "south"
  | "east_west"
  | "north_east"
  | "north_west"
  | "south_east"
  | "south_west"
  | "east_meridian"
  | "west_meridian"
  | "meridian";

type DateRange = { from: string; to: string }; // YYYY-MM-DD

type CoreMirrorRealEstatePropertyV1 = {
  id: string;
  slug: string;
  status?: "draft" | "approved" | "deactivated" | string;

  reportableSeller: { id: string; name: string; email?: string };
  propertyClass: PropertyClass;
  propertyType: string;
  dealType: DealType[];

  ownerTitle: string;
  briefDescriptionFromOwner?: string;
  commercialTitle?: string;
  headlineEn?: string;
  shortSummaryEn?: string;
  descriptionEn?: string;

  floorspace?: number;
  floorspaceUnit?: string;
  grounds?: number;
  groundsUnit?: string;
  floorsInBuilding?: number;
  floorsOfProperty?: number;
  entrance?: string;

  // licensing/compliance
  rentalLicenceType?: string;
  rentalLicenceNumber?: string;
  monthlyRentRequiredWithoutFile?: boolean;
  licences?: Array<{ licenceType: string; number: string; fileUrl?: string }>;
  otherLicences?: Array<{ licenceType: string; number: string }>;

  // real-estate specific
  realEstateDetails?: {
    floorPlanFiles?: string[];
    yearOfConstruction?: number;
    yearOfRenovation?: number;

    kitchenAreaSize?: number;
    kitchenAreaUnit?: string;
    livingRoomAreaSize?: number;
    livingRoomAreaUnit?: string;

    heatingFeatures?: Array<"diesel" | "gas" | "air_conditioner" | "other">;
    additionalFeatures?: Array<
      | "new_development"
      | "renovated"
      | "luxurious"
      | "unfinished"
      | "under_construction"
      | "neoclassical"
      | "empty"
    >;

    suitableFor?: Array<
      | "holiday_home"
      | "investment"
      | "student"
      | "professional_use"
      | "tourist_rental"
      | "other"
    >;

    commonExpensesPerYearEur?: number;
    priceForSaleEur?: number;
    priceForSalePerSqmEur?: number;
    roiPercent?: number;
  };

  location: {
    latitude?: number;
    longitude?: number;
    country: string;
    city: string;
    street: string;
    address?: string;
    apartmentFloorBuilding?: string;
    stateOrRegion: string;
    postalZipCode: string;
    orientation?: Orientation[];
  };

  rooms?: {
    bedroomsCount?: number;
    bathroomsCount?: number;
    kitchensCount?: number;

    bedrooms?: Array<{
      name?: string;
      type?: string;
      bunkBed?: number;
      doubleBed?: number;
      kingSizeBed?: number;
      queenSizeBed?: number;
      singleBedAdult?: number;
      singleBedChild?: number;
      sofaBedDouble?: number;
      sofaBedSingle?: number;
    }>;

    bathrooms?: Array<{
      name?: string;
      isPrivate?: boolean;
      bathroomType?: "en_suite" | "full" | "wc" | string;
      toiletType?: string;
      bathType?: string;
    }>;

    otherRooms?: string[];
  };

  media: {
    primaryImage: string;
    galleryImages?: string[];
    videoUrl?: string;
    tour3dUrl?: string;
    contentUrls?: Array<{ site: string; contentUrl: string }>;
  };

  amenities?: string[];
  kitchenAmenities?: string[];

  distances?: {
    beachDistanceM?: number;
    infrastructureDistanceKm?: number;
    airportDistanceKm?: number;
    supermarketDistanceKm?: number;
    restaurantDistanceKm?: number;
    marinaDistanceKm?: number;
    policeOfficeDistanceKm?: number;
    medicalOfficeDistanceKm?: number;
    schoolDistanceKm?: number;
    entertainmentFacilityDistanceKm?: number;
  };

  availability?: {
    availableForSale?: boolean;
    availableForRentPeriods?: DateRange[];
    unavailablePeriods?: DateRange[];
  };

  monthlyRates?: {
    monthlyRateEur?: number;
    monthlyRatePerSqmEur?: number;
  };
};
```

---

## 2) Required vs Optional

### Hard required
- `id`, `slug`
- `reportableSeller.id`, `reportableSeller.name`
- `propertyClass`, `propertyType`, `dealType[]`
- `ownerTitle`
- `location.country`, `location.city`, `location.street`, `location.stateOrRegion`, `location.postalZipCode`
- `media.primaryImage`

### Strongly recommended (real-estate conversion)
- `headlineEn` or `commercialTitle`
- `realEstateDetails.priceForSaleEur` (when sale)
- `realEstateDetails.priceForSalePerSqmEur` (when sale)
- `rooms.bedroomsCount`, `rooms.bathroomsCount`

### Optional
All non-required fields; hide empty sections in UI.

---

## 3) Canonical UI Mapping (Real Estate page)

- Hero title: `headlineEn || commercialTitle || ownerTitle`
- Price ribbon: `priceForSaleEur`, `priceForSalePerSqmEur`, `monthlyRateEur`
- Investment metrics: `roiPercent`, `commonExpensesPerYearEur`
- Specs: type, floorspace, grounds, floors, rooms
- Media: primary + gallery + video + 3D + floor plans
- Location/map: full address + coordinates + orientation
- Amenities: amenities + kitchen amenities
- Distances: proximity matrix
- Suitability chips: `suitableFor[]`
- Condition/features: `additionalFeatures[]`, heating, year built/renovated
- Compliance: license details
- CTA section: contact/inquiry/request viewing

---

## 4) Validation / Normalization Rules

1. `dealType[]` must include at least one value.
2. If `dealType` includes `sale`, expect sale price fields.
3. If coordinates exist, enforce valid ranges.
4. Normalize units:
   - beach in meters
   - other distances in km
5. Date ranges in availability must satisfy `from <= to`.
6. Slug always lowercase kebab-case.

---

## 5) Confirmed by screenshots

Confirmed sections/fields:
- Basic Details (with class/type/deal/licensing)
- Real Estate Details (specialized fields)
- Location (extended orientation values)
- Rooms (including detailed bedroom/bathroom structures)
- Media
- Description
- Facilities
- Distances
- Availability (`available for sale` + periods)
- Basic rates (`monthlyRateEur`, `monthlyRatePerSqmEur`)

---

## 6) Pending for full closure

Await exact real-estate variants (if any) for:
- Highlights
- Extras
- Booking rules
- House rules
- Instructions
- Synchronisation

When provided, append as V1.1 without breaking existing contract.
