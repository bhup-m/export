
import {
  ClipboardList,
  Sprout,
  SearchCheck,
  ListFilter,
  PackageCheck,
  Truck,
  Handshake,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";

export const sourcingProcess = [
  {
    id: "buyer-requirements",
    number: "01",
    icon: ClipboardList,
    title: "Understanding Buyer Requirements",
    subtitle: "Every Order Begins with Understanding",
    description:
      "We begin by understanding the buyer's product requirements, destination market, expected quantity, quality specifications and preferred delivery schedule.",
    highlights: [
      "Product and quantity requirements",
      "Quality and grade specifications",
      "Destination and delivery preferences",
    ],
    outcome: "Clearly defined sourcing requirements",
  },
  {
    id: "agricultural-sourcing",
    number: "02",
    icon: Sprout,
    title: "Agricultural Sourcing",
    subtitle: "Connecting with the Right Sources",
    description:
      "Based on the requirements, we explore suitable procurement opportunities through agricultural relationships, regional merchants and available supplier networks.",
    highlights: [
      "Farmer and merchant coordination",
      "Seasonal availability assessment",
      "Suitable procurement arrangements",
    ],
    outcome: "Product-specific sourcing plan",
  },
  {
    id: "produce-selection",
    number: "03",
    icon: SearchCheck,
    title: "Produce Selection",
    subtitle: "Focused on Product Condition",
    description:
      "Produce selection considers freshness, physical condition, maturity and suitability for the intended market, based on agreed buyer requirements.",
    highlights: [
      "Visual product assessment",
      "Freshness and maturity considerations",
      "Selection against agreed specifications",
    ],
    outcome: "Produce selected against requirements",
  },
  {
    id: "sorting-grading",
    number: "04",
    icon: ListFilter,
    title: "Sorting & Grading",
    subtitle: "Consistency in Every Selection",
    description:
      "Sorting and grading arrangements are planned according to product characteristics, buyer specifications and applicable destination market requirements.",
    highlights: [
      "Size and grade classification",
      "Removal of unsuitable produce",
      "Buyer-specific quality requirements",
    ],
    outcome: "Produce prepared for agreed grades",
  },
  {
    id: "packaging-preparation",
    number: "05",
    icon: PackageCheck,
    title: "Packaging Preparation",
    subtitle: "Prepared for the Journey",
    description:
      "Packaging options are evaluated according to product characteristics, handling requirements, transportation conditions and destination market expectations.",
    highlights: [
      "Product-specific packaging",
      "Handling and protection considerations",
      "Buyer-specific labeling requirements",
    ],
    outcome: "Packaging aligned with order requirements",
  },
  {
    id: "dispatch-coordination",
    number: "06",
    icon: Truck,
    title: "Dispatch Coordination",
    subtitle: "Preparing for the Next Destination",
    description:
      "Dispatch arrangements are coordinated with relevant service providers, considering transportation, applicable documentation and agreed shipment requirements.",
    highlights: [
      "Transportation coordination",
      "Applicable documentation checks",
      "Shipment readiness communication",
    ],
    outcome: "Coordinated dispatch preparation",
  },
];

export const sourcingPrinciples = [
  {
    id: "buyer-focused",
    icon: Handshake,
    title: "Buyer-Focused Approach",
    description:
      "Sourcing arrangements aligned with agreed business requirements.",
  },
  {
    id: "quality-focused",
    icon: ShieldCheck,
    title: "Quality Considerations",
    description:
      "Attention to product condition, grade and suitability.",
  },
  {
    id: "communication",
    icon: MessageSquare,
    title: "Transparent Communication",
    description:
      "Clear communication throughout sourcing and supply coordination.",
  },
];
