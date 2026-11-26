
import {
  Ruler,
  SearchCheck,
  ListFilter,
  ListChecks,
  PackageCheck,
  Eye,
  ShieldCheck,
  Layers,
} from "lucide-react";

export const gradingPrinciples = [
  {
    id: "size-classification",
    icon: Ruler,
    productSlug: "red-onion",
    title: "Size Classification",
    description:
      "Considering product dimensions, weight and buyer-specific size requirements to support suitable product classification.",
    highlights: [
      "Product-specific dimensions",
      "Size range considerations",
      "Weight-based classification",
    ],
  },
  {
    id: "product-condition",
    icon: SearchCheck,
    productSlug: "fresh-okra",
    title: "Product Condition",
    description:
      "Assessing relevant visible characteristics, maturity and physical condition during produce selection.",
    highlights: [
      "External appearance",
      "Visible defects and damage",
      "Freshness considerations",
    ],
  },
  {
    id: "grade-consistency",
    icon: ListFilter,
    productSlug: "pomegranate",
    title: "Grade Consistency",
    description:
      "Considering uniformity within selected product classifications according to agreed buyer requirements.",
    highlights: [
      "Consistent product characteristics",
      "Buyer-specific grading criteria",
      "Product suitability",
    ],
  },
];

export const gradingCriteria = [
  {
    id: "size",
    icon: Ruler,
    label: "Size & Dimensions",
  },
  {
    id: "appearance",
    icon: Eye,
    label: "External Appearance",
  },
  {
    id: "condition",
    icon: ShieldCheck,
    label: "Product Condition",
  },
  {
    id: "uniformity",
    icon: Layers,
    label: "Grade Uniformity",
  },
];

export const productGrading = {
  "red-onion": {
    description:
      "Red onion grading considerations focus on bulb dimensions, external skin condition, firmness and suitability for the intended market.",

    criteria: {
      size:
        "Bulb diameter, weight and buyer-specified size ranges.",

      appearance:
        "External colour, bulb shape, skin condition and neck condition.",

      condition:
        "Firmness, curing condition, sprouting, visible rot and physical damage.",

      uniformity:
        "Consistency of bulb size and relevant characteristics within the selected grade.",
    },

    considerations: [
      "Buyer-defined bulb diameter ranges",
      "Curing and dry skin condition",
      "Packaging and ventilation requirements",
      "Destination-specific product specifications",
    ],
  },

  "green-chilli": {
    description:
      "Green chilli grading considerations focus on pod dimensions, colour, freshness and physical condition.",

    criteria: {
      size:
        "Pod length, thickness and buyer-defined size requirements.",

      appearance:
        "Colour, pod shape and external surface condition.",

      condition:
        "Firmness, shrivelling, visible pest damage and signs of deterioration.",

      uniformity:
        "Consistency of pod size, variety and maturity characteristics.",
    },

    considerations: [
      "Variety-specific characteristics",
      "Buyer-defined pod dimensions",
      "Freshness and maturity",
      "Suitable handling and packaging",
    ],
  },

  "fresh-okra": {
    description:
      "Fresh okra selection considers pod size, tenderness, colour and physical condition according to buyer expectations.",

    criteria: {
      size:
        "Pod length, diameter and agreed size classification.",

      appearance:
        "Pod colour, shape and external surface characteristics.",

      condition:
        "Tenderness, maturity, visible damage and signs of deterioration.",

      uniformity:
        "Consistency of pod dimensions and maturity within the selected grade.",
    },

    considerations: [
      "Buyer-defined pod length",
      "Tenderness and maturity",
      "Physical damage considerations",
      "Product-specific storage needs",
    ],
  },

  tomato: {
    description:
      "Tomato grading considerations depend on fruit size, maturity, firmness and the intended transportation requirements.",

    criteria: {
      size:
        "Fruit diameter, weight and agreed size classification.",

      appearance:
        "External colour, shape and maturity characteristics.",

      condition:
        "Firmness, cracks, bruising and visible signs of spoilage.",

      uniformity:
        "Consistency of fruit size and maturity within the selected classification.",
    },

    considerations: [
      "Intended market and usage",
      "Buyer-defined maturity stage",
      "Firmness and transport suitability",
      "Protective packaging requirements",
    ],
  },

  banana: {
    description:
      "Banana grading considerations focus on finger dimensions, maturity, peel condition and handling requirements.",

    criteria: {
      size:
        "Finger length, diameter and agreed size requirements.",

      appearance:
        "Peel colour, shape and external surface condition.",

      condition:
        "Bruising, physical damage, maturity and visible deterioration.",

      uniformity:
        "Consistency of finger dimensions and maturity characteristics.",
    },

    considerations: [
      "Variety-specific requirements",
      "Maturity at dispatch",
      "Handling and temperature needs",
      "Buyer-defined packing configuration",
    ],
  },

  pomegranate: {
    description:
      "Pomegranate grading considerations focus on fruit dimensions, external appearance, physical condition and consistency.",

    criteria: {
      size:
        "Fruit diameter, weight and buyer-defined size classification.",

      appearance:
        "External colour, fruit shape and skin characteristics.",

      condition:
        "Visible cracks, bruising, physical damage and signs of deterioration.",

      uniformity:
        "Consistency of fruit size and relevant characteristics within the selected grade.",
    },

    considerations: [
      "Buyer-defined fruit weight ranges",
      "External appearance requirements",
      "Physical condition and maturity",
      "Protective packaging suitability",
    ],
  },
};

export const gradingObjectives = [
  {
    id: "size-consistency",
    icon: Ruler,
    title: "Size Consistency",
    description:
      "Consideration of agreed product dimensions.",
  },
  {
    id: "specification-alignment",
    icon: ListChecks,
    title: "Specification Alignment",
    description:
      "Focus on individual buyer requirements.",
  },
  {
    id: "product-suitability",
    icon: PackageCheck,
    title: "Product Suitability",
    description:
      "Consideration of intended market needs.",
  },
];
