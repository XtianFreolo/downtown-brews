import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MenuPage from "./pages/MenuPage/MenuPage";
import BeerWinePage from "./pages/BeerWinePage/BeerWinePage";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/beer-wine" element={<BeerWinePage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;