import { describe, it, expect } from "vitest";
import {
  calculateEvPetrolCosts,
  validateInputs,
  LITRES_PER_GALLON,
  DEFAULT_EV_PRICE_PREMIUM,
} from "./evPetrolCost";
import type { CalculatorInputs } from "@/lib/types/costCalculator";

const BASE_INPUTS: CalculatorInputs = {
  postcode: "",
  annualMiles: 10000,
  fuelType: "petrol",
  mpg: 45,
  homeElectricityRatePence: 28.0,
  publicChargingRatePence: 60.0,
  homeChargePercent: 80,
  evMilesPerKwh: 3.5,
  fuelPricePencePerLitre: 143.9,
  evPricePremium: DEFAULT_EV_PRICE_PREMIUM,
};

// ── Test 1: Petrol cost calculation ─────────────────────────────────────────
describe("Petrol cost calculation", () => {
  it("calculates correct litres per year", () => {
    const results = calculateEvPetrolCosts(BASE_INPUTS);
    // 10000 / 45 * 4.54609 = 1010.24...
    const expected = (10000 / 45) * LITRES_PER_GALLON;
    expect(results.litresPerYear).toBeCloseTo(expected, 2);
  });

  it("calculates correct annual petrol cost", () => {
    const results = calculateEvPetrolCosts(BASE_INPUTS);
    const litresPerYear = (10000 / 45) * LITRES_PER_GALLON;
    const expected = litresPerYear * (143.9 / 100);
    expect(results.petrolCostPerYear).toBeCloseTo(expected, 2);
  });

  it("calculates correct petrol cost per mile", () => {
    const results = calculateEvPetrolCosts(BASE_INPUTS);
    expect(results.petrolCostPerMile).toBeCloseTo(
      results.petrolCostPerYear / 10000,
      4
    );
  });
});

// ── Test 2: EV cost calculation ─────────────────────────────────────────────
describe("EV cost calculation", () => {
  it("calculates correct kWh per year", () => {
    const results = calculateEvPetrolCosts(BASE_INPUTS);
    // 10000 / 3.5 ≈ 2857.14 kWh
    expect(results.kWhPerYear).toBeCloseTo(10000 / 3.5, 2);
  });

  it("calculates correct blended electricity rate", () => {
    const results = calculateEvPetrolCosts(BASE_INPUTS);
    // 80% × 28 + 20% × 60 = 22.4 + 12 = 34.4 p/kWh
    expect(results.blendedElectricityRatePence).toBeCloseTo(34.4, 2);
  });

  it("calculates correct annual EV electricity cost", () => {
    const results = calculateEvPetrolCosts(BASE_INPUTS);
    const kWhPerYear = 10000 / 3.5;
    const blendedRate = 0.8 * 28 + 0.2 * 60;
    const expected = kWhPerYear * (blendedRate / 100);
    expect(results.evCostPerYear).toBeCloseTo(expected, 2);
  });
});

// ── Test 3: Annual saving is positive when EV is cheaper ────────────────────
describe("Annual saving", () => {
  it("is positive when EV is cheaper (default assumptions)", () => {
    const results = calculateEvPetrolCosts(BASE_INPUTS);
    expect(results.annualSaving).toBeGreaterThan(0);
    expect(results.evIsCheaper).toBe(true);
  });

  it("five-year saving equals 5× annual saving", () => {
    const results = calculateEvPetrolCosts(BASE_INPUTS);
    expect(results.fiveYearSaving).toBeCloseTo(results.annualSaving * 5, 4);
  });

  it("monthly saving equals annual saving ÷ 12", () => {
    const results = calculateEvPetrolCosts(BASE_INPUTS);
    expect(results.monthlySaving).toBeCloseTo(results.annualSaving / 12, 4);
  });
});

// ── Test 4: Negative saving when public charging is expensive ────────────────
describe("EV costs more with heavy public charging", () => {
  it("returns negative annual saving when 100% public charging at 80p/kWh", () => {
    const inputs: CalculatorInputs = {
      ...BASE_INPUTS,
      homeChargePercent: 0,
      publicChargingRatePence: 80,
    };
    const results = calculateEvPetrolCosts(inputs);
    // blended rate = 80p/kWh, ev cost per mile ≈ 22.9p, petrol ≈ 14.4p
    expect(results.annualSaving).toBeLessThan(0);
    expect(results.evIsCheaper).toBe(false);
  });
});

// ── Test 5: Break-even not shown when saving is <= 0 ────────────────────────
describe("Break-even", () => {
  it("is null when EV is not cheaper", () => {
    const inputs: CalculatorInputs = {
      ...BASE_INPUTS,
      homeChargePercent: 0,
      publicChargingRatePence: 80,
    };
    const results = calculateEvPetrolCosts(inputs);
    expect(results.breakEvenYears).toBeNull();
    expect(results.breakEvenMiles).toBeNull();
  });

  it("is calculated when EV is cheaper and premium > 0", () => {
    const results = calculateEvPetrolCosts(BASE_INPUTS);
    expect(results.breakEvenYears).not.toBeNull();
    expect(results.breakEvenYears).toBeCloseTo(
      DEFAULT_EV_PRICE_PREMIUM / results.annualSaving,
      3
    );
  });

  it("is null when EV price premium is 0", () => {
    const inputs: CalculatorInputs = { ...BASE_INPUTS, evPricePremium: 0 };
    const results = calculateEvPetrolCosts(inputs);
    expect(results.breakEvenYears).toBeNull();
  });
});

// ── Test 6: Home charging percentage validation ──────────────────────────────
describe("Validation", () => {
  it("rejects home charge percent above 100", () => {
    const errors = validateInputs({ homeChargePercent: 110 });
    expect(errors.homeChargePercent).toBeDefined();
  });

  it("rejects home charge percent below 0", () => {
    const errors = validateInputs({ homeChargePercent: -5 });
    expect(errors.homeChargePercent).toBeDefined();
  });

  it("accepts home charge percent of 0", () => {
    const errors = validateInputs({ homeChargePercent: 0 });
    expect(errors.homeChargePercent).toBeUndefined();
  });

  it("accepts home charge percent of 100", () => {
    const errors = validateInputs({ homeChargePercent: 100 });
    expect(errors.homeChargePercent).toBeUndefined();
  });

  it("rejects annual miles of 0", () => {
    const errors = validateInputs({ annualMiles: 0 });
    expect(errors.annualMiles).toBeDefined();
  });

  it("rejects negative MPG", () => {
    const errors = validateInputs({ mpg: -10 });
    expect(errors.mpg).toBeDefined();
  });

  it("rejects fuel price of 0", () => {
    const errors = validateInputs({ fuelPricePencePerLitre: 0 });
    expect(errors.fuelPricePencePerLitre).toBeDefined();
  });

  it("rejects invalid UK postcode format", () => {
    const errors = validateInputs({ postcode: "INVALID" });
    expect(errors.postcode).toBeDefined();
  });

  it("accepts valid UK postcode", () => {
    const errors = validateInputs({ postcode: "SW1A 1AA" });
    expect(errors.postcode).toBeUndefined();
  });

  it("accepts empty postcode without error", () => {
    const errors = validateInputs({ postcode: "" });
    expect(errors.postcode).toBeUndefined();
  });
});
