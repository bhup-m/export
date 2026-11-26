
import {
  Sprout,
  Handshake,
  Globe2,
  MapPin,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import heritageImage from "../../assets/images/farmers/farm-sourcing.jpg";

import "./AgriculturalHeritage.css";

const heritageStrengths = [
  {
    id: "generational-knowledge",
    icon: Sprout,
    title: "Generational Agricultural Knowledge",
    description:
      "Practical understanding of agricultural markets, seasonal produce and sourcing requirements developed through years of family business experience.",
  },
  {
    id: "established-relationships",
    icon: Handshake,
    title: "Established Market Relationships",
    description:
      "Long-standing connections with farmers, agricultural merchants and regional produce suppliers.",
  },
  {
    id: "global-vision",
    icon: Globe2,
    title: "A Global Sourcing Vision",
    description:
      "Building on our agricultural foundation to develop dependable sourcing partnerships for international buyers.",
  },
];

const heritageFacts = [
  {
    id: "experience",
    value: "30+",
    label: "Years of Family Heritage",
  },
  {
    id: "location",
    value: "Amalner",
    label: "Our Agricultural Roots",
  },
  {
    id: "origin",
    value: "India",
    label: "Our Sourcing Foundation",
  },
];

export default function AgriculturalHeritage() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="agricultural-heritage"
      className="agricultural-heritage"
      aria-labelledby="agricultural-heritage-title"
    >
      <div className="agricultural-heritage-container">
        <div className="agricultural-heritage-grid">
          {/* Agricultural Photograph */}
          <motion.div
            className="agricultural-heritage-visual"
            initial={{
              opacity: reduceMotion ? 1 : 0,
              x: reduceMotion ? 0 : -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              ease: "easeOut",
            }}
          >
            <div className="agricultural-heritage-image">
              <img
                src={heritageImage}
                alt="Fresh agricultural produce being sourced in India"
                loading="lazy"
                decoding="async"
              />

              <div
                className="agricultural-heritage-overlay"
                aria-hidden="true"
              />

              <div className="agricultural-heritage-location">
                <MapPin
                  size={16}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

                Our Roots: Maharashtra, India
              </div>

              <div className="agricultural-heritage-experience">
                <span className="agricultural-heritage-years">
                  30+
                </span>

                <span className="agricultural-heritage-years-label">
                  Years of Family
                  <br />
                  Agricultural Heritage
                </span>
              </div>
            </div>

            <p className="agricultural-heritage-image-caption">
              A heritage built around Indian agriculture.
              Illustrative photograph.
            </p>
          </motion.div>

          {/* Heritage Story */}
          <motion.div
            className="agricultural-heritage-content"
            initial={{
              opacity: reduceMotion ? 1 : 0,
              x: reduceMotion ? 0 : 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              ease: "easeOut",
            }}
          >
            <div className="agricultural-heritage-eyebrow">
              <span aria-hidden="true" />

              OUR AGRICULTURAL FOUNDATION
            </div>

            <h2 id="agricultural-heritage-title">
              Generations of Experience.

              <span>
                A Vision for the Future.
              </span>
            </h2>

            <p>
              Rooted in Amalner, in the Jalgaon district
              of Maharashtra, our family has been involved
              in the agricultural commission and fresh
              produce business for more than three decades.
            </p>

            <p>
              Through years of working with farmers,
              merchants and agricultural markets, we have
              developed practical knowledge of produce
              selection, seasonal availability and regional
              sourcing.
            </p>

            <p>
              Sharanga Global Exports builds upon this
              foundation with a vision to connect Indian
              agricultural produce with international
              business opportunities through transparent
              and responsible sourcing partnerships.
            </p>

            {/* Heritage Strengths */}
            <div className="agricultural-heritage-strengths">
              {heritageStrengths.map((strength) => {
                const Icon = strength.icon;

                return (
                  <article
                    key={strength.id}
                    className="agricultural-heritage-strength"
                  >
                    <div className="agricultural-heritage-strength-icon">
                      <Icon
                        size={24}
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="agricultural-heritage-strength-content">
                      <h3>{strength.title}</h3>

                      <p>{strength.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Heritage Facts */}
        <motion.div
          className="agricultural-heritage-facts"
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
          {heritageFacts.map((fact) => (
            <div
              key={fact.id}
              className="agricultural-heritage-fact"
            >
              <span className="agricultural-heritage-fact-value">
                {fact.value}
              </span>

              <span className="agricultural-heritage-fact-label">
                {fact.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
