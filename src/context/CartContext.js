import React,{ createContext, useState } from "react"

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let pos = cart.findIndex(x => x.id === item.id);
            cart[pos].quantity += quantity;
            setCart([...cart]);
        } else {
            setCart([...cart, {...item, quantity:quantity}]);
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (itemId) => {
        return cart.some(x => x.id === itemId);
    }

    const cartTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, cartTotal}}>
            { children}
        </CartContext.Provider>
    )
}

