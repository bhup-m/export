
import {
  MapPin,
  Sprout,
  Package,
  Network,
  CalendarDays,
  PackageCheck,
  Handshake,
  Store,
} from "lucide-react";

export const sourcingFoundation = {
  name: "Amalner",
  location: "Jalgaon, Maharashtra, India",
  label: "OUR AGRICULTURAL ROOTS",
  experience: "30+",
  experienceLabel: "Years of Family Agricultural Heritage",
  description:
    "Our agricultural foundation is rooted in Amalner, where our family has been involved in the agricultural commission and fresh produce business for more than three decades.",
  highlights: [
    {
      id: "market-relationships",
      icon: Handshake,
      title: "Established Market Relationships",
      description:
        "Long-standing agricultural and commercial relationships.",
    },
    {
      id: "market-knowledge",
      icon: Store,
      title: "Agricultural Market Knowledge",
      description:
        "Practical experience in regional produce markets.",
    },
    {
      id: "sourcing-foundation",
      icon: MapPin,
      title: "Regional Sourcing Foundation",
      description:
        "An agricultural base for developing wider sourcing opportunities.",
    },
  ],
};

export const sourcingRegions = [
  {
    id: "jalgaon",
    icon: Sprout,
    name: "Jalgaon",
    location: "Maharashtra, India",
    label: "REGIONAL AGRICULTURAL KNOWLEDGE",
    description:
      "Our familiarity with the Jalgaon agricultural region provides practical knowledge of local produce markets, seasonal availability and regional supplier relationships.",
    products: [
      "Bananas",
      "Fresh Vegetables",
      "Seasonal Produce",
    ],
  },
  {
    id: "nashik",
    icon: Package,
    name: "Nashik",
    location: "Maharashtra, India",
    label: "PRODUCE SOURCING OPPORTUNITIES",
    description:
      "Nashik offers important agricultural sourcing opportunities, particularly for onions and other fresh produce, subject to seasonal availability and supplier arrangements.",
    products: [
      "Red Onions",
      "Fresh Vegetables",
      "Seasonal Produce",
    ],
  },
  {
    id: "wider-india",
    icon: Network,
    name: "Wider India",
    location: "Potential Agricultural Sourcing Regions",
    label: "EXPANDING SOURCING POSSIBILITIES",
    description:
      "We aim to develop wider procurement relationships across Indian agricultural regions according to product requirements, seasonal conditions and buyer specifications.",
    products: [
      "Fresh Fruits",
      "Fresh Vegetables",
      "Buyer-Specific Requirements",
    ],
  },
];

export const regionalAdvantages = [
  {
    id: "seasonal-knowledge",
    icon: CalendarDays,
    title: "Seasonal Knowledge",
    description:
      "Understanding agricultural seasons and produce availability.",
  },
  {
    id: "flexible-sourcing",
    icon: Network,
    title: "Flexible Sourcing",
    description:
      "Exploring procurement options based on buyer requirements.",
  },
  {
    id: "produce-selection",
    icon: PackageCheck,
    title: "Quality-Focused Selection",
    description:
      "Considering product condition, grade and market requirements.",
  },
];
