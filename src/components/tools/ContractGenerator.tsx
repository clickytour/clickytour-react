"use client";

import { useState, useMemo } from "react";

const CONTRACT_TYPES = [
  { id: "str", name: "Short-Term Rental Agreement", icon: "\uD83C\uDFD6\uFE0F" },
  { id: "ltr", name: "Long-Term Lease Agreement", icon: "\uD83C\uDFE0" },
  { id: "pmc", name: "Property Management Contract", icon: "\uD83D\uDCBC" },
  { id: "service", name: "Service Provider Agreement", icon: "\uD83D\uDD27" },
];

const GREEK_CLAUSES = {
  str: [
    { id: "aade", title: "AADE Registration", text: "The Property is registered with the Independent Authority for Public Revenue (AADE) under short-term rental registry number [____]. The Landlord confirms compliance with all applicable Greek tax obligations for short-term accommodation.", required: true },
    { id: "identity", title: "Guest Identification", text: "The Tenant shall provide valid identification (passport or national ID) upon check-in, as required by Greek law for short-term accommodation providers.", required: true },
    { id: "duration", title: "Rental Period", text: "The rental period begins on [CHECK-IN DATE] at [CHECK-IN TIME] and ends on [CHECK-OUT DATE] at [CHECK-OUT TIME]. The total rental period is [X] nights.", required: true },
    { id: "payment", title: "Payment Terms", text: "The total rental price is EUR [AMOUNT]. A deposit of [X]% is due upon booking confirmation. The remaining balance is due [X] days before check-in. Payment may be made via bank transfer or credit card.", required: true },
    { id: "security", title: "Security Deposit", text: "A security deposit of EUR [AMOUNT] is required. This deposit will be returned within [X] days after check-out, less any deductions for damages or excessive cleaning.", required: false },
    { id: "cancellation", title: "Cancellation Policy", text: "Free cancellation up to [X] days before check-in for a full refund. Cancellations within [X] days: [X]% refund. No-show: no refund.", required: false },
    { id: "houserules", title: "House Rules", text: "The Tenant agrees to: (a) not exceed the maximum occupancy of [X] persons; (b) observe quiet hours from 23:00 to 08:00; (c) not smoke indoors; (d) not host parties or events without prior written consent.", required: true },
    { id: "liability", title: "Liability & Insurance", text: "The Landlord shall not be liable for personal injury or loss of personal property during the rental period, except in cases of gross negligence. The Tenant is advised to obtain travel insurance.", required: false },
    { id: "governing", title: "Governing Law", text: "This agreement is governed by the laws of the Hellenic Republic. Any disputes shall be resolved by the competent courts of [CITY], Greece.", required: true },
  ],
  ltr: [
    { id: "duration", title: "Lease Duration", text: "The lease commences on [START DATE] and shall continue for a minimum period of [X] years, as stipulated by Greek Civil Code Article 574 et seq. for residential leases.", required: true },
    { id: "rent", title: "Monthly Rent", text: "The monthly rent is EUR [AMOUNT], payable on the [X]th of each month via bank transfer to account [IBAN]. Annual rent adjustment: [X]% or CPI-linked.", required: true },
    { id: "deposit", title: "Security Deposit", text: "The Tenant shall pay a security deposit equal to [X] months' rent (EUR [AMOUNT]). The deposit shall be returned within 30 days of lease termination, less any deductions for damages.", required: true },
    { id: "maintenance", title: "Maintenance Obligations", text: "The Landlord is responsible for structural repairs and major systems. The Tenant is responsible for day-to-day maintenance and minor repairs up to EUR [AMOUNT] per incident.", required: true },
    { id: "utilities", title: "Utilities", text: "The Tenant shall pay all utility costs (electricity, water, gas, internet) directly to providers. The Landlord shall transfer utility accounts to the Tenant's name within 15 days.", required: false },
    { id: "termination", title: "Early Termination", text: "Either party may terminate with [X] months' written notice. The Tenant shall pay a penalty of [X] months' rent for early termination within the first year.", required: false },
    { id: "subletting", title: "Subletting", text: "Subletting or listing on short-term rental platforms (Airbnb, Booking.com) is strictly prohibited without the Landlord's prior written consent.", required: true },
    { id: "governing", title: "Governing Law", text: "This agreement is governed by Greek Civil Code and relevant housing legislation. Disputes shall be resolved by the courts of [CITY], Greece.", required: true },
  ],
  pmc: [
    { id: "scope", title: "Scope of Services", text: "The Manager shall provide: (a) guest communication and booking management; (b) check-in/check-out coordination; (c) cleaning and maintenance scheduling; (d) pricing optimization; (e) OTA listing management; (f) financial reporting.", required: true },
    { id: "commission", title: "Management Fee", text: "The Manager shall receive [X]% of gross rental revenue as management fee. Fees are calculated monthly and deducted before owner disbursement.", required: true },
    { id: "disbursement", title: "Owner Disbursement", text: "Net rental income shall be transferred to the Owner's bank account by the [X]th of each month for the preceding month's bookings, accompanied by a detailed revenue statement.", required: true },
    { id: "exclusivity", title: "Exclusivity", text: "The Owner grants the Manager exclusive right to manage and market the Property for the duration of this agreement. The Owner shall not independently list or rent the Property.", required: false },
    { id: "maintenance", title: "Maintenance Authority", text: "The Manager is authorized to arrange repairs and maintenance up to EUR [AMOUNT] per incident without prior Owner approval. Expenses exceeding this amount require written consent.", required: true },
    { id: "insurance", title: "Insurance", text: "The Owner shall maintain adequate property and liability insurance. The Manager shall maintain professional indemnity insurance covering their management activities.", required: false },
    { id: "termination", title: "Termination", text: "Either party may terminate with [X] months' written notice. The Manager shall complete all pending bookings and provide a full handover report within 30 days of termination.", required: true },
    { id: "governing", title: "Governing Law", text: "This agreement is governed by Greek law. Disputes shall first be addressed through mediation; failing resolution, by the courts of [CITY], Greece.", required: true },
  ],
  service: [
    { id: "scope", title: "Service Description", text: "The Provider shall deliver [SERVICE TYPE] services as described in the attached Service Schedule, at the locations and frequencies agreed upon.", required: true },
    { id: "pricing", title: "Pricing & Payment", text: "Services shall be billed at EUR [AMOUNT] per [UNIT]. Invoices are due within [X] days. Late payments incur [X]% monthly interest.", required: true },
    { id: "quality", title: "Quality Standards", text: "The Provider shall perform all services to professional standards. The Client may request re-performance of substandard work at no additional cost.", required: true },
    { id: "scheduling", title: "Scheduling & Access", text: "The Provider shall coordinate service delivery times with the Client. Access to properties shall be facilitated via key/lockbox codes provided by the Client.", required: true },
    { id: "insurance", title: "Insurance & Liability", text: "The Provider shall maintain adequate professional liability insurance. The Provider accepts liability for damages caused during service delivery.", required: true },
    { id: "termination", title: "Termination", text: "Either party may terminate with [X] days' written notice. Ongoing scheduled services shall be completed unless otherwise agreed.", required: false },
    { id: "governing", title: "Governing Law", text: "This agreement is governed by Greek law. Disputes shall be resolved by the courts of [CITY], Greece.", required: true },
  ],
};

