import "../App.scss";
import { IProduct } from "../models";

interface ProductProps{
    product: IProduct
}

export const Product = ({product}: ProductProps) => {
    
  return <div className="Product">
    <img src={product.image}/>
    {product.title}
    </div>;
};
