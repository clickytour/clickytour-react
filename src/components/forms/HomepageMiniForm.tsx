"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PlaceAutocomplete } from "@/components/PlaceAutocomplete";
// PlaceResult type inferred from PlaceAutocomplete onChange callback

type RoleKey =
  | "guest-vacation"
  | "guest-tours"
  | "guest-real-estate"
  | "vacation-owner"
  | "real-estate-owner"
  | "service-provider"
  | "agent"
  | "pmc"
  | "job-seeker"
  | "media-partner";

type FieldDef = {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  colSpan?: 1 | 2;
  isPlace?: boolean;
};

type RoleMeta = {
  label: string;
  formTitle: string;
  formSubtitle: string;
  fields: FieldDef[];
  redirectTo: string;
  submitLabel: string;
  crmTag: string;
};

const serviceCategories = [
  "Airport Transfer",
  "Boat Tour",
  "Cultural Tour",
  "Food & Wine",
  "Outdoor Adventure",
  "Wellness & Spa",
  "Private Chef",
  "Vehicle Rental",
  "Photography",
  "Event Planning",
  "Other",
];

const roleMeta: Record<RoleKey, RoleMeta> = {
  "guest-vacation": {
    label: "Guest (Travel & Rentals)",
    formTitle: "Request your vacation stay",
    formSubtitle: "Fill the form and we will respond quickly with tailored proposals within 1 business day.",
    crmTag: "guest-vacation",
    redirectTo: "/guests-vacation-request",
    submitLabel: "Continue",
    fields: [
      { name: "checkIn", label: "Check-in", placeholder: "dd/mm/yyyy", type: "date", required: true },
      { name: "checkOut", label: "Check-out", placeholder: "dd/mm/yyyy", type: "date", required: true },
      { name: "destination", label: "Destination / Region", placeholder: "e.g., Santorini", required: true, isPlace: true },
      { name: "adults", label: "Adults", placeholder: "2", type: "number" },
      { name: "email", label: "Email", placeholder: "", type: "email", required: true },
      { name: "phone", label: "Phone", placeholder: "" },
    ],
  },
  "guest-tours": {
    label: "Guest (Tours & Activities)",
    formTitle: "Request a tour or local service",
    formSubtitle: "Fill the form and we will respond quickly with tailored proposals within 1 business day.",
    crmTag: "guest-services",
    redirectTo: "/guest-service-request",
    submitLabel: "Continue",
    fields: [
      { name: "destination", label: "Destination / Region", placeholder: "e.g., Chania", required: true, isPlace: true },
      {
        name: "serviceCategory",
        label: "Service Category",
        placeholder: "Airport Transfer, Boat To...",
        required: true,
        options: serviceCategories.map((c) => ({ value: c.toLowerCase().replace(/\s+/g, "-"), label: c })),
      },
      { name: "date", label: "Date", placeholder: "dd/mm/yyyy", type: "date", required: true },
      { name: "adults", label: "Adults", placeholder: "2", type: "number" },
      { name: "email", label: "Email", placeholder: "", type: "email", required: true },
      { name: "phone", label: "Phone", placeholder: "" },
    ],
  },
  "guest-real-estate": {
    label: "Guest (Real Estate Buyer / Renter)",
    formTitle: "Request real estate proposals",
    formSubtitle: "Fill the form and we will respond quickly with tailored proposals within 1 business day.",
    crmTag: "guest-real-estate",
    redirectTo: "/guests-real-estate-request",
    submitLabel: "Continue",
    fields: [
      {
        name: "mode",
        label: "Mode",
        placeholder: "",
        required: true,
        options: [
          { value: "buy", label: "Buy" },
          { value: "rent", label: "Rent" },
          { value: "monthly", label: "Monthly Rent" },
        ],
      },
      {
        name: "propertyType",
        label: "Type",
        placeholder: "",
        required: true,
        options: [
          { value: "home", label: "Home" },
          { value: "apartment", label: "Apartment" },
          { value: "land", label: "Land" },
          { value: "commercial", label: "Commercial" },
          { value: "business", label: "Business" },
        ],
      },
      { name: "regions", label: "Regions", placeholder: "e.g., Crete", required: true, isPlace: true },
      { name: "email", label: "Email", placeholder: "", type: "email", required: true },
      { name: "phone", label: "Phone", placeholder: "", colSpan: 1 },
    ],
  },
  "vacation-owner": {
    label: "Vacation Property Owner / Host",
    formTitle: "List your vacation property",
    formSubtitle: "Fill the form and we will respond quickly with the best next steps within 1 business day.",
    crmTag: "owner-vacation",
    redirectTo: "/owners-vacation-free-evaluation",
    submitLabel: "Continue",
    fields: [
      {
        name: "propertyType",
        label: "Property Type",
        placeholder: "",
        required: true,
        options: [
          { value: "villa", label: "Villa" },
          { value: "house", label: "House" },
          { value: "apartment", label: "Apartment" },
          { value: "townhouse", label: "Townhouse" },
          { value: "maisonette", label: "Maisonette" },
          { value: "other", label: "Other" },
        ],
      },
      { name: "region", label: "Region", placeholder: "e.g., Crete", required: true, isPlace: true },
      { name: "email", label: "Email", placeholder: "", type: "email", required: true },
      { name: "phone", label: "Phone", placeholder: "" },
    ],
  },
  "real-estate-owner": {
    label: "Real Estate Seller / Landlord",
    formTitle: "Sell or rent your property",
    formSubtitle: "Fill the form and we will respond quickly with the best next steps within 1 business day.",
    crmTag: "owner-real-estate",
    redirectTo: "/owners-real-estate-list-property",
    submitLabel: "Continue",
    fields: [
      {
        name: "propertyType",
        label: "Property Type",
        placeholder: "",
        required: true,
        options: [
          { value: "home", label: "Home" },
          { value: "apartment", label: "Apartment" },
          { value: "land", label: "Land" },
          { value: "commercial", label: "Commercial" },
          { value: "business", label: "Business" },
        ],
      },
      { name: "region", label: "City / Region", placeholder: "e.g., Athens", required: true, isPlace: true },
      { name: "email", label: "Email", placeholder: "", type: "email", required: true },
      { name: "phone", label: "Phone", placeholder: "" },
    ],
  },
  "service-provider": {
    label: "Local Business / Service Provider",
    formTitle: "List your business / service",
    formSubtitle: "Fill the form and we will respond quickly with tailored onboarding steps within 1 business day.",
    crmTag: "service-provider",
    redirectTo: "/service-providers-list-service",
    submitLabel: "Continue",
    fields: [
      {
        name: "serviceType",
        label: "Service Type",
        placeholder: "",
        required: true,
        options: serviceCategories.map((c) => ({ value: c.toLowerCase().replace(/\s+/g, "-"), label: c })),
      },
      { name: "region", label: "Region", placeholder: "e.g., Halkidiki", required: true, isPlace: true },
      { name: "email", label: "Email", placeholder: "", type: "email", required: true },
      { name: "phone", label: "Phone", placeholder: "" },
    ],
  },
  agent: {
    label: "Travel Agent / Agency Partner",
    formTitle: "Become an agent partner",
    formSubtitle: "Fill the form and we will respond quickly with access steps within 1 business day.",
    crmTag: "agent",
    redirectTo: "/agents-agenicies-form",
    submitLabel: "Continue",
    fields: [
      { name: "agencyName", label: "Agency Name", placeholder: "", required: true },
      { name: "markets", label: "Markets / Regions", placeholder: "e.g., Crete, Santorini", required: true, isPlace: true },
      { name: "email", label: "Email", placeholder: "", type: "email", required: true },
      { name: "phone", label: "Phone", placeholder: "" },
    ],
  },
  pmc: {
    label: "Property Management Company (PMC)",
    formTitle: "Grow as a PM Company",
    formSubtitle: "Fill the form and we will respond quickly with tailored next steps within 1 business day.",
    crmTag: "pmc",
    redirectTo: "/pmc-apply",
    submitLabel: "Continue",
    fields: [
      { name: "companyName", label: "Company Name", placeholder: "", required: true },
      { name: "region", label: "Region / Manager", placeholder: "e.g., Halkidiki", required: true, isPlace: true },
      { name: "email", label: "Email", placeholder: "", type: "email", required: true },
      { name: "phone", label: "Phone", placeholder: "" },
    ],
  },
  "job-seeker": {
    label: "Job Seeker / Freelancer",
    formTitle: "Apply as a job seeker / freelancer",
    formSubtitle: "Fill the form and we will respond quickly within 1 business day.",
    crmTag: "job-seeker",
    redirectTo: "/find-staff-contractors-job-seekers-quick-application",
    submitLabel: "Continue",
    fields: [
      {
        name: "desiredRole",
        label: "Desired Role",
        placeholder: "",
        required: true,
        options: [
          { value: "cleaning", label: "Cleaning / Housekeeping" },
          { value: "maintenance", label: "Maintenance / Repairs" },
          { value: "hospitality", label: "Hospitality / Guest Ops" },
          { value: "driver", label: "Driver / Transfer" },
          { value: "chef", label: "Chef / Catering" },
          { value: "management", label: "Property Management" },
          { value: "marketing", label: "Marketing / Sales" },
          { value: "other", label: "Other" },
        ],
      },
      { name: "skills", label: "Key Skills", placeholder: "" },
      { name: "email", label: "Email", placeholder: "", type: "email", required: true },
      { name: "phone", label: "Phone", placeholder: "" },
    ],
  },
  "media-partner": {
    label: "Media & Partnership Requests",
    formTitle: "Send a media / partnership request",
    formSubtitle: "Fill the form and we will respond quickly within 1 business day.",
    crmTag: "media-partner",
    redirectTo: "/media-partnerships",
    submitLabel: "Continue",
    fields: [
      {
        name: "partnerType",
        label: "Partnership Type",
        placeholder: "",
        required: true,
        options: [
          { value: "media-coverage", label: "Media Coverage" },
          { value: "affiliate", label: "Affiliate Program" },
          { value: "integration", label: "Integration / API" },
          { value: "sponsorship", label: "Sponsorship" },
          { value: "other", label: "Other" },
        ],
      },
      { name: "email", label: "Email", placeholder: "", type: "email", required: true },
      { name: "phone", label: "Phone", placeholder: "" },
    ],
  },
};

