
import PartnershipCTA from "../common/PartnershipCTA";

import { ROUTES } from "../../data/navigation";

export default function SourcingCTA() {
  return (
    <PartnershipCTA
      eyebrow="YOUR AGRICULTURAL SOURCING PARTNER"
      title="Rooted in Relationships."
      highlight="Let's Grow Together."
      description="Whether you are an importer, distributor, wholesaler or agricultural business partner, we welcome the opportunity to explore fresh produce sourcing and build meaningful, long-term partnerships."
      primaryLabel="Discuss Your Requirements"
      primaryHref={ROUTES.CONTACT}
      secondaryLabel="Explore Our Products"
      secondaryHref={ROUTES.PRODUCTS}
      showSecondary={true}
    />
  );
}
