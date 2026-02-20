import { NextRequest, NextResponse } from "next/server";

/**
 * Proxy: GET /api/marketplace/submissions-list
 * Admin-only: lists all submissions from KV
 */

const WORKER_URL = process.env.CF_WORKER_URL || "";
const ADMIN_TOKEN = process.env.CF_ADMIN_TOKEN || "";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const cursor = searchParams.get("cursor") || "";

  if (!WORKER_URL) {
    const { MOCK_POOL_CARDS } = await import("@/lib/marketplace/mockData");
    return NextResponse.json({
      ok: true,
      items: MOCK_POOL_CARDS.map((c) => ({
        ref: c.ref,
        role: c.role,
        subrole: c.subrole,
        leadName: c.leadName,
        createdAtIso: c.createdAtIso,
        region: c.region,
        propertyType: c.propertyType,
      })),
      nextCursor: null,
      _mock: true,
    });
  }

  try {
    const qs = cursor ? `?cursor=${cursor}` : "";
    const res = await fetch(`${WORKER_URL}/api/submissions-list${qs}`, {
      headers: { "X-Preview-Token": ADMIN_TOKEN },
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json({ ok: false, error: "Failed to reach API" }, { status: 502 });
  }
}
