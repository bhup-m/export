
import { X, Filter, RotateCcw } from "lucide-react";

import "./ActiveFilters.css";

export default function ActiveFilters({
  search,
  activeCategory,
  activeSort,
  categories,
  sortOptions,
  onRemoveSearch,
  onRemoveCategory,
  onRemoveSort,
  onReset,
}) {
  const filters = [];

  const categoryLabel = categories.find(
    (category) => category.id === activeCategory
  )?.label;

  const sortLabel = sortOptions.find(
    (option) => option.value === activeSort
  )?.label;

  if (search) {
    filters.push({
      id: "search",
      label: `Search: ${search}`,
      onRemove: onRemoveSearch,
    });
  }

  if (activeCategory !== "all") {
    filters.push({
      id: "category",
      label: categoryLabel || activeCategory,
      onRemove: onRemoveCategory,
    });
  }

  if (activeSort !== "default") {
    filters.push({
      id: "sort",
      label: sortLabel || activeSort,
      onRemove: onRemoveSort,
    });
  }

  if (filters.length === 0) {
    return null;
  }

  return (
    <div
      className="catalogue-active-filters"
      role="group"
      aria-label="Active catalogue filters"
    >
      <div className="catalogue-active-filters-label">
        <Filter
          size={16}
          strokeWidth={1.7}
          aria-hidden="true"
        />

        <span>Active Filters:</span>
      </div>

      <div className="catalogue-filter-chips">
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            onClick={filter.onRemove}
            className="catalogue-filter-chip"
            aria-label={`Remove ${filter.label}`}
            title={filter.label}
          >
            <span>{filter.label}</span>

            <X
              size={15}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={onReset}
        className="catalogue-clear-all"
      >
        <RotateCcw
          size={15}
          strokeWidth={1.8}
          aria-hidden="true"
        />

        Clear All
      </button>
    </div>
  );
}
