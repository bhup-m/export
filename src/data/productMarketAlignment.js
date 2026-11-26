
export const productMarketAlignment = {
  "red-onion": {
    considerations: [
      "Bulb size and grading requirements",
      "Dryness and external skin quality",
      "Buyer-specific mesh bag packaging",
      "Ventilation and storage arrangements",
    ],
  },

  "green-chilli": {
    considerations: [
      "Length, colour and variety preferences",
      "Freshness and firmness",
      "Temperature and handling requirements",
      "Protective packaging arrangements",
    ],
  },

  "fresh-okra": {
    considerations: [
      "Pod length and tenderness",
      "Freshness and external appearance",
      "Product handling and shelf life",
      "Buyer-specific protective packaging",
    ],
  },

  tomato: {
    considerations: [
      "Fruit size and maturity requirements",
      "Firmness and colour preferences",
      "Transport and handling suitability",
      "Protective carton packaging",
    ],
  },

  banana: {
    considerations: [
      "Fruit maturity and variety preferences",
      "Bunch and finger specifications",
      "Temperature management",
      "Ripening and transport arrangements",
    ],
  },

  pomegranate: {
    considerations: [
      "Fruit size and grading requirements",
      "External appearance and maturity",
      "Protective carton packaging",
      "Storage and transport suitability",
    ],
  },
};

export const defaultProductConsiderations = [
  "Buyer-specific product specifications",
  "Seasonal availability and sourcing",
  "Packaging and handling requirements",
  "Transport and storage suitability",
];

export const commonMarketConsiderations = [
  "Product-specific export and import eligibility",
  "Applicable food safety and phytosanitary requirements",
  "Commercial quantities and shipment arrangements",
  "Buyer-specific documentation requirements",
];

export function getProductMarketConsiderations(slug) {
  return (
    productMarketAlignment[slug]?.considerations ??
    defaultProductConsiderations
  );
}

export const productMarketDisclaimer =
  "Product and destination selections are intended for preliminary business enquiries only. They do not confirm product availability, market demand, export eligibility or established supply routes. All requirements must be assessed before confirming an order.";
