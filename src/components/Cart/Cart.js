import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, clearCart, totalQuantity, calculateTotal, addItem, removeItem } = useContext(CartContext);

  const total = calculateTotal();

  const handleAddItem = (id) => {
    addItem(cart.find(item => item.id === id), 1);
  };

  const handleRemoveItem = (id) => {
    removeItem(id);
  };

  if (totalQuantity === 0) {
    return (
      <div>
        <h2>No hay productos en el carrito</h2>
        <p>Agrega productos desde la tienda</p>
        <Link to='/' className='Option'>Productos</Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map((p) => (
        <div key={p.id}>
          <CartItem {...p} />
          <button onClick={() => handleAddItem(p.id)}>+</button>
          <button onClick={() => handleRemoveItem(p.id)}>-</button>
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <button onClick={() => clearCart()} className='Button'>Vaciar carrito</button>
      <Link to='/checkout' className='Option'>Checkout</Link>
    </div>
  );
};

export default Cart;
