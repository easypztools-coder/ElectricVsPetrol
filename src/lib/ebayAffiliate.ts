/**
 * eBay Partner Network (EPN) link building — "manual" tracking-parameter
 * method, which is all a plain Campaign ID supports (no Link Generator API
 * access). Rotation IDs (mkrid) are eBay's fixed, public per-site network
 * IDs; only ebay.* hosts are rewritten so this never touches other links.
 */
const EPN_ROTATION_IDS: Record<string, string> = {
  "ebay.co.uk": "710-53481-19255-0",
  "ebay.com": "711-53200-19255-0",
  "ebay.de": "707-53477-19255-0",
  "ebay.ie": "705-53470-19255-0",
};

const DEFAULT_ROTATION_ID = EPN_ROTATION_IDS["ebay.co.uk"];

export function toEbayAffiliateLink(url: string | undefined | null, customId?: string): string {
  if (!url) return "";

  const campaignId = process.env.NEXT_PUBLIC_EBAY_EPN_CAMPAIGN_ID;
  if (!campaignId) return url;

  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return url;
  }

  const host = parsed.hostname.replace(/^www\./, "").replace(/^m\./, "");
  const rotationId = EPN_ROTATION_IDS[host];
  if (!rotationId && !host.endsWith(".ebay.com") && !host.endsWith(".ebay.co.uk")) {
    // Not a recognised eBay host — leave non-eBay URLs untouched.
    return url;
  }

  parsed.searchParams.set("mkevt", "1");
  parsed.searchParams.set("mkcid", "1");
  parsed.searchParams.set("mkrid", rotationId ?? DEFAULT_ROTATION_ID);
  parsed.searchParams.set("campid", campaignId);
  parsed.searchParams.set("toolid", "10001");
  if (customId) {
    parsed.searchParams.set("customid", customId.slice(0, 256));
  }

  return parsed.toString();
}
