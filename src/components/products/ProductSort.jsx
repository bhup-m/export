
import {
  ArrowDownUp,
  ChevronDown,
} from "lucide-react";

import "./ProductSort.css";

export default function ProductSort({
  value,
  options,
  onChange,
}) {
  return (
    <div className="catalogue-sort">

      <label
        htmlFor="catalogue-sort-select"
        className="catalogue-sort-label"
      >
        <ArrowDownUp
          size={17}
          strokeWidth={1.7}
          aria-hidden="true"
        />

        Sort by:
      </label>

      <div className="catalogue-sort-select-wrapper">

        <select
          id="catalogue-sort-select"
          value={value}
          onChange={(event) =>
            onChange(event.target.value)
          }
          className="catalogue-sort-select"
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          size={17}
          strokeWidth={1.8}
          className="catalogue-sort-chevron"
          aria-hidden="true"
        />

      </div>

    </div>
  );
}
