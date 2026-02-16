export type CoreMirrorHotel = {
  id: string;
  slug: string;
  title: string;
  shortSummary: string;
  description: string;
  hotelType: string;
  dealType: Array<"short_term_rent" | "monthly_rent" | "sale">;
  media: { primaryImage: string; galleryImages: string[] };
  location: { city: string; region: string; country: string };
  prices: { fromNightlyEur: number; monthlyEur: number; saleEur: number };
  amenities: string[];
  distances: Array<{ label: string; value: string }>;
};

const hotels: CoreMirrorHotel[] = [
  {
    id: "h-301",
    slug: "aegean-boutique-hotel",
    title: "Aegean Boutique Hotel",
    shortSummary: "Boutique hotel with flexible operation model (rental, monthly, sale).",
    description: "Hotel asset with room-level pricing and seasonal strategy, suitable for operators and investors.",
    hotelType: "boutique_hotel",
    dealType: ["short_term_rent", "monthly_rent", "sale"],
    media: {
      primaryImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1800&auto=format&fit=crop",
      galleryImages: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop",
      ],
    },
    location: { city: "Pefkohori", region: "Halkidiki", country: "Greece" },
    prices: { fromNightlyEur: 130, monthlyEur: 3400, saleEur: 2100000 },
    amenities: ["Reception", "Wi-Fi", "Breakfast", "Pool", "Parking"],
    distances: [
      { label: "Beach", value: "220 m" },
      { label: "Airport", value: "98 km" },
      { label: "Marina", value: "2.1 km" },
    ],
  },
];

export function getCoreMirrorHotelBySlug(slug: string): CoreMirrorHotel | null {
  return hotels.find((h) => h.slug === slug) ?? null;
}
