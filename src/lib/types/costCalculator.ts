export interface CalculatorInputs {
  postcode: string;
  annualMiles: number;
  fuelType: "petrol" | "diesel";
  mpg: number;
  homeElectricityRatePence: number;
  publicChargingRatePence: number;
  homeChargePercent: number;
  evMilesPerKwh: number;
  fuelPricePencePerLitre: number;
  evPricePremium: number;
  petrolPurchasePrice: number;
  ownershipYears: number;
  petrolMaintenanceAnnual: number;
  evMaintenanceAnnual: number;
  petrolVedAnnual: number;
  evVedAnnual: number;
  petrolResaleValuePercent: number;
  evResaleValuePercent: number;
}

export interface CalculatorResults {
  petrolCostPerMile: number;
  evCostPerMile: number;
  petrolCostPerYear: number;
  evCostPerYear: number;
  annualSaving: number;
  monthlySaving: number;
  fiveYearSaving: number;
  tenYearSaving: number;
  breakEvenYears: number | null;
  breakEvenMiles: number | null;
  evIsCheaper: boolean;
  blendedElectricityRatePence: number;
  litresPerYear: number;
  kWhPerYear: number;
}

export interface CostProjection {
  year: number;
  evCumulative: number;
  petrolCumulative: number;
  savings: number;
}

export interface TcoProjection {
  year: number;
  evCumulative: number;
  petrolCumulative: number;
  difference: number;
}

export interface TcoCalculationResults {
  baseResults: CalculatorResults;
  projections: TcoProjection[];
  crossoverYear: number | null;
  totalDifference: number;
  petrolPurchasePrice: number;
  evPurchasePrice: number;
  ownershipYears: number;
  petrolMaintenanceAnnual: number;
  evMaintenanceAnnual: number;
  petrolVedAnnual: number;
  evVedAnnual: number;
  petrolResaleValuePercent: number;
  evResaleValuePercent: number;
}

export interface LocalPrices {
  petrolPencePerLitre: number;
  dieselPencePerLitre: number;
  homeElectricityPencePerKwh: number;
  publicChargingPencePerKwh: number;
  source: "live" | "fallback";
  region?: string;
}

export interface PostcodeData {
  postcode: string;
  normalised: string;
  latitude: number | null;
  longitude: number | null;
  region: string | null;
  isValid: boolean;
}

export type ValidationErrors = Partial<Record<keyof CalculatorInputs, string>>;

export type CalculatorViewMode = "quick" | "tco";
