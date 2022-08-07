import { Product } from "./components/Product";
// import { products } from "./data/products";
import "./App.scss";
import { useProducts } from "./hooks/products";
import { ErrorMessage } from "./components/ErrorMessage";
import { Loader } from "./components/Loader";

function App() {
  const { loading, error, products } = useProducts();

  return (
    <div className="App">
      <div>Product</div>
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}

export default App;
