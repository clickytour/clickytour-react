import type { CoreMirrorProperty } from "@/lib/coreMirrorPropertyMock";
import { getCoreMirrorPropertyBySlug } from "@/lib/coreMirrorPropertyMock";

/**
 * Vacation Property bridge (UI-preserving):
 * - Keeps existing canonical vacation UI contract unchanged.
 * - Acts as a single seam for future Core mirror DB payload mapping.
 *
 * IMPORTANT:
 * - Do not change visual behavior through this bridge.
 * - When real Core mirror payloads are connected, map into CoreMirrorProperty shape here.
 */
export function getVacationPropertyForCanonicalPage(slug: string): CoreMirrorProperty | null {
  // Current source: local Core mirror mock
  // Future source: Core mirror DB/API payload -> map to CoreMirrorProperty here
  return getCoreMirrorPropertyBySlug(slug);
}
