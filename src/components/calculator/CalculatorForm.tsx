"use client";

import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Slider from "@/components/ui/Slider";
import Button from "@/components/ui/Button";
import type { CalculatorInputs, ValidationErrors } from "@/lib/types/costCalculator";

interface CalculatorFormProps {
  inputs: CalculatorInputs;
  errors: ValidationErrors;
  isLoading: boolean;
  onChange: (field: keyof CalculatorInputs, value: string | number) => void;
  onCalculate: () => void;
}

const fuelTypeOptions = [
  { value: "petrol", label: "Petrol" },
  { value: "diesel", label: "Diesel" },
];

export default function CalculatorForm({
  inputs,
  errors,
  isLoading,
  onChange,
  onCalculate,
}: CalculatorFormProps) {
  function numericChange(field: keyof CalculatorInputs) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = parseFloat(e.target.value);
      onChange(field, isNaN(val) ? 0 : val);
    };
  }

  const fuelLabel = inputs.fuelType === "diesel" ? "Diesel" : "Petrol";
  const fallbackPrice =
    inputs.fuelType === "diesel" ? 151.9 : 143.9;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onCalculate();
      }}
      noValidate
      aria-label="EV vs petrol cost calculator"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:items-end">
        {/* ── Postcode ── */}
        <div className="sm:col-span-2">
          <Input
            label="Your postcode (optional)"
            type="text"
            placeholder="e.g. SW1A 1AA"
            value={inputs.postcode}
            onChange={(e) => onChange("postcode", e.target.value.toUpperCase())}
            error={errors.postcode}
            hint="Used for local fuel price lookup. Calculations still work without it."
            autoComplete="postal-code"
            inputMode="text"
          />
        </div>

        {/* ── Annual mileage ── */}
        <Input
          label="Annual mileage"
          type="number"
          min={1}
          max={200000}
          step={500}
          value={inputs.annualMiles}
          onChange={numericChange("annualMiles")}
          error={errors.annualMiles}
          suffix="miles/yr"
        />

        {/* ── Fuel type ── */}
        <Select
          label="Current fuel type"
          options={fuelTypeOptions}
          value={inputs.fuelType}
          onChange={(e) =>
            onChange("fuelType", e.target.value as "petrol" | "diesel")
          }
        />

        {/* ── MPG ── */}
        <Input
          label={`Current car fuel economy`}
          type="number"
          min={1}
          max={500}
          step={1}
          value={inputs.mpg}
          onChange={numericChange("mpg")}
          error={errors.mpg}
          suffix="MPG"
          hint={`Official combined MPG for your ${fuelLabel.toLowerCase()} car`}
        />

        {/* ── Fuel price ── */}
        <Input
          label={`${fuelLabel} price`}
          type="number"
          min={0.1}
          max={300}
          step={0.1}
          value={inputs.fuelPricePencePerLitre}
          onChange={numericChange("fuelPricePencePerLitre")}
          error={errors.fuelPricePencePerLitre}
          suffix="p/litre"
          hint={`UK average: ~${fallbackPrice}p/l. Adjust to your local price.`}
        />

        {/* ── Home electricity rate ── */}
        <Input
          label="Home electricity rate"
          type="number"
          min={0}
          max={100}
          step={0.1}
          value={inputs.homeElectricityRatePence}
          onChange={numericChange("homeElectricityRatePence")}
          error={errors.homeElectricityRatePence}
          suffix="p/kWh"
          hint="Check your energy bill — typically 24–32p/kWh on standard tariff"
        />

        {/* ── Public charging rate ── */}
        <Input
          label="Public charging rate"
          type="number"
          min={0}
          max={200}
          step={1}
          value={inputs.publicChargingRatePence}
          onChange={numericChange("publicChargingRatePence")}
          error={errors.publicChargingRatePence}
          suffix="p/kWh"
          hint="Typically 50–80p/kWh on rapid chargers"
        />

        {/* ── EV efficiency ── */}
        <Input
          label="EV efficiency"
          type="number"
          min={0.1}
          max={10}
          step={0.1}
          value={inputs.evMilesPerKwh}
          onChange={numericChange("evMilesPerKwh")}
          error={errors.evMilesPerKwh}
          suffix="miles/kWh"
          hint="Typical EVs: 2.5–4.5 mi/kWh. Default: 3.5"
        />

        {/* ── Slider: home charge % ── */}
        <div className="sm:col-span-2">
          <Slider
            label="Charging at home"
            min={0}
            max={100}
            step={5}
            value={inputs.homeChargePercent}
            onChange={(e) =>
              onChange("homeChargePercent", parseInt(e.target.value))
            }
            valueLabel={`${inputs.homeChargePercent}% home / ${100 - inputs.homeChargePercent}% public`}
            error={errors.homeChargePercent}
            hint="Home charging is significantly cheaper — adjust this to reflect your situation"
          />
        </div>

        {/* ── EV price premium ── */}
        <div className="sm:col-span-2">
          <Input
            label="EV price premium over your current car (for break-even)"
            type="number"
            min={0}
            max={50000}
            step={100}
            value={inputs.evPricePremium}
            onChange={numericChange("evPricePremium")}
            prefix="£"
            hint="The extra upfront cost of buying an EV vs an equivalent petrol car. Set to 0 to skip break-even."
          />
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="mt-6">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          disabled={isLoading}
        >
          {isLoading ? "Looking up local prices…" : "Calculate my true cost"}
        </Button>
      </div>

      <p className="mt-3 text-xs text-ev-grey text-center">
        Results are estimates. Not financial advice.
      </p>
    </form>
  );
}
