import React, { useContext } from "react";
import "./ProductItem.css";
import { useNavigate } from "react-router-dom";
import CartContext from "../../../store/cart-context";

const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);
  const navigate = useNavigate();

  const handleImageClick = (id) => {
    navigate(`/store/${id}`);
  };

  const handleSubmit = ({ item }) => {
    const userName = localStorage.getItem("userName");
    cartCtx.addToCart({ ...item, quantity: 1 }, userName);
  };
  return (
    <div id='color-content'>
      <div id='album1'>
        <h3>{props.item.title}</h3>
        <div className='image-container'>
          <img
            src={props.item.imageUrl}
            alt={props.item.imageUrl}
            onClick={() => handleImageClick(props.item.id)}
          />
        </div>
        <div className='prod-details'>
          <span> ${props.item.price}</span>
          <button
            className='shop-item-button'
            type='button'
            onClick={() => handleSubmit(props)}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
