
import PageHero from "../components/common/PageHero";
import Breadcrumb from "../components/common/Breadcrumb";

import AgriculturalHeritage from "../components/farmers/AgriculturalHeritage";
import FarmerNetwork from "../components/farmers/FarmerNetwork";
import RegionalSourcing from "../components/farmers/RegionalSourcing";
import SourcingProcess from "../components/farmers/SourcingProcess";
import ResponsibleSourcing from "../components/farmers/ResponsibleSourcing";
import SourcingGallery from "../components/farmers/SourcingGallery";
import SourcingCTA from "../components/farmers/SourcingCTA";

import farmersHeroImage from "../assets/images/farmers/farmers-hero.jpg";

import "./FarmersPage.css";

export default function FarmersPage() {
  return (
    <div className="farmers-page">
      {/* Farmers Page Hero */}
      <PageHero
        eyebrow="OUR FARMERS & SOURCING"
        title="Rooted in Indian Agriculture."
        highlight="Connected to Global Markets."
        description="Generations of agricultural experience, established farmer and merchant relationships, and a commitment to responsible sourcing form the foundation of Sharanga Global Exports."
        backgroundImage={farmersHeroImage}
        backgroundPosition="center 45%"
      >
        <Breadcrumb
          items={[
            {
              label: "Our Farmers",
            },
          ]}
        />
      </PageHero>

      {/* Agricultural Heritage */}
      <AgriculturalHeritage />

      {/* Farmer & Merchant Network */}
      <FarmerNetwork />

      {/* Regional Sourcing Strengths */}
      <RegionalSourcing />

      {/* Farm-to-Export Sourcing Process */}
      <SourcingProcess />

      {/* Responsible Sourcing Practices */}
      <ResponsibleSourcing />

      {/* Farmer & Sourcing Gallery */}
      <SourcingGallery />

      {/* Sourcing Partnership CTA */}
      <SourcingCTA />
    </div>
  );
}
