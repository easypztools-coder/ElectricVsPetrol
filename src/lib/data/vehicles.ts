export interface EVVehicle {
  slug: string;
  displayName: string;
  make: string;
  model: string;
  variant: string;
  milesPerKwh: number; // real-world UK average
  segment: string;
}

export interface ICEVehicle {
  slug: string;
  displayName: string;
  make: string;
  model: string;
  variant: string;
  fuelType: "petrol" | "diesel";
  realWorldMpg: number;
  segment: string;
}

export const evVehicles: EVVehicle[] = [
  {
    slug: "tesla-model-3",
    displayName: "Tesla Model 3",
    make: "Tesla",
    model: "Model 3",
    variant: "Standard Range RWD",
    milesPerKwh: 4.1,
    segment: "executive saloon",
  },
  {
    slug: "tesla-model-y",
    displayName: "Tesla Model Y",
    make: "Tesla",
    model: "Model Y",
    variant: "RWD",
    milesPerKwh: 3.7,
    segment: "compact SUV",
  },
  {
    slug: "tesla-model-s",
    displayName: "Tesla Model S",
    make: "Tesla",
    model: "Model S",
    variant: "Long Range",
    milesPerKwh: 3.2,
    segment: "full-size luxury saloon",
  },
  {
    slug: "hyundai-ioniq-5",
    displayName: "Hyundai Ioniq 5",
    make: "Hyundai",
    model: "Ioniq 5",
    variant: "73kWh RWD",
    milesPerKwh: 3.5,
    segment: "mid-size SUV",
  },
  {
    slug: "hyundai-ioniq-6",
    displayName: "Hyundai Ioniq 6",
    make: "Hyundai",
    model: "Ioniq 6",
    variant: "Standard Range RWD",
    milesPerKwh: 4.2,
    segment: "executive saloon",
  },
  {
    slug: "kia-ev6",
    displayName: "Kia EV6",
    make: "Kia",
    model: "EV6",
    variant: "Standard Range RWD",
    milesPerKwh: 3.8,
    segment: "crossover",
  },
  {
    slug: "mg4",
    displayName: "MG4",
    make: "MG",
    model: "MG4",
    variant: "Standard Range",
    milesPerKwh: 4.0,
    segment: "compact hatchback",
  },
  {
    slug: "volkswagen-id4",
    displayName: "Volkswagen ID.4",
    make: "Volkswagen",
    model: "ID.4",
    variant: "Pure Performance 77kWh",
    milesPerKwh: 3.3,
    segment: "compact SUV",
  },
  {
    slug: "polestar-2",
    displayName: "Polestar 2",
    make: "Polestar",
    model: "2",
    variant: "Long Range Single Motor",
    milesPerKwh: 3.5,
    segment: "executive fastback",
  },
  {
    slug: "nissan-leaf",
    displayName: "Nissan Leaf",
    make: "Nissan",
    model: "Leaf",
    variant: "40kWh",
    milesPerKwh: 3.5,
    segment: "compact hatchback",
  },
  {
    slug: "byd-seal",
    displayName: "BYD Seal",
    make: "BYD",
    model: "Seal",
    variant: "RWD Extended Range",
    milesPerKwh: 3.8,
    segment: "executive saloon",
  },
  {
    slug: "audi-q4-etron",
    displayName: "Audi Q4 e-tron",
    make: "Audi",
    model: "Q4 e-tron",
    variant: "45 quattro",
    milesPerKwh: 3.3,
    segment: "compact premium SUV",
  },
  {
    slug: "smart-number-1",
    displayName: "Smart #1",
    make: "Smart",
    model: "#1",
    variant: "Pro+",
    milesPerKwh: 3.5,
    segment: "premium compact SUV",
  },
];

export const iceVehicles: ICEVehicle[] = [
  {
    slug: "bmw-3-series",
    displayName: "BMW 3 Series",
    make: "BMW",
    model: "3 Series",
    variant: "320i Sport",
    fuelType: "petrol",
    realWorldMpg: 40,
    segment: "executive saloon",
  },
  {
    slug: "bmw-x3",
    displayName: "BMW X3",
    make: "BMW",
    model: "X3",
    variant: "xDrive20i",
    fuelType: "petrol",
    realWorldMpg: 34,
    segment: "mid-size premium SUV",
  },
  {
    slug: "bmw-5-series",
    displayName: "BMW 5 Series",
    make: "BMW",
    model: "5 Series",
    variant: "520i",
    fuelType: "petrol",
    realWorldMpg: 38,
    segment: "full-size executive saloon",
  },
  {
    slug: "volkswagen-golf",
    displayName: "Volkswagen Golf",
    make: "Volkswagen",
    model: "Golf",
    variant: "1.5 eTSI Life",
    fuelType: "petrol",
    realWorldMpg: 44,
    segment: "compact hatchback",
  },
  {
    slug: "volkswagen-tiguan",
    displayName: "Volkswagen Tiguan",
    make: "Volkswagen",
    model: "Tiguan",
    variant: "1.5 TSI Life",
    fuelType: "petrol",
    realWorldMpg: 37,
    segment: "family SUV",
  },
  {
    slug: "audi-a4",
    displayName: "Audi A4",
    make: "Audi",
    model: "A4",
    variant: "35 TFSI S Line",
    fuelType: "petrol",
    realWorldMpg: 37,
    segment: "executive saloon",
  },
  {
    slug: "audi-q5",
    displayName: "Audi Q5",
    make: "Audi",
    model: "Q5",
    variant: "45 TFSI quattro",
    fuelType: "petrol",
    realWorldMpg: 33,
    segment: "premium mid-size SUV",
  },
  {
    slug: "vauxhall-astra",
    displayName: "Vauxhall Astra",
    make: "Vauxhall",
    model: "Astra",
    variant: "1.2 Turbo GS",
    fuelType: "petrol",
    realWorldMpg: 42,
    segment: "family hatchback",
  },
  {
    slug: "honda-civic",
    displayName: "Honda Civic",
    make: "Honda",
    model: "Civic",
    variant: "1.5 VTEC Turbo Sport",
    fuelType: "petrol",
    realWorldMpg: 40,
    segment: "compact saloon",
  },
  {
    slug: "mini-hatch",
    displayName: "Mini Hatch",
    make: "Mini",
    model: "Hatch",
    variant: "Cooper",
    fuelType: "petrol",
    realWorldMpg: 40,
    segment: "premium small hatchback",
  },
];

export function findEV(slug: string): EVVehicle | undefined {
  return evVehicles.find((v) => v.slug === slug);
}

export function findICE(slug: string): ICEVehicle | undefined {
  return iceVehicles.find((v) => v.slug === slug);
}
