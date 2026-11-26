
import { motion, useReducedMotion } from "motion/react";

import {
  Sprout,
  Handshake,
  Globe2,
  MapPin,
} from "lucide-react";

import companyStoryImage from "../../assets/images/about/company-story.jpg";

import "./CompanyStory.css";

const companyStrengths = [
  {
    icon: Sprout,
    title: "Agricultural Heritage",
    description:
      "Generations of practical experience in fresh produce sourcing and agricultural trading.",
  },
  {
    icon: Handshake,
    title: "Trusted Relationships",
    description:
      "Long-standing relationships within farming communities and agricultural merchant networks.",
  },
  {
    icon: Globe2,
    title: "International Vision",
    description:
      "A commitment to connecting Indian agricultural produce with international business opportunities.",
  },
];

export default function CompanyStory() {
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
      duration: reduceMotion ? 0 : 0.7,
      delay: reduceMotion ? 0 : delay,
      ease: "easeOut",
    },
  });

  return (
    <section
      id="company-story"
      className="company-story"
      aria-labelledby="company-story-title"
    >
      <div className="company-story-container">

        {/* Company Heritage Image */}

        <motion.div
          {...animation()}
          className="company-story-visual"
        >
          <div className="company-story-image-wrapper">
            <img
              src={companyStoryImage}
              alt="Fresh agricultural produce and farming in India"
              className="company-story-image"
              loading="lazy"
              decoding="async"
            />

            <div
              className="company-story-image-overlay"
              aria-hidden="true"
            />

            <div className="company-story-location">
              <MapPin size={16} strokeWidth={1.7} />
              Maharashtra, India
            </div>
          </div>

          <div className="company-story-experience">
            <span className="company-story-experience-number">
              30+
            </span>

            <div className="company-story-experience-divider" />

            <div className="company-story-experience-text">
              <strong>Years of Family Heritage</strong>
              <span>Rooted in Agricultural Trading</span>
            </div>
          </div>

          <div
            className="company-story-decoration"
            aria-hidden="true"
          />
        </motion.div>

        {/* Company Introduction */}

        <motion.div
          {...animation(0.15)}
          className="company-story-content"
        >
          <div className="company-story-eyebrow">
            <span />
            WHO WE ARE
          </div>

          <h2 id="company-story-title">
            Generations of Experience.
            <span>A New Global Vision.</span>
          </h2>

          <p className="company-story-intro">
            Sharanga Global Exports is built upon
            generations of agricultural trading experience,
            strong sourcing relationships and a deep
            understanding of Indian agricultural produce.
          </p>

          <p className="company-story-description">
            Our roots lie in Amalner, Jalgaon, Maharashtra,
            where our family has been involved in
            agricultural trading for over three decades.
            Working with farmers, agricultural merchants
            and regional markets has shaped our
            understanding of fresh produce sourcing,
            seasonal availability and business relationships.
          </p>

          <p className="company-story-description">
            Building upon this foundation, Sharanga Global
            Exports represents a new chapter in our journey.
            Our vision is to connect Indian agricultural
            produce with international buyers through
            responsible sourcing, transparent communication
            and dependable business partnerships.
          </p>

          {/* Company Strengths */}

          <div className="company-story-strengths">
            {companyStrengths.map((strength) => {
              const Icon = strength.icon;

              return (
                <div
                  key={strength.title}
                  className="company-story-strength"
                >
                  <div className="company-story-strength-icon">
                    <Icon
                      size={24}
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="company-story-strength-content">
                    <h3>{strength.title}</h3>
                    <p>{strength.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
