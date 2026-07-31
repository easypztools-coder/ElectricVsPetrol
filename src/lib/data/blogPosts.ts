export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateDisplay: string;
  readingTimeMin: number;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "petrol-prices-spike-electricity-cap-falls-july-2026",
    title: "Petrol Just Spiked. Your Electricity Bill Just Fell. Let Me Explain.",
    excerpt: "Petrol and diesel jumped hard in July 2026 while the Ofgem price cap quietly dropped. EV Ian works out what that combination actually does to the EV vs petrol maths — and why public charging is the exception.",
    date: "2026-07-30",
    dateDisplay: "30 July 2026",
    readingTimeMin: 6,
    category: "Running Costs",
  },
  {
    slug: "the-great-british-supercharger-queue",
    title: "The Great British Supercharger Queue",
    excerpt: "Nothing prepares you for your first motorway rapid-charging stop. EV Ian recounts a formative Grantham experience, armed with a flask, a spreadsheet, and entirely the wrong expectations.",
    date: "2024-12-27",
    dateDisplay: "27 December 2024",
    readingTimeMin: 7,
    category: "Charging",
  },
  {
    slug: "ofgem-price-cap-what-it-means-for-ev-owners",
    title: "The Ofgem Price Cap: What It Actually Means for EV Owners",
    excerpt: "Every time the Ofgem price cap moves, someone asks whether EVs are still cheaper to run than petrol. EV Ian runs the numbers, properly, with the actual figures.",
    date: "2024-10-26",
    dateDisplay: "26 October 2024",
    readingTimeMin: 6,
    category: "Running Costs",
  },
  {
    slug: "i-drove-a-byd-seal-i-have-feelings",
    title: "I Drove a BYD Seal. I Have Feelings.",
    excerpt: "EV Ian test-drives the Chinese Tesla rival and discovers an unexpected problem: it is very good. This complicates things.",
    date: "2024-03-15",
    dateDisplay: "15 March 2024",
    readingTimeMin: 8,
    category: "Reviews",
  },
  {
    slug: "the-2030-ban-is-back-again",
    title: "The 2030 Ban Is Back (Again): What the New ICE Phase-Out Means for You",
    excerpt: "The UK government has reinstated the 2030 petrol and diesel ban. EV Ian explains what this actually means for people who buy cars now, with a notable lack of panic.",
    date: "2024-07-05",
    dateDisplay: "5 July 2024",
    readingTimeMin: 6,
    category: "Policy",
  },
  {
    slug: "vw-is-closing-factories-should-you-still-buy-an-id4",
    title: "VW Is Closing Factories. Should You Still Buy an ID.4?",
    excerpt: "Volkswagen announced factory closures for the first time in its history. EV Ian investigates whether this should change your decision to buy a VW electric car.",
    date: "2024-10-29",
    dateDisplay: "29 October 2024",
    readingTimeMin: 7,
    category: "Industry",
  },
  {
    slug: "one-in-five-public-chargers-was-broken",
    title: "One in Five Public Chargers Was Broken. Here's the Actual Data.",
    excerpt: "A ZapMap survey found 21% of public chargers were out of service. EV Ian looks at which networks are worst, what the government is doing about it, and how much it actually matters to your daily life.",
    date: "2024-09-18",
    dateDisplay: "18 September 2024",
    readingTimeMin: 7,
    category: "Charging",
  },
];

export function findBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
