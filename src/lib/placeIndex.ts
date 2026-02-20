/**
 * Place Index — extracts unique locations from Core mirror data
 * for Tier 2 autocomplete (no Google API calls needed).
 *
 * When Core mirror goes live with Prisma, swap the imports to DB queries.
 * For now, reads from static mock data.
 */

import {
  coreMirrorProperties,
  coreMirrorHotels,
  coreMirrorServices,
  coreMirrorJobs,
  coreMirrorAgents,
  coreMirrorPmcs,
} from "@/lib/coreMirror";

export type PlaceSuggestion = {
  /** Display label, e.g. "Pefkohori, Halkidiki" */
  label: string;
  /** Area / city / town name */
  area: string;
  /** Region / prefecture */
  region: string;
  /** Country */
  country: string;
  /** Google Place ID (when available from Core) */
  placeId?: string;
  /** Coordinates (when available) */
  lat?: number;
  lng?: number;
  /** How many listings reference this place (for ranking) */
  listingCount: number;
};

/** Normalize string for comparison */
function norm(s: string): string {
  return s.trim().toLowerCase();
}

/** Build a deduped place index from all mirror entities */
function buildPlaceIndex(): PlaceSuggestion[] {
  const map = new Map<string, PlaceSuggestion>();

  function addPlace(area: string, region: string, country: string, lat?: number, lng?: number) {
    // Add area+region combo
    const areaKey = `${norm(area)}|${norm(region)}|${norm(country)}`;
    const existing = map.get(areaKey);
    if (existing) {
      existing.listingCount++;
      if (!existing.lat && lat) { existing.lat = lat; existing.lng = lng; }
    } else {
      map.set(areaKey, {
        label: area && area !== region ? `${area}, ${region}` : region,
        area: area || region,
        region,
        country,
        lat,
        lng,
        listingCount: 1,
      });
    }

    // Also add region-level entry (so "Halkidiki" matches even without area)
    const regionKey = `|${norm(region)}|${norm(country)}`;
    if (!map.has(regionKey) && area && area !== region) {
      map.set(regionKey, {
        label: `${region}, ${country}`,
        area: "",
        region,
        country,
        listingCount: 0, // region-level = aggregation, not a direct listing
      });
    }
    const regionEntry = map.get(regionKey);
    if (regionEntry) regionEntry.listingCount++;
  }

  // Properties
  for (const p of coreMirrorProperties) {
    addPlace(p.location.area, p.location.region, p.location.country, p.location.lat, p.location.lng);
  }

  // Hotels
  for (const h of coreMirrorHotels) {
    addPlace(h.location.city, h.location.region, h.location.country);
  }

  // Services
  for (const s of coreMirrorServices) {
    addPlace(s.location.city, s.location.city, s.location.country, s.location.lat, s.location.lng);
  }

  // Jobs
  for (const j of coreMirrorJobs) {
    addPlace(j.location, j.region, j.country);
  }

  // Agents — areas array
  for (const a of coreMirrorAgents) {
    for (const area of a.areas) {
      addPlace("", area, "Greece"); // agents don't have country field, default Greece
    }
  }

  // PMCs — areas array
  for (const p of coreMirrorPmcs) {
    for (const area of p.areas) {
      addPlace("", area, "Greece");
    }
  }

  return Array.from(map.values()).sort((a, b) => b.listingCount - a.listingCount);
}

// Singleton — built once per server lifecycle
let _index: PlaceSuggestion[] | null = null;

export function getPlaceIndex(): PlaceSuggestion[] {
  if (!_index) _index = buildPlaceIndex();
  return _index;
}

/** Invalidate cache (call after mirror sync webhook updates data) */
export function invalidatePlaceIndex(): void {
  _index = null;
}

/**
 * Search the place index with fuzzy prefix matching.
 * Returns top N results sorted by relevance (match quality + listing count).
 */
export function suggestPlaces(
  query: string,
  opts?: { country?: string; limit?: number }
): PlaceSuggestion[] {
  const q = norm(query);
  if (!q) return [];

  const limit = opts?.limit ?? 10;
  const index = getPlaceIndex();

  // Filter by country if specified
  let candidates = opts?.country
    ? index.filter((p) => norm(p.country) === norm(opts.country!))
    : index;

  // Score each candidate
  const scored = candidates.map((p) => {
    const labelLower = norm(p.label);
    const areaLower = norm(p.area);
    const regionLower = norm(p.region);

    let score = 0;

    // Exact match
    if (areaLower === q || regionLower === q) score += 100;
    // Starts with
    else if (areaLower.startsWith(q) || regionLower.startsWith(q)) score += 80;
    // Label starts with
    else if (labelLower.startsWith(q)) score += 70;
    // Contains
    else if (labelLower.includes(q)) score += 40;
    // No match
    else return null;

    // Boost by listing count (log scale)
    score += Math.min(Math.log2(p.listingCount + 1) * 5, 20);

    return { place: p, score };
  });

  return scored
    .filter(Boolean)
    .sort((a, b) => b!.score - a!.score)
    .slice(0, limit)
    .map((s) => s!.place);
}
