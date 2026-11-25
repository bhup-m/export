
import { useState } from "react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import {
  Globe2,
  MapPin,
  ArrowUpRight,
  Check,
} from "lucide-react";

import WorldMap from "../common/WorldMap";

import { globalMarkets } from "../../data/globalMarkets";

import "./GlobalMarkets.css";

export default function GlobalMarkets() {
  const [activeRegion, setActiveRegion] =
    useState("all");

  const reduceMotion = useReducedMotion();

  const animation = (delay = 0) => ({
    initial: {
      opacity: reduceMotion ? 1 : 0,
      y: reduceMotion ? 0 : 25,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
      amount: 0.1,
    },
    transition: {
      duration: reduceMotion ? 0 : 0.65,
      delay: reduceMotion ? 0 : delay,
      ease: "easeOut",
    },
  });

  return (
    <section
      id="markets"
      className="global-markets-section"
      aria-labelledby="global-markets-title"
    >
      <div className="global-markets-container">

        {/* Section Heading */}
        <motion.div
          {...animation()}
          className="global-markets-heading"
        >
          <div className="global-markets-eyebrow">
            <span />
            OUR GLOBAL VISION
            <span />
          </div>

          <h2
            id="global-markets-title"
            className="global-markets-title"
          >
            Rooted in India.
            <span>Connected to the World.</span>
          </h2>

          <p className="global-markets-description">
            With our agricultural roots in India,
            we are exploring international market
            opportunities and building relationships
            with importers, distributors and
            wholesale partners across the globe.
          </p>
        </motion.div>

        {/* Regional Filters */}
        <div
          className="global-markets-filters"
          role="group"
          aria-label="Select potential export region"
        >
          <button
            type="button"
            className={`global-market-filter ${
              activeRegion === "all"
                ? "active"
                : ""
            }`}
            aria-pressed={activeRegion === "all"}
            onClick={() => setActiveRegion("all")}
          >
            <Globe2 size={17} />
            All Regions
          </button>

          {globalMarkets.map((region) => (
            <button
              key={region.id}
              type="button"
              className={`global-market-filter ${
                activeRegion === region.id
                  ? "active"
                  : ""
              }`}
              aria-pressed={
                activeRegion === region.id
              }
              onClick={() =>
                setActiveRegion(region.id)
              }
            >
              {region.name}
            </button>
          ))}
        </div>

        {/* Interactive World Map */}
        <motion.div
          {...animation(0.1)}
          className="global-map-container"
        >
          <WorldMap activeRegion={activeRegion} />
        </motion.div>

        {/* Regional Market Cards */}
        <div className="global-markets-grid">
          {globalMarkets.map((region, index) => (
            <motion.article
              key={region.id}
              {...animation(index * 0.1)}
              className={`global-market-card ${
                activeRegion === region.id
                  ? "selected"
                  : ""
              }`}
            >
              <div className="global-market-card-header">
                <div className="global-market-icon">
                  <Globe2
                    size={28}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>

                {activeRegion === region.id && (
                  <span className="global-market-selected">
                    <Check size={14} />
                    Selected
                  </span>
                )}
              </div>

              <h3>{region.name}</h3>

              <p className="global-market-description">
                {region.description}
              </p>

              <ul className="global-market-countries">
                {region.countries.map((country) => (
                  <li key={country.name}>
                    <MapPin
                      size={14}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />

                    {country.shortName}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="global-market-explore"
                aria-pressed={
                  activeRegion === region.id
                }
                onClick={() =>
                  setActiveRegion(
                    activeRegion === region.id
                      ? "all"
                      : region.id
                  )
                }
              >
                {activeRegion === region.id
                  ? "Show All Regions"
                  : "Highlight on Map"}

                <ArrowUpRight size={17} />
              </button>
            </motion.article>
          ))}
        </div>

        {/* Market Disclaimer */}
        <p className="global-market-note">
          The regions shown represent potential
          market opportunities. Product availability
          and export feasibility are subject to
          applicable regulations and buyer requirements.
        </p>

        {/* Partnership CTA */}
        <motion.div
          {...animation(0.15)}
          className="global-markets-bottom"
        >
          <h3>
            Your Market. Our Shared Opportunity.
          </h3>

          <p>
            We welcome enquiries from international
            importers, distributors and agricultural
            trading partners.
          </p>

          <a
            href="#contact"
            className="global-markets-cta"
          >
            Become Our Global Partner
            <ArrowUpRight size={19} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
