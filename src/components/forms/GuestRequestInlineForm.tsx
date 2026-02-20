"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type ContextType = "property" | "service";
type PropertyMode = "short_term_rent" | "sale" | "monthly_rent";

type Props = {
  contextType: ContextType;
  contextId: string;
  contextSlug: string;
  contextTitle: string;
  propertyMode?: PropertyMode;
  categoryName?: string;
  subcategoryName?: string;
};

const inputClass =
  "w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500";
const labelClass = "text-xs font-medium text-slate-600";

export function GuestRequestInlineForm(props: Props) {
  const searchParams = useSearchParams();
  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    checkIn: "",
    checkOut: "",
    adults: "",
    children03to14: "",
    children0to3: "",
    preferredDate: "",
    preferredTime: "",
    participants: "2",
    moveInDate: "",
    contractMonths: "",
    monthlyBudget: "",
    saleBudget: "",
    investmentPurpose: "",
    timeline: "",
    note: "",
    terms: false,
    hp: "",
  });

  const propertyMode: PropertyMode = props.propertyMode || "short_term_rent";
  const isVacation = props.contextType === "property" && propertyMode === "short_term_rent";
  const isSale = props.contextType === "property" && propertyMode === "sale";
  const isMonthly = props.contextType === "property" && propertyMode === "monthly_rent";

  useEffect(() => {
    if (props.contextType !== "property") return;
    const checkIn = searchParams.get("checkIn") || "";
    const checkOut = searchParams.get("checkOut") || "";
    if (!checkIn && !checkOut) return;
    setForm((prev) => ({
      ...prev,
      checkIn: prev.checkIn || checkIn,
      checkOut: prev.checkOut || checkOut,
    }));
  }, [props.contextType, searchParams]);

  function setField(key: string, value: string | boolean) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function submit() {
    if (!form.firstName || !form.lastName || !form.email || !form.phone || !form.country || !form.terms) {
      setMsg("Please complete required fields.");
      return;
    }
    if (isVacation && (!form.checkIn || !form.checkOut)) {
      setMsg("Please add check-in and check-out dates.");
      return;
    }
    if (isSale && (!form.saleBudget || !form.timeline)) {
      setMsg("Please add sale budget and timeline.");
      return;
    }
    if (isMonthly && (!form.moveInDate || !form.contractMonths || !form.monthlyBudget)) {
      setMsg("Please add move-in date, contract period, and monthly budget.");
      return;
    }
    if (props.contextType === "service" && !form.preferredDate) {
      setMsg("Please add preferred service date.");
      return;
    }
    if (form.hp.trim()) {
      setMsg("Spam check failed.");
      return;
    }

    setSending(true);
    setMsg("");
    try {
      const payload = {
        source: "clickytour-react",
        formType: "guest-request",
        submittedAt: new Date().toISOString(),
        context: {
          type: props.contextType,
          id: props.contextId,
          slug: props.contextSlug,
          title: props.contextTitle,
          categoryName: props.categoryName || null,
          subcategoryName: props.subcategoryName || null,
        },
        guest: {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          country: form.country,
        },
        request:
          props.contextType === "property"
            ? isVacation
              ? {
                  mode: "short_term_rent",
                  checkIn: form.checkIn,
                  checkOut: form.checkOut,
                  adults: Number(form.adults || 0),
                  children03to14: Number(form.children03to14 || 0),
                  children0to3: Number(form.children0to3 || 0),
                  note: form.note,
                }
              : isSale
              ? {
                  mode: "sale",
                  saleBudget: form.saleBudget,
                  timeline: form.timeline,
                  investmentPurpose: form.investmentPurpose,
                  note: form.note,
                }
              : {
                  mode: "monthly_rent",
                  moveInDate: form.moveInDate,
                  contractMonths: Number(form.contractMonths || 0),
                  monthlyBudget: form.monthlyBudget,
                  participants: Number(form.participants || 0),
                  note: form.note,
                }
            : {
                preferredDate: form.preferredDate,
                preferredTime: form.preferredTime,
                participants: Number(form.participants || 0),
                note: form.note,
              },
        consent: { termsAccepted: form.terms },
      };

      const r = await fetch("/api/forms/guest-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!r.ok) throw new Error("submit failed");
      setMsg("Request sent successfully! We'll respond within 1 business day.");
    } catch {
      setMsg("Request failed. Please retry.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="guest-request-form" className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
      <div className="grid gap-6 lg:grid-cols-[1.45fr_0.85fr]">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            {isSale ? "Sale Inquiry" : isMonthly ? "Monthly Rent Inquiry" : props.contextType === "service" ? "Service Request" : "Guest Request"}
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            {props.contextType === "property"
              ? isVacation
                ? "Ask for availability and booking details."
                : isSale
                ? "Share your budget and timeline to receive sale details."
                : "Share your monthly-rent profile and we will send matching terms."
              : "Ask for service availability and details."}
          </p>

          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <input className={inputClass} placeholder="First name *" value={form.firstName} onChange={(e) => setField("firstName", e.target.value)} />
            <input className={inputClass} placeholder="Last name *" value={form.lastName} onChange={(e) => setField("lastName", e.target.value)} />
            <input className={inputClass} placeholder="Email *" type="email" value={form.email} onChange={(e) => setField("email", e.target.value)} />
            <input className={inputClass} placeholder="Phone *" value={form.phone} onChange={(e) => setField("phone", e.target.value)} />
            <input className={`${inputClass} md:col-span-2`} placeholder="Country *" value={form.country} onChange={(e) => setField("country", e.target.value)} />
          </div>

          {props.contextType === "property" ? (
            isVacation ? (
              <div className="mt-3 space-y-3">
                <div className="grid gap-3 md:grid-cols-2">
                  <label className={labelClass}>
                    Check-in date *
                    <input type="date" className={`mt-1 ${inputClass}`} value={form.checkIn} onChange={(e) => setField("checkIn", e.target.value)} />
                  </label>
                  <label className={labelClass}>
                    Check-out date *
                    <input type="date" className={`mt-1 ${inputClass}`} value={form.checkOut} onChange={(e) => setField("checkOut", e.target.value)} />
                  </label>
                </div>
                <div className="grid gap-3 md:grid-cols-3">
                  <label className={labelClass}>
                    Adults
                    <input type="number" min={1} className={`mt-1 ${inputClass}`} placeholder="Adults" value={form.adults} onChange={(e) => setField("adults", e.target.value)} />
                  </label>
                  <label className={labelClass}>
                    Children 3-14
                    <input type="number" min={0} className={`mt-1 ${inputClass}`} placeholder="0" value={form.children03to14} onChange={(e) => setField("children03to14", e.target.value)} />
                  </label>
                  <label className={labelClass}>
                    Children 0-3
                    <input type="number" min={0} className={`mt-1 ${inputClass}`} placeholder="0" value={form.children0to3} onChange={(e) => setField("children0to3", e.target.value)} />
                  </label>
                </div>
              </div>
            ) : isSale ? (
              <div className="mt-3 grid gap-3 md:grid-cols-2">
                <label className={labelClass}>Budget for purchase *<input className={`mt-1 ${inputClass}`} placeholder="e.g. 500000 EUR" value={form.saleBudget} onChange={(e) => setField("saleBudget", e.target.value)} /></label>
                <label className={labelClass}>Purchase timeline *<input className={`mt-1 ${inputClass}`} placeholder="e.g. within 3 months" value={form.timeline} onChange={(e) => setField("timeline", e.target.value)} /></label>
                <label className={`${labelClass} md:col-span-2`}>Purpose<input className={`mt-1 ${inputClass}`} placeholder="Investment / own use / mixed" value={form.investmentPurpose} onChange={(e) => setField("investmentPurpose", e.target.value)} /></label>
              </div>
            ) : (
              <div className="mt-3 grid gap-3 md:grid-cols-2">
                <label className={labelClass}>Move-in date *<input type="date" className={`mt-1 ${inputClass}`} value={form.moveInDate} onChange={(e) => setField("moveInDate", e.target.value)} /></label>
                <label className={labelClass}>Contract period (months) *<input type="number" min={1} className={`mt-1 ${inputClass}`} placeholder="e.g. 12" value={form.contractMonths} onChange={(e) => setField("contractMonths", e.target.value)} /></label>
                <label className={labelClass}>Monthly budget *<input className={`mt-1 ${inputClass}`} placeholder="e.g. 1800 EUR" value={form.monthlyBudget} onChange={(e) => setField("monthlyBudget", e.target.value)} /></label>
                <label className={labelClass}>Occupants<input type="number" min={1} className={`mt-1 ${inputClass}`} placeholder="Number of occupants" value={form.participants} onChange={(e) => setField("participants", e.target.value)} /></label>
              </div>
            )
          ) : (
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              <label className={labelClass}>Preferred date *<input type="date" className={`mt-1 ${inputClass}`} value={form.preferredDate} onChange={(e) => setField("preferredDate", e.target.value)} /></label>
              <label className={labelClass}>Preferred time<input className={`mt-1 ${inputClass}`} placeholder="e.g. 10:00 - 12:00" value={form.preferredTime} onChange={(e) => setField("preferredTime", e.target.value)} /></label>
              <label className={labelClass}>Participants<input type="number" min={1} className={`mt-1 ${inputClass}`} placeholder="Number" value={form.participants} onChange={(e) => setField("participants", e.target.value)} /></label>
            </div>
          )}

          <textarea className={`mt-3 ${inputClass}`} rows={3} placeholder="Message / request details" value={form.note} onChange={(e) => setField("note", e.target.value)} />
          <input className="hidden" value={form.hp} onChange={(e) => setField("hp", e.target.value)} tabIndex={-1} autoComplete="off" />

          <label className="mt-3 flex items-start gap-2 text-sm text-slate-700">
            <input type="checkbox" checked={form.terms} onChange={(e) => setField("terms", e.target.checked)} className="mt-1" />
            I agree to be contacted regarding this request.
          </label>

          <div className="mt-3">
            <button onClick={submit} disabled={sending} className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-60">
              {sending ? "Sending..." : isSale ? "Send sale inquiry" : isMonthly ? "Send monthly inquiry" : "Send request"}
            </button>
          </div>

          {msg && <p className={`mt-2 text-sm ${msg.includes("successfully") ? "text-emerald-700" : "text-red-600"}`}>{msg}</p>}
        </div>

        <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <h3 className="text-base font-semibold text-slate-900">Your Booking Agent</h3>
          <p className="mt-1 text-xs text-slate-600">Assigned after submission (demo card)</p>
          <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="h-40 bg-gradient-to-br from-cyan-100 to-slate-100 flex items-center justify-center">
              <span className="text-5xl">👤</span>
            </div>
            <div className="p-3">
              <p className="text-base font-semibold text-slate-900">ClickyTour Agent</p>
              <p className="text-sm text-slate-600">Guest Relations</p>
              <div className="mt-3 space-y-1.5 text-sm text-slate-700">
                <p>📧 info@clickytour.com</p>
                <p>💬 WhatsApp available</p>
              </div>
              <div className="mt-3 rounded-lg border border-cyan-200 bg-cyan-50 p-2 text-xs text-cyan-800">
                Usually replies within 1 business day.
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
