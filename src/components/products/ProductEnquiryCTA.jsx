
import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  Mail,
  Globe2,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import { ROUTES } from "../../data/navigation";
import { contactDetails } from "../../data/contactDetails";

import {
  productEnquiryServices,
} from "../../data/productEnquiry";

import "./ProductEnquiryCTA.css";

export default function ProductEnquiryCTA() {
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

  const emailSubject = encodeURIComponent(
    "Agricultural Product Enquiry"
  );

  const emailUrl =
    `mailto:${contactDetails.email}?subject=${emailSubject}`;

  return (
    <section
      id="product-enquiry"
      className="product-enquiry-section"
      aria-labelledby="product-enquiry-title"
    >

      {/* Decorative Background */}

      <div
        className="product-enquiry-decoration
                   product-enquiry-decoration-top"
        aria-hidden="true"
      />

      <div
        className="product-enquiry-decoration
                   product-enquiry-decoration-bottom"
        aria-hidden="true"
      />

      <div className="product-enquiry-container">

        <div className="product-enquiry-layout">

          {/* Left Content */}

          <motion.div
            className="product-enquiry-content"
            {...animation()}
          >

            <div className="product-enquiry-eyebrow">
              <span />
              YOUR GLOBAL SOURCING PARTNER
            </div>

            <h2 id="product-enquiry-title">
              Your Requirements.
              <span>Our Commitment.</span>
            </h2>

            <p className="product-enquiry-description">
              Whether you are looking for bulk agricultural
              produce, customised packaging or a long-term
              sourcing partnership, connect with us to
              discuss solutions tailored to your business
              requirements.
            </p>

            <p className="product-enquiry-supporting-text">
              Let's explore opportunities to bring Indian
              agricultural produce to your market through
              transparent communication and responsible
              sourcing.
            </p>

            {/* Enquiry Actions */}

            <div className="product-enquiry-actions">

              <Link
                to={ROUTES.CONTACT}
                className="product-enquiry-primary"
              >
                Request a Quotation

                <ArrowUpRight
                  size={20}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </Link>

              {contactDetails.email && (
                <a
                  href={emailUrl}
                  className="product-enquiry-secondary"
                >
                  <Mail
                    size={19}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  Email Our Team
                </a>
              )}

            </div>

          </motion.div>

          {/* Right Business Services Grid */}

          <div className="product-enquiry-services">

            {productEnquiryServices.map(
              (service, index) => {
                const Icon = service.icon;

                return (
                  <motion.article
                    key={service.id}
                    className="product-enquiry-service-card"
                    {...animation(index * 0.1)}
                  >

                    <div className="product-enquiry-service-icon">
                      <Icon
                        size={29}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>

                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                  </motion.article>
                );
              }
            )}

          </div>

        </div>

        {/* Closing Brand Statement */}

        <motion.div
          className="product-enquiry-footer"
          {...animation(0.15)}
        >
          <span className="product-enquiry-footer-line" />

          <Globe2
            size={21}
            strokeWidth={1.5}
            aria-hidden="true"
          />

          <p>
            Rooted in India. Focused on Global Markets.
          </p>

          <span className="product-enquiry-footer-line" />
        </motion.div>

      </div>
    </section>
  );
}
