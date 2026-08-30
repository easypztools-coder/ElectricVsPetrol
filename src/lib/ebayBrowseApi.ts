// Thin client for eBay's Browse API (item_summary/search) — used to show
// live, currently-buyable listings (used cars, accessories) alongside the
// site's running-cost content.
//
// Deliberately strips seller-identifying fields (username, feedback score)
// from everything this returns, even though the Browse API includes them by
// default. Only public listing facts (item id, title, price, image, URL)
// are ever normalised out of a response.
export interface EbayLiveListing {
  itemId: string;
  title: string;
  price: number;
  currency: string;
  imageUrl: string | null;
  itemWebUrl: string;
  condition: string | null;
}

interface CachedToken {
  accessToken: string;
  expiresAt: number;
}

let cachedToken: CachedToken | null = null;

async function getAccessToken(): Promise<string> {
  if (cachedToken && cachedToken.expiresAt > Date.now() + 60_000) {
    return cachedToken.accessToken;
  }

  const appId = process.env.EBAY_APP_ID;
  const certId = process.env.EBAY_CERT_ID;
  if (!appId || !certId) {
    throw new Error("EBAY_APP_ID / EBAY_CERT_ID not configured");
  }

  const basicAuth = Buffer.from(`${appId}:${certId}`).toString("base64");
  const res = await fetch("https://api.ebay.com/identity/v1/oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${basicAuth}`,
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      scope: "https://api.ebay.com/oauth/api_scope",
    }),
  });

  if (!res.ok) {
    throw new Error(`eBay OAuth token request failed: ${res.status} ${await res.text()}`);
  }

  const json = await res.json();
  cachedToken = {
    accessToken: json.access_token,
    // expires_in is seconds (2 hours in practice) — cache it in-process so
    // repeated page views don't re-authenticate every time.
    expiresAt: Date.now() + json.expires_in * 1000,
  };
  return cachedToken.accessToken;
}

// eBay's "Cars" leaf category on the UK site — restricting to it keeps
// results to actual vehicles rather than die-cast models, spare parts, or
// unrelated listings whose title happens to contain a word like "Model".
const CARS_CATEGORY_ID = "9801";

// Sellers routinely abbreviate the manufacturer name in listing titles
// (e.g. "VW ID4" rather than "Volkswagen ID.4") — without these, a strict
// make-name match wrongly discards otherwise-relevant listings.
const MAKE_ALIASES: Record<string, string[]> = {
  volkswagen: ["vw"],
  mercedes: ["merc", "mercedesbenz"],
  chevrolet: ["chevy"],
};

// Strips everything but letters/digits so "ID.4" and "ID4", or "#1" and "1
// series", compare equal regardless of punctuation differences.
function cleanForMatch(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]/g, "");
}

/**
 * Searches live UK Buy It Now / auction car listings for a given make and
 * model (e.g. "Volkswagen" / "ID.4"). eBay's own relevance ranking is loose
 * with short/common tokens (e.g. "Model" or "2" alone matching unrelated
 * cars — "Polestar 2" would otherwise match any Volvo listing that mentions
 * a "Polestar" trim package), so this over-fetches and then keeps only
 * listings whose title contains the make (or a known abbreviation)
 * immediately followed by the model name, punctuation/spacing aside —
 * matching how sellers actually write titles ("VW ID4 ...", "Tesla Model 3
 * ...", "Smart #1 ...").
 */
export async function searchEbayLiveListings(make: string, model: string, limit = 8): Promise<EbayLiveListing[]> {
  const token = await getAccessToken();

  const query = `${make} ${model}`.trim();

  const url = new URL("https://api.ebay.com/buy/browse/v1/item_summary/search");
  url.searchParams.set("q", query);
  url.searchParams.set("category_ids", CARS_CATEGORY_ID);
  url.searchParams.set("limit", "50");
  // Buying format filter keeps out completed/unavailable listing types the
  // Browse API can still surface as search hits.
  url.searchParams.set("filter", "buyingOptions:{FIXED_PRICE|AUCTION}");

  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${token}`,
      "X-EBAY-C-MARKETPLACE-ID": "EBAY_GB",
    },
  });

  if (!res.ok) {
    throw new Error(`eBay Browse API search failed: ${res.status} ${await res.text()}`);
  }

  const json = await res.json();
  const items: any[] = json.itemSummaries ?? [];

  const cleanMake = cleanForMatch(make);
  const cleanModel = cleanForMatch(model);
  const makeModelPhrases = [cleanMake, ...(MAKE_ALIASES[cleanMake] ?? [])].map((alias) => alias + cleanModel);
  // Some model names already embed the make (e.g. "MG4" for make "MG") —
  // sellers often don't repeat the make in that case, so accept the model
  // name on its own too.
  if (cleanModel.startsWith(cleanMake)) {
    makeModelPhrases.push(cleanModel);
  }

  const relevant = items.filter((item) => {
    if (item.price?.value == null) return false;
    const title = cleanForMatch(String(item.title ?? ""));
    return makeModelPhrases.some((phrase) => title.includes(phrase));
  });

  return relevant.slice(0, limit).map((item) => ({
    itemId: String(item.itemId ?? ""),
    title: String(item.title ?? ""),
    price: item.price?.value != null ? parseFloat(item.price.value) : 0,
    currency: item.price?.currency ?? "GBP",
    imageUrl: item.image?.imageUrl ?? item.thumbnailImages?.[0]?.imageUrl ?? null,
    itemWebUrl: String(item.itemWebUrl ?? ""),
    condition: item.condition ?? null,
  }));
}
