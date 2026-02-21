"use client";

import { useState, useMemo } from "react";

const ZONES = [
  { name: "Athens (Center, South, Piraeus)", threshold: 800000, avgPrice: 3200, rental: 0.045, growth: 0.06 },
  { name: "Athens (North & East Suburbs)", threshold: 800000, avgPrice: 2800, rental: 0.04, growth: 0.05 },
  { name: "Thessaloniki", threshold: 800000, avgPrice: 2200, rental: 0.045, growth: 0.05 },
  { name: "Mykonos", threshold: 800000, avgPrice: 6500, rental: 0.05, growth: 0.04 },
  { name: "Santorini", threshold: 800000, avgPrice: 5500, rental: 0.05, growth: 0.04 },
  { name: "Rhodes", threshold: 400000, avgPrice: 1800, rental: 0.04, growth: 0.04 },
  { name: "Corfu", threshold: 400000, avgPrice: 2000, rental: 0.04, growth: 0.04 },
  { name: "Crete (Chania)", threshold: 400000, avgPrice: 2200, rental: 0.045, growth: 0.05 },
  { name: "Crete (Heraklion)", threshold: 400000, avgPrice: 1900, rental: 0.04, growth: 0.05 },
  { name: "Halkidiki", threshold: 250000, avgPrice: 1600, rental: 0.04, growth: 0.06 },
  { name: "Peloponnese", threshold: 250000, avgPrice: 1200, rental: 0.035, growth: 0.05 },
  { name: "Pelion", threshold: 250000, avgPrice: 1100, rental: 0.035, growth: 0.04 },
  { name: "Kavala / Thasos", threshold: 250000, avgPrice: 1000, rental: 0.035, growth: 0.04 },
  { name: "Other Islands (<3,100 pop.)", threshold: 250000, avgPrice: 1400, rental: 0.04, growth: 0.05 },
  { name: "Other Mainland Greece", threshold: 250000, avgPrice: 900, rental: 0.03, growth: 0.04 },
];

const COSTS = {
  transferTax: 0.0324,
  notaryFees: 0.015,
  legalFees: 0.02,
  agentFees: 0.02,
  registrationFees: 0.005,
};

const RESIDENCY_BENEFITS = [
  "Live and work in Greece",
  "Visa-free travel across 27 Schengen countries",
  "Access to Greek healthcare and education",
  "Include spouse, children under 21, and parents",
  "Path to permanent residency (5 years)",
  "Path to Greek/EU citizenship (7 years)",
  "No minimum stay requirement",
  "Renewable every 5 years",
];

