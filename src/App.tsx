// import { products } from "./data/products";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Navigation } from "./components/Navigation";
import { About } from "./pages/About";
import { ProductPage } from "./pages/ProductPage";

function App() {
  return (
    <>
    <Navigation/>
    <Routes>
      <Route path="/" element={<ProductPage />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  );
}
export default App;
