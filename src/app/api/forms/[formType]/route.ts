import { NextRequest, NextResponse } from "next/server";

/**
 * Universal form submission API stub.
 *
 * Supported formTypes:
 * - pre-lead          (homepage mini-form CRM pre-lead)
 * - guest-request     (property/service guest inquiry)
 * - service-provider-apply
 * - pmc-apply
 * - agents-apply
 * - owner-evaluation  (free evaluation / list property intake)
 * - contact           (general contact form)
 *
 * Current behavior: logs payload and returns 200.
 * Future: forward to Core CRM webhook, Zapier, or direct DB insert.
 */

const VALID_FORM_TYPES = [
  // Tier 0: Mini / Inline
  "pre-lead",
  "guest-request",
  "contact",
  // Tier 1: Quick (ad traffic)
  "owner-quick",
  "pmc-quick",
  "sp-quick",
  "agent-quick",
  "staff-quick",
  "hotel-quick",
  "guest-quick",
  // Tier 2: Existing full forms
  "service-provider-apply",
  "pmc-apply",
  "agents-apply",
  "owner-evaluation",
  "owner-property-submission",
  "guest-vacation-request",
  "guest-service-request",
  "guest-real-estate-request",
  "job-seeker-apply",
  // Tier 3: Advanced (subscription path)
  "pmc-advanced",
  "sp-advanced",
  "agent-advanced",
  "hotel-advanced",
  "staff-advanced",
];

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ formType: string }> }
) {
  const { formType } = await params;

  if (!VALID_FORM_TYPES.includes(formType)) {
    return NextResponse.json(
      { error: `Unknown form type: ${formType}` },
      { status: 400 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  // --- STUB: Log submission ---
  // In production, forward to Core CRM or webhook:
  // const webhookUrl = process.env.CORE_WEBHOOK_URL;
  // await fetch(webhookUrl, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ formType, ...body }) });

  console.log(`[FORM SUBMIT] ${formType}`, JSON.stringify(body, null, 2));

  return NextResponse.json({
    success: true,
    formType,
    message: "Form submission received (stub). Will be forwarded to CRM when integration is live.",
    receivedAt: new Date().toISOString(),
  });
}
