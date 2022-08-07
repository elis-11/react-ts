-- 1
import { createElement as e, useState } from "react";

function App() {

const [count, setCount ]= useState(0)
  // return React.createElement(type: 'h1', props: {}, children: 'Hello TypeScrypt')
  return e("div", { className: "App" }, [
    e("h1", { className: "container", key: 1 }, `TypeScrypt ${count}`),
    e(
      "button",
      { className: "red", key: 2, onClick: () => setCount(count + 1) },
      "Click!"
    ),
  ]);
}

-- 2
https://fakestoreapi.com/products  -DATA for data/products.ts

npm i axios 51:30

https://fakestoreapi.com -fetch DATA
