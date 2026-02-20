"use client";

import { AdvancedForm, type AdvancedFormStep } from "./AdvancedForm";
import { GREEK_REGIONS, SERVICE_CATEGORIES, AGENT_TYPES, STAFF_ROLES, PMC_SERVICE_TAGS, HOTEL_TYPES } from "@/lib/marketplace/config";

const regionOptions = GREEK_REGIONS.map((r) => ({ value: r, label: r }));
const langOptions = [
  { value: "en", label: "English" }, { value: "gr", label: "Greek" }, { value: "de", label: "German" },
  { value: "fr", label: "French" }, { value: "it", label: "Italian" }, { value: "ru", label: "Russian" },
  { value: "nl", label: "Dutch" }, { value: "es", label: "Spanish" }, { value: "tr", label: "Turkish" },
  { value: "zh", label: "Chinese" }, { value: "ar", label: "Arabic" }, { value: "other", label: "Other" },
];

/* ─── PMC Advanced Form ─── */
const PMC_STEPS: AdvancedFormStep[] = [
  {
    title: "Company Information",
    description: "Tell us about your property management company",
    fields: [
      { name: "companyName", label: "Company Name", type: "text", required: true, placeholder: "Aegean Property Management" },
      { name: "brandName", label: "Brand / Trading Name", type: "text", placeholder: "If different from company name" },
      { name: "pitch", label: "Company Description", type: "textarea", required: true, placeholder: "What makes your company unique? Your approach, strengths, and value proposition.", fullWidth: true },
      { name: "yearFounded", label: "Year Founded", type: "number", placeholder: "2015" },
      { name: "managedProperties", label: "Properties Managed", type: "select", required: true, options: [
        { value: "1-10", label: "1-10" }, { value: "11-50", label: "11-50" }, { value: "51-100", label: "51-100" }, { value: "100+", label: "100+" },
      ]},
      { name: "website", label: "Website", type: "url", placeholder: "https://www.company.com" },
    ],
  },
  {
    title: "Services & Coverage",
    description: "What services do you offer and where?",
    fields: [
      { name: "serviceTags", label: "Services Offered (select all)", type: "multiselect", required: true, fullWidth: true, options: PMC_SERVICE_TAGS.map((t) => ({ value: t, label: t })) },
      { name: "coverageRegions", label: "Coverage Regions (select all)", type: "multiselect", required: true, fullWidth: true, options: regionOptions },
      { name: "propertyTypes", label: "Property Types Managed", type: "multiselect", fullWidth: true, options: [
        { value: "villas", label: "Villas" }, { value: "apartments", label: "Apartments" }, { value: "houses", label: "Houses" },
        { value: "studios", label: "Studios" }, { value: "commercial", label: "Commercial" }, { value: "luxury", label: "Luxury/Premium" },
      ]},
      { name: "languages", label: "Languages Spoken", type: "multiselect", fullWidth: true, options: langOptions },
    ],
  },
  {
    title: "Contact & Verification",
    description: "Your contact details and verification documents",
    fields: [
      { name: "managerName", label: "Primary Contact Name", type: "text", required: true },
      { name: "email", label: "Business Email", type: "email", required: true },
      { name: "phone", label: "Business Phone", type: "tel", required: true },
      { name: "address", label: "Office Address", type: "text" },
      { name: "socialLinkedin", label: "LinkedIn", type: "url", placeholder: "https://linkedin.com/company/..." },
      { name: "socialFacebook", label: "Facebook", type: "url", placeholder: "https://facebook.com/..." },
      { name: "portfolio", label: "Portfolio / Media (photos, documents)", type: "file", fullWidth: true, hint: "Upload photos of managed properties, certifications, or marketing materials" },
      { name: "gdprConsent", label: "GDPR Consent", type: "checkbox", required: true, placeholder: "I agree to the processing of my data in accordance with the GDPR and ClickyTour Privacy Policy", fullWidth: true },
    ],
  },
];

