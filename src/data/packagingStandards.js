
import {
  Package,
  Box,
  Boxes,
  ShieldCheck,
  Wind,
  Thermometer,
  Layers,
  Tags,
  Truck,
} from "lucide-react";

import meshBagsImage from "../assets/images/quality/packaging/mesh-bags.jpg";

import corrugatedCartonsImage from "../assets/images/quality/packaging/corrugated-cartons.jpg";

import protectiveCratesImage from "../assets/images/quality/packaging/protective-crates.jpg";

export const packagingTypes = [
  {
    id: "mesh-net-bags",
    icon: Package,
    image: meshBagsImage,
    alt: "Agricultural produce packed in ventilated mesh bags",
    title: "Mesh & Net Bags",
    subtitle: "VENTILATED PACKAGING",

    description:
      "Mesh and net bags may be suitable for selected agricultural products requiring airflow, practical bulk handling and appropriate packaging configurations.",

    features: [
      "Air circulation considerations",
      "Bulk handling suitability",
      "Buyer-specific packing weights",
      "Product visibility",
    ],

    suitableProducts: [
      "Red Onion",
      "Other suitable produce",
    ],
  },

  {
    id: "corrugated-cartons",
    icon: Box,
    image: corrugatedCartonsImage,
    alt: "Fresh agricultural produce packed in corrugated cartons",
    title: "Corrugated Cartons",
    subtitle: "STRUCTURED PRODUCT PACKAGING",

    description:
      "Suitable corrugated cartons can provide organized product packing and physical protection when selected according to produce characteristics and transport requirements.",

    features: [
      "Product-specific carton design",
      "Protective packing configurations",
      "Ventilation where required",
      "Labelling and marking options",
    ],

    suitableProducts: [
      "Banana",
      "Pomegranate",
      "Fresh Okra",
      "Green Chilli",
    ],
  },

  {
    id: "protective-crates",
    icon: Boxes,
    image: protectiveCratesImage,
    alt: "Fresh vegetables arranged in protective agricultural crates",
    title: "Protective Crates",
    subtitle: "HANDLING & PRODUCT PROTECTION",

    description:
      "Appropriate crates may support produce collection, sorting, handling and transportation where suitable for the product and supply arrangement.",

    features: [
      "Structured product handling",
      "Physical protection considerations",
      "Stacking compatibility",
      "Product-specific configurations",
    ],

    suitableProducts: [
      "Tomato",
      "Fresh Vegetables",
      "Other suitable produce",
    ],
  },
];

export const handlingStandards = [
  {
    id: "product-protection",
    icon: ShieldCheck,
    title: "Product Protection",

    description:
      "Considering suitable packaging materials and handling practices to help minimize avoidable physical damage.",

    considerations: [
      "Protection against compression",
      "Appropriate cushioning where needed",
      "Packaging material suitability",
    ],
  },

  {
    id: "ventilation",
    icon: Wind,
    title: "Ventilation & Airflow",

    description:
      "Considering product-specific airflow and moisture management requirements during packing, storage and transportation.",

    considerations: [
      "Suitable ventilation design",
      "Air circulation requirements",
      "Moisture management",
    ],
  },

  {
    id: "temperature",
    icon: Thermometer,
    title: "Temperature Considerations",

    description:
      "Understanding relevant temperature and storage requirements according to the product, maturity and intended transportation conditions.",

    considerations: [
      "Product-specific temperature needs",
      "Storage condition considerations",
      "Cold-chain requirements where applicable",
    ],
  },

  {
    id: "stacking-loading",
    icon: Layers,
    title: "Stacking & Loading",

    description:
      "Considering appropriate stacking configurations and loading arrangements to support safe and suitable produce transportation.",

    considerations: [
      "Packaging strength",
      "Load distribution",
      "Avoiding excessive compression",
    ],
  },

  {
    id: "labelling",
    icon: Tags,
    title: "Labelling & Identification",

    description:
      "Considering relevant product identification, buyer-specific marking and applicable destination-market labelling requirements.",

    considerations: [
      "Product identification",
      "Batch or lot references where applicable",
      "Buyer and regulatory requirements",
    ],
  },

  {
    id: "transport-readiness",
    icon: Truck,
    title: "Transport Readiness",

    description:
      "Reviewing packaging suitability and relevant handling arrangements according to the intended transportation method and destination.",

    considerations: [
      "Transport method suitability",
      "Packaging and handling coordination",
      "Dispatch preparation requirements",
    ],
  },
];

export const packagingCommitment = {
  eyebrow: "PRODUCT-SPECIFIC PACKAGING",

  title: "Packaging Aligned",

  highlight: "With Your Requirements.",

  description:
    "Packaging configurations may vary according to product characteristics, order quantities, transportation methods, buyer specifications and applicable destination requirements.",

  note:
    "Packaging options are indicative and subject to sourcing feasibility, buyer agreement and applicable requirements. Photographs are illustrative and do not represent verified company packaging facilities.",
};
