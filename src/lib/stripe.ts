import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-05-28.basil",
});

export const GENOMIC_PRODUCTS = {
  WES: {
    id: "WES",
    name: "Whole Exome Sequencing",
    description: "Comprehensive protein-coding gene analysis - 20,000+ genes",
    priceInPaise: 2500000,
    metadata: { test_type: "WES", coverage: "100x" },
  },
  BGE: {
    id: "BGE",
    name: "Blended Genome-Exome",
    description: "Hybrid approach combining WES depth with genome-wide coverage",
    priceInPaise: 3850000,
    metadata: { test_type: "BGE", coverage: "30x+100x" },
  },
  WGS: {
    id: "WGS",
    name: "Whole Genome Sequencing",
    description: "Complete 3 billion base pair analysis - 100% of your DNA",
    priceInPaise: 5500000,
    metadata: { test_type: "WGS", coverage: "30x" },
  },
} as const;

export type GenomicProductId = keyof typeof GENOMIC_PRODUCTS;
