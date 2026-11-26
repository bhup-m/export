
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  CheckCircle2,
  ChevronDown,
  PackageCheck,
  ArrowRight,
  ArrowUpRight,
  Info,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import {
  packagingTypes,
  handlingStandards,
  packagingCommitment,
} from "../../data/packagingStandards";

import {
  getActiveProducts,
} from "../../data/products";

import {
  getProductDetailsUrl,
  getProductEnquiryUrl,
} from "../../data/navigation";

import "./PackagingStandards.css";

export default function PackagingStandards() {
  const prefersReducedMotion = useReducedMotion();

  const packagingProducts = getActiveProducts().filter(
    (product) =>
      Array.isArray(product.packaging) &&
      product.packaging.length > 0
  );

  const [expandedSlug, setExpandedSlug] = useState(
    () =>
      packagingProducts.find(
        (product) => product.slug === "red-onion"
      )?.slug ||
      packagingProducts[0]?.slug ||
      null
  );

  function toggleProduct(slug) {
    setExpandedSlug((currentSlug) =>
      currentSlug === slug ? null : slug
    );
  }

  return (
    <section
      id="packaging-standards"
      className="packaging-standards"
      aria-labelledby="packaging-standards-title"
    >
      <div className="packaging-standards-container">
        {/* Section Heading */}
        <motion.div
          className="packaging-standards-heading"
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="packaging-standards-eyebrow">
            <span aria-hidden="true" />

            OUR PACKAGING & HANDLING APPROACH

            <span aria-hidden="true" />
          </div>

          <h2 id="packaging-standards-title">
            Carefully Packed.

            <span>Prepared for the Journey.</span>
          </h2>

          <p>
            Product-specific packaging and careful
            handling are important considerations
            throughout agricultural sourcing,
            preparation and transportation.
          </p>
        </motion.div>

        {/* Packaging Types */}
        <div className="packaging-types-grid">
          {packagingTypes.map((packaging, index) => {
            const Icon = packaging.icon;

            return (
              <motion.article
                key={packaging.id}
                className="packaging-type-card"
                initial={
                  prefersReducedMotion
                    ? false
                    : { opacity: 0, y: 25 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: prefersReducedMotion
                    ? 0
                    : index * 0.1,
                }}
              >
                <div className="packaging-type-image">
                  <img
                    src={packaging.image}
                    alt={packaging.alt}
                    loading="lazy"
                    decoding="async"
                  />

                  <div
                    className="packaging-type-overlay"
                    aria-hidden="true"
                  />

                  <span className="packaging-type-image-label">
                    PACKAGING OPTION
                  </span>
                </div>

                <div className="packaging-type-content">
                  <div className="packaging-type-icon">
                    <Icon
                      size={29}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>

                  <span className="packaging-type-subtitle">
                    {packaging.subtitle}
                  </span>

                  <h3>{packaging.title}</h3>

                  <p>{packaging.description}</p>

                  <ul className="packaging-type-features">
                    {packaging.features.map((feature) => (
                      <li key={feature}>
                        <CheckCircle2
                          size={16}
                          aria-hidden="true"
                        />

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="packaging-type-products">
                    <h4>Potential Applications</h4>

                    <div className="packaging-type-tags">
                      {packaging.suitableProducts.map(
                        (product) => (
                          <span key={product}>
                            {product}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Handling Standards */}
        <motion.div
          className="packaging-handling-panel"
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="packaging-handling-heading">
            <span>HANDLING CONSIDERATIONS</span>

            <h3>
              Protecting Produce

              <span> Throughout Its Journey.</span>
            </h3>

            <p>
              Considering product characteristics,
              packaging suitability and transportation
              requirements at different stages of
              agricultural supply.
            </p>
          </div>

          <div className="packaging-handling-grid">
            {handlingStandards.map((standard) => {
              const Icon = standard.icon;

              return (
                <article
                  key={standard.id}
                  className="packaging-handling-card"
                >
                  <div className="packaging-handling-icon">
                    <Icon
                      size={28}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>

                  <h4>{standard.title}</h4>

                  <p>{standard.description}</p>

                  <ul>
                    {standard.considerations.map(
                      (consideration) => (
                        <li key={consideration}>
                          <CheckCircle2
                            size={15}
                            aria-hidden="true"
                          />

                          <span>{consideration}</span>
                        </li>
                      )
                    )}
                  </ul>
                </article>
              );
            })}
          </div>
        </motion.div>

        {/* Product-Specific Packaging */}
        {packagingProducts.length > 0 && (
          <motion.div
            className="packaging-product-panel"
            initial={
              prefersReducedMotion
                ? false
                : { opacity: 0, y: 25 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="packaging-product-heading">
              <div className="packaging-product-heading-icon">
                <PackageCheck
                  size={36}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>

              <div>
                <span>
                  {packagingCommitment.eyebrow}
                </span>

                <h3>
                  {packagingCommitment.title}

                  <span>
                    {" "}
                    {packagingCommitment.highlight}
                  </span>
                </h3>

                <p>
                  {packagingCommitment.description}
                </p>
              </div>
            </div>

            {/* Product Packaging Accordion */}
            <div className="packaging-product-accordion">
              {packagingProducts.map((product) => {
                const isExpanded =
                  expandedSlug === product.slug;

                const triggerId =
                  `packaging-trigger-${product.slug}`;

                const panelId =
                  `packaging-panel-${product.slug}`;

                return (
                  <div
                    key={product.slug}
                    className={`packaging-product-item ${
                      isExpanded ? "is-expanded" : ""
                    }`}
                  >
                    <h4 className="packaging-product-item-heading">
                      <button
                        id={triggerId}
                        type="button"
                        className="packaging-product-trigger"
                        aria-expanded={isExpanded}
                        aria-controls={panelId}
                        onClick={() =>
                          toggleProduct(product.slug)
                        }
                      >
                        <img
                          src={product.image}
                          alt=""
                          loading="lazy"
                          decoding="async"
                        />

                        <span className="packaging-product-trigger-text">
                          <strong>{product.name}</strong>

                          <span>
                            {product.categoryLabel}
                          </span>
                        </span>

                        <ChevronDown
                          size={21}
                          className="packaging-product-chevron"
                          aria-hidden="true"
                        />
                      </button>
                    </h4>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      hidden={!isExpanded}
                      className="packaging-product-body"
                    >
                      <h5>Indicative Packaging Options</h5>

                      <ul>
                        {product.packaging.map((option) => (
                          <li key={option}>
                            <CheckCircle2
                              size={17}
                              aria-hidden="true"
                            />

                            <span>{option}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="packaging-product-actions">
                        <Link
                          to={getProductDetailsUrl(
                            product.slug
                          )}
                          className="packaging-product-details"
                        >
                          View Product Details

                          <ArrowRight
                            size={17}
                            aria-hidden="true"
                          />
                        </Link>

                        <Link
                          to={getProductEnquiryUrl(
                            product.slug
                          )}
                          className="packaging-product-enquiry"
                        >
                          Discuss Packaging Requirements

                          <ArrowUpRight
                            size={17}
                            aria-hidden="true"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Packaging Disclaimer */}
        <div className="packaging-standards-note">
          <Info
            size={19}
            strokeWidth={1.7}
            aria-hidden="true"
          />

          <p>{packagingCommitment.note}</p>
        </div>
      </div>
    </section>
  );
}