export default function ContractGenerator() {
  const [contractType, setContractType] = useState("str");
  const [landlordName, setLandlordName] = useState("");
  const [tenantName, setTenantName] = useState("");
  const [propertyAddress, setPropertyAddress] = useState("");
  const [enabledClauses, setEnabledClauses] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    Object.values(GREEK_CLAUSES).flat().forEach(c => { init[c.id] = c.required; });
    return init;
  });
  const [showPreview, setShowPreview] = useState(false);

  const clauses = GREEK_CLAUSES[contractType as keyof typeof GREEK_CLAUSES] || [];

  const toggleClause = (id: string, required: boolean) => {
    if (required) return;
    setEnabledClauses({ ...enabledClauses, [id]: !enabledClauses[id] });
  };

  const handleTypeChange = (type: string) => {
    setContractType(type);
    const init: Record<string, boolean> = { ...enabledClauses };
    GREEK_CLAUSES[type as keyof typeof GREEK_CLAUSES].forEach(c => {
      if (!(c.id in init)) init[c.id] = c.required;
    });
    setEnabledClauses(init);
  };

  const contractTitle = CONTRACT_TYPES.find(t => t.id === contractType)?.name || "";
  const activeClauses = clauses.filter(c => enabledClauses[c.id] !== false);

  const fullContract = useMemo(() => {
    const header = `${contractTitle.toUpperCase()}\n${"=".repeat(50)}\n\nDate: [DATE]\n\nParties:\n  Landlord/Client: ${landlordName || "[LANDLORD/CLIENT NAME]"}\n  Tenant/Provider: ${tenantName || "[TENANT/PROVIDER NAME]"}\n\nProperty/Location: ${propertyAddress || "[PROPERTY ADDRESS]"}\n\n${"=".repeat(50)}\n\n`;
    const body = activeClauses.map((c, i) => `Article ${i + 1}: ${c.title}\n\n${c.text}\n`).join("\n---\n\n");
    const footer = `\n${"=".repeat(50)}\n\nSIGNATURES\n\nLandlord/Client: _________________________  Date: ___________\n\nTenant/Provider: _________________________  Date: ___________\n\n\nNote: This is a template generated by ClickyTour. It should be reviewed by a qualified Greek lawyer before execution.`;
    return header + body + footer;
  }, [contractTitle, landlordName, tenantName, propertyAddress, activeClauses]);

  const handleCopy = () => {
    navigator.clipboard.writeText(fullContract);
  };

  if (showPreview) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-slate-900">Contract Preview</h3>
          <div className="flex gap-2">
            <button onClick={handleCopy} className="rounded-lg bg-cyan-600 px-4 py-2 text-xs font-semibold text-white hover:bg-cyan-700">Copy Text</button>
            <button onClick={() => setShowPreview(false)} className="rounded-lg border border-slate-300 px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50">Back to Editor</button>
          </div>
        </div>
        <div className="rounded-xl border border-slate-300 bg-white p-8 font-serif text-sm leading-relaxed whitespace-pre-line max-h-[600px] overflow-y-auto">
          {fullContract}
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Contract Type</label>
          <div className="grid grid-cols-2 gap-2">
            {CONTRACT_TYPES.map((t) => (
              <button key={t.id} onClick={() => handleTypeChange(t.id)} className={`rounded-lg border p-3 text-left transition ${contractType === t.id ? "border-cyan-600 bg-cyan-50" : "border-slate-200 hover:bg-slate-50"}`}>
                <span className="text-xl">{t.icon}</span>
                <p className={`text-xs font-semibold mt-1 ${contractType === t.id ? "text-cyan-700" : "text-slate-700"}`}>{t.name}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Landlord / Client Name</label>
            <input type="text" value={landlordName} onChange={(e) => setLandlordName(e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm" placeholder="Full legal name" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Tenant / Provider Name</label>
            <input type="text" value={tenantName} onChange={(e) => setTenantName(e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm" placeholder="Full legal name" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Property / Service Address</label>
          <input type="text" value={propertyAddress} onChange={(e) => setPropertyAddress(e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm" placeholder="Full address" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Contract Clauses ({activeClauses.length} / {clauses.length})</label>
          <div className="space-y-2">
            {clauses.map((c) => (
              <div key={c.id} className={`rounded-xl border p-3 transition ${enabledClauses[c.id] !== false ? "border-cyan-200 bg-cyan-50/50" : "border-slate-200 bg-slate-50 opacity-60"}`}>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={enabledClauses[c.id] !== false} onChange={() => toggleClause(c.id, c.required)} disabled={c.required} className="rounded border-slate-300" />
                  <span className="text-sm font-medium text-slate-800">{c.title}</span>
                  {c.required && <span className="rounded bg-red-100 px-1.5 py-0.5 text-[9px] font-bold text-red-600">Required</span>}
                </label>
                <p className="text-xs text-slate-500 mt-1 ml-6 line-clamp-2">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <button onClick={() => setShowPreview(true)} className="w-full rounded-xl bg-cyan-600 px-4 py-3 text-sm font-bold text-white hover:bg-cyan-700 transition">
          Preview Contract
        </button>

        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h4 className="text-sm font-bold text-slate-900 mb-2">Contract Summary</h4>
          <div className="space-y-1.5 text-sm">
            <div className="flex justify-between"><span className="text-slate-500">Type</span><span className="font-semibold">{contractTitle}</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Clauses</span><span className="font-semibold">{activeClauses.length}</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Required</span><span className="font-semibold">{clauses.filter(c => c.required).length}</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Optional</span><span className="font-semibold">{activeClauses.length - clauses.filter(c => c.required).length}</span></div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h4 className="text-sm font-bold text-slate-900 mb-2">Export Options</h4>
          <div className="space-y-2">
            <button onClick={handleCopy} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 text-left">&#128203; Copy as plain text</button>
            <button className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs font-medium text-slate-400 text-left cursor-not-allowed">&#128196; Export as PDF (coming soon)</button>
            <button className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs font-medium text-slate-400 text-left cursor-not-allowed">&#9997; E-signature (coming soon)</button>
          </div>
        </div>

        <div className="rounded-xl border border-red-200 bg-red-50 p-3">
          <p className="text-[10px] text-red-700">
            <strong>Legal Disclaimer:</strong> This tool generates contract templates based on common Greek legal practices. Templates are NOT a substitute for professional legal advice. Always have contracts reviewed by a qualified Greek lawyer before execution.
          </p>
        </div>
      </div>
    </div>
  );
}
