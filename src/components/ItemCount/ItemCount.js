import React, { useState } from 'react';
import './ItemCount.css';
import { useNavigate } from 'react-router-dom';

const ItemCount = ({ stock, onAdd }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const incrementar = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementar = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {

    onAdd(quantity);


    navigate(''); 
  };

  return (
    <div className='Counter'>
      <div className='Controls'>
        <button className='Button' onClick={decrementar}>
          -
        </button>
        <h4 className='Number'>{quantity}</h4>
        <button className='Button' onClick={incrementar}>
          +
        </button>
      </div>
      <div>
        <button className='Button' onClick={addToCart} disabled={!stock}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
