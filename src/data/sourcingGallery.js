
import farmerMainImage from "../assets/images/farmers/farmer-main.jpg";
import farmSourcingImage from "../assets/images/farmers/farm-sourcing.jpg";
import merchantNetworkImage from "../assets/images/farmers/merchant-network.jpg";
import produceSelectionImage from "../assets/images/farmers/produce-selection.jpg";
import qualityInspectionImage from "../assets/images/quality/quality-inspection.jpg";
import agriculturalProductsImage from "../assets/images/hero/hero-products.jpg";

export const galleryCategories = [
  {
    id: "all",
    label: "All Images",
  },
  {
    id: "farms",
    label: "Farms & Agriculture",
  },
  {
    id: "markets",
    label: "Market Network",
  },
  {
    id: "produce",
    label: "Fresh Produce",
  },
  {
    id: "quality",
    label: "Quality & Selection",
  },
];

export const sourcingGallery = [
  {
    id: "agricultural-heritage",
    title: "Indian Agricultural Heritage",
    category: "farms",
    categoryLabel: "Farms & Agriculture",
    image: farmerMainImage,
    alt: "Illustrative photograph of Indian agriculture",
    description:
      "Agriculture and generations of farming knowledge form the foundation of India's fresh produce ecosystem.",
    layout: "tall",
    illustrative: true,
  },
  {
    id: "agricultural-sourcing",
    title: "Agricultural Sourcing",
    category: "farms",
    categoryLabel: "Farms & Agriculture",
    image: farmSourcingImage,
    alt: "Illustrative agricultural sourcing photograph",
    description:
      "Agricultural relationships and seasonal produce knowledge play an important role in sourcing fresh products.",
    layout: "standard",
    illustrative: true,
  },
  {
    id: "market-network",
    title: "Agricultural Market Network",
    category: "markets",
    categoryLabel: "Market Network",
    image: merchantNetworkImage,
    alt: "Illustrative agricultural market photograph",
    description:
      "Regional agricultural markets connect growers, merchants and produce suppliers through established commercial relationships.",
    layout: "standard",
    illustrative: true,
  },
  {
    id: "produce-selection",
    title: "Fresh Produce Selection",
    category: "produce",
    categoryLabel: "Fresh Produce",
    image: produceSelectionImage,
    alt: "Illustrative photograph of fresh produce selection",
    description:
      "Product condition, freshness and buyer requirements are important considerations in agricultural produce selection.",
    layout: "standard",
    illustrative: true,
  },
  {
    id: "quality-inspection",
    title: "Produce Quality Inspection",
    category: "quality",
    categoryLabel: "Quality & Selection",
    image: qualityInspectionImage,
    alt: "Illustrative photograph of agricultural quality inspection",
    description:
      "Quality-focused sourcing considers product characteristics, condition and agreed specifications.",
    layout: "tall",
    illustrative: true,
  },
  {
    id: "agricultural-products",
    title: "Fresh Agricultural Products",
    category: "produce",
    categoryLabel: "Fresh Produce",
    image: agriculturalProductsImage,
    alt: "Illustrative photograph of agricultural products",
    description:
      "India's diverse agricultural regions offer a wide variety of fruits, vegetables and seasonal produce.",
    layout: "standard",
    illustrative: true,
  },
];

export function getGalleryImages(category = "all") {
  if (category === "all") {
    return sourcingGallery;
  }

  return sourcingGallery.filter(
    (item) => item.category === category
  );
}

export function getGalleryCategoryCounts() {
  return Object.fromEntries(
    galleryCategories.map((category) => [
      category.id,
      getGalleryImages(category.id).length,
    ])
  );
}
