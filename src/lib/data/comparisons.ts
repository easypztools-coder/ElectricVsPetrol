export interface ComparisonPair {
  slug: string;
  evSlug: string;
  iceSlug: string;
  tier: 1 | 2 | 3;
  /**
   * Positive = EV costs more upfront.
   * Negative = EV is cheaper to buy.
   * Based on realistic UK list prices (2026).
   */
  evPricePremiumGbp: number;
  /** One sentence on why this comparison is searched for */
  rationale: string;
}

export const comparisons: ComparisonPair[] = [
  // ── Tier 1 ──────────────────────────────────────────────────
  {
    slug: "tesla-model-3-vs-bmw-3-series",
    evSlug: "tesla-model-3",
    iceSlug: "bmw-3-series",
    tier: 1,
    evPricePremiumGbp: 5000,
    rationale:
      "The definitive premium-saloon EV vs petrol comparison — Tesla's bestseller against the benchmark executive car.",
  },
  {
    slug: "tesla-model-y-vs-volkswagen-tiguan",
    evSlug: "tesla-model-y",
    iceSlug: "volkswagen-tiguan",
    tier: 1,
    evPricePremiumGbp: 12000,
    rationale:
      "The UK's bestselling EV pitted against one of the UK's bestselling family SUVs.",
  },
  {
    slug: "tesla-model-y-vs-bmw-x3",
    evSlug: "tesla-model-y",
    iceSlug: "bmw-x3",
    tier: 1,
    evPricePremiumGbp: 1000,
    rationale:
      "Two similarly priced premium compact SUVs — almost like-for-like in price, very different to run.",
  },
  {
    slug: "mg4-vs-volkswagen-golf",
    evSlug: "mg4",
    iceSlug: "volkswagen-golf",
    tier: 1,
    evPricePremiumGbp: 1500,
    rationale:
      "The budget EV benchmark against the UK's most enduring petrol hatchback.",
  },
  {
    slug: "tesla-model-3-vs-ford-focus",
    evSlug: "tesla-model-3",
    iceSlug: "ford-focus",
    tier: 1,
    evPricePremiumGbp: 11000,
    rationale:
      "A mainstream family hatchback comparison that shows what happens when a premium EV is measured against a familiar petrol benchmark.",
  },
  {
    slug: "nissan-leaf-vs-volkswagen-golf",
    evSlug: "nissan-leaf",
    iceSlug: "volkswagen-golf",
    tier: 1,
    evPricePremiumGbp: 4500,
    rationale:
      "A practical entry-level EV versus one of Britain's most recognisable petrol hatchbacks.",
  },
  {
    slug: "hyundai-ioniq-5-vs-bmw-x3",
    evSlug: "hyundai-ioniq-5",
    iceSlug: "bmw-x3",
    tier: 1,
    evPricePremiumGbp: -4000,
    rationale:
      "The Ioniq 5 is actually cheaper to buy than the X3 — and dramatically cheaper to run.",
  },
  // ── Tier 2 ──────────────────────────────────────────────────
  {
    slug: "kia-ev6-vs-audi-a4",
    evSlug: "kia-ev6",
    iceSlug: "audi-a4",
    tier: 2,
    evPricePremiumGbp: 4000,
    rationale:
      "Kia's performance crossover EV compared with Audi's premium saloon favourite.",
  },
  {
    slug: "kia-ev6-vs-bmw-3-series",
    evSlug: "kia-ev6",
    iceSlug: "bmw-3-series",
    tier: 2,
    evPricePremiumGbp: 6000,
    rationale:
      "A stylish EV crossover versus a benchmark executive saloon — a useful upper-mid-market comparison.",
  },
  {
    slug: "volkswagen-id4-vs-volkswagen-tiguan",
    evSlug: "volkswagen-id4",
    iceSlug: "volkswagen-tiguan",
    tier: 2,
    evPricePremiumGbp: 9000,
    rationale:
      "VW vs VW — the same brand's electric and petrol SUVs directly compared.",
  },
  {
    slug: "polestar-2-vs-bmw-3-series",
    evSlug: "polestar-2",
    iceSlug: "bmw-3-series",
    tier: 2,
    evPricePremiumGbp: 8000,
    rationale:
      "Polestar designed the 2 specifically to target BMW 3 Series buyers considering the switch.",
  },
  {
    slug: "hyundai-ioniq-6-vs-bmw-3-series",
    evSlug: "hyundai-ioniq-6",
    iceSlug: "bmw-3-series",
    tier: 2,
    evPricePremiumGbp: 3000,
    rationale:
      "The Ioniq 6 is one of the most efficient EVs on sale — how does it stack up against the 3 Series benchmark?",
  },
  {
    slug: "nissan-leaf-vs-vauxhall-astra",
    evSlug: "nissan-leaf",
    iceSlug: "vauxhall-astra",
    tier: 2,
    evPricePremiumGbp: 6000,
    rationale:
      "Two practical family cars at opposite ends of the fuel debate — the entry-level EV case.",
  },
  // ── Tier 3 ──────────────────────────────────────────────────
  {
    slug: "audi-q4-etron-vs-audi-q5",
    evSlug: "audi-q4-etron",
    iceSlug: "audi-q5",
    tier: 3,
    evPricePremiumGbp: -5000,
    rationale:
      "Same Audi badge, different fuel — and the Q4 e-tron is actually the cheaper car to buy.",
  },
  {
    slug: "tesla-model-s-vs-bmw-5-series",
    evSlug: "tesla-model-s",
    iceSlug: "bmw-5-series",
    tier: 3,
    evPricePremiumGbp: 33000,
    rationale:
      "The executive prestige comparison — where the purchase premium is high but so is the mileage.",
  },
  {
    slug: "smart-number-1-vs-mini-hatch",
    evSlug: "smart-number-1",
    iceSlug: "mini-hatch",
    tier: 3,
    evPricePremiumGbp: 12000,
    rationale:
      "Premium small cars compared — the Smart #1 targets exactly the Mini buyer considering an EV.",
  },
  {
    slug: "byd-seal-vs-honda-civic",
    evSlug: "byd-seal",
    iceSlug: "honda-civic",
    tier: 3,
    evPricePremiumGbp: 11000,
    rationale:
      "BYD's executive saloon taking on the Civic — a test of the new Chinese challengers in UK fuel economics.",
  },
  // ── Phase 2: New comparison pairs ──────────────────────────
  // Tier 1 — High-volume brand-vs-brand matches
  {
    slug: "peugeot-e-208-vs-peugeot-208",
    evSlug: "peugeot-e-208",
    iceSlug: "peugeot-208",
    tier: 1,
    evPricePremiumGbp: 7000,
    rationale:
      "The purest same-car EV vs petrol comparison — identical body, same brand, different powertrain.",
  },
  {
    slug: "vauxhall-corsa-electric-vs-vauxhall-corsa",
    evSlug: "vauxhall-corsa-electric",
    iceSlug: "vauxhall-corsa",
    tier: 1,
    evPricePremiumGbp: 8500,
    rationale:
      "Britain's bestselling supermini in electric and petrol form — the UK's most common like-for-like comparison.",
  },
  {
    slug: "volkswagen-id3-vs-volkswagen-golf",
    evSlug: "volkswagen-id3",
    iceSlug: "volkswagen-golf",
    tier: 1,
    evPricePremiumGbp: 4000,
    rationale:
      "VW's electric hatchback versus its most iconic petrol hatchback — the Golf replacement question.",
  },
  {
    slug: "bmw-i4-vs-bmw-3-series",
    evSlug: "bmw-i4",
    iceSlug: "bmw-3-series",
    tier: 1,
    evPricePremiumGbp: 12000,
    rationale:
      "BMW's own electric saloon versus its benchmark petrol executive car — the clearest like-for-like BMW comparison.",
  },
  {
    slug: "volvo-ex30-vs-nissan-qashqai",
    evSlug: "volvo-ex30",
    iceSlug: "nissan-qashqai",
    tier: 1,
    evPricePremiumGbp: 5000,
    rationale:
      "Volvo's affordable new EV against Britain's bestselling family SUV — a compelling crossover match-up.",
  },
  {
    slug: "byd-dolphin-vs-volkswagen-golf",
    evSlug: "byd-dolphin",
    iceSlug: "volkswagen-golf",
    tier: 1,
    evPricePremiumGbp: -1000,
    rationale:
      "The BYD Dolphin is cheaper to buy AND cheaper to run than the Golf — making it a uniquely strong case for EV switching.",
  },
  // Tier 2 — Strong cross-brand segment matches
  {
    slug: "peugeot-e-2008-vs-peugeot-2008",
    evSlug: "peugeot-e-2008",
    iceSlug: "peugeot-2008",
    tier: 2,
    evPricePremiumGbp: 9000,
    rationale:
      "Same-model compact SUV comparison from Peugeot — isolating the pure electric vs petrol running cost difference.",
  },
  {
    slug: "vauxhall-mokka-electric-vs-vauxhall-mokka",
    evSlug: "vauxhall-mokka-electric",
    iceSlug: "vauxhall-mokka",
    tier: 2,
    evPricePremiumGbp: 9500,
    rationale:
      "Same Vauxhall compact SUV body, different powertrains — a clean like-for-like comparison.",
  },
  {
    slug: "ford-mustang-mach-e-vs-ford-kuga",
    evSlug: "ford-mustang-mach-e",
    iceSlug: "ford-kuga",
    tier: 2,
    evPricePremiumGbp: 8000,
    rationale:
      "Ford's own EV SUV against Ford's own petrol SUV — how much can you save by staying within the Blue Oval?",
  },
  {
    slug: "hyundai-kona-electric-vs-hyundai-tucson",
    evSlug: "hyundai-kona-electric",
    iceSlug: "hyundai-tucson",
    tier: 2,
    evPricePremiumGbp: 2000,
    rationale:
      "Hyundai's affordable EV against Hyundai's bestselling petrol SUV — a practical family comparison.",
  },
  {
    slug: "kia-niro-ev-vs-kia-sportage",
    evSlug: "kia-niro-ev",
    iceSlug: "kia-sportage",
    tier: 2,
    evPricePremiumGbp: 2000,
    rationale:
      "Kia vs Kia — the Niro EV offers lower running costs, but can it match the Sportage's space and versatility?",
  },
  {
    slug: "cupra-born-vs-volkswagen-golf",
    evSlug: "cupra-born",
    iceSlug: "volkswagen-golf",
    tier: 2,
    evPricePremiumGbp: 3000,
    rationale:
      "The Cupra Born shares VW Group underpinnings with the Golf — similar platform, very different fuel bills.",
  },
  {
    slug: "skoda-enyaq-iv-vs-skoda-kodiaq",
    evSlug: "skoda-enyaq-iv",
    iceSlug: "skoda-kodiaq",
    tier: 2,
    evPricePremiumGbp: 6000,
    rationale:
      "Skoda's electric family SUV versus its petrol family SUV — a practical Czech comparison.",
  },
  {
    slug: "renault-megane-e-tech-vs-ford-focus",
    evSlug: "renault-megane-e-tech",
    iceSlug: "ford-focus",
    tier: 2,
    evPricePremiumGbp: 11000,
    rationale:
      "France's answer to the family hatchback EV question versus the most familiar British hatchback.",
  },
  {
    slug: "volvo-xc40-recharge-vs-volvo-xc40",
    evSlug: "volvo-xc40-recharge",
    iceSlug: "volvo-xc40",
    tier: 2,
    evPricePremiumGbp: 7000,
    rationale:
      "The same Volvo XC40 body in electric and petrol form — the purest premium like-for-like comparison.",
  },
  {
    slug: "bmw-ix1-vs-bmw-x3",
    evSlug: "bmw-ix1",
    iceSlug: "bmw-x3",
    tier: 2,
    evPricePremiumGbp: -3000,
    rationale:
      "BMW's entry electric SUV versus its bestselling petrol SUV — and the iX1 is actually cheaper to buy.",
  },
  {
    slug: "mercedes-eqa-vs-mercedes-c-class",
    evSlug: "mercedes-eqa",
    iceSlug: "mercedes-c-class",
    tier: 2,
    evPricePremiumGbp: 2000,
    rationale:
      "Mercedes' most affordable EV versus its entry executive saloon — the premium brand switching question.",
  },
  {
    slug: "mini-electric-vs-mini-hatch",
    evSlug: "mini-electric",
    iceSlug: "mini-hatch",
    tier: 2,
    evPricePremiumGbp: 7000,
    rationale:
      "The same Mini badge in electric and petrol form — a city car head-to-head with clear results.",
  },
  // Tier 3 — Cross-brand disruption matches
  {
    slug: "byd-dolphin-vs-vauxhall-corsa",
    evSlug: "byd-dolphin",
    iceSlug: "vauxhall-corsa",
    tier: 3,
    evPricePremiumGbp: 3000,
    rationale:
      "BYD's budget EV entry versus Britain's bestselling supermini — the new mass-market EV switching question.",
  },
  {
    slug: "tesla-model-3-vs-mercedes-c-class",
    evSlug: "tesla-model-3",
    iceSlug: "mercedes-c-class",
    tier: 3,
    evPricePremiumGbp: 3000,
    rationale:
      "Tesla's bestseller against Mercedes' entry executive — two very different takes on the premium saloon.",
  },
  {
    slug: "volvo-ex30-vs-ford-puma",
    evSlug: "volvo-ex30",
    iceSlug: "ford-puma",
    tier: 3,
    evPricePremiumGbp: 8000,
    rationale:
      "Volvo's compact EV against Ford's bestselling compact crossover — a practical small SUV comparison.",
  },
  {
    slug: "tesla-model-y-vs-nissan-qashqai",
    evSlug: "tesla-model-y",
    iceSlug: "nissan-qashqai",
    tier: 3,
    evPricePremiumGbp: 15000,
    rationale:
      "The world's bestselling EV vs the UK's bestselling family SUV — can lower running costs justify the premium?",
  },
  {
    slug: "fiat-500e-vs-vauxhall-corsa",
    evSlug: "fiat-500e",
    iceSlug: "vauxhall-corsa",
    tier: 3,
    evPricePremiumGbp: 5000,
    rationale:
      "The stylish electric city car versus Britain's favourite petrol supermini — a compact urban comparison.",
  },
  {
    slug: "hyundai-ioniq-5-vs-hyundai-tucson",
    evSlug: "hyundai-ioniq-5",
    iceSlug: "hyundai-tucson",
    tier: 3,
    evPricePremiumGbp: 8000,
    rationale:
      "Hyundai's own EV flagship versus its bestselling petrol SUV — a same-brand family SUV comparison.",
  },
  {
    slug: "kia-ev6-vs-kia-sportage",
    evSlug: "kia-ev6",
    iceSlug: "kia-sportage",
    tier: 3,
    evPricePremiumGbp: 5000,
    rationale:
      "Kia's award-winning EV versus its bestselling petrol SUV — the same brand, very different running costs.",
  },
  {
    slug: "skoda-enyaq-iv-vs-nissan-qashqai",
    evSlug: "skoda-enyaq-iv",
    iceSlug: "nissan-qashqai",
    tier: 3,
    evPricePremiumGbp: 8000,
    rationale:
      "Skoda's practical electric family SUV against the UK's most popular petrol crossover.",
  },
  {
    slug: "byd-atto-3-vs-nissan-qashqai",
    evSlug: "byd-atto-3",
    iceSlug: "nissan-qashqai",
    tier: 3,
    evPricePremiumGbp: 2000,
    rationale:
      "BYD's compact SUV against the Qashqai — a budget EV crossover against the UK's go-to family SUV.",
  },
  {
    slug: "peugeot-e-208-vs-vauxhall-corsa",
    evSlug: "peugeot-e-208",
    iceSlug: "vauxhall-corsa",
    tier: 3,
    evPricePremiumGbp: 8000,
    rationale:
      "Two of the UK's most popular superminis — one electric, one petrol — from rival brands.",
  },
  {
    slug: "cupra-born-vs-seat-leon",
    evSlug: "cupra-born",
    iceSlug: "seat-leon",
    tier: 3,
    evPricePremiumGbp: 6000,
    rationale:
      "Sister brands from the VW Group — the Cupra Born and SEAT Leon share roots but differ in running costs.",
  },
  {
    slug: "ford-mustang-mach-e-vs-bmw-x3",
    evSlug: "ford-mustang-mach-e",
    iceSlug: "bmw-x3",
    tier: 3,
    evPricePremiumGbp: -2000,
    rationale:
      "Ford's EV SUV is actually cheaper to buy than the BMW X3 — and dramatically cheaper to run.",
  },
  {
    slug: "volkswagen-id4-vs-nissan-qashqai",
    evSlug: "volkswagen-id4",
    iceSlug: "nissan-qashqai",
    tier: 3,
    evPricePremiumGbp: 9000,
    rationale:
      "VW's electric family SUV versus the UK's most popular petrol crossover — a mainstream family comparison.",
  },
  {
    slug: "bmw-i4-vs-audi-a4",
    evSlug: "bmw-i4",
    iceSlug: "audi-a4",
    tier: 3,
    evPricePremiumGbp: 14000,
    rationale:
      "Two German executive saloons from rival brands — the electric BMW versus the petrol Audi.",
  },
];

export function findComparison(slug: string): ComparisonPair | undefined {
  return comparisons.find((c) => c.slug === slug);
}

