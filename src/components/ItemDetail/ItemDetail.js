import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({producto }) => {
    const { id, name, img, category, description, price, stock}=producto
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }
        addItem(item, quantity)
    }

    return (

        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg' />
            </picture>
            <section>
                <p className='Info'>
                    Categoria: {category}
                </p>
                <p className='Info'>
                    Descripción: {description}
                </p>
                <p className='Info'>
                    Precio: ${price}
                </p>
            </section>
            <footer className='ItemFooter'>
                <div className='contendorFooter' >
                {
                    quantityAdded > 0 ? 
                    (<div><Link to='/cart' className='Option'>Ir al carrito</Link></div>)
                    : (<div><ItemCount initial={1} stock={stock} onAdd={handleOnAdd} /></div>)

                }
                </div>
            </footer>
        </article>

    )
}
export default ItemDetail