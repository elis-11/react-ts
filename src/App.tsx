import { Product } from "./components/Product";
import { products } from "./data/products";
import "./App.scss";
import axios from "axios";
import { IProduct } from "./models";
import { useEffect, useState } from "react";

function App() {

const [products, setProducts]= useState<IProduct[]>([])

  const fetchProducts = async () => {
    const response = await axios.get<IProduct[]>(
      "https://fakestoreapi.com/products?limit=20"
    );
setProducts(response.data)
    
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
