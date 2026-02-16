import type { DealType, EntityType } from "@/lib/coreMirrorAdapters/types";

export const DEAL_TYPE_RULES: Record<EntityType, DealType[]> = {
  "vacation": ["short_term_rent", "sale"],
  "real-estate": ["short_term_rent", "monthly_rent", "sale"],
  "hotel": ["short_term_rent", "monthly_rent", "sale"],
  "hotel-room": ["short_term_rent", "monthly_rent", "sale"],
};

export function sanitizeDealTypes(entityType: EntityType, dealType: DealType[]): DealType[] {
  const allowed = new Set(DEAL_TYPE_RULES[entityType]);
  return dealType.filter((d) => allowed.has(d));
}

export function pickPrimaryCta(dealType: DealType[]): string {
  if (dealType.includes("sale")) return "Request investment details";
  if (dealType.includes("monthly_rent")) return "Request monthly offer";
  return "Check availability";
}
