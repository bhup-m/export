
import { motion, useReducedMotion } from "motion/react";

import { companyJourney } from "../../data/companyJourney";

import "./CompanyJourney.css";

export default function CompanyJourney() {
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
      id="company-journey"
      className="company-journey"
      aria-labelledby="company-journey-title"
    >
      <div className="company-journey-container">

        {/* Section Header */}

        <motion.div
          {...animation()}
          className="company-journey-header"
        >
          <div className="company-journey-eyebrow">
            <span />
            OUR JOURNEY
            <span />
          </div>

          <h2 id="company-journey-title">
            From Local Roots.
            <span>To Global Aspirations.</span>
          </h2>

          <p>
            A journey built on generations of agricultural
            experience, trusted relationships and a
            forward-looking vision for international growth.
          </p>
        </motion.div>

        {/* Company Timeline */}

        <ol className="company-journey-timeline">

          {companyJourney.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.li
                key={item.id}
                {...animation(index * 0.12)}
                className="company-journey-item"
              >
                {/* Timeline Marker */}

                <div className="company-journey-marker">

                  <div className="company-journey-icon">
                    <Icon
                      size={30}
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  </div>

                  <span
                    className="company-journey-number"
                    aria-hidden="true"
                  >
                    {item.number}
                  </span>

                </div>

                {/* Timeline Content */}

                <div className="company-journey-content">

                  <div className="company-journey-label">
                    {item.label}
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                </div>
              </motion.li>
            );
          })}

        </ol>

        {/* Closing Statement */}

        <motion.div
          {...animation(0.15)}
          className="company-journey-statement"
        >
          <span aria-hidden="true" />

          <p>
            Our heritage is our foundation.
            Our ambition is our future.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
