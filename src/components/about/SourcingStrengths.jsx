
import { motion, useReducedMotion } from "motion/react";

import {
  Sprout,
  Network,
  Globe2,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import { Link } from "react-router-dom";

import { sourcingStrengths } from "../../data/sourcingStrengths";
import { ROUTES } from "../../data/navigation";

import sourcingImage from "../../assets/images/about/sourcing-strengths.jpg";

import "./SourcingStrengths.css";

const sourcingHighlights = [
  {
    id: "local-roots",
    icon: Sprout,
    title: "Local Roots",
    description: "Built on agricultural heritage",
  },
  {
    id: "connected-network",
    icon: Network,
    title: "Connected Network",
    description: "Farmers and agricultural merchants",
  },
  {
    id: "global-ambition",
    icon: Globe2,
    title: "Global Ambition",
    description: "Focused on international opportunities",
  },
];

export default function SourcingStrengths() {
  const reduceMotion = useReducedMotion();

  const animation = (delay = 0) => ({
    initial: {
      opacity: reduceMotion ? 1 : 0,
      y: reduceMotion ? 0 : 25,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
      amount: 0.1,
    },
    transition: {
      duration: reduceMotion ? 0 : 0.7,
      delay: reduceMotion ? 0 : delay,
      ease: "easeOut",
    },
  });

  return (
    <section
      id="sourcing-strengths"
      className="sourcing-strengths"
      aria-labelledby="sourcing-strengths-title"
    >
      <div className="sourcing-strengths-container">

        {/* Section Header */}

        <motion.div
          {...animation()}
          className="sourcing-strengths-header"
        >
          <div className="sourcing-strengths-eyebrow">
            <span />
            OUR SOURCING ADVANTAGE
            <span />
          </div>

          <h2 id="sourcing-strengths-title">
            Strong Roots.
            <span>Stronger Supply Networks.</span>
          </h2>

          <p>
            Built on generations of agricultural experience,
            regional market knowledge and trusted
            relationships across the fresh produce
            supply network.
          </p>
        </motion.div>

        {/* Main Content */}

        <div className="sourcing-strengths-grid">

          {/* Agricultural Image */}

          <motion.div
            {...animation()}
            className="sourcing-strengths-visual"
          >
            <div className="sourcing-strengths-image-wrapper">

              <img
                src={sourcingImage}
                alt="Agricultural produce sourcing and wholesale trading"
                className="sourcing-strengths-image"
                loading="lazy"
                decoding="async"
              />

              <div
                className="sourcing-strengths-image-overlay"
                aria-hidden="true"
              />

              <div className="sourcing-strengths-image-content">

                <div className="sourcing-strengths-image-label">
                  <MapPin
                    size={16}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                  OUR AGRICULTURAL ROOTS
                </div>

                <h3>Amalner, Maharashtra</h3>

                <p>
                  Connecting agricultural communities
                  with new business opportunities.
                </p>

                <div
                  className="sourcing-strengths-image-accent"
                  aria-hidden="true"
                />

              </div>
            </div>
          </motion.div>

          {/* Sourcing Advantages */}

          <motion.div
            {...animation(0.15)}
            className="sourcing-strengths-content"
          >
            <div className="sourcing-strengths-list">

              {sourcingStrengths.map((strength) => {
                const Icon = strength.icon;

                return (
                  <article
                    key={strength.id}
                    className="sourcing-strengths-item"
                  >
                    <div className="sourcing-strengths-item-icon">
                      <Icon
                        size={25}
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="sourcing-strengths-item-content">
                      <h3>{strength.title}</h3>
                      <p>{strength.description}</p>
                    </div>
                  </article>
                );
              })}

            </div>

            {/* Sourcing CTA */}

            <Link
              to={ROUTES.FARMERS}
              className="sourcing-strengths-link"
            >
              Explore Our Sourcing Network

              <ArrowUpRight
                size={19}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>

          </motion.div>

        </div>

        {/* Sourcing Highlights */}

        <motion.div
          {...animation(0.2)}
          className="sourcing-strengths-highlights"
        >
          {sourcingHighlights.map((highlight) => {
            const Icon = highlight.icon;

            return (
              <div
                key={highlight.id}
                className="sourcing-strengths-highlight"
              >
                <div className="sourcing-strengths-highlight-icon">
                  <Icon
                    size={30}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>

                <div className="sourcing-strengths-highlight-content">
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
