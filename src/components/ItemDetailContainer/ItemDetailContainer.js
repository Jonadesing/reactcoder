import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../Service/firebase/firebasConfig';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);
        const docRef = doc(db, 'products', itemId);

        getDoc(docRef)
            .then(response => {
                console.log('Response from Firestore:', response);
                const data = response.data();
                const productAdapted = { id: response.id, ...data };
                setProduct(productAdapted);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [itemId]);

    return (
        <div className='ItemDetailContainer'>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <ItemDetail item={product} />
            )}
        </div>
    );
};

export default ItemDetailContainer;

