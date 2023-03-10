import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  console.log(totalAmount);

  const cartItemRemoveHandler = (item) => {
    cartCtx.removeItem(item);
  };

  const cartItems = (
    <table className={classes["cart-items"]}>
      <thead>
        <tr>
          <th scope='col'>ITEM</th>
          <th scope='col'>PRICE</th>
          <th scope='col'>QUANTITY</th>
          <th scope='col'>REMOVE</th>
        </tr>
      </thead>
      <tbody>
        {cartCtx?.items?.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            img={item.image}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
          />
        ))}
      </tbody>
    </table>
  );
  return (
    <Modal onClose={props.onClose}>
      <section className={classes.section}>
        <h2 className={classes.cart}> CART </h2>
      </section>
      {cartItems}
      <h2 className={classes.h2}> Total Rs. {totalAmount}</h2>
    </Modal>
  );
};

export default Cart;
