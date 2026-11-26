
import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  MapPin,
  Mail,
  PackageCheck,
} from "lucide-react";

import {
  getProductDetailsUrl,
  getProductEnquiryUrl,
} from "../../data/navigation";

import "./CatalogueProductCard.css";

export default function CatalogueProductCard({
  product,
  detailsEnabled = false,
}) {
  const detailsUrl = getProductDetailsUrl(
    product.slug
  );

  const enquiryUrl = getProductEnquiryUrl(
    product.slug
  );

  return (
    <article
      className="catalogue-product-card"
      aria-labelledby={`catalogue-product-${product.slug}`}
    >

      {/* Product Image */}

      <div className="catalogue-product-image-wrapper">

        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="catalogue-product-image"
        />

        {/* Country of Origin */}

        <div className="catalogue-product-origin">

          <MapPin
            size={14}
            strokeWidth={1.8}
            aria-hidden="true"
          />

          <span>{product.origin}</span>

        </div>

      </div>

      {/* Product Information */}

      <div className="catalogue-product-content">

        <span className="catalogue-product-category">
          {product.categoryLabel}
        </span>

        <h3
          id={`catalogue-product-${product.slug}`}
          className="catalogue-product-name"
        >
          {product.name}
        </h3>

        {/* Product Availability */}

        {product.availability?.label && (
          <div
            className="catalogue-product-availability"
            title={product.availability.note}
          >
            <PackageCheck
              size={17}
              strokeWidth={1.7}
              aria-hidden="true"
            />

            <span>
              {product.availability.label}
            </span>
          </div>
        )}

        {/* Product Description */}

        <p className="catalogue-product-description">
          {product.description}
        </p>

        {/* Product Actions */}

        <div className="catalogue-product-actions">

          {/* Product Details */}

          {detailsEnabled ? (
            <Link
              to={detailsUrl}
              className="catalogue-details-button"
              aria-label={`View details of ${product.name}`}
            >
              View Details

              <ArrowUpRight
                size={18}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>
          ) : (
            <button
              type="button"
              disabled
              className="catalogue-details-button"
              aria-label={`Details for ${product.name} coming soon`}
            >
              Details Coming Soon

              <ArrowUpRight
                size={18}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </button>
          )}

          {/* Product Enquiry */}

          <Link
            to={enquiryUrl}
            className="catalogue-enquiry-button"
            aria-label={`Enquire about ${product.name}`}
          >
            <Mail
              size={17}
              strokeWidth={1.8}
              aria-hidden="true"
            />

            Enquire Now

          </Link>

        </div>

      </div>

    </article>
  );
}
