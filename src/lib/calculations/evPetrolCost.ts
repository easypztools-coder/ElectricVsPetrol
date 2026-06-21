import type {
  CalculatorInputs,
  CalculatorResults,
  CostProjection,
  CalculatorViewMode,
  TcoCalculationResults,
  ValidationErrors,
} from "@/lib/types/costCalculator";

export const LITRES_PER_GALLON = 4.54609;
export const DEFAULT_EV_PRICE_PREMIUM = 2500;
// Rough UK mid-size car assumptions. These are intentionally adjustable because
// purchase price and ownership mix vary more than the running-cost inputs.
export const DEFAULT_PETROL_PURCHASE_PRICE = 22000;
export const DEFAULT_OWNERSHIP_YEARS = 7;
// Typical UK servicing/maintenance allowances: EVs tend to be lower because
// there are fewer wear items than on a petrol/diesel drivetrain.
export const DEFAULT_PETROL_MAINTENANCE_ANNUAL = 550;
export const DEFAULT_EV_MAINTENANCE_ANNUAL = 350;
// Current VED rules change often, especially for EVs, so treat these as a
// placeholder annual assumption that should be verified before publishing.
export const DEFAULT_PETROL_VED_ANNUAL = 195;
export const DEFAULT_EV_VED_ANNUAL = 195;
// Rough end-of-ownership residual values. Depreciation is the least predictable
// input here, so the defaults stay deliberately editable and approximate.
export const DEFAULT_PETROL_RESALE_VALUE_PERCENT = 35;
export const DEFAULT_EV_RESALE_VALUE_PERCENT = 30;

function calculateRunningCosts(inputs: CalculatorInputs) {
  const {
    annualMiles,
    mpg,
    homeElectricityRatePence,
    publicChargingRatePence,
    homeChargePercent,
    evMilesPerKwh,
    fuelPricePencePerLitre,
  } = inputs;

  const litresPerYear = (annualMiles / mpg) * LITRES_PER_GALLON;
  const fuelPricePerLitre = fuelPricePencePerLitre / 100;
  const petrolCostPerYear = litresPerYear * fuelPricePerLitre;
  const petrolCostPerMile = petrolCostPerYear / annualMiles;

  const kWhPerYear = annualMiles / evMilesPerKwh;
  const blendedElectricityRatePence =
    (homeChargePercent / 100) * homeElectricityRatePence +
    ((100 - homeChargePercent) / 100) * publicChargingRatePence;
  const evCostPerYear = kWhPerYear * (blendedElectricityRatePence / 100);
  const evCostPerMile = evCostPerYear / annualMiles;

  return {
    litresPerYear,
    petrolCostPerYear,
    petrolCostPerMile,
    kWhPerYear,
    blendedElectricityRatePence,
    evCostPerYear,
    evCostPerMile,
  };
}

export function calculateEvPetrolCosts(
  inputs: CalculatorInputs
): CalculatorResults {
  const {
    litresPerYear,
    petrolCostPerYear,
    petrolCostPerMile,
    kWhPerYear,
    blendedElectricityRatePence,
    evCostPerYear,
    evCostPerMile,
  } = calculateRunningCosts(inputs);
  const { evPricePremium, annualMiles } = inputs;

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

export function calculateTcoCosts(
  inputs: CalculatorInputs
): TcoCalculationResults {
  const baseResults = calculateEvPetrolCosts(inputs);
  const {
    petrolPurchasePrice,
    ownershipYears,
    petrolMaintenanceAnnual,
    evMaintenanceAnnual,
    petrolVedAnnual,
    evVedAnnual,
    petrolResaleValuePercent,
    evResaleValuePercent,
    evPricePremium,
  } = inputs;

  const evPurchasePrice = petrolPurchasePrice + evPricePremium;

  const projections = Array.from({ length: ownershipYears + 1 }, (_, year) => {
    const petrolResaleValue =
      petrolPurchasePrice *
      (1 - (1 - petrolResaleValuePercent / 100) * (year / ownershipYears));
    const evResaleValue =
      evPurchasePrice *
      (1 - (1 - evResaleValuePercent / 100) * (year / ownershipYears));

    const petrolCumulative =
      petrolPurchasePrice - petrolResaleValue +
      baseResults.petrolCostPerYear * year +
      petrolMaintenanceAnnual * year +
      petrolVedAnnual * year;

    const evCumulative =
      evPurchasePrice - evResaleValue +
      baseResults.evCostPerYear * year +
      evMaintenanceAnnual * year +
      evVedAnnual * year;

    return {
      year,
      evCumulative,
      petrolCumulative,
      difference: petrolCumulative - evCumulative,
    };
  });

  const crossoverYear =
    projections.find(
      (point) => point.year > 0 && point.evCumulative < point.petrolCumulative
    )?.year ?? null;

  const finalProjection = projections[projections.length - 1];

  return {
    baseResults,
    projections,
    crossoverYear,
    totalDifference: finalProjection.petrolCumulative - finalProjection.evCumulative,
    petrolPurchasePrice,
    evPurchasePrice,
    ownershipYears,
    petrolMaintenanceAnnual,
    evMaintenanceAnnual,
    petrolVedAnnual,
    evVedAnnual,
    petrolResaleValuePercent,
    evResaleValuePercent,
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
  inputs: Partial<CalculatorInputs>,
  mode: CalculatorViewMode = "quick"
): ValidationErrors {
  const errors: ValidationErrors = {};
  const validateTcoFields = mode === "tco";

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

  if (validateTcoFields) {
    if (
      inputs.petrolPurchasePrice !== undefined &&
      inputs.petrolPurchasePrice <= 0
    ) {
      errors.petrolPurchasePrice = "Purchase price must be greater than 0";
    }

    if (
      inputs.ownershipYears !== undefined &&
      (inputs.ownershipYears < 1 || inputs.ownershipYears > 15)
    ) {
      errors.ownershipYears = "Ownership period must be between 1 and 15 years";
    }

    if (
      inputs.petrolMaintenanceAnnual !== undefined &&
      inputs.petrolMaintenanceAnnual < 0
    ) {
      errors.petrolMaintenanceAnnual = "Maintenance cost must be 0 or more";
    }

    if (
      inputs.evMaintenanceAnnual !== undefined &&
      inputs.evMaintenanceAnnual < 0
    ) {
      errors.evMaintenanceAnnual = "Maintenance cost must be 0 or more";
    }

    if (inputs.petrolVedAnnual !== undefined && inputs.petrolVedAnnual < 0) {
      errors.petrolVedAnnual = "VED must be 0 or more";
    }

    if (inputs.evVedAnnual !== undefined && inputs.evVedAnnual < 0) {
      errors.evVedAnnual = "VED must be 0 or more";
    }

    if (
      inputs.petrolResaleValuePercent !== undefined &&
      (inputs.petrolResaleValuePercent < 0 || inputs.petrolResaleValuePercent > 100)
    ) {
      errors.petrolResaleValuePercent = "Resale value must be between 0 and 100";
    }

    if (
      inputs.evResaleValuePercent !== undefined &&
      (inputs.evResaleValuePercent < 0 || inputs.evResaleValuePercent > 100)
    ) {
      errors.evResaleValuePercent = "Resale value must be between 0 and 100";
    }
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
