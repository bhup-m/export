
import { useState } from "react";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";

import {
  globalMarkets,
  sourcingOrigin,
  indianIslandTerritories
} from "../../data/globalMarkets";

import worldMapData from "../../assets/maps/world-india-corrected.json";

import "./WorldMap.css";

export default function WorldMap({
  activeRegion = "all",
}) {
  const [activeMarker, setActiveMarker] =
    useState(null);

  const visibleMarkets = globalMarkets.filter(
    (region) =>
      activeRegion === "all" ||
      region.id === activeRegion
  );

  const visibleCountries = visibleMarkets.flatMap(
    (region) => region.countries
  );

  const selectedMarker = visibleCountries.find(
    (country) => country.name === activeMarker
  );

  const tooltipName =
    activeMarker === sourcingOrigin.name
      ? "India — Sourcing Origin"
      : selectedMarker?.name;

  return (
    <div className="world-map-wrapper">

      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{
          scale: 165,
          center: [20, 10],
        }}
        width={1000}
        height={500}
        className="world-map-svg"
        aria-label="India and potential international export markets"
      >
        {/* World Geography */}
        <Geographies geography={worldMapData}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isIndia =
                geo.properties.ADM0_A3 === "IND" ||
                geo.properties.ADMIN === "India" ||
                geo.properties.NAME === "India" ||
                geo.properties.name === "India";

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  tabIndex={-1}
                  fill={
                    isIndia
                      ? "#C5A052"
                      : "#29445F"
                  }
                  stroke="#102747"
                  strokeWidth={0.5}
                  style={{
                    default: {
                      outline: "none",
                    },
                    hover: {
                      fill: isIndia
                        ? "#D9BC7A"
                        : "#3B5874",
                      outline: "none",
                    },
                    pressed: {
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
        {/* Indian Island Territory Indicators */}
        {indianIslandTerritories.map((island) => (
        <Marker
            key={island.name}
            coordinates={island.coordinates}
        >
            <circle
            r={2}
            fill="#C5A052"
            stroke="#C5A052"
            strokeWidth={0.5}
            >
            <title>{island.name} — India</title>
            </circle>
        </Marker>
        ))}

        {/* Illustrative Trade Connections */}
        {visibleCountries.map((country) => (
          <Line
            key={`line-${country.name}`}
            from={sourcingOrigin.coordinates}
            to={country.coordinates}
            stroke="#C5A052"
            strokeWidth={1.2}
            strokeLinecap="round"
            strokeDasharray="5 5"
            className="world-map-route"
          />
        ))}

        {/* Potential Market Markers */}
        {visibleCountries.map((country) => (
          <Marker
            key={country.name}
            coordinates={country.coordinates}
          >
            <g
              className="world-map-marker"
              role="button"
              tabIndex={0}
              aria-label={country.name}
              onMouseEnter={() =>
                setActiveMarker(country.name)
              }
              onMouseLeave={() =>
                setActiveMarker(null)
              }
              onFocus={() =>
                setActiveMarker(country.name)
              }
              onBlur={() =>
                setActiveMarker(null)
              }
              onClick={() =>
                setActiveMarker(country.name)
              }
              onKeyDown={(event) => {
                if (
                  event.key === "Enter" ||
                  event.key === " "
                ) {
                  event.preventDefault();
                  setActiveMarker(country.name);
                }
              }}
            >
              <circle
                r={10}
                fill="#FFFFFF"
                opacity={0.12}
                className="market-marker-pulse"
              />

              <circle
                r={4}
                fill="#FFFFFF"
                stroke="#C5A052"
                strokeWidth={1.5}
              />

              <circle
                r={12}
                fill="transparent"
              />
            </g>
          </Marker>
        ))}

        {/* India Sourcing Origin */}
        <Marker
          coordinates={sourcingOrigin.coordinates}
        >
          <g
            className="world-map-marker"
            role="button"
            tabIndex={0}
            aria-label="India, sourcing origin"
            onMouseEnter={() =>
              setActiveMarker("India")
            }
            onMouseLeave={() =>
              setActiveMarker(null)
            }
            onFocus={() =>
              setActiveMarker("India")
            }
            onBlur={() =>
              setActiveMarker(null)
            }
            onClick={() =>
              setActiveMarker("India")
            }
            onKeyDown={(event) => {
              if (
                event.key === "Enter" ||
                event.key === " "
              ) {
                event.preventDefault();
                setActiveMarker("India");
              }
            }}
          >
            <circle
              r={16}
              fill="#C5A052"
              opacity={0.2}
              className="india-marker-pulse"
            />

            <circle
              r={8}
              fill="#C5A052"
              stroke="#FFFFFF"
              strokeWidth={2}
            />

            <circle
              r={3}
              fill="#FFFFFF"
            />

            <text
              y={-20}
              textAnchor="middle"
              className="india-map-label"
            >
              INDIA
            </text>
          </g>
        </Marker>
      </ComposableMap>

      {/* Interactive Tooltip */}
      <div
        className="world-map-tooltip-area"
        aria-live="polite"
      >
        {tooltipName && (
          <span className="world-map-tooltip">
            {tooltipName}
          </span>
        )}
      </div>

      {/* Map Legend */}
      <div className="world-map-legend">
        <div className="world-map-legend-item">
          <span className="legend-origin" />
          India — Sourcing Origin
        </div>

        <div className="world-map-legend-item">
          <span className="legend-market" />
          Potential Markets
        </div>

        <div className="world-map-legend-item">
          <span className="legend-route" />
          Illustrative Connections
        </div>
      </div>
    </div>
  );
}
