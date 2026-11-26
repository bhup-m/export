
import {
  ClipboardCheck,
  SearchCheck,
  Ruler,
  Leaf,
  PackageCheck,
  Truck,
  Target,
  ListChecks,
  MessageSquare,
} from "lucide-react";

export const qualityInspectionSteps = [
  {
    id: "initial-assessment",
    number: "01",
    icon: ClipboardCheck,
    title: "Initial Assessment",
    subtitle: "UNDERSTANDING REQUIREMENTS",
    description:
      "Understanding the intended product specifications, buyer expectations and sourcing requirements before proceeding with produce selection.",
    checkpoints: [
      "Product specifications",
      "Buyer quality expectations",
      "Sourcing suitability",
      "Quantity and grade requirements",
    ],
  },
  {
    id: "visual-inspection",
    number: "02",
    icon: SearchCheck,
    title: "Visual Inspection",
    subtitle: "ASSESSING PRODUCT CONDITION",
    description:
      "Considering visible produce characteristics to identify physical damage, external defects and other factors affecting product suitability.",
    checkpoints: [
      "External appearance",
      "Visible defects and damage",
      "Colour and physical condition",
      "Signs of deterioration",
    ],
  },
  {
    id: "size-grade-assessment",
    number: "03",
    icon: Ruler,
    title: "Size & Grade Assessment",
    subtitle: "FOCUSING ON CONSISTENCY",
    description:
      "Evaluating product dimensions, classification and uniformity against the agreed product-specific grading requirements.",
    checkpoints: [
      "Size classification",
      "Product grade requirements",
      "Weight considerations",
      "Uniformity within the selected grade",
    ],
  },
  {
    id: "freshness-assessment",
    number: "04",
    icon: Leaf,
    title: "Freshness Assessment",
    subtitle: "CONSIDERING PRODUCE FRESHNESS",
    description:
      "Assessing relevant freshness and maturity indicators while considering product-specific storage and transportation needs.",
    checkpoints: [
      "Product maturity indicators",
      "Firmness and produce condition",
      "Signs of spoilage",
      "Storage and temperature needs",
    ],
  },
  {
    id: "packaging-inspection",
    number: "05",
    icon: PackageCheck,
    title: "Packaging Inspection",
    subtitle: "PREPARING FOR TRANSPORT",
    description:
      "Reviewing packaging suitability, protection and handling considerations according to the product and buyer requirements.",
    checkpoints: [
      "Packaging material suitability",
      "Packaging integrity",
      "Ventilation requirements",
      "Labelling and marking needs",
    ],
  },
  {
    id: "dispatch-readiness",
    number: "06",
    icon: Truck,
    title: "Dispatch Readiness",
    subtitle: "FINAL PREPARATION REVIEW",
    description:
      "Reviewing relevant order specifications, packaging preparation, handling arrangements and applicable documentation before dispatch.",
    checkpoints: [
      "Order specification alignment",
      "Packaging and quantity review",
      "Handling and transport arrangements",
      "Applicable documentation readiness",
    ],
  },
];

export const qualityInspectionObjectives = [
  {
    id: "specification-alignment",
    icon: Target,
    title: "Specification Alignment",
    description:
      "Considering agreed product and buyer requirements throughout the assessment process.",
  },
  {
    id: "consistent-assessment",
    icon: ListChecks,
    title: "Consistent Assessment",
    description:
      "Developing structured and product-appropriate inspection practices.",
  },
  {
    id: "transparent-communication",
    icon: MessageSquare,
    title: "Transparent Communication",
    description:
      "Communicating relevant quality considerations and product expectations with business partners.",
  },
];
