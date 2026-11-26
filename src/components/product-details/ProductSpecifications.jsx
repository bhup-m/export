
import {
  ClipboardList,
  Info,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import "./ProductSpecifications.css";

export default function ProductSpecifications({
  product,
}) {
  const reduceMotion = useReducedMotion();

  const specifications = Array.isArray(
    product.specifications
  )
    ? product.specifications.filter(
        (specification) =>
          specification?.label &&
          specification.value != null &&
          String(specification.value).trim() !== ""
      )
    : [];

  // Hide section if specification data is unavailable
  if (specifications.length === 0) {
    return null;
  }

  return (
    <section
      className="product-specifications"
      id="product-specifications"
      aria-labelledby="product-specifications-title"
    >
      <div className="product-specifications-container">
        {/* Section Heading */}
        <motion.div
          className="product-specifications-heading"
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
          <div className="product-specifications-eyebrow">
            <span aria-hidden="true" />

            PRODUCT INFORMATION

            <span aria-hidden="true" />
          </div>

          <h2 id="product-specifications-title">
            Product Specifications.

            <span>Quality in Every Detail.</span>
          </h2>

          <p>
            Explore the product characteristics and
            commercial specifications relevant to your
            agricultural sourcing requirements.
          </p>
        </motion.div>

        {/* Specifications Card */}
        <motion.div
          className="product-specifications-card"
          initial={{
            opacity: reduceMotion ? 1 : 0,
            y: reduceMotion ? 0 : 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease: "easeOut",
          }}
        >
          {/* Card Header */}
          <div className="product-specifications-card-header">
            <div
              className="product-specifications-header-icon"
              aria-hidden="true"
            >
              <ClipboardList
                size={30}
                strokeWidth={1.5}
              />
            </div>

            <div className="product-specifications-card-heading">
              <h3>{product.name}</h3>

              <p>
                Technical &amp; Commercial Specifications
              </p>
            </div>

            <div className="product-specifications-count">
              {specifications.length} Specifications
            </div>
          </div>

          {/* Specifications Table */}
          <div className="product-specifications-table-wrapper">
            <table
              className="product-specifications-table"
              aria-label={`${product.name} product specifications`}
            >
              <thead>
                <tr>
                  <th scope="col">
                    Specification
                  </th>

                  <th scope="col">
                    Details
                  </th>
                </tr>
              </thead>

              <tbody>
                {specifications.map(
                  (specification, index) => (
                    <tr
                      key={`${specification.label}-${index}`}
                    >
                      <th scope="row">
                        {specification.label}
                      </th>

                      <td>
                        {specification.value}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Specification Disclaimer */}
        <div className="product-specifications-note">
          <div
            className="product-specifications-note-icon"
            aria-hidden="true"
          >
            <Info
              size={23}
              strokeWidth={1.7}
            />
          </div>

          <div className="product-specifications-note-content">
            <h3>Specification Note</h3>

            <p>
              Final product specifications, grading,
              sizing and order requirements are subject
              to seasonal variations, product
              availability and mutually agreed buyer
              requirements. Please contact our team
              to confirm the specifications applicable
              to your order.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
