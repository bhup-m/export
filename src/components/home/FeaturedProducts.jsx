
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";

import { ArrowUpRight } from "lucide-react";

import ProductCard from "../common/ProductCard";

import {
  products,
  productCategories,
} from "../../data/products";

import "./FeaturedProducts.css";

export default function FeaturedProducts() {
  const [activeCategory, setActiveCategory] =
    useState("all");

  const reduceMotion = useReducedMotion();

  const featuredProducts = products.filter(
    (product) => product.featured
  );

  const filteredProducts = featuredProducts.filter(
    (product) =>
      activeCategory === "all" ||
      product.category === activeCategory
  );

  return (
    <section
      id="products"
      className="featured-products-section"
    >
      <div className="featured-products-container">

        {/* Section Heading */}
        <motion.div
          className="featured-products-heading"
          initial={{
            opacity: reduceMotion ? 1 : 0,
            y: reduceMotion ? 0 : 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
          }}
        >
          <div className="products-eyebrow">
            <span />
            OUR PRODUCT PORTFOLIO
            <span />
          </div>

          <h2 className="featured-products-title">
            Fresh from India.
            <span> For the World.</span>
          </h2>

          <p className="featured-products-description">
            Discover our agricultural product portfolio,
            focused on freshness, quality and the diverse
            requirements of international markets.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div
          className="product-filters"
          role="group"
          aria-label="Filter products by category"
        >
          {productCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() =>
                setActiveCategory(category.id)
              }
              aria-pressed={
                activeCategory === category.id
              }
              className={`product-filter-button ${
                activeCategory === category.id
                  ? "active"
                  : ""
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div
          layout={!reduceMotion}
          className="featured-products-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout={!reduceMotion}
                className="featured-product-item"
                initial={{
                  opacity: reduceMotion ? 1 : 0,
                  scale: reduceMotion ? 1 : 0.96,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: reduceMotion ? 1 : 0,
                  scale: reduceMotion ? 1 : 0.96,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.3,
                }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <p
            className="products-empty-state"
            role="status"
          >
            No products available in this category.
          </p>
        )}

        {/* Section CTA */}
        <div className="featured-products-cta">
          <p>
            Looking for specific products, bulk quantities
            or customised packaging requirements?
          </p>

          <a
            href="#contact"
            className="products-catalogue-button"
          >
            Request Product Catalogue
            <ArrowUpRight size={19} />
          </a>
        </div>
      </div>
    </section>
  );
}
