import { Product } from "./components/Product";
import { products } from "./data/products";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Product product={products[0]}/> 
      <Product product={products[1]}/> 
      <Product product={products[2]}/> 
    </div>
  );
}

export default App;
