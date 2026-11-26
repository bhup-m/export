
import { Link } from "react-router-dom";
import { Home, ChevronRight } from "lucide-react";

import { ROUTES } from "../../data/navigation";

import "./Breadcrumb.css";

export default function Breadcrumb({ items = [] }) {
  const breadcrumbItems = [
    {
      label: "Home",
      href: ROUTES.HOME,
    },
    ...items,
  ];

  return (
    <nav
      className="sge-breadcrumb"
      aria-label="Breadcrumb"
    >
      <ol className="sge-breadcrumb-list">
        {breadcrumbItems.map((item, index) => {
          const isLast =
            index === breadcrumbItems.length - 1;

          return (
            <li
              key={`${item.label}-${index}`}
              className="sge-breadcrumb-item"
            >
              {index > 0 && (
                <ChevronRight
                  size={14}
                  strokeWidth={1.7}
                  className="sge-breadcrumb-separator"
                  aria-hidden="true"
                />
              )}

              {isLast ? (
                <span
                  className="sge-breadcrumb-current"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="sge-breadcrumb-link"
                >
                  {index === 0 && (
                    <Home
                      size={15}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  )}

                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
