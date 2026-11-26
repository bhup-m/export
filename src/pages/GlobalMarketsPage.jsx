
import PageHero from "../components/common/PageHero";
import Breadcrumb from "../components/common/Breadcrumb";

import GlobalMarketVision from "../components/markets/GlobalMarketVision";
import GlobalMarketMap from "../components/markets/GlobalMarketMap";
import RegionalOpportunities from "../components/markets/RegionalOpportunities";
import CountryProfiles from "../components/markets/CountryProfiles";
import ProductMarketAlignment from "../components/markets/ProductMarketAlignment";
import BuyerPartnerships from "../components/markets/BuyerPartnerships";
import MarketsCTA from "../components/markets/MarketsCTA";

import marketsHeroImage from "../assets/images/markets/markets-hero.jpg";

import "./GlobalMarketsPage.css";

export default function GlobalMarketsPage() {
  return (
    <div className="global-markets-page">
      {/* Global Markets Page Hero */}
      <PageHero
        eyebrow="OUR GLOBAL MARKETS"
        title="Rooted in India."
        highlight="Connected to Global Opportunities."
        description="Exploring international agricultural trade opportunities through quality-focused sourcing, transparent business practices and meaningful partnerships."
        backgroundImage={marketsHeroImage}
        backgroundPosition="center 45%"
      >
        <Breadcrumb
          items={[
            {
              label: "Global Markets",
            },
          ]}
        />
      </PageHero>

      {/* Global Market Vision */}
      <GlobalMarketVision />

      {/* Interactive Global Market Map */}
      <GlobalMarketMap />

      {/* Regional Market Opportunities */}
      <RegionalOpportunities />

      {/* Country-Specific Market Profiles */}
      <CountryProfiles />

      {/* Product-Market Alignment */}
      <ProductMarketAlignment />

      {/* International Buyer Partnerships */}
      <BuyerPartnerships />

      {/* Global Markets CTA */}
      <MarketsCTA />
    </div>
  );
}
