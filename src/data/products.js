
import onionImage from "../assets/images/products/onion.jpg";
import greenChilliImage from "../assets/images/products/green-chilli.jpg";
import okraImage from "../assets/images/products/okra.jpg";
import tomatoImage from "../assets/images/products/tomato.jpg";
import bananaImage from "../assets/images/products/banana.jpg";
import pomegranateImage from "../assets/images/products/pomegranate.jpg";

/* ========================================
   PRODUCT CATEGORIES
======================================== */

export const productCategories = [
  {
    id: "all",
    label: "All Products",
  },
  {
    id: "vegetables",
    label: "Vegetables",
  },
  {
    id: "fruits",
    label: "Fruits",
  },
];

/* ========================================
   PRODUCT DATA
======================================== */

export const products = [

  /* ======================================
     RED ONION
  ====================================== */

  {
    id: 1,
    name: "Red Onion",
    slug: "red-onion",

    category: "vegetables",
    categoryLabel: "Vegetables",

    image: onionImage,
    gallery: [onionImage],

    description:
      "Fresh Indian red onions valued for their distinctive flavour, firm texture and versatile culinary applications.",

    longDescription:
      "Indian red onions are widely used across international culinary markets for their characteristic flavour, colour and versatility. Our agricultural sourcing network provides a foundation for arranging onion supplies according to buyer requirements, seasonal availability and agreed quality specifications.",

    origin: "India",

    featured: true,
    active: true,

    availability: {
      status: "on-request",
      label: "Available on Request",
      note: "Subject to seasonal availability and applicable export regulations.",
    },

    specifications: [
      { label: "Product", value: "Fresh Red Onion" },
      { label: "Origin", value: "India" },
      { label: "Colour", value: "Red / Purple" },
      { label: "Size", value: "As per buyer requirement" },
      { label: "Grade", value: "As per agreed specifications" },
      { label: "Minimum Order", value: "On request" },
    ],

    packaging: [
      "Mesh Bags",
      "Ventilated Packaging",
      "Buyer-Specific Packaging",
    ],

    highlights: [
      "Distinctive flavour",
      "Firm texture",
      "Multiple size requirements",
      "Suitable for diverse culinary markets",
    ],

    searchKeywords: [
      "onion",
      "red onion",
      "fresh onion",
      "pyaz",
      "kanda",
      "bulb vegetable",
    ],
  },

  /* ======================================
     GREEN CHILLI
  ====================================== */

  {
    id: 2,
    name: "Green Chilli",
    slug: "green-chilli",

    category: "vegetables",
    categoryLabel: "Vegetables",

    image: greenChilliImage,
    gallery: [greenChilliImage],

    description:
      "Fresh green chillies known for their vibrant colour, characteristic heat and distinctive flavour.",

    longDescription:
      "Indian green chillies are an important ingredient in a wide range of cuisines. We aim to coordinate sourcing and product selection according to buyer preferences for size, variety, freshness and pungency, subject to seasonal availability.",

    origin: "India",

    featured: true,
    active: true,

    availability: {
      status: "on-request",
      label: "Available on Request",
      note: "Subject to seasonal availability and buyer specifications.",
    },

    specifications: [
      { label: "Product", value: "Fresh Green Chilli" },
      { label: "Origin", value: "India" },
      { label: "Colour", value: "Green" },
      { label: "Variety", value: "On request" },
      { label: "Size", value: "As per buyer requirement" },
      { label: "Minimum Order", value: "On request" },
    ],

    packaging: [
      "Ventilated Cartons",
      "Protective Produce Packaging",
      "Buyer-Specific Packaging",
    ],

    highlights: [
      "Characteristic pungency",
      "Vibrant green appearance",
      "Variety-based sourcing",
      "Versatile culinary applications",
    ],

    searchKeywords: [
      "chilli",
      "chili",
      "green chilli",
      "green pepper",
      "mirchi",
      "hot pepper",
    ],
  },

  /* ======================================
     FRESH OKRA
  ====================================== */

  {
    id: 3,
    name: "Fresh Okra",
    slug: "fresh-okra",

    category: "vegetables",
    categoryLabel: "Vegetables",

    image: okraImage,
    gallery: [okraImage],

    description:
      "Fresh green okra valued for its tender texture and versatility across diverse culinary traditions.",

    longDescription:
      "Fresh okra, also known as ladyfinger, is a popular vegetable across Asian, Middle Eastern and African cuisines. Our sourcing approach focuses on understanding buyer requirements for pod size, tenderness, appearance and freshness.",

    origin: "India",

    featured: true,
    active: true,

    availability: {
      status: "on-request",
      label: "Available on Request",
      note: "Subject to harvest conditions and seasonal availability.",
    },

    specifications: [
      { label: "Product", value: "Fresh Okra" },
      { label: "Origin", value: "India" },
      { label: "Colour", value: "Green" },
      { label: "Pod Size", value: "As per buyer requirement" },
      { label: "Grade", value: "As per agreed specifications" },
      { label: "Minimum Order", value: "On request" },
    ],

    packaging: [
      "Ventilated Cartons",
      "Protective Produce Packaging",
      "Buyer-Specific Packaging",
    ],

    highlights: [
      "Tender green pods",
      "Size-based selection",
      "Fresh produce sourcing",
      "Multiple culinary applications",
    ],

    searchKeywords: [
      "okra",
      "ladyfinger",
      "lady finger",
      "bhindi",
      "green vegetable",
    ],
  },

  /* ======================================
     TOMATO
  ====================================== */

  {
    id: 4,
    name: "Tomato",
    slug: "tomato",

    category: "vegetables",
    categoryLabel: "Vegetables",

    image: tomatoImage,
    gallery: [tomatoImage],

    description:
      "Fresh tomatoes appreciated for their natural flavour, vibrant appearance and wide culinary applications.",

    longDescription:
      "Tomatoes are an essential agricultural product used in fresh consumption, food preparation and processing. We aim to arrange sourcing according to buyer preferences for maturity, firmness, size and intended market applications.",

    origin: "India",

    featured: true,
    active: true,

    availability: {
      status: "on-request",
      label: "Available on Request",
      note: "Subject to seasonal availability and destination requirements.",
    },

    specifications: [
      { label: "Product", value: "Fresh Tomato" },
      { label: "Origin", value: "India" },
      { label: "Colour", value: "Red / As requested" },
      { label: "Maturity", value: "As per buyer requirement" },
      { label: "Size", value: "As per agreed specifications" },
      { label: "Minimum Order", value: "On request" },
    ],

    packaging: [
      "Ventilated Cartons",
      "Protective Packaging",
      "Buyer-Specific Packaging",
    ],

    highlights: [
      "Natural flavour",
      "Maturity-based selection",
      "Multiple size requirements",
      "Fresh market applications",
    ],

    searchKeywords: [
      "tomato",
      "tomatoes",
      "fresh tomato",
      "tamatar",
      "red tomato",
    ],
  },

  /* ======================================
     BANANA
  ====================================== */

  {
    id: 5,
    name: "Banana",
    slug: "banana",

    category: "fruits",
    categoryLabel: "Fruits",

    image: bananaImage,
    gallery: [bananaImage],

    description:
      "Fresh Indian bananas valued for their natural sweetness, texture and widespread consumer appeal.",

    longDescription:
      "India produces a diverse range of banana varieties suitable for different consumer markets. Our sourcing approach aims to accommodate buyer requirements for variety, maturity, size and packaging, with particular attention to handling and transportation needs.",

    origin: "India",

    featured: true,
    active: true,

    availability: {
      status: "on-request",
      label: "Available on Request",
      note: "Subject to variety, harvest conditions and sourcing availability.",
    },

    specifications: [
      { label: "Product", value: "Fresh Banana" },
      { label: "Origin", value: "India" },
      { label: "Variety", value: "On request" },
      { label: "Maturity", value: "As per buyer requirement" },
      { label: "Size", value: "As per agreed specifications" },
      { label: "Minimum Order", value: "On request" },
    ],

    packaging: [
      "Protective Fruit Cartons",
      "Buyer-Specific Packaging",
    ],

    highlights: [
      "Natural sweetness",
      "Variety-based sourcing",
      "Maturity-based selection",
      "Fresh fruit market applications",
    ],

    searchKeywords: [
      "banana",
      "bananas",
      "fresh banana",
      "kela",
      "tropical fruit",
    ],
  },

  /* ======================================
     POMEGRANATE
  ====================================== */

  {
    id: 6,
    name: "Pomegranate",
    slug: "pomegranate",

    category: "fruits",
    categoryLabel: "Fruits",

    image: pomegranateImage,
    gallery: [pomegranateImage],

    description:
      "Fresh Indian pomegranates appreciated for their distinctive appearance, juicy arils and natural flavour.",

    longDescription:
      "Indian pomegranates are valued across fresh fruit markets for their attractive appearance and characteristic flavour. We aim to coordinate sourcing based on buyer requirements for variety, fruit size, maturity, appearance and packaging specifications.",

    origin: "India",

    featured: true,
    active: true,

    availability: {
      status: "on-request",
      label: "Available on Request",
      note: "Subject to seasonal availability and agreed quality requirements.",
    },

    specifications: [
      { label: "Product", value: "Fresh Pomegranate" },
      { label: "Origin", value: "India" },
      { label: "Variety", value: "On request" },
      { label: "Fruit Size", value: "As per buyer requirement" },
      { label: "Grade", value: "As per agreed specifications" },
      { label: "Minimum Order", value: "On request" },
    ],

    packaging: [
      "Protective Fruit Cartons",
      "Fruit Separation Trays",
      "Buyer-Specific Packaging",
    ],

    highlights: [
      "Juicy arils",
      "Distinctive appearance",
      "Size-based selection",
      "Fresh fruit market applications",
    ],

    searchKeywords: [
      "pomegranate",
      "pomegranates",
      "anar",
      "dalimb",
      "fresh fruit",
    ],
  },
];

/* ========================================
   PRODUCT DATA HELPERS
======================================== */

export function getActiveProducts() {
  return products.filter((product) => product.active);
}

export function getFeaturedProducts() {
  return products.filter(
    (product) => product.active && product.featured
  );
}

export function getProductBySlug(slug) {
  return products.find(
    (product) =>
      product.active && product.slug === slug
  );
}

export function getProductsByCategory(category) {
  const activeProducts = getActiveProducts();

  if (!category || category === "all") {
    return activeProducts;
  }

  return activeProducts.filter(
    (product) => product.category === category
  );
}

export function getRelatedProducts(slug, limit = 3) {
  const currentProduct = getProductBySlug(slug);

  if (!currentProduct) {
    return [];
  }

  return getActiveProducts()
    .filter(
      (product) =>
        product.slug !== slug &&
        product.category === currentProduct.category
    )
    .slice(0, limit);
}
