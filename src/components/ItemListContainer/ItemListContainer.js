
import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import {collection, query, where, getDocs, } from 'firebase/firestore';
import { db } from '../../Service/firebase/firebasConfig';

const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()
    

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
        ? query(collection(db, 'products'), where('category', '==', categoryId))
        : collection(db, 'products')

        getDocs(collectionRef)
            .then(response => {
                const productAdapted = response.docs.map(doc=>{
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProducts(productAdapted)
            })
            .catch(error =>{
                console.log(error)
            })
            .finally (() =>{
                setLoading(false)
            })
    },[categoryId])

    return(
            <div>
                <h1>{greeting}</h1>
                <ItemList products = {products}/>
            </div>
    )
}
export default ItemListContainer;