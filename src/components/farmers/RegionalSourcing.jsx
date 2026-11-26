
import {
  MapPin,
  Info,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import {
  sourcingFoundation,
  sourcingRegions,
  regionalAdvantages,
} from "../../data/regionalSourcing";

import "./RegionalSourcing.css";

export default function RegionalSourcing() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="regional-sourcing"
      className="regional-sourcing"
      aria-labelledby="regional-sourcing-title"
    >
      <div className="regional-sourcing-container">
        {/* Section Heading */}
        <motion.div
          className="regional-sourcing-heading"
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
          }}
        >
          <div className="regional-sourcing-eyebrow">
            <span aria-hidden="true" />

            OUR REGIONAL STRENGTHS

            <span aria-hidden="true" />
          </div>

          <h2 id="regional-sourcing-title">
            Locally Rooted.

            <span>
              Regionally Connected.
            </span>
          </h2>

          <p>
            Our agricultural heritage in Maharashtra
            provides a foundation for understanding
            regional produce markets, developing
            sourcing relationships and exploring
            procurement opportunities across India.
          </p>
        </motion.div>

        {/* Regional Sourcing Grid */}
        <div className="regional-sourcing-grid">
          {/* Agricultural Foundation */}
          <motion.article
            className="regional-sourcing-foundation"
            initial={{
              opacity: reduceMotion ? 1 : 0,
              x: reduceMotion ? 0 : -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
            }}
          >
            <div
              className="regional-sourcing-foundation-decoration"
              aria-hidden="true"
            />

            <div className="regional-sourcing-foundation-header">
              <div className="regional-sourcing-foundation-icon">
                <MapPin
                  size={32}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>

              <span className="regional-sourcing-foundation-label">
                {sourcingFoundation.label}
              </span>

              <h3>{sourcingFoundation.name}</h3>

              <span className="regional-sourcing-foundation-location">
                {sourcingFoundation.location}
              </span>
            </div>

            <p className="regional-sourcing-foundation-description">
              {sourcingFoundation.description}
            </p>

            {/* Experience */}
            <div className="regional-sourcing-experience">
              <span className="regional-sourcing-experience-value">
                {sourcingFoundation.experience}
              </span>

              <span className="regional-sourcing-experience-label">
                {sourcingFoundation.experienceLabel}
              </span>
            </div>

            {/* Foundation Highlights */}
            <div className="regional-sourcing-foundation-highlights">
              {sourcingFoundation.highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.id}
                    className="regional-sourcing-foundation-highlight"
                  >
                    <div className="regional-sourcing-foundation-highlight-icon">
                      <Icon
                        size={22}
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <h4>{item.title}</h4>

                      <p>{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.article>

          {/* Regional Opportunities */}
          <div className="regional-sourcing-regions">
            {sourcingRegions.map((region, index) => {
              const Icon = region.icon;

              return (
                <motion.article
                  key={region.id}
                  className="regional-sourcing-region"
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
                    duration: reduceMotion ? 0 : 0.5,
                    delay: reduceMotion ? 0 : index * 0.1,
                  }}
                >
                  <div className="regional-sourcing-region-icon">
                    <Icon
                      size={27}
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="regional-sourcing-region-content">
                    <span className="regional-sourcing-region-label">
                      {region.label}
                    </span>

                    <h3>{region.name}</h3>

                    <div className="regional-sourcing-region-location">
                      <MapPin
                        size={13}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />

                      {region.location}
                    </div>

                    <p>{region.description}</p>

                    <ul
                      className="regional-sourcing-products"
                      aria-label={`Potential produce categories for ${region.name}`}
                    >
                      {region.products.map((product) => (
                        <li key={product}>
                          {product}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Regional Advantages */}
        <div className="regional-sourcing-advantages">
          {regionalAdvantages.map((advantage, index) => {
            const Icon = advantage.icon;

            return (
              <motion.article
                key={advantage.id}
                className="regional-sourcing-advantage"
                initial={{
                  opacity: reduceMotion ? 1 : 0,
                  y: reduceMotion ? 0 : 15,
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
                  duration: reduceMotion ? 0 : 0.5,
                  delay: reduceMotion ? 0 : index * 0.1,
                }}
              >
                <div className="regional-sourcing-advantage-icon">
                  <Icon
                    size={28}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>

                <h3>{advantage.title}</h3>

                <p>{advantage.description}</p>
              </motion.article>
            );
          })}
        </div>

        {/* Sourcing Information */}
        <div className="regional-sourcing-note">
          <Info
            size={18}
            strokeWidth={1.7}
            aria-hidden="true"
          />

          <p>
            Sourcing locations and product availability
            are subject to seasonal conditions, supplier
            arrangements, quality requirements and
            individual buyer specifications.
          </p>
        </div>
      </div>
    </section>
  );
}
