
import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  ArrowRight,
  Handshake,
  Info,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import {
  buyerCategories,
  partnershipProcess,
  partnershipCommitments,
  partnershipDisclaimer,
} from "../../data/buyerPartnerships";

import { ROUTES } from "../../data/navigation";

import "./BuyerPartnerships.css";

/* ========================================
   PARTNERSHIP ENQUIRY URL
======================================== */

function getPartnershipEnquiryUrl() {
  const [path, hash] = ROUTES.CONTACT.split("#");

  const params = new URLSearchParams({
    enquiryType: "Long-Term Supply Partnership",
  });

  return `${path}?${params.toString()}${
    hash ? `#${hash}` : ""
  }`;
}

/* ========================================
   BUYER CATEGORY CARD
======================================== */

function BuyerCategoryCard({
  category,
  index,
  reducedMotion,
}) {
  const Icon = category.icon;

  return (
    <motion.article
      className="bp-category-card"
      initial={
        reducedMotion
          ? false
          : { opacity: 0, y: 20 }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: reducedMotion ? 0 : index * 0.08,
      }}
    >
      <div className="bp-category-icon">
        <Icon
          size={28}
          strokeWidth={1.6}
          aria-hidden="true"
        />
      </div>

      <span className="bp-category-focus">
        {category.focus}
      </span>

      <h3>{category.title}</h3>

      <p>{category.description}</p>

      <div
        className="bp-category-accent"
        aria-hidden="true"
      />
    </motion.article>
  );
}

/* ========================================
   PARTNERSHIP PROCESS STEP
======================================== */

function PartnershipStep({ item }) {
  const Icon = item.icon;

  return (
    <li className="bp-process-step">
      <div className="bp-process-icon">
        <Icon
          size={28}
          strokeWidth={1.6}
          aria-hidden="true"
        />
      </div>

      <span className="bp-process-number">
        STEP {item.step}
      </span>

      <h4>{item.title}</h4>

      <p>{item.description}</p>
    </li>
  );
}

/* ========================================
   MAIN COMPONENT
======================================== */

export default function BuyerPartnerships() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="buyer-partnerships"
      className="bp-section"
      aria-labelledby="bp-title"
    >
      {/* Decorative Background */}
      <div
        className="bp-decoration bp-decoration-top"
        aria-hidden="true"
      />

      <div
        className="bp-decoration bp-decoration-bottom"
        aria-hidden="true"
      />

      <div className="bp-container">
        {/* Section Heading */}
        <motion.div
          className="bp-heading"
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, y: 20 }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bp-eyebrow">
            <span aria-hidden="true" />

            INTERNATIONAL BUYER PARTNERSHIPS

            <span aria-hidden="true" />
          </div>

          <h2 id="bp-title">
            Beyond Transactions.

            <span>Building Relationships.</span>
          </h2>

          <p>
            Connecting Indian agricultural sourcing
            with international business opportunities
            through transparent communication,
            quality-focused planning and a shared
            vision for long-term growth.
          </p>
        </motion.div>

        {/* Buyer Categories */}
        <div className="bp-category-grid">
          {buyerCategories.map((category, index) => (
            <BuyerCategoryCard
              key={category.id}
              category={category}
              index={index}
              reducedMotion={prefersReducedMotion}
            />
          ))}
        </div>

        {/* Partnership Process */}
        <div className="bp-process">
          <div className="bp-subheading">
            <span>HOW WE APPROACH PARTNERSHIPS</span>

            <h3>
              From Conversation to Collaboration.
            </h3>

            <p>
              A structured approach to understanding
              your business and exploring mutually
              suitable agricultural sourcing arrangements.
            </p>
          </div>

          <ol className="bp-process-grid">
            {partnershipProcess.map((item) => (
              <PartnershipStep
                key={item.id}
                item={item}
              />
            ))}
          </ol>
        </div>

        {/* Partnership Commitments */}
        <div className="bp-commitments">
          {partnershipCommitments.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.id}
                className="bp-commitment"
              >
                <div className="bp-commitment-icon">
                  <Icon
                    size={25}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Partnership Invitation */}
        <div className="bp-invitation">
          <div className="bp-invitation-content">
            <div className="bp-invitation-icon">
              <Handshake
                size={35}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </div>

            <div>
              <span>LET'S GROW TOGETHER</span>

              <h3>
                Your Vision. Our Shared Opportunity.
              </h3>

              <p>
                Whether you are exploring a new
                sourcing relationship or looking
                for long-term agricultural supply
                opportunities, we welcome a
                conversation with your business.
              </p>
            </div>
          </div>

          <div className="bp-invitation-actions">
            <Link
              to={getPartnershipEnquiryUrl()}
              className="bp-primary-button"
            >
              Become a Business Partner

              <ArrowUpRight
                size={18}
                aria-hidden="true"
              />
            </Link>

            <Link
              to={ROUTES.PRODUCTS}
              className="bp-secondary-button"
            >
              Explore Our Products

              <ArrowRight
                size={18}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bp-disclaimer">
          <Info
            size={18}
            aria-hidden="true"
          />

          <p>{partnershipDisclaimer}</p>
        </div>
      </div>
    </section>
  );
}
