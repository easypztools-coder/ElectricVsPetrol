export interface AffiliateLink {
  label: string;
  url: string;
}

export const affiliateLinks = {
  // Octopus Energy £50 referral switch link
  octopusEnergy: {
    label: "Switch to Octopus Energy",
    url: "https://share.octopus.energy/clean-dodo-123", // swap with your live referral code
  },
  // Home Charger Installation lead quote form
  chargerInstallation: {
    label: "Get a Home Charger Quote",
    url: "https://electricvspetrol.co.uk/go/charger-quote", // swap with your affiliate link
  },
  // EV Salary Sacrifice / Leasing calculator quote partner
  salarySacrifice: {
    label: "Compare Salary Sacrifice Quotes",
    url: "https://electricvspetrol.co.uk/go/salary-sacrifice", // swap with your affiliate link
  },
};
