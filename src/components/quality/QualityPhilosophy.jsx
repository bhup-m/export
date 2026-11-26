
import { ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import {
  qualityPhilosophy,
  qualityPrinciples,
  qualityCommitments,
} from "../../data/qualityPhilosophy";

import qualityPhilosophyImage from "../../assets/images/quality/quality-philosophy.jpg";

import "./QualityPhilosophy.css";

export default function QualityPhilosophy() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="quality-philosophy"
      className="quality-philosophy"
      aria-labelledby="quality-philosophy-title"
    >
      <div className="quality-philosophy-container">
        <div className="quality-philosophy-grid">
          {/* Quality Image */}
          <motion.div
            className="quality-philosophy-visual"
            initial={
              prefersReducedMotion
                ? false
                : { opacity: 0, x: -35 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <figure className="quality-philosophy-figure">
              <div className="quality-philosophy-image-wrapper">
                <img
                  src={qualityPhilosophyImage}
                  alt="Fresh agricultural produce prepared for selection and quality assessment"
                  className="quality-philosophy-image"
                  loading="lazy"
                  decoding="async"
                />

                <div
                  className="quality-philosophy-image-overlay"
                  aria-hidden="true"
                />

                <div className="quality-philosophy-image-label">
                  <ShieldCheck
                    size={17}
                    aria-hidden="true"
                  />

                  <span>QUALITY-FOCUSED APPROACH</span>
                </div>

                <div className="quality-philosophy-image-badge">
                  <div className="quality-philosophy-badge-icon">
                    <ShieldCheck
                      size={34}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <strong>
                      {qualityPhilosophy.imageBadge.title}
                    </strong>

                    <span>
                      {qualityPhilosophy.imageBadge.subtitle}
                    </span>
                  </div>
                </div>
              </div>

              <figcaption className="quality-philosophy-caption">
                Agricultural produce selection.
                Illustrative photograph.
              </figcaption>
            </figure>
          </motion.div>

          {/* Quality Philosophy Content */}
          <motion.div
            className="quality-philosophy-content"
            initial={
              prefersReducedMotion
                ? false
                : { opacity: 0, x: 35 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65 }}
          >
            <div className="quality-philosophy-eyebrow">
              <span aria-hidden="true" />

              {qualityPhilosophy.eyebrow}
            </div>

            <h2 id="quality-philosophy-title">
              {qualityPhilosophy.title}

              <span>
                {qualityPhilosophy.highlight}
              </span>
            </h2>

            <div className="quality-philosophy-description">
              {qualityPhilosophy.description.map(
                (paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                )
              )}
            </div>

            {/* Quality Principles */}
            <div className="quality-philosophy-principles">
              {qualityPrinciples.map((principle) => {
                const Icon = principle.icon;

                return (
                  <article
                    key={principle.id}
                    className="quality-philosophy-principle"
                  >
                    <div className="quality-philosophy-principle-icon">
                      <Icon
                        size={25}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="quality-philosophy-principle-content">
                      <h3>{principle.title}</h3>

                      <p>{principle.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Quality Commitments */}
        <motion.div
          className="quality-philosophy-commitments"
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          {qualityCommitments.map((commitment) => {
            const Icon = commitment.icon;

            return (
              <article
                key={commitment.id}
                className="quality-philosophy-commitment"
              >
                <div className="quality-philosophy-commitment-icon">
                  <Icon
                    size={30}
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <h3>{commitment.title}</h3>

                  <p>{commitment.description}</p>
                </div>
              </article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
