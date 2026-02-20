import { NextRequest, NextResponse } from "next/server";

/**
 * Proxy: POST /api/marketplace/init
 * Forwards Turnstile token to CF Worker POST /api/init
 * Returns: { ok, ref, uploadToken, shareToken }
 */

const WORKER_URL = process.env.CF_WORKER_URL || "";

export async function POST(request: NextRequest) {
  if (!WORKER_URL) {
    // Mock: generate fake ref + tokens
    const ref = `CTV-${Math.random().toString(16).slice(2, 8).toUpperCase()}`;
    return NextResponse.json({
      ok: true,
      ref,
      uploadToken: "mock-upload-token",
      shareToken: "mock-share-token",
      _mock: true,
    });
  }

  try {
    const body = await request.json();
    const res = await fetch(`${WORKER_URL}/api/init`, {
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
