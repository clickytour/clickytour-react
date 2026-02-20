"use client";

/**
 * Client-side marketplace API helpers.
 * These call the Next.js proxy routes (which forward to CF Worker).
 * When CF_WORKER_URL is not set, proxies return mock data.
 */

export interface PoolResponse {
  ok: boolean;
  count?: number;
  items: Array<Record<string, unknown>>;
  nextCursor: string | null;
  _mock?: boolean;
  error?: string;
}

/** Fetch pool cards (Turnstile-protected in production) */
export async function fetchPool(turnstileToken?: string): Promise<PoolResponse> {
  const res = await fetch("/api/marketplace/pool", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "cf-turnstile-response": turnstileToken || "mock",
    }),
  });
  return res.json();
}

/** Initialize a submission (get ref + tokens) */
export async function initSubmission(turnstileToken?: string) {
  const res = await fetch("/api/marketplace/init", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "cf-turnstile-response": turnstileToken || "mock",
    }),
  });
  return res.json() as Promise<{
    ok: boolean;
    ref: string;
    uploadToken: string;
    shareToken: string;
    _mock?: boolean;
    error?: string;
  }>;
}

/** Save submission data */
export async function submitData(ref: string, token: string, payload: Record<string, unknown>) {
  const res = await fetch("/api/marketplace/submissions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ref, token, ...payload }),
  });
  return res.json();
}

/** Get a single submission */
export async function getSubmission(ref: string, token: string) {
  const res = await fetch(`/api/marketplace/submissions?ref=${ref}&token=${token}`);
  return res.json();
}

/** Submit a claim */
export async function submitClaim(
  token: string,
  claim: { ref: string; pmcName: string; pmcEmail?: string; pmcPhone?: string }
) {
  const res = await fetch(`/api/marketplace/claim?token=${token}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(claim),
  });
  return res.json();
}

/** Admin: list all submissions */
export async function listAllSubmissions(cursor?: string) {
  const qs = cursor ? `?cursor=${cursor}` : "";
  const res = await fetch(`/api/marketplace/submissions-list${qs}`);
  return res.json();
}

/** Admin: get share link */
export async function getShareLink(ref: string) {
  const res = await fetch(`/api/marketplace/share?ref=${ref}`);
  return res.json();
}
