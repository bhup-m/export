
import {
  CheckCircle2,
  ChevronRight,
  ScanLine,
  Info,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import {
  foodSafetyPrinciples,
  traceabilityStages,
  traceabilityRecord,
  traceabilityBenefits,
  foodSafetyDisclaimer,
} from "../../data/foodSafetyTraceability";

import "./FoodSafetyTraceability.css";

export default function FoodSafetyTraceability() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="food-safety-traceability"
      className="food-safety"
      aria-labelledby="food-safety-title"
    >
      {/* Decorative Background */}
      <div
        className="food-safety-decoration food-safety-decoration-one"
        aria-hidden="true"
      />

      <div
        className="food-safety-decoration food-safety-decoration-two"
        aria-hidden="true"
      />

      <div className="food-safety-container">
        {/* Section Heading */}
        <motion.div
          className="food-safety-heading"
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="food-safety-eyebrow">
            <span aria-hidden="true" />

            FOOD SAFETY & TRACEABILITY

            <span aria-hidden="true" />
          </div>

          <h2 id="food-safety-title">
            Responsibility at Every Stage.

            <span>
              Transparency Throughout the Journey.
            </span>
          </h2>

          <p>
            Food safety awareness, product
            identification and organized supply
            information are important foundations
            for responsible agricultural trade
            and long-term buyer relationships.
          </p>
        </motion.div>

        {/* Food Safety Principles */}
        <div className="food-safety-principles">
          {foodSafetyPrinciples.map(
            (principle, index) => {
              const Icon = principle.icon;

              return (
                <motion.article
                  key={principle.id}
                  className="food-safety-card"
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
                  transition={{
                    duration: 0.5,
                    delay: prefersReducedMotion
                      ? 0
                      : (index % 3) * 0.1,
                  }}
                >
                  <div className="food-safety-card-icon">
                    <Icon
                      size={30}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>

                  <h3>{principle.title}</h3>

                  <p>{principle.description}</p>

                  <ul>
                    {principle.highlights.map(
                      (highlight) => (
                        <li key={highlight}>
                          <CheckCircle2
                            size={16}
                            aria-hidden="true"
                          />

                          <span>{highlight}</span>
                        </li>
                      )
                    )}
                  </ul>
                </motion.article>
              );
            }
          )}
        </div>

        {/* Traceability Framework */}
        <motion.div
          className="traceability-framework"
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="traceability-framework-heading">
            <span>
              PROPOSED TRACEABILITY FRAMEWORK
            </span>

            <h3>
              Connecting Every Stage.

              <span> From Source to Dispatch.</span>
            </h3>

            <p>
              A structured information flow
              designed to associate relevant
              sourcing, product, quality,
              packaging and dispatch records.
            </p>
          </div>

          <ol className="traceability-flow">
            {traceabilityStages.map(
              (stage, index) => {
                const Icon = stage.icon;

                return (
                  <li
                    key={stage.id}
                    className="traceability-stage"
                  >
                    <div className="traceability-stage-visual">
                      <div className="traceability-stage-icon">
                        <Icon
                          size={29}
                          strokeWidth={1.6}
                          aria-hidden="true"
                        />

                        <span className="traceability-stage-number">
                          {stage.number}
                        </span>
                      </div>

                      {index <
                        traceabilityStages.length - 1 && (
                        <ChevronRight
                          size={23}
                          className="traceability-stage-arrow"
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    <h4>{stage.title}</h4>

                    <p>{stage.description}</p>

                    <span className="traceability-stage-record">
                      {stage.record}
                    </span>
                  </li>
                );
              }
            )}
          </ol>
        </motion.div>

        {/* Illustrative Traceability Record */}
        <motion.div
          className="traceability-record-panel"
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Record Introduction */}
          <div className="traceability-record-intro">
            <div className="traceability-record-icon">
              <ScanLine
                size={42}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </div>

            <span className="traceability-record-eyebrow">
              PRODUCT INFORMATION & TRANSPARENCY
            </span>

            <h3>
              Understanding

              <span> Product Origins.</span>
            </h3>

            <p>{traceabilityRecord.description}</p>

            <div className="traceability-benefits">
              {traceabilityBenefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <article
                    key={benefit.id}
                    className="traceability-benefit"
                  >
                    <div className="traceability-benefit-icon">
                      <Icon
                        size={23}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <h4>{benefit.title}</h4>

                      <p>{benefit.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Demonstration Record */}
          <div className="traceability-record">
            <div className="traceability-record-header">
              <div>
                <span>
                  {traceabilityRecord.label}
                </span>

                <h4>Product Traceability</h4>
              </div>

              <ScanLine
                size={28}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </div>

            <div className="traceability-record-reference">
              <span>DEMONSTRATION BATCH ID</span>

              <strong>
                {traceabilityRecord.reference}
              </strong>
            </div>

            <dl className="traceability-record-fields">
              {traceabilityRecord.fields.map(
                (field) => (
                  <div
                    key={field.id}
                    className="traceability-record-field"
                  >
                    <dt>{field.label}</dt>

                    <dd>{field.value}</dd>
                  </div>
                )
              )}
            </dl>

            <div className="traceability-record-disclaimer">
              <Info
                size={18}
                strokeWidth={1.7}
                aria-hidden="true"
              />

              <p>
                {traceabilityRecord.disclaimer}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Framework Disclaimer */}
        <div className="food-safety-note">
          <Info
            size={20}
            strokeWidth={1.7}
            aria-hidden="true"
          />

          <p>{foodSafetyDisclaimer}</p>
        </div>
      </div>
    </section>
  );
}
