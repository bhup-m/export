
import {
  Ship,
  Warehouse,
  Truck,
  ShoppingCart,
  Utensils,
  Handshake,
  MessagesSquare,
  ClipboardList,
  PackageCheck,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";

export const buyerCategories = [
  {
    id: "importers",
    icon: Ship,
    title: "International Importers",
    description:
      "Exploring agricultural sourcing arrangements with importers seeking fresh Indian produce aligned with their market and product requirements.",
    focus: "International Sourcing",
  },

  {
    id: "wholesalers",
    icon: Warehouse,
    title: "Wholesalers",
    description:
      "Exploring bulk produce supply opportunities through product selection, grading and commercially suitable order quantities.",
    focus: "Bulk Supply",
  },

  {
    id: "distributors",
    icon: Truck,
    title: "Distributors",
    description:
      "Developing prospective relationships with distribution businesses serving regional agricultural and food supply markets.",
    focus: "Distribution Partnerships",
  },

  {
    id: "retail",
    icon: ShoppingCart,
    title: "Retail Supply Partners",
    description:
      "Understanding retail-oriented sourcing requirements, including product consistency, packaging preferences and supply planning.",
    focus: "Retail Sourcing",
  },

  {
    id: "hospitality",
    icon: Utensils,
    title: "Food Service & Hospitality",
    description:
      "Exploring customized agricultural sourcing opportunities for food service distributors and hospitality supply businesses.",
    focus: "Customized Requirements",
  },

  {
    id: "trading",
    icon: Handshake,
    title: "Trading Companies",
    description:
      "Building prospective commercial relationships with agricultural trading businesses through transparent communication and mutual opportunities.",
    focus: "Long-Term Trade",
  },
];

export const partnershipProcess = [
  {
    id: "connect",
    step: "01",
    icon: MessagesSquare,
    title: "Connect",
    description:
      "Initiate a conversation and share your business profile, destination market and sourcing interests.",
  },

  {
    id: "understand",
    step: "02",
    icon: ClipboardList,
    title: "Understand",
    description:
      "Discuss product specifications, required quantities, packaging preferences and commercial expectations.",
  },

  {
    id: "plan",
    step: "03",
    icon: PackageCheck,
    title: "Plan",
    description:
      "Assess sourcing feasibility, applicable trade requirements, pricing and potential shipment arrangements.",
  },

  {
    id: "grow",
    step: "04",
    icon: Handshake,
    title: "Grow Together",
    description:
      "Work towards mutually agreed supply arrangements and sustainable long-term business relationships.",
  },
];

export const partnershipCommitments = [
  {
    id: "transparency",
    icon: ShieldCheck,
    title: "Transparent Communication",
    description:
      "Clear discussions around specifications, commercial terms and supply expectations.",
  },

  {
    id: "buyer-focused",
    icon: Target,
    title: "Buyer-Focused Approach",
    description:
      "Understanding individual sourcing needs before proposing a supply arrangement.",
  },

  {
    id: "mutual-growth",
    icon: TrendingUp,
    title: "Mutual Growth",
    description:
      "A long-term vision focused on commercially sustainable business relationships.",
  },
];

export const partnershipDisclaimer =
  "Partnership opportunities are subject to mutual agreement, product availability, commercial feasibility and applicable export and import requirements.";
