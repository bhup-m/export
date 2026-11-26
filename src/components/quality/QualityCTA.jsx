
import PartnershipCTA from "../common/PartnershipCTA";

import { ROUTES } from "../../data/navigation";

export default function QualityCTA() {
  return (
    <PartnershipCTA
      eyebrow="QUALITY-FOCUSED PARTNERSHIPS"

      title="Quality Builds Confidence."

      highlight="Confidence Builds Partnerships."

      description="Let's discuss your product specifications, quality expectations, packaging preferences and agricultural sourcing requirements to explore a supply solution aligned with your business needs."

      primaryLabel="Discuss Quality Requirements"

      primaryHref={ROUTES.CONTACT}

      secondaryLabel="Explore Our Products"

      secondaryHref={ROUTES.PRODUCTS}

      showSecondary={true}
    />
  );
}
