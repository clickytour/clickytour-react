import { NextRequest, NextResponse } from "next/server";

/**
 * Proxy: /api/marketplace/submissions
 * GET  ?ref=...&token=...  → CF Worker GET /api/submissions
 * POST body:{ref,...}      → CF Worker POST /api/submissions
 */

const WORKER_URL = process.env.CF_WORKER_URL || "";
const ADMIN_TOKEN = process.env.CF_ADMIN_TOKEN || "";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const ref = searchParams.get("ref") || "";
  const token = searchParams.get("token") || "";

  if (!WORKER_URL) {
    const { MOCK_POOL_CARDS } = await import("@/lib/marketplace/mockData");
    const card = MOCK_POOL_CARDS.find((c) => c.ref === ref);
    return NextResponse.json(card ? { ok: true, data: card, _mock: true } : { ok: false, error: "Not found" }, { status: card ? 200 : 404 });
  }

  try {
    const res = await fetch(`${WORKER_URL}/api/submissions?ref=${ref}&token=${token}`);
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json({ ok: false, error: "Failed to reach API" }, { status: 502 });
  }
}

export async function POST(request: NextRequest) {
  if (!WORKER_URL) {
    const body = await request.json();
    console.log("[MOCK] Submission received:", JSON.stringify(body, null, 2));
    return NextResponse.json({
      ok: true,
      ref: `CTV-${Math.random().toString(16).slice(2, 8).toUpperCase()}`,
      _mock: true,
    });
  }

  try {
    const body = await request.json();
    const res = await fetch(`${WORKER_URL}/api/submissions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Preview-Token": body.token || "",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json({ ok: false, error: "Failed to reach API" }, { status: 502 });
  }
}
