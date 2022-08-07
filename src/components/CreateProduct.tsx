import axios from "axios";
import React, { useState } from "react";
import { IProduct } from "../models";
import { ErrorMessage } from "./ErrorMessage";
import "../App.scss";

const productData: IProduct = {
  title: "",
  price: 23.4,
  description: "Product description",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 34,
    count: 17,
  },
};

interface CreateProductProps {
  onCreate: () => void;
}

export function CreateProduct({onCreate}: CreateProductProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(""); // clear error

    if (value.trim().length === 0) {
      setError("Please enter valid title!");
      return;
    }

    productData.title = value;

    const response = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      productData
    );
    onCreate()
  };

  const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Enter product title..."
        value={value}
        // onChange={(e) => setValue(e.target.value)}
        onChange={changeHandler}
      />

      {error && <ErrorMessage error={error} />}

      <button type="submit">Create</button>
    </form>
  );
}
