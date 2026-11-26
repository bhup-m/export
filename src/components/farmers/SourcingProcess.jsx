
import {
  CheckCircle2,
  ArrowRight,
  Info,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import {
  sourcingProcess,
  sourcingPrinciples,
} from "../../data/sourcingProcess";

import "./SourcingProcess.css";

export default function SourcingProcess() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="sourcing-process"
      className="sourcing-process"
      aria-labelledby="sourcing-process-title"
    >
      <div className="sourcing-process-container">
        {/* Section Heading */}
        <motion.div
          className="sourcing-process-heading"
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
          <div className="sourcing-process-eyebrow">
            <span aria-hidden="true" />

            OUR SOURCING APPROACH

            <span aria-hidden="true" />
          </div>

          <h2 id="sourcing-process-title">
            From Requirements to Readiness.

            <span>
              Every Step Matters.
            </span>
          </h2>

          <p>
            Our sourcing approach is designed around
            understanding buyer requirements, identifying
            suitable agricultural produce and coordinating
            preparation for supply.
          </p>
        </motion.div>

        {/* Sourcing Timeline */}
        <ol className="sourcing-process-timeline">
          {sourcingProcess.map((step, index) => {
            const Icon = step.icon;

            const isEven = index % 2 === 0;

            return (
              <li
                key={step.id}
                className={`sourcing-process-step ${
                  isEven
                    ? "sourcing-process-step-left"
                    : "sourcing-process-step-right"
                }`}
              >
                {/* Timeline Marker */}
                <div
                  className="sourcing-process-marker"
                  aria-hidden="true"
                >
                  <div className="sourcing-process-marker-icon">
                    <Icon
                      size={28}
                      strokeWidth={1.6}
                    />
                  </div>

                  <span className="sourcing-process-marker-number">
                    {step.number}
                  </span>
                </div>

                {/* Timeline Content */}
                <motion.article
                  className="sourcing-process-card"
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
                    duration: reduceMotion ? 0 : 0.55,
                    ease: "easeOut",
                  }}
                >
                  <div className="sourcing-process-card-header">
                    <span className="sourcing-process-card-number">
                      STEP {step.number}
                    </span>

                    <h3>{step.title}</h3>

                    <span className="sourcing-process-card-subtitle">
                      {step.subtitle}
                    </span>
                  </div>

                  <p className="sourcing-process-card-description">
                    {step.description}
                  </p>

                  <ul className="sourcing-process-card-highlights">
                    {step.highlights.map((highlight) => (
                      <li key={highlight}>
                        <CheckCircle2
                          size={16}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />

                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="sourcing-process-outcome">
                    <ArrowRight
                      size={18}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />

                    <div>
                      <span className="sourcing-process-outcome-label">
                        INTENDED OUTCOME
                      </span>

                      <p>{step.outcome}</p>
                    </div>
                  </div>
                </motion.article>
              </li>
            );
          })}
        </ol>

        {/* Sourcing Principles */}
        <div className="sourcing-process-principles">
          <div className="sourcing-process-principles-heading">
            <span>
              OUR GUIDING PRINCIPLES
            </span>

            <h3>
              Focused on Your Business Requirements.
            </h3>
          </div>

          <div className="sourcing-process-principles-grid">
            {sourcingPrinciples.map((principle) => {
              const Icon = principle.icon;

              return (
                <article
                  key={principle.id}
                  className="sourcing-process-principle"
                >
                  <div className="sourcing-process-principle-icon">
                    <Icon
                      size={27}
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  </div>

                  <h4>{principle.title}</h4>

                  <p>{principle.description}</p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Process Disclaimer */}
        <div className="sourcing-process-note">
          <Info
            size={18}
            strokeWidth={1.7}
            aria-hidden="true"
          />

          <p>
            This sourcing framework is indicative.
            Individual arrangements may vary depending
            on the product, seasonal availability,
            supplier capabilities, destination regulations
            and agreed buyer requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
