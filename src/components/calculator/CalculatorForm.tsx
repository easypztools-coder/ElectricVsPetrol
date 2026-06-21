"use client";

import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Slider from "@/components/ui/Slider";
import Button from "@/components/ui/Button";
import type {
  CalculatorInputs,
  CalculatorViewMode,
  ValidationErrors,
} from "@/lib/types/costCalculator";
import {
  DEFAULT_EV_MAINTENANCE_ANNUAL,
  DEFAULT_EV_RESALE_VALUE_PERCENT,
  DEFAULT_EV_VED_ANNUAL,
  DEFAULT_OWNERSHIP_YEARS,
  DEFAULT_PETROL_MAINTENANCE_ANNUAL,
  DEFAULT_PETROL_PURCHASE_PRICE,
  DEFAULT_PETROL_RESALE_VALUE_PERCENT,
  DEFAULT_PETROL_VED_ANNUAL,
} from "@/lib/calculations/evPetrolCost";

interface CalculatorFormProps {
  inputs: CalculatorInputs;
  errors: ValidationErrors;
  isLoading: boolean;
  mode: CalculatorViewMode;
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
  mode,
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
  const derivedEvPrice = inputs.petrolPurchasePrice + inputs.evPricePremium;

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

        {mode === "tco" && (
          <div className="sm:col-span-2 rounded-2xl border border-border-light bg-off-white p-4 space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-navy">
                Full cost of ownership inputs
              </h3>
              <p className="text-xs text-ev-grey mt-1">
                Defaults are rough UK estimates and stay editable. Depreciation in particular is only a rough guide.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <Input
                  label="Petrol / diesel car purchase price"
                  type="number"
                  min={1}
                  max={250000}
                  step={500}
                  value={inputs.petrolPurchasePrice}
                  onChange={numericChange("petrolPurchasePrice")}
                  error={errors.petrolPurchasePrice}
                  prefix="£"
                  hint={`Rough default: £${DEFAULT_PETROL_PURCHASE_PRICE.toLocaleString("en-GB")}. Adjust to your comparable car.`}
                />
              </div>

              <div className="rounded-xl bg-white border border-border-light p-4 sm:col-span-2">
                <p className="text-xs font-medium text-ev-grey uppercase tracking-wide mb-1">
                  EV purchase price (derived)
                </p>
                <p className="text-xl font-bold text-ev-blue font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>
                  £{derivedEvPrice.toLocaleString("en-GB")}
                </p>
                <p className="text-xs text-ev-grey mt-1">
                  Using your existing EV premium field, so you do not need to enter this twice.
                </p>
              </div>

              <Input
                label="Ownership period"
                type="number"
                min={1}
                max={15}
                step={1}
                value={inputs.ownershipYears}
                onChange={numericChange("ownershipYears")}
                error={errors.ownershipYears}
                suffix="years"
                hint={`Default: ${DEFAULT_OWNERSHIP_YEARS} years. Keep it between 1 and 15.`}
              />

              <Input
                label="Annual maintenance cost - petrol / diesel"
                type="number"
                min={0}
                max={5000}
                step={25}
                value={inputs.petrolMaintenanceAnnual}
                onChange={numericChange("petrolMaintenanceAnnual")}
                error={errors.petrolMaintenanceAnnual}
                prefix="£"
                hint={`Rough default: £${DEFAULT_PETROL_MAINTENANCE_ANNUAL}/yr.`}
              />

              <Input
                label="Annual maintenance cost - EV"
                type="number"
                min={0}
                max={5000}
                step={25}
                value={inputs.evMaintenanceAnnual}
                onChange={numericChange("evMaintenanceAnnual")}
                error={errors.evMaintenanceAnnual}
                prefix="£"
                hint={`Rough default: £${DEFAULT_EV_MAINTENANCE_ANNUAL}/yr.`}
              />

              <Input
                label="Annual VED / road tax - petrol / diesel"
                type="number"
                min={0}
                max={1000}
                step={1}
                value={inputs.petrolVedAnnual}
                onChange={numericChange("petrolVedAnnual")}
                error={errors.petrolVedAnnual}
                prefix="£"
                hint={`Default set to current standard rate: £${DEFAULT_PETROL_VED_ANNUAL}/yr.`}
              />

              <Input
                label="Annual VED / road tax - EV"
                type="number"
                min={0}
                max={1000}
                step={1}
                value={inputs.evVedAnnual}
                onChange={numericChange("evVedAnnual")}
                error={errors.evVedAnnual}
                prefix="£"
                hint={`Default set to £${DEFAULT_EV_VED_ANNUAL}/yr, but EV tax rules can change and should be verified before publishing.`}
              />

              <Input
                label="Expected resale value - petrol / diesel"
                type="number"
                min={0}
                max={100}
                step={1}
                value={inputs.petrolResaleValuePercent}
                onChange={numericChange("petrolResaleValuePercent")}
                error={errors.petrolResaleValuePercent}
                suffix="%"
                hint={`Rough default: ${DEFAULT_PETROL_RESALE_VALUE_PERCENT}% of purchase price after the ownership period.`}
              />

              <Input
                label="Expected resale value - EV"
                type="number"
                min={0}
                max={100}
                step={1}
                value={inputs.evResaleValuePercent}
                onChange={numericChange("evResaleValuePercent")}
                error={errors.evResaleValuePercent}
                suffix="%"
                hint={`Rough default: ${DEFAULT_EV_RESALE_VALUE_PERCENT}% of purchase price after the ownership period.`}
              />
            </div>
          </div>
        )}
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
          {isLoading
            ? "Looking up local prices…"
            : mode === "tco"
              ? "Calculate full cost over time"
              : "Calculate my true cost"}
        </Button>
      </div>

      <p className="mt-3 text-xs text-ev-grey text-center">
        Results are estimates. Not financial advice.
      </p>
    </form>
  );
}
