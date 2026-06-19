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
];

export function findComparison(slug: string): ComparisonPair | undefined {
  return comparisons.find((c) => c.slug === slug);
}
