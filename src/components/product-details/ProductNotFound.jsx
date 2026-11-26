
import { Link } from "react-router-dom";
import {
  PackageSearch,
  ArrowLeft,
  ArrowUpRight,
  Home,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { ROUTES } from "../../data/navigation";

import "./ProductNotFound.css";

export default function ProductNotFound() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="product-not-found"
      aria-labelledby="product-not-found-title"
    >
      <motion.div
        className="product-not-found-content"
        initial={{
          opacity: reduceMotion ? 1 : 0,
          y: reduceMotion ? 0 : 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.6,
          ease: "easeOut",
        }}
      >
        <div
          className="product-not-found-icon"
          aria-hidden="true"
        >
          <PackageSearch size={54} strokeWidth={1.3} />
        </div>

        <div className="product-not-found-eyebrow">
          <span />
          PRODUCT UNAVAILABLE
          <span />
        </div>

        <h1 id="product-not-found-title">
          Product Not Found.
          <span>Let's Find What You Need.</span>
        </h1>

        <p>
          The product you are looking for may have been
          removed, updated or is currently unavailable
          in our catalogue.
        </p>

        <p className="product-not-found-secondary-text">
          Explore our range of agricultural products or
          contact our team to discuss your specific
          sourcing requirements.
        </p>

        <div className="product-not-found-actions">
          <Link
            to={ROUTES.PRODUCTS}
            className="product-not-found-primary"
          >
            <ArrowLeft size={19} strokeWidth={1.8} />
            Explore Our Products
          </Link>

          <Link
            to={ROUTES.CONTACT}
            className="product-not-found-secondary"
          >
            Contact Our Team
            <ArrowUpRight size={19} strokeWidth={1.8} />
          </Link>
        </div>

        <Link
          to={ROUTES.HOME}
          className="product-not-found-home"
        >
          <Home size={16} strokeWidth={1.7} />
          Return to Homepage
        </Link>
      </motion.div>
    </section>
  );
}
