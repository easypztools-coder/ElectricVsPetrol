import type {
  CalculatorInputs,
  CalculatorResults,
  CostProjection,
  ValidationErrors,
} from "@/lib/types/costCalculator";

export const LITRES_PER_GALLON = 4.54609;
export const DEFAULT_EV_PRICE_PREMIUM = 2500;

export function calculateEvPetrolCosts(
  inputs: CalculatorInputs
): CalculatorResults {
  const {
    annualMiles,
    mpg,
    homeElectricityRatePence,
    publicChargingRatePence,
    homeChargePercent,
    evMilesPerKwh,
    fuelPricePencePerLitre,
    evPricePremium,
  } = inputs;

  // ── Petrol / diesel ──────────────────────────────────────
  const litresPerYear = (annualMiles / mpg) * LITRES_PER_GALLON;
  const fuelPricePerLitre = fuelPricePencePerLitre / 100;
  const petrolCostPerYear = litresPerYear * fuelPricePerLitre;
  const petrolCostPerMile = petrolCostPerYear / annualMiles;

  // ── EV ───────────────────────────────────────────────────
  const kWhPerYear = annualMiles / evMilesPerKwh;
  const blendedElectricityRatePence =
    (homeChargePercent / 100) * homeElectricityRatePence +
    ((100 - homeChargePercent) / 100) * publicChargingRatePence;
  const evCostPerYear = kWhPerYear * (blendedElectricityRatePence / 100);
  const evCostPerMile = evCostPerYear / annualMiles;

  // ── Savings ──────────────────────────────────────────────
  const annualSaving = petrolCostPerYear - evCostPerYear;
  const monthlySaving = annualSaving / 12;
  const fiveYearSaving = annualSaving * 5;
  const tenYearSaving = annualSaving * 10;

  // ── Break-even ───────────────────────────────────────────
  const evIsCheaper = annualSaving > 0;
  let breakEvenYears: number | null = null;
  let breakEvenMiles: number | null = null;

  if (evIsCheaper && evPricePremium > 0) {
    breakEvenYears = evPricePremium / annualSaving;
    breakEvenMiles = breakEvenYears * annualMiles;
  }

  return {
    petrolCostPerMile,
    evCostPerMile,
    petrolCostPerYear,
    evCostPerYear,
    annualSaving,
    monthlySaving,
    fiveYearSaving,
    tenYearSaving,
    breakEvenYears,
    breakEvenMiles,
    evIsCheaper,
    blendedElectricityRatePence,
    litresPerYear,
    kWhPerYear,
  };
}

export function generateCostProjections(
  results: CalculatorResults,
  years = 10
): CostProjection[] {
  return Array.from({ length: years + 1 }, (_, i) => ({
    year: i,
    evCumulative: results.evCostPerYear * i,
    petrolCumulative: results.petrolCostPerYear * i,
    savings: results.annualSaving * i,
  }));
}

export function validateInputs(
  inputs: Partial<CalculatorInputs>
): ValidationErrors {
  const errors: ValidationErrors = {};

  if (
    inputs.postcode !== undefined &&
    inputs.postcode.trim() !== "" &&
    !isValidUKPostcodeFormat(inputs.postcode)
  ) {
    errors.postcode = "Please enter a valid UK postcode (e.g. SW1A 1AA)";
  }

  if (inputs.annualMiles !== undefined && inputs.annualMiles <= 0) {
    errors.annualMiles = "Annual mileage must be greater than 0";
  }

  if (inputs.mpg !== undefined && inputs.mpg <= 0) {
    errors.mpg = "MPG must be greater than 0";
  }

  if (
    inputs.homeElectricityRatePence !== undefined &&
    inputs.homeElectricityRatePence < 0
  ) {
    errors.homeElectricityRatePence =
      "Home electricity rate must be 0 or more";
  }

  if (
    inputs.publicChargingRatePence !== undefined &&
    inputs.publicChargingRatePence < 0
  ) {
    errors.publicChargingRatePence = "Public charging rate must be 0 or more";
  }

  if (
    inputs.homeChargePercent !== undefined &&
    (inputs.homeChargePercent < 0 || inputs.homeChargePercent > 100)
  ) {
    errors.homeChargePercent =
      "Home charging percentage must be between 0 and 100";
  }

  if (inputs.evMilesPerKwh !== undefined && inputs.evMilesPerKwh <= 0) {
    errors.evMilesPerKwh = "EV efficiency must be greater than 0";
  }

  if (
    inputs.fuelPricePencePerLitre !== undefined &&
    inputs.fuelPricePencePerLitre <= 0
  ) {
    errors.fuelPricePencePerLitre = "Fuel price must be greater than 0";
  }

  return errors;
}

// Loose format check — normalisation is done separately
export function isValidUKPostcodeFormat(postcode: string): boolean {
  const cleaned = postcode.replace(/\s+/g, "").toUpperCase();
  return /^[A-Z]{1,2}[0-9][0-9A-Z]?[0-9][A-Z]{2}$/.test(cleaned);
}

export function formatCurrency(value: number, decimals = 0): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

export function formatPencePerMile(value: number): string {
  return `${(value * 100).toFixed(1)}p/mile`;
}
