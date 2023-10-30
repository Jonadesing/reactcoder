import { useContext } from 'react'
import cart from './assets/cart.svg'
import { CartContext } from '../../Context/CartContext/CartContext';
import { Link } from 'react-router-dom'
const CardWidget = () => {
  const {totalQuantity} = useContext(CartContext)

  return(
    <Link to='./cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block':'none'}}>
        <img className='CartImg' src={cart} alt='cart-widget'/>
        { totalQuantity }
    </Link>
  )
}

export default CardWidget