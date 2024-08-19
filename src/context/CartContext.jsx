'use client';
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [qtyInCart, setQtyInCart] = useState(0);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
        setQtyInCart(qtyInCart + 1);
    };

    return (
        <CartContext.Provider value={{ cartItems, qtyInCart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
