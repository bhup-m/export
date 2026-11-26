
import {
  CheckCircle2,
  ShieldCheck,
  Info,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import {
  qualityInspectionSteps,
  qualityInspectionObjectives,
} from "../../data/qualityInspection";

import "./QualityInspection.css";

export default function QualityInspection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="quality-inspection"
      className="quality-inspection"
      aria-labelledby="quality-inspection-title"
    >
      {/* Decorative Background */}
      <div
        className="quality-inspection-decoration"
        aria-hidden="true"
      >
        <span />
        <span />
        <span />
      </div>

      <div className="quality-inspection-container">
        {/* Section Heading */}
        <motion.div
          className="quality-inspection-heading"
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="quality-inspection-eyebrow">
            <span aria-hidden="true" />

            OUR QUALITY INSPECTION APPROACH

            <span aria-hidden="true" />
          </div>

          <h2 id="quality-inspection-title">
            A Focus on Quality Throughout.

            <span>Every Detail Matters.</span>
          </h2>

          <p>
            A structured approach to assessing
            agricultural produce against product
            characteristics, agreed specifications
            and buyer-specific requirements.
          </p>
        </motion.div>

        {/* Inspection Stages */}
        <ol className="quality-inspection-grid">
          {qualityInspectionSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.li
                key={step.id}
                className="quality-inspection-card"
                initial={
                  prefersReducedMotion
                    ? false
                    : { opacity: 0, y: 30 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: prefersReducedMotion
                    ? 0
                    : (index % 3) * 0.08,
                }}
              >
                {/* Card Header */}
                <div className="quality-inspection-card-header">
                  <div className="quality-inspection-card-icon">
                    <Icon
                      size={30}
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  </div>

                  <div
                    className="quality-inspection-card-number"
                    aria-hidden="true"
                  >
                    <span>STAGE</span>

                    <strong>{step.number}</strong>
                  </div>
                </div>

                {/* Card Content */}
                <div className="quality-inspection-card-content">
                  <span className="quality-inspection-card-subtitle">
                    {step.subtitle}
                  </span>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>

                {/* Inspection Checkpoints */}
                <div className="quality-inspection-checkpoints">
                  <h4>Inspection Considerations</h4>

                  <ul>
                    {step.checkpoints.map((checkpoint) => (
                      <li key={checkpoint}>
                        <CheckCircle2
                          size={16}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />

                        <span>{checkpoint}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            );
          })}
        </ol>

        {/* Inspection Objectives */}
        <motion.div
          className="quality-inspection-objectives"
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <div className="quality-inspection-objectives-heading">
            <div className="quality-inspection-objectives-icon">
              <ShieldCheck
                size={36}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </div>

            <div>
              <span>
                OUR INSPECTION OBJECTIVES
              </span>

              <h3>
                Quality Considerations at Every Stage.
              </h3>

              <p>
                Building a quality-focused approach
                around product suitability,
                consistency and communication.
              </p>
            </div>
          </div>

          <div className="quality-inspection-objectives-grid">
            {qualityInspectionObjectives.map(
              (objective) => {
                const Icon = objective.icon;

                return (
                  <article
                    key={objective.id}
                    className="quality-inspection-objective"
                  >
                    <div className="quality-inspection-objective-icon">
                      <Icon
                        size={27}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </div>

                    <h4>{objective.title}</h4>

                    <p>{objective.description}</p>
                  </article>
                );
              }
            )}
          </div>
        </motion.div>

        {/* Inspection Framework Note */}
        <div className="quality-inspection-note">
          <Info
            size={18}
            strokeWidth={1.7}
            aria-hidden="true"
          />

          <p>
            This inspection framework represents our
            intended quality assessment approach.
            Actual inspection procedures may vary
            depending on the product, buyer
            specifications, sourcing arrangements
            and applicable regulatory requirements.
            Visual assessment alone does not establish
            food safety or regulatory compliance.
          </p>
        </div>
      </div>
    </section>
  );
}
