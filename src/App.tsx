import { Product } from "./components/Product";
import { products } from "./data/products";
import "./App.scss";

function App() {
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
