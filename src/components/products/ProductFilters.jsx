
import {
  Search,
  X,
  RotateCcw,
  SlidersHorizontal,
} from "lucide-react";

import "./ProductFilters.css";

export default function ProductFilters({
  search,
  activeCategory,
  activeSort = "default",
  categories,
  categoryCounts,
  onSearchChange,
  onCategoryChange,
  onReset,
}) {
  const hasActiveFilters =
    search !== "" ||
    activeCategory !== "all" ||
    activeSort !== "default";

  return (
    <div className="catalogue-filters">

      {/* Search Section */}

      <div className="catalogue-filters-search-row">
        <div className="catalogue-filters-search">
          <Search
            size={21}
            strokeWidth={1.7}
            className="catalogue-search-icon"
            aria-hidden="true"
          />

          <input
            type="search"
            value={search}
            onChange={(event) =>
              onSearchChange(event.target.value)
            }
            placeholder="Search products, e.g. onion, banana..."
            aria-label="Search products"
            autoComplete="off"
            className="catalogue-search-input"
          />

          {search && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              className="catalogue-search-clear"
              aria-label="Clear product search"
            >
              <X
                size={19}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </button>
          )}
        </div>

        <button
          type="button"
          onClick={onReset}
          disabled={!hasActiveFilters}
          className="catalogue-reset-button"
        >
          <RotateCcw
            size={17}
            strokeWidth={1.8}
            aria-hidden="true"
          />

          Reset Filters
        </button>
      </div>

      {/* Category Section */}

      <div className="catalogue-filters-category-row">
        <div className="catalogue-filters-label">
          <SlidersHorizontal
            size={18}
            strokeWidth={1.7}
            aria-hidden="true"
          />

          <span>Categories</span>
        </div>

        <div
          className="catalogue-category-buttons"
          role="group"
          aria-label="Filter catalogue by category"
        >
          {categories.map((category) => {
            const isActive =
              activeCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() =>
                  onCategoryChange(category.id)
                }
                aria-pressed={isActive}
                className={`catalogue-category-button ${
                  isActive ? "active" : ""
                }`}
              >
                <span>{category.label}</span>

                <span className="catalogue-category-count">
                  {categoryCounts[category.id] ?? 0}
                </span>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
}
