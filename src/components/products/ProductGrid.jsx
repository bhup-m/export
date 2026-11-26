
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";

import CatalogueProductCard from "./CatalogueProductCard";

import "./ProductGrid.css";

export default function ProductGrid({
  products = [],
  detailsEnabled = false,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      layout={!reduceMotion}
      className="catalogue-product-grid"
    >
      <AnimatePresence
        initial={false}
        mode="popLayout"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            layout={!reduceMotion}
            className="catalogue-product-grid-item"
            initial={{
              opacity: reduceMotion ? 1 : 0,
              scale: reduceMotion ? 1 : 0.96,
              y: reduceMotion ? 0 : 15,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: reduceMotion ? 1 : 0,
              scale: reduceMotion ? 1 : 0.96,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.3,
              ease: "easeOut",
            }}
          >
            <CatalogueProductCard
              product={product}
              detailsEnabled={detailsEnabled}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
