"use client";

import { useState, useMemo } from "react";

const TIERS = [
  { name: "Starter", rate: 0.08, minBookings: 0, color: "slate" },
  { name: "Bronze", rate: 0.10, minBookings: 5, color: "amber" },
  { name: "Silver", rate: 0.12, minBookings: 15, color: "slate" },
  { name: "Gold", rate: 0.15, minBookings: 30, color: "yellow" },
  { name: "Platinum", rate: 0.18, minBookings: 50, color: "violet" },
];

const PROPERTY_TYPES = [
  { name: "Vacation Rental", avgBooking: 1200, avgNights: 7 },
  { name: "Luxury Villa", avgBooking: 3500, avgNights: 7 },
  { name: "City Apartment", avgBooking: 600, avgNights: 4 },
  { name: "Hotel Room", avgBooking: 800, avgNights: 5 },
  { name: "Real Estate Sale", avgBooking: 150000, avgNights: 0 },
];

export default function CommissionCalculator() {
  const [tierIdx, setTierIdx] = useState(1);
  const [propType, setPropType] = useState(0);
  const [bookingValue, setBookingValue] = useState(PROPERTY_TYPES[0].avgBooking);
  const [monthlyBookings, setMonthlyBookings] = useState(8);
  const [customRate, setCustomRate] = useState(false);
  const [rate, setRate] = useState(TIERS[1].rate * 100);

  const handleTierChange = (i: number) => {
    setTierIdx(i);
    if (!customRate) setRate(TIERS[i].rate * 100);
  };

  const handlePropChange = (i: number) => {
    setPropType(i);
    setBookingValue(PROPERTY_TYPES[i].avgBooking);
  };

  const calc = useMemo(() => {
    const commRate = rate / 100;
    const perBooking = bookingValue * commRate;
    const monthly = perBooking * monthlyBookings;
    const annual = monthly * 12;
    const annualBookings = monthlyBookings * 12;

    // Tier progression
    const currentTier = TIERS[tierIdx];
    const nextTier = tierIdx < TIERS.length - 1 ? TIERS[tierIdx + 1] : null;
    const bookingsToNext = nextTier ? Math.max(0, nextTier.minBookings - annualBookings) : 0;
    const nextTierAnnual = nextTier ? bookingValue * nextTier.rate * annualBookings : 0;
    const uplift = nextTier ? nextTierAnnual - annual : 0;

    return { perBooking, monthly, annual, annualBookings, currentTier, nextTier, bookingsToNext, uplift };
  }, [tierIdx, bookingValue, monthlyBookings, rate]);

  const fmt = (n: number) => new Intl.NumberFormat("en", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Commission Tier</label>
          <div className="grid grid-cols-5 gap-1">
            {TIERS.map((t, i) => (
              <button key={i} onClick={() => handleTierChange(i)} className={`rounded-lg border px-2 py-2.5 text-center transition ${tierIdx === i ? "border-cyan-600 bg-cyan-50" : "border-slate-200 hover:bg-slate-50"}`}>
                <p className={`text-xs font-bold ${tierIdx === i ? "text-cyan-700" : "text-slate-700"}`}>{t.name}</p>
                <p className={`text-lg font-bold ${tierIdx === i ? "text-cyan-600" : "text-slate-500"}`}>{Math.round(t.rate * 100)}%</p>
              </button>
            ))}
          </div>
        </div>

        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={customRate} onChange={(e) => { setCustomRate(e.target.checked); if (!e.target.checked) setRate(TIERS[tierIdx].rate * 100); }} className="rounded border-slate-300" />
          <span className="text-sm text-slate-600">Custom commission rate</span>
        </label>
        {customRate && (
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Commission Rate (%)</label>
            <input type="number" min={1} max={50} step={0.5} value={rate} onChange={(e) => setRate(+e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm" />
          </div>
        )}

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Property Type</label>
          <select value={propType} onChange={(e) => handlePropChange(+e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm">
            {PROPERTY_TYPES.map((p, i) => <option key={i} value={i}>{p.name} (avg {fmt(p.avgBooking)})</option>)}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Average Booking Value</label>
          <input type="number" min={0} step={100} value={bookingValue} onChange={(e) => setBookingValue(+e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Bookings per Month</label>
          <input type="range" min={1} max={50} value={monthlyBookings} onChange={(e) => setMonthlyBookings(+e.target.value)} className="w-full accent-cyan-600" />
          <div className="flex justify-between text-xs text-slate-500 mt-1">
            <span>1</span>
            <span className="font-semibold text-cyan-700">{monthlyBookings} bookings/mo</span>
            <span>50</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-700 p-4 text-white">
            <p className="text-[10px] font-medium text-indigo-200">Per Booking</p>
            <p className="text-xl font-bold mt-1">{fmt(calc.perBooking)}</p>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-cyan-600 to-cyan-700 p-4 text-white">
            <p className="text-[10px] font-medium text-cyan-200">Monthly</p>
            <p className="text-xl font-bold mt-1">{fmt(calc.monthly)}</p>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-700 p-4 text-white">
            <p className="text-[10px] font-medium text-emerald-200">Annual</p>
            <p className="text-xl font-bold mt-1">{fmt(calc.annual)}</p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3">
          <h3 className="font-bold text-slate-900">Earnings Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-slate-500">Current Tier</span><span className="font-semibold">{calc.currentTier.name} ({Math.round(rate)}%)</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Avg Booking Value</span><span className="font-semibold">{fmt(bookingValue)}</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Annual Bookings</span><span className="font-semibold">{calc.annualBookings}</span></div>
            <hr className="border-slate-100" />
            <div className="flex justify-between"><span className="text-slate-500">Commission Per Booking</span><span className="font-bold text-emerald-600">{fmt(calc.perBooking)}</span></div>
            <div className="flex justify-between text-base"><span className="font-bold">Projected Annual Income</span><span className="font-bold text-emerald-600">{fmt(calc.annual)}</span></div>
          </div>
        </div>

        {calc.nextTier && (
          <div className="rounded-xl border border-violet-200 bg-violet-50 p-4">
            <h4 className="text-sm font-bold text-violet-800">Next Tier: {calc.nextTier.name} ({Math.round(calc.nextTier.rate * 100)}%)</h4>
            <p className="text-xs text-violet-600 mt-1">
              {calc.bookingsToNext > 0
                ? `Need ${calc.bookingsToNext} more bookings/year to unlock. Potential uplift: +${fmt(calc.uplift)}/year`
                : `You already qualify! Upgrade for +${fmt(calc.uplift)}/year`}
            </p>
          </div>
        )}

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs text-slate-500">
            <strong>Note:</strong> Commission rates and tiers are illustrative. Actual rates depend on your partnership agreement with ClickyTour. 
            Real estate sales commissions may have different structures.
          </p>
        </div>
      </div>
    </div>
  );
}
