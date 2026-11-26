
import {
  FileCheck,
  Sprout,
  ShieldCheck,
  Leaf,
  Globe2,
  ClipboardCheck,
  FileText,
  PackageCheck,
  Truck,
  Award,
  BookOpen,
} from "lucide-react";

export const businessRegistrations = [
  {
    id: "iec",
    icon: FileCheck,
    title: "Importer Exporter Code",
    shortName: "IEC",
    authority: "DGFT",

    description:
      "The Importer Exporter Code is a key business identification requirement for most commercial imports and exports from India.",

    highlights: [
      "Exporter identification",
      "International trade registration",
      "Applicable DGFT requirements",
    ],

    website: "https://www.dgft.gov.in/",
    websiteLabel: "Visit DGFT",
  },

  {
    id: "apeda",
    icon: Sprout,
    title: "APEDA Registration",
    shortName: "APEDA",
    authority:
      "Agricultural and Processed Food Products Export Development Authority",

    description:
      "APEDA registration and applicable e-RCMC requirements are important considerations for exporters dealing in scheduled agricultural and processed food products.",

    highlights: [
      "Scheduled agricultural products",
      "Applicable exporter registration",
      "Agricultural export development",
    ],

    website: "https://apeda.gov.in/",
    websiteLabel: "Visit APEDA",
  },

  {
    id: "fssai",
    icon: ShieldCheck,
    title: "Food Safety Licensing",
    shortName: "FSSAI",
    authority:
      "Food Safety and Standards Authority of India",

    description:
      "Applicable food business licensing and food safety requirements must be considered according to the nature and scope of business activities.",

    highlights: [
      "Applicable food business licensing",
      "Food safety requirements",
      "Business activity considerations",
    ],

    website: "https://www.fssai.gov.in/",
    websiteLabel: "Visit FSSAI",
  },
];

export const shipmentRequirements = [
  {
    id: "phytosanitary",
    icon: Leaf,
    title: "Phytosanitary Certificate",

    description:
      "Plant health certification may be required for agricultural consignments according to the importing country's phytosanitary requirements.",

    highlights: [
      "Plant health requirements",
      "Applicable consignment inspection",
      "Destination-specific conditions",
    ],
  },

  {
    id: "certificate-of-origin",
    icon: Globe2,
    title: "Certificate of Origin",

    description:
      "A Certificate of Origin may be required to establish the origin of exported goods for customs, trade preference or buyer requirements.",

    highlights: [
      "Product origin documentation",
      "Preferential or non-preferential origin",
      "Applicable trade requirements",
    ],
  },

  {
    id: "destination-compliance",
    icon: ClipboardCheck,
    title: "Destination Compliance",

    description:
      "Export preparation must consider applicable importing-country regulations, product restrictions, buyer specifications and documentation requirements.",

    highlights: [
      "Import eligibility requirements",
      "Residue and product standards",
      "Labelling and packaging regulations",
    ],
  },
];

export const exportDocuments = [
  {
    id: "commercial-invoice",
    icon: FileText,
    title: "Commercial Invoice",

    description:
      "Commercial transaction and product value information.",
  },

  {
    id: "packing-list",
    icon: PackageCheck,
    title: "Packing List",

    description:
      "Product quantities, packaging and consignment details.",
  },

  {
    id: "shipping-bill",
    icon: FileCheck,
    title: "Shipping Bill",

    description:
      "Applicable Indian customs export declaration.",
  },

  {
    id: "transport-documents",
    icon: Truck,
    title: "Transport Documents",

    description:
      "Bill of lading, air waybill or other applicable transport documents.",
  },

  {
    id: "product-certificates",
    icon: ShieldCheck,
    title: "Product Certificates",

    description:
      "Applicable product, plant health or testing documentation.",
  },

  {
    id: "buyer-documents",
    icon: ClipboardCheck,
    title: "Buyer-Specific Documents",

    description:
      "Additional documentation according to agreed buyer and destination requirements.",
  },
];

export const qualityObjectives = [
  {
    id: "globalgap",
    icon: Sprout,
    title: "GLOBALG.A.P.",
    subtitle: "Good Agricultural Practices",

    description:
      "Exploring relevant farm-level assurance requirements and certified sourcing opportunities according to product and buyer needs.",
  },

  {
    id: "iso-22000",
    icon: Award,
    title: "ISO 22000",
    subtitle: "Food Safety Management",

    description:
      "Evaluating food safety management system requirements as business operations and infrastructure develop.",
  },

  {
    id: "haccp",
    icon: ShieldCheck,
    title: "HACCP",
    subtitle: "Food Safety Risk Management",

    description:
      "Considering hazard analysis and critical control point principles where relevant to food handling and operational activities.",
  },
];

export const complianceResources = [
  {
    id: "dgft",
    icon: BookOpen,
    name: "DGFT",
    website: "https://www.dgft.gov.in/",
  },

  {
    id: "apeda",
    icon: BookOpen,
    name: "APEDA",
    website: "https://apeda.gov.in/",
  },

  {
    id: "fssai",
    icon: BookOpen,
    name: "FSSAI",
    website: "https://www.fssai.gov.in/",
  },

  {
    id: "icegate",
    icon: BookOpen,
    name: "ICEGATE",
    website: "https://www.icegate.gov.in/",
  },

  {
    id: "plant-quarantine",
    icon: BookOpen,
    name: "Plant Quarantine",
    website: "https://ppqs.gov.in/",
  },
];

export const complianceDisclaimer =
  "This section provides general information about export compliance considerations and future quality objectives. It does not represent a declaration that Sharanga Global Exports currently holds any listed registration, licence or certification. Actual requirements depend on the product, business activity, destination, shipment and applicable regulations.";
