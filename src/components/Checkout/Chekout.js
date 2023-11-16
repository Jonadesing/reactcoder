import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext/CartContext';
import { db } from '../../Service/firebase/firebasConfig';

const Checkout = () => {
  const { cart, totalQuantity, total, clearCart } = useContext(CartContext);

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Enviar la información al servidor
      const response = await fetch('URL_DE_TU_API', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Enviar los datos a Firestore después de procesar el pago
        await db.collection('pedidos').add({
          productos: cart,
          totalQuantity,
          total,
          informacionEnvio: formData,
          // Otros datos que desees almacenar
        });

        console.log('Pedido procesado con éxito');
        // Puedes realizar acciones adicionales después de procesar el pedido

        // Limpia el carrito después de procesar el pedido
        clearCart();
      } else {
        console.error('Error al procesar el pedido');
      }
    } catch (error) {
      console.error('Error de red', error);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      {cart.map((producto) => (
        <div key={producto.id}>
          <p>{producto.nombre}</p>
          <p>Cantidad: {producto.cantidad}</p>
          <p>Precio: ${producto.precio}</p>
        </div>
      ))}
      <h3>Cantidad Total: {totalQuantity}</h3>
      <h3>Precio Total: ${total}</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />

        <label htmlFor="address">Dirección:</label>
        <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} required />

        <label htmlFor="cardNumber">Número de tarjeta:</label>
        <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} required />

        <label htmlFor="expirationDate">Fecha de vencimiento:</label>
        <input type="text" id="expirationDate" name="expirationDate" value={formData.expirationDate} onChange={handleInputChange} required />

        <label htmlFor="cvv">CVV:</label>
        <input type="text" id="cvv" name="cvv" value={formData.cvv} onChange={handleInputChange} required />

        <button type="submit">Realizar Pedido</button>
      </form>
    </div>
  );
};

export default Checkout;
