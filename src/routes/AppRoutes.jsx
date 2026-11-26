
import {
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import FarmersPage from "../pages/FarmersPage";
import QualityPage from "../pages/QualityPage";
import GlobalMarketsPage from "../pages/GlobalMarketsPage";
import NotFoundPage from "../pages/NotFoundPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<MainLayout />}
      >
        {/* Homepage */}
        <Route
          index
          element={<HomePage />}
        />

        {/* About Us */}
        <Route
          path="about"
          element={<AboutPage />}
        />

        {/* Product Catalogue */}
        <Route
          path="products"
          element={<ProductsPage />}
        />

        {/* Dynamic Product Details */}
        <Route
          path="products/:slug"
          element={<ProductDetailsPage />}
        />

        {/* Farmers & Sourcing */}
        <Route
          path="farmers"
          element={<FarmersPage />}
        />

        {/* Quality & Standards */}
        <Route
          path="quality"
          element={<QualityPage />}
        />

        {/* Global Markets */}
        <Route
          path="markets"
          element={<GlobalMarketsPage />}
        />

        {/* Page Not Found */}
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Route>
    </Routes>
  );
}
