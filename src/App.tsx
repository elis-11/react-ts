import { Product } from "./components/Product";
import { products } from "./data/products";
import "./App.scss";
import axios from "axios";
import { IProduct } from "./models";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true); // start loading Data
    const response = await axios.get<IProduct[]>(
      "https://fakestoreapi.com/products?limit=20"
    );
    setProducts(response.data);
    setLoading(false); //finish loading Data
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <div>Product</div>
      {loading && <p className="loading">Loading...</p>}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}

export default App;
