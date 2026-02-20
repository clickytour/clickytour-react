import type { CoreMirrorAgent } from "./types";

export const coreMirrorAgents: CoreMirrorAgent[] = [
  {
    id: "ct-a-001",
    slug: "elena-travel-halkidiki",
    name: "Elena Papadopoulou",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    bio: "Certified travel agent specializing in luxury vacation rentals across Halkidiki and Thessaloniki. 8 years of experience matching families and groups with the perfect holiday property. Fluent in English, Greek, and German.",
    areas: ["Halkidiki", "Thessaloniki"],
    specialties: ["Luxury Villas", "Family Holidays", "Group Bookings"],
    rating: 4.8,
    reviewCount: 127,
    subscriptionTier: "premium",
    contactEmail: "elena@travel-halkidiki.gr",
    phone: "+30 2310 555 888",
    status: "active",
  },
  {
    id: "ct-a-002",
    slug: "marco-adventures-crete",
    name: "Marco Stellatos",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    bio: "Independent travel agent based in Crete, focusing on adventure tourism and activity-based holidays. Recently joined the ClickyTour network.",
    areas: ["Crete", "Santorini"],
    specialties: ["Adventure Tourism", "Activities", "Budget Travel"],
    rating: 4.2,
    reviewCount: 18,
    subscriptionTier: "free",
    contactEmail: "marco@crete-adventures.gr",
    status: "active",
  },
];
