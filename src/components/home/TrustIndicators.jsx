
import { motion, useReducedMotion } from "motion/react";

import {
  Sprout,
  UsersRound,
  MapPin,
  Globe2,
} from "lucide-react";

import "./TrustIndicators.css";

const indicators = [
  {
    id: 1,
    icon: Sprout,
    value: "30+ Years",
    label: "Family Agricultural Legacy",
  },
  {
    id: 2,
    icon: UsersRound,
    value: "Farmer Network",
    label: "Established Sourcing Relationships",
  },
  {
    id: 3,
    icon: MapPin,
    value: "India",
    label: "Rooted in Maharashtra",
  },
  {
    id: 4,
    icon: Globe2,
    value: "Global Vision",
    label: "International Market Focus",
  },
];

export default function TrustIndicators() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="trust-section"
      aria-label="Our agricultural foundation"
    >
      <div className="trust-container">
        {indicators.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.id}
              className="trust-item"
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
                delay: reduceMotion ? 0 : index * 0.12,
              }}
            >
              <div className="trust-icon">
                <Icon size={32} strokeWidth={1.5} />
              </div>

              <h3 className="trust-value">
                {item.value}
              </h3>

              <p className="trust-label">
                {item.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
