import { HashRouter, Route, Routes } from "react-router";
import MainLayout from "@/components/MainLayout";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
