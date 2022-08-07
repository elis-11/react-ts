import { Product } from "./components/Product";
import { products } from "./data/products";
import "./App.scss";
import axios from "axios";
import { IProduct } from "./models";
import { useEffect } from "react";

function App() {
  const fetchProducts = async () => {
    const response = await axios.get<IProduct[]>(
      "https://fakestoreapi.com/products?limit=10"
    );
    console.log(response);
    
  };

  useEffect(() => {

fetchProducts()
  }, []);

  return (
    <div className="App">
      <div>Product</div>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}

export default App;
