
import { useState } from "react";

import { Link } from "react-router-dom";

import {
  MapPin,
  Users,
  ClipboardCheck,
  ChevronDown,
  ArrowUpRight,
  Info,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import {
  regionalOpportunities,
  regionalMarketNote,
} from "../../data/regionalOpportunities";

import { globalMarkets } from "../../data/globalMarkets";

import { ROUTES } from "../../data/navigation";

import "./RegionalOpportunities.css";

function RegionalOpportunityCard({ opportunity }) {
  const [expanded, setExpanded] = useState(false);

  const prefersReducedMotion = useReducedMotion();

  const Icon = opportunity.icon;

  const marketRegion = globalMarkets.find(
    (region) => region.id === opportunity.id
  );

  const countries = marketRegion?.countries ?? [];

  const detailsId =
    `regional-opportunity-details-${opportunity.id}`;

  return (
    <motion.article
      className="regional-opportunity-card"
      initial={
        prefersReducedMotion
          ? false
          : { opacity: 0, y: 25 }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{ duration: 0.5 }}
    >
      {/* Regional Image */}
      <div className="regional-opportunity-image">
        <img
          src={opportunity.image}
          alt={opportunity.imageAlt}
          loading="lazy"
          decoding="async"
        />

        <div
          className="regional-image-overlay"
          aria-hidden="true"
        />

        <div className="regional-image-label">
          <MapPin
            size={16}
            aria-hidden="true"
          />

          {countries.length} Target Countries
        </div>

        <div className="regional-image-icon">
          <Icon
            size={30}
            strokeWidth={1.6}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Regional Content */}
      <div className="regional-opportunity-content">
        <div className="regional-opportunity-eyebrow">
          <span>{opportunity.number}</span>

          <span aria-hidden="true" />

          REGIONAL MARKET FOCUS
        </div>

        <h3>{opportunity.name}</h3>

        <p className="regional-opportunity-subtitle">
          {opportunity.subtitle}
        </p>

        <p className="regional-opportunity-description">
          {opportunity.description}
        </p>

        {/* Target Countries */}
        <div className="regional-target-countries">
          <h4>
            <MapPin
              size={17}
              aria-hidden="true"
            />

            Target Countries
          </h4>

          <ul className="regional-country-tags">
            {countries.map((country) => (
              <li
                key={country.id || country.name}
              >
                {country.flag && (
                  <span aria-hidden="true">
                    {country.flag}
                  </span>
                )}

                {country.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Potential Buyer Segments */}
        <div className="regional-buyer-segments">
          <h4>
            <Users
              size={17}
              aria-hidden="true"
            />

            Potential Buyer Segments
          </h4>

          <ul>
            {opportunity.buyerSegments.map(
              (segment) => (
                <li key={segment}>
                  <span aria-hidden="true" />

                  {segment}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Expandable Market Considerations */}
        <div className="regional-considerations">
          <button
            type="button"
            className="regional-considerations-toggle"
            aria-expanded={expanded}
            aria-controls={detailsId}
            onClick={() =>
              setExpanded((previous) => !previous)
            }
          >
            <span>
              <ClipboardCheck
                size={18}
                aria-hidden="true"
              />

              Market Considerations
            </span>

            <ChevronDown
              size={19}
              className={
                expanded ? "is-expanded" : ""
              }
              aria-hidden="true"
            />
          </button>

          <div
            id={detailsId}
            className="regional-considerations-content"
            hidden={!expanded}
          >
            <ul>
              {opportunity.considerations.map(
                (consideration) => (
                  <li key={consideration}>
                    {consideration}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Buyer Enquiry */}
        <Link
          to={ROUTES.CONTACT}
          className="regional-opportunity-cta"
          aria-label={
            `Discuss business opportunities in ${opportunity.name}`
          }
        >
          Discuss Market Opportunities

          <ArrowUpRight
            size={18}
            aria-hidden="true"
          />
        </Link>
      </div>
    </motion.article>
  );
}

export default function RegionalOpportunities() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="regional-market-opportunities"
      className="regional-opportunities"
      aria-labelledby="regional-opportunities-title"
    >
      <div className="regional-opportunities-container">
        {/* Section Heading */}
        <motion.div
          className="regional-opportunities-heading"
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
          <div className="regional-opportunities-eyebrow">
            <span aria-hidden="true" />

            REGIONAL MARKET OPPORTUNITIES

            <span aria-hidden="true" />
          </div>

          <h2 id="regional-opportunities-title">
            Diverse Markets.

            <span>Shared Opportunities.</span>
          </h2>

          <p>
            Exploring international agricultural trade
            through market understanding,
            quality-focused sourcing and meaningful
            business partnerships.
          </p>
        </motion.div>

        {/* Regional Cards */}
        <div className="regional-opportunities-grid">
          {regionalOpportunities.map(
            (opportunity) => (
              <RegionalOpportunityCard
                key={opportunity.id}
                opportunity={opportunity}
              />
            )
          )}
        </div>

        {/* Disclaimer */}
        <div className="regional-opportunities-note">
          <Info
            size={20}
            aria-hidden="true"
          />

          <p>{regionalMarketNote}</p>
        </div>
      </div>
    </section>
  );
}
