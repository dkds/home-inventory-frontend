import { HashRouter, Route, Routes } from "react-router";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/*" element={<Dashboard />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
