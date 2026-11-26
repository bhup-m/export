
import {
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  FileCheck,
  Info,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import {
  businessRegistrations,
  shipmentRequirements,
  exportDocuments,
  qualityObjectives,
  complianceResources,
  complianceDisclaimer,
} from "../../data/exportCompliance";

import "./ExportCompliance.css";

function ComplianceCard({ item, index, reducedMotion }) {
  const Icon = item.icon;

  return (
    <motion.article
      className="export-compliance-card"
      initial={
        reducedMotion
          ? false
          : { opacity: 0, y: 24 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: reducedMotion ? 0 : index * 0.1,
      }}
    >
      <div className="export-compliance-card-icon">
        <Icon
          size={29}
          strokeWidth={1.7}
          aria-hidden="true"
        />
      </div>

      {item.shortName && (
        <span className="export-compliance-card-label">
          {item.shortName}
        </span>
      )}

      <h4>{item.title}</h4>

      {item.authority && (
        <p className="export-compliance-authority">
          {item.authority}
        </p>
      )}

      <p className="export-compliance-description">
        {item.description}
      </p>

      <ul className="export-compliance-highlights">
        {item.highlights.map((highlight) => (
          <li key={highlight}>
            <CheckCircle2
              size={16}
              aria-hidden="true"
            />

            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      {item.website && (
        <a
          href={item.website}
          target="_blank"
          rel="noopener noreferrer"
          className="export-compliance-authority-link"
          aria-label={`${item.websiteLabel} (opens in a new tab)`}
        >
          {item.websiteLabel}

          <ArrowUpRight
            size={16}
            aria-hidden="true"
          />
        </a>
      )}
    </motion.article>
  );
}

export default function ExportCompliance() {
  const prefersReducedMotion = useReducedMotion();

  const revealProps = {
    initial: prefersReducedMotion
      ? false
      : { opacity: 0, y: 25 },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: true,
      amount: 0.1,
    },

    transition: {
      duration: 0.6,
    },
  };

  return (
    <section
      id="export-compliance"
      className="export-compliance"
      aria-labelledby="export-compliance-title"
    >
      <div className="export-compliance-container">
        {/* Section Heading */}
        <motion.div
          className="export-compliance-heading"
          {...revealProps}
        >
          <div className="export-compliance-eyebrow">
            <span aria-hidden="true" />

            CERTIFICATIONS & EXPORT COMPLIANCE

            <span aria-hidden="true" />
          </div>

          <h2 id="export-compliance-title">
            Committed to Responsible Trade.

            <span>
              Focused on Export Readiness.
            </span>
          </h2>

          <p>
            Understanding applicable regulatory
            requirements, export documentation
            and international product standards
            is an important part of our approach
            to responsible agricultural trade.
          </p>
        </motion.div>

        {/* Business Registrations */}
        <div className="export-compliance-group">
          <div className="export-compliance-group-heading">
            <span>REGULATORY FOUNDATION</span>

            <h3>
              Business & Regulatory Requirements
            </h3>

            <p>
              Key registration and licensing
              considerations for agricultural
              export businesses in India.
            </p>
          </div>

          <div className="export-compliance-grid">
            {businessRegistrations.map(
              (item, index) => (
                <ComplianceCard
                  key={item.id}
                  item={item}
                  index={index}
                  reducedMotion={prefersReducedMotion}
                />
              )
            )}
          </div>
        </div>

        {/* Shipment Requirements */}
        <div className="export-compliance-group">
          <div className="export-compliance-group-heading">
            <span>INTERNATIONAL TRADE REQUIREMENTS</span>

            <h3>
              Shipment-Specific Compliance
            </h3>

            <p>
              Requirements may vary according to
              the agricultural product, destination
              market and individual consignment.
            </p>
          </div>

          <div className="export-compliance-grid">
            {shipmentRequirements.map(
              (item, index) => (
                <ComplianceCard
                  key={item.id}
                  item={item}
                  index={index}
                  reducedMotion={prefersReducedMotion}
                />
              )
            )}
          </div>
        </div>

        {/* Export Documentation */}
        <motion.div
          className="export-documentation-panel"
          {...revealProps}
        >
          <div className="export-documentation-heading">
            <div className="export-documentation-heading-icon">
              <FileCheck
                size={36}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </div>

            <div>
              <span>
                DOCUMENTATION & EXPORT READINESS
              </span>

              <h3>
                Prepared for

                <span> International Trade.</span>
              </h3>

              <p>
                Accurate documentation is an
                essential consideration for
                agricultural export preparation,
                customs clearance and buyer
                communication.
              </p>
            </div>
          </div>

          <div className="export-documentation-grid">
            {exportDocuments.map((document) => {
              const Icon = document.icon;

              return (
                <article
                  key={document.id}
                  className="export-documentation-card"
                >
                  <div className="export-documentation-icon">
                    <Icon
                      size={25}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h4>{document.title}</h4>

                    <p>{document.description}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="export-documentation-note">
            <Info
              size={18}
              aria-hidden="true"
            />

            <p>
              The exact documentation required
              must be determined for each
              transaction and destination.
            </p>
          </div>
        </motion.div>

        {/* Future Quality Objectives */}
        <motion.div
          className="export-quality-objectives"
          {...revealProps}
        >
          <div className="export-objectives-heading">
            <div className="export-objectives-heading-icon">
              <ShieldCheck
                size={32}
                strokeWidth={1.6}
                aria-hidden="true"
              />
            </div>

            <div>
              <span>LONG-TERM QUALITY OBJECTIVES</span>

              <h3>
                Continuous Improvement.

                <span> Growing Responsibly.</span>
              </h3>

              <p>
                Exploring relevant international
                quality and food safety frameworks
                as our business capabilities evolve.
              </p>
            </div>
          </div>

          <div className="export-objectives-grid">
            {qualityObjectives.map((objective) => {
              const Icon = objective.icon;

              return (
                <article
                  key={objective.id}
                  className="export-objective-card"
                >
                  <div className="export-objective-icon">
                    <Icon
                      size={29}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>

                  <span className="export-objective-label">
                    FUTURE CONSIDERATION
                  </span>

                  <h4>{objective.title}</h4>

                  <span className="export-objective-subtitle">
                    {objective.subtitle}
                  </span>

                  <p>{objective.description}</p>
                </article>
              );
            })}
          </div>
        </motion.div>

        {/* Official Resources */}
        <div className="export-compliance-resources">
          <div className="export-resources-heading">
            <h3>Official Regulatory Resources</h3>

            <p>
              Refer to the relevant authorities
              for applicable and updated requirements.
            </p>
          </div>

          <div className="export-resources-links">
            {complianceResources.map((resource) => {
              const Icon = resource.icon;

              return (
                <a
                  key={resource.id}
                  href={resource.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${resource.name} (opens in a new tab)`}
                >
                  <Icon
                    size={17}
                    aria-hidden="true"
                  />

                  <span>{resource.name}</span>

                  <ArrowUpRight
                    size={15}
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </div>
        </div>

        {/* Compliance Disclaimer */}
        <div className="export-compliance-disclaimer">
          <Info
            size={20}
            strokeWidth={1.7}
            aria-hidden="true"
          />

          <p>{complianceDisclaimer}</p>
        </div>
      </div>
    </section>
  );
}
