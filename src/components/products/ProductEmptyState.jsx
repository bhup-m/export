
import { Link } from "react-router-dom";

import {
  SearchX,
  PackageOpen,
  RotateCcw,
  ArrowUpRight,
  Mail,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import { ROUTES } from "../../data/navigation";

import "./ProductEmptyState.css";

export default function ProductEmptyState({
  hasProducts,
  onReset,
}) {
  const reduceMotion = useReducedMotion();

  const Icon = hasProducts
    ? SearchX
    : PackageOpen;

  return (
    <motion.div
      className="catalogue-empty-state"
      initial={{
        opacity: reduceMotion ? 1 : 0,
        y: reduceMotion ? 0 : 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.4,
        ease: "easeOut",
      }}
    >
      <div className="catalogue-empty-icon">
        <Icon
          size={42}
          strokeWidth={1.3}
          aria-hidden="true"
        />
      </div>

      <span className="catalogue-empty-eyebrow">
        {hasProducts
          ? "PRODUCT SEARCH"
          : "OUR PRODUCT PORTFOLIO"}
      </span>

      <h3 className="catalogue-empty-title">
        {hasProducts
          ? "No Matching Products Found."
          : "Product Catalogue Unavailable."}
      </h3>

      <p className="catalogue-empty-description">
        {hasProducts
          ? "Try adjusting your search or selecting a different category to explore our agricultural product portfolio."
          : "Please connect with our team to discuss current product availability, sourcing opportunities and your specific business requirements."}
      </p>

      <div className="catalogue-empty-actions">
        {hasProducts && (
          <button
            type="button"
            onClick={onReset}
            className="catalogue-empty-primary"
          >
            <RotateCcw
              size={18}
              strokeWidth={1.7}
              aria-hidden="true"
            />

            Clear All Filters
          </button>
        )}

        <Link
          to={ROUTES.CONTACT}
          className={
            hasProducts
              ? "catalogue-empty-secondary"
              : "catalogue-empty-primary"
          }
        >
          <Mail
            size={18}
            strokeWidth={1.7}
            aria-hidden="true"
          />

          Contact Our Team

          <ArrowUpRight
            size={17}
            strokeWidth={1.7}
            aria-hidden="true"
          />
        </Link>
      </div>

      <div className="catalogue-empty-footer">
        <span />

        Your Agricultural Sourcing Partner

        <span />
      </div>
    </motion.div>
  );
}
