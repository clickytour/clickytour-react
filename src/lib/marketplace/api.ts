/**
 * CF Worker API client — server-side only.
 * All calls go through Next.js API proxy routes to avoid CORS.
 *
 * Worker: clickytour-submissions-api
 * CF Account: Suncoast (913dc03a6729358937e3b6f1230b1188)
 *
 * Env vars needed in Vercel:
 *   CF_WORKER_URL        — e.g. https://clickytour-submissions-api.XXX.workers.dev
 *   CF_ADMIN_TOKEN       — admin token (ADMIN_TOKEN_SECRET or PREVIEW_TOKEN_SECRET)
 *   CF_TURNSTILE_SITEKEY — Turnstile site key for client-side widget (optional)
 */

const WORKER_URL = process.env.CF_WORKER_URL || "";
const ADMIN_TOKEN = process.env.CF_ADMIN_TOKEN || "";

if (!WORKER_URL && typeof window === "undefined") {
  console.warn("[marketplace/api] CF_WORKER_URL not set — API calls will fail");
}

/** Generic fetch helper */
async function workerFetch(
  path: string,
  options: RequestInit & { token?: string; adminAuth?: boolean } = {}
): Promise<Response> {
  const { token, adminAuth, ...fetchOpts } = options;
  const url = `${WORKER_URL}${path}`;
  const headers: Record<string, string> = {
    ...(fetchOpts.headers as Record<string, string>),
  };

  if (adminAuth && ADMIN_TOKEN) {
    headers["X-Preview-Token"] = ADMIN_TOKEN;
  } else if (token) {
    headers["X-Preview-Token"] = token;
  }

  if (fetchOpts.body && !headers["Content-Type"]) {
    headers["Content-Type"] = "application/json";
  }

  const res = await fetch(url, { ...fetchOpts, headers });
  return res;
}

// ─── Pool (public, Turnstile-protected) ───

export interface PoolParams {
  turnstileToken: string;
  cursor?: string;
  limit?: number;
  region?: string;
  propertyType?: string;
}

export async function fetchPool(params: PoolParams) {
  const body: Record<string, unknown> = {
    "cf-turnstile-response": params.turnstileToken,
  };
  if (params.cursor) body.cursor = params.cursor;
  if (params.limit) body.limit = params.limit;

  const res = await workerFetch("/api/pool", {
    method: "POST",
    body: JSON.stringify(body),
  });
  return res.json();
}

// ─── Init (Turnstile → ref + tokens) ───

export async function initSubmission(turnstileToken: string) {
  const res = await workerFetch("/api/init", {
    method: "POST",
    body: JSON.stringify({ "cf-turnstile-response": turnstileToken }),
  });
  return res.json() as Promise<{
    ok: boolean;
    ref: string;
    uploadToken: string;
    shareToken: string;
    error?: string;
  }>;
}

// ─── Submit (save to KV) ───

export async function submitToWorker(
  ref: string,
  token: string,
  payload: Record<string, unknown>
) {
  const res = await workerFetch(`/api/submissions`, {
    method: "POST",
    token,
    body: JSON.stringify({ ref, ...payload }),
  });
  return res.json();
}

// ─── Get submission ───

export async function getSubmission(ref: string, token: string) {
  const res = await workerFetch(`/api/submissions?ref=${ref}&token=${token}`);
  return res.json();
}

// ─── Admin: list all submissions ───

export async function listSubmissions(cursor?: string) {
  const qs = cursor ? `?cursor=${cursor}` : "";
  const res = await workerFetch(`/api/submissions-list${qs}`, {
    adminAuth: true,
  });
  return res.json();
}

// ─── Upload file to R2 ───

export async function uploadFile(
  ref: string,
  uploadToken: string,
  fileName: string,
  fileBuffer: ArrayBuffer,
  contentType: string
) {
  const res = await workerFetch(
    `/api/file?ref=${ref}&key=${encodeURIComponent(fileName)}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": contentType,
        "X-Upload-Token": uploadToken,
      },
      body: fileBuffer,
    }
  );
  return res.json();
}

// ─── Get file from R2 ───

export async function getFile(ref: string, key: string, token: string) {
  return workerFetch(
    `/api/file?ref=${ref}&key=${encodeURIComponent(key)}&token=${token}`
  );
}

// ─── Share link (admin) ───

export async function getShareLink(ref: string) {
  const res = await workerFetch(`/api/share?ref=${ref}`, { adminAuth: true });
  return res.json() as Promise<{ ok: boolean; shareUrl: string; token: string }>;
}

// ─── Claims ───

export async function listClaims(ref: string, token: string) {
  const res = await workerFetch(`/api/claim?ref=${ref}&token=${token}`);
  return res.json();
}

export async function submitClaim(
  token: string,
  claim: {
    ref: string;
    pmcName: string;
    pmcEmail?: string;
    pmcPhone?: string;
  }
) {
  const res = await workerFetch(`/api/claim?token=${token}`, {
    method: "POST",
    body: JSON.stringify(claim),
  });
  return res.json();
}

// ─── Email verify ───

export async function verifyEmail(email: string) {
  const res = await workerFetch("/api/verify-email", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
  return res.json();
}
