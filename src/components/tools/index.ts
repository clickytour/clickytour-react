export { default as TripCostCalculator } from "./TripCostCalculator";
export { default as InvestmentAnalyzer } from "./InvestmentAnalyzer";
export { default as CommissionCalculator } from "./CommissionCalculator";
export { default as RentalIncomeEstimator } from "./RentalIncomeEstimator";

export const CALCULATOR_SLUGS: Record<string, string> = {
  "trip-cost-calculator": "TripCostCalculator",
  "investment-analyzer": "InvestmentAnalyzer",
  "commission-calculator": "CommissionCalculator",
  "rental-income-estimator": "RentalIncomeEstimator",
};
