
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Globe2,
  PackageCheck,
  ClipboardCheck,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Info,
  MapPin,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import { getActiveProducts } from "../../data/products";

import { globalMarkets } from "../../data/globalMarkets";

import {
  getCountryProfileByName,
} from "../../data/countryProfiles";

import {
  getProductMarketConsiderations,
  commonMarketConsiderations,
  productMarketDisclaimer,
} from "../../data/productMarketAlignment";

import {
  ROUTES,
  getProductDetailsUrl,
} from "../../data/navigation";

import "./ProductMarketAlignment.css";

/* ========================================
   MARKET DATA
======================================== */

const marketRegions = globalMarkets.map((region) => ({
  id: region.id,
  name: region.name,

  countries: region.countries.flatMap((country) => {
    const profile = getCountryProfileByName(
      country.name
    );

    return profile ? [profile] : [];
  }),
}));

const marketCountries = marketRegions.flatMap(
  (region) => region.countries
);

/* ========================================
   ENQUIRY URL
======================================== */

function getMarketEnquiryUrl(productSlug, countryCode) {
  const [path, hash] = ROUTES.CONTACT.split("#");

  const params = new URLSearchParams({
    product: productSlug,
    country: countryCode,
  });

  return `${path}?${params.toString()}${
    hash ? `#${hash}` : ""
  }`;
}

/* ========================================
   PRODUCT SELECTOR
======================================== */

function ProductMarketCard({
  product,
  selected,
  onSelect,
}) {
  return (
    <button
      type="button"
      className={`pma-product-card ${
        selected ? "is-selected" : ""
      }`}
      aria-pressed={selected}
      onClick={() => onSelect(product.slug)}
    >
      <div className="pma-product-image">
        <img
          src={product.image}
          alt=""
          loading="lazy"
          decoding="async"
        />

        {selected && (
          <span className="pma-selected-icon">
            <CheckCircle2
              size={21}
              aria-hidden="true"
            />
          </span>
        )}
      </div>

      <div className="pma-product-card-content">
        <span className="pma-product-category">
          {product.categoryLabel}
        </span>

        <span className="pma-product-name">
          {product.name}
        </span>
      </div>
    </button>
  );
}

/* ========================================
   CONSIDERATION CARD
======================================== */

function ConsiderationCard({
  icon: Icon,
  title,
  items,
}) {
  return (
    <div className="pma-consideration-card">
      <div className="pma-consideration-icon">
        <Icon
          size={25}
          strokeWidth={1.7}
          aria-hidden="true"
        />
      </div>

      <h4>{title}</h4>

      <ul>
        {items.map((item) => (
          <li key={item}>
            <CheckCircle2
              size={17}
              aria-hidden="true"
            />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ========================================
   MAIN COMPONENT
======================================== */

export default function ProductMarketAlignment() {
  const products = getActiveProducts();

  const [selectedProductSlug, setSelectedProductSlug] =
    useState("red-onion");

  const [selectedCountryCode, setSelectedCountryCode] =
    useState("AE");

  const prefersReducedMotion = useReducedMotion();

  const selectedProduct =
    products.find(
      (product) =>
        product.slug === selectedProductSlug
    ) || products[0];

  const selectedCountry =
    marketCountries.find(
      (country) =>
        country.code === selectedCountryCode
    ) || marketCountries[0];

  if (!selectedProduct || !selectedCountry) {
    return null;
  }

  const productConsiderations =
    getProductMarketConsiderations(
      selectedProduct.slug
    );

  return (
    <section
      id="product-market-alignment"
      className="pma-section"
      aria-labelledby="pma-title"
    >
      <div className="pma-container">
        {/* Section Heading */}
        <motion.div
          className="pma-heading"
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
          <div className="pma-eyebrow">
            <span aria-hidden="true" />

            PRODUCT-MARKET ALIGNMENT

            <span aria-hidden="true" />
          </div>

          <h2 id="pma-title">
            Indian Produce.

            <span>Global Possibilities.</span>
          </h2>

          <p>
            Explore agricultural sourcing opportunities
            tailored to your preferred products,
            destination markets and individual
            business requirements.
          </p>
        </motion.div>

        {/* Product Selection */}
        <div className="pma-selector-heading">
          <span>01</span>

          <div>
            <h3>Select Your Product</h3>

            <p>
              Explore our agricultural product portfolio.
            </p>
          </div>
        </div>

        <div
          className="pma-product-grid"
          role="group"
          aria-label="Select agricultural product"
        >
          {products.map((product) => (
            <ProductMarketCard
              key={product.slug}
              product={product}
              selected={
                selectedProduct.slug === product.slug
              }
              onSelect={setSelectedProductSlug}
            />
          ))}
        </div>

        {/* Destination Selection */}
        <div className="pma-destination">
          <div className="pma-selector-heading">
            <span>02</span>

            <div>
              <h3>Select Your Destination</h3>

              <p>
                Choose a prospective international market.
              </p>
            </div>
          </div>

          <div className="pma-country-field">
            <label htmlFor="pma-country-select">
              Destination Country
            </label>

            <div className="pma-country-input">
              <MapPin
                size={20}
                aria-hidden="true"
              />

              <select
                id="pma-country-select"
                value={selectedCountry.code}
                onChange={(event) =>
                  setSelectedCountryCode(
                    event.target.value
                  )
                }
              >
                {marketRegions.map((region) => (
                  <optgroup
                    key={region.id}
                    label={region.name}
                  >
                    {region.countries.map((country) => (
                      <option
                        key={country.code}
                        value={country.code}
                      >
                        {country.name}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Selected Opportunity */}
        <div
          className="pma-opportunity"
          aria-live="polite"
        >
          <div className="pma-opportunity-header">
            <Globe2
              size={19}
              aria-hidden="true"
            />

            YOUR SELECTED TRADE OPPORTUNITY
          </div>

          <div className="pma-trade-flow">
            <div className="pma-trade-origin">
              <img
                src={selectedProduct.image}
                alt=""
              />

              <div>
                <span>PRODUCT FROM INDIA</span>

                <h3>{selectedProduct.name}</h3>

                <p>Indian agricultural produce</p>
              </div>
            </div>

            <div className="pma-trade-arrow">
              <ArrowRight
                size={25}
                aria-hidden="true"
              />
            </div>

            <div className="pma-trade-destination">
              <div
                className="pma-destination-flag"
                aria-hidden="true"
              >
                {selectedCountry.flag}
              </div>

              <div>
                <span>PROSPECTIVE DESTINATION</span>

                <h3>{selectedCountry.name}</h3>

                <p>Market exploration</p>
              </div>
            </div>
          </div>
        </div>

        {/* Supply Considerations */}
        <div className="pma-considerations-grid">
          <ConsiderationCard
            icon={PackageCheck}
            title="Product Supply Considerations"
            items={productConsiderations}
          />

          <ConsiderationCard
            icon={ClipboardCheck}
            title="Destination Considerations"
            items={[
              ...new Set([
                ...selectedCountry.considerations,
                ...commonMarketConsiderations,
              ]),
            ]}
          />
        </div>

        {/* Enquiry Actions */}
        <div className="pma-enquiry">
          <div>
            <h3>Let's Discuss Your Requirements.</h3>

            <p>
              Share your requirements for{" "}
              {selectedProduct.name} in{" "}
              {selectedCountry.name} to explore
              a suitable sourcing arrangement.
            </p>
          </div>

          <div className="pma-enquiry-actions">
            <Link
              to={getMarketEnquiryUrl(
                selectedProduct.slug,
                selectedCountry.code
              )}
              className="pma-primary-button"
            >
              Request a Quotation

              <ArrowUpRight
                size={18}
                aria-hidden="true"
              />
            </Link>

            <Link
              to={getProductDetailsUrl(
                selectedProduct.slug
              )}
              className="pma-secondary-button"
            >
              View Product Details

              <ArrowRight
                size={18}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pma-disclaimer">
          <Info
            size={20}
            aria-hidden="true"
          />

          <p>{productMarketDisclaimer}</p>
        </div>
      </div>
    </section>
  );
}
