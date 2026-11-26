
import { Link } from "react-router-dom";

import {
  Globe2,
  ArrowUpRight,
  Mail,
  Boxes,
  MapPin,
  Package,
  CalendarDays,
  Handshake,
  ClipboardList,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import {
  getProductEnquiryUrl,
} from "../../data/navigation";

import {
  contactDetails,
} from "../../data/contactDetails";

import "./ProductEnquiry.css";

const buyerRequirements = [
  {
    id: "quantity",
    icon: Boxes,
    title: "Required Quantity",
    description:
      "Expected order volume and preferred unit of measurement.",
  },
  {
    id: "destination",
    icon: MapPin,
    title: "Destination Market",
    description:
      "Destination country, port or delivery location.",
  },
  {
    id: "packaging",
    icon: Package,
    title: "Packaging Preferences",
    description:
      "Preferred packaging, grading and labeling requirements.",
  },
  {
    id: "schedule",
    icon: CalendarDays,
    title: "Delivery Schedule",
    description:
      "Expected shipment timeline and supply frequency.",
  },
];

export default function ProductEnquiry({ product }) {
  const reduceMotion = useReducedMotion();

  const enquiryUrl = getProductEnquiryUrl(
    product.slug
  );

  const emailSubject = encodeURIComponent(
    `Quotation Request - ${product.name}`
  );

  const emailBody = encodeURIComponent(
    [
      "Dear Sharanga Global Exports Team,",
      "",
      `I would like to request a quotation for ${product.name}.`,
      "",
      `Product: ${product.name}`,
      "Company Name:",
      "Contact Person:",
      "Destination Country:",
      "Destination Port:",
      "Required Quantity:",
      "Preferred Grade:",
      "Packaging Requirements:",
      "Expected Delivery Schedule:",
      "Additional Requirements:",
      "",
      "Please share the applicable pricing,",
      "availability and commercial supply terms.",
      "",
      "Thank you.",
    ].join("\n")
  );

  const emailEnquiryUrl = contactDetails.email
    ? `mailto:${contactDetails.email}?subject=${emailSubject}&body=${emailBody}`
    : null;

  return (
    <section
      id="product-enquiry"
      className="product-specific-enquiry"
      aria-labelledby="product-specific-enquiry-title"
    >
      {/* Decorative Elements */}
      <div
        className="product-specific-enquiry-decoration decoration-one"
        aria-hidden="true"
      />

      <div
        className="product-specific-enquiry-decoration decoration-two"
        aria-hidden="true"
      />

      <div className="product-specific-enquiry-container">
        <div className="product-specific-enquiry-grid">
          {/* Enquiry Content */}
          <motion.div
            className="product-specific-enquiry-content"
            initial={{
              opacity: reduceMotion ? 1 : 0,
              y: reduceMotion ? 0 : 22,
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
              duration: reduceMotion ? 0 : 0.65,
              ease: "easeOut",
            }}
          >
            <div className="product-specific-enquiry-eyebrow">
              <Globe2
                size={19}
                strokeWidth={1.6}
                aria-hidden="true"
              />

              YOUR GLOBAL SOURCING PARTNER
            </div>

            <h2 id="product-specific-enquiry-title">
              Interested in Sourcing

              <span>{product.name}?</span>
            </h2>

            <p className="product-specific-enquiry-description">
              Share your sourcing requirements with
              our team. We welcome enquiries from
              importers, distributors, wholesalers
              and international business partners.
            </p>

            <p className="product-specific-enquiry-description">
              Whether you are exploring an initial
              order or a long-term supply partnership,
              we look forward to discussing suitable
              sourcing arrangements for your business.
            </p>

            {/* Enquiry Actions */}
            <div className="product-specific-enquiry-actions">
              <Link
                to={enquiryUrl}
                className="product-specific-enquiry-primary"
                aria-label={`Request a quotation for ${product.name}`}
              >
                Request a Quotation

                <ArrowUpRight
                  size={20}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </Link>

              {emailEnquiryUrl && (
                <a
                  href={emailEnquiryUrl}
                  className="product-specific-enquiry-secondary"
                  aria-label={`Email quotation request for ${product.name}`}
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

            {/* Product Selection Information */}
            <div className="product-specific-enquiry-selection">
              <ClipboardList
                size={17}
                strokeWidth={1.7}
                aria-hidden="true"
              />

              <span>
                {product.name} will be preselected
                in your enquiry form.
              </span>
            </div>
          </motion.div>

          {/* Buyer Requirements Card */}
          <motion.div
            className="product-specific-enquiry-requirements"
            initial={{
              opacity: reduceMotion ? 1 : 0,
              y: reduceMotion ? 0 : 22,
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
              duration: reduceMotion ? 0 : 0.65,
              delay: reduceMotion ? 0 : 0.1,
              ease: "easeOut",
            }}
          >
            <div className="product-specific-enquiry-requirements-heading">
              <h3>Tell Us Your Requirements</h3>

              <p>
                Providing the following details helps
                us better understand your sourcing needs.
              </p>
            </div>

            <ul className="product-specific-enquiry-requirements-list">
              {buyerRequirements.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.id}>
                    <div
                      className="product-specific-enquiry-requirement-icon"
                      aria-hidden="true"
                    >
                      <Icon
                        size={24}
                        strokeWidth={1.6}
                      />
                    </div>

                    <div className="product-specific-enquiry-requirement-content">
                      <h4>{item.title}</h4>

                      <p>{item.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>

        {/* Section Footer */}
        <div className="product-specific-enquiry-footer">
          <Handshake
            size={24}
            strokeWidth={1.6}
            aria-hidden="true"
          />

          <span>
            Building Long-Term Business Relationships.
          </span>
        </div>
      </div>
    </section>
  );
}
