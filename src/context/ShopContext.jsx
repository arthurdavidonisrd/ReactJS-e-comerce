import React, { createContext, useState } from 'react'
import { Products } from '../products'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}

    for(let i = 1; i < Products.length + 1; i++){{
        cart[i] = 0
    }}

    return cart;
}


const ShopContextProvider = (props) => {

    const [cartItens, setCartItens] = useState(getDefaultCart())

    const addToCart = (itemId) => {
        setCartItens((prev) => ({...prev, [itemId] : prev[itemId] + 1}))
    }

    const removeCart = (itemId) => {
        setCartItens((prev) => ({...prev, [itemId] : prev[itemId] - 1}))
    }


    const contextValue = {cartItens, addToCart, removeCart}



  return (
    <ShopContext.Provider value={contextValue}>
        {props.children} 
    </ShopContext.Provider>
)
}

export default ShopContextProvider
