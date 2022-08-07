import { useState } from "react";
import "../App.scss";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

export const Product = ({ product }: ProductProps) => {
  const [details, setDetails] = useState(false);

  return (
    <div className="Product">
      <img src={product.image} alt={product.title} />
      <p>{product.title}</p>
      <p>{product.price}</p>
      <button onClick={() => setDetails((prev) => !prev)}>
        {details ? "Hide Details" : "Show Details"}
      </button>
      {details && (
        <div>
          <p>{product.description}</p>
          <p>
            Rate:{" "}
            <span style={{ fontWeight: "bold" }}>{product.rating.rate}</span>
          </p>
        </div>
      )}
    </div>
  );
};
