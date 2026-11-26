
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import {
  farmerNetwork,
  sourcingNetworkFlow,
  networkAdvantages,
} from "../../data/farmerNetwork";

import "./FarmerNetwork.css";

export default function FarmerNetwork() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="farmer-network"
      className="farmer-network"
      aria-labelledby="farmer-network-title"
    >
      {/* Decorative Background */}
      <div
        className="farmer-network-decoration farmer-network-decoration-one"
        aria-hidden="true"
      />

      <div
        className="farmer-network-decoration farmer-network-decoration-two"
        aria-hidden="true"
      />

      <div className="farmer-network-container">
        {/* Section Heading */}
        <motion.div
          className="farmer-network-heading"
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
          <div className="farmer-network-eyebrow">
            <span aria-hidden="true" />

            OUR SOURCING NETWORK

            <span aria-hidden="true" />
          </div>

          <h2 id="farmer-network-title">
            Strong Relationships.

            <span>
              Stronger Supply Networks.
            </span>
          </h2>

          <p>
            Our agricultural foundation brings together
            farmers, commission agents and regional
            merchants, creating opportunities to connect
            Indian agricultural produce with international
            business requirements.
          </p>
        </motion.div>

        {/* Network Cards */}
        <div className="farmer-network-grid">
          {farmerNetwork.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.id}
                className="farmer-network-card"
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
                  delay: reduceMotion ? 0 : index * 0.1,
                }}
              >
                <div className="farmer-network-card-top">
                  <div className="farmer-network-card-icon">
                    <Icon
                      size={30}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>

                  <span
                    className="farmer-network-card-number"
                    aria-hidden="true"
                  >
                    {item.number}
                  </span>
                </div>

                <div className="farmer-network-card-content">
                  <h3>{item.title}</h3>

                  <span className="farmer-network-card-subtitle">
                    {item.subtitle}
                  </span>

                  <p>{item.description}</p>
                </div>

                <ul className="farmer-network-card-highlights">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>
                      <CheckCircle2
                        size={15}
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

        {/* Connected Sourcing Model */}
        <motion.div
          className="farmer-network-flow"
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
          <div className="farmer-network-flow-heading">
            <span>
              OUR CONNECTED SOURCING MODEL
            </span>

            <h3>
              Connecting Agriculture with Opportunity.
            </h3>

            <p>
              A relationship-driven approach to
              agricultural sourcing and business
              coordination.
            </p>
          </div>

          <ol className="farmer-network-flow-grid">
            {sourcingNetworkFlow.map((item, index) => {
              const Icon = item.icon;

              const isLast =
                index === sourcingNetworkFlow.length - 1;

              return (
                <li
                  key={item.id}
                  className="farmer-network-flow-item"
                >
                  <div
                    className={`farmer-network-flow-node ${
                      item.featured
                        ? "farmer-network-flow-node-featured"
                        : ""
                    }`}
                  >
                    <div className="farmer-network-flow-icon">
                      <Icon
                        size={30}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>

                    <h4>{item.title}</h4>

                    <p>{item.description}</p>
                  </div>

                  {!isLast && (
                    <div
                      className="farmer-network-flow-arrow"
                      aria-hidden="true"
                    >
                      <ArrowRight
                        size={23}
                        strokeWidth={1.5}
                      />
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </motion.div>

        {/* Network Advantages */}
        <div className="farmer-network-advantages">
          {networkAdvantages.map((advantage) => {
            const Icon = advantage.icon;

            return (
              <div
                key={advantage.id}
                className="farmer-network-advantage"
              >
                <Icon
                  size={21}
                  strokeWidth={1.6}
                  aria-hidden="true"
                />

                <span>{advantage.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
