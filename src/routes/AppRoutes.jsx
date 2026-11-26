
import { Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProductsPage from "../pages/ProductsPage";
import NotFoundPage from "../pages/NotFoundPage";

export default function AppRoutes() {
  return (
    <Routes>

      <Route element={<MainLayout />}>

        {/* Homepage */}

        <Route
          index
          element={<HomePage />}
        />

        {/* About Us Page */}

        <Route
          path="about"
          element={<AboutPage />}
        />

        {/* Product Catalogue Page */}

        <Route
          path="products"
          element={<ProductsPage />}
        />

        {/* Future Product Details Page */}

        {/* Future Farmers Page */}

        {/* Future Quality Standards Page */}

        {/* Future Global Markets Page */}

        {/* Future Contact Page */}

        {/* Future Legal Pages */}

        {/* Not Found Page */}

        <Route
          path="*"
          element={<NotFoundPage />}
        />

      </Route>

    </Routes>
  );
}
