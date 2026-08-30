import { NextResponse } from "next/server";
import { searchEbayLiveListings, type EbayLiveListing } from "@/lib/ebayBrowseApi";

interface CacheEntry {
  listings: EbayLiveListing[];
  fetchedAt: number;
}

// Simple in-memory cache — this site has no database, so we just keep
// results per query around for a while to avoid hitting the Browse API on
// every page view. Cold on each server restart/deploy, which is fine.
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour
const cache = new Map<string, CacheEntry>();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.trim();
  const limit = Math.min(Number(searchParams.get("limit")) || 8, 12);

  if (!query) {
    return NextResponse.json({ listings: [] });
  }

  const cacheKey = `${query}::${limit}`;
  const cached = cache.get(cacheKey);
  if (cached && Date.now() - cached.fetchedAt < CACHE_TTL_MS) {
    return NextResponse.json({ listings: cached.listings });
  }

  try {
    const listings = await searchEbayLiveListings(query, limit);
    cache.set(cacheKey, { listings, fetchedAt: Date.now() });
    return NextResponse.json({ listings });
  } catch (err) {
    console.error(`ebay-listings: search failed for "${query}":`, err);
    // Serve stale cache over an empty result if we have one.
    if (cached) {
      return NextResponse.json({ listings: cached.listings });
    }
    return NextResponse.json({ listings: [] });
  }
}
