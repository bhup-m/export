
import { Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import NotFoundPage from "../pages/NotFoundPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Homepage */}
        <Route index element={<HomePage />} />

        {/* About Us */}
        <Route path="about" element={<AboutPage />} />

        {/* Product Catalogue */}
        <Route path="products" element={<ProductsPage />} />

        {/* Dynamic Product Details */}
        <Route
          path="products/:slug"
          element={<ProductDetailsPage />}
        />

        {/* Global 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
