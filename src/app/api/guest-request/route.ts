import { NextRequest, NextResponse } from "next/server";

type GuestRequestBody = {
  source?: unknown;
  formType?: unknown;
  submittedAt?: unknown;
  guest?: {
    firstName?: unknown;
    lastName?: unknown;
    email?: unknown;
    phone?: unknown;
    country?: unknown;
  };
  consent?: {
    termsAccepted?: unknown;
  };
};

function isNonEmptyString(value: unknown) {
  return typeof value === "string" && value.trim().length > 0;
}

function hasBasicValidShape(body: unknown) {
  if (!body || typeof body !== "object") return false;

  const b = body as GuestRequestBody;

  if (!isNonEmptyString(b.source)) return false;
  if (!isNonEmptyString(b.formType)) return false;

  if (b.formType === "guest-request") {
    if (!b.guest || typeof b.guest !== "object") return false;
    if (!isNonEmptyString(b.guest.firstName)) return false;
    if (!isNonEmptyString(b.guest.lastName)) return false;
    if (!isNonEmptyString(b.guest.email)) return false;
    if (!isNonEmptyString(b.guest.phone)) return false;
    if (!isNonEmptyString(b.guest.country)) return false;

    if (!b.consent || typeof b.consent !== "object") return false;
    if (b.consent.termsAccepted !== true) return false;
  }

  return true;
}

export async function POST(req: NextRequest) {
  const webhookUrl = process.env.WEBHOOK_GUEST_REQUEST;
  if (!webhookUrl) {
    return NextResponse.json({ error: "Missing WEBHOOK_GUEST_REQUEST env var" }, { status: 500 });
  }

  const body = (await req.json().catch(() => null)) as unknown;

  if (!hasBasicValidShape(body)) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  try {
    const upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    if (!upstream.ok) {
      return NextResponse.json({ error: "Upstream webhook failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }
}
