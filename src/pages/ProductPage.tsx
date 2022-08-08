import React, { useContext } from 'react'
import { CreateProduct } from '../components/CreateProduct';
import { ErrorMessage } from '../components/ErrorMessage';
import { Loader } from '../components/Loader';
import { Modal } from '../components/Modal';
import { Product } from '../components/Product';
import { ModalContext } from '../context/ModalContext';
import { useProducts } from '../hooks/products';
import { IProduct } from '../models';

export const ProductPage = () => {
    const { loading, error, products, addProduct } = useProducts();
    const { modal, open, close } = useContext(ModalContext);
    // const { modal, open, close: closeModal } = useContext(ModalContext);  // rename close to closeModa
  
    const createHandler = (product: IProduct) => {
      close();
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
          <Modal title="Create new product" onClose={close}>
            {/* <Modal title="Create new product" onClose={() => setModal(false)}> */}
            <CreateProduct onCreate={createHandler} />
          </Modal>
        )}
        <button onClick={open} className="Add">
        {/* <button onClick={() => setModal(true)} className="Add"> */}
          Add Product
        </button>
      </div>
    );
}
