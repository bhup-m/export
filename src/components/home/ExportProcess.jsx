
import { motion, useReducedMotion } from "motion/react";

import {
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

import { exportProcess } from "../../data/exportProcess";

import "./ExportProcess.css";

export default function ExportProcess() {
  const reduceMotion = useReducedMotion();

  const animation = (delay = 0) => ({
    initial: {
      opacity: reduceMotion ? 1 : 0,
      y: reduceMotion ? 0 : 30,
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
      id="process"
      className="export-process-section"
      aria-labelledby="export-process-title"
    >
      <div className="export-process-container">

        {/* Section Heading */}
        <motion.div
          {...animation()}
          className="export-process-heading"
        >
          <div className="export-process-eyebrow">
            <span />
            OUR SUPPLY CHAIN
            <span />
          </div>

          <h2
            id="export-process-title"
            className="export-process-title"
          >
            From Farm to Market.
            <span> Every Step Matters.</span>
          </h2>

          <p className="export-process-description">
            Our planned supply chain brings together
            agricultural sourcing, quality-focused
            practices and coordinated logistics to
            connect Indian produce with international
            markets.
          </p>
        </motion.div>

        {/* Supply Chain Steps */}
        <ol className="export-process-grid">
          {exportProcess.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.li
                key={item.id}
                {...animation(index * 0.1)}
                className="export-process-card"
              >
                {/* Step Number */}
                <span
                  className="export-process-step"
                  aria-hidden="true"
                >
                  {item.step}
                </span>

                {/* Process Icon */}
                <div className="export-process-icon">
                  <Icon
                    size={34}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>

                {/* Process Information */}
                <div className="export-process-card-content">
                  <span className="export-process-step-label">
                    STEP {item.step}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>

                {/* Decorative Bottom Line */}
                <div className="export-process-card-line" />
              </motion.li>
            );
          })}
        </ol>

        {/* Bottom Commitment Banner */}
        <motion.div
          {...animation(0.15)}
          className="export-process-banner"
        >
          <div className="export-process-banner-content">
            <div className="export-process-banner-icon">
              <ShieldCheck
                size={32}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </div>

            <div>
              <h3>
                Quality-Focused at Every Step.
              </h3>

              <p>
                Building a dependable agricultural
                supply chain through responsible
                sourcing and coordinated partnerships.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="export-process-cta"
          >
            Discuss Your Requirements
            <ArrowUpRight size={19} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
