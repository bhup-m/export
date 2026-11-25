
import {
  Sprout,
  Handshake,
  Leaf,
  Truck,
} from "lucide-react";

import farmSourcingImage from "../assets/images/farmers/farm-sourcing.jpg";
import merchantNetworkImage from "../assets/images/farmers/merchant-network.jpg";
import produceSelectionImage from "../assets/images/farmers/produce-selection.jpg";

export const farmerStrengths = [
  {
    id: 1,
    icon: Sprout,
    title: "Established Farmer Relationships",
    description:
      "Generations of agricultural trading experience have helped build meaningful connections with farming communities.",
  },
  {
    id: 2,
    icon: Handshake,
    title: "Trusted Merchant Network",
    description:
      "Established relationships with local merchants and regional produce suppliers support our sourcing approach.",
  },
  {
    id: 3,
    icon: Leaf,
    title: "Seasonal Produce Knowledge",
    description:
      "Understanding crop seasons, harvest cycles and regional produce availability helps us evaluate sourcing opportunities.",
  },
  {
    id: 4,
    icon: Truck,
    title: "Flexible Sourcing Approach",
    description:
      "Our agricultural network helps us explore supply options based on buyer requirements and seasonal availability.",
  },
];

export const sourcingNetwork = [
  {
    id: 1,
    step: "01",
    label: "AT THE SOURCE",
    title: "Farm Sourcing",
    image: farmSourcingImage,
    alt: "Agricultural produce harvesting in India",
    description:
      "Building on established agricultural relationships to identify fresh produce sourcing opportunities.",
  },
  {
    id: 2,
    step: "02",
    label: "OUR NETWORK",
    title: "Merchant Partnerships",
    image: merchantNetworkImage,
    alt: "Fresh produce at an agricultural wholesale market",
    description:
      "Connecting with local merchants and regional suppliers to support diverse agricultural sourcing requirements.",
  },
  {
    id: 3,
    step: "03",
    label: "QUALITY FOCUS",
    title: "Produce Selection",
    image: produceSelectionImage,
    alt: "Fresh agricultural produce being sorted and selected",
    description:
      "Focusing on freshness, product specifications and suitable produce selection based on buyer expectations.",
  },
];
