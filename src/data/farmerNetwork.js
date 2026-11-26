
import {
  Sprout,
  Handshake,
  Store,
  Globe2,
  Network,
  PackageCheck,
  Users,
} from "lucide-react";

export const farmerNetwork = [
  {
    id: "farmers-growers",
    number: "01",
    icon: Sprout,
    title: "Farmers & Growers",
    subtitle: "The Foundation of Agriculture",
    description:
      "Established agricultural relationships help us understand seasonal produce, cultivation patterns and regional sourcing opportunities.",
    highlights: [
      "Agricultural relationships",
      "Seasonal produce knowledge",
      "Regional sourcing opportunities",
    ],
  },
  {
    id: "commission-agents",
    number: "02",
    icon: Handshake,
    title: "Commission Agents",
    subtitle: "Experience & Market Knowledge",
    description:
      "Our family background in the agricultural commission business provides practical knowledge of produce markets, procurement and commercial relationships.",
    highlights: [
      "30+ years of family experience",
      "Agricultural market understanding",
      "Produce selection knowledge",
    ],
  },
  {
    id: "regional-merchants",
    number: "03",
    icon: Store,
    title: "Regional Merchants",
    subtitle: "A Wider Sourcing Network",
    description:
      "Relationships with agricultural merchants and regional suppliers support flexible sourcing arrangements based on product and buyer requirements.",
    highlights: [
      "Regional supplier relationships",
      "Flexible sourcing arrangements",
      "Product-specific procurement",
    ],
  },
  {
    id: "international-buyers",
    number: "04",
    icon: Globe2,
    title: "International Buyers",
    subtitle: "Connecting Global Opportunities",
    description:
      "We aim to connect our agricultural sourcing foundation with importers, distributors and wholesalers seeking Indian agricultural products.",
    highlights: [
      "Importer relationships",
      "Buyer-specific requirements",
      "Long-term partnership vision",
    ],
  },
];

export const sourcingNetworkFlow = [
  {
    id: "farmers",
    icon: Sprout,
    title: "Farmers",
    description: "Agricultural produce",
  },
  {
    id: "market-network",
    icon: Network,
    title: "Market Network",
    description: "Sourcing relationships",
  },
  {
    id: "sharanga",
    icon: PackageCheck,
    title: "Sharanga Global Exports",
    description: "Sourcing coordination",
    featured: true,
  },
  {
    id: "buyers",
    icon: Globe2,
    title: "Global Buyers",
    description: "International opportunities",
  },
];

export const networkAdvantages = [
  {
    id: "relationships",
    icon: Users,
    title: "Relationship-Driven Sourcing",
  },
  {
    id: "flexibility",
    icon: Network,
    title: "Flexible Procurement Approach",
  },
  {
    id: "quality",
    icon: PackageCheck,
    title: "Quality-Focused Selection",
  },
];
