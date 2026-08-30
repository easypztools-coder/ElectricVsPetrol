"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import CostCalculator from "./CostCalculator";
import type { CalculatorInputs, CalculatorViewMode } from "@/lib/types/costCalculator";

function CostCalculatorInner() {
  const params = useSearchParams();
  const overrides: Partial<CalculatorInputs> = {};

  const postcode = params.get("postcode");
  const miles = params.get("miles");
  const fuelType = params.get("fuelType");
  const mpg = params.get("mpg");
  const homeRate = params.get("homeRate");
  const publicRate = params.get("publicRate");
  const homeCharge = params.get("homeCharge");
  const efficiency = params.get("efficiency");
  const fuelPrice = params.get("fuelPrice");

  // TCO parameters
  const evPremium = params.get("evPremium");
  const petrolPrice = params.get("petrolPrice");
  const years = params.get("years");
  const petrolMaint = params.get("petrolMaint");
  const evMaint = params.get("evMaint");
  const petrolVed = params.get("petrolVed");
  const evVed = params.get("evVed");
  const petrolResale = params.get("petrolResale");
  const evResale = params.get("evResale");

  if (postcode) overrides.postcode = postcode;
  if (miles && !isNaN(parseInt(miles))) overrides.annualMiles = parseInt(miles);
  if (fuelType === "diesel" || fuelType === "petrol") overrides.fuelType = fuelType;
  if (mpg && !isNaN(parseFloat(mpg))) overrides.mpg = parseFloat(mpg);
  if (homeRate && !isNaN(parseFloat(homeRate))) overrides.homeElectricityRatePence = parseFloat(homeRate);
  if (publicRate && !isNaN(parseFloat(publicRate))) overrides.publicChargingRatePence = parseFloat(publicRate);
  if (homeCharge && !isNaN(parseInt(homeCharge))) overrides.homeChargePercent = parseInt(homeCharge);
  if (efficiency && !isNaN(parseFloat(efficiency))) overrides.evMilesPerKwh = parseFloat(efficiency);
  if (fuelPrice && !isNaN(parseFloat(fuelPrice))) overrides.fuelPricePencePerLitre = parseFloat(fuelPrice);

  if (evPremium && !isNaN(parseInt(evPremium))) overrides.evPricePremium = parseInt(evPremium);
  if (petrolPrice && !isNaN(parseInt(petrolPrice))) overrides.petrolPurchasePrice = parseInt(petrolPrice);
  if (years && !isNaN(parseInt(years))) overrides.ownershipYears = parseInt(years);
  if (petrolMaint && !isNaN(parseInt(petrolMaint))) overrides.petrolMaintenanceAnnual = parseInt(petrolMaint);
  if (evMaint && !isNaN(parseInt(evMaint))) overrides.evMaintenanceAnnual = parseInt(evMaint);
  if (petrolVed && !isNaN(parseInt(petrolVed))) overrides.petrolVedAnnual = parseInt(petrolVed);
  if (evVed && !isNaN(parseInt(evVed))) overrides.evVedAnnual = parseInt(evVed);
  if (petrolResale && !isNaN(parseInt(petrolResale))) overrides.petrolResaleValuePercent = parseInt(petrolResale);
  if (evResale && !isNaN(parseInt(evResale))) overrides.evResaleValuePercent = parseInt(evResale);

  const modeParam = params.get("mode");
  const initialMode = (modeParam === "tco" ? "tco" : "quick") as CalculatorViewMode;

  console.log("CostCalculatorInner overrides:", overrides, "mode:", initialMode);
  return <CostCalculator initialOverrides={overrides} initialMode={initialMode} />;
}

export default function CostCalculatorWithParams() {
  return (
    <Suspense fallback={<CostCalculator />}>
      <CostCalculatorInner />
    </Suspense>
  );
}
