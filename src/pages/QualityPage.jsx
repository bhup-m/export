
import PageHero from "../components/common/PageHero";
import Breadcrumb from "../components/common/Breadcrumb";

import QualityPhilosophy from "../components/quality/QualityPhilosophy";
import QualityInspection from "../components/quality/QualityInspection";
import SortingGrading from "../components/quality/SortingGrading";
import PackagingStandards from "../components/quality/PackagingStandards";
import FoodSafetyTraceability from "../components/quality/FoodSafetyTraceability";
import ExportCompliance from "../components/quality/ExportCompliance";
import QualityCTA from "../components/quality/QualityCTA";

import qualityHeroImage from "../assets/images/quality/quality-hero.jpg";

import "./QualityPage.css";

export default function QualityPage() {
  return (
    <div className="quality-page">
      {/* Quality Page Hero */}
      <PageHero
        eyebrow="OUR QUALITY & STANDARDS"
        title="Quality at Every Step."
        highlight="Confidence in Every Shipment."
        description="A quality-focused approach to agricultural sourcing, produce selection, packaging and export readiness, aligned with individual buyer requirements."
        backgroundImage={qualityHeroImage}
        backgroundPosition="center 45%"
      >
        <Breadcrumb
          items={[
            {
              label: "Quality & Standards",
            },
          ]}
        />
      </PageHero>

      {/* Quality Philosophy */}
      <QualityPhilosophy />

      {/* Quality Inspection Process */}
      <QualityInspection />

      {/* Sorting & Grading Standards */}
      <SortingGrading />

      {/* Packaging & Handling Standards */}
      <PackagingStandards />

      {/* Food Safety & Traceability */}
      <FoodSafetyTraceability />

      {/* Certifications & Export Compliance */}
      <ExportCompliance />

      {/* Quality Assurance CTA */}
      <QualityCTA />
    </div>
  );
}
