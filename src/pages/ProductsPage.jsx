
import { useSearchParams } from "react-router-dom";

import PageHero from "../components/common/PageHero";
import Breadcrumb from "../components/common/Breadcrumb";

import ProductFilters from "../components/products/ProductFilters";
import ProductGrid from "../components/products/ProductGrid";
import ProductSort from "../components/products/ProductSort";
import ActiveFilters from "../components/products/ActiveFilters";
import ProductEmptyState from "../components/products/ProductEmptyState";
import ProductEnquiryCTA from "../components/products/ProductEnquiryCTA";

import {
  getActiveProducts,
  productCategories,
} from "../data/products";

import productsHeroImage from "../assets/images/products/products-hero.jpg";

import "./ProductsPage.css";

/* ========================================
   SORT OPTIONS
======================================== */

const sortOptions = [
  {
    value: "default",
    label: "Default Order",
  },
  {
    value: "name-asc",
    label: "Name: A–Z",
  },
  {
    value: "name-desc",
    label: "Name: Z–A",
  },
];

export default function ProductsPage() {
  const [searchParams, setSearchParams] =
    useSearchParams();

  /* ======================================
     READ FILTERS FROM URL
  ====================================== */

  const search = searchParams.get("search") || "";

  const requestedCategory =
    searchParams.get("category") || "all";

  const activeCategory = productCategories.some(
    (category) => category.id === requestedCategory
  )
    ? requestedCategory
    : "all";

  const requestedSort =
    searchParams.get("sort") || "default";

  const activeSort = sortOptions.some(
    (option) => option.value === requestedSort
  )
    ? requestedSort
    : "default";

  /* ======================================
     GET ACTIVE PRODUCTS
  ====================================== */

  const activeProducts = getActiveProducts();

  /* ======================================
     CATEGORY COUNTS
  ====================================== */

  const categoryCounts = Object.fromEntries(
    productCategories.map((category) => [
      category.id,
      category.id === "all"
        ? activeProducts.length
        : activeProducts.filter(
            (product) =>
              product.category === category.id
          ).length,
    ])
  );

  /* ======================================
     PRODUCT FILTERING
  ====================================== */

  const searchTerms = search
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);

  const filteredProducts = activeProducts.filter(
    (product) => {
      const matchesCategory =
        activeCategory === "all" ||
        product.category === activeCategory;

      const searchableText = [
        product.name,
        product.description,
        product.categoryLabel,
        product.origin,
        ...(product.searchKeywords || []),
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = searchTerms.every(
        (term) => searchableText.includes(term)
      );

      return matchesCategory && matchesSearch;
    }
  );

  /* ======================================
     PRODUCT SORTING
  ====================================== */

  const sortedProducts = [...filteredProducts];

  switch (activeSort) {
    case "name-asc":
      sortedProducts.sort((first, second) =>
        first.name.localeCompare(second.name, "en")
      );
      break;

    case "name-desc":
      sortedProducts.sort((first, second) =>
        second.name.localeCompare(first.name, "en")
      );
      break;

    default:
      break;
  }

  /* ======================================
     URL PARAMETER HANDLER
  ====================================== */

  const updateParam = (
    paramName,
    value,
    defaultValue = "",
    replace = false
  ) => {
    const nextParams = new URLSearchParams(
      searchParams
    );

    if (value === defaultValue || value === "") {
      nextParams.delete(paramName);
    } else {
      nextParams.set(paramName, value);
    }

    if (
      nextParams.toString() === searchParams.toString()
    ) {
      return;
    }

    setSearchParams(nextParams, { replace });
  };

  /* ======================================
     FILTER HANDLERS
  ====================================== */

  const handleSearchChange = (value) => {
    updateParam("search", value, "", true);
  };

  const handleCategoryChange = (categoryId) => {
    updateParam("category", categoryId, "all");
  };

  const handleSortChange = (sortValue) => {
    updateParam("sort", sortValue, "default");
  };

  /* ======================================
     INDIVIDUAL FILTER REMOVAL
  ====================================== */

  const handleRemoveSearch = () => {
    updateParam("search", "");
  };

  const handleRemoveCategory = () => {
    updateParam("category", "all", "all");
  };

  const handleRemoveSort = () => {
    updateParam("sort", "default", "default");
  };

  /* ======================================
     COMPLETE CATALOGUE RESET
  ====================================== */

  const handleResetFilters = () => {
    const nextParams = new URLSearchParams(
      searchParams
    );

    nextParams.delete("search");
    nextParams.delete("category");
    nextParams.delete("sort");

    if (
      nextParams.toString() === searchParams.toString()
    ) {
      return;
    }

    setSearchParams(nextParams);
  };

  return (
    <div className="products-page">

      {/* Products Page Hero */}

      <PageHero
        eyebrow="Our Product Portfolio"
        title="Fresh from Indian Farms."
        highlight="For Global Markets."
        description="Discover our range of fresh agricultural produce, with sourcing focused on quality, freshness and the diverse requirements of international buyers."
        backgroundImage={productsHeroImage}
        backgroundPosition="center"
      >
        <Breadcrumb
          items={[
            { label: "Products" },
          ]}
        />
      </PageHero>

      {/* Product Catalogue Section */}

      <section
        id="product-catalogue"
        className="products-page-catalogue"
        aria-labelledby="product-catalogue-title"
      >
        <div className="products-page-container">

          {/* Catalogue Heading */}

          <div className="products-page-heading">

            <div className="products-page-eyebrow">
              <span />
              EXPLORE OUR PRODUCTS
              <span />
            </div>

            <h2 id="product-catalogue-title">
              Nature's Finest.
              <span>Carefully Sourced.</span>
            </h2>

            <p>
              Explore our selection of fresh fruits and
              vegetables sourced through our agricultural
              network in India, with a focus on quality
              and buyer-specific requirements.
            </p>

          </div>

          {/* Product Search & Category Filters */}

          <ProductFilters
            search={search}
            activeCategory={activeCategory}
            activeSort={activeSort}
            categories={productCategories}
            categoryCounts={categoryCounts}
            onSearchChange={handleSearchChange}
            onCategoryChange={handleCategoryChange}
            onReset={handleResetFilters}
          />

          {/* Active Filter Indicators */}

          <ActiveFilters
            search={search}
            activeCategory={activeCategory}
            activeSort={activeSort}
            categories={productCategories}
            sortOptions={sortOptions}
            onRemoveSearch={handleRemoveSearch}
            onRemoveCategory={handleRemoveCategory}
            onRemoveSort={handleRemoveSort}
            onReset={handleResetFilters}
          />

          {/* Product Count & Sorting */}

          <div className="catalogue-results-summary">

            <p role="status" aria-live="polite">
              Showing{" "}
              <strong>{sortedProducts.length}</strong>
              {" "}of{" "}
              <strong>{activeProducts.length}</strong>
              {" "}products
            </p>

            <ProductSort
              value={activeSort}
              options={sortOptions}
              onChange={handleSortChange}
            />

          </div>

          {/* Product Catalogue Grid */}

          <ProductGrid
            products={sortedProducts}
          />

          {/* Product Empty State */}

          {sortedProducts.length === 0 && (
            <ProductEmptyState
              hasProducts={activeProducts.length > 0}
              onReset={handleResetFilters}
            />
          )}

        </div>
      </section>

      {/* Product Enquiry CTA */}

      <ProductEnquiryCTA />

    </div>
  );
}
