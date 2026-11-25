
import { motion, useReducedMotion } from "motion/react";

import {
  ArrowUpRight,
  MapPin,
  Sprout,
} from "lucide-react";

import {
  farmerStrengths,
  sourcingNetwork,
} from "../../data/farmers";

import farmerMainImage from "../../assets/images/farmers/farmer-main.jpg";

import "./OurFarmers.css";

export default function OurFarmers() {
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
      duration: reduceMotion ? 0 : 0.65,
      delay: reduceMotion ? 0 : delay,
      ease: "easeOut",
    },
  });

  return (
    <section
      id="farmers"
      className="farmers-section"
      aria-labelledby="farmers-title"
    >
      <div className="farmers-container">

        {/* Section Heading */}

        <motion.div
          {...animation()}
          className="farmers-heading"
        >
          <div className="farmers-eyebrow">
            <span />
            OUR FARMERS & SOURCING NETWORK
            <span />
          </div>

          <h2 id="farmers-title">
            Behind Every Harvest.
            <span>There Is a Farmer.</span>
          </h2>

          <p>
            Generations of agricultural knowledge,
            trusted relationships and a shared
            commitment to quality form the
            foundation of our sourcing approach.
          </p>
        </motion.div>

        {/* Main Introduction */}

        <div className="farmers-main-layout">

          {/* Farmer Image */}

          <motion.div
            {...animation(0.1)}
            className="farmers-image-wrapper"
          >
            <div className="farmers-main-image">
              <img
                src={farmerMainImage}
                alt="Indian farmer in an agricultural field"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="farmers-location">
              <MapPin
                size={17}
                strokeWidth={1.8}
              />

              <span>Maharashtra, India</span>
            </div>

            <div className="farmers-legacy">
              <div className="farmers-legacy-icon">
                <Sprout
                  size={35}
                  strokeWidth={1.3}
                />
              </div>

              <div>
                <strong>30+ Years</strong>
                <span>
                  Family Legacy in Agriculture
                </span>
              </div>
            </div>
          </motion.div>

          {/* Farmer Network Content */}

          <motion.div
            {...animation(0.2)}
            className="farmers-content"
          >
            <div className="farmers-content-label">
              ROOTED IN AGRICULTURE
            </div>

            <h3>
              Strong Roots.
              <span>Stronger Relationships.</span>
            </h3>

            <p className="farmers-intro">
              Our agricultural heritage begins in
              Amalner, Jalgaon, Maharashtra, where
              generations of family experience in
              fresh vegetable trading have shaped
              our understanding of agricultural
              markets and sourcing.
            </p>

            <p className="farmers-intro">
              Sharanga Global Exports builds on
              this foundation with a vision to
              connect Indian agricultural produce
              with international business
              opportunities.
            </p>

            <div className="farmers-strengths">
              {farmerStrengths.map((strength) => {
                const Icon = strength.icon;

                return (
                  <div
                    key={strength.id}
                    className="farmers-strength"
                  >
                    <div className="farmers-strength-icon">
                      <Icon
                        size={25}
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="farmers-strength-content">
                      <h4>{strength.title}</h4>
                      <p>{strength.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Sourcing Network Heading */}

        <motion.div
          {...animation()}
          className="farmers-network-heading"
        >
          <span>OUR SOURCING FOUNDATION</span>

          <h3>
            Connecting Every Part of the
            <span> Agricultural Network.</span>
          </h3>
        </motion.div>

        {/* Sourcing Network Cards */}

        <div className="farmers-network-grid">
          {sourcingNetwork.map((item, index) => (
            <motion.article
              key={item.id}
              {...animation(index * 0.12)}
              className="farmers-network-card"
            >
              <div className="farmers-card-image">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                />

                <div className="farmers-card-number">
                  {item.step}
                </div>
              </div>

              <div className="farmers-card-content">
                <span className="farmers-card-label">
                  {item.label}
                </span>

                <h4>{item.title}</h4>

                <p>{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Business Partnership CTA */}

        <motion.div
          {...animation()}
          className="farmers-cta"
        >
          <div className="farmers-cta-content">
            <span>GROWING TOGETHER</span>

            <h3>
              From Our Agricultural Roots
              to Your Business.
            </h3>

            <p>
              Explore fresh produce sourcing
              opportunities with Sharanga Global
              Exports.
            </p>
          </div>

          <a
            href="#contact"
            className="farmers-cta-button"
          >
            Partner With Us
            <ArrowUpRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
