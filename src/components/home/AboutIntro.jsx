
import { motion, useReducedMotion } from "motion/react";
import {
  Sprout,
  ShieldCheck,
  Handshake,
  ArrowUpRight,
} from "lucide-react";

import aboutImage from "../../assets/images/about/about-farm.jpg";

import "./AboutIntro.css";

const highlights = [
  {
    icon: Sprout,
    title: "Established Sourcing Network",
    description:
      "Strong relationships within India's agricultural supply network.",
  },
  {
    icon: ShieldCheck,
    title: "Quality-Focused Approach",
    description:
      "Committed to freshness, consistency and buyer requirements.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnerships",
    description:
      "Building reliable relationships with suppliers and global buyers.",
  },
];

export default function AboutIntro() {
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
      duration: reduceMotion ? 0 : 0.7,
      delay: reduceMotion ? 0 : delay,
      ease: "easeOut",
    },
  });

  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* Left Side - Image */}
        <motion.div
          {...animation()}
          className="about-image-wrapper"
        >
          <div className="about-image-frame">
            <img
              src={aboutImage}
              alt="Indian agricultural farmland"
              className="about-image"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="about-experience-card">
            <span className="about-experience-number">
              30+
            </span>

            <span className="about-experience-years">
              Years
            </span>

            <div className="about-experience-line" />

            <p>Family Legacy in Agriculture</p>
          </div>
        </motion.div>

        {/* Right Side - Company Introduction */}
        <motion.div
          {...animation(0.15)}
          className="about-content"
        >
          <div className="about-eyebrow">
            <span className="about-gold-line" />
            <span>ABOUT SHARANGA</span>
          </div>

          <h2 className="about-title">
            Rooted in Agriculture.
            <span>Driven by Global Vision.</span>
          </h2>

          <p className="about-description">
            Sharanga Global Exports is an Indian agricultural
            export venture built on a foundation of generations
            of agricultural trading experience, established
            relationships and a passion for connecting Indian
            produce with international markets.
          </p>

          <p className="about-description">
            With our roots in Maharashtra, India, we aim to
            bridge the gap between agricultural producers and
            global buyers through responsible sourcing,
            quality-focused practices and dependable
            business partnerships.
          </p>

          {/* Company Highlights */}
          <div className="about-highlights">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  {...animation(index * 0.1)}
                  className="about-highlight-item"
                >
                  <div className="about-highlight-icon">
                    <Icon size={24} strokeWidth={1.6} />
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="about-cta"
          >
            Connect With Us
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
