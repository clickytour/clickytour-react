"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type RoleKey =
  | "guest"
  | "vacation-owner"
  | "real-estate-owner"
  | "service-provider"
  | "agent"
  | "pmc"
  | "job-seeker"
  | "media-partner";

type RoleMeta = {
  label: string;
  fields: { name: string; placeholder: string; type?: string; required?: boolean }[];
  redirectTo: string;
  submitLabel: string;
};

const roleMeta: Record<RoleKey, RoleMeta> = {
  guest: {
    label: "Guest (Travel & Rentals)",
    fields: [
      { name: "destination", placeholder: "Destination / Region", required: true },
      { name: "checkIn", placeholder: "Check-in", type: "date", required: true },
      { name: "checkOut", placeholder: "Check-out", type: "date", required: true },
      { name: "adults", placeholder: "Adults", type: "number" },
      { name: "email", placeholder: "Email *", type: "email", required: true },
    ],
    redirectTo: "/guests-vacation-request",
    submitLabel: "Get Proposals",
  },
  "vacation-owner": {
    label: "Vacation Property Owner",
    fields: [
      { name: "propertyType", placeholder: "Property Type *", required: true },
      { name: "region", placeholder: "Region *", required: true },
      { name: "email", placeholder: "Email *", type: "email", required: true },
      { name: "phone", placeholder: "Phone" },
    ],
    redirectTo: "/owners-vacation-free-evaluation",
    submitLabel: "Get Free Evaluation",
  },
  "real-estate-owner": {
    label: "Real Estate Seller / Landlord",
    fields: [
      { name: "propertyType", placeholder: "Property Type *", required: true },
      { name: "region", placeholder: "City / Region *", required: true },
      { name: "email", placeholder: "Email *", type: "email", required: true },
      { name: "phone", placeholder: "Phone" },
    ],
    redirectTo: "/owners-real-estate-list-property",
    submitLabel: "List Property",
  },
  "service-provider": {
    label: "Local Business / Service Provider",
    fields: [
      { name: "serviceType", placeholder: "Service Type *", required: true },
      { name: "region", placeholder: "Region *", required: true },
      { name: "email", placeholder: "Email *", type: "email", required: true },
      { name: "phone", placeholder: "Phone" },
    ],
    redirectTo: "/service-providers-list-service",
    submitLabel: "List My Service",
  },
  agent: {
    label: "Travel Agent / Agency",
    fields: [
      { name: "agencyName", placeholder: "Agency Name *", required: true },
      { name: "markets", placeholder: "Markets / Regions *", required: true },
      { name: "email", placeholder: "Email *", type: "email", required: true },
      { name: "phone", placeholder: "Phone" },
    ],
    redirectTo: "/agents-agenicies-form",
    submitLabel: "Become an Agent",
  },
  pmc: {
    label: "Property Management Company",
    fields: [
      { name: "companyName", placeholder: "Company Name *", required: true },
      { name: "region", placeholder: "Region *", required: true },
      { name: "email", placeholder: "Email *", type: "email", required: true },
      { name: "phone", placeholder: "Phone" },
    ],
    redirectTo: "/pmc-apply",
    submitLabel: "Apply as PMC",
  },
  "job-seeker": {
    label: "Job Seeker / Freelancer",
    fields: [
      { name: "desiredRole", placeholder: "Desired Role *", required: true },
      { name: "skills", placeholder: "Key Skills" },
      { name: "email", placeholder: "Email *", type: "email", required: true },
      { name: "phone", placeholder: "Phone" },
    ],
    redirectTo: "/find-staff-contractors-job-seekers-quick-application",
    submitLabel: "Quick Apply",
  },
  "media-partner": {
    label: "Media & Partnership",
    fields: [
      { name: "partnerType", placeholder: "Partnership Type *", required: true },
      { name: "email", placeholder: "Email *", type: "email", required: true },
      { name: "phone", placeholder: "Phone" },
    ],
    redirectTo: "/media-partnerships",
    submitLabel: "Send Request",
  },
};

const roleKeys: RoleKey[] = [
  "guest",
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

export function HomepageMiniForm({
  selectedRole,
  onRoleChange,
}: {
  selectedRole: RoleKey | null;
  onRoleChange: (role: RoleKey | null) => void;
}) {
  const router = useRouter();
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState("");

  const meta = selectedRole ? roleMeta[selectedRole] : null;

  function setField(name: string, value: string) {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit() {
    if (!selectedRole || !meta) return;

    // Validate required fields
    const missing = meta.fields
      .filter((f) => f.required && !formData[f.name]?.trim())
      .map((f) => f.placeholder.replace(" *", "").replace("*", ""));
    if (missing.length > 0) {
      setMsg(`Please fill: ${missing.join(", ")}`);
      return;
    }

    setSubmitting(true);
    setMsg("");

    try {
      // CRM pre-lead submission
      const payload = {
        source: "clickytour-react",
        formType: "homepage-mini-form",
        role: selectedRole,
        submittedAt: new Date().toISOString(),
        data: formData,
      };

      await fetch("/api/forms/pre-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => {
        // Silent fail for pre-lead — redirect anyway
      });

      // Build query params for prefilling the main form
      const params = new URLSearchParams();
      params.set("source", "homepage");
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
        {meta ? meta.submitLabel.replace(/^(Get |List |Become |Apply |Quick |Send )/, "Quick: ") : "How would you like to work with ClickyTour?"}
      </h3>
      <p className="mt-1 text-sm text-slate-500">
        {meta
          ? "Fill the quick form — we'll prefill the next step for you."
          : "Choose a role to see the right quick form."}
      </p>

      <div className="mt-4 space-y-3">
        <select
          className={inputClass}
          value={selectedRole ?? ""}
          onChange={(e) => {
            const val = e.target.value as RoleKey | "";
            onRoleChange(val || null);
            setFormData({});
            setMsg("");
          }}
        >
          <option value="">— Choose your role...</option>
          {roleKeys.map((key) => (
            <option key={key} value={key}>
              {roleMeta[key].label}
            </option>
          ))}
        </select>

        {meta &&
          meta.fields.map((field) => (
            <input
              key={field.name}
              type={field.type || "text"}
              placeholder={field.placeholder}
              className={inputClass}
              value={formData[field.name] || ""}
              onChange={(e) => setField(field.name, e.target.value)}
            />
          ))}
      </div>

      {meta && (
        <button
          onClick={handleSubmit}
          disabled={submitting}
          className="mt-4 w-full rounded-xl bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700 disabled:opacity-60"
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
