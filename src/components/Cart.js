import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

function Cart() {
    const { cartItems, removeFromCart } = useContext(CartContext);

    const handleCheckout = () => {
        // Implement your checkout logic here
        console.log('Proceeding to checkout...');
    };

    if (cartItems.length === 0) {
        return <div>Your cart is empty.</div>;
    }

    return (
        <div>
            <h2>Your Cart</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.ID}>
                        {item.name} - ${item.price} x {item.quantity}
                        <button onClick={() => removeFromCart(item.ID)}>Remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={handleCheckout}>Checkout</button>
        </div>
    );
}

export default Cart;
