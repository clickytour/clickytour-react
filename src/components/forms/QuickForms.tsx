"use client";

import { QuickForm, type QuickFormField } from "./QuickForm";
import { GREEK_REGIONS, SERVICE_CATEGORIES, AGENT_TYPES, STAFF_ROLES, PMC_SERVICE_TAGS, HOTEL_TYPES } from "@/lib/marketplace/config";

const regionOptions = GREEK_REGIONS.map((r) => ({ value: r, label: r }));

/* ─── Owner Quick Form ─── */
const OWNER_FIELDS: QuickFormField[] = [
  { name: "fullName", label: "Full Name", type: "text", placeholder: "John Smith", required: true },
  { name: "email", label: "Email", type: "email", placeholder: "john@example.com", required: true },
  { name: "phone", label: "Phone", type: "tel", placeholder: "+30 XXX XXX XXXX" },
  { name: "intent", label: "What do you need?", type: "select", required: true, options: [
    { value: "evaluation", label: "Free property evaluation" },
    { value: "find-pmc", label: "Find a property manager" },
    { value: "list-property", label: "List my property for rental" },
    { value: "sell-property", label: "Sell my property" },
  ]},
  { name: "propertyType", label: "Property Type", type: "select", required: true, options: [
    { value: "villa", label: "Villa" },
    { value: "apartment", label: "Apartment" },
    { value: "house", label: "House" },
    { value: "studio", label: "Studio" },
    { value: "land", label: "Land" },
    { value: "commercial", label: "Commercial" },
    { value: "other", label: "Other" },
  ]},
  { name: "region", label: "Region", type: "select", required: true, options: regionOptions },
];

export function OwnerQuickForm() {
  return (
    <QuickForm
      title="Quick Property Submission"
      subtitle="Tell us about your property in 30 seconds"
      fields={OWNER_FIELDS}
      roleName="Property Owner"
      formType="owner-quick"
      successCta={{ label: "Browse PMC Directory", href: "/pmc-directory" }}
      upgradeHref="/owners-vacation-free-evaluation"
    />
  );
}

/* ─── PMC Quick Form ─── */
const PMC_FIELDS: QuickFormField[] = [
  { name: "companyName", label: "Company Name", type: "text", placeholder: "Aegean Property Management", required: true },
  { name: "contactName", label: "Contact Person", type: "text", placeholder: "Maria Papadaki", required: true },
  { name: "email", label: "Email", type: "email", placeholder: "info@company.com", required: true },
  { name: "phone", label: "Phone", type: "tel", placeholder: "+30 XXX XXX XXXX" },
  { name: "region", label: "Primary Region", type: "select", required: true, options: regionOptions },
  { name: "services", label: "Main Service", type: "select", required: true, options: PMC_SERVICE_TAGS.map((t) => ({ value: t, label: t })) },
  { name: "propertiesManaged", label: "Properties Managed", type: "select", options: [
    { value: "1-10", label: "1-10" },
    { value: "11-50", label: "11-50" },
    { value: "51-100", label: "51-100" },
    { value: "100+", label: "100+" },
  ]},
];

export function PmcQuickForm() {
  return (
    <QuickForm
      title="Quick PMC Application"
      subtitle="Get listed in the PMC directory"
      fields={PMC_FIELDS}
      roleName="Property Management Company"
      formType="pmc-quick"
      successCta={{ label: "Browse Requests Pool", href: "/pmc-requests-pool" }}
      upgradeHref="/pmc-apply"
    />
  );
}

/* ─── Service Provider Quick Form ─── */
const SP_FIELDS: QuickFormField[] = [
  { name: "businessName", label: "Business Name", type: "text", placeholder: "Sparkle Clean Crete", required: true },
  { name: "email", label: "Email", type: "email", placeholder: "info@business.com", required: true },
  { name: "phone", label: "Phone", type: "tel", placeholder: "+30 XXX XXX XXXX" },
  { name: "category", label: "Service Category", type: "select", required: true, options: SERVICE_CATEGORIES.map((c) => ({ value: c.slug, label: c.label })) },
  { name: "region", label: "Region", type: "select", required: true, options: regionOptions },
  { name: "description", label: "Brief Description", type: "textarea", placeholder: "What services do you offer? (1-2 sentences)" },
];

export function ServiceProviderQuickForm() {
  return (
    <QuickForm
      title="Quick Service Listing"
      subtitle="Get your service in front of thousands of clients"
      fields={SP_FIELDS}
      roleName="Service Provider"
      formType="sp-quick"
      successCta={{ label: "Browse Services Directory", href: "/directory/services" }}
      upgradeHref="/service-providers-list-service"
    />
  );
}

/* ─── Agent Quick Form ─── */
const AGENT_FIELDS: QuickFormField[] = [
  { name: "fullName", label: "Full Name", type: "text", placeholder: "Elena Papadaki", required: true },
  { name: "agencyName", label: "Agency Name (if applicable)", type: "text", placeholder: "Hellenic Travel Partners" },
  { name: "email", label: "Email", type: "email", placeholder: "elena@agency.com", required: true },
  { name: "phone", label: "Phone", type: "tel", placeholder: "+30 XXX XXX XXXX" },
  { name: "agentType", label: "Type", type: "select", required: true, options: AGENT_TYPES.map((t) => ({ value: t.slug, label: t.label })) },
  { name: "region", label: "Primary Market", type: "select", required: true, options: regionOptions },
];

