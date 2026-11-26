
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Info,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import {
  gradingPrinciples,
  gradingCriteria,
  productGrading,
  gradingObjectives,
} from "../../data/sortingGrading";

import {
  getActiveProducts,
  getProductBySlug,
} from "../../data/products";

import {
  getProductDetailsUrl,
  getProductEnquiryUrl,
} from "../../data/navigation";

import "./SortingGrading.css";

export default function SortingGrading() {
  const prefersReducedMotion = useReducedMotion();

  const gradingProducts = getActiveProducts().filter(
    (product) => productGrading[product.slug]
  );

  const [selectedSlug, setSelectedSlug] =
    useState("red-onion");

  const selectedProduct =
    gradingProducts.find(
      (product) => product.slug === selectedSlug
    ) || gradingProducts[0];

  const selectedGrading = selectedProduct
    ? productGrading[selectedProduct.slug]
    : null;

  return (
    <section
      id="sorting-grading"
      className="sorting-grading"
      aria-labelledby="sorting-grading-title"
    >
      <div className="sorting-grading-container">
        {/* Section Heading */}
        <motion.div
          className="sorting-grading-heading"
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="sorting-grading-eyebrow">
            <span aria-hidden="true" />

            OUR SORTING & GRADING APPROACH

            <span aria-hidden="true" />
          </div>

          <h2 id="sorting-grading-title">
            Carefully Selected.

            <span>Consistently Graded.</span>
          </h2>

          <p>
            Agricultural products have different
            characteristics and market requirements.
            Our grading approach focuses on product
            suitability, consistency and agreed
            buyer-specific specifications.
          </p>
        </motion.div>

        {/* Grading Principles */}
        <div className="sorting-grading-principles">
          {gradingPrinciples.map((principle, index) => {
            const Icon = principle.icon;

            const product = getProductBySlug(
              principle.productSlug
            );

            return (
              <motion.article
                key={principle.id}
                className="sorting-grading-principle"
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
                {product?.image && (
                  <div className="sorting-grading-principle-image">
                    <img
                      src={product.image}
                      alt={`Illustrative ${product.name} produce`}
                      loading="lazy"
                      decoding="async"
                    />

                    <div
                      className="sorting-grading-image-overlay"
                      aria-hidden="true"
                    />
                  </div>
                )}

                <div className="sorting-grading-principle-content">
                  <div className="sorting-grading-principle-icon">
                    <Icon
                      size={28}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>

                  <h3>{principle.title}</h3>

                  <p>{principle.description}</p>

                  <ul>
                    {principle.highlights.map(
                      (highlight) => (
                        <li key={highlight}>
                          <CheckCircle2
                            size={16}
                            aria-hidden="true"
                          />

                          <span>{highlight}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Product-Specific Grading */}
        {selectedProduct && selectedGrading && (
          <motion.div
            className="sorting-grading-product-panel"
            initial={
              prefersReducedMotion
                ? false
                : { opacity: 0, y: 25 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="sorting-grading-panel-heading">
              <span>PRODUCT-SPECIFIC GRADING</span>

              <h3>
                Different Products.
                <span> Different Requirements.</span>
              </h3>

              <p>
                Explore indicative grading
                considerations for products in our
                agricultural portfolio.
              </p>
            </div>

            {/* Product Selector */}
            <div
              className="sorting-grading-product-selector"
              role="group"
              aria-label="Select a product for grading information"
            >
              {gradingProducts.map((product) => (
                <button
                  key={product.slug}
                  type="button"
                  aria-pressed={
                    selectedProduct.slug === product.slug
                  }
                  className={`sorting-grading-product-button ${
                    selectedProduct.slug === product.slug
                      ? "is-active"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedSlug(product.slug)
                  }
                >
                  {product.name}
                </button>
              ))}
            </div>

            <p
              className="sorting-grading-sr-only"
              role="status"
            >
              Showing grading considerations for{" "}
              {selectedProduct.name}.
            </p>

            {/* Selected Product Content */}
            <motion.div
              key={selectedProduct.slug}
              className="sorting-grading-product-grid"
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, y: 8 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              {/* Product Image */}
              <div className="sorting-grading-product-visual">
                <div className="sorting-grading-product-image">
                  <img
                    src={selectedProduct.image}
                    alt={`Illustrative ${selectedProduct.name} produce`}
                    loading="lazy"
                    decoding="async"
                  />

                  <span className="sorting-grading-product-category">
                    {selectedProduct.categoryLabel}
                  </span>
                </div>

                <div className="sorting-grading-product-summary">
                  <span>SELECTED PRODUCT</span>

                  <h4>{selectedProduct.name}</h4>

                  <p>{selectedGrading.description}</p>

                  <Link
                    to={getProductDetailsUrl(
                      selectedProduct.slug
                    )}
                    className="sorting-grading-details-link"
                  >
                    View Product Details

                    <ArrowRight
                      size={17}
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>

              {/* Product Grading Criteria */}
              <div className="sorting-grading-product-content">
                <h4>Grading Considerations</h4>

                <div className="sorting-grading-criteria-grid">
                  {gradingCriteria.map((criterion) => {
                    const Icon = criterion.icon;

                    return (
                      <article
                        key={criterion.id}
                        className="sorting-grading-criterion"
                      >
                        <div className="sorting-grading-criterion-icon">
                          <Icon
                            size={23}
                            strokeWidth={1.7}
                            aria-hidden="true"
                          />
                        </div>

                        <div>
                          <h5>{criterion.label}</h5>

                          <p>
                            {
                              selectedGrading.criteria[
                                criterion.id
                              ]
                            }
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>

                {/* Additional Considerations */}
                <div className="sorting-grading-considerations">
                  <h5>
                    Additional Buyer Considerations
                  </h5>

                  <ul>
                    {selectedGrading.considerations.map(
                      (consideration) => (
                        <li key={consideration}>
                          <CheckCircle2
                            size={16}
                            aria-hidden="true"
                          />

                          <span>{consideration}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <Link
                  to={getProductEnquiryUrl(
                    selectedProduct.slug
                  )}
                  className="sorting-grading-enquiry-btn"
                >
                  Discuss Grading Requirements

                  <ArrowUpRight
                    size={18}
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </motion.div>

            {/* Product Specification Note */}
            <div className="sorting-grading-note">
              <Info
                size={19}
                strokeWidth={1.7}
                aria-hidden="true"
              />

              <p>
                These grading considerations are
                indicative. Final specifications,
                acceptable tolerances, product grades
                and inspection requirements are
                subject to buyer agreement, sourcing
                feasibility and applicable standards.
                Product photographs are illustrative.
              </p>
            </div>
          </motion.div>
        )}

        {/* Grading Objectives */}
        <motion.div
          className="sorting-grading-objectives"
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          {gradingObjectives.map((objective) => {
            const Icon = objective.icon;

            return (
              <article
                key={objective.id}
                className="sorting-grading-objective"
              >
                <div className="sorting-grading-objective-icon">
                  <Icon
                    size={28}
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <h3>{objective.title}</h3>

                  <p>{objective.description}</p>
                </div>
              </article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
