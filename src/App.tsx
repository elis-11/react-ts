import { Product } from "./components/Product";
import { products } from "./data/products";
import "./App.scss";
import { useProducts } from "./hooks/products";

function App() {
  const {loading, error, products}=useProducts()

  return (
    <div className="App">
      <div>Product</div>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}

export default App;
