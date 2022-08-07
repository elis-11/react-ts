import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { IProduct } from "../models";

export const useProducts=() => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')
  
    const fetchProducts = async () => {
      try {
        setError('')
        setLoading(true); // start loading Data
        const response = await axios.get<IProduct[]>(
          "https://fakestoreapi.com/products?limit=20"
          );
          setProducts(response.data);
          setLoading(false); //finish loading Data
        } catch (err: unknown) {
          const error=err as AxiosError;
          setLoading(false);
          setError(error.message)
        }
    };
  
    useEffect(() => {
      fetchProducts();
    }, []);
  return {products, error, loading}
}