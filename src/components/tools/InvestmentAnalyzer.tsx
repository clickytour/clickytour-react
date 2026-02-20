"use client";

import { useState, useMemo } from "react";

const REGIONS = [
  { name: "Athens", avgNightly: 85, avgOccupancy: 0.72, taxRate: 0.15 },
  { name: "Thessaloniki", avgNightly: 70, avgOccupancy: 0.65, taxRate: 0.15 },
  { name: "Halkidiki", avgNightly: 95, avgOccupancy: 0.55, taxRate: 0.15 },
  { name: "Crete (North)", avgNightly: 100, avgOccupancy: 0.6, taxRate: 0.15 },
  { name: "Crete (South)", avgNightly: 90, avgOccupancy: 0.5, taxRate: 0.15 },
  { name: "Santorini", avgNightly: 180, avgOccupancy: 0.65, taxRate: 0.15 },
  { name: "Mykonos", avgNightly: 200, avgOccupancy: 0.6, taxRate: 0.15 },
  { name: "Rhodes", avgNightly: 90, avgOccupancy: 0.58, taxRate: 0.15 },
  { name: "Corfu", avgNightly: 85, avgOccupancy: 0.55, taxRate: 0.15 },
  { name: "Peloponnese", avgNightly: 75, avgOccupancy: 0.48, taxRate: 0.15 },
  { name: "Pelion", avgNightly: 80, avgOccupancy: 0.5, taxRate: 0.15 },
];

