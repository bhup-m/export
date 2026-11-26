
import PageHero from "../components/common/PageHero";
import Breadcrumb from "../components/common/Breadcrumb";
import PartnershipCTA from "../components/common/PartnershipCTA";

import CompanyStory from "../components/about/CompanyStory";
import VisionMission from "../components/about/VisionMission";
import CoreValues from "../components/about/CoreValues";
import SourcingStrengths from "../components/about/SourcingStrengths";
import CompanyJourney from "../components/about/CompanyJourney";

import aboutHeroImage from "../assets/images/about/about-hero.jpg";

import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="about-page">

      {/* About Page Hero */}

      <PageHero
        eyebrow="Our Story"
        title="Rooted in Agriculture."
        highlight="Driven by Global Vision."
        description="Generations of agricultural trading experience. A new vision to connect Indian agricultural produce with international markets."
        backgroundImage={aboutHeroImage}
        backgroundPosition="center 55%"
      >
        <Breadcrumb
          items={[
            { label: "About Us" },
          ]}
        />
      </PageHero>

      {/* Company Story */}

      <CompanyStory />

      {/* Vision & Mission */}

      <VisionMission />

      {/* Core Business Values */}

      <CoreValues />

      {/* Agricultural Sourcing Strengths */}

      <SourcingStrengths />

      {/* Company Journey */}

      <CompanyJourney />

      {/* Business Partnership CTA */}

      <PartnershipCTA />

    </div>
  );
}
