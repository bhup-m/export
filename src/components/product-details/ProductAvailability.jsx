
import {
  CalendarDays,
  PackageCheck,
  Boxes,
  Truck,
  Clock3,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import "./ProductAvailability.css";

export default function ProductAvailability({
  product,
}) {
  const reduceMotion = useReducedMotion();

  const availability = product.availability || {};

  const availabilityLabel =
    availability.label || "Contact Us for Availability";

  const availabilityNote =
    availability.note ||
    "Please contact our team to confirm current product availability.";

  const specifications = Array.isArray(
    product.specifications
  )
    ? product.specifications
    : [];

  const minimumOrderLabels = [
    "minimum order",
    "minimum order quantity",
    "moq",
  ];

  const minimumOrderSpecification =
    specifications.find((specification) =>
      minimumOrderLabels.includes(
        String(specification?.label || "")
          .trim()
          .toLowerCase()
      )
    );

  const minimumOrder =
    minimumOrderSpecification?.value || "On request";

  const supplyInformation = [
    {
      id: "seasonal-availability",
      icon: CalendarDays,
      title: "Seasonal Availability",
      description:
        "Supply is subject to harvest cycles, seasonal variations and prevailing market conditions.",
    },
    {
      id: "minimum-order",
      icon: Boxes,
      title: "Minimum Order Quantity",
      description: minimumOrder,
    },
    {
      id: "dispatch-planning",
      icon: Truck,
      title: "Dispatch Planning",
      description:
        "Dispatch schedules are confirmed according to product availability, order quantity and logistics arrangements.",
    },
  ];

  return (
    <motion.article
      className="product-availability"
      aria-labelledby="product-availability-title"
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
        delay: reduceMotion ? 0 : 0.1,
        ease: "easeOut",
      }}
    >
      {/* Card Header */}
      <div className="product-availability-header">
        <div
          className="product-availability-header-icon"
          aria-hidden="true"
        >
          <CalendarDays
            size={29}
            strokeWidth={1.5}
          />
        </div>

        <div className="product-availability-header-content">
          <h3 id="product-availability-title">
            Product Availability
          </h3>

          <p>Supply &amp; order planning</p>
        </div>
      </div>

      {/* Card Body */}
      <div className="product-availability-body">
        {/* Availability Status */}
        <div className="product-availability-status">
          <PackageCheck
            size={21}
            strokeWidth={1.7}
            aria-hidden="true"
          />

          <span>{availabilityLabel}</span>
        </div>

        <p className="product-availability-description">
          {availabilityNote}
        </p>

        {/* Supply Information */}
        <div className="product-availability-list">
          {supplyInformation.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="product-availability-item"
              >
                <div
                  className="product-availability-item-icon"
                  aria-hidden="true"
                >
                  <Icon
                    size={23}
                    strokeWidth={1.6}
                  />
                </div>

                <div className="product-availability-item-content">
                  <h4>{item.title}</h4>

                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supply Confirmation */}
        <div className="product-availability-note">
          <Clock3
            size={22}
            strokeWidth={1.6}
            aria-hidden="true"
          />

          <div>
            <h4>Plan Your Requirements</h4>

            <p>
              Share your expected order quantity and
              preferred delivery schedule in advance
              to help us evaluate suitable sourcing
              and supply arrangements.
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
