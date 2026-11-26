
import { motion, useReducedMotion } from "motion/react";

import {
  Globe2,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

import { ROUTES } from "../../data/navigation";

import "./PartnershipCTA.css";

export default function PartnershipCTA({
  eyebrow = "LET'S BUILD SOMETHING TOGETHER",
  title = "Great Partnerships Begin",
  highlight = "With a Conversation.",
  description = "Whether you are an importer, distributor, wholesaler or business partner, we welcome the opportunity to explore fresh produce sourcing and long-term business relationships.",
  primaryLabel = "Let's Connect",
  primaryHref = ROUTES.CONTACT,
  secondaryLabel = "Explore Our Products",
  secondaryHref = ROUTES.PRODUCTS,
  showSecondary = true,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="partnership-cta"
      aria-labelledby="partnership-cta-title"
    >
      {/* Decorative Elements */}

      <div
        className="partnership-cta-decoration partnership-cta-decoration-left"
        aria-hidden="true"
      />

      <div
        className="partnership-cta-decoration partnership-cta-decoration-right"
        aria-hidden="true"
      />

      <div className="partnership-cta-container">

        <motion.div
          className="partnership-cta-content"
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
            amount: 0.15,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            ease: "easeOut",
          }}
        >
          {/* CTA Icon */}

          <div className="partnership-cta-icon">
            <Globe2
              size={36}
              strokeWidth={1.4}
              aria-hidden="true"
            />
          </div>

          {/* Eyebrow */}

          <div className="partnership-cta-eyebrow">
            <span />
            {eyebrow}
            <span />
          </div>

          {/* Heading */}

          <h2 id="partnership-cta-title">
            {title}

            {highlight && (
              <span>{highlight}</span>
            )}
          </h2>

          {/* Description */}

          <p>{description}</p>

          {/* Action Buttons */}

          <div className="partnership-cta-actions">

            <Link
              to={primaryHref}
              className="partnership-cta-primary"
            >
              {primaryLabel}

              <ArrowUpRight
                size={19}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>

            {showSecondary && (
              <Link
                to={secondaryHref}
                className="partnership-cta-secondary"
              >
                {secondaryLabel}

                <ArrowRight
                  size={18}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </Link>
            )}

          </div>

        </motion.div>

      </div>
    </section>
  );
}
