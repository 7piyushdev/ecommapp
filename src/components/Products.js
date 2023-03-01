import React from "react";
import "./Products.css";

const Products = (props) => {
  return (
    <div className='product'>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.price}</p>
    </div>
  );
};

export default Products;
