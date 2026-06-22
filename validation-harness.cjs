const fs = require('fs');
const vm = require('vm');
const ts = require('typescript');
const path = require('path');

const source = fs.readFileSync(path.join(process.cwd(), 'src/lib/calculations/evPetrolCost.ts'), 'utf8');
const transpiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2020,
    esModuleInterop: true,
  },
  fileName: 'evPetrolCost.ts',
});

const moduleShim = { exports: {} };
const sandbox = {
  module: moduleShim,
  exports: moduleShim.exports,
  require,
  console,
  process,
  Math,
  Date,
  setTimeout,
  clearTimeout,
  Buffer,
};
vm.runInNewContext(transpiled.outputText, sandbox, { filename: 'evPetrolCost.js' });
const api = moduleShim.exports;

const base = {
  postcode: '',
  annualMiles: 10000,
  fuelType: 'petrol',
  mpg: 45,
  homeElectricityRatePence: 28,
  publicChargingRatePence: 60,
  homeChargePercent: 80,
  evMilesPerKwh: 3.5,
  fuelPricePencePerLitre: 143.9,
  evPricePremium: 2500,
  petrolPurchasePrice: 22000,
  ownershipYears: 7,
  petrolMaintenanceAnnual: 550,
  evMaintenanceAnnual: 350,
  petrolVedAnnual: 195,
  evVedAnnual: 195,
  petrolResaleValuePercent: 35,
  evResaleValuePercent: 30,
};

function round2(n) {
  return Math.round(n * 100) / 100;
}

const petrol = api.calculateEvPetrolCosts(base);
const manualPetrolLitres = (10000 / 45) * api.LITRES_PER_GALLON;
const manualPetrolCost = manualPetrolLitres * (143.9 / 100);
const manualEvBlended = 0.8 * 28 + 0.2 * 60;
const manualEvCost = (10000 / 3.5) * (manualEvBlended / 100);

const zero = api.calculateEvPetrolCosts({ ...base, annualMiles: 0 });
const high = api.calculateEvPetrolCosts({ ...base, annualMiles: 50000 });
const tco = api.calculateTcoCosts(base);
const year1 = tco.projections[1];
const final = tco.projections[tco.projections.length - 1];
const evPurchasePrice = base.petrolPurchasePrice + base.evPricePremium;

const petrolResaleYear1 = base.petrolPurchasePrice * (1 - (1 - base.petrolResaleValuePercent / 100) * (1 / base.ownershipYears));
const evResaleYear1 = evPurchasePrice * (1 - (1 - base.evResaleValuePercent / 100) * (1 / base.ownershipYears));
const manualYear1Petrol = base.petrolPurchasePrice - petrolResaleYear1 + petrol.petrolCostPerYear + base.petrolMaintenanceAnnual + base.petrolVedAnnual;
const manualYear1Ev = evPurchasePrice - evResaleYear1 + petrol.evCostPerYear + base.evMaintenanceAnnual + base.evVedAnnual;

const petrolResaleFinal = base.petrolPurchasePrice * (1 - (1 - base.petrolResaleValuePercent / 100) * (base.ownershipYears / base.ownershipYears));
const evResaleFinal = evPurchasePrice * (1 - (1 - base.evResaleValuePercent / 100) * (base.ownershipYears / base.ownershipYears));
const manualFinalPetrol = base.petrolPurchasePrice - petrolResaleFinal + petrol.petrolCostPerYear * base.ownershipYears + base.petrolMaintenanceAnnual * base.ownershipYears + base.petrolVedAnnual * base.ownershipYears;
const manualFinalEv = evPurchasePrice - evResaleFinal + petrol.evCostPerYear * base.ownershipYears + base.evMaintenanceAnnual * base.ownershipYears + base.evVedAnnual * base.ownershipYears;

const summary = {
  petrol_10k: {
    actual: round2(petrol.petrolCostPerYear),
    expected: round2(manualPetrolCost),
    diff: round2(petrol.petrolCostPerYear - manualPetrolCost),
  },
  ev_10k: {
    actual: round2(petrol.evCostPerYear),
    expected: round2(manualEvCost),
    diff: round2(petrol.evCostPerYear - manualEvCost),
  },
  zero_miles: {
    petrolCostPerYear: zero.petrolCostPerYear,
    evCostPerYear: zero.evCostPerYear,
    petrolFinite: Number.isFinite(zero.petrolCostPerYear),
    evFinite: Number.isFinite(zero.evCostPerYear),
  },
  high_miles: {
    petrolCostPerYear: round2(high.petrolCostPerYear),
    evCostPerYear: round2(high.evCostPerYear),
    petrolFinite: Number.isFinite(high.petrolCostPerYear),
    evFinite: Number.isFinite(high.evCostPerYear),
  },
  tco: {
    year1: {
      petrolActual: round2(year1.petrolCumulative),
      petrolExpected: round2(manualYear1Petrol),
      petrolDiff: round2(year1.petrolCumulative - manualYear1Petrol),
      evActual: round2(year1.evCumulative),
      evExpected: round2(manualYear1Ev),
      evDiff: round2(year1.evCumulative - manualYear1Ev),
    },
    final: {
      petrolActual: round2(final.petrolCumulative),
      petrolExpected: round2(manualFinalPetrol),
      petrolDiff: round2(final.petrolCumulative - manualFinalPetrol),
      evActual: round2(final.evCumulative),
      evExpected: round2(manualFinalEv),
      evDiff: round2(final.evCumulative - manualFinalEv),
    },
    crossoverYear: tco.crossoverYear,
    totalDifference: round2(tco.totalDifference),
  },
};

console.log(JSON.stringify(summary, null, 2));
