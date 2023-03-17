import CartContext from "./cart-context";
import React, { useState } from "react";
import axios from "axios";

const url = "https://crudcrud.com/api/3862eceb96f5467681886834b6a85461/";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  const addToCart = async (addItem, user) => {
    try {
      const index = items.findIndex((item) => item.id === addItem.id);
      if (index > -1) {
        window.alert("Item is already added to cart");
        return;
      } else {
        const res = await axios.post(url + JSON.parse(user), addItem);
        if (res.status) {
          fetchCartItem(user);
        } else {
          alert("Something went wrong");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFromCart = async (item, user) => {
    try {
      const res = await axios.delete(`${url}${JSON.parse(user)}/${item.id}`);
      if (res.status) {
        fetchCartItem(user);
      } else {
        window.alert("Something Went Wrong");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const addUserToLocal = (user) => {
    const enteredUserName = user.replace(/[@.]/g, "");
    localStorage.setItem("userName", JSON.stringify(enteredUserName));
  };

  const fetchCartItem = async (user) => {
    try {
      const res = await axios.get(`${url}${JSON.parse(user)}`);
      if (res.status) {
        setItems(res.data);
        const amount = res.data.map((item) => item.price * item.quantity);
        const totalAmount = amount.reduce((cur, next) => {
          return cur + next;
        }, 0);
        setTotalAmount(totalAmount);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    showCart: showCart,
    addToCart: addToCart,
    showCartHandler: showCartHandler,
    hideCartHandler: hideCartHandler,
    deleteFromCart: deleteFromCart,
    fetchCartItem: fetchCartItem,
    addUser: addUserToLocal,
  };
  // console.log(cartContext);
  return (
    <div>
      <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
    </div>
  );
};

export default CartProvider;
