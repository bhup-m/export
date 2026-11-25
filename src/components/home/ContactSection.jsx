
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getNames } from "country-list";
import { motion, useReducedMotion } from "motion/react";

import {
  Mail,
  MapPin,
  Globe2,
  Handshake,
  MessageCircle,
  ArrowUpRight,
  Send,
  LoaderCircle,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import {
  contactDetails,
  quantityUnits,
  enquiryTypes,
} from "../../data/contactDetails";

import { products } from "../../data/products";
import { submitEnquiry } from "../../services/enquiryService";

import "./ContactSection.css";

const countries = getNames().sort((a, b) =>
  a.localeCompare(b)
);

const defaultValues = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  country: "",
  product: "",
  quantity: "",
  unit: "Metric Tons (MT)",
  enquiryType: "Product Quotation",
  message: "",
  consent: false,
};

export default function ContactSection() {
  const reduceMotion = useReducedMotion();

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm({
    defaultValues,
    mode: "onBlur",
  });

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
      duration: reduceMotion ? 0 : 0.65,
      delay: reduceMotion ? 0 : delay,
      ease: "easeOut",
    },
  });

  /* Product-specific enquiry integration */

  useEffect(() => {
    const handleProductEnquiry = (event) => {
      const productName = event.detail?.product;

      if (productName) {
        setValue("product", productName, {
          shouldValidate: true,
          shouldDirty: true,
        });
      }
    };

    window.addEventListener(
      "product-enquiry",
      handleProductEnquiry
    );

    return () => {
      window.removeEventListener(
        "product-enquiry",
        handleProductEnquiry
      );
    };
  }, [setValue]);

  /* Form submission */

  const onSubmit = async (data) => {
    setStatus({
      type: "",
      message: "",
    });

    try {
      await submitEnquiry(data);

      setStatus({
        type: "success",
        message:
          "Thank you. Your business enquiry has been received.",
      });

      reset(defaultValues);
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message,
      });
    }
  };

  const contactItems = [
    {
      icon: Mail,
      label: "Email Us",
      value: contactDetails.email,
      href: `mailto:${contactDetails.email}`,
    },
    {
      icon: MapPin,
      label: "Our Roots",
      value:
        "Amalner, Jalgaon, Maharashtra, India",
    },
    {
      icon: Globe2,
      label: "Our Website",
      value: contactDetails.website,
    },
    {
      icon: Handshake,
      label: "Business Enquiries",
      value:
        "Importers, Distributors & Wholesalers",
    },
  ];

  const fieldError = (name) =>
    errors[name] ? (
      <span
        id={`${name}-error`}
        className="contact-field-error"
      >
        {errors[name].message}
      </span>
    ) : null;

  const fieldAccessibility = (name) => ({
    id: name,
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name]
      ? `${name}-error`
      : undefined,
  });

  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="contact-container">

        {/* Section Heading */}

        <motion.div
          {...animation()}
          className="contact-heading"
        >
          <div className="contact-eyebrow">
            <span />
            LET'S CONNECT
            <span />
          </div>

          <h2 id="contact-title">
            Growing Opportunities.
            <span>Together.</span>
          </h2>

          <p>
            Whether you are an importer, distributor
            or wholesale buyer, we welcome the
            opportunity to understand your
            agricultural sourcing requirements.
          </p>
        </motion.div>

        <div className="contact-layout">

          {/* Contact Information */}

          <motion.aside
            {...animation(0.1)}
            className="contact-info-panel"
          >
            <div className="contact-info-content">
              <span className="contact-info-label">
                GLOBAL BUSINESS ENQUIRIES
              </span>

              <h3>
                Let's Build a Global Partnership.
              </h3>

              <p className="contact-info-description">
                Connect with us for fresh agricultural
                produce enquiries, bulk requirements
                and long-term business opportunities.
              </p>

              <div className="contact-info-list">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="contact-info-item"
                    >
                      <div className="contact-info-icon">
                        <Icon
                          size={24}
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </div>

                      <div className="contact-info-text">
                        <span>{item.label}</span>

                        {item.href ? (
                          <a href={item.href}>
                            {item.value}
                          </a>
                        ) : (
                          <p>{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {contactDetails.whatsapp && (
                <a
                  href={`https://wa.me/${contactDetails.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-whatsapp"
                >
                  <MessageCircle size={21} />
                  Connect on WhatsApp
                  <ArrowUpRight size={17} />
                </a>
              )}

              <div className="contact-info-bottom">
                <Globe2
                  size={40}
                  strokeWidth={1}
                  aria-hidden="true"
                />

                <p>
                  Rooted in India.
                  <br />
                  Ready for Global Opportunities.
                </p>
              </div>
            </div>
          </motion.aside>

          {/* Buyer Enquiry Form */}

          <motion.div
            {...animation(0.2)}
            className="contact-form-panel"
          >
            <div className="contact-form-heading">
              <h3>Request a Quotation</h3>

              <p>
                Share your business requirements.
                Fields marked * are required.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="contact-form"
              noValidate
            >
              <div className="contact-form-grid">

                {/* Full Name */}

                <div className="contact-field">
                  <label htmlFor="fullName">
                    Full Name *
                  </label>

                  <input
                    {...fieldAccessibility("fullName")}
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    {...register("fullName", {
                      required: "Full name is required.",
                      validate: (value) =>
                        value.trim().length >= 2 ||
                        "Enter a valid name.",
                      maxLength: {
                        value: 100,
                        message: "Name is too long.",
                      },
                    })}
                  />

                  {fieldError("fullName")}
                </div>

                {/* Company Name */}

                <div className="contact-field">
                  <label htmlFor="companyName">
                    Company Name *
                  </label>

                  <input
                    {...fieldAccessibility("companyName")}
                    type="text"
                    autoComplete="organization"
                    placeholder="Your company name"
                    {...register("companyName", {
                      required:
                        "Company name is required.",
                      validate: (value) =>
                        Boolean(value.trim()) ||
                        "Company name is required.",
                      maxLength: {
                        value: 150,
                        message: "Company name is too long.",
                      },
                    })}
                  />

                  {fieldError("companyName")}
                </div>

                {/* Email */}

                <div className="contact-field">
                  <label htmlFor="email">
                    Business Email *
                  </label>

                  <input
                    {...fieldAccessibility("email")}
                    type="email"
                    autoComplete="email"
                    placeholder="name@company.com"
                    {...register("email", {
                      required: "Email is required.",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message:
                          "Enter a valid email address.",
                      },
                    })}
                  />

                  {fieldError("email")}
                </div>

                {/* Phone */}

                <div className="contact-field">
                  <label htmlFor="phone">
                    Phone / WhatsApp
                  </label>

                  <input
                    {...fieldAccessibility("phone")}
                    type="tel"
                    autoComplete="tel"
                    placeholder="+ Country code"
                    {...register("phone", {
                      pattern: {
                        value: /^[+\d\s().-]{7,25}$/,
                        message:
                          "Enter a valid phone number.",
                      },
                    })}
                  />

                  {fieldError("phone")}
                </div>

                {/* Country */}

                <div className="contact-field">
                  <label htmlFor="country">
                    Destination Country *
                  </label>

                  <select
                    {...fieldAccessibility("country")}
                    {...register("country", {
                      required:
                        "Select a destination country.",
                    })}
                  >
                    <option value="">
                      Select country
                    </option>

                    {countries.map((country) => (
                      <option
                        key={country}
                        value={country}
                      >
                        {country}
                      </option>
                    ))}
                  </select>

                  {fieldError("country")}
                </div>

                {/* Product */}

                <div className="contact-field">
                  <label htmlFor="product">
                    Product Required *
                  </label>

                  <select
                    {...fieldAccessibility("product")}
                    {...register("product", {
                      required: "Select a product.",
                    })}
                  >
                    <option value="">
                      Select product
                    </option>

                    {products.map((product) => (
                      <option
                        key={product.id}
                        value={product.name}
                      >
                        {product.name}
                      </option>
                    ))}

                    <option value="Multiple Products">
                      Multiple Products
                    </option>

                    <option value="Other">
                      Other / Custom Requirement
                    </option>
                  </select>

                  {fieldError("product")}
                </div>

                {/* Quantity */}

                <div className="contact-field">
                  <label htmlFor="quantity">
                    Required Quantity *
                  </label>

                  <input
                    {...fieldAccessibility("quantity")}
                    type="number"
                    min="0.01"
                    step="any"
                    placeholder="Enter quantity"
                    {...register("quantity", {
                      required: "Quantity is required.",
                      valueAsNumber: true,
                      validate: (value) =>
                        (Number.isFinite(value) &&
                          value > 0) ||
                        "Quantity must be greater than zero.",
                    })}
                  />

                  {fieldError("quantity")}
                </div>

                {/* Quantity Unit */}

                <div className="contact-field">
                  <label htmlFor="unit">
                    Measurement Unit *
                  </label>

                  <select
                    {...fieldAccessibility("unit")}
                    {...register("unit", {
                      required: "Select a unit.",
                    })}
                  >
                    {quantityUnits.map((unit) => (
                      <option key={unit} value={unit}>
                        {unit}
                      </option>
                    ))}
                  </select>

                  {fieldError("unit")}
                </div>

                {/* Enquiry Type */}

                <div className="contact-field contact-field-full">
                  <label htmlFor="enquiryType">
                    Enquiry Type
                  </label>

                  <select
                    id="enquiryType"
                    {...register("enquiryType")}
                  >
                    {enquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Additional Requirements */}

                <div className="contact-field contact-field-full">
                  <label htmlFor="message">
                    Packaging & Additional Requirements
                  </label>

                  <textarea
                    {...fieldAccessibility("message")}
                    rows={5}
                    placeholder="Product grade, size, packaging, destination port, delivery schedule or other requirements..."
                    {...register("message", {
                      maxLength: {
                        value: 2000,
                        message:
                          "Maximum 2000 characters allowed.",
                      },
                    })}
                  />

                  {fieldError("message")}
                </div>
              </div>

              {/* Consent */}

              <div className="contact-consent">
                <label>
                  <input
                    {...fieldAccessibility("consent")}
                    type="checkbox"
                    {...register("consent", {
                      required:
                        "Please provide consent to continue.",
                    })}
                  />

                  <span>
                    I agree to be contacted by Sharanga
                    Global Exports regarding this
                    business enquiry.
                  </span>
                </label>

                {fieldError("consent")}
              </div>

              {/* Submission Status */}

              {status.message && (
                <div
                  className={`contact-status ${status.type}`}
                  role={
                    status.type === "error"
                      ? "alert"
                      : "status"
                  }
                >
                  {status.type === "success" ? (
                    <CheckCircle2 size={21} />
                  ) : (
                    <AlertCircle size={21} />
                  )}

                  <span>{status.message}</span>
                </div>
              )}

              {/* Submit Button */}

              <button
                type="submit"
                className="contact-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <LoaderCircle
                      size={20}
                      className="contact-spinner"
                    />
                    Submitting Enquiry...
                  </>
                ) : (
                  <>
                    Submit Business Enquiry
                    <Send size={19} />
                  </>
                )}
              </button>

              <p className="contact-form-note">
                All enquiries are subject to product
                availability, agreed specifications
                and applicable export requirements.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