export default function GoldenVisaCalculator() {
  const [zoneIdx, setZoneIdx] = useState(9); // Default: Halkidiki
  const [propertyValue, setPropertyValue] = useState(ZONES[9].threshold);
  const [sqm, setSqm] = useState(80);
  const [rentalStrategy, setRentalStrategy] = useState<"str" | "ltr" | "none">("str");
  const [familyMembers, setFamilyMembers] = useState(1);
  const [holdYears, setHoldYears] = useState(5);

  const zone = ZONES[zoneIdx];

  const handleZoneChange = (i: number) => {
    setZoneIdx(i);
    setPropertyValue(Math.max(ZONES[i].threshold, propertyValue));
  };

  const calc = useMemo(() => {
    const eligible = propertyValue >= zone.threshold;
    const transferTax = propertyValue * COSTS.transferTax;
    const notary = propertyValue * COSTS.notaryFees;
    const legal = propertyValue * COSTS.legalFees;
    const agent = propertyValue * COSTS.agentFees;
    const registration = propertyValue * COSTS.registrationFees;
    const totalAcquisitionCost = propertyValue + transferTax + notary + legal + agent + registration;
    const closingCosts = transferTax + notary + legal + agent + registration;
    const closingPct = (closingCosts / propertyValue) * 100;

    // Rental income
    const annualRentalGross = rentalStrategy === "none" ? 0 : propertyValue * zone.rental * (rentalStrategy === "str" ? 1.3 : 1);
    const rentalExpenses = annualRentalGross * (rentalStrategy === "str" ? 0.3 : 0.15);
    const rentalTax = (annualRentalGross - rentalExpenses) * 0.15;
    const annualRentalNet = annualRentalGross - rentalExpenses - rentalTax;

    // Hold period projection
    const futureValue = propertyValue * Math.pow(1 + zone.growth, holdYears);
    const appreciation = futureValue - propertyValue;
    const totalRentalIncome = annualRentalNet * holdYears;
    const totalReturn = appreciation + totalRentalIncome - closingCosts;
    const totalROI = (totalReturn / totalAcquisitionCost) * 100;
    const annualROI = totalROI / holdYears;

    // Per family member cost
    const costPerMember = totalAcquisitionCost / familyMembers;

    // Residency application costs (approximate)
    const applicationFees = 2000 * familyMembers;

    return {
      eligible, transferTax, notary, legal, agent, registration,
      totalAcquisitionCost, closingCosts, closingPct,
      annualRentalGross, rentalExpenses, rentalTax, annualRentalNet,
      futureValue, appreciation, totalRentalIncome, totalReturn, totalROI, annualROI,
      costPerMember, applicationFees,
    };
  }, [zoneIdx, propertyValue, rentalStrategy, familyMembers, holdYears, zone]);

  const fmt = (n: number) => new Intl.NumberFormat("en", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
  const pct = (n: number) => n.toFixed(1) + "%";

  return (
    <div className="space-y-8">
      {/* Zone Map Summary */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "250,000", value: 250000, zones: "Mainland, small islands", color: "emerald" },
          { label: "400,000", value: 400000, zones: "Crete, Rhodes, Corfu, large islands", color: "amber" },
          { label: "800,000", value: 800000, zones: "Athens, Thessaloniki, Mykonos, Santorini", color: "rose" },
        ].map((t) => (
          <a key={t.label} href={`/real-estate-buy?minPrice=${t.value}&intent=golden-visa`} className={`block rounded-xl border-2 p-4 text-center transition hover:shadow-lg cursor-pointer ${zone.threshold === t.value ? `border-${t.color}-500 bg-${t.color}-50` : "border-slate-200 bg-white hover:border-slate-300"}`}>
            <p className={`text-2xl font-bold ${zone.threshold === t.value ? `text-${t.color}-700` : "text-slate-700"}`}>{t.label}</p>
            <p className="text-xs text-slate-500 mt-1">{t.zones}</p>
            <p className={`text-[10px] mt-2 font-semibold ${zone.threshold === t.value ? `text-${t.color}-600` : "text-cyan-600"}`}>Search properties &rarr;</p>
          </a>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Investment Zone</label>
            <select value={zoneIdx} onChange={(e) => handleZoneChange(+e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm">
              {ZONES.map((z, i) => <option key={i} value={i}>{z.name} (min {fmt(z.threshold)})</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Property Value</label>
            <input type="number" min={zone.threshold} step={25000} value={propertyValue} onChange={(e) => setPropertyValue(Math.max(zone.threshold, +e.target.value))} className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm" />
            {!calc.eligible && <p className="text-xs text-red-500 mt-1">Minimum investment for this zone: {fmt(zone.threshold)}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Property Size (m2)</label>
            <input type="number" min={20} max={1000} value={sqm} onChange={(e) => setSqm(+e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm" />
            <p className="text-xs text-slate-500 mt-1">Price per m2: {fmt(propertyValue / sqm)} (zone avg: {fmt(zone.avgPrice)}/m2)</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Rental Strategy</label>
            <div className="flex gap-2">
              {([["str", "Short-Term Rental"], ["ltr", "Long-Term Rental"], ["none", "Personal Use"]] as const).map(([k, v]) => (
                <button key={k} onClick={() => setRentalStrategy(k as any)} className={`flex-1 rounded-lg border px-3 py-2 text-xs font-medium transition ${rentalStrategy === k ? "border-cyan-600 bg-cyan-50 text-cyan-700" : "border-slate-200 text-slate-600 hover:bg-slate-50"}`}>
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Family Members</label>
              <input type="number" min={1} max={10} value={familyMembers} onChange={(e) => setFamilyMembers(Math.max(1, +e.target.value))} className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Hold Period (years)</label>
              <input type="number" min={1} max={30} value={holdYears} onChange={(e) => setHoldYears(Math.max(1, +e.target.value))} className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm" />
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <div className={`rounded-2xl p-6 text-white ${calc.eligible ? "bg-gradient-to-br from-emerald-600 to-emerald-700" : "bg-gradient-to-br from-red-600 to-red-700"}`}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{calc.eligible ? "\u2705" : "\u274C"}</span>
              <p className="text-lg font-bold">{calc.eligible ? "Golden Visa Eligible" : "Below Minimum Threshold"}</p>
            </div>
            <p className="text-sm opacity-80">{calc.eligible ? `This ${fmt(propertyValue)} investment in ${zone.name} meets the ${fmt(zone.threshold)} minimum.` : `Increase investment to at least ${fmt(zone.threshold)} for this zone.`}</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold text-slate-900 mb-3">Total Acquisition Cost</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-slate-500">Property Price</span><span className="font-semibold">{fmt(propertyValue)}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Transfer Tax (3.24%)</span><span>{fmt(calc.transferTax)}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Notary Fees (~1.5%)</span><span>{fmt(calc.notary)}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Legal Fees (~2%)</span><span>{fmt(calc.legal)}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Agent Fees (~2%)</span><span>{fmt(calc.agent)}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Registration (~0.5%)</span><span>{fmt(calc.registration)}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Application Fees</span><span>~{fmt(calc.applicationFees)}</span></div>
              <hr className="border-slate-100" />
              <div className="flex justify-between text-base"><span className="font-bold">Total Investment</span><span className="font-bold">{fmt(calc.totalAcquisitionCost + calc.applicationFees)}</span></div>
              <p className="text-xs text-slate-400">Closing costs: ~{pct(calc.closingPct)} of property price</p>
            </div>
          </div>

          {rentalStrategy !== "none" && (
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-slate-900 mb-3">Annual Rental Income</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-emerald-600">Gross Rental</span><span className="font-semibold text-emerald-600">{fmt(calc.annualRentalGross)}</span></div>
                <div className="flex justify-between"><span className="text-red-500">Expenses ({rentalStrategy === "str" ? "30%" : "15%"})</span><span className="text-red-500">-{fmt(calc.rentalExpenses)}</span></div>
                <div className="flex justify-between"><span className="text-red-500">Tax (15%)</span><span className="text-red-500">-{fmt(calc.rentalTax)}</span></div>
                <hr className="border-slate-100" />
                <div className="flex justify-between"><span className="font-bold">Net Annual Income</span><span className="font-bold text-emerald-600">{fmt(calc.annualRentalNet)}</span></div>
                <p className="text-xs text-slate-400">Yield: {pct((calc.annualRentalNet / propertyValue) * 100)} net</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-gradient-to-br from-cyan-600 to-cyan-700 p-4 text-white">
              <p className="text-[10px] font-medium text-cyan-200">{holdYears}-Year ROI</p>
              <p className="text-2xl font-bold mt-1">{pct(calc.totalROI)}</p>
              <p className="text-xs text-cyan-200">{pct(calc.annualROI)}/year</p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-violet-600 to-violet-700 p-4 text-white">
              <p className="text-[10px] font-medium text-violet-200">Cost per Family Member</p>
              <p className="text-2xl font-bold mt-1">{fmt(calc.costPerMember)}</p>
              <p className="text-xs text-violet-200">{familyMembers} {familyMembers === 1 ? "person" : "people"}</p>
            </div>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 p-5 text-white">
            <h3 className="font-bold mb-3">{holdYears}-Year Projection</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-slate-400">Property Appreciation</span><span className="text-emerald-400">+{fmt(calc.appreciation)}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Total Rental Income</span><span className="text-emerald-400">+{fmt(calc.totalRentalIncome)}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Closing Costs</span><span className="text-red-400">-{fmt(calc.closingCosts)}</span></div>
              <hr className="border-slate-700" />
              <div className="flex justify-between text-base"><span className="font-bold">Estimated Total Return</span><span className={`font-bold ${calc.totalReturn >= 0 ? "text-emerald-400" : "text-red-400"}`}>{fmt(calc.totalReturn)}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Future Property Value</span><span className="font-semibold">{fmt(calc.futureValue)}</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Residency Benefits */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Greek Golden Visa Benefits</h3>
        <div className="grid gap-2 sm:grid-cols-2">
          {RESIDENCY_BENEFITS.map((b, i) => (
            <div key={i} className="flex items-start gap-2">
              <svg className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span className="text-sm text-slate-700">{b}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA: Search Real Estate */}
      <div className="rounded-2xl bg-gradient-to-r from-cyan-700 to-blue-800 p-5 text-white">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <h4 className="text-lg font-bold">Find Golden Visa Properties on ClickyTour</h4>
            <p className="text-sm text-cyan-100 mt-1">
              Browse real estate listings across Greece with verified sale prices and locations.
              Filter by region, price range, and property type to find your Golden Visa investment.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px]">&#10003; Verified Listings</span>
              <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px]">&#10003; Sale Prices</span>
              <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px]">&#10003; Place ID / Location Data</span>
              <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px]">&#10003; Direct Owner Contact</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <a href={`/real-estate-buy?minPrice=${zone.threshold}&region=${encodeURIComponent(zone.name.split(" (")[0])}`} className="rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-cyan-700 text-center hover:bg-cyan-50 whitespace-nowrap">
              Search Properties for Sale
            </a>
            <a href="/directory/agents/category/real-estate-brokers" className="rounded-lg border border-white/40 px-5 py-2 text-xs font-medium text-white text-center hover:bg-white/10 whitespace-nowrap">
              Find a Real Estate Agent
            </a>
            <a href={`/directory/property-managers/${zone.name.split(" (")[0].toLowerCase().replace(/\s+/g, "-").replace(/[\/&]/g, "")}`} className="rounded-lg border border-white/40 px-5 py-2 text-xs font-medium text-white text-center hover:bg-white/10 whitespace-nowrap">
              Verified PMCs in {zone.name.split(" (")[0]}
            </a>
            <a href="/owners-real-estate-invest" className="rounded-lg border border-white/40 px-5 py-2 text-xs font-medium text-white text-center hover:bg-white/10 whitespace-nowrap">
              Investment Guide
            </a>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
        <p className="text-xs text-amber-800">
          <strong>Important Disclaimer:</strong> This calculator provides estimates based on publicly available data as of early 2026. Golden Visa thresholds, tax rates, and legal requirements may change. 
          Consult a licensed Greek immigration lawyer and financial advisor before making investment decisions. ClickyTour does not provide legal or financial advice.
        </p>
      </div>
    </div>
  );
}