export function PmcAdvancedForm() {
  return (
    <AdvancedForm
      title="PMC Full Profile"
      subtitle="Create your complete directory listing — get verified and start receiving property requests"
      steps={PMC_STEPS}
      roleName="Property Management Company"
      formType="pmc-advanced"
      successCta={{ label: "View PMC Directory", href: "/pmc-directory" }}
    />
  );
}

/* ─── Service Provider Advanced Form ─── */
const SP_STEPS: AdvancedFormStep[] = [
  {
    title: "Business Details",
    description: "Tell us about your service business",
    fields: [
      { name: "businessName", label: "Business Name", type: "text", required: true },
      { name: "category", label: "Primary Category", type: "select", required: true, options: SERVICE_CATEGORIES.map((c) => ({ value: c.slug, label: c.label })) },
      { name: "description", label: "Full Description", type: "textarea", required: true, fullWidth: true, placeholder: "Describe your services, experience, and what makes you stand out." },
      { name: "yearsExperience", label: "Years of Experience", type: "number", placeholder: "5" },
      { name: "website", label: "Website", type: "url", placeholder: "https://..." },
      { name: "pricingTier", label: "Pricing Range", type: "select", options: [
        { value: "budget", label: "Budget (EUR)" }, { value: "mid", label: "Mid-Range (EUR EUR)" }, { value: "premium", label: "Premium (EUR EUR EUR)" },
      ]},
    ],
  },
  {
    title: "Coverage & Availability",
    fields: [
      { name: "regions", label: "Service Regions", type: "multiselect", required: true, fullWidth: true, options: regionOptions },
      { name: "languages", label: "Languages", type: "multiselect", fullWidth: true, options: langOptions },
      { name: "availability", label: "Availability", type: "select", options: [
        { value: "24-7", label: "24/7" }, { value: "business-hours", label: "Business Hours" }, { value: "by-appointment", label: "By Appointment" }, { value: "seasonal", label: "Seasonal" },
      ]},
      { name: "responseTime", label: "Typical Response Time", type: "select", options: [
        { value: "<1h", label: "Under 1 hour" }, { value: "1-4h", label: "1-4 hours" }, { value: "same-day", label: "Same day" }, { value: "1-2d", label: "1-2 days" },
      ]},
    ],
  },
  {
    title: "Contact & Portfolio",
    fields: [
      { name: "contactName", label: "Contact Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "phone", label: "Phone", type: "tel", required: true },
      { name: "socialInstagram", label: "Instagram", type: "url", placeholder: "https://instagram.com/..." },
      { name: "socialFacebook", label: "Facebook", type: "url" },
      { name: "portfolio", label: "Portfolio / Photos", type: "file", fullWidth: true },
      { name: "gdprConsent", label: "GDPR Consent", type: "checkbox", required: true, placeholder: "I agree to the processing of my data per GDPR and ClickyTour Privacy Policy", fullWidth: true },
    ],
  },
];

export function ServiceProviderAdvancedForm() {
  return (
    <AdvancedForm
      title="Service Provider Full Profile"
      subtitle="Create your complete listing — reach thousands of potential clients"
      steps={SP_STEPS}
      roleName="Service Provider"
      formType="sp-advanced"
      successCta={{ label: "View Services Directory", href: "/directory/services" }}
    />
  );
}

/* ─── Agent Advanced Form ─── */
const AGENT_STEPS: AdvancedFormStep[] = [
  {
    title: "Agent / Agency Details",
    fields: [
      { name: "fullName", label: "Full Name", type: "text", required: true },
      { name: "agencyName", label: "Agency Name", type: "text" },
      { name: "agentType", label: "Type", type: "select", required: true, options: AGENT_TYPES.map((t) => ({ value: t.slug, label: t.label })) },
      { name: "description", label: "About You / Your Agency", type: "textarea", required: true, fullWidth: true },
      { name: "yearsExperience", label: "Years of Experience", type: "number" },
      { name: "licenseNumber", label: "License / Registration Number", type: "text", hint: "GNTO license, real estate license, etc." },
      { name: "website", label: "Website", type: "url" },
    ],
  },
  {
    title: "Markets & Specialties",
    fields: [
      { name: "regions", label: "Active Regions", type: "multiselect", required: true, fullWidth: true, options: regionOptions },
      { name: "specialties", label: "Specialties", type: "multiselect", fullWidth: true, options: [
        { value: "luxury", label: "Luxury Properties" }, { value: "budget", label: "Budget Travel" }, { value: "corporate", label: "Corporate/MICE" },
        { value: "weddings", label: "Weddings & Events" }, { value: "adventure", label: "Adventure Tourism" }, { value: "cultural", label: "Cultural Tours" },
        { value: "real-estate", label: "Real Estate" }, { value: "relocation", label: "Relocation Services" },
      ]},
      { name: "languages", label: "Languages", type: "multiselect", fullWidth: true, options: langOptions },
      { name: "markets", label: "Target Markets (countries)", type: "text", placeholder: "e.g. UK, Germany, USA" },
    ],
  },
  {
    title: "Contact & Verification",
    fields: [
      { name: "email", label: "Email", type: "email", required: true },
      { name: "phone", label: "Phone", type: "tel", required: true },
      { name: "address", label: "Office Address", type: "text" },
      { name: "socialLinkedin", label: "LinkedIn", type: "url" },
      { name: "portfolio", label: "Portfolio / Credentials", type: "file", fullWidth: true },
      { name: "gdprConsent", label: "GDPR Consent", type: "checkbox", required: true, placeholder: "I agree to the processing of my data per GDPR and ClickyTour Privacy Policy", fullWidth: true },
    ],
  },
];

export function AgentAdvancedForm() {
  return (
    <AdvancedForm
      title="Agent / Broker Full Profile"
      subtitle="Join the ClickyTour network — access properties, leads, and partnerships"
      steps={AGENT_STEPS}
      roleName="Agent / Broker"
      formType="agent-advanced"
      successCta={{ label: "View Agent Directory", href: "/directory/agents" }}
    />
  );
}

/* ─── Hotel Advanced Form ─── */
const HOTEL_STEPS: AdvancedFormStep[] = [
  {
    title: "Hotel Information",
    fields: [
      { name: "hotelName", label: "Hotel Name", type: "text", required: true },
      { name: "hotelType", label: "Type", type: "select", required: true, options: HOTEL_TYPES.map((t) => ({ value: t.slug, label: t.label })) },
      { name: "description", label: "Description", type: "textarea", required: true, fullWidth: true },
      { name: "starRating", label: "Star Rating", type: "select", options: [
        { value: "1", label: "1 Star" }, { value: "2", label: "2 Stars" }, { value: "3", label: "3 Stars" }, { value: "4", label: "4 Stars" }, { value: "5", label: "5 Stars" },
      ]},
      { name: "rooms", label: "Total Rooms", type: "number" },
      { name: "website", label: "Website", type: "url" },
    ],
  },
  {
    title: "Location & Amenities",
    fields: [
      { name: "region", label: "Region", type: "select", required: true, options: regionOptions },
      { name: "city", label: "City", type: "text", required: true },
      { name: "amenities", label: "Amenities", type: "multiselect", fullWidth: true, options: [
        { value: "pool", label: "Pool" }, { value: "spa", label: "Spa" }, { value: "restaurant", label: "Restaurant" }, { value: "bar", label: "Bar" },
        { value: "gym", label: "Gym" }, { value: "parking", label: "Parking" }, { value: "wifi", label: "Free WiFi" }, { value: "beach", label: "Beach Access" },
        { value: "pet-friendly", label: "Pet Friendly" }, { value: "ev-charging", label: "EV Charging" },
      ]},
      { name: "languages", label: "Staff Languages", type: "multiselect", fullWidth: true, options: langOptions },
      { name: "priceRange", label: "Price Range", type: "select", options: [
        { value: "budget", label: "Budget" }, { value: "mid", label: "Mid-Range" }, { value: "upscale", label: "Upscale" }, { value: "luxury", label: "Luxury" },
      ]},
    ],
  },
  {
    title: "Contact & Media",
    fields: [
      { name: "contactName", label: "Contact Person", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "phone", label: "Phone", type: "tel", required: true },
      { name: "bookingUrl", label: "Direct Booking URL", type: "url", hint: "Link to your direct booking page (bypass OTA)" },
      { name: "photos", label: "Hotel Photos", type: "file", fullWidth: true },
      { name: "gdprConsent", label: "GDPR Consent", type: "checkbox", required: true, placeholder: "I agree to data processing per GDPR and ClickyTour Privacy Policy", fullWidth: true },
    ],
  },
];

export function HotelAdvancedForm() {
  return (
    <AdvancedForm
      title="Hotel Full Profile"
      subtitle="Get listed in the ClickyTour Hotels Directory — reach travelers directly"
      steps={HOTEL_STEPS}
      roleName="Hotel"
      formType="hotel-advanced"
      successCta={{ label: "View Hotels Directory", href: "/directory/hotels" }}
    />
  );
}

/* ─── Job Seeker Advanced Form ─── */
const STAFF_STEPS: AdvancedFormStep[] = [
  {
    title: "Personal Information",
    fields: [
      { name: "fullName", label: "Full Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "phone", label: "Phone", type: "tel", required: true },
      { name: "region", label: "Location", type: "select", required: true, options: regionOptions },
      { name: "city", label: "City", type: "text" },
    ],
  },
  {
    title: "Skills & Experience",
    fields: [
      { name: "roles", label: "Roles (select all that apply)", type: "multiselect", required: true, fullWidth: true, options: STAFF_ROLES.map((r) => ({ value: r.slug, label: r.label })) },
      { name: "experience", label: "Years of Experience", type: "select", options: [
        { value: "0-1", label: "Less than 1 year" }, { value: "1-3", label: "1-3 years" }, { value: "3-5", label: "3-5 years" }, { value: "5+", label: "5+ years" },
      ]},
      { name: "languages", label: "Languages", type: "multiselect", fullWidth: true, options: langOptions },
      { name: "about", label: "About You", type: "textarea", fullWidth: true, placeholder: "Describe your experience, strengths, and what you're looking for." },
      { name: "availability", label: "Availability", type: "select", required: true, options: [
        { value: "immediate", label: "Immediate" }, { value: "2-weeks", label: "Within 2 weeks" }, { value: "1-month", label: "Within 1 month" }, { value: "seasonal", label: "Seasonal" },
      ]},
    ],
  },
  {
    title: "CV & Preferences",
    fields: [
      { name: "cv", label: "Upload CV", type: "file", fullWidth: true },
      { name: "directoryVisibility", label: "Profile Visibility", type: "select", required: true, options: [
        { value: "public", label: "Public — visible in directory" }, { value: "private", label: "Private — only matched employers" },
      ]},
      { name: "desiredSalary", label: "Desired Monthly Salary (EUR)", type: "number", placeholder: "e.g. 1200" },
      { name: "references", label: "References Available?", type: "select", options: [
        { value: "yes", label: "Yes" }, { value: "on-request", label: "On Request" }, { value: "no", label: "No" },
      ]},
      { name: "gdprConsent", label: "GDPR Consent", type: "checkbox", required: true, placeholder: "I agree to data processing per GDPR and ClickyTour Privacy Policy", fullWidth: true },
    ],
  },
];

export function JobSeekerAdvancedForm() {
  return (
    <AdvancedForm
      title="Complete Job Seeker Profile"
      subtitle="Create your full profile — get discovered by PMCs, hotels, and hospitality businesses"
      steps={STAFF_STEPS}
      roleName="Job Seeker"
      formType="staff-advanced"
      successCta={{ label: "Browse Job Listings", href: "/directory/staff" }}
    />
  );
}
