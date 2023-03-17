import React, { useContext } from "react";
import "./Header.css";
import CartContext from "../../store/cart-context";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../store/Auth-Context";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  const logoutHandler = () => {
    authCtx.logout();
    navigate("./login");
  };

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
        <li>{!authCtx.isLoggedIn && <NavLink to='/login'>LOGIN</NavLink>}</li>
        <button className='cart-holder' onClick={props.showCartHandler}>
          Cart
          <span> - {numberOfCartItems}</span>
        </button>
      </ul>
      {authCtx.isLoggedIn && (
        <button className='btn btn-danger' onClick={logoutHandler}>
          Logout
        </button>
      )}
      <h1>The Generics</h1>
    </header>
  );
};

export default Header;
