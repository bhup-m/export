
import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  MapPin,
  PackageCheck,
  Check,
  Mail,
  Info,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import {
  getProductEnquiryUrl,
} from "../../data/navigation";

import {
  contactDetails,
} from "../../data/contactDetails";

import "./ProductOverview.css";

export default function ProductOverview({ product }) {
  const reduceMotion = useReducedMotion();

  const enquiryUrl = getProductEnquiryUrl(
    product.slug
  );

  const highlights = product.highlights || [];

  const emailSubject = encodeURIComponent(
    `Product Enquiry - ${product.name}`
  );

  const emailBody = encodeURIComponent(
    [
      "Dear Sharanga Global Exports Team,",
      "",
      `I am interested in sourcing ${product.name}.`,
      "",
      "Company Name:",
      "Destination Country:",
      "Required Quantity:",
      "Preferred Packaging:",
      "Additional Requirements:",
      "",
      "Please share your quotation and supply terms.",
      "",
      "Thank you.",
    ].join("\n")
  );

  const emailEnquiryUrl = contactDetails.email
    ? `mailto:${contactDetails.email}?subject=${emailSubject}&body=${emailBody}`
    : null;

  return (
    <motion.div
      className="product-overview"
      initial={{
        opacity: reduceMotion ? 1 : 0,
        y: reduceMotion ? 0 : 18,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.65,
        ease: "easeOut",
      }}
    >
      {/* Product Category */}
      <div className="product-overview-category">
        <span aria-hidden="true" />

        {product.categoryLabel}
      </div>

      {/* Product Name */}
      <h1
        id="product-details-title"
        className="product-overview-title"
      >
        {product.name}
      </h1>

      {/* Country of Origin */}
      <div className="product-overview-origin">
        <MapPin
          size={19}
          strokeWidth={1.7}
          aria-hidden="true"
        />

        <span>Country of Origin:</span>

        <strong>{product.origin}</strong>
      </div>

      {/* Availability */}
      {product.availability?.label && (
        <div className="product-overview-availability">
          <PackageCheck
            size={19}
            strokeWidth={1.7}
            aria-hidden="true"
          />

          <span>
            {product.availability.label}
          </span>
        </div>
      )}

      <div
        className="product-overview-divider"
        aria-hidden="true"
      />

      {/* Product Description */}
      <div className="product-overview-description">
        <p>
          {product.longDescription ||
            product.description}
        </p>
      </div>

      {/* Product Highlights */}
      {highlights.length > 0 && (
        <div className="product-overview-highlights">
          <h2>Product Highlights</h2>

          <ul>
            {highlights.map((highlight, index) => (
              <li key={`${highlight}-${index}`}>
                <span
                  className="product-overview-check"
                  aria-hidden="true"
                >
                  <Check
                    size={15}
                    strokeWidth={2}
                  />
                </span>

                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div
        className="product-overview-divider"
        aria-hidden="true"
      />

      {/* Enquiry Actions */}
      <div className="product-overview-actions">
        <Link
          to={enquiryUrl}
          className="product-overview-primary-button"
          aria-label={`Request a quotation for ${product.name}`}
        >
          <span>Request a Quotation</span>

          <ArrowUpRight
            size={20}
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </Link>

        {emailEnquiryUrl && (
          <a
            href={emailEnquiryUrl}
            className="product-overview-secondary-button"
            aria-label={`Email enquiry about ${product.name}`}
          >
            <Mail
              size={19}
              strokeWidth={1.7}
              aria-hidden="true"
            />

            <span>Email Product Enquiry</span>
          </a>
        )}
      </div>

      {/* Commercial Information */}
      <div className="product-overview-commercial-note">
        <Info
          size={18}
          strokeWidth={1.7}
          aria-hidden="true"
        />

        <p>
          Pricing, order quantities, packaging and
          supply terms are confirmed based on your
          specific requirements and product availability.
        </p>
      </div>
    </motion.div>
  );
}
