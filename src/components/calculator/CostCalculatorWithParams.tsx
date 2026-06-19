"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import CostCalculator from "./CostCalculator";
import type { CalculatorInputs } from "@/lib/types/costCalculator";

function CostCalculatorInner() {
  const params = useSearchParams();
  const overrides: Partial<CalculatorInputs> = {};

  const mpg = params.get("mpg");
  const efficiency = params.get("efficiency");
  const fuelType = params.get("fuelType");

  if (mpg && !isNaN(parseFloat(mpg))) overrides.mpg = parseFloat(mpg);
  if (efficiency && !isNaN(parseFloat(efficiency)))
    overrides.evMilesPerKwh = parseFloat(efficiency);
  if (fuelType === "diesel" || fuelType === "petrol")
    overrides.fuelType = fuelType;

  return <CostCalculator initialOverrides={overrides} />;
}

export default function CostCalculatorWithParams() {
  return (
    <Suspense fallback={<CostCalculator />}>
      <CostCalculatorInner />
    </Suspense>
  );
}
