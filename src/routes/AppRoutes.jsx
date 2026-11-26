
import { Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import NotFoundPage from "../pages/NotFoundPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>

        {/* Homepage */}
        <Route index element={<HomePage />} />

        {/* About Us Page */}
        <Route path="about" element={<AboutPage />} />

        {/* Future Dedicated Pages */}

        {/* 404 Page */}
        <Route path="*" element={<NotFoundPage />} />

      </Route>
    </Routes>
  );
}
