
import {
  Package,
  CheckCircle2,
  Boxes,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import "./ProductPackaging.css";

export default function ProductPackaging({ product }) {
  const reduceMotion = useReducedMotion();

  const packagingOptions = Array.isArray(product.packaging)
    ? [
        ...new Set(
          product.packaging
            .filter(
              (option) =>
                typeof option === "string" &&
                option.trim() !== ""
            )
            .map((option) => option.trim())
        ),
      ]
    : [];

  return (
    <motion.article
      className="product-packaging"
      aria-labelledby="product-packaging-title"
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
        amount: 0.15,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.6,
        ease: "easeOut",
      }}
    >
      {/* Card Header */}
      <div className="product-packaging-header">
        <div
          className="product-packaging-header-icon"
          aria-hidden="true"
        >
          <Package size={29} strokeWidth={1.5} />
        </div>

        <div className="product-packaging-header-content">
          <h3 id="product-packaging-title">
            Packaging Options
          </h3>

          <p>Flexible packaging solutions</p>
        </div>
      </div>

      {/* Card Body */}
      <div className="product-packaging-body">
        <p className="product-packaging-description">
          Packaging options for {product.name} can
          be discussed according to product
          characteristics, order quantities and
          destination market requirements.
        </p>

        {packagingOptions.length > 0 ? (
          <ul className="product-packaging-list">
            {packagingOptions.map((option) => (
              <li key={option}>
                <div
                  className="product-packaging-check"
                  aria-hidden="true"
                >
                  <CheckCircle2
                    size={19}
                    strokeWidth={1.7}
                  />
                </div>

                <span>{option}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="product-packaging-fallback">
            Please contact our team to discuss
            suitable packaging options for this
            product.
          </p>
        )}

        {/* Custom Packaging */}
        <div className="product-packaging-custom">
          <div
            className="product-packaging-custom-icon"
            aria-hidden="true"
          >
            <Boxes size={24} strokeWidth={1.6} />
          </div>

          <div className="product-packaging-custom-content">
            <h4>Custom Packaging Requirements</h4>

            <p>
              Have specific packaging, labeling or
              carton requirements? Share your
              preferences with our team so that
              suitable arrangements can be evaluated.
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
