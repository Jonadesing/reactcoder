import React, { useContext, useState, useEffect } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext/CartContext';
import { db } from '../../Service/firebase/firebasConfig';

const ItemDetail = ({ id, name, price, img, category, description, stock }) => {
  const [product, setProduct] = useState(null);
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const productRef = db.collection('products').doc(id);
        const doc = await productRef.get();

        if (doc.exists) {
          setProduct(doc.data());
        } else {
          console.log('No existe el producto con ID:', id);
        }
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };

    getProduct();
  }, [id]);

  const handleOnAdded = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id, name, price, img, category, description, stock,
    };
    addItem(item, quantity);
  };

  if (!product) {
    console.log('Cargando producto...');
    return <p>Cargando...</p>;
  }

  console.log('Producto cargado:', product);

  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{product.name}</h2>
      </header>
      <picture>
        <img src={product.img} alt={product.name} className="ItemImg" />
      </picture>
      <section>
        <p className='Info'>
          Categoría: {product.category}
        </p>
        <p className='Info'>
          Descripción: {product.description}
        </p>
        <p className='info'>
          Precio: ${product.price}
        </p>
        <p className='info'>
          Stock: {product.stock}
        </p>
      </section>
      <footer className='ItemFooter'>
        {quantityAdded > 0 ? (
          <Link to='/cart' className='Option'>Terminar compra</Link>
        ) : (
          <ItemCount initial={1} stock={product.stock} onAdd={(handleOnAdded)} />
        )}
      </footer>
    </article>
  );
};

export default ItemDetail;
