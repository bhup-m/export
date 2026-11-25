
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash, search, key } = useLocation();

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (hash) {
        let sectionId;

        try {
          sectionId = decodeURIComponent(hash.slice(1));
        } catch {
          sectionId = hash.slice(1);
        }

        const element = document.getElementById(sectionId);

        if (element) {
          const prefersReducedMotion = window.matchMedia(
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

    return () => window.cancelAnimationFrame(frameId);
  }, [pathname, hash, search, key]);

  return null;
}
