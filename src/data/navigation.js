
/* ========================================
   APPLICATION ROUTES
======================================== */

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  PRODUCTS: "/products",
  FARMERS: "/#farmers",
  PROCESS: "/#process",
  QUALITY: "/#quality",
  MARKETS: "/#markets",
  CONTACT: "/#contact",
};

/* ========================================
   NAVBAR LINKS
======================================== */

export const navLinks = [
  {
    label: "Home",
    href: ROUTES.HOME,
  },
  {
    label: "About Us",
    href: ROUTES.ABOUT,
  },
  {
    label: "Products",
    href: ROUTES.PRODUCTS,
  },
  {
    label: "Our Farmers",
    href: ROUTES.FARMERS,
  },
  {
    label: "Global Markets",
    href: ROUTES.MARKETS,
  },
];

/* ========================================
   FOOTER LINKS
======================================== */

export const footerLinks = [
  {
    label: "Home",
    href: ROUTES.HOME,
  },
  {
    label: "About Us",
    href: ROUTES.ABOUT,
  },
  {
    label: "Our Products",
    href: ROUTES.PRODUCTS,
  },
  {
    label: "Our Farmers",
    href: ROUTES.FARMERS,
  },
  {
    label: "Global Markets",
    href: ROUTES.MARKETS,
  },
  {
    label: "Contact Us",
    href: ROUTES.CONTACT,
  },
];

/* ========================================
   PRODUCT DETAILS URL HELPER
======================================== */

export function getProductDetailsUrl(productSlug) {
  return `${ROUTES.PRODUCTS}/${encodeURIComponent(productSlug)}`;
}

/* ========================================
   PRODUCT ENQUIRY URL HELPER
======================================== */

export function getProductEnquiryUrl(productSlug) {
  const [pathname, hash] = ROUTES.CONTACT.split("#");

  const params = new URLSearchParams({
    product: productSlug,
  });

  return `${pathname}?${params.toString()}${
    hash ? `#${hash}` : ""
  }`;
}
