
import {
  Globe2,
  Ship,
  ShieldCheck,
  Handshake,
} from "lucide-react";

import middleEastImage from "../assets/images/markets/regions/middle-east.jpg";
import asiaImage from "../assets/images/markets/regions/asia.jpg";
import europeImage from "../assets/images/markets/regions/europe.jpg";
import africaImage from "../assets/images/markets/regions/africa.jpg";

export const regionalOpportunities = [
  {
    id: "middle-east",
    number: "01",
    name: "Middle East",
    icon: Globe2,
    image: middleEastImage,
    imageAlt: "Illustrative international trade imagery",

    subtitle: "Regional Trade & Distribution",

    description:
      "Exploring opportunities to connect Indian agricultural produce with international importers, wholesale markets and regional food distribution businesses.",

    buyerSegments: [
      "Fresh produce importers",
      "Wholesale distributors",
      "Food service suppliers",
    ],

    considerations: [
      "Product freshness and shelf life",
      "Buyer-specific packaging",
      "Shipment coordination",
    ],
  },

  {
    id: "asia",
    number: "02",
    name: "Asia",
    icon: Ship,
    image: asiaImage,
    imageAlt: "Illustrative international trade imagery",

    subtitle: "Agricultural Trade Connections",

    description:
      "Exploring regional agricultural trade relationships through product-focused sourcing, flexible supply discussions and transparent business communication.",

    buyerSegments: [
      "Agricultural importers",
      "Regional food distributors",
      "Retail supply partners",
    ],

    considerations: [
      "Seasonal product availability",
      "Product-specific requirements",
      "Destination import conditions",
    ],
  },

  {
    id: "europe",
    number: "03",
    name: "Europe",
    icon: ShieldCheck,
    image: europeImage,
    imageAlt: "Illustrative international trade imagery",

    subtitle: "Quality-Focused Market Exploration",

    description:
      "Exploring specification-driven agricultural sourcing opportunities with attention to product quality, documentation and applicable destination requirements.",

    buyerSegments: [
      "Specialized produce importers",
      "Wholesale trading companies",
      "Fresh produce distributors",
    ],

    considerations: [
      "Product specifications",
      "Food safety and traceability",
      "Applicable regulatory requirements",
    ],
  },

  {
    id: "africa",
    number: "04",
    name: "Africa",
    icon: Handshake,
    image: africaImage,
    imageAlt: "Illustrative international trade imagery",

    subtitle: "Emerging Business Relationships",

    description:
      "Exploring agricultural trade partnerships with importers and distribution businesses through buyer-specific discussions and responsible sourcing arrangements.",

    buyerSegments: [
      "Agricultural trading companies",
      "Wholesale importers",
      "Regional distributors",
    ],

    considerations: [
      "Commercial supply requirements",
      "Packaging and transport suitability",
      "Destination-specific documentation",
    ],
  },
];

export const regionalMarketNote =
  "The regions and buyer segments presented are prospective business opportunities. Product eligibility, market demand, commercial feasibility and destination requirements must be evaluated individually.";
