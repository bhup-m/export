
import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  ArrowRight,
  MapPin,
} from "lucide-react";

import {
  getProductDetailsUrl,
  getProductEnquiryUrl,
} from "../../data/navigation";

import "./ProductCard.css";

export default function ProductCard({ product }) {
  const detailsUrl = getProductDetailsUrl(
    product.slug
  );

  const enquiryUrl = getProductEnquiryUrl(
    product.slug
  );

  return (
    <article className="product-card">
      {/* Product Image */}
      <div className="product-card-image">
        <Link
          to={detailsUrl}
          className="product-card-image-link"
          aria-label={`View details for ${product.name}`}
        >
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
          />
        </Link>

        <div className="product-origin-badge">
          <MapPin
            size={14}
            strokeWidth={1.8}
            aria-hidden="true"
          />

          {product.origin}
        </div>
      </div>

      {/* Product Content */}
      <div className="product-card-content">
        <span className="product-card-category">
          {product.categoryLabel}
        </span>

        <h3 className="product-card-title">
          <Link to={detailsUrl}>
            {product.name}
          </Link>
        </h3>

        <p className="product-card-description">
          {product.description}
        </p>

        {/* Product Actions */}
        <div className="product-card-actions">
          <Link
            to={detailsUrl}
            className="product-details-link"
            aria-label={`View details for ${product.name}`}
          >
            View Details

            <ArrowRight
              size={17}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </Link>

          <Link
            to={enquiryUrl}
            className="product-enquiry-link"
            aria-label={`Enquire about ${product.name}`}
          >
            Enquire Now

            <ArrowUpRight
              size={17}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
