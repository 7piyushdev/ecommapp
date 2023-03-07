import React, { useContext } from "react";
import "./ProductItem.css";
import CartContext from "../../../store/cart-context";

const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      image: props.image,
      quantity: props.quantity,
    });
  };
  return (
    <div className='color-content'>
      <div id='album1'>
        <h3>{props.title}</h3>
        <div className='image-container'>
          <div className='prod-images'>{props.image}</div>
        </div>
        <div className='prod-details'>
          <span>${props.price}</span>
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