export function AgentQuickForm() {
  return (
    <QuickForm
      title="Quick Agent Application"
      subtitle="Join the ClickyTour agent network"
      fields={AGENT_FIELDS}
      roleName="Agent / Broker"
      formType="agent-quick"
      successCta={{ label: "Browse Agent Directory", href: "/directory/agents" }}
      upgradeHref="/agents-agenicies-form"
    />
  );
}

/* ─── Job Seeker Quick Form ─── */
const STAFF_FIELDS: QuickFormField[] = [
  { name: "fullName", label: "Full Name", type: "text", placeholder: "Maria K.", required: true },
  { name: "email", label: "Email", type: "email", placeholder: "maria@example.com", required: true },
  { name: "phone", label: "Phone", type: "tel", placeholder: "+30 XXX XXX XXXX", required: true },
  { name: "role", label: "Primary Role", type: "select", required: true, options: STAFF_ROLES.map((r) => ({ value: r.slug, label: r.label })) },
  { name: "region", label: "Preferred Region", type: "select", required: true, options: regionOptions },
  { name: "availability", label: "Availability", type: "select", required: true, options: [
    { value: "immediate", label: "Immediate" },
    { value: "2-weeks", label: "Within 2 weeks" },
    { value: "1-month", label: "Within 1 month" },
    { value: "seasonal", label: "Seasonal (summer)" },
    { value: "flexible", label: "Flexible" },
  ]},
];

export function JobSeekerQuickForm() {
  return (
    <QuickForm
      title="Quick Job Application"
      subtitle="Join the talent pool — get discovered by employers"
      fields={STAFF_FIELDS}
      roleName="Job Seeker"
      formType="staff-quick"
      successCta={{ label: "Browse Job Listings", href: "/directory/staff" }}
      upgradeHref="/find-staff-contractors-job-seekers-quick-application"
    />
  );
}

/* ─── Hotel Quick Form ─── */
const HOTEL_FIELDS: QuickFormField[] = [
  { name: "hotelName", label: "Hotel Name", type: "text", placeholder: "Olive Grove Boutique Hotel", required: true },
  { name: "contactName", label: "Contact Person", type: "text", placeholder: "Nikos Papadopoulos", required: true },
  { name: "email", label: "Email", type: "email", placeholder: "reservations@hotel.com", required: true },
  { name: "phone", label: "Phone", type: "tel", placeholder: "+30 XXX XXX XXXX" },
  { name: "hotelType", label: "Type", type: "select", required: true, options: HOTEL_TYPES.map((t) => ({ value: t.slug, label: t.label })) },
  { name: "region", label: "Region", type: "select", required: true, options: regionOptions },
  { name: "rooms", label: "Number of Rooms", type: "select", options: [
    { value: "1-20", label: "1-20" },
    { value: "21-50", label: "21-50" },
    { value: "51-100", label: "51-100" },
    { value: "100+", label: "100+" },
  ]},
];

export function HotelQuickForm() {
  return (
    <QuickForm
      title="Quick Hotel Listing"
      subtitle="Get your hotel in front of agents and travelers"
      fields={HOTEL_FIELDS}
      roleName="Hotel"
      formType="hotel-quick"
      successCta={{ label: "Browse Hotels Directory", href: "/directory/hotels" }}
      upgradeHref="/contact"
    />
  );
}

/* ─── Guest Quick Request ─── */
const GUEST_FIELDS: QuickFormField[] = [
  { name: "fullName", label: "Full Name", type: "text", placeholder: "John Smith", required: true },
  { name: "email", label: "Email", type: "email", placeholder: "john@example.com", required: true },
  { name: "intent", label: "What are you looking for?", type: "select", required: true, options: [
    { value: "vacation-rental", label: "Vacation rental" },
    { value: "hotel", label: "Hotel / accommodation" },
    { value: "tour-activity", label: "Tour or activity" },
    { value: "transfer", label: "Airport transfer" },
    { value: "buy-property", label: "Buy property" },
    { value: "rent-long-term", label: "Long-term rental" },
    { value: "service", label: "Other service" },
  ]},
  { name: "destination", label: "Destination", type: "select", required: true, options: regionOptions },
  { name: "dates", label: "When?", type: "text", placeholder: "e.g. July 15-22, 2026" },
  { name: "guests", label: "Guests", type: "select", options: [
    { value: "1-2", label: "1-2" },
    { value: "3-4", label: "3-4" },
    { value: "5-6", label: "5-6" },
    { value: "7+", label: "7+" },
  ]},
];

export function GuestQuickForm() {
  return (
    <QuickForm
      title="Quick Request"
      subtitle="Tell us what you need — we'll find the best options"
      fields={GUEST_FIELDS}
      roleName="Guest"
      formType="guest-quick"
      successTitle="Request Received!"
      successMessage="We'll match you with the best options and get back to you shortly."
      successCta={{ label: "Browse Listings", href: "/search" }}
    />
  );
}
