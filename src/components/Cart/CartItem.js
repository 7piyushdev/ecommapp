import React from "react";

const CartItem = (props) => {
  return (
    <>
      <tr>
        <th scope='row'>
          {props.img} {props.title}
        </th>
        <td>{props.price}</td>
        <td>{props.quantity}</td>

        <td>
          <button onClick={props.onRemove}>−</button>
        </td>
      </tr>
    </>
  );
};

export default CartItem;
