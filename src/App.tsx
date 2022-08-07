import { Product } from "./components/Product";
// import { products } from "./data/products";
import "./App.scss";
import { useProducts } from "./hooks/products";
import { ErrorMessage } from "./components/ErrorMessage";
import { Loader } from "./components/Loader";
import { Modal } from "./components/Modal";
import { CreateProduct } from "./components/CreateProduct";
import { useState } from "react";

function App() {
  const { loading, error, products } = useProducts();
  const [modal, setModal] = useState(true);

  return (
    <div className="App">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      {modal && (
        <Modal title="Create new product">
          <CreateProduct onCreate={() => setModal(false)} />
        </Modal>
      )}
    </div>
  );
}

export default App;
