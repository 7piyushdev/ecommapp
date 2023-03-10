import CartContext from "./cart-context";
import React, { useState } from "react";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItemToCartHandler = async (addedItem) => {
    try {
      const itemIndex = items.findIndex((item) => item.id === addedItem.id);
      if (itemIndex > -1) {
        alert("Item already added");
      } else {
        setItems([...items, addedItem]);
        setTotalAmount(totalAmount + addedItem.price * addedItem.quantity);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removeItemToCartHandler = (item) => {
    setItems(items.filter((items) => items.id !== item.id));
    setTotalAmount(totalAmount - item.price * item.quantity);
  };
  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  console.log(cartContext);
  return (
    <div>
      <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
    </div>
  );
};

export default CartProvider;
