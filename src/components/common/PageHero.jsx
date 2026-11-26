
import { motion, useReducedMotion } from "motion/react";

import "./PageHero.css";

export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  backgroundImage,
  backgroundPosition = "center",
  children,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="page-hero"
      aria-labelledby="page-hero-title"
    >
      {/* Background Image */}

      <div
        className="page-hero-background"
        style={{
          backgroundImage: backgroundImage
            ? `url("${backgroundImage}")`
            : undefined,
          backgroundPosition,
        }}
        aria-hidden="true"
      />

      {/* Gradient Overlay */}

      <div
        className="page-hero-overlay"
        aria-hidden="true"
      />

      {/* Hero Content */}

      <div className="page-hero-container">

        <motion.div
          className="page-hero-content"
          initial={{
            opacity: reduceMotion ? 1 : 0,
            y: reduceMotion ? 0 : 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            ease: "easeOut",
          }}
        >

          {children}

          {eyebrow && (
            <div className="page-hero-eyebrow">
              <span />
              {eyebrow}
            </div>
          )}

          <h1 id="page-hero-title">
            {title}

            {highlight && (
              <span>{highlight}</span>
            )}
          </h1>

          {description && (
            <p className="page-hero-description">
              {description}
            </p>
          )}

          <div
            className="page-hero-accent"
            aria-hidden="true"
          />

        </motion.div>
      </div>
    </section>
  );
}
