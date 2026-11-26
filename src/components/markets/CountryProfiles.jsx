
import { useState } from "react";

import { Link } from "react-router-dom";

import {
  Globe2,
  MapPin,
  Landmark,
  Wallet,
  Search,
  X,
  Users,
  ClipboardCheck,
  CheckCircle2,
  ArrowUpRight,
  Info,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import { globalMarkets } from "../../data/globalMarkets";

import {
  getCountryProfileByName,
  countryProfilesDisclaimer,
} from "../../data/countryProfiles";

import { ROUTES } from "../../data/navigation";

import "./CountryProfiles.css";

/* ========================================
   COMBINE GEOGRAPHICAL AND COUNTRY DATA
======================================== */

const marketCountries = globalMarkets.flatMap(
  (region) =>
    region.countries.flatMap((country) => {
      const profile = getCountryProfileByName(
        country.name
      );

      if (!profile) {
        return [];
      }

      return [
        {
          ...profile,
          regionId: region.id,
          regionName: region.name,
        },
      ];
    })
);

/* ========================================
   COUNTRY ENQUIRY URL
======================================== */

function getCountryEnquiryUrl(countryCode) {
  const [path, hash] = ROUTES.CONTACT.split("#");

  const params = new URLSearchParams({
    country: countryCode,
  });

  return `${path}?${params.toString()}${
    hash ? `#${hash}` : ""
  }`;
}

/* ========================================
   COUNTRY PROFILE PANEL
======================================== */

function CountryProfilePanel({ country }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      key={country.code}
      className="country-profile-panel"
      initial={
        prefersReducedMotion
          ? false
          : { opacity: 0, y: 12 }
      }
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Country Header */}
      <div className="country-profile-header">
        <div
          className="country-profile-decoration"
          aria-hidden="true"
        />

        <div className="country-profile-identity">
          <div
            className="country-profile-flag"
            aria-hidden="true"
          >
            {country.flag}
          </div>

          <div>
            <div className="country-profile-region">
              <Globe2
                size={15}
                aria-hidden="true"
              />

              {country.regionName}
            </div>

            <h3>{country.name}</h3>

            <span className="country-profile-status">
              Prospective Target Market
            </span>
          </div>
        </div>

        {/* Country Facts */}
        <dl className="country-profile-facts">
          <div>
            <Landmark
              size={21}
              aria-hidden="true"
            />

            <div>
              <dt>Capital</dt>
              <dd>{country.capital}</dd>
            </div>
          </div>

          <div>
            <Wallet
              size={21}
              aria-hidden="true"
            />

            <div>
              <dt>Currency</dt>

              <dd>
                {country.currencyName}

                <span>
                  {" "}({country.currency})
                </span>
              </dd>
            </div>
          </div>

          <div>
            <MapPin
              size={21}
              aria-hidden="true"
            />

            <div>
              <dt>Country Code</dt>
              <dd>{country.code}</dd>
            </div>
          </div>
        </dl>
      </div>

      {/* Country Information */}
      <div className="country-profile-content">
        <div className="country-profile-intro">
          <span>MARKET EXPLORATION</span>

          <h4>
            Exploring Opportunities in {country.name}
          </h4>

          <p>{country.description}</p>
        </div>

        <div className="country-profile-information">
          {/* Buyer Segments */}
          <div className="country-information-card">
            <div className="country-information-icon">
              <Users
                size={24}
                strokeWidth={1.7}
                aria-hidden="true"
              />
            </div>

            <h4>Potential Buyer Segments</h4>

            <ul>
              {country.buyerSegments.map((segment) => (
                <li key={segment}>
                  <CheckCircle2
                    size={17}
                    aria-hidden="true"
                  />

                  <span>{segment}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Market Considerations */}
          <div className="country-information-card">
            <div className="country-information-icon">
              <ClipboardCheck
                size={24}
                strokeWidth={1.7}
                aria-hidden="true"
              />
            </div>

            <h4>Market Considerations</h4>

            <ul>
              {country.considerations.map(
                (consideration) => (
                  <li key={consideration}>
                    <CheckCircle2
                      size={17}
                      aria-hidden="true"
                    />

                    <span>{consideration}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Country Enquiry */}
        <div className="country-profile-enquiry">
          <div>
            <h4>Let's Explore Business Together.</h4>

            <p>
              Share your product requirements,
              preferred quantities and destination
              details with us.
            </p>
          </div>

          <Link
            to={getCountryEnquiryUrl(country.code)}
            className="country-profile-enquiry-button"
          >
            Enquire for {country.name}

            <ArrowUpRight
              size={18}
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

/* ========================================
   MAIN COUNTRY PROFILES SECTION
======================================== */

export default function CountryProfiles() {
  const [activeRegion, setActiveRegion] =
    useState("all");

  const [selectedCountryCode, setSelectedCountryCode] =
    useState("AE");

  const [searchQuery, setSearchQuery] =
    useState("");

  const prefersReducedMotion = useReducedMotion();

  const normalizedSearch =
    searchQuery.trim().toLowerCase();

  const filteredCountries = marketCountries.filter(
    (country) => {
      const matchesRegion =
        activeRegion === "all" ||
        country.regionId === activeRegion;

      const searchableValues = [
        country.name,
        country.code,
        ...country.aliases,
      ];

      const matchesSearch = searchableValues.some(
        (value) =>
          value.toLowerCase().includes(
            normalizedSearch
          )
      );

      return matchesRegion && matchesSearch;
    }
  );

  const selectedCountry =
    filteredCountries.find(
      (country) =>
        country.code === selectedCountryCode
    ) || filteredCountries[0];

  const regionFilters = [
    {
      id: "all",
      name: "All Markets",
    },

    ...globalMarkets.map((region) => ({
      id: region.id,
      name: region.name,
    })),
  ];

  function resetFilters() {
    setActiveRegion("all");
    setSearchQuery("");
    setSelectedCountryCode("AE");
  }

  return (
    <section
      id="country-market-profiles"
      className="country-profiles"
      aria-labelledby="country-profiles-title"
    >
      <div className="country-profiles-container">
        {/* Section Heading */}
        <motion.div
          className="country-profiles-heading"
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, y: 20 }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="country-profiles-eyebrow">
            <span aria-hidden="true" />

            COUNTRY MARKET PROFILES

            <span aria-hidden="true" />
          </div>

          <h2 id="country-profiles-title">
            One World.

            <span>Many Opportunities.</span>
          </h2>

          <p>
            Discover our prospective target markets
            and explore country-specific agricultural
            sourcing and business opportunities.
          </p>
        </motion.div>

        {/* Region Filters */}
        <div
          className="country-region-filters"
          role="group"
          aria-label="Filter countries by region"
        >
          {regionFilters.map((region) => (
            <button
              key={region.id}
              type="button"
              className={`country-region-filter ${
                activeRegion === region.id
                  ? "is-active"
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

        {/* Search and Results Count */}
        <div className="country-search-toolbar">
          <p role="status">
            Showing{" "}

            <strong>
              {filteredCountries.length}
            </strong>

            {" "}of {marketCountries.length} countries
          </p>

          <div className="country-search">
            <Search
              size={19}
              aria-hidden="true"
            />

            <input
              type="search"
              value={searchQuery}
              placeholder="Search country..."
              aria-label="Search target countries"
              onChange={(event) =>
                setSearchQuery(event.target.value)
              }
            />

            {searchQuery && (
              <button
                type="button"
                className="country-search-clear"
                aria-label="Clear country search"
                onClick={() => setSearchQuery("")}
              >
                <X
                  size={18}
                  aria-hidden="true"
                />
              </button>
            )}
          </div>
        </div>

        {/* Country Selection */}
        {filteredCountries.length > 0 ? (
          <>
            <div
              className="country-selector-grid"
              role="group"
              aria-label="Select a country profile"
            >
              {filteredCountries.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  className={`country-selector-card ${
                    selectedCountry?.code === country.code
                      ? "is-selected"
                      : ""
                  }`}
                  aria-pressed={
                    selectedCountry?.code === country.code
                  }
                  onClick={() =>
                    setSelectedCountryCode(country.code)
                  }
                >
                  <span
                    className="country-selector-flag"
                    aria-hidden="true"
                  >
                    {country.flag}
                  </span>

                  <span className="country-selector-name">
                    {country.name}
                  </span>

                  <span className="country-selector-region">
                    {country.regionName}
                  </span>
                </button>
              ))}
            </div>

            <p
              className="country-profiles-sr-only"
              role="status"
            >
              Selected country: {selectedCountry.name}
            </p>

            <CountryProfilePanel
              key={selectedCountry.code}
              country={selectedCountry}
            />
          </>
        ) : (
          <div className="country-empty-state">
            <Search
              size={38}
              strokeWidth={1.5}
              aria-hidden="true"
            />

            <h3>No Countries Found</h3>

            <p>
              Try another country name or change
              your selected region.
            </p>

            <button
              type="button"
              onClick={resetFilters}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Market Disclaimer */}
        <div className="country-profiles-disclaimer">
          <Info
            size={20}
            aria-hidden="true"
          />

          <p>{countryProfilesDisclaimer}</p>
        </div>
      </div>
    </section>
  );
}
