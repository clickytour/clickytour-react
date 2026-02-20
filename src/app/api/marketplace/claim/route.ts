import { NextRequest, NextResponse } from "next/server";

/**
 * Proxy: /api/marketplace/claim
 * GET  ?ref=...&token=...  → CF Worker GET /api/claim (list claims)
 * POST body:{ref,pmcName,...} + ?token=... → CF Worker POST /api/claim
 */

const WORKER_URL = process.env.CF_WORKER_URL || "";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const ref = searchParams.get("ref") || "";
  const token = searchParams.get("token") || "";

  if (!WORKER_URL) {
    return NextResponse.json({ ok: true, claims: [], _mock: true });
  }

  try {
    const res = await fetch(`${WORKER_URL}/api/claim?ref=${ref}&token=${token}`);
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json({ ok: false, error: "Failed to reach API" }, { status: 502 });
  }
}

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token") || "";

  if (!WORKER_URL) {
    const body = await request.json();
    console.log("[MOCK] Claim submitted:", JSON.stringify(body, null, 2));
    return NextResponse.json({ ok: true, message: "Claim recorded (mock)", _mock: true });
  }

  try {
    const body = await request.json();
    const res = await fetch(`${WORKER_URL}/api/claim?token=${token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json({ ok: false, error: "Failed to reach API" }, { status: 502 });
  }
}
