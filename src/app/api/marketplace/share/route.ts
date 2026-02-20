import { NextRequest, NextResponse } from "next/server";

/**
 * Proxy: GET /api/marketplace/share?ref=...
 * Admin-only: generates share link for a submission
 */

const WORKER_URL = process.env.CF_WORKER_URL || "";
const ADMIN_TOKEN = process.env.CF_ADMIN_TOKEN || "";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const ref = searchParams.get("ref") || "";

  if (!WORKER_URL) {
    return NextResponse.json({
      ok: true,
      shareUrl: `/pmc-submission-viewer?ref=${ref}&token=mock-share`,
      token: "mock-share",
      _mock: true,
    });
  }

  try {
    const res = await fetch(`${WORKER_URL}/api/share?ref=${ref}`, {
      headers: { "X-Preview-Token": ADMIN_TOKEN },
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json({ ok: false, error: "Failed to reach API" }, { status: 502 });
  }
}
