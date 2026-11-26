
import {
  ShieldCheck,
  Sprout,
  ScanLine,
  ClipboardCheck,
  FileCheck,
  Truck,
  PackageCheck,
  Database,
  SearchCheck,
  MessageSquare,
} from "lucide-react";

export const foodSafetyPrinciples = [
  {
    id: "food-safety",
    icon: ShieldCheck,
    title: "Food Safety Awareness",
    description:
      "Considering relevant food safety and hygiene requirements throughout agricultural sourcing, handling and preparation.",

    highlights: [
      "Produce hygiene considerations",
      "Contamination risk awareness",
      "Applicable food safety requirements",
    ],
  },

  {
    id: "source-identification",
    icon: Sprout,
    title: "Source Identification",
    description:
      "Recognizing the importance of identifying agricultural sources and maintaining relevant supplier information.",

    highlights: [
      "Farmer and supplier references",
      "Regional sourcing information",
      "Procurement documentation",
    ],
  },

  {
    id: "batch-traceability",
    icon: ScanLine,
    title: "Batch Traceability",
    description:
      "Supporting a structured approach to product identification through relevant batch and lot references.",

    highlights: [
      "Unique batch identification",
      "Product lot references",
      "Source-to-dispatch linkage",
    ],
  },

  {
    id: "quality-records",
    icon: ClipboardCheck,
    title: "Quality Records",
    description:
      "Considering appropriate documentation of product selection, grading and inspection activities.",

    highlights: [
      "Product selection records",
      "Buyer specification references",
      "Inspection and grading information",
    ],
  },

  {
    id: "documentation",
    icon: FileCheck,
    title: "Documentation",
    description:
      "Recognizing the importance of accurate and relevant documentation for agricultural supply and export preparation.",

    highlights: [
      "Product and packaging records",
      "Applicable export documentation",
      "Buyer-specific documentation needs",
    ],
  },

  {
    id: "shipment-coordination",
    icon: Truck,
    title: "Shipment Coordination",
    description:
      "Considering relevant dispatch and transportation information to support communication throughout the supply journey.",

    highlights: [
      "Dispatch identification",
      "Transportation references",
      "Shipment communication",
    ],
  },
];

export const traceabilityStages = [
  {
    id: "source",
    number: "01",
    icon: Sprout,
    title: "Source Identification",
    description:
      "Identify relevant farmer, supplier and sourcing information.",
    record: "Source Reference",
  },

  {
    id: "batch",
    number: "02",
    icon: ScanLine,
    title: "Batch Identification",
    description:
      "Associate produce with a unique batch or lot reference.",
    record: "Batch Reference",
  },

  {
    id: "inspection",
    number: "03",
    icon: ClipboardCheck,
    title: "Quality Inspection",
    description:
      "Associate relevant selection and inspection information with the batch.",
    record: "Inspection Reference",
  },

  {
    id: "packaging",
    number: "04",
    icon: PackageCheck,
    title: "Packaging Preparation",
    description:
      "Record applicable packaging configurations and product identification.",
    record: "Packaging Reference",
  },

  {
    id: "dispatch",
    number: "05",
    icon: Truck,
    title: "Dispatch Coordination",
    description:
      "Associate dispatch and transportation references with relevant product lots.",
    record: "Dispatch Reference",
  },
];

export const traceabilityRecord = {
  reference: "SGE-DEMO-001",

  label: "ILLUSTRATIVE RECORD",

  description:
    "An example of the information that may form part of a structured agricultural product traceability record.",

  fields: [
    {
      id: "batch-reference",
      label: "Batch Reference",
      value: "SGE-DEMO-001",
    },
    {
      id: "product",
      label: "Product",
      value: "Red Onion",
    },
    {
      id: "origin",
      label: "Country of Origin",
      value: "India",
    },
    {
      id: "region",
      label: "Sourcing Region",
      value: "Maharashtra",
    },
    {
      id: "supplier-reference",
      label: "Supplier Reference",
      value: "Illustrative field",
    },
    {
      id: "inspection-reference",
      label: "Inspection Reference",
      value: "Illustrative field",
    },
    {
      id: "packaging-reference",
      label: "Packaging Reference",
      value: "Illustrative field",
    },
    {
      id: "dispatch-reference",
      label: "Dispatch Reference",
      value: "Illustrative field",
    },
  ],

  disclaimer:
    "This is a demonstration of a proposed record structure. It does not represent an actual product batch, inspection, shipment or verified traceability record.",
};

export const traceabilityBenefits = [
  {
    id: "organized-information",
    icon: Database,
    title: "Organized Information",
    description:
      "A structured approach to relevant sourcing and product records.",
  },
  {
    id: "product-visibility",
    icon: SearchCheck,
    title: "Product Visibility",
    description:
      "Supporting access to relevant product and batch information.",
  },
  {
    id: "buyer-communication",
    icon: MessageSquare,
    title: "Buyer Communication",
    description:
      "Supporting clear communication about applicable supply information.",
  },
];

export const foodSafetyDisclaimer =
  "The food safety and traceability framework describes our intended approach. Specific procedures, records, testing requirements and traceability capabilities are subject to operational implementation, supplier arrangements and applicable regulations.";