export default function InvestmentAnalyzer() {
  const [region, setRegion] = useState(0);
  const [purchasePrice, setPurchasePrice] = useState(200000);
  const [renovationCost, setRenovationCost] = useState(30000);
  const [nightlyRate, setNightlyRate] = useState(REGIONS[0].avgNightly);
  const [occupancy, setOccupancy] = useState(REGIONS[0].avgOccupancy * 100);
  const [annualExpenses, setAnnualExpenses] = useState(8000);
  const [mortgageRate, setMortgageRate] = useState(0);
  const [mortgageYears, setMortgageYears] = useState(20);

  const handleRegionChange = (i: number) => {
    setRegion(i);
    setNightlyRate(REGIONS[i].avgNightly);
    setOccupancy(REGIONS[i].avgOccupancy * 100);
  };

  const calc = useMemo(() => {
    const r = REGIONS[region];
    const totalInvestment = purchasePrice + renovationCost;
    const nightsBooked = Math.round(365 * (occupancy / 100));
    const grossRevenue = nightlyRate * nightsBooked;
    const taxes = grossRevenue * r.taxRate;
    const netRevenue = grossRevenue - taxes - annualExpenses;
    const monthlyCashFlow = netRevenue / 12;
    const roi = (netRevenue / totalInvestment) * 100;
    const breakEvenYears = netRevenue > 0 ? totalInvestment / netRevenue : Infinity;

    let monthlyMortgage = 0;
    if (mortgageRate > 0) {
      const monthlyRate = mortgageRate / 100 / 12;
      const nPayments = mortgageYears * 12;
      monthlyMortgage = (totalInvestment * monthlyRate * Math.pow(1 + monthlyRate, nPayments)) / (Math.pow(1 + monthlyRate, nPayments) - 1);
    }
    const netAfterMortgage = monthlyCashFlow - monthlyMortgage;

    return { totalInvestment, nightsBooked, grossRevenue, taxes, netRevenue, monthlyCashFlow, roi, breakEvenYears, monthlyMortgage, netAfterMortgage };
  }, [region, purchasePrice, renovationCost, nightlyRate, occupancy, annualExpenses, mortgageRate, mortgageYears]);

  const fmt = (n: number) => new Intl.NumberFormat("en", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
  const pct = (n: number) => n.toFixed(1) + "%";

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Region</label>
          <select value={region} onChange={(e) => handleRegionChange(+e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm">
            {REGIONS.map((r, i) => <option key={i} value={i}>{r.name} (avg {r.avgNightly}/night, {Math.round(r.avgOccupancy * 100)}% occ.)</option>)}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Purchase Price</label>
            <input type="number" min={0} step={10000} value={purchasePrice} onChange={(e) => setPurchasePrice(+e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Renovation Cost</label>
            <input type="number" min={0} step={5000} value={renovationCost} onChange={(e) => setRenovationCost(+e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Nightly Rate</label>
            <input type="number" min={0} step={5} value={nightlyRate} onChange={(e) => setNightlyRate(+e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Occupancy %</label>
            <input type="number" min={0} max={100} value={occupancy} onChange={(e) => setOccupancy(Math.min(100, +e.target.value))} className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Annual Expenses (maintenance, cleaning, utilities, insurance)</label>
          <input type="number" min={0} step={500} value={annualExpenses} onChange={(e) => setAnnualExpenses(+e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm" />
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-700 mb-3">Mortgage Scenario (optional)</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-slate-500 mb-1">Interest Rate %</label>
              <input type="number" min={0} max={15} step={0.1} value={mortgageRate} onChange={(e) => setMortgageRate(+e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="block text-xs text-slate-500 mb-1">Term (years)</label>
              <input type="number" min={5} max={30} value={mortgageYears} onChange={(e) => setMortgageYears(+e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-700 p-5 text-white">
            <p className="text-xs font-medium text-emerald-100">Annual ROI</p>
            <p className="text-3xl font-bold mt-1">{pct(calc.roi)}</p>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-cyan-600 to-cyan-700 p-5 text-white">
            <p className="text-xs font-medium text-cyan-100">Break-Even</p>
            <p className="text-3xl font-bold mt-1">{calc.breakEvenYears === Infinity ? "N/A" : calc.breakEvenYears.toFixed(1) + " yrs"}</p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3">
          <h3 className="font-bold text-slate-900">Annual P&L</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-slate-500">Total Investment</span><span className="font-semibold">{fmt(calc.totalInvestment)}</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Nights Booked</span><span className="font-semibold">{calc.nightsBooked} nights/yr</span></div>
            <hr className="border-slate-100" />
            <div className="flex justify-between"><span className="text-emerald-600">Gross Revenue</span><span className="font-semibold text-emerald-600">{fmt(calc.grossRevenue)}</span></div>
            <div className="flex justify-between"><span className="text-red-500">Taxes (~{Math.round(REGIONS[region].taxRate * 100)}%)</span><span className="text-red-500">-{fmt(calc.taxes)}</span></div>
            <div className="flex justify-between"><span className="text-red-500">Expenses</span><span className="text-red-500">-{fmt(annualExpenses)}</span></div>
            <hr className="border-slate-100" />
            <div className="flex justify-between text-base"><span className="font-bold">Net Annual Income</span><span className={`font-bold ${calc.netRevenue >= 0 ? "text-emerald-600" : "text-red-600"}`}>{fmt(calc.netRevenue)}</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Monthly Cash Flow</span><span className="font-semibold">{fmt(calc.monthlyCashFlow)}</span></div>
          </div>
        </div>

        {mortgageRate > 0 && (
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <h4 className="text-sm font-bold text-amber-800">With Mortgage</h4>
            <div className="mt-2 space-y-1 text-sm">
              <div className="flex justify-between"><span className="text-amber-700">Monthly Payment</span><span className="font-semibold text-amber-800">{fmt(calc.monthlyMortgage)}</span></div>
              <div className="flex justify-between"><span className="text-amber-700">Net After Mortgage</span><span className={`font-bold ${calc.netAfterMortgage >= 0 ? "text-emerald-600" : "text-red-600"}`}>{fmt(calc.netAfterMortgage)}/mo</span></div>
            </div>
          </div>
        )}

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs text-slate-500">
            <strong>Disclaimer:</strong> Estimates based on average market data for {REGIONS[region].name}. Tax calculations use simplified Greek property income tax rates. 
            Consult a licensed tax advisor and real estate professional before making investment decisions.
          </p>
        </div>
      </div>
    </div>
  );
}
