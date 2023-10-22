import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import cart from './assets/cart.svg';  // Importa la imagen

const CartWidget = () => {
    const { cart: cartItems } = useContext(CartContext);  // Cambia el nombre de la variable para evitar confusiones

    // Calcula la cantidad total en el carrito sumando las cantidades de los elementos en el carrito
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
            <div className='contenedorWid'>
                <div className='contenedorNumero'>
                {totalQuantity}
                </div>
            <div><img className='CartImg' src={cart} alt='cart-widget' /></div>
            
            </div>
            
        </Link>
    );
}

export default CartWidget;