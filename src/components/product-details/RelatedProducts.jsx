
import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  LayoutGrid,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import ProductGrid from "../products/ProductGrid";

import {
  getRelatedProducts,
} from "../../data/products";

import {
  ROUTES,
} from "../../data/navigation";

import "./RelatedProducts.css";

export default function RelatedProducts({ product }) {
  const reduceMotion = useReducedMotion();

  const relatedProducts = getRelatedProducts(
    product.slug,
    3
  );

  // Hide section when no related products exist
  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section
      id="related-products"
      className="related-products"
      aria-labelledby="related-products-title"
    >
      <div className="related-products-container">
        {/* Section Heading */}
        <motion.div
          className="related-products-heading"
          initial={{
            opacity: reduceMotion ? 1 : 0,
            y: reduceMotion ? 0 : 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
            ease: "easeOut",
          }}
        >
          <div className="related-products-eyebrow">
            <span aria-hidden="true" />

            EXPLORE OUR PORTFOLIO

            <span aria-hidden="true" />
          </div>

          <h2 id="related-products-title">
            You May Also Be Interested In.

            <span>More from Indian Farms.</span>
          </h2>

          <p>
            Discover more agricultural products
            from our {product.categoryLabel.toLowerCase()}
            {" "}portfolio to complement your
            sourcing requirements.
          </p>
        </motion.div>

        {/* Category Information */}
        <div className="related-products-summary">
          <div className="related-products-category">
            <LayoutGrid
              size={18}
              strokeWidth={1.7}
              aria-hidden="true"
            />

            <span>
              More {product.categoryLabel}
            </span>
          </div>

          <span className="related-products-count">
            {relatedProducts.length}
            {" "}
            {relatedProducts.length === 1
              ? "Product"
              : "Products"}
          </span>
        </div>

        {/* Reusable Catalogue Grid */}
        <ProductGrid
          products={relatedProducts}
          detailsEnabled={true}
        />

        {/* Explore All Products */}
        <div className="related-products-footer">
          <p>
            Looking for other agricultural products?
            Explore our complete product portfolio.
          </p>

          <Link
            to={ROUTES.PRODUCTS}
            className="related-products-cta"
          >
            Explore All Products

            <ArrowUpRight
              size={20}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
