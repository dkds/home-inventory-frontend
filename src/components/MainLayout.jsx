import { Navigate, Route, Routes } from "react-router";
import AppHeader from "./AppHeader";
import Home from "./Home";
import ItemList from "./ItemList";

export default function MainLayout() {
  return (
    <div className="min-h-full">
      <AppHeader />
      <Routes>
        <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<Home />} />
        <Route path="items" element={<ItemList />} />
      </Routes>
    </div>
  );
}
