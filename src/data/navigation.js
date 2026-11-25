
export const ROUTES = {
  HOME: "/",
  ABOUT: "/#about",
  PRODUCTS: "/#products",
  FARMERS: "/#farmers",
  PROCESS: "/#process",
  QUALITY: "/#quality",
  MARKETS: "/#markets",
  CONTACT: "/#contact",
};

export const navLinks = [
  { label: "Home", href: ROUTES.HOME },
  { label: "About Us", href: ROUTES.ABOUT },
  { label: "Products", href: ROUTES.PRODUCTS },
  { label: "Our Farmers", href: ROUTES.FARMERS },
  { label: "Global Markets", href: ROUTES.MARKETS },
];

export const footerLinks = [
  { label: "Home", href: ROUTES.HOME },
  { label: "About Us", href: ROUTES.ABOUT },
  { label: "Our Products", href: ROUTES.PRODUCTS },
  { label: "Our Farmers", href: ROUTES.FARMERS },
  { label: "Global Markets", href: ROUTES.MARKETS },
  { label: "Contact Us", href: ROUTES.CONTACT },
];

export function getProductEnquiryUrl(productSlug) {
  const [pathname, hash] = ROUTES.CONTACT.split("#");

  const params = new URLSearchParams({
    product: productSlug,
  });

  return `${pathname}?${params.toString()}${
    hash ? `#${hash}` : ""
  }`;
}