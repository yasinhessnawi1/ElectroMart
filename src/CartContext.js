import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(prevItems => {
            // Check if product is already in the cart
            const itemExists = prevItems.find(item => item.ID === product.ID);
            if (itemExists) {
                // Increase quantity
                return prevItems.map(item =>
                    item.ID === product.ID ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            // Add new item to cart
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCartItems(prevItems => {
            return prevItems.filter(item => item.ID !== productId);
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}
