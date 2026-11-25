
import onionImage from "../assets/images/products/onion.jpg";
import chilliImage from "../assets/images/products/green-chilli.jpg";
import okraImage from "../assets/images/products/okra.jpg";
import tomatoImage from "../assets/images/products/tomato.jpg";
import bananaImage from "../assets/images/products/banana.jpg";
import pomegranateImage from "../assets/images/products/pomegranate.jpg";

export const productCategories = [
  {
    id: "all",
    name: "All Products",
  },
  {
    id: "vegetables",
    name: "Fresh Vegetables",
  },
  {
    id: "fruits",
    name: "Fresh Fruits",
  },
];

export const products = [
  {
    id: 1,
    name: "Red Onion",
    slug: "red-onion",
    category: "vegetables",
    categoryLabel: "Fresh Vegetables",
    image: onionImage,
    description:
      "Fresh red onions with distinctive flavour, suitable for diverse culinary and commercial requirements.",
    origin: "India",
    featured: true,
  },
  {
    id: 2,
    name: "Green Chilli",
    slug: "green-chilli",
    category: "vegetables",
    categoryLabel: "Fresh Vegetables",
    image: chilliImage,
    description:
      "Fresh green chillies with vibrant colour, natural pungency and distinctive flavour.",
    origin: "India",
    featured: true,
  },
  {
    id: 3,
    name: "Fresh Okra",
    slug: "fresh-okra",
    category: "vegetables",
    categoryLabel: "Fresh Vegetables",
    image: okraImage,
    description:
      "Fresh green okra, valued for its tender texture and versatility in international cuisines.",
    origin: "India",
    featured: true,
  },
  {
    id: 4,
    name: "Tomato",
    slug: "tomato",
    category: "vegetables",
    categoryLabel: "Fresh Vegetables",
    image: tomatoImage,
    description:
      "Fresh tomatoes with rich natural colour and flavour for a variety of market requirements.",
    origin: "India",
    featured: true,
  },
  {
    id: 5,
    name: "Banana",
    slug: "banana",
    category: "fruits",
    categoryLabel: "Fresh Fruits",
    image: bananaImage,
    description:
      "Indian bananas with natural flavour, suitable for fresh fruit market requirements.",
    origin: "India",
    featured: true,
  },
  {
    id: 6,
    name: "Pomegranate",
    slug: "pomegranate",
    category: "fruits",
    categoryLabel: "Fresh Fruits",
    image: pomegranateImage,
    description:
      "Fresh pomegranates known for their rich colour, juicy arils and distinctive taste.",
    origin: "India",
    featured: true,
  },
];
