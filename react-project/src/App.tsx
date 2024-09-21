import { useState } from "react";
import "./App.css";
import Product from "./components/Product";

export interface IProduct {
  id: number;
  title: string;
  price: number;
}

function App() {
  const [products, setProducts] = useState<IProduct[]>([
    {
      id: 1,
      title: "iPhone",
      price: 3000,
    },
    {
      id: 2,
      title: "Macbook",
      price: 4000,
    },
  ]);

  const handleAddToCart = (id: number) => {
    console.log("clicked:", id);
  };
  return (
    <>
      {products.map((item) => (
        <Product
          product={item}
          key={item.id}
          handleAddToCartClick={handleAddToCart}
        />
      ))}
    </>
  );
}

export default App;
