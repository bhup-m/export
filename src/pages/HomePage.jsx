
import Hero from "../components/home/Hero";
import AboutIntro from "../components/home/AboutIntro";
import TrustIndicators from "../components/home/TrustIndicators";
import FeaturedProducts from "../components/home/FeaturedProducts";
import OurFarmers from "../components/home/OurFarmers";
import ExportProcess from "../components/home/ExportProcess";
import WhyChooseUs from "../components/home/WhyChooseUs";
import QualityStandards from "../components/home/QualityStandards";
import GlobalMarkets from "../components/home/GlobalMarkets";
import ContactSection from "../components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutIntro />
      <TrustIndicators />
      <FeaturedProducts />
      <OurFarmers />
      <ExportProcess />
      <WhyChooseUs />
      <QualityStandards />
      <GlobalMarkets />
      <ContactSection />
    </>
  );
}
