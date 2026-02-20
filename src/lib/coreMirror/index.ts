export * from "./types";
export { coreMirrorProperties } from "./properties";
export { coreMirrorHotels, coreMirrorHotelRooms } from "./hotels";
export { coreMirrorServices } from "./services";
export { coreMirrorBlogPosts } from "./blog";
export { coreMirrorJobs } from "./jobs";
export { coreMirrorAgents } from "./agents";
export { coreMirrorPmcs } from "./pmcs";

// ---- Helper functions ----

import { coreMirrorProperties } from "./properties";
import { coreMirrorHotels, coreMirrorHotelRooms } from "./hotels";
import { coreMirrorServices } from "./services";
import { coreMirrorBlogPosts } from "./blog";
import { coreMirrorJobs } from "./jobs";
import { coreMirrorAgents } from "./agents";
import { coreMirrorPmcs } from "./pmcs";
import type { DealMode, ServiceAudienceTarget } from "./types";

// Single-entity lookups
export function getPropertyBySlug(slug: string) {
  return coreMirrorProperties.find((p) => p.slug === slug) ?? null;
}

export function getHotelBySlug(slug: string) {
  return coreMirrorHotels.find((h) => h.slug === slug) ?? null;
}

export function getHotelRoomBySlug(slug: string) {
  return coreMirrorHotelRooms.find((r) => r.slug === slug) ?? null;
}

export function getHotelRoomsByHotelSlug(hotelSlug: string) {
  return coreMirrorHotelRooms.filter((r) => r.hotelSlug === hotelSlug);
}

export function getServiceBySlug(slug: string) {
  return coreMirrorServices.find((s) => s.slug === slug) ?? null;
}

export function getBlogPostBySlug(slug: string) {
  return coreMirrorBlogPosts.find((p) => p.slug === slug) ?? null;
}

export function getJobBySlug(slug: string) {
  return coreMirrorJobs.find((j) => j.slug === slug) ?? null;
}

export function getAgentBySlug(slug: string) {
  return coreMirrorAgents.find((a) => a.slug === slug) ?? null;
}

export function getPmcBySlug(slug: string) {
  return coreMirrorPmcs.find((p) => p.slug === slug) ?? null;
}

// Search/filter functions
export function searchProperties(filters?: { type?: string; dealType?: DealMode; region?: string; status?: string }) {
  let results = coreMirrorProperties;
  if (filters?.type) results = results.filter((p) => p.type === filters.type);
  if (filters?.dealType) results = results.filter((p) => p.dealTypes.includes(filters.dealType!));
  if (filters?.region) results = results.filter((p) => p.location.region.toLowerCase().includes(filters.region!.toLowerCase()));
  if (filters?.status) results = results.filter((p) => p.status === filters.status);
  return results;
}

export function searchHotels(filters?: { region?: string; status?: string }) {
  let results = coreMirrorHotels;
  if (filters?.region) results = results.filter((h) => h.location.region.toLowerCase().includes(filters.region!.toLowerCase()));
  if (filters?.status) results = results.filter((h) => h.status === filters.status);
  return results;
}

export function searchServices(filters?: { categoryId?: string; audience?: ServiceAudienceTarget; status?: string }) {
  let results = coreMirrorServices;
  if (filters?.categoryId) results = results.filter((s) => s.categoryId === filters.categoryId);
  if (filters?.audience) results = results.filter((s) => s.audienceTargets.includes(filters.audience!));
  if (filters?.status) results = results.filter((s) => s.status === filters.status);
  return results;
}

export function searchJobs(filters?: { category?: string; roleType?: string; status?: string }) {
  let results = coreMirrorJobs;
  if (filters?.category) results = results.filter((j) => j.category === filters.category);
  if (filters?.roleType) results = results.filter((j) => j.roleType === filters.roleType);
  if (filters?.status) results = results.filter((j) => j.status === filters.status);
  return results;
}

export function searchBlogPosts(filters?: { category?: string; status?: string }) {
  let results = coreMirrorBlogPosts;
  if (filters?.category) results = results.filter((p) => p.category === filters.category);
  if (filters?.status) results = results.filter((p) => p.status === filters.status);
  return results;
}

export function searchAgents(filters?: { area?: string; tier?: string; status?: string }) {
  let results = coreMirrorAgents;
  if (filters?.area) results = results.filter((a) => a.areas.some((ar) => ar.toLowerCase().includes(filters.area!.toLowerCase())));
  if (filters?.tier) results = results.filter((a) => a.subscriptionTier === filters.tier);
  if (filters?.status) results = results.filter((a) => a.status === filters.status);
  return results;
}

export function searchPmcs(filters?: { area?: string; tier?: string; status?: string }) {
  let results = coreMirrorPmcs;
  if (filters?.area) results = results.filter((p) => p.areas.some((ar) => ar.toLowerCase().includes(filters.area!.toLowerCase())));
  if (filters?.tier) results = results.filter((p) => p.subscriptionTier === filters.tier);
  if (filters?.status) results = results.filter((p) => p.status === filters.status);
  return results;
}
