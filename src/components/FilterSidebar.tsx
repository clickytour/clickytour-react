"use client";

import type { SearchFilters, SearchIntent } from "@/lib/searchHubEngine";

const BEDROOM_OPTIONS = [
  { value: 0, label: "Any" },
  { value: 1, label: "1+" },
  { value: 2, label: "2+" },
  { value: 3, label: "3+" },
  { value: 4, label: "4+" },
];

const GUEST_OPTIONS = [
  { value: 0, label: "Any" },
  { value: 2, label: "2+" },
  { value: 4, label: "4+" },
  { value: 6, label: "6+" },
  { value: 8, label: "8+" },
];

const BEACH_BRACKETS = [
  { value: "", label: "Any" },
  { value: "0-300", label: "0-300m" },
  { value: "300-700", label: "300-700m" },
  { value: "700-1500", label: "700-1500m" },
];

const AMENITY_OPTIONS = ["Pool", "Sea View", "Parking", "Wi-Fi", "AC", "BBQ", "Pet-friendly"];

const JOB_ROLE_TYPES = ["full-time", "part-time", "seasonal", "contract"];
const JOB_CATEGORIES = ["hospitality", "maintenance", "management", "transport"];

const BLOG_CATEGORIES = ["Travel Tips", "Owners", "Agents & Partners"];

function SelectField({ label, value, onChange, options }: { label: string; value: string | number | undefined; onChange: (v: string) => void; options: { value: string | number; label: string }[] }) {
  return (
    <div>
      <label className="mb-1 block text-xs font-semibold text-slate-600">{label}</label>
      <select
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  );
}

export function FilterSidebar({
  filters,
  onUpdate,
}: {
  filters: SearchFilters;
  onUpdate: (patch: Partial<SearchFilters>) => void;
}) {
  const intent = filters.intent;

  return (
    <aside className="space-y-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="text-sm font-bold text-slate-800">Filters</h3>

      {/* Search */}
      <div>
        <label className="mb-1 block text-xs font-semibold text-slate-600">Search</label>
        <input
          type="text"
          value={filters.q ?? ""}
          onChange={(e) => onUpdate({ q: e.target.value || undefined })}
          placeholder="Search..."
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
        />
      </div>

      {/* Location */}
      <div>
        <label className="mb-1 block text-xs font-semibold text-slate-600">Location</label>
        <input
          type="text"
          value={filters.location ?? ""}
          onChange={(e) => onUpdate({ location: e.target.value || undefined })}
          placeholder="City, region..."
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
        />
      </div>

      {/* Property-specific filters */}
      {(intent === "vacation" || intent === "real-estate" || intent === "hotels") && (
        <>
          <SelectField
            label="Bedrooms"
            value={filters.bedrooms ?? 0}
            onChange={(v) => onUpdate({ bedrooms: Number(v) || undefined })}
            options={BEDROOM_OPTIONS}
          />
          {intent === "vacation" && (
            <>
              <SelectField
                label="Guests"
                value={filters.guests ?? 0}
                onChange={(v) => onUpdate({ guests: Number(v) || undefined })}
                options={GUEST_OPTIONS}
              />
              <SelectField
                label="Beach Distance"
                value={filters.beachDistance ?? ""}
                onChange={(v) => onUpdate({ beachDistance: v || undefined })}
                options={BEACH_BRACKETS}
              />
            </>
          )}

          {/* Budget */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="mb-1 block text-xs font-semibold text-slate-600">Min EUR</label>
              <input
                type="number"
                value={filters.budgetMin ?? ""}
                onChange={(e) => onUpdate({ budgetMin: Number(e.target.value) || undefined })}
                placeholder="0"
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold text-slate-600">Max EUR</label>
              <input
                type="number"
                value={filters.budgetMax ?? ""}
                onChange={(e) => onUpdate({ budgetMax: Number(e.target.value) || undefined })}
                placeholder="Any"
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
              />
            </div>
          </div>

          {/* Amenities */}
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-600">Amenities</label>
            <div className="flex flex-wrap gap-1.5">
              {AMENITY_OPTIONS.map((a) => {
                const active = filters.amenities?.includes(a);
                return (
                  <button
                    key={a}
                    onClick={() => {
                      const current = filters.amenities ?? [];
                      onUpdate({ amenities: active ? current.filter((x) => x !== a) : [...current, a] });
                    }}
                    className={`rounded-full px-2.5 py-1 text-xs font-medium transition ${
                      active ? "bg-teal-600 text-white" : "border border-slate-200 bg-slate-50 text-slate-600 hover:bg-teal-50"
                    }`}
                  >
                    {a}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}

      {/* Job-specific filters */}
      {intent === "jobs" && (
        <>
          <SelectField
            label="Role Type"
            value={filters.roleType ?? ""}
            onChange={(v) => onUpdate({ roleType: v || undefined })}
            options={[{ value: "", label: "All" }, ...JOB_ROLE_TYPES.map((r) => ({ value: r, label: r.charAt(0).toUpperCase() + r.slice(1) }))]}
          />
          <SelectField
            label="Category"
            value={filters.jobCategory ?? ""}
            onChange={(v) => onUpdate({ jobCategory: v || undefined })}
            options={[{ value: "", label: "All" }, ...JOB_CATEGORIES.map((c) => ({ value: c, label: c.charAt(0).toUpperCase() + c.slice(1) }))]}
          />
        </>
      )}

      {/* Blog-specific filters */}
      {intent === "blog" && (
        <SelectField
          label="Category"
          value={filters.blogCategory ?? ""}
          onChange={(v) => onUpdate({ blogCategory: v || undefined })}
          options={[{ value: "", label: "All" }, ...BLOG_CATEGORIES.map((c) => ({ value: c, label: c }))]}
        />
      )}

      {/* Clear all */}
      <button
        onClick={() => onUpdate({ q: undefined, location: undefined, bedrooms: undefined, guests: undefined, beachDistance: undefined, budgetMin: undefined, budgetMax: undefined, amenities: undefined, category: undefined, blogCategory: undefined, roleType: undefined, jobCategory: undefined })}
        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-500 transition hover:bg-slate-50"
      >
        Clear All Filters
      </button>
    </aside>
  );
}
