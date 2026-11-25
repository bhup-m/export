
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/home/Hero";
import AboutIntro from "./components/home/AboutIntro";
import TrustIndicators from "./components/home/TrustIndicators";
import FeaturedProducts from "./components/home/FeaturedProducts";
import OurFarmers from "./components/home/OurFarmers";
import ExportProcess from "./components/home/ExportProcess";
import WhyChooseUs from "./components/home/WhyChooseUs";
import QualityStandards from "./components/home/QualityStandards";
import GlobalMarkets from "./components/home/GlobalMarkets";
import ContactSection from "./components/home/ContactSection";

import BackToTop from "./components/common/BackToTop";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
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
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
