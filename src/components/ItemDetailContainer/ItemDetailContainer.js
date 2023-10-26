import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import {getProductsById} from '../../asynMocks'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProductsById('')
        .then(response => {
            setProduct(response)
    })
    .catch(error => {
        console.error(error)
    })
}, [])

return (
    <div className='ItemDetailContainer' >
        <ItemDetail {...product} />
    </div>
    )
}

export default ItemDetailContainer
