import { NextRequest, NextResponse } from "next/server";

/**
 * Proxy: POST /api/marketplace/pool
 * Forwards to CF Worker POST /api/pool (Turnstile-protected)
 * This avoids CORS since worker only allows clickytour.club origins.
 */

const WORKER_URL = process.env.CF_WORKER_URL || "";

export async function POST(request: NextRequest) {
  if (!WORKER_URL) {
    // Fallback: return mock data when worker URL not configured
    const { MOCK_POOL_CARDS } = await import("@/lib/marketplace/mockData");
    return NextResponse.json({
      ok: true,
      count: MOCK_POOL_CARDS.length,
      items: MOCK_POOL_CARDS,
      nextCursor: null,
      _mock: true,
    });
  }

  try {
    const body = await request.json();
    const res = await fetch(`${WORKER_URL}/api/pool`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Failed to reach submissions API" },
      { status: 502 }
    );
  }
}
