
import { Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>

        {/* Homepage */}
        <Route index element={<HomePage />} />

        {/* Future dedicated pages */}

        {/* About Us */}

        {/* Product Catalogue */}

        {/* Product Details */}

        {/* Our Farmers */}

        {/* Quality & Standards */}

        {/* Global Markets */}

        {/* Contact Us */}

        {/* Privacy Policy & Terms */}

        {/* Fallback Route */}
        <Route path="*" element={<NotFoundPage />} />

      </Route>
    </Routes>
  );
}
