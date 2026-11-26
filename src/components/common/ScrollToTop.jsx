
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import { ROUTES } from "../../data/navigation";

export default function ScrollToTop() {
  const { pathname, hash, search, key } =
    useLocation();

  const previousLocation = useRef(null);

  useEffect(() => {
    const previous = previousLocation.current;

    const isCatalogueQueryChange =
      previous !== null &&
      pathname === ROUTES.PRODUCTS &&
      previous.pathname === pathname &&
      previous.hash === hash &&
      previous.search !== search;

    previousLocation.current = {
      pathname,
      hash,
      search,
    };

    // Preserve scroll position during catalogue filtering.

    if (isCatalogueQueryChange) {
      return;
    }

    const frameId = window.requestAnimationFrame(() => {
      if (hash) {
        let sectionId;

        try {
          sectionId = decodeURIComponent(
            hash.slice(1)
          );
        } catch {
          sectionId = hash.slice(1);
        }

        const element =
          document.getElementById(sectionId);

        if (element) {
          const prefersReducedMotion =
            window.matchMedia(
              "(prefers-reduced-motion: reduce)"
            ).matches;

          element.scrollIntoView({
            behavior: prefersReducedMotion
              ? "instant"
              : "smooth",
            block: "start",
          });

          return;
        }
      }

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    });

    return () =>
      window.cancelAnimationFrame(frameId);

  }, [pathname, hash, search, key]);

  return null;
}
