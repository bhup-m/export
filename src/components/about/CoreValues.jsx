
import { motion, useReducedMotion } from "motion/react";

import { coreValues } from "../../data/coreValues";

import "./CoreValues.css";

export default function CoreValues() {
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
      amount: 0.15,
    },
    transition: {
      duration: reduceMotion ? 0 : 0.65,
      delay: reduceMotion ? 0 : delay,
      ease: "easeOut",
    },
  });

  return (
    <section
      id="core-values"
      className="core-values"
      aria-labelledby="core-values-title"
    >
      <div className="core-values-container">

        {/* Section Header */}

        <motion.div
          {...animation()}
          className="core-values-header"
        >
          <div className="core-values-eyebrow">
            <span />
            WHAT WE BELIEVE IN
            <span />
          </div>

          <h2 id="core-values-title">
            Values That Define Us.
            <span>Principles That Drive Us.</span>
          </h2>

          <p>
            The foundation of every relationship we build,
            every commitment we make and every business
            decision we take.
          </p>
        </motion.div>

        {/* Business Values Grid */}

        <div className="core-values-grid">

          {coreValues.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.article
                key={value.id}
                {...animation((index % 3) * 0.1)}
                className="core-values-card"
                aria-labelledby={`value-${value.id}`}
              >
                {/* Decorative Number */}

                <span
                  className="core-values-card-number"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Value Icon */}

                <div className="core-values-card-icon">
                  <Icon
                    size={30}
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </div>

                {/* Value Content */}

                <h3 id={`value-${value.id}`}>
                  {value.title}
                </h3>

                <p>{value.description}</p>

                <div
                  className="core-values-card-accent"
                  aria-hidden="true"
                />
              </motion.article>
            );
          })}

        </div>

        {/* Closing Statement */}

        <motion.div
          {...animation(0.15)}
          className="core-values-statement"
        >
          <span aria-hidden="true" />

          <p>
            Strong values build strong relationships.
            Strong relationships build lasting businesses.
          </p>

          <span aria-hidden="true" />
        </motion.div>

      </div>
    </section>
  );
}
