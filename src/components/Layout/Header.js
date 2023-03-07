import React, { useContext } from "react";
import "./Header.css";
import CartContext from "../../store/cart-context";

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.quantity;
  }, 0);
  return (
    <header>
      <ul className='header'>
        <li>
          <a href='./index.html'>HOME</a>
        </li>
        <li>
          <a href='./#'>ABOUT</a>
        </li>
        <li>
          <a href='./about.html'>CONTACT</a>
        </li>
        <button className='cart-holder' onClick={props.onShowCart}>
          Cart
          <span> - {numberOfCartItems}</span>
        </button>
      </ul>
      <h1>The Generics</h1>
    </header>
  );
};

export default Header;
