/* ── Marketplace & Directory configuration ── */

import type { DirectoryType } from "./types";

/** Service categories for Services directory */
export const SERVICE_CATEGORIES = [
  { slug: "cleaning", label: "Cleaning & Linen", icon: "sparkles" },
  { slug: "transfers", label: "Transfers & Transport", icon: "car" },
  { slug: "tours-activities", label: "Tours & Activities", icon: "map" },
  { slug: "maintenance", label: "Maintenance & Repairs", icon: "wrench" },
  { slug: "catering", label: "Catering & Chef", icon: "utensils" },
  { slug: "photography-video", label: "Photography & Video", icon: "camera" },
  { slug: "legal-accounting", label: "Legal & Accounting", icon: "scale" },
  { slug: "insurance", label: "Insurance", icon: "shield" },
  { slug: "renovation", label: "Renovation & Projects", icon: "hammer" },
  { slug: "technology", label: "Technology & Software", icon: "cpu" },
  { slug: "concierge", label: "Concierge & Guest Services", icon: "bell" },
  { slug: "landscaping", label: "Landscaping & Pool", icon: "flower" },
] as const;

/** Agent types */
export const AGENT_TYPES = [
  { slug: "travel-agents", label: "Travel Agents" },
  { slug: "real-estate-brokers", label: "Real Estate Brokers" },
  { slug: "tour-operators", label: "Tour Operators" },
  { slug: "realtors", label: "Realtors" },
  { slug: "affiliates", label: "Affiliates" },
] as const;

/** Hotel types */
export const HOTEL_TYPES = [
  { slug: "hotels", label: "Hotels" },
  { slug: "boutique", label: "Boutique Hotels" },
  { slug: "resorts", label: "Resorts" },
  { slug: "aparthotels", label: "Aparthotels" },
] as const;

/** PMC service tags (12 fixed from WP analysis) */
export const PMC_SERVICE_TAGS = [
  "Full Management",
  "Guest Ops",
  "Check-in/Check-out",
  "Cleaning & Linen",
  "Maintenance & Repairs",
  "Revenue Management",
  "Channel Manager",
  "Owner Reporting",
  "RE Support",
  "Renovation/Projects",
  "Luxury/Villas",
  "City Apartments",
] as const;

/** Job seeker roles */
export const STAFF_ROLES = [
  { slug: "cleaner", label: "Cleaner / Housekeeper" },
  { slug: "host", label: "Host / Check-in Agent" },
  { slug: "maintenance", label: "Maintenance / Handyman" },
  { slug: "manager", label: "Property Manager" },
  { slug: "receptionist", label: "Receptionist" },
  { slug: "chef", label: "Chef / Cook" },
  { slug: "driver", label: "Driver / Transfer" },
  { slug: "concierge", label: "Concierge" },
  { slug: "gardener", label: "Gardener / Pool Tech" },
  { slug: "admin", label: "Administrative / Office" },
  { slug: "marketing", label: "Marketing / Social Media" },
  { slug: "guide", label: "Tour Guide" },
] as const;

/** Directory metadata for each marketplace */
export const DIRECTORY_CONFIG: Record<
  DirectoryType,
  {
    label: string;
    pluralLabel: string;
    urlBase: string;
    sideA: { label: string; cta: string; description: string };
    sideB: { label: string; cta: string; description: string };
    icon: string;
    color: string;
  }
> = {
  pmc: {
    label: "Property Manager",
    pluralLabel: "Property Management Companies",
    urlBase: "/directory/property-managers",
    sideA: {
      label: "Find a Property Manager",
      cta: "Browse PMCs",
      description: "Find trusted property management companies for your vacation rental or real estate.",
    },
    sideB: {
      label: "List Your PMC",
      cta: "Get Listed",
      description: "Join ClickyTour to access property owners looking for management services.",
    },
    icon: "building",
    color: "teal",
  },
  service: {
    label: "Service Provider",
    pluralLabel: "Services & Businesses",
    urlBase: "/directory/services",
    sideA: {
      label: "Find a Service",
      cta: "Browse Services",
      description: "Find cleaning, maintenance, transfers, tours, and professional services.",
    },
    sideB: {
      label: "List Your Service",
      cta: "Get Listed",
      description: "Promote your tourism or property service to thousands of potential clients.",
    },
    icon: "briefcase",
    color: "amber",
  },
  agent: {
    label: "Agent / Broker",
    pluralLabel: "Agents, Brokers & Tour Operators",
    urlBase: "/directory/agents",
    sideA: {
      label: "Find an Agent",
      cta: "Browse Agents",
      description: "Find travel agents, real estate brokers, tour operators, and realtors.",
    },
    sideB: {
      label: "Join as Agent",
      cta: "Get Listed",
      description: "Access property pools, client leads, and distribution partnerships.",
    },
    icon: "users",
    color: "indigo",
  },
  hotel: {
    label: "Hotel",
    pluralLabel: "Hotels & Accommodation",
    urlBase: "/directory/hotels",
    sideA: {
      label: "Find a Hotel",
      cta: "Browse Hotels",
      description: "Discover hotels, boutique stays, and resorts across Greece.",
    },
    sideB: {
      label: "List Your Hotel",
      cta: "Get Listed",
      description: "Reach guests directly — reduce OTA commissions with direct inquiries.",
    },
    icon: "bed",
    color: "violet",
  },
  staff: {
    label: "Staff / Job Seeker",
    pluralLabel: "Staff & Job Seekers",
    urlBase: "/directory/staff",
    sideA: {
      label: "Find Staff",
      cta: "Browse Talent",
      description: "Find cleaners, hosts, managers, drivers, and hospitality professionals.",
    },
    sideB: {
      label: "Find Work",
      cta: "Create Profile",
      description: "Join the talent pool — get discovered by PMCs, owners, and hospitality businesses.",
    },
    icon: "user-plus",
    color: "cyan",
  },
  partner: {
    label: "B2B Partner",
    pluralLabel: "B2B Partners",
    urlBase: "/directory/partners",
    sideA: {
      label: "Find a Partner",
      cta: "Browse Partners",
      description: "Find business partners for hospitality and tourism collaborations.",
    },
    sideB: {
      label: "Become a Partner",
      cta: "Join Network",
      description: "Connect with PMCs, agents, service providers, and hotels for B2B growth.",
    },
    icon: "handshake",
    color: "emerald",
  },
  property: {
    label: "Property",
    pluralLabel: "Properties",
    urlBase: "/marketplace/property-management",
    sideA: {
      label: "List Your Property",
      cta: "Submit Property",
      description: "Get your property evaluated and matched with the right management company.",
    },
    sideB: {
      label: "Browse Properties",
      cta: "View Pool",
      description: "Access the property requests pool — find owners looking for management.",
    },
    icon: "home",
    color: "sky",
  },
};

/** Greek regions for geo-targeted pages */
export const GREEK_REGIONS = [
  "Athens", "Thessaloniki", "Crete", "Mykonos", "Santorini",
  "Halkidiki", "Rhodes", "Corfu", "Zakynthos", "Kefalonia",
  "Paros", "Naxos", "Lefkada", "Skiathos", "Kos",
  "Peloponnese", "Pelion", "Thassos", "Samos", "Lesvos",
] as const;
