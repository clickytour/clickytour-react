import type { CoreMirrorService } from "./types";

export const coreMirrorServices: CoreMirrorService[] = [
  {
    slug: "airport-transfer-halkidiki",
    businessName: "Halkidiki Airport Transfers",
    categoryId: "transfers-transport",
    subcategoryId: "airport-transfer",
    shortDescription: "Reliable private airport transfers between Thessaloniki Airport (SKG) and all Halkidiki destinations.",
    fullDescription: "Professional door-to-door transfer service covering all Halkidiki resorts. Modern fleet with Mercedes vehicles, child seats available, meet-and-greet at arrivals, 24/7 availability. Fixed pricing with no hidden fees. Serving vacation guests, property owners, and business travelers.",
    highlights: ["24/7 availability", "Fixed pricing", "Child seats available", "Meet & greet at arrivals"],
    languagesSupported: ["English", "Greek", "German", "Russian"],
    email: "info@halkidiki-transfers.gr",
    phone: "+30 2310 555 123",
    websiteUrl: "https://halkidiki-transfers.example.com",
    status: "active",
    location: { country: "Greece", city: "Thessaloniki", lat: 40.520, lng: 22.971, serviceAreaCoverageKm: 150 },
    media: {
      primaryPhoto: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1600&auto=format&fit=crop",
      galleryPhotos: [
        "https://images.unsplash.com/photo-1449965408869-ebd3fee40e55?q=80&w=1200&auto=format&fit=crop",
      ],
    },
    pricing: {
      bookingType: "instant_booking",
      priceList: [
        { title: "SKG to Pefkohori (1-3 pax)", priceModel: "package", guestPriceGross: 95, agentPriceNet: 75 },
        { title: "SKG to Pefkohori (4-6 pax)", priceModel: "package", guestPriceGross: 120, agentPriceNet: 95 },
        { title: "SKG to Kassandra (1-3 pax)", priceModel: "package", guestPriceGross: 85, agentPriceNet: 68 },
      ],
    },
    audienceTargets: ["guests", "agents"],
    subscriptionPlan: "premium",
  },
  {
    slug: "villa-cleaning-pro",
    businessName: "Villa Cleaning Pro",
    categoryId: "cleaning-services",
    subcategoryId: "property-cleaning",
    shortDescription: "Professional turnover cleaning for vacation rentals and private properties across Halkidiki.",
    fullDescription: "Specialized cleaning service for vacation rental properties. We handle guest turnovers, deep cleaning, linen changes, and property inspections. Trusted by 40+ property owners in the Kassandra peninsula. Same-day service available.",
    highlights: ["Same-day service", "Turnover specialists", "Linen included", "Property inspection reports"],
    languagesSupported: ["English", "Greek"],
    email: "clean@villacleanpro.gr",
    phone: "+30 2374 055 789",
    status: "active",
    location: { country: "Greece", city: "Pefkohori", lat: 39.989, lng: 23.616, serviceAreaCoverageKm: 30 },
    media: {
      primaryPhoto: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1600&auto=format&fit=crop",
      galleryPhotos: [],
    },
    pricing: {
      bookingType: "request_to_book",
      priceList: [
        { title: "Standard Turnover (up to 100sqm)", priceModel: "per_service", guestPriceGross: 80 },
        { title: "Deep Clean (up to 100sqm)", priceModel: "per_service", guestPriceGross: 150 },
        { title: "Linen Change Only", priceModel: "per_service", guestPriceGross: 35 },
      ],
    },
    audienceTargets: ["property_owners", "agents"],
    subscriptionPlan: "standard",
  },
  {
    slug: "private-chef-corfu",
    businessName: "Chef Nikos - Private Dining",
    categoryId: "dining-nightlife",
    subcategoryId: "private-chef",
    shortDescription: "Private chef experiences in your villa or rental. Greek and Mediterranean cuisine.",
    fullDescription: "Chef Nikos brings authentic Greek flavors to your vacation property. From traditional Corfiot dishes to modern Mediterranean tasting menus. Shopping, cooking, serving, and cleanup all included. Perfect for special occasions or a memorable family dinner.",
    highlights: ["All-inclusive service", "Local ingredients", "Dietary accommodations", "Wine pairing available"],
    languagesSupported: ["English", "Greek", "Italian"],
    email: "nikos@privatechef-corfu.gr",
    phone: "+30 2661 099 456",
    status: "active",
    location: { country: "Greece", city: "Corfu", lat: 39.624, lng: 19.922, serviceAreaCoverageKm: 40 },
    media: {
      primaryPhoto: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1600&auto=format&fit=crop",
      galleryPhotos: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
      ],
    },
    pricing: {
      bookingType: "request_to_book",
      priceList: [
        { title: "Greek Dinner (up to 4 guests)", priceModel: "per_person", guestPriceGross: 65 },
        { title: "Tasting Menu (up to 4 guests)", priceModel: "per_person", guestPriceGross: 95 },
        { title: "BBQ Party (up to 10 guests)", priceModel: "package", guestPriceGross: 450 },
      ],
    },
    audienceTargets: ["guests"],
    subscriptionPlan: "premium",
  },
];
