import React from "react";
import ProductItem from "./ProductItem/ProductItem";
import "./ProductItem/ProductItem.css";

const PRODUCTS = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const AvailableProducts = () => {
  return (
    <section className='container'>
      <h2>Music</h2>
      <div>
        {PRODUCTS.map((item) => {
          return <ProductItem key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
};

export default AvailableProducts;