const roleKeys: RoleKey[] = [
  "guest-vacation",
  "guest-tours",
  "guest-real-estate",
  "vacation-owner",
  "real-estate-owner",
  "service-provider",
  "agent",
  "pmc",
  "job-seeker",
  "media-partner",
];

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500";
const labelClass = "text-xs font-medium text-slate-600";

// Map homepage role tabs to mini-form guest sub-roles (first match)
const TAB_ROLE_MAP: Record<string, RoleKey> = {
  Guest: "guest-vacation",
  "Vacation Owner": "vacation-owner",
  "Real Estate Owner": "real-estate-owner",
  "Service Provider": "service-provider",
  Agent: "agent",
  "PM Company": "pmc",
  "Job Seeker": "job-seeker",
  "Media & Partners": "media-partner",
};

export function mapTabToMiniRole(tab: string): RoleKey | null {
  return TAB_ROLE_MAP[tab] ?? null;
}

export function mapMiniRoleToTab(role: RoleKey): string | null {
  if (role.startsWith("guest-")) return "Guest";
  for (const [tab, r] of Object.entries(TAB_ROLE_MAP)) {
    if (r === role) return tab;
  }
  return null;
}

export type { RoleKey as MiniFormRoleKey };

export function HomepageMiniForm({
  selectedRole: externalRole,
  onRoleChange,
}: {
  selectedRole: RoleKey | null;
  onRoleChange: (role: RoleKey | null) => void;
}) {
  const router = useRouter();
  const [internalRole, setInternalRole] = useState<RoleKey | null>(externalRole);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState("");

  // Sync from parent tab changes (but not when user picks a sub-role inside the dropdown)
  const [lastExternalRole, setLastExternalRole] = useState(externalRole);
  if (externalRole !== lastExternalRole) {
    setLastExternalRole(externalRole);
    if (externalRole !== null) {
      // Only override if the new external role is a different "family"
      const extFamily = externalRole?.startsWith("guest-") ? "guest" : externalRole;
      const intFamily = internalRole?.startsWith("guest-") ? "guest" : internalRole;
      if (extFamily !== intFamily) {
        setInternalRole(externalRole);
        setFormData({});
        setMsg("");
      }
    } else {
      setInternalRole(null);
      setFormData({});
      setMsg("");
    }
  }

  const selectedRole = internalRole;
  const meta = selectedRole ? roleMeta[selectedRole] : null;

  function setField(name: string, value: string) {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit() {
    if (!selectedRole || !meta) return;

    const missing = meta.fields
      .filter((f) => f.required && !formData[f.name]?.trim())
      .map((f) => f.label);
    if (missing.length > 0) {
      setMsg(`Please fill: ${missing.join(", ")}`);
      return;
    }

    setSubmitting(true);
    setMsg("");

    try {
      const payload = {
        source: "clickytour-react",
        formType: "homepage-mini-form",
        role: selectedRole,
        crmTag: meta.crmTag,
        submittedAt: new Date().toISOString(),
        data: formData,
      };

      await fetch("/api/forms/pre-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => {});

      const params = new URLSearchParams();
      params.set("source", "homepage");
      params.set("role", selectedRole);
      Object.entries(formData).forEach(([key, val]) => {
        if (val.trim()) params.set(key, val);
      });

      router.push(`${meta.redirectTo}?${params.toString()}`);
    } catch {
      setMsg("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-800 shadow-sm md:p-6">
      <h3 className="text-xl font-extrabold text-slate-900">
        {meta ? meta.formTitle : "How would you like to work with ClickyTour?"}
      </h3>
      <p className="mt-1 text-sm text-slate-500">
        {meta ? meta.formSubtitle : "Choose a role to see the right quick form."}
      </p>

      <div className="mt-4 space-y-3">
        <div>
          <p className={labelClass}>I&apos;m a...</p>
          <select
            className={`mt-1 ${inputClass}`}
            value={selectedRole ?? ""}
            onChange={(e) => {
              const val = e.target.value as RoleKey | "";
              setInternalRole(val || null);
              onRoleChange(val || null);
              setFormData({});
              setMsg("");
            }}
          >
            <option value="">— Choose...</option>
            {roleKeys.map((key) => (
              <option key={key} value={key}>
                {roleMeta[key].label}
              </option>
            ))}
          </select>
        </div>

        {meta && (
          <div className="grid grid-cols-2 gap-3">
            {meta.fields.map((field) => {
              const span = field.colSpan === 2 ? "col-span-2" : "";
              return (
                <div key={field.name} className={span}>
                  <label className={labelClass}>
                    {field.label}
                    {field.required && "*"}
                  </label>
                  {field.isPlace ? (
                    <PlaceAutocomplete
                      label=""
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                      value={formData[field.name] || ""}
                      onTextChange={(text) => setField(field.name, text)}
                      onChange={(place) => {
                        if (place) {
                          setField(field.name, place.displayName);
                          setField(`${field.name}PlaceId`, place.placeId ?? '');
                          setField(`${field.name}Lat`, String(place.lat ?? ''));
                          setField(`${field.name}Lng`, String(place.lng ?? ''));
                        }
                      }}
                    />
                  ) : field.options ? (
                    <select
                      className={`mt-1 ${inputClass}`}
                      value={formData[field.name] || ""}
                      onChange={(e) => setField(field.name, e.target.value)}
                    >
                      <option value="">—</option>
                      {field.options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type || "text"}
                      placeholder={field.placeholder}
                      className={`mt-1 ${inputClass}`}
                      value={formData[field.name] || ""}
                      onChange={(e) => setField(field.name, e.target.value)}
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {meta && (
        <button
          onClick={handleSubmit}
          disabled={submitting}
          className="mt-4 w-full rounded-xl bg-[#0F2B46] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#164E73] disabled:opacity-60"
        >
          {submitting ? "Submitting..." : `${meta.submitLabel} →`}
        </button>
      )}

      {msg && <p className="mt-2 text-sm text-red-600">{msg}</p>}

      <p className="mt-3 text-xs text-slate-400">
        We&apos;ll prefill the next step and match you instantly.
      </p>
    </div>
  );
}
