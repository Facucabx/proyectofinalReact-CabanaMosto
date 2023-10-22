import './Cart.css'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'


const Cart = () => {
    const { cart, clear, totalQuantity, cartTotal} = useContext(CartContext)

    if(totalQuantity === 0) {
        return(
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }

    return (
        <div className='contenedorCart'>
            {cart.map(item => <CartItem key={item.id} item={item} />)}
            <h3>Total: ${cartTotal()}</h3>
            <button onClick={()=> clear()} className="Button">Limpiar Carrito</button>
            <Link to='/checkout' className='Option'>Terminar compra</Link>
        </div>
    )
}

export default Cart
