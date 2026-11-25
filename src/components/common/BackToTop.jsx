
import { useEffect, useState } from "react";

import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";

import { ArrowUp } from "lucide-react";

import "./BackToTop.css";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "instant" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          title="Back to top"
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: reduceMotion ? 0 : 15,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.25,
          }}
        >
          <ArrowUp size={23} strokeWidth={2} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
