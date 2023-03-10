import React, { useContext } from "react";
import "./ProductItem.css";
import CartContext from "../../../store/cart-context";

const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      amount: amount,
      price: props.price,
      image: props.image,
      quantity: props.quantity,
    });
  };
  return (
    <div id='color-content'>
      <div id='album1'>
        <h3>{props.title}</h3>
        <div className='image-container'>
          <img src={props.image} alt={props.title} />
        </div>
        <div className='prod-details'>
          <span>{price}</span>
          <button
            className='shop-item-button'
            type='button'
            onClick={addToCartHandler}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
