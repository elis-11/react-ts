import { Product } from "./components/Product";
// import { products } from "./data/products";
import "./App.scss";
import { useProducts } from "./hooks/products";
import { ErrorMessage } from "./components/ErrorMessage";
import { Loader } from "./components/Loader";
import { Modal } from "./components/Modal";
import { CreateProduct } from "./components/CreateProduct";
import { useState } from "react";
import { IProduct } from "./models";

function App() {
  const { loading, error, products, addProduct } = useProducts();
  const [modal, setModal] = useState(false);

  const createHandler = (product: IProduct) => {
    setModal(false);
    addProduct(product);
  };

  return (
    <div className="App">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
        ))}
      {modal && (
        <Modal title="Create new product" onClose={() => setModal(false )}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
      <button onClick={() => setModal(true)}className="Add">Add Product</button>
    </div>
  );
}
//! 1:23:54
export default App;
