import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext/CartContext';

const CartItem = ({ id, name, price, img, quantity }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="CartItem">
      <img src={img} alt={name} className="CartItemImg" />
      <div className="CartItemDetails">
        <h3>{name}</h3>
        <p>Precio: ${price}</p>
        <p>Cantidad: {quantity}</p>
      </div>
      <button onClick={() => removeItem(id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;