import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, name, img, price, stock}) =>{

    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="Itemheader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info Price">
                   Precio:  ${price}
                </p>
                <p className="Info Stock">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
            <Link to={`/item/${id}`}>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item