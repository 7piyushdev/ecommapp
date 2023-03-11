import React, { useContext } from "react";
import "./Header.css";
import CartContext from "../../store/cart-context";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return parseInt(currNumber) + parseInt(item.quantity);
  }, 0);
  return (
    <header>
      <ul className='header'>
        <li>
          <NavLink to='/home'>HOME</NavLink>
        </li>
        <li>
          <NavLink to='/store'>STORE</NavLink>
        </li>
        <li>
          <NavLink to='/about'>ABOUT</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>CONTACT</NavLink>
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
