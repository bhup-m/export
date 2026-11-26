
import PartnershipCTA from "../common/PartnershipCTA";

import { ROUTES } from "../../data/navigation";

export default function MarketsCTA() {
  return (
    <PartnershipCTA
      eyebrow="YOUR GLOBAL AGRICULTURAL SOURCING PARTNER"
      title="Across Borders."
      highlight="Together We Grow."
      description="Explore agricultural sourcing opportunities with Sharanga Global Exports and begin a conversation about your international business requirements. Together, we can explore sourcing arrangements aligned with your product preferences, destination markets and long-term business objectives."
      primaryLabel="Discuss Your Requirements"
      primaryHref={ROUTES.CONTACT}
      secondaryLabel="Explore Our Products"
      secondaryHref={ROUTES.PRODUCTS}
      showSecondary={true}
    />
  );
}
