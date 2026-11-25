
import { motion, useReducedMotion } from "motion/react";

import {
  ShieldCheck,
  ArrowUpRight,
  ClipboardCheck,
} from "lucide-react";

import { qualityStandards } from "../../data/qualityStandards";

import qualityImage from "../../assets/images/quality/quality-inspection.jpg";

import "./QualityStandards.css";

export default function QualityStandards() {
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
      id="quality"
      className="quality-section"
      aria-labelledby="quality-title"
    >
      <div className="quality-container">

        <div className="quality-layout">

          {/* Left Side - Quality Standards */}
          <motion.div
            {...animation()}
            className="quality-content"
          >
            <div className="quality-eyebrow">
              <span />
              QUALITY & STANDARDS
            </div>

            <h2
              id="quality-title"
              className="quality-title"
            >
              Quality Without
              <span>Compromise.</span>
            </h2>

            <p className="quality-description">
              At Sharanga Global Exports, our approach
              prioritises freshness, consistency and
              applicable international market requirements.
              We aim to build quality-focused practices
              throughout our agricultural supply chain.
            </p>

            {/* Quality Standards List */}
            <div className="quality-standards-list">
              {qualityStandards.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.id}
                    {...animation(index * 0.08)}
                    className="quality-standard-item"
                  >
                    <div className="quality-standard-icon">
                      <Icon
                        size={25}
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="quality-standard-content">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side - Quality Image */}
          <motion.div
            {...animation(0.2)}
            className="quality-visual"
          >
            <div className="quality-image-wrapper">
              <img
                src={qualityImage}
                alt="Illustrative agricultural produce quality inspection"
                className="quality-image"
                loading="lazy"
                decoding="async"
              />

              <div className="quality-image-overlay" />
            </div>

            {/* Quality Commitment Card */}
            <div className="quality-commitment-card">
              <div className="quality-commitment-icon">
                <ShieldCheck
                  size={34}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>

              <span className="quality-commitment-label">
                THE SHARANGA COMMITMENT
              </span>

              <h3>Quality at Every Stage.</h3>

              <p>
                Responsible sourcing. Careful selection.
                Buyer-focused standards.
              </p>

              <div className="quality-commitment-line" />
            </div>
          </motion.div>
        </div>

        {/* Buyer Requirements CTA */}
        <motion.div
          {...animation(0.15)}
          className="quality-bottom-banner"
        >
          <div className="quality-banner-content">
            <div className="quality-banner-icon">
              <ClipboardCheck
                size={30}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </div>

            <div>
              <h3>
                Have Specific Quality Requirements?
              </h3>

              <p>
                Discuss your product specifications,
                grading, packaging and documentation
                requirements with our team.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="quality-cta"
          >
            Discuss Specifications
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
