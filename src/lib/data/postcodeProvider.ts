import type { PostcodeData } from "@/lib/types/costCalculator";
import { isValidUKPostcodeFormat } from "@/lib/calculations/evPetrolCost";

export function normalisePostcode(postcode: string): string {
  const cleaned = postcode.replace(/\s+/g, "").toUpperCase();
  if (cleaned.length >= 5) {
    return cleaned.slice(0, -3) + " " + cleaned.slice(-3);
  }
  return cleaned;
}

export function validatePostcode(postcode: string): boolean {
  if (!postcode || postcode.trim() === "") return false;
  return isValidUKPostcodeFormat(postcode);
}

/**
 * Looks up a postcode using the free postcodes.io API.
 * Falls back to a stub result if the request fails.
 * Keep postcode lookups server-side (or via route handler) before
 * adding any paid data sources.
 */
export async function lookupPostcode(postcode: string): Promise<PostcodeData> {
  const normalised = normalisePostcode(postcode);

  if (!validatePostcode(postcode)) {
    return {
      postcode,
      normalised,
      latitude: null,
      longitude: null,
      region: null,
      isValid: false,
    };
  }

  try {
    const encoded = encodeURIComponent(normalised);
    const res = await fetch(`https://api.postcodes.io/postcodes/${encoded}`, {
      next: { revalidate: 86400 }, // cache 24 h in Next.js server context
    });

    if (!res.ok) {
      return { postcode, normalised, latitude: null, longitude: null, region: null, isValid: false };
    }

    const json = await res.json();
    const result = json.result;

    return {
      postcode,
      normalised,
      latitude: result.latitude ?? null,
      longitude: result.longitude ?? null,
      region: result.region ?? result.nuts ?? null,
      isValid: true,
    };
  } catch {
    return {
      postcode,
      normalised,
      latitude: null,
      longitude: null,
      region: null,
      isValid: false,
    };
  }
}
