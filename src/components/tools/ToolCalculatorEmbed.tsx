"use client";

import dynamic from "next/dynamic";

const calculators: Record<string, React.ComponentType> = {
  "trip-cost-calculator": dynamic(() => import("./TripCostCalculator")),
  "investment-analyzer": dynamic(() => import("./InvestmentAnalyzer")),
  "commission-calculator": dynamic(() => import("./CommissionCalculator")),
  "rental-income-estimator": dynamic(() => import("./RentalIncomeEstimator")),
};

export default function ToolCalculatorEmbed({ slug }: { slug: string }) {
  const Calculator = calculators[slug];
  if (!Calculator) return null;
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Try It Now</h2>
        <p className="text-slate-500 mb-8">Interactive calculator — no signup required.</p>
        <Calculator />
      </div>
    </section>
  );
}
