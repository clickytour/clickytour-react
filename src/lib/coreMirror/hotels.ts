import type { CoreMirrorHotel, CoreMirrorHotelRoom } from "./types";

export const coreMirrorHotels: CoreMirrorHotel[] = [
  {
    id: "ct-h-001",
    slug: "aegean-breeze-hotel",
    title: "Aegean Breeze Boutique Hotel",
    shortSummary: "Boutique hotel with flexible operation model near Pefkohori beach.",
    description: "A modern boutique hotel offering room-level and whole-property operation options. Designed for operators and investors who want flexible seasonal or year-round revenue. Pool, breakfast service, and direct beach access.",
    hotelType: "boutique_hotel",
    dealTypes: ["short_term_rent", "monthly_rent", "sale"],
    status: "active",
    media: {
      primaryImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1800&auto=format&fit=crop",
      galleryImages: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop",
      ],
      videoUrl: "https://www.youtube.com/embed/2QF8xM0LxMI",
    },
    location: { city: "Pefkohori", region: "Halkidiki", country: "Greece" },
    prices: { fromNightlyEur: 130, monthlyEur: 3400, saleEur: 2100000 },
    amenities: ["Reception", "Wi-Fi", "Breakfast", "Pool", "Parking", "Beach Access"],
    distances: [
      { label: "Beach", value: "220 m" },
      { label: "Airport (SKG)", value: "98 km" },
      { label: "Marina", value: "2.1 km" },
    ],
  },
];

export const coreMirrorHotelRooms: CoreMirrorHotelRoom[] = [
  {
    id: "ct-hr-001",
    slug: "aegean-deluxe-suite",
    hotelSlug: "aegean-breeze-hotel",
    title: "Aegean Deluxe Suite",
    roomType: "suite",
    quantity: 6,
    shortSummary: "Premium suite with sea view, nightly and monthly options.",
    dealTypes: ["short_term_rent", "monthly_rent"],
    media: {
      primaryImage: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1800&auto=format&fit=crop",
      galleryImages: [
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      ],
    },
    rates: { nightlyEur: 180, monthlyEur: 3900 },
    maxGuests: 3,
    amenities: ["Wi-Fi", "AC", "Espresso Machine", "Balcony", "Sea View"],
  },
  {
    id: "ct-hr-002",
    slug: "aegean-standard-room",
    hotelSlug: "aegean-breeze-hotel",
    title: "Aegean Standard Room",
    roomType: "standard",
    quantity: 12,
    shortSummary: "Comfortable standard room with garden view.",
    dealTypes: ["short_term_rent"],
    media: {
      primaryImage: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1800&auto=format&fit=crop",
      galleryImages: [],
    },
    rates: { nightlyEur: 95 },
    maxGuests: 2,
    amenities: ["Wi-Fi", "AC", "Mini Fridge"],
  },
];
