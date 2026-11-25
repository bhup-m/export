
import { ArrowUpRight, MapPin } from "lucide-react";

import "./ProductCard.css";

export default function ProductCard({ product }) {

    const handleProductEnquiry = (productName) => {
        window.dispatchEvent(
            new CustomEvent("product-enquiry", {
            detail: {
                product: productName,
            },
            })
        );
    };
  return (
    <article className="product-card">

      {/* Product Image */}
      <div className="product-card-image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-card-image"
          loading="lazy"
          decoding="async"
          width={800}
          height={600}
        />

        <span className="product-origin">
          <MapPin size={13} strokeWidth={1.8} />
          {product.origin}
        </span>
      </div>

      {/* Product Information */}
      <div className="product-card-content">
        <span className="product-category">
          {product.categoryLabel}
        </span>

        <h3 className="product-name">
          {product.name}
        </h3>

        <p className="product-description">
          {product.description}
        </p>

        {/* Enquiry Button */}
        <div className="product-card-footer">
          <a
            href="#contact"
            onClick={() => handleProductEnquiry(product.name)}
            className="product-enquiry-btn"
            >
            Enquire Now
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </article>
  );
}
