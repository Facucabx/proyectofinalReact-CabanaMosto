import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart)
  const addItem = (item, quantity) => {
    if(isInCart(item.id)){
        setCart(cart.map((product)=>{
            if(product.id === item.id){
                return {...product, quantity:product.quantity + quantity}
            }else{
                return product
            }
        }))
    }else{
        setCart([...cart, {...item, quantity}])
    }
  }

  const clear = () => {
    setCart([]);
  }

  const isInCart = (id) => {
    return cart.some((item) => item.id === id)
  }

  const deleteItem = (id) => {
    setCart(cart.filter((item)=> item.id !== id))
  }

  const cartQuantity = () =>{
    return cart.reduce((item, acc)=> acc + item.quantity, 0)
  }
  const total = () =>{
    return cart.reduce((acc, item)=> acc +item.quantity * item.price, 0)
  }

  return (
    <CartContext.Provider value={{ cart, addItem, clear, deleteItem, cartQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
// import { createContext, useState } from "react"

// export const CartContext = createContext({
//     cart:[]
// })

// export const CartProvider = ({children}) => {
//     const [cart, setCart] = useState([])

//     console.log(cart)

//     const addItem = (item, quantity) => {
//         if(!isInCart(item.id)) {
//             setCart(prev => [...prev, {...item, quantity}])
//         } else {
//             console.error('El producto ya fue agregado')
//         }
//     }

//     const removeItem = (itemId) => {
//         const cartUpdated = cart.filter(prod => prod.id !== itemId)
//         setCart(cartUpdated)
//     }

//     const clearCart = () => {
//         setCart([])
//     }

//     return (
//         <CartContext.Provider value={{ cart, addItem, removeItem, clearCart}}>
//             { children}
//         </CartContext.Provider>
//     )
// }
