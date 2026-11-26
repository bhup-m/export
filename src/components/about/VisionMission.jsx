
import { motion, useReducedMotion } from "motion/react";

import { CheckCircle2 } from "lucide-react";

import { visionMission } from "../../data/visionMission";

import "./VisionMission.css";

export default function VisionMission() {
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
      duration: reduceMotion ? 0 : 0.7,
      delay: reduceMotion ? 0 : delay,
      ease: "easeOut",
    },
  });

  return (
    <section
      id="vision-mission"
      className="vision-mission"
      aria-labelledby="vision-mission-title"
    >
      {/* Decorative Background */}

      <div
        className="vision-mission-decoration vision-mission-decoration-top"
        aria-hidden="true"
      />

      <div
        className="vision-mission-decoration vision-mission-decoration-bottom"
        aria-hidden="true"
      />

      <div className="vision-mission-container">

        {/* Section Header */}

        <motion.div
          {...animation()}
          className="vision-mission-header"
        >
          <div className="vision-mission-eyebrow">
            <span />
            OUR PURPOSE
            <span />
          </div>

          <h2 id="vision-mission-title">
            Guided by Purpose.
            <span>Driven by Commitment.</span>
          </h2>

          <p>
            Building meaningful connections between Indian
            agriculture and international markets through
            trust, quality and a shared vision for growth.
          </p>
        </motion.div>

        {/* Vision & Mission Cards */}

        <div className="vision-mission-grid">

          {visionMission.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.id}
                {...animation(index * 0.15)}
                className="vision-mission-card"
                aria-labelledby={`${item.id}-title`}
              >
                {/* Decorative Number */}

                <span
                  className="vision-mission-card-number"
                  aria-hidden="true"
                >
                  {item.number}
                </span>

                {/* Card Icon */}

                <div className="vision-mission-card-icon">
                  <Icon
                    size={34}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>

                {/* Card Content */}

                <div className="vision-mission-card-label">
                  {item.label}
                </div>

                <h3 id={`${item.id}-title`}>
                  {item.title}
                </h3>

                <p className="vision-mission-card-description">
                  {item.description}
                </p>

                {/* Commitments */}

                <ul className="vision-mission-commitments">
                  {item.commitments.map((commitment) => (
                    <li key={commitment}>
                      <CheckCircle2
                        size={18}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />

                      <span>{commitment}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}

        </div>

        {/* Closing Statement */}

        <motion.div
          {...animation(0.2)}
          className="vision-mission-statement"
        >
          <span
            className="vision-mission-statement-line"
            aria-hidden="true"
          />

          <p>
            Growing Relationships. Delivering Value.
            Building Trust.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
