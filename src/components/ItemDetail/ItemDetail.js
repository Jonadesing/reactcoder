import React, { useContext, useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext/CartContext';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const[quantityAdded, seteQuantityAdded]= useState(0)

    const { addItem} = useContext(CartContext)

    const handleOnAdded = (quantity) => {
        seteQuantityAdded(quantity)

        const item = {
            id, name,price
        }

        addItem(item, quantity)
    }
        return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>   
                <img src={img} alt={name} className='ItemImg' />
            </picture>
            <section>

                <p className='Info'>
                    Categoría: {category}
                </p>
                <p className='Info'>
                    Descripción: {description}
                </p>
                <p className='info'>
                    Precio: ${price}
                </p>
                <p className='info'>
                    Stock: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='Option'>Terminar compra</Link>
                    ):(
            <ItemCount initial={1} stock={stock} onAdd={(handleOnAdded)}  />
                    )
                }
            </footer>
        </article>
    );
};
  
export default ItemDetail;
