
import {
  Leaf,
  ClipboardCheck,
  PackageCheck,
  ScanLine,
  ShieldCheck,
  FileCheck,
} from "lucide-react";

export const qualityStandards = [
  {
    id: 1,
    icon: Leaf,
    title: "Freshness & Selection",
    description:
      "Prioritising freshness, physical condition and careful selection of agricultural produce.",
  },
  {
    id: 2,
    icon: ClipboardCheck,
    title: "Sorting & Grading",
    description:
      "A focus on product size, appearance, maturity and agreed buyer specifications.",
  },
  {
    id: 3,
    icon: PackageCheck,
    title: "Protective Packaging",
    description:
      "Product-appropriate packaging based on handling, transportation and destination requirements.",
  },
  {
    id: 4,
    icon: ScanLine,
    title: "Product Traceability",
    description:
      "Working towards documented sourcing, supplier identification and product-level traceability.",
  },
  {
    id: 5,
    icon: ShieldCheck,
    title: "Food Safety",
    description:
      "Prioritising hygienic handling and applicable food safety and residue requirements.",
  },
  {
    id: 6,
    icon: FileCheck,
    title: "Export Compliance",
    description:
      "A commitment to applicable export documentation, phytosanitary and destination-specific requirements.",
  },
];
