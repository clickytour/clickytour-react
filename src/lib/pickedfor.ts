/**
 * PickedFor Integration
 * 
 * ClickyTour does NOT host proposals internally.
 * Unregistered users → redirect to pickedfor.com for no-logo/unbranded presentations.
 * PickedFor is the marketing funnel entry point for the ClickyTour ecosystem.
 */

const PICKEDFOR_BASE = "https://pickedfor.com";

export type PickedForItem = {
  type: "property" | "hotel" | "hotel-room" | "service";
  slug: string;
  title: string;
  image?: string;
  price?: number;
  priceLabel?: string;
};

/**
 * Build a PickedFor proposal URL with basket items encoded as query params.
 */
export function buildPickedForUrl(items: PickedForItem[]): string {
  const params = new URLSearchParams();
  params.set("source", "clickytour");
  params.set("items", JSON.stringify(items.map((i) => ({
    t: i.type,
    s: i.slug,
    n: i.title,
    p: i.price,
  }))));
  return `${PICKEDFOR_BASE}/r?${params.toString()}`;
}

/**
 * Build a single-item PickedFor presentation URL.
 */
export function buildPickedForSingleUrl(type: string, slug: string): string {
  return `${PICKEDFOR_BASE}/r?source=clickytour&type=${encodeURIComponent(type)}&slug=${encodeURIComponent(slug)}`;
}

/**
 * Check if user should be redirected to PickedFor (unregistered user wanting a proposal).
 * In mock mode, always returns true since we have no auth.
 */
export function shouldRedirectToPickedFor(): boolean {
  // Future: check Core auth token / subscription status
  // For now, all users are "unregistered" → redirect to PickedFor
  return true;
}
