
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { advantages } from "../../data/advantages";

import "./WhyChooseUs.css";

export default function WhyChooseUs() {
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
      id="why-choose-us"
      className="why-choose-section"
      aria-labelledby="why-choose-title"
    >
      {/* Decorative Background */}
      <div
        className="why-choose-pattern"
        aria-hidden="true"
      />

      <div
        className="why-choose-glow"
        aria-hidden="true"
      />

      <div className="why-choose-container">

        {/* Section Heading */}
        <motion.div
          {...animation()}
          className="why-choose-heading"
        >
          <div className="why-choose-eyebrow">
            <span />
            THE SHARANGA ADVANTAGE
            <span />
          </div>

          <h2
            id="why-choose-title"
            className="why-choose-title"
          >
            More Than an Exporter.
            <span>Your Growth Partner.</span>
          </h2>

          <p className="why-choose-description">
            Built on agricultural heritage, responsible
            sourcing and a commitment to long-term
            business relationships. Our vision is to
            create lasting value for agricultural
            producers and international buyers.
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="why-choose-grid">
          {advantages.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.id}
                {...animation(index * 0.1)}
                className="why-choose-card"
              >
                {/* Card Icon */}
                <div className="why-choose-icon">
                  <Icon
                    size={30}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>

                {/* Card Content */}
                <h3 className="why-choose-card-title">
                  {item.title}
                </h3>

                <p className="why-choose-card-description">
                  {item.description}
                </p>

                {/* Decorative Gold Line */}
                <div className="why-choose-card-line" />
              </motion.article>
            );
          })}
        </div>

        {/* Partnership CTA */}
        <motion.div
          {...animation(0.15)}
          className="why-choose-bottom"
        >
          <div className="why-choose-bottom-content">
            <h3>
              Let's Build a Lasting Partnership.
            </h3>

            <p>
              Connecting Indian agriculture with
              global business opportunities.
            </p>
          </div>

          <a
            href="#contact"
            className="why-choose-cta"
          >
            Partner With Us
            <ArrowUpRight size={19} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
