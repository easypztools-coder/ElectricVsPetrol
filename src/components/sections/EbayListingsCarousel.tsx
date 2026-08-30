"use client";

import { useEffect, useState } from "react";
import { toEbayAffiliateLink } from "@/lib/ebayAffiliate";

interface LiveListing {
  itemId: string;
  title: string;
  price: number;
  currency: string;
  imageUrl: string | null;
  itemWebUrl: string;
  condition: string | null;
}

interface EbayListingsCarouselProps {
  /** Car make passed to eBay's Browse API, e.g. "Volkswagen". */
  make: string;
  /** Car model passed to eBay's Browse API, e.g. "ID.4". */
  model: string;
  /** Used to build the EPN customid tracking param, e.g. the page slug. */
  trackingId: string;
  title?: string;
}

export default function EbayListingsCarousel({
  make,
  model,
  trackingId,
  title = "Shop Live on eBay",
}: EbayListingsCarouselProps) {
  const [listings, setListings] = useState<LiveListing[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/ebay-listings?make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}&limit=10`)
      .then((r) => r.json())
      .then((json) => {
        if (!cancelled) setListings(json.listings ?? []);
      })
      .catch(() => {
        if (!cancelled) setListings([]);
      });
    return () => {
      cancelled = true;
    };
  }, [make, model]);

  // Nothing to show yet (still loading) or genuinely no live listings —
  // either way this section just doesn't render rather than showing an
  // empty shell.
  if (!listings || listings.length === 0) return null;

  return (
    <section className="my-10" aria-label="Live eBay listings">
      <div className="mb-3">
        <h3
          className="text-lg font-bold text-navy font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          {title}
        </h3>
        <p className="text-xs text-ev-grey mt-0.5">
          Currently listed — via the eBay Partner Network, we may earn commission on qualifying purchases.
        </p>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {listings.map((listing) => (
          <a
            key={listing.itemId}
            href={toEbayAffiliateLink(listing.itemWebUrl, trackingId)}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="group flex w-40 shrink-0 flex-col overflow-hidden rounded-xl border border-border-light bg-white transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="aspect-square w-full overflow-hidden bg-off-white">
              {listing.imageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={listing.imageUrl}
                  alt={listing.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : null}
            </div>
            <div className="flex flex-1 flex-col gap-1 p-2.5">
              <p className="line-clamp-2 text-[11px] leading-snug text-navy">{listing.title}</p>
              <p className="mt-auto text-sm font-bold text-ev-green">
                {listing.currency === "GBP" ? "£" : `${listing.currency} `}
                {listing.price.toFixed(2)}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
