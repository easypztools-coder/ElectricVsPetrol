// UK electricity rate defaults.
// Home rate is based on the Ofgem price cap unit rate (updated manually).
// Public charging rate is a representative average across UK networks.

export interface ElectricityRates {
  homeRatePencePerKwh: number;
  publicFastRatePencePerKwh: number;
  publicRapidRatePencePerKwh: number;
  source: "default" | "live";
  updatedAt: string;
}

export function getDefaultElectricityRates(): ElectricityRates {
  return {
    homeRatePencePerKwh: 28.0,
    publicFastRatePencePerKwh: 60.0,
    publicRapidRatePencePerKwh: 75.0,
    source: "default",
    updatedAt: "2024-10",
  };
}
