
import {
  Globe2,
  ArrowUpRight,
  Mail,
  MapPin,
  Briefcase,
  Camera,
  Users,
  MessageCircle,
} from "lucide-react";

import { Link } from "react-router-dom";

import { contactDetails } from "../../data/contactDetails";
import { products } from "../../data/products";

import {
  footerLinks,
  ROUTES,
  getProductEnquiryUrl,
} from "../../data/navigation";

import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Briefcase,
      href: contactDetails.socialLinks?.linkedin,
    },
    {
      name: "Instagram",
      icon: Camera,
      href: contactDetails.socialLinks?.instagram,
    },
    {
      name: "Facebook",
      icon: Users,
      href: contactDetails.socialLinks?.facebook,
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: contactDetails.whatsapp
        ? `https://wa.me/${contactDetails.whatsapp}`
        : "",
    },
    {
      name: "Email",
      icon: Mail,
      href: `mailto:${contactDetails.email}`,
    },
  ].filter((social) => Boolean(social.href));

  const legalLinks = [
    {
      label: "Privacy Policy",
      href: contactDetails.legalLinks?.privacyPolicy,
    },
    {
      label: "Terms & Conditions",
      href: contactDetails.legalLinks?.termsAndConditions,
    },
  ].filter((link) => Boolean(link.href));

  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* Business Partnership Banner */}

        <div className="footer-cta">
          <div className="footer-cta-content">
            <span className="footer-eyebrow">
              <span />
              GROW WITH US
            </span>

            <h2>
              Your Trusted Agricultural
              <span> Sourcing Partner.</span>
            </h2>

            <p>
              Connecting Indian agriculture with
              global business opportunities.
            </p>
          </div>

          <Link
            to={ROUTES.CONTACT}
            className="footer-cta-btn"
          >
            Let's Do Business
            <ArrowUpRight size={20} />
          </Link>
        </div>

        {/* Main Footer */}

        <div className="footer-grid">

          {/* Company Branding */}

          <div className="footer-brand-column">
            <Link
              to={ROUTES.HOME}
              className="footer-brand"
              aria-label="Sharanga Global Exports home"
            >
              <div className="footer-brand-icon">
                <Globe2 size={31} strokeWidth={1.4} />
              </div>

              <div className="footer-brand-text">
                <span className="footer-brand-name">
                  SHARANGA
                </span>

                <span className="footer-brand-subtitle">
                  GLOBAL EXPORTS
                </span>
              </div>
            </Link>

            <p className="footer-brand-description">
              Rooted in generations of agricultural
              trading experience, Sharanga Global
              Exports is driven by a vision to
              connect Indian agricultural produce
              with international markets.
            </p>

            <div className="footer-brand-tagline">
              <span />
              Rooted in India. Connected Globally.
            </div>

            <div className="footer-socials">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                const isEmail =
                  social.href.startsWith("mailto:");

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={isEmail ? undefined : "_blank"}
                    rel={
                      isEmail
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={social.name}
                    title={social.name}
                    className="footer-social-link"
                  >
                    <Icon size={18} strokeWidth={1.7} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Navigation */}

          <nav
            className="footer-column"
            aria-label="Footer navigation"
          >
            <h3>Quick Links</h3>

            <ul className="footer-links">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Product Links */}

          <nav
            className="footer-column"
            aria-label="Product enquiries"
          >
            <h3>Our Products</h3>

            <ul className="footer-links">
              {products.slice(0, 6).map((product) => (
                <li key={product.id}>
                  <Link
                    to={getProductEnquiryUrl(product.slug)}
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to={ROUTES.PRODUCTS}
              className="footer-view-all"
            >
              View All Products
              <ArrowUpRight size={16} />
            </Link>
          </nav>

          {/* Contact Information */}

          <div className="footer-column">
            <h3>Get In Touch</h3>

            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <MapPin size={20} strokeWidth={1.6} />

                <div>
                  <span>Our Roots</span>

                  <p>
                    {contactDetails.location.city},
                    {" "}
                    {contactDetails.location.district},
                    <br />
                    {contactDetails.location.state},
                    {" "}
                    {contactDetails.location.country}
                  </p>
                </div>
              </div>

              <div className="footer-contact-item">
                <Mail size={20} strokeWidth={1.6} />

                <div>
                  <span>Business Enquiries</span>

                  <a href={`mailto:${contactDetails.email}`}>
                    {contactDetails.email}
                  </a>
                </div>
              </div>

              <div className="footer-contact-item">
                <Globe2 size={20} strokeWidth={1.6} />

                <div>
                  <span>Website</span>

                  <p>{contactDetails.website}</p>
                </div>
              </div>

              {contactDetails.whatsapp && (
                <div className="footer-contact-item">
                  <MessageCircle
                    size={20}
                    strokeWidth={1.6}
                  />

                  <div>
                    <span>WhatsApp</span>

                    <a
                      href={`https://wa.me/${contactDetails.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +{contactDetails.whatsapp}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Copyright & Legal Information */}

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Sharanga Global Exports.
            All rights reserved.
          </p>

          {legalLinks.length > 0 && (
            <nav
              className="footer-legal-links"
              aria-label="Legal navigation"
            >
              {legalLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          )}

          <div className="footer-india">
            <span
              className="footer-india-flag"
              aria-hidden="true"
            >
              🇮🇳
            </span>

            Proudly Rooted in India
          </div>
        </div>
      </div>
    </footer>
  );
}
