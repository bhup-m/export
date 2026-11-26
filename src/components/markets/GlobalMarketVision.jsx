
import {
  Globe2,
  MapPin,
  PackageCheck,
  ArrowUpRight,
} from "lucide-react";

import { Link } from "react-router-dom";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import {
  globalMarketVision,
  globalMarketPrinciples,
} from "../../data/globalMarketVision";

import { globalMarkets } from "../../data/globalMarkets";
import { getActiveProducts } from "../../data/products";
import { ROUTES } from "../../data/navigation";

import visionImage from "../../assets/images/markets/global-market-vision.jpg";

import "./GlobalMarketVision.css";

export default function GlobalMarketVision() {
  const prefersReducedMotion = useReducedMotion();

  const regionCount = globalMarkets.length;

  const countryCount = globalMarkets.reduce(
    (total, region) =>
      total + region.countries.length,
    0
  );

  const productCount = getActiveProducts().length;

  const marketStats = [
    {
      id: "regions",
      icon: Globe2,
      value: regionCount,
      label: "Target Regions",
      description: "International market exploration",
    },

    {
      id: "countries",
      icon: MapPin,
      value: countryCount,
      label: "Target Countries",
      description: "Potential market opportunities",
    },

    {
      id: "products",
      icon: PackageCheck,
      value: productCount,
      label: "Catalogue Products",
      description: "Agricultural product portfolio",
    },
  ];

  return (
    <section
      id="global-market-vision"
      className="global-market-vision"
      aria-labelledby="global-market-vision-title"
    >
      <div className="global-vision-container">
        <div className="global-vision-main">
          {/* Image Column */}
          <motion.div
            className="global-vision-visual"
            initial={
              prefersReducedMotion
                ? false
                : { opacity: 0, x: -30 }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{ duration: 0.65 }}
          >
            <div className="global-vision-image-wrapper">
              <img
                src={visionImage}
                alt="Fresh agricultural produce prepared for market distribution"
                className="global-vision-image"
                loading="lazy"
                decoding="async"
              />

              <div
                className="global-vision-image-overlay"
                aria-hidden="true"
              />

              <div className="global-vision-image-label">
                <MapPin
                  size={17}
                  aria-hidden="true"
                />

                INDIAN AGRICULTURE
              </div>

              <div className="global-vision-image-badge">
                <div className="global-vision-badge-icon">
                  <Globe2
                    size={34}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <span>
                    {globalMarketVision.imageBadge.subtitle}
                  </span>

                  <strong>
                    {globalMarketVision.imageBadge.title}
                  </strong>
                </div>
              </div>
            </div>

            <p className="global-vision-image-caption">
              Illustrative agricultural imagery.
            </p>
          </motion.div>

          {/* Content Column */}
          <motion.div
            className="global-vision-content"
            initial={
              prefersReducedMotion
                ? false
                : { opacity: 0, x: 30 }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{ duration: 0.65 }}
          >
            <div className="global-vision-eyebrow">
              <span aria-hidden="true" />

              {globalMarketVision.eyebrow}
            </div>

            <h2 id="global-market-vision-title">
              {globalMarketVision.title}

              <span>
                {globalMarketVision.highlight}
              </span>
            </h2>

            <div className="global-vision-description">
              {globalMarketVision.paragraphs.map(
                (paragraph) => (
                  <p key={paragraph}>
                    {paragraph}
                  </p>
                )
              )}
            </div>

            {/* Vision Principles */}
            <div className="global-vision-principles">
              {globalMarketPrinciples.map(
                (principle) => {
                  const Icon = principle.icon;

                  return (
                    <article
                      key={principle.id}
                      className="global-vision-principle"
                    >
                      <div className="global-vision-principle-icon">
                        <Icon
                          size={25}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </div>

                      <div>
                        <h3>{principle.title}</h3>

                        <p>{principle.description}</p>
                      </div>
                    </article>
                  );
                }
              )}
            </div>

            <Link
              to={ROUTES.CONTACT}
              className="global-vision-cta"
            >
              Discuss Business Opportunities

              <ArrowUpRight
                size={18}
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </div>

        {/* Dynamic Market Statistics */}
        <motion.div
          className="global-vision-stats"
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, y: 25 }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{ duration: 0.6 }}
        >
          {marketStats.map((stat) => {
            const Icon = stat.icon;

            return (
              <article
                key={stat.id}
                className="global-vision-stat"
              >
                <div className="global-vision-stat-icon">
                  <Icon
                    size={32}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>

                <div className="global-vision-stat-content">
                  <strong>{stat.value}</strong>

                  <h3>{stat.label}</h3>

                  <p>{stat.description}</p>
                </div>
              </article>
            );
          })}
        </motion.div>

        <p className="global-vision-market-note">
          Target markets represent areas of business
          exploration and do not indicate completed
          exports or established overseas operations.
        </p>
      </div>
    </section>
  );
}
