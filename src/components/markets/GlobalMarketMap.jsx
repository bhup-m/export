
import { useState } from "react";

import { Link } from "react-router-dom";

import {
  Globe2,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
  Info,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import WorldMap from "../common/WorldMap";

import { globalMarkets } from "../../data/globalMarkets";

import { ROUTES } from "../../data/navigation";

import "./GlobalMarketMap.css";

export default function GlobalMarketMap() {
  const [activeRegion, setActiveRegion] =
    useState("all");

  const prefersReducedMotion =
    useReducedMotion();

  const selectedRegions =
    activeRegion === "all"
      ? globalMarkets
      : globalMarkets.filter(
          (region) => region.id === activeRegion
        );

  const selectedCountryCount =
    selectedRegions.reduce(
      (total, region) =>
        total + region.countries.length,
      0
    );

  const totalCountryCount =
    globalMarkets.reduce(
      (total, region) =>
        total + region.countries.length,
      0
    );

  const regionFilters = [
    {
      id: "all",
      name: "All Markets",
      count: totalCountryCount,
    },

    ...globalMarkets.map((region) => ({
      id: region.id,
      name: region.name,
      count: region.countries.length,
    })),
  ];

  return (
    <section
      id="global-market-map"
      className="global-market-map"
      aria-labelledby="global-market-map-title"
    >
      {/* Decorative Elements */}
      <div
        className="global-map-decoration global-map-decoration-one"
        aria-hidden="true"
      />

      <div
        className="global-map-decoration global-map-decoration-two"
        aria-hidden="true"
      />

      <div className="global-map-container">
        {/* Section Heading */}
        <motion.div
          className="global-map-heading"
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, y: 25 }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="global-map-eyebrow">
            <span aria-hidden="true" />

            OUR INTERNATIONAL MARKET FOCUS

            <span aria-hidden="true" />
          </div>

          <h2 id="global-market-map-title">
            Connecting India

            <span>
              To Global Opportunities.
            </span>
          </h2>

          <p>
            Explore our prospective agricultural
            export markets across diverse regions,
            supported by our Indian agricultural
            sourcing foundation.
          </p>
        </motion.div>

        {/* Regional Filters */}
        <div
          className="global-map-filters"
          role="group"
          aria-label="Filter target markets by region"
        >
          {regionFilters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className={`global-map-filter ${
                activeRegion === filter.id
                  ? "is-active"
                  : ""
              }`}
              aria-pressed={
                activeRegion === filter.id
              }
              onClick={() =>
                setActiveRegion(filter.id)
              }
            >
              <Globe2
                size={17}
                aria-hidden="true"
              />

              <span>{filter.name}</span>

              <span className="global-map-filter-count">
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Accessible Filter Status */}
        <p
          className="global-map-sr-only"
          role="status"
        >
          Showing {selectedCountryCount} target
          countries across {selectedRegions.length}{" "}
          selected regions.
        </p>

        {/* Interactive World Map */}
        <div className="global-map-visual">
          <WorldMap activeRegion={activeRegion} />
        </div>

        {/* Map Legend */}
        <div className="global-map-legend">
          <div className="global-map-legend-item">
            <span
              className="global-map-origin-dot"
              aria-hidden="true"
            />

            Indian Sourcing Origin
          </div>

          <div className="global-map-legend-item">
            <span
              className="global-map-country-dot"
              aria-hidden="true"
            />

            Target Countries
          </div>

          <div className="global-map-legend-item">
            <span
              className="global-map-route-line"
              aria-hidden="true"
            />

            Prospective Trade Connections
          </div>
        </div>

        {/* Selected Market Summary */}
        <div className="global-map-summary">
          <div className="global-map-summary-text">
            <span>MARKET EXPLORATION</span>

            <h3>
              {activeRegion === "all"
                ? "Our Target Market Regions"
                : selectedRegions[0]?.name ||
                  "Selected Markets"}
            </h3>

            <p>
              Explore potential destinations for
              Indian agricultural products.
            </p>
          </div>

          <div className="global-map-summary-stats">
            <div>
              <strong>
                {selectedRegions.length}
              </strong>

              <span>Regions</span>
            </div>

            <div>
              <strong>
                {selectedCountryCount}
              </strong>

              <span>Target Countries</span>
            </div>
          </div>
        </div>

        {/* Regional Information Cards */}
        <div
          className={`global-map-region-grid ${
            selectedRegions.length === 1
              ? "single-region"
              : ""
          }`}
        >
          {selectedRegions.map((region) => (
            <article
              key={region.id}
              className="global-map-region-card"
            >
              <div className="global-map-region-header">
                <div className="global-map-region-icon">
                  <Globe2
                    size={27}
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <h4>{region.name}</h4>

                  <p>
                    {region.countries.length}{" "}
                    target countries
                  </p>
                </div>
              </div>

              <ul className="global-map-country-list">
                {region.countries.map((country) => (
                  <li
                    key={
                      country.id ||
                      country.name
                    }
                  >
                    <MapPin
                      size={16}
                      aria-hidden="true"
                    />

                    <span>{country.name}</span>

                    <CheckCircle2
                      size={15}
                      className="global-map-country-check"
                      aria-hidden="true"
                    />
                  </li>
                ))}
              </ul>

              {activeRegion === "all" && (
                <button
                  type="button"
                  className="global-map-region-action"
                  onClick={() =>
                    setActiveRegion(region.id)
                  }
                >
                  Focus on {region.name}

                  <ArrowUpRight
                    size={16}
                    aria-hidden="true"
                  />
                </button>
              )}
            </article>
          ))}
        </div>

        {/* Market Enquiry Panel */}
        <div className="global-map-enquiry">
          <div>
            <h3>
              Interested in a Specific Market?
            </h3>

            <p>
              Share your destination, product
              requirements and preferred supply
              arrangements with us.
            </p>
          </div>

          <Link
            to={ROUTES.CONTACT}
            className="global-map-enquiry-button"
          >
            Discuss Your Market Requirements

            <ArrowUpRight
              size={19}
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Market Disclaimer */}
        <div className="global-map-disclaimer">
          <Info
            size={19}
            aria-hidden="true"
          />

          <p>
            The countries and connection lines
            shown represent prospective market
            opportunities, not established export
            destinations or actual shipping routes.
            Supply is subject to product availability,
            applicable regulations and individual
            buyer requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
