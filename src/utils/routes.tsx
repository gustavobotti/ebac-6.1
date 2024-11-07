import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { ShopPage } from "../Pages/Shop";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/shop/1" element={<ShopPage />} />
  </Routes>
);
