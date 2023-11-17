import React, { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../Context/CartContext/CartContext';
import { Link } from 'react-router-dom';
import './ItemDetail.css';

const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext);
    const [redirect, setRedirect] = useState(false);

    const handleToCart = (cantidad) => {
        addItem(item, cantidad);
        setRedirect(true);
    };

    return (
        <div className='container'>
            <div className='producto-detalle'>
                <img src={item.img} alt={item.name} />
                <div>
                    <h4>{item.name}</h4>
                    <p>Precio: ${item.price}</p>
                    <p>Categoría: {item.category}</p>
                    <p>Descripción: {item.description}</p>
                    <ItemCount stock={item.stock} onAdd={handleToCart} />
                    <div className="buttons">
                    <Link to="/Productos">
                            <button className={`button ${redirect ? 'hidden' : ''}`}>Seguir Comprando</button>
                        </Link>
                        <Link to="/Carrito">
                            <button className={`button ${!redirect ? 'hidden' : ''}`}>Ir al carrito</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
