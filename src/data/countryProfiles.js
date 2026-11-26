
export const countryProfiles = [
  {
    code: "AE",
    name: "United Arab Emirates",
    aliases: ["UAE"],
    flag: "🇦🇪",
    capital: "Abu Dhabi",
    currency: "AED",
    currencyName: "UAE Dirham",

    description:
      "Exploring agricultural sourcing opportunities with fresh produce importers, wholesale distributors and food service businesses in the United Arab Emirates.",

    buyerSegments: [
      "Fresh produce importers",
      "Wholesale distributors",
      "Food service suppliers",
    ],

    considerations: [
      "Product freshness and shelf life",
      "Buyer-specific packaging requirements",
      "Import documentation and shipment coordination",
    ],
  },

  {
    code: "SA",
    name: "Saudi Arabia",
    aliases: [],
    flag: "🇸🇦",
    capital: "Riyadh",
    currency: "SAR",
    currencyName: "Saudi Riyal",

    description:
      "Exploring bulk agricultural sourcing and long-term distribution opportunities with prospective business partners in Saudi Arabia.",

    buyerSegments: [
      "Agricultural importers",
      "Wholesale trading companies",
      "Retail supply distributors",
    ],

    considerations: [
      "Bulk order specifications",
      "Applicable food import requirements",
      "Packaging and transport suitability",
    ],
  },

  {
    code: "QA",
    name: "Qatar",
    aliases: [],
    flag: "🇶🇦",
    capital: "Doha",
    currency: "QAR",
    currencyName: "Qatari Riyal",

    description:
      "Exploring fresh produce supply opportunities with importers, distribution businesses and hospitality supply partners in Qatar.",

    buyerSegments: [
      "Fresh produce importers",
      "Hospitality suppliers",
      "Food distribution companies",
    ],

    considerations: [
      "Product consistency and freshness",
      "Order-specific packaging",
      "Delivery schedules and import conditions",
    ],
  },

  {
    code: "OM",
    name: "Oman",
    aliases: [],
    flag: "🇴🇲",
    capital: "Muscat",
    currency: "OMR",
    currencyName: "Omani Rial",

    description:
      "Exploring agricultural trade relationships with importers and wholesale distribution businesses in Oman.",

    buyerSegments: [
      "Agricultural trading companies",
      "Wholesale importers",
      "Regional distributors",
    ],

    considerations: [
      "Seasonal product availability",
      "Commercial supply arrangements",
      "Destination-specific documentation",
    ],
  },

  {
    code: "SG",
    name: "Singapore",
    aliases: [],
    flag: "🇸🇬",
    capital: "Singapore",
    currency: "SGD",
    currencyName: "Singapore Dollar",

    description:
      "Exploring specification-driven agricultural sourcing opportunities with fresh produce importers and food distribution businesses in Singapore.",

    buyerSegments: [
      "Fresh produce importers",
      "Food service distributors",
      "Specialized agricultural traders",
    ],

    considerations: [
      "Product quality specifications",
      "Applicable food safety requirements",
      "Packaging and traceability information",
    ],
  },

  {
    code: "MY",
    name: "Malaysia",
    aliases: [],
    flag: "🇲🇾",
    capital: "Kuala Lumpur",
    currency: "MYR",
    currencyName: "Malaysian Ringgit",

    description:
      "Exploring agricultural trade opportunities with importers, wholesale traders and regional food distribution partners in Malaysia.",

    buyerSegments: [
      "Agricultural importers",
      "Wholesale distributors",
      "Retail supply partners",
    ],

    considerations: [
      "Product-specific import conditions",
      "Seasonal sourcing arrangements",
      "Packaging and shipment planning",
    ],
  },

  {
    code: "MV",
    name: "Maldives",
    aliases: [],
    flag: "🇲🇻",
    capital: "Malé",
    currency: "MVR",
    currencyName: "Maldivian Rufiyaa",

    description:
      "Exploring fresh agricultural produce sourcing opportunities with food importers, hospitality suppliers and distribution businesses in the Maldives.",

    buyerSegments: [
      "Food importers",
      "Hospitality supply companies",
      "Fresh produce distributors",
    ],

    considerations: [
      "Product shelf life",
      "Order quantities and supply schedules",
      "Transport and handling arrangements",
    ],
  },

  {
    code: "GB",
    name: "United Kingdom",
    aliases: ["UK", "Great Britain"],
    flag: "🇬🇧",
    capital: "London",
    currency: "GBP",
    currencyName: "Pound Sterling",

    description:
      "Exploring quality-focused agricultural sourcing opportunities with specialized produce importers and wholesale distribution businesses in the United Kingdom.",

    buyerSegments: [
      "Specialized produce importers",
      "Wholesale trading companies",
      "Fresh produce distributors",
    ],

    considerations: [
      "Product quality and buyer specifications",
      "Applicable residue and food safety requirements",
      "Traceability and import documentation",
    ],
  },

  {
    code: "NL",
    name: "Netherlands",
    aliases: ["The Netherlands"],
    flag: "🇳🇱",
    capital: "Amsterdam",
    currency: "EUR",
    currencyName: "Euro",

    description:
      "Exploring agricultural trading and distribution partnerships with prospective fresh produce businesses in the Netherlands.",

    buyerSegments: [
      "Fresh produce trading companies",
      "Specialized agricultural importers",
      "Distribution businesses",
    ],

    considerations: [
      "Applicable European Union import conditions",
      "Product grading and specifications",
      "Documentation and traceability",
    ],
  },

  {
    code: "DE",
    name: "Germany",
    aliases: [],
    flag: "🇩🇪",
    capital: "Berlin",
    currency: "EUR",
    currencyName: "Euro",

    description:
      "Exploring specification-driven sourcing relationships with agricultural importers and quality-focused wholesale businesses in Germany.",

    buyerSegments: [
      "Agricultural importers",
      "Specialized wholesale distributors",
      "Fresh produce trading companies",
    ],

    considerations: [
      "Buyer-specific quality expectations",
      "Applicable food safety requirements",
      "Product traceability and packaging",
    ],
  },

  {
    code: "KE",
    name: "Kenya",
    aliases: [],
    flag: "🇰🇪",
    capital: "Nairobi",
    currency: "KES",
    currencyName: "Kenyan Shilling",

    description:
      "Exploring commercially suitable agricultural trade opportunities with importers and wholesale trading businesses in Kenya.",

    buyerSegments: [
      "Agricultural trading companies",
      "Wholesale importers",
      "Regional distributors",
    ],

    considerations: [
      "Product eligibility and market feasibility",
      "Commercial order requirements",
      "Import documentation and logistics",
    ],
  },

  {
    code: "MU",
    name: "Mauritius",
    aliases: [],
    flag: "🇲🇺",
    capital: "Port Louis",
    currency: "MUR",
    currencyName: "Mauritian Rupee",

    description:
      "Exploring agricultural sourcing relationships with food importers, wholesale distributors and hospitality supply businesses in Mauritius.",

    buyerSegments: [
      "Fresh produce importers",
      "Food distribution companies",
      "Hospitality suppliers",
    ],

    considerations: [
      "Product freshness and transport suitability",
      "Destination-specific import conditions",
      "Packaging and supply coordination",
    ],
  },
];

export function getCountryProfile(countryCode) {
  return countryProfiles.find(
    (country) =>
      country.code === countryCode?.toUpperCase()
  );
}

export function getCountryProfileByName(countryName) {
  const normalizedName = countryName
    ?.trim()
    .toLowerCase();

  if (!normalizedName) {
    return undefined;
  }

  return countryProfiles.find((country) =>
    [country.name, ...country.aliases].some(
      (name) => name.toLowerCase() === normalizedName
    )
  );
}

export const countryProfilesDisclaimer =
  "These profiles represent prospective market exploration areas. They do not indicate established exports, confirmed buyer relationships or verified market demand. Product eligibility, import regulations and commercial feasibility must be assessed before any supply arrangement.";
