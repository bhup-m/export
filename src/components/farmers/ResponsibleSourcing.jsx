
import {
  CheckCircle2,
  ShieldCheck,
  Info,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import {
  responsibleSourcing,
  responsibleSourcingCommitments,
} from "../../data/responsibleSourcing";

import "./ResponsibleSourcing.css";

export default function ResponsibleSourcing() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="responsible-sourcing"
      className="responsible-sourcing"
      aria-labelledby="responsible-sourcing-title"
    >
      {/* Decorative Background */}
      <div
        className="responsible-sourcing-decoration responsible-sourcing-decoration-one"
        aria-hidden="true"
      />

      <div
        className="responsible-sourcing-decoration responsible-sourcing-decoration-two"
        aria-hidden="true"
      />

      <div className="responsible-sourcing-container">
        {/* Section Heading */}
        <motion.div
          className="responsible-sourcing-heading"
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
          <div className="responsible-sourcing-eyebrow">
            <span aria-hidden="true" />

            RESPONSIBLE SOURCING

            <span aria-hidden="true" />
          </div>

          <h2 id="responsible-sourcing-title">
            Responsibility at Every Step.

            <span>
              Relationships That Grow Together.
            </span>
          </h2>

          <p>
            Our vision extends beyond agricultural
            procurement. We aim to build a sourcing
            approach founded on trust, transparency,
            responsible business decisions and
            long-term value for our agricultural
            and commercial partners.
          </p>
        </motion.div>

        {/* Responsible Sourcing Cards */}
        <div className="responsible-sourcing-grid">
          {responsibleSourcing.map((practice, index) => {
            const Icon = practice.icon;

            return (
              <motion.article
                key={practice.id}
                className="responsible-sourcing-card"
                initial={{
                  opacity: reduceMotion ? 1 : 0,
                  y: reduceMotion ? 0 : 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                  delay: reduceMotion
                    ? 0
                    : (index % 3) * 0.1,
                }}
              >
                <div className="responsible-sourcing-card-icon">
                  <Icon
                    size={30}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>

                <div className="responsible-sourcing-card-content">
                  <h3>{practice.title}</h3>

                  <p>{practice.description}</p>
                </div>

                <ul className="responsible-sourcing-highlights">
                  {practice.highlights.map((highlight) => (
                    <li key={highlight}>
                      <CheckCircle2
                        size={16}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />

                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        {/* Long-Term Commitment */}
        <motion.div
          className="responsible-sourcing-commitment"
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
            amount: 0.15,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
          }}
        >
          <div className="responsible-sourcing-commitment-header">
            <div className="responsible-sourcing-commitment-icon">
              <ShieldCheck
                size={42}
                strokeWidth={1.4}
                aria-hidden="true"
              />
            </div>

            <div className="responsible-sourcing-commitment-content">
              <span className="responsible-sourcing-commitment-label">
                OUR LONG-TERM COMMITMENT
              </span>

              <h3>
                Growing Responsibly.

                <span>
                  Growing Together.
                </span>
              </h3>

              <p>
                We believe meaningful agricultural
                partnerships are built through respect,
                responsible decisions and a shared
                commitment to long-term growth.
              </p>
            </div>
          </div>

          <div className="responsible-sourcing-commitment-grid">
            {responsibleSourcingCommitments.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.id}
                  className="responsible-sourcing-commitment-item"
                >
                  <div className="responsible-sourcing-commitment-item-icon">
                    <Icon
                      size={25}
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h4>{item.title}</h4>

                    <p>{item.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </motion.div>

        {/* Responsible Sourcing Note */}
        <div className="responsible-sourcing-note">
          <Info
            size={18}
            strokeWidth={1.7}
            aria-hidden="true"
          />

          <p>
            These principles represent our responsible
            sourcing objectives. Specific supplier
            practices, traceability arrangements and
            applicable compliance requirements are
            evaluated according to individual products
            and orders.
          </p>
        </div>
      </div>
    </section>
  );
}
