export type CoreMirrorRealEstateProperty = {
  id: string;
  slug: string;
  title: string;
  shortSummary: string;
  description: string;
  dealType: Array<"short_term_rent" | "monthly_rent" | "sale">;
  media: {
    primaryImage: string;
    galleryImages: string[];
    videoUrl?: string;
    tour3dUrl?: string;
    contentUrls?: Array<{ site: string; url: string }>;
  };
  location: { city: string; region: string; country: string };
  metrics: { bedrooms: number; bathrooms: number; areaSqm: number };
  prices: { saleEur: number; monthlyEur: number; perSqmEur: number; roiPercent: number };
  amenities: string[];
  distances: Array<{ label: string; value: string }>;
};

const realEstateProperties: CoreMirrorRealEstateProperty[] = [
  {
    id: "re-101",
    slug: "kassandra-investment-villa",
    title: "Kassandra Investment Villa",
    shortSummary: "Sea-view villa with strong seasonal and long-term return profile.",
    description: "A multi-mode real-estate asset suitable for holiday rental, monthly rent, or direct sale.",
    dealType: ["short_term_rent", "monthly_rent", "sale"],
    media: {
      primaryImage: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1800&auto=format&fit=crop",
      galleryImages: [
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop",
      ],
      videoUrl: "https://www.youtube.com/embed/6zGQSWib32E",
      tour3dUrl: "https://my.matterport.com/show/?m=JfA1P8x5GmW",
      contentUrls: [{ site: "VRBO", url: "https://www.vrbo.com" }],
    },
    location: { city: "Kassandra", region: "Halkidiki", country: "Greece" },
    metrics: { bedrooms: 4, bathrooms: 3, areaSqm: 210 },
    prices: { saleEur: 560000, monthlyEur: 4200, perSqmEur: 2666, roiPercent: 7.2 },
    amenities: ["Sea view", "Air Conditioning", "Private Pool", "Parking", "Wi-Fi"],
    distances: [
      { label: "Beach", value: "650 m" },
      { label: "Airport", value: "92 km" },
      { label: "Supermarket", value: "1.3 km" },
    ],
  },
];

export function getCoreMirrorRealEstateBySlug(slug: string): CoreMirrorRealEstateProperty | null {
  return realEstateProperties.find((p) => p.slug === slug) ?? null;
}
